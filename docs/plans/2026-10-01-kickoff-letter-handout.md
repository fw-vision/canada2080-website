---
title: "Canada2080 kickoff letter handout"
type: plan
status: active
created_date: 2026-10-01
updated_date: 2026-10-01
owner: Francis Wang
scope: repository
related_projects: [canada2080-website]
tags: [canada2080, kickoff, handout, pagedjs, print]
---

# Canada2080 kickoff letter handout

## Desired outcome

A public letter-size take-home packet at `/events/2026-kickoff-handouts`.
Screen preview uses fixed letter sheets; browser Print uses `@page { size: letter }`.
No access gate. Content summarizes website talking points with note lines and
reflection questions.

## Baseline and evidence

- Public talking points live on `canada2080.org`: event page, Innovation Gaps,
  trajectory, join pathways, and the kickoff programme throughline.
- Operator tools already exist for programme plans and the hall deck under the
  same access gate.
- Existing Paged.js practice in `findcongwang-website` supplies the polyfill and
  letter `@page` pattern.

## Scope

### Included

- Content architecture for a **4-page letter** packet (print as two double-sided
  sheets, or one staple if preferred).
- Structured content source in `src/data/kickoffHandout.ts`.
- Gated Astro page with on-screen Paged.js preview and browser print.
- Note lines and guiding questions on every working page.
- Link from programme plans.

### Excluded

- Chinese translation in v1.
- Automatic PNG batch export (can reuse the paged-view-image-export skill later).
- Live guest list or unconfirmed speaker names on the printed front.
- Full programme run-of-show detail (that stays on programme plans).

## Decisions already made

- Format: US Letter, portrait, Paged.js.
- Audience: invited guests taking something home; not a public brochure.
- Voice: Canada2080 brand, Canadian English, concise summary rather than essay.
- Structure: cover + framing, gaps + notes, panels + trajectory + invitation.
- Gate: same operator access code as other kickoff tools.

## Content map (4 pages)

### Page 1 · Cover and arrival

| Block | Source | Guest use |
|---|---|---|
| 2080 wordmark, title, date, venue | Event frontmatter | Orientation |
| Programme throughline | Event / programme plans | Shared claim |
| Name / organisation / role lines | Blank | Fill-in |
| Afternoon at a glance (compact times) | Event itinerary | Follow along |
| Canada2080.org | Site | Continue later |

### Page 2 · Why this conversation

| Block | Source | Guest use |
|---|---|---|
| Founding purpose (3–4 bullets) | Event body | Frame |
| Tripartite ecosystem (education / industry / governance) | Event / programinfo | Map the room |
| Reflection: which sphere do you work in, and where is the missing connection? | Original | Write |
| Lined notes | Blank | Capture listening |

### Page 3 · Four Gaps and personal diagnosis

| Block | Source | Guest use |
|---|---|---|
| Four Gaps one-liners | `/innovation-gaps` decks | Shared diagnosis |
| Reflection: which Gap most constrains your work? What evidence would change your mind? | Original | Write |
| Lined notes | Blank | Capture panel insight |

### Page 4 · Working questions and next step

| Block | Source | Guest use |
|---|---|---|
| Panel 1 and Panel 2 themes with 3 guiding questions each | Event panel topics | Listen / answer |
| Scale ladder (household → community → region → nation) | `/trajectory` | Stretch thinking |
| Ways to stay involved (investor, institution, policy, research, operator, community) | `/join` | Choose a path |
| My 90-day note | Original | Commitment |
| Contact / canada2080.org | Site | Follow-up |

## Workstreams

### Workstream 1: Content source

- [x] Draft structured handout copy from website talking points
- [ ] Principal review of reflection questions and density

### Workstream 2: Paged letter renderer

- [x] Add `/events/2026-kickoff-handouts` gated page
- [x] Letter `@page` CSS and note-line components
- [ ] Print test on Hilton / office printer; adjust margins if needed

### Workstream 3: Operator linking

- [x] Disallow in `robots.txt`
- [x] Link from programme plans
- [ ] Optional link from deck templates catalogue

## Risks and dependencies

| Risk or dependency | Control or owner |
|---|---|
| Overfull pages after Paged.js pagination | Keep copy short; verify page count after render |
| Unconfirmed speakers printed in error | Do not list named speakers on the handout |
| Guest handwriting space too small | Prefer fewer questions with deeper note lines |
| Brand fonts unavailable in print | Use site display/body stack already loaded for operator pages |

## Verification and completion criteria

- [ ] Preview shows exactly four letter pages
- [ ] Browser Print yields usable Letter output without clipped margins
- [ ] Content matches website claims without inventing metrics
- [ ] Principal signs off before print run

## Execution log

- 2026-10-01: Content map and first gated Paged.js scaffold created.
