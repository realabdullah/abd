import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
    articles: defineCollection({
      type: "page",
      source: "articles/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        published: z.date(),
        date: z.string(),
      }),
    }),
    lab: defineCollection({
        type: "page",
        source: "lab/**/*.md",
    }),
    projects: defineCollection({
        type: "data",
        source: "projects/**/*.json",
        schema: z.object({
            name: z.string(),
            url: z.string(),
            description: z.string(),
            thumbnail: z.string(),
            status: z.string()
        })
    }),
  },
});
