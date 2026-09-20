# Canada2080 - Project Context

> This file is read by AI coding agents on every session to bootstrap project context. Keep it concise and current. Update a stale fact in the same pull request that proves it stale.

## What this project is

Canada2080 is a public national initiative for investors, institutions, and policy leaders building Canadian-controlled capability for a changing planet. The site introduces Francis Wang's Five Canadian Systemic Gaps, six regional missions, and an evidence-led public research programme.

## Canonical context

Before changing positioning, evidence claims, missions, or public copy, read `../../../04_Execute/Canada2080/README.md` and the relevant files it routes to. The website repository remains authoritative for implementation and deployment.

## Current focus

Public launch. Deliver an accessible, static advocacy, research, events, and journal platform with the September 28, 2026 kickoff as featured content. CMS integration, first-party RSVP processing, mailing-list delivery, analytics, and bilingual publishing remain out of scope until a separately accepted decision.

## Tech stack (locked)

| Concern | Choice | Reference |
|---|---|---|
| Site framework | Astro 5, static output | `docs/decisions/0001-site-architecture.md` |
| Language | TypeScript strict | `docs/decisions/0001-site-architecture.md` |
| Styling | Vanilla CSS and design tokens | `docs/decisions/0001-site-architecture.md` |
| Content | Astro Content Collections, Markdown | `docs/decisions/0001-site-architecture.md` |
| Deployment | GitHub Actions to GitHub Pages | `docs/decisions/0001-site-architecture.md` |

## Working agreements

### Code

- Prefer Astro components and static HTML. Add client-side JavaScript only when a user task requires it.
- Use CSS custom properties from `src/styles/global.css`; do not add a CSS framework for ordinary layout work.
- Keep components presentational and pages responsible for launch copy.
- Preserve the site URL `https://canada2080.org` and the Astro base path `/`.
- Use Canadian English in public copy. Do not use em dashes.

### Claims and evidence

- Mark public substantive claims as **Verified fact**, **Qualified claim**, **Scenario**, **Hypothesis**, or **Aspiration** where relevant.
- Attribute the Five Canadian Systemic Gaps to Francis Wang's 2025 DDes proposal, *Foresight-Driven Innovation*.
- Never turn climate exposure estimates into displacement, migration, or Canada-destination claims.
- Treat Indigenous rights, authorities, knowledge, images, data, and territorial references as requiring appropriate consent and protocol.
- The launch line is "Actualizing an abundant, resilient, sustainable, and sovereign future for Canada". The 2080 horizon remains an aspiration and decision boundary, not a forecast.
- Present academic contributors as independent perspectives. Participation does not imply endorsement.

### Development and testing

- Interactive development uses `bun run dev`, which binds Astro to `0.0.0.0` for access from trusted Tailnet devices.
- Reach this dev box at `http://100.71.170.90:4321` or through its MagicDNS name and port `4321`.
- Treat the persistent dev server as a user-managed runtime process. Do not use it as automated verification.
- Run `pnpm run check` and `pnpm run build` before handoff. Both commands terminate.
- Add tests only when introducing non-trivial logic or client-side behaviour.
- Binding to `0.0.0.0` listens on every host interface. Preserve host firewall controls and never enable public Funnel access without explicit approval.

### Documentation

- **Architecture decisions**: `docs/decisions/` (numbered ADRs; accepted records are immutable)
- **Living conventions**: `docs/guidelines/` (update in place)
- **Implementation plans**: `docs/plans/` (move completed work to `_archive/`)
- **Session scratch work**: `.opencode/plans/` (git-ignored)

## File conventions

- Use PascalCase for Astro components and kebab-case for route files and content slugs.
- Put shared view components in `src/components/`, layouts in `src/layouts/`, and site data in `src/data/`.
- Put research Markdown in `src/content/research/`. Every entry needs an evidence class and source list.
- Put event Markdown in `src/content/events/` and journal Markdown in `src/content/journal/`.
- Put public static assets in `public/`. Do not add proprietary reference-site assets.

## Out of scope

- A claim that Canada will receive a predetermined climate-displaced population
- A single-city model for Canada or an unqualified Waterloo causal story
- Partner endorsements, investment offers, private discussions, personal data, or unreviewed imagery
- CMS, authentication, analytics, database, newsletter provider integration, and first-party RSVP processing

## Reading order for new contributors

1. `README.md` - purpose, setup, and delivery model
2. This file (`AGENTS.md`) - working agreements
3. `DESIGN.md` - visual system and accessibility baseline
4. `docs/guidelines/coding-standards.md` - current implementation conventions
5. `docs/decisions/0001-site-architecture.md` - stack and deployment rationale
6. `docs/architecture/overview.md` - site shape and content flow
