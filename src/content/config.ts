import { defineCollection, z } from 'astro:content';

const programsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string().startsWith('/uploads/programs/'),
    gallery: z.string(),
    summary: z.string(),
    days: z.string().optional(),
    order: z.number().optional(),
    availability: z.string().optional(),
    image_position: z.string().optional(),
    draft: z.boolean().default(false).optional(),
  }),
});

const classesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string().startsWith('/uploads/classes/'),
    gallery: z.string(),
    summary: z.string(),
    occurs: z.string().optional(),
    days: z.string().optional(),
    time: z.string().optional(),
    order: z.number().optional(),
    image_position: z.string().optional(),
    draft: z.boolean().default(false).optional(),
  }),
});

const siteInfoCollection = defineCollection({
  type: 'content', // Could be 'data' if only frontmatter is needed
  schema: z.object({
    title: z.string(), // For identifying the content block
  }),
});

export const collections = {
  programs: programsCollection,
  classes: classesCollection,
  siteInfo: siteInfoCollection,
};