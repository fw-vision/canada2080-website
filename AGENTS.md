# Canada2080 - Project Context

> Read by coding agents on every session. Update a stale fact in the same change that proves it stale.

## What this project is

Canada2080 is a public long-horizon initiative for investors, institutions, policy leaders, researchers, operators, and communities building Canadian-controlled capability for a changing planet. The site introduces Francis Wang's four Canadian systemic Gaps, six mission fields, a preferred 2080 trajectory, events, and an evidence-led Signals record.

## Canonical context

Before changing positioning, evidence claims, missions, or public copy, read `../../../04_Execute/Canada2080/README.md` and its routed files. The website repository is authoritative for implementation and deployment.

## Current focus

Public launch and kickoff scheduling. The exact kickoff date is being finalized, with October 3 or 4, 2026 under consideration. Publicly use **Invited guests** rather than assuming speaking roles. Erin Trochim, Kimberly Yazzie, Barry Wylant, and Cedric Tai are expected to join remotely. Invitation or participation does not imply endorsement. Final names, titles, biographies, photographs, speaking roles, and other arrangements require direct confirmation.

## Tech stack

| Concern | Choice | Reference |
|---|---|---|
| Site framework | Astro 5, static output | `docs/decisions/0001-site-architecture.md` |
| Language | TypeScript strict | `docs/decisions/0001-site-architecture.md` |
| Styling | Vanilla CSS and design tokens | `docs/decisions/0001-site-architecture.md` |
| Content | Astro Content Collections, Markdown | `docs/decisions/0001-site-architecture.md` |
| Deployment | GitHub Actions to GitHub Pages | `docs/decisions/0001-site-architecture.md` |
| Intent capture | Optional Google Apps Script relay to restricted Sheet | `docs/decisions/0002-use-google-apps-script-for-intent-capture.md` |

## Working agreements

### Code

- Prefer Astro components and static HTML. Add client-side JavaScript only when required.
- Use CSS custom properties from `src/styles/global.css`; do not add a CSS framework for ordinary layout work.
- Keep components presentational and pages responsible for launch copy.
- Preserve `https://canada2080.org` and base path `/`.
- Use Canadian English with the `-ize`/`-ization` convention, including `commercialize`, `organization`, `standardize`, and `civilization`. Retain Canadian forms such as `colour`, `centre`, `labour`, and `programme`. Do not use em dashes.

### Claims and evidence

- Preserve the homepage hero lockup exactly: **Actualizing an abundant, resilient, sustainable, and sovereign future for Canada.** Follow it with the declaration that by 2080 Canada **will** become one of the world's major economic powers, with the capability to surpass the United States through sovereign industry, research, capital, and public value built at home.
- State Canada2080's chosen direction and commitments with conviction. Reserve conditional language for empirical uncertainty, scenarios, and claims that depend on external evidence.
- Keep public substantive claims attributable and appropriately qualified, but do not clutter the Gaps metric column with visible evidence-class labels.
- Attribute the four Gaps publicly as part of **Francis Wang's research into Canadian sustainable innovation**. Preserve the 2025 proposal provenance in About and source records.
- Never publish the 66% graduate or 73% taxpayer-funded IP figures without reproducible upstream evidence.
- Never turn climate exposure estimates into displacement, migration, or Canada-destination claims.
- The approved climate line is that 2.1 to 3.7 billion people could be exposed to unprecedented heat or conditions outside a historical human temperature niche under specified late-century scenarios. State that this is not a displacement forecast.
- Treat precision resilience as a working hypothesis attributed to Francis Wang and Barry Wylant.
- Treat quantum timing, global leadership, and Type I civilization as scenarios or aspirations, not forecasts.
- Indigenous rights, authorities, knowledge, images, data, and territorial references require appropriate consent and protocol.

### Content model

- `src/content/signals/` combines research and the former journal into one public record.
- Keep `/research/` and `/journal/` redirects for backwards compatibility.
- Put event Markdown in `src/content/events/`.
- Never publish private email, attendee, venue, meeting-link, or availability data.

### Development and testing

- Interactive development uses `bun run dev`, binding Astro to `0.0.0.0` for trusted Tailnet access.
- Reach this dev box at `http://100.71.170.90:4321` or its MagicDNS name on port `4321`.
- The persistent dev server is user-managed and is not automated verification.
- Run `bun run check` and `bun run build` before handoff.
- Preserve firewall controls and never enable public Funnel access without explicit approval.

### Intent capture

- Render the intent form only when `PUBLIC_INTENT_FORM_ENDPOINT` is configured.
- Store `SHEET_ID` only in Apps Script properties, never in this repository.
- Collect the minimum stated fields and keep general intent separate from event RSVP or attendance confirmation.
- Do not add analytics, advertising pixels, or additional processors without a reviewed decision.

## Documentation

- Architecture decisions: `docs/decisions/`
- Integration runbooks: `docs/integrations/`
- Living conventions: `docs/guidelines/`
- Implementation plans: `docs/plans/`

## Reading order

1. `README.md`
2. `AGENTS.md`
3. `DESIGN.md`
4. `docs/guidelines/coding-standards.md`
5. `docs/decisions/0001-site-architecture.md`
6. `docs/decisions/0002-use-google-apps-script-for-intent-capture.md`
7. `docs/architecture/overview.md`
