import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
	loader: glob({ base: './src/content', pattern: '{en,zh}/guides/**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.enum(['prepare', 'payment', 'transport', 'life', 'medical', 'cities', 'tips']),
		questions: z.array(z.string()),
		lastUpdated: z.coerce.date(),
		tags: z.array(z.string()).optional(),
		difficulty: z.enum(['easy', 'medium', 'advanced']).optional(),
		lang: z.enum(['en', 'zh', 'ko', 'ja', 'id', 'vi']).optional(),
		translationKey: z.string().optional(),
	}),
});

export const collections = { guides };
