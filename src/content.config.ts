import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const articles = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/articles' }), schema: z.object({ title:z.string(), description:z.string(), pubDate:z.coerce.date(), category:z.string(), tags:z.array(z.string()).default([]), draft:z.boolean().default(false), cover:z.string().optional() }) });
const projects = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/projects' }), schema: z.object({ title:z.string(), description:z.string(), tags:z.array(z.string()).default([]), draft:z.boolean().default(false) }) });
export const collections = { articles, projects };
