#!/usr/bin/env node

/**
 * Fetches all posts from the TinaCMS Content API and writes them
 * as markdown files to the posts/ directory.
 *
 * Temporary migration script — intended to be run once via GitHub Actions
 * to pull the canonical content from Tina Cloud into the repo.
 *
 * Required env vars: TINA_CLIENT_ID, TINA_TOKEN, GITHUB_REPOSITORY
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const TINA_CLIENT_ID = process.env.TINA_CLIENT_ID;
const TINA_TOKEN = process.env.TINA_TOKEN;
const REPO = process.env.GITHUB_REPOSITORY; // owner/repo

if (!TINA_CLIENT_ID || !TINA_TOKEN || !REPO) {
  console.error(
    "Missing required env vars: TINA_CLIENT_ID, TINA_TOKEN, GITHUB_REPOSITORY",
  );
  process.exit(1);
}

const [owner, repo] = REPO.split("/");
const API_URL = `https://content.tinajs.io/content/${TINA_CLIENT_ID}/github/${owner}/${repo}`;

// ---------------------------------------------------------------------------
// GraphQL helpers
// ---------------------------------------------------------------------------

async function gqlRequest(query, variables = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": TINA_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`TinaCMS API ${res.status}: ${text}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(
      `TinaCMS GraphQL errors:\n${JSON.stringify(json.errors, null, 2)}`,
    );
  }
  return json.data;
}

// ---------------------------------------------------------------------------
// Rich-text AST → Markdown serializer
//
// TinaCMS stores rich-text body as a Plate/Slate-style AST.  We convert it
// back to the same markdown that lives on disk.
// ---------------------------------------------------------------------------

function astToMarkdown(node, ctx = { listDepth: 0, ordered: false }) {
  if (!node) return "";

  // Text leaf
  if (node.type === "text" || (!node.type && typeof node.text === "string")) {
    let t = node.text ?? "";
    if (node.code) t = `\`${t}\``;
    if (node.bold) t = `**${t}**`;
    if (node.italic) t = `*${t}*`;
    if (node.strikethrough) t = `~~${t}~~`;
    return t;
  }

  const children = (node.children ?? [])
    .map((c) => astToMarkdown(c, ctx))
    .join("");

  switch (node.type) {
    case "root":
      return children;

    case "h1":
      return `# ${children}\n\n`;
    case "h2":
      return `## ${children}\n\n`;
    case "h3":
      return `### ${children}\n\n`;
    case "h4":
      return `#### ${children}\n\n`;
    case "h5":
      return `##### ${children}\n\n`;
    case "h6":
      return `###### ${children}\n\n`;

    case "p":
      return `${children}\n\n`;

    case "blockquote":
      return (
        children
          .trimEnd()
          .split("\n")
          .map((l) => `> ${l}`)
          .join("\n") + "\n\n"
      );

    case "code_block": {
      const lang = node.lang ?? "";
      return `\`\`\`${lang}\n${children.trimEnd()}\n\`\`\`\n\n`;
    }

    case "ul":
    case "ol": {
      const inner = (node.children ?? [])
        .map((c, i) =>
          astToMarkdown(c, {
            listDepth: ctx.listDepth + 1,
            ordered: node.type === "ol",
            index: i,
          }),
        )
        .join("");
      return ctx.listDepth === 0 ? inner + "\n" : inner;
    }

    case "li": {
      const indent = "  ".repeat(Math.max(0, ctx.listDepth - 1));
      const bullet = ctx.ordered ? `${(ctx.index ?? 0) + 1}. ` : "* ";
      const content = (node.children ?? [])
        .map((c) => astToMarkdown(c, ctx))
        .join("");
      return `${indent}${bullet}${content.trimEnd()}\n`;
    }

    // "list item content" wrapper used by Plate
    case "lic":
      return children;

    case "a":
      return `[${children}](${node.url ?? ""})`;

    case "img":
      return `![${node.alt ?? ""}](${node.url ?? ""})\n\n`;

    case "hr":
      return "---\n\n";

    case "html":
    case "html_inline":
      return node.value ?? children;

    case "break":
      return "\n";

    default:
      // Unknown node — pass children through
      return children;
  }
}

// ---------------------------------------------------------------------------
// YAML frontmatter helpers
// ---------------------------------------------------------------------------

function yamlValue(val) {
  if (val === null || val === undefined) return "";
  if (typeof val === "string") {
    // Quote strings that contain special chars
    if (/[:#{}[\],&*?|>!%@`'"]/.test(val) || val.includes("\n")) {
      // Use block scalar for multi-line, single quotes otherwise
      if (val.includes("\n")) return `|\n  ${val.replace(/\n/g, "\n  ")}`;
      return `'${val.replace(/'/g, "''")}'`;
    }
    return val;
  }
  return String(val);
}

function buildFrontmatter(fields) {
  const lines = ["---"];
  for (const [key, val] of Object.entries(fields)) {
    if (val === undefined || val === null) continue;
    if (Array.isArray(val)) {
      lines.push(`${key}:`);
      for (const item of val) {
        lines.push(`  - ${yamlValue(item)}`);
      }
    } else {
      lines.push(`${key}: ${yamlValue(val)}`);
    }
  }
  lines.push("---");
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Fetch all posts (handles pagination)
// ---------------------------------------------------------------------------

const POSTS_QUERY = `
query PostConnection($after: String) {
  postConnection(first: 50, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    totalCount
    edges {
      node {
        _sys {
          filename
          relativePath
        }
        _values
      }
    }
  }
}`;

async function fetchAllPosts() {
  const posts = [];
  let after = null;

  while (true) {
    const data = await gqlRequest(POSTS_QUERY, { after });
    const conn = data.postConnection;

    for (const edge of conn.edges ?? []) {
      posts.push(edge.node);
    }

    if (!conn.pageInfo.hasNextPage) break;
    after = conn.pageInfo.endCursor;
  }

  return posts;
}

// ---------------------------------------------------------------------------
// Write a post to disk
// ---------------------------------------------------------------------------

function writePost(postsDir, node) {
  const values = node._values;
  const filename = node._sys.relativePath; // e.g. "hello-world.md"

  // Separate frontmatter fields from body
  const { body, _collection, _template, ...frontmatterFields } = values;

  // Convert body
  let bodyMarkdown = "";
  if (typeof body === "string") {
    bodyMarkdown = body;
  } else if (body && typeof body === "object") {
    bodyMarkdown = astToMarkdown(body).trimEnd();
  }

  const frontmatter = buildFrontmatter(frontmatterFields);
  const content = `${frontmatter}\n\n${bodyMarkdown}\n`;

  const filePath = join(postsDir, filename);
  writeFileSync(filePath, content, "utf-8");
  console.log(`  wrote ${filePath}`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Fetching posts from TinaCMS (${API_URL}) …`);
  const posts = await fetchAllPosts();
  console.log(`Fetched ${posts.length} post(s).`);

  const postsDir = join(process.cwd(), "posts");
  mkdirSync(postsDir, { recursive: true });

  for (const post of posts) {
    writePost(postsDir, post);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
