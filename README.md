# Canada2080 Website

Public website for **Canada2080**, a long-horizon initiative exploring how Canada can turn its research and educational foundations into economic sovereignty, resilient capability, and trusted global contribution by 2080.

## Public areas

| Area | Purpose |
|---|---|
| Home | Ambition, problem space, natural advantage, precision resilience, climate preparedness, trajectory, missions, kickoff, Signals, and participation |
| Trajectory | 2030-2080 anchors, scale progression, enabling infrastructure, reinvestment, technology uncertainty, comparators, and offramps |
| Natural Advantage | Canada's water, land, forests, minerals, clean power, climate responsibilities, and complete value-chain opportunity |
| Gaps | Four barriers between Canadian research strength and enduring domestic capability, with sourced evidence |
| Missions | Six linked mission fields with national common services |
| Signals | Research, announcements, interpretations, event records, field notes, and accountability updates |
| Events | Kickoffs, salons, working summits, conferences, and public records |
| Kickoff | Date-flexible 2026 programme and Invited Speakers list |
| About | Initiative scope, research provenance, and publication standards |
| Join | Contribution roles and optional intent capture |

The hero slogan is **Actualizing an abundant, resilient, sustainable, and sovereign future for Canada**. Its supporting declaration is: **By 2080, Canada will become one of the world's major economic powers, with the capability to surpass the United States through sovereign industry, research, capital, and public value built at home.** The footer uses `Canada2080.org`, `#canada2080`, and `#canadastrong`.

## Stack

| Concern | Choice |
|---|---|
| Framework | Astro 5 with static output |
| Language | TypeScript strict |
| Styling | Vanilla CSS and design tokens |
| Content | Astro Content Collections and Markdown |
| Hosting | GitHub Pages at `https://canada2080.org` |
| CI/CD | GitHub Actions |
| Optional intent capture | Google Apps Script relay to a restricted Google Sheet |

Architecture decisions live in `docs/decisions/`.

## Local setup and validation

**Requirements:** Bun and Node.js 20.18 or newer.

```bash
bun install
bun run check
bun run build
```

## Tailnet development

```bash
bun run dev
```

The `dev` script binds Astro to `0.0.0.0`. Trusted Tailnet devices can open:

- `http://100.71.170.90:4321`
- `http://fcwang-elitemini-series.tail0f7891.ts.net:4321`

Binding to `0.0.0.0` listens on every host interface. Keep firewall and ingress controls in place and do not enable public Funnel access for development. Persistent development servers are user-managed runtime processes, not automated verification commands.

## Deployment

The workflow runs on pushes to `main` and manually through GitHub Actions. Repository settings must use **Settings > Pages > Build and deployment > GitHub Actions**.

Before production release:

1. Add `canada2080.org` as the GitHub Pages custom domain.
2. Configure the current GitHub Pages apex DNS records or supported ALIAS/ANAME.
3. Wait for domain verification and enable HTTPS enforcement.
4. Keep `public/CNAME` aligned with repository settings.

## Content and claim safety

- Signal entries live in `src/content/signals/`; event entries live in `src/content/events/`. Signals combine original Canada2080 posts, source-backed research, and commentary on events, policy, and technology developments.
- `/research/` and `/journal/` redirect to Signals for backwards compatibility.
- Public event records omit private emails, attendee data, meeting links, and unconfirmed logistics.
- The four Gaps are described as part of Francis Wang's research into Canadian sustainable innovation.
- Do not publish the proposal-era 66% graduate or 73% IP figures without reproducible upstream evidence.
- Never turn climate exposure into a displacement, migration, or Canada-destination forecast.
- Treat precision resilience as a working hypothesis, quantum timing as uncertain, global leadership as an aspiration, and Type I civilization as a distant orienting horizon.
- Publication requires source, consent, rights, privacy, and sensitivity review.

## Intent capture

The Join form renders only when `PUBLIC_INTENT_FORM_ENDPOINT` is configured. Setup guidance is in `docs/integrations/README.md`. General interest collection remains separate from event RSVP and attendance confirmation.

## Repository map

```text
src/
  components/       Shared Astro components
  content/          Event and Signals Markdown collections
  data/             Structured site content
  layouts/          Base document shell
  pages/            Public routes
  styles/           Global tokens and responsive CSS
docs/
  architecture/     System overview
  decisions/        Architecture decisions
  integrations/     External integration runbooks
  guidelines/       Living coding conventions
  plans/            Implementation plans
public/              Static files, including CNAME
```

## Reading order

1. `README.md`
2. `AGENTS.md`
3. `DESIGN.md`
4. `docs/plans/2026-09-19-weekend-launch-implementation.md`
5. `docs/guidelines/coding-standards.md`
6. `docs/decisions/0001-site-architecture.md`
7. `docs/decisions/0002-use-google-apps-script-for-intent-capture.md`
8. `docs/architecture/overview.md`
