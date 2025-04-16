import { defineCollection, z } from "astro:content";

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().or(z.date()), // accepte string ISO ou Date
    tags: z.array(z.string()),
    heroImage: z.string().optional(), // facultatif
  }),
});

const note = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string().or(z.date()),
  }),
});

export const collections = {
  post,
  note,
};
