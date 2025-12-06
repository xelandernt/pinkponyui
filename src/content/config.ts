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

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.string(),
		author: z.string(),
		excerpt: z.string(),
		order: z.number().optional(),
		image: z.string().optional(),
	}),
});

export const collections = { events, blog };
