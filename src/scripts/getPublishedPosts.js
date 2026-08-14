import { getCollection } from "astro:content";

// Posts marked `draft: true` still build at /post/<slug>, but are kept out of
// every listing, the tag pages, the RSS feed and the sitemap.
export default async function getPublishedPosts() {
  return await getCollection("posts", ({ data }) => !data.draft);
}
