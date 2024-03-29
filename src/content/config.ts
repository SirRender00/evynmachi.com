import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    summary: z.string().optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()),
    externalLink: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z
      .string()
      .or(z.date().transform((val) => String(new Date(val).getFullYear))),
    sourceURL: z.string().optional(),
    docsURL: z.string().optional(),
    demoURL: z.string().optional(),
    blogURL: z.string().optional(),
  }),
});

export const collections = { blog, project };
