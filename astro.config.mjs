import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import remarkCodeTitles from 'remark-code-titles';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCodeTitles],
    extendDefaultPlugins: true,
  },
  integrations: [tailwind(), mdx()]
});