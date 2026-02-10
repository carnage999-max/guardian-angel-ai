# Guardian Angel AI® — Build Instructions

## Project
Next.js App Router + TypeScript + Tailwind.

## Files
- app/layout.tsx: metadata includes guardianangeldevice.com
- app/page.tsx: single-page sections with anchors
- app/not-found.tsx: branded 404
- components for each section + UI primitives

## Navigation
- Desktop: fixed top bar, subtle blur
- Mobile: push-down full-screen menu
- Menu icon: Anthropic-style glyph (not hamburger)
- Smooth scrolling + active link indicator

## Ambient Background (three.js)
Implement a single full-page Canvas background:
- position: fixed; inset: 0; z-index: -1
- draw minimal geometry: a single distorted plane or particle field forming a soft halo
- color: muted blue-cyan, low opacity
- animation: slow drift + gentle distortion
- disable with prefers-reduced-motion
- pause when document hidden
- fallback: CSS radial gradients if WebGL not supported

## Section UI
Cards must be "bento" style:
- Desktop: mix 2-col and 3-col
- Mobile: avoid endless vertical stacking:
  - Use scroll-snap carousels for use cases
  - Use 2-up mini grids where possible
  - Use staggered card heights only if it stays readable

## How It Works Panel
- Accordion with 4 steps
- Each step includes: title, 2–4 bullets, "Technical note" expandable subpanel
- No heavy animation libraries required; CSS transitions + details/summary allowed

## Images
Use next/image and the provided assets:
- Hero uses 3D product render prominently
- Use case visuals appear as muted background cards (not dominating)
- No camera imagery, no lens motifs

## Accessibility
- WCAG 2.1 AA
- Keyboard navigation
- Visible focus rings (accent)
- Reduced motion support
- ARIA labels on nav/menu

## Performance
- next/image everywhere
- compress assets
- dynamic import three.js canvas
- no heavy JS sliders
