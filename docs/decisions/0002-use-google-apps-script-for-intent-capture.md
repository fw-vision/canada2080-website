# ADR-0002: Use a Google Apps Script Relay for Intent Capture

**Status:** accepted
**Date:** 2026-09-20
**Deciders:** Principal and Canada2080 website team

## Context

Canada2080 needs a lightweight, free route for people to express interest in the initiative, choose a contribution role, and optionally receive updates. The public site remains a static Astro deployment on GitHub Pages, so it cannot safely write directly to a spreadsheet or keep a server credential.

## Decision

Use a minimal HTML form on the static Join page that posts to a dedicated Google Apps Script web app. The script validates a small field set and appends accepted submissions to a restricted Google Sheet whose identifier is stored in Apps Script properties, not in the website repository.

The form is rendered only when `PUBLIC_INTENT_FORM_ENDPOINT` is configured at build time. Until then, the Join page explains that the route is being finalized and collects nothing.

Collect only name, email, optional organization, contribution role, optional note, and explicit consent to receive Canada2080 updates. Include a honeypot field, length limits, server-side validation, a documented retention review, and restricted Sheet access. Do not collect political affiliation, investment capacity, Indigenous identity, accessibility or dietary information through this general-interest form.

## Consequences

- The launch site stays static and low-cost.
- Google becomes a data processor for submitted personal information.
- The Apps Script deployment and Sheet permissions require a separate operational setup in the Principal's Google account.
- The endpoint URL is public by design and must not convey privileged access. Security depends on validation, minimal collection, spam controls, and restricted Sheet permissions.
- Event invitations and attendance confirmation remain a separate, controlled process.

## References

- `docs/integrations/google-apps-script-intent.gs`
- `src/pages/join.astro`
- `AGENTS.md`
