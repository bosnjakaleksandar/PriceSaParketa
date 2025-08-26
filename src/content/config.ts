import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default(["post"]),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    language: z.enum(["sr", "en"]),
    hero: z.object({
      title: z.string(),
      description: z.string(),
      buttonText: z.string().optional(),
      buttonLink: z.string().optional(),
    }),
  }),
});

export const collections = {
  blog,
  pages,
};
