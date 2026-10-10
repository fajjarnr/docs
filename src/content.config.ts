import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const looseSchema = z.object({
  description: z.string().optional(),
  updated: z.coerce.string().default('2026-10-11'),
  heroImage: z.string().optional(),
  section: z.string().optional(),
  module: z.string().optional(),
  subpage: z.string().optional(),
});

const getStarted = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/get-started' }),
  schema: looseSchema,
});

const modules = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/modules' }),
  schema: looseSchema,
});

const subpages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/subpages' }),
  schema: looseSchema,
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: looseSchema,
});

export const collections = { 'get-started': getStarted, modules, subpages, articles };
