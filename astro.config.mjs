import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://raymyers.org/",
  base: "/",
  redirects: {
    "/post/zed-creator-calls-spade-a-spade":
      "/post/zig-creator-calls-spade-a-spade",
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
    },
  },
});
