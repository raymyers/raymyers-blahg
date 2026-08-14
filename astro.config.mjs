import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Draft posts still build at /post/<slug> so they can be shared by link, but
// they must stay out of the sitemap. The content collection isn't available
// here, so read the frontmatter directly.
const postsDir = new URL("./posts", import.meta.url).pathname;
const draftSlugs = fs
  .readdirSync(postsDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => fs.readFileSync(path.join(postsDir, file), "utf8"))
  .map((source) => source.split(/^---\s*$/m)[1] ?? "")
  .filter((frontmatter) => /^draft:\s*true\s*$/m.test(frontmatter))
  .map((frontmatter) => frontmatter.match(/^slug:\s*(\S+)\s*$/m)?.[1])
  .filter(Boolean);

// https://astro.build/config
export default defineConfig({
  site: "https://raymyers.org/",
  base: "/",
  redirects: {
    "/post/zed-creator-calls-spade-a-spade":
      "/post/zig-creator-calls-spade-a-spade",
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, "");
        return !draftSlugs.some((slug) => pathname === `/post/${slug}`);
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
});
