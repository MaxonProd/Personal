import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string().optional(),
    category: z.enum(['Books', 'Research', 'Teaching', 'Business Projects', 'Writing', 'Presentations', 'Media']),
    date: z.coerce.date().optional(),
    image: z.string().optional(),
    organization: z.string().optional(),
    externalUrl: z.string().url().optional(),
    downloadUrl: z.string().optional(),
    citation: z.string().optional(),
    researchStatus: z.string().optional(),
    structuredDataType: z.enum(['Book', 'CreativeWork', 'Article', 'ScholarlyArticle']).optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    featured: z.boolean().default(false)
  })
});

const photos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/photos' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    alt: z.string().min(10),
    caption: z.string().optional(),
    category: z.enum(['Northern Michigan', 'Landscape', 'Night Sky', 'Nature', 'Everyday', 'Travel', 'Field & Range']),
    location: z.string().optional(),
    date: z.coerce.date().optional(),
    camera: z.string().optional(),
    lens: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true)
  })
});

const updates = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Academic', 'Professional', 'Entrepreneurship', 'Public Service', 'Media']),
    relatedUrl: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true)
  })
});

export const collections = { work, notes, photos, updates };
