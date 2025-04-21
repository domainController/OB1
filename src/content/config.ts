import { defineCollection, z } from "astro:content";

// 📚 Glossary entries
const glossary = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string().optional(),
  }),
});

// ⚖️ Legal notes and jurisprudence
const legalNotes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    legalReference: z.string().optional(),
    description: z.string().optional(),
  }),
});

// 🧩 Tools, apps, technical modules
const apps = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string().optional(),
    version: z.string().optional(),
  }),
});

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
  glossary,
  "legal-notes": legalNotes,
  apps,
  post,
  note,
};
