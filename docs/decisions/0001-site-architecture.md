# ADR-0001: Use Astro Static Site Architecture for the Canada2080 Launch

**Status:** accepted
**Date:** 2026-09-17
**Deciders:** Principal and Canada2080 website team

## Context

Canada2080 needs a credible public launch site for a research-led national initiative. Launch content is primarily editorial: an extended homepage, explanatory pages, and a growing set of research entries. The site needs strong accessibility, fast delivery, transparent evidence labels, low operating complexity, and deployment at `https://canada2080.org` through GitHub Pages.

The visual direction calls for rich typographic composition, careful responsive layout, original technical illustrations, and sparse motion. It does not require application state, account management, a database, or a custom API at launch.

## Decision

Use **Astro 5** with TypeScript strict mode and static output. Use vanilla CSS with custom properties and original CSS or SVG technical motifs. Store research entries as Markdown through Astro Content Collections. Deploy the `dist/` build artifact through GitHub Actions to GitHub Pages.

The site configuration uses `site: 'https://canada2080.org'` and `base: '/'`. The build includes `public/CNAME` containing `canada2080.org`. The repository's GitHub Pages source must be set to GitHub Actions.

## Options Considered

### Option A: Astro static site

- Pro: Delivers static HTML by default, has first-class Markdown content collections, and keeps JavaScript close to zero.
- Pro: Supports long-form editorial routes and future interactive islands without imposing a framework dependency.
- Pro: Fits GitHub Pages and has minimal operational cost.
- Con: Dynamic forms and personalised features will need an external provider or a later backend decision.

### Option B: Next.js application

- Pro: Provides a broader React application ecosystem and server capabilities.
- Con: Adds framework and deployment complexity without launch requirements that justify it.
- Con: Encourages client application patterns for a primarily editorial site.

### Option C: Static HTML with no site framework

- Pro: Has the smallest runtime and dependency surface.
- Con: Makes page shells, content validation, and research publishing conventions harder to maintain as the site grows.

## Consequences

### Positive

- Public pages are fast, cacheable, and independently inspectable.
- Research entries can carry typed metadata for evidence class, sources, and publication status.
- Design can be implemented with native HTML and CSS rather than copied visual assets or a heavy component library.
- Deployment has no application server, database, or secret requirement for the launch site.

### Negative

- The Join page cannot submit information until a reviewed third-party form or backend is selected.
- Editors must commit Markdown changes through the repository until a CMS is deliberately added.
- Interactive visualisations require a new dependency decision or a small isolated client island.

### Neutral

- The provisional tagline is content, not configuration. It may change without changing this architecture.
- GitHub Pages domain verification and DNS remain operational responsibilities outside the repository.

## References

- `README.md`
- `AGENTS.md`
- `DESIGN.md`
- Canada2080 project source: `04_Execute/Canada2080/README.md`
- Canada2080 public claims boundary: `04_Execute/Canada2080/legal/public-claims-and-sensitivity-boundary.md`
