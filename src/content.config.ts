import { defineCollection, z } from 'astro:content';

const evidenceClass = z.enum([
  'Verified fact',
  'Qualified claim',
  'Scenario',
  'Hypothesis',
  'Aspiration',
  'Research needed'
]);

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    evidenceClass,
    status: z.enum(['draft', 'published']),
    draft: z.boolean().default(true),
    sources: z.array(z.string()).min(1),
    tags: z.array(z.string()).default([])
  })
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.enum(['announced', 'registration-open', 'full', 'completed', 'cancelled']),
    format: z.string(),
    duration: z.string(),
    location: z.string().optional(),
    time: z.string().optional(),
    rsvp: z.string().optional(),
    speakers: z.array(z.object({
      name: z.string(),
      institution: z.string(),
      lane: z.string(),
      status: z.enum(['planned', 'invited', 'confirmed'])
    })).default([]),
    itinerary: z.array(z.object({
      time: z.string(),
      title: z.string(),
      duration: z.string()
    })),
    draft: z.boolean().default(true)
  })
});

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    type: z.enum(['announcement', 'event-record', 'reflection', 'field-note', 'interview', 'research-interpretation', 'accountability-update', 'cross-post']),
    author: z.string(),
    draft: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    canonicalUrl: z.string().url().optional()
  })
});

export const collections = { research, events, journal };
