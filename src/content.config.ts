import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const articulos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articulos" }),
  schema: z.object({
    name: z.string(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { articulos };
