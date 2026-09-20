---
title: "Canada2080 weekend launch implementation"
type: plan
status: active
created_date: 2026-09-19
updated_date: 2026-09-19
owner: Canada2080 website team
scope: repository
related_projects: [canada2080]
tags: [launch, identity, events, journal, astro]
---

# Canada2080 weekend launch implementation

## Desired outcome

Release an accessible static Canada2080 website that presents an enduring national capability initiative, makes the 2026-2080 preferred trajectory inspectable, and features the September 28 kickoff without exposing unconfirmed logistics or private data.

## Source context

- `../../../04_Execute/Canada2080/brand/identity-system.md`
- `../../../04_Execute/Canada2080/indicators-strategy/2080-trajectory-and-offramps.md`
- `../../../04_Execute/Canada2080/tactics/kickoff-release-event-2026-09-28.md`
- `../../../04_Execute/Canada2080/artifacts/website-content-and-experience-brief.md`
- `../../../docs/plans/2026-09-19-canada2080-weekend-launch.md`

## Workstreams

- [x] Replace the script wordmark with the original bold final leaf-zero identity.
- [x] Replace the parchment and aubergine system with Canada Signal, Northern Ink, Snow, horizon, and evidence colours.
- [x] Rebuild the homepage around mission, aspiration, Five Gaps, trajectory, missions, event, research, journal, and participation.
- [x] Add trajectory, events, kickoff, and journal routes.
- [x] Add typed event and journal content collections.
- [x] Remove the preview curtain and production `noindex` directive.
- [x] Correct stale npm documentation to pnpm.
- [x] Preserve claims, privacy, consent, provenance, and non-endorsement boundaries.
- [x] Run `pnpm run check` and `pnpm run build`.

## Release boundaries

- Publish the September 28 date and relative two-hour format.
- Omit unconfirmed time, venue, capacity, moderator, RSVP destination, and political attendance.
- List academic contributors as planned independent perspectives, subject to direct approval.
- Publish no speaker email addresses, attendee information, or private logistics.

## Completion criteria

- [x] Permanent mission precedes event promotion in the experience hierarchy.
- [x] Kickoff is reachable from primary navigation and the homepage.
- [x] Preferred trajectory and offramps are visible.
- [x] Event and journal models support future publication.
- [x] Built output contains no preview gate or `noindex`.
- [x] Astro check and build pass.

## Execution log

| Date | Action | Result | Next step |
|---|---|---|---|
| 2026-09-19 | Implementation plan created | Active | Build must-tier release scope |
| 2026-09-19 | Must-tier identity, routes, collections, and public-release changes implemented | Completed | Principal visual review and deployment |
| 2026-09-19 | Ran Astro check, build, privacy scan, and link audit | Passed: 24 source files, 12 pages, 202 links, zero errors or missing links | Confirm DNS and GitHub Pages settings |
