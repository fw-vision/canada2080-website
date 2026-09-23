import { defineCollection, z } from 'astro:content';

const evidenceClass = z.enum([
  'Verified fact',
  'Qualified claim',
  'Scenario',
  'Hypothesis',
  'Aspiration',
  'Research needed'
]);

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateLabel: z.string(),
    candidateDates: z.array(z.string()).default([]),
    sortDate: z.coerce.date(),
    status: z.enum(['date-finalizing', 'registration-open', 'full', 'completed', 'cancelled']),
    format: z.string(),
    duration: z.string(),
    location: z.string().optional(),
    time: z.string().optional(),
    rsvp: z.string().optional(),
    guests: z.array(z.object({
      name: z.string(),
      institution: z.string(),
      expertise: z.string(),
      bio: z.string(),
      group: z.enum(['governance', 'academic', 'industry']),
      participation: z.enum(['remote']).optional()
    })).default([]),
    itinerary: z.array(z.object({
      time: z.string(),
      title: z.string(),
      duration: z.string()
    })),
    draft: z.boolean().default(true)
  })
});

const signals = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    kind: z.enum(['research', 'announcement', 'event-record', 'reflection', 'field-note', 'interview', 'accountability-update', 'cross-post', 'commentary']),
    author: z.string().default('Canada2080'),
    evidenceClass: evidenceClass.optional(),
    status: z.enum(['draft', 'published']),
    draft: z.boolean().default(true),
    sources: z.array(z.object({
      citation: z.string(),
      url: z.string().url()
    })).default([]),
    tags: z.array(z.string()).default([]),
    canonicalUrl: z.string().url().optional()
  })
});

export const collections = { events, signals };
