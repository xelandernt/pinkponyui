import { defineCollection, z } from 'astro:content';

const events = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		when: z.string(),
		where: z.string(),
		order: z.number().optional(),
	}),
});

export const collections = { events };
