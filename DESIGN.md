---
name: "Canada2080"
version: "0.2.0"
description: "A long-horizon advocacy, research, and convening initiative for Canadian capability."
mode: "horizon-contrast"
contrast_target: "WCAG-AA"

colors:
  brand:
    primary: "#071f26"
    secondary: "#111719"
    accent: "#f02e23"
  signal:
    success: "#2e6256"
    error: "#b71d15"
    warning: "#8b5b1f"
    info: "#3e6677"
  surface:
    background: "#f5f4ef"
    card: "#f5f4ef"
    elevated: "#ffffff"
    border: "#8fa6ad"
  text:
    primary: "#071f26"
    secondary: "#34484d"
    muted: "#53656a"

typography:
  families:
    display: "Arial Black, Helvetica Neue, Arial, sans-serif"
    body: "Arial, Helvetica, sans-serif"
    mono: "ui-monospace, SFMono-Regular, Consolas, monospace"
  scale:
    xs: { size: "11px", line: "16px" }
    sm: { size: "13px", line: "20px" }
    base: { size: "16px", line: "25px" }
    md: { size: "18px", line: "28px" }
    lg: { size: "24px", line: "32px" }
    xl: { size: "42px", line: "46px" }
    2xl: { size: "clamp(3.5rem, 9vw, 8rem)", line: "0.9" }

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

radii:
  sm: "2px"
  md: "4px"
  lg: "8px"
  xl: "12px"
  pill: "9999px"
---

# Canada2080 - Brand and Design System

## North Star

Make long-horizon national capability legible, discussable, and actionable without overstating what evidence can establish.

## Personality

- **Mission-led**: national ambition appears with confidence and a concrete present tense.
- **Inspectable**: information is ordered, sourced, and easy to challenge.
- **Grounded**: every proposition connects to real places, systems, and people.
- **Soberly ambitious**: the work invites action while marking uncertainty.
- **Plural**: the visual language makes room for regional, institutional, and generational difference.

We are not promotional, exceptionalist, techno-utopian, or decorative.

## Voice and Tone

| Avoid | Prefer |
|---|---|
| Inevitable futures | Stated assumptions and scenarios |
| National-superiority language | Specific capability and public-value outcomes |
| Generic innovation claims | Named systems, decision rights, and delivery conditions |
| Dense policy jargon | Plain language with an evidence label |

## Colour Philosophy

Snow is the default reading surface. Northern Ink carries institutional weight and long-form contrast. Canada Signal marks calls to action, selected numbers, and the final leaf-zero. Horizon Peach connects the identity to future horizons, while Boreal Green, Lake Steel, and evidence colours support interpretation.

## Typography Philosophy

Use a locally available heavy grotesque display stack for rapid, accessible loading. Large tightly set display text establishes the horizon; body text remains generous and calm. Monospace supports classifications, evidence labels, dates, and source metadata. Handwritten and script typography are excluded from the core identity.

## Component Principles

- One dominant idea and one clear action per section.
- Fine rules, generous whitespace, and two-column grids carry structure before ornament.
- The bold 2080 wordmark uses an original maple leaf held inside the final zero.
- Technical graphics are CSS or original SVG linework, never copied reference assets.
- Labels describe evidence status rather than decorate copy.
- Motion is sparse and must respect `prefers-reduced-motion`.

## Accessibility Floor

- AA contrast on all text against its surface
- Visible keyboard focus states
- Semantic landmarks, heading order, and skip navigation on every page
- Colour is never the only evidence-status signal
- Motion respects `prefers-reduced-motion`
