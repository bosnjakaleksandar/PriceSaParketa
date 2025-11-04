import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    language: z.enum(['sr', 'en']).default('sr'),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default(['post']),
  }),
});

const blogEn = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    language: z.enum(['sr', 'en']).default('en'),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default(['post']),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    language: z.enum(['sr', 'en']),
    hero: z.object({
      title: z.string(),
      description: z.string().optional(),
      subtitle: z.string().optional(),
      buttonText: z.string().optional(),
      buttonLink: z.string().optional(),
    }),
    sections: z
      .array(
        z.object({
          className: z.string(),
          title: z.string(),
          description: z.string(),
          image: z.string().optional(),
          imagePosition: z.enum(['left', 'right']).default('right'),
          links: z
            .array(
              z.object({
                href: z.string(),
                imageSrc: z.string(),
                alt: z.string(),
              })
            )
            .optional(),
          buttonText: z.string().optional(),
          buttonLink: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  blog,
  'blog-en': blogEn,
  pages,
};
