# Canada2080 Website

Public website for **Canada2080**, a national initiative exploring how Canada can build economic sovereignty and global leadership through sustainable strategic innovation by 2080.

## Public launch

The public site publishes ten connected areas:

| Area | Purpose |
|---|---|
| Home | Permanent mission, Five Gaps, trajectory, missions, featured event, research, journal, and participation |
| Trajectory | The preferred 2026-2080 path, near-term gates, and offramps |
| Five Gaps | Francis Wang's Five Canadian Systemic Gaps and their evidence boundaries |
| Missions | Six regional missions with national common services |
| Research | Public research entries with visible evidence classes and sources |
| Events | Kickoffs, salons, working summits, conferences, and event records |
| Kickoff | The September 28, 2026 programme and approved participation details |
| Journal | Announcements, event records, reflections, and accountability updates |
| About | Initiative scope, provenance, and publication standards |
| Join | Clear routes for investors, institutions, policy leaders, operators, and researchers |

The launch line is **Build what the future requires**. The identity uses a bold 2080 mark with a maple leaf held inside the final zero.

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

**Requirements:** Node.js 20.18 or newer and pnpm 11.5.2.

```bash
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
```

### Tailnet development

Run the interactive development server with Bun:

```bash
bun run dev
```

The `dev` script binds Astro to `0.0.0.0`, so trusted Tailnet devices can open `http://100.71.170.90:4321` or use the dev box's MagicDNS name at port `4321`. Binding to `0.0.0.0` listens on every host interface, so keep host firewall and ingress controls in place and do not enable public Funnel access for development.

`pnpm run build` produces the deployable static output in `dist/`. Persistent development servers are user-managed runtime processes rather than automated verification commands. The repository commits `pnpm-lock.yaml` and explicitly allows the required `esbuild` and `sharp` installation scripts in `pnpm-workspace.yaml`.

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
- Event entries live in `src/content/events/`; journal entries live in `src/content/journal/`.
- Public event records omit private emails, attendee data, meeting links, and unconfirmed logistics.
- Public copy uses **Verified fact**, **Qualified claim**, **Scenario**, **Hypothesis**, and **Aspiration** labels where a proposition needs qualification.
- The Five Gaps are attributed to Francis Wang's 2025 DDes proposal, *Foresight-Driven Innovation*.
- Do not publish the retired climate-displacement shorthand, a northward-migration claim, or any assertion that climate-exposed people will move to Canada.
- Publication needs source, consent, rights, and sensitivity review. See the legal source material recorded in the project brief.

## Repository map

```text
src/
  components/       Shared Astro components and original technical motifs
  content/          Research, event, and journal Markdown collections
  data/             Shared structured site content
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
4. `docs/plans/2026-09-19-weekend-launch-implementation.md` - current release plan
5. `docs/guidelines/coding-standards.md` - implementation conventions
6. `docs/decisions/0001-site-architecture.md` - technical decisions
7. `docs/architecture/overview.md` - routes and content flow
