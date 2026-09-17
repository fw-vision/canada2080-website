# Canada2080 Website

Public website for **Canada2080**, a national initiative exploring how Canada can build economic sovereignty and global leadership through sustainable strategic innovation by 2080.

## Launch MVP

The MVP publishes six public areas:

| Area | Purpose |
|---|---|
| Home | A single-page narrative introducing the problem, response, and invitation |
| Five Gaps | Francis Wang's Five Canadian Systemic Gaps and their evidence boundaries |
| Missions | Six regional missions with national common services |
| Research | Public research entries with visible evidence classes and sources |
| About | Initiative scope, provenance, and publication standards |
| Join | Clear routes for investors, institutions, and policy leaders |

The working tagline, **Capability for a changing planet**, remains provisional pending stakeholder testing. It is not a locked brand decision.

## Stack

| Concern | Choice |
|---|---|
| Framework | Astro 5 with static output |
| Language | TypeScript strict |
| Styling | Vanilla CSS, design tokens, original CSS/SVG technical motifs |
| Content | Astro Content Collections and Markdown |
| Hosting | GitHub Pages at `https://canada2080.org` |
| CI/CD | GitHub Actions workflow in `.github/workflows/deploy.yml` |

The rationale and rejected alternatives are in [ADR-0001](docs/decisions/0001-site-architecture.md).

## Local setup

**Requirements:** Node.js 20.18 or newer and npm.

```bash
npm install
npm run check
npm run build
```

`npm run build` produces the deployable static output in `dist/`. Do not use a development or preview server for agent verification.

The initial scaffold intentionally has no lockfile because the local npm installation was unavailable during generation. The first Coder handoff must run `npm install`, review the resulting `package-lock.json`, and commit it. Then change the workflow installation command from `npm install` to `npm ci` and enable npm dependency caching.

## Deployment

The deployment workflow runs on pushes to `main` and manually through GitHub Actions. Repository settings must use **Settings > Pages > Build and deployment > GitHub Actions**.

Before the first production release:

1. Add `canada2080.org` as the repository custom domain in GitHub Pages settings.
2. Configure DNS at the domain provider using GitHub Pages' current apex-domain A/AAAA records, or an apex ALIAS/ANAME record where supported.
3. Add `www` only if a redirect policy is separately chosen. The launch canonical domain is `https://canada2080.org`.
4. Wait for GitHub Pages to verify the domain, then enable HTTPS enforcement.

`public/CNAME` is included in the build artifact. Keep it aligned with the GitHub Pages setting.

## Content and claim safety

- Research entries live in `src/content/research/` and require an evidence class and source list.
- Public copy uses **Verified fact**, **Qualified claim**, **Scenario**, **Hypothesis**, and **Aspiration** labels where a proposition needs qualification.
- The Five Gaps are attributed to Francis Wang's 2025 DDes proposal, *Foresight-Driven Innovation*.
- Do not publish the retired climate-displacement shorthand, a northward-migration claim, or any assertion that climate-exposed people will move to Canada.
- Publication needs source, consent, rights, and sensitivity review. See the legal source material recorded in the project brief.

## Repository map

```text
src/
  components/       Shared Astro components and original technical motifs
  content/research/ Markdown research entries
  data/             Structured launch content
  layouts/          Base document shell
  pages/            Public routes
  styles/           Global tokens and responsive CSS
docs/
  architecture/     System overview
  decisions/        Immutable architecture decision records
  guidelines/       Living coding conventions
  plans/            Multi-session implementation plans
public/             Static files, including CNAME
```

## Reading order for new contributors

1. `README.md` - setup and delivery model
2. `AGENTS.md` - project rules and claim boundaries
3. `DESIGN.md` - visual system
4. `docs/guidelines/coding-standards.md` - implementation conventions
5. `docs/decisions/0001-site-architecture.md` - technical decisions
6. `docs/architecture/overview.md` - routes and content flow
