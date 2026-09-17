import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    evidenceClass: z.enum([
      'Verified fact',
      'Qualified claim',
      'Scenario',
      'Hypothesis',
      'Aspiration',
      'Research needed'
    ]),
    status: z.enum(['draft', 'published']),
    draft: z.boolean().default(true),
    sources: z.array(z.string()).min(1),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { research };
