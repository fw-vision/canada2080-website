---
name: "Canada2080"
version: "0.1.0"
description: "A public research and coalition-building initiative for Canadian capability."
mode: "light-first"
contrast_target: "WCAG-AA"

colors:
  brand:
    primary: "#32182d"
    secondary: "#5b3652"
    accent: "#a04b37"
  signal:
    success: "#2f6a54"
    error: "#9e342d"
    warning: "#8b5b1f"
    info: "#415f78"
  surface:
    background: "#f4f0e6"
    card: "#fbf8f1"
    elevated: "#ffffff"
    border: "#c9c0b2"
  text:
    primary: "#241f1c"
    secondary: "#625a54"
    muted: "#847b72"

typography:
  families:
    display: "Arial, Helvetica, sans-serif"
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

- **Dossier-like**: information is ordered, sourced, and easy to inspect.
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

Warm parchment is the default reading surface. Aubergine is reserved for inversion sections, commitments, and visual rests. Rust marks selected actions and diagram signals. The palette remains near-monochrome so evidence labels and data carry the visual hierarchy.

## Typography Philosophy

Use a locally available neutral grotesque stack for rapid, accessible loading. Large tightly set display text establishes the horizon; body text remains generous and calm. Monospace supports classifications, evidence labels, dates, and source metadata.

## Component Principles

- One dominant idea and one clear action per section.
- Fine rules, generous whitespace, and two-column grids carry structure before ornament.
- Technical graphics are CSS or original SVG linework, never copied reference assets.
- Labels describe evidence status rather than decorate copy.
- Motion is sparse and must respect `prefers-reduced-motion`.

## Accessibility Floor

- AA contrast on all text against its surface
- Visible keyboard focus states
- Semantic landmarks, heading order, and skip navigation on every page
- Colour is never the only evidence-status signal
- Motion respects `prefers-reduced-motion`
