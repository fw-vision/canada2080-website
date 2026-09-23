# Coding Standards

## HTML and Astro

- Use semantic landmarks: `header`, `nav`, `main`, `article`, `section`, `aside`, and `footer`.
- Every page uses `BaseLayout` and provides a specific title and description.
- Keep page heading order sequential. Each route has one `h1`.
- Use Astro components by default. A client island needs a documented user interaction that cannot be handled in static HTML and CSS.
- Write meaningful link text. Do not use "click here".

## CSS

- Use tokens defined in `src/styles/global.css` before creating a new literal colour, spacing value, or font rule.
- Start layouts mobile-first. Use grid and flexbox rather than fixed coordinates.
- Keep decorative linework and halftones in CSS or original SVG. Mark decorative images with empty alt text.
- Do not add animation by default. Any animation must include a `prefers-reduced-motion` fallback.
- Keep focus indicators visible and do not disable outlines without a stronger replacement.

## Content and claims

- Use Canadian English and direct, specific language.
- Add an evidence label when a statement makes an empirical, predictive, or normative proposition.
- Use `Verified fact` only when a named source is present and has been checked.
- State conditions alongside a `Qualified claim`; state assumptions alongside a `Scenario`.
- Attribute the four Canadian systemic Gaps to Francis Wang's research into Canadian sustainable innovation, preserving the 2025 *Foresight-Driven Innovation* proposal as the framework's origin.
- Do not include unreviewed personal information, partner names, endorsements, images, Indigenous knowledge, or territorial material.

## Content collections

- Create research Markdown in `src/content/research/`, events in `src/content/events/`, and journal entries in `src/content/journal/`.
- Research entries include title, description, publication date, evidence class, status, and a non-empty sources array.
- Event entries include approved public status, programme, access, and contributor information. Omit private or unconfirmed logistics.
- Journal entries require author, publication date, type, attribution review, and rights-cleared media.
- Use `draft: true` until editorial, claims, consent, and rights review are complete. Draft entries are excluded from public lists.

## Verification

Run these terminating commands before requesting review:

```bash
pnpm run check
pnpm run build
```

Do not run `npm run dev`, `npm run preview`, or any watch command as part of agent verification.
