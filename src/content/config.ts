import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const guides = defineCollection({
	loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.enum(['prepare', 'payment', 'transport', 'life', 'cities', 'tips']),
		questions: z.array(z.string()),
		lastUpdated: z.coerce.date(),
		tags: z.array(z.string()).optional(),
		difficulty: z.enum(['easy', 'medium', 'advanced']).optional(),
	}),
});

export const collections = { blog, guides };
