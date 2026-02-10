# Guardian Angel AI® — Required Skills & Competencies

This document defines the minimum skill profile required to implement the Guardian Angel AI® website correctly.
Failure to meet these competencies will result in a site that feels generic, unsafe, or misaligned with the platform’s ethics.

---

## 1. Frontend Architecture

Required:
- Advanced React (or equivalent) component design
- Deep familiarity with Next.js App Router
- Server/client boundary awareness
- Dynamic imports and code-splitting

Must understand:
- When NOT to introduce state
- When NOT to add libraries
- How to preserve performance under animation

---

## 2. CSS & Layout Mastery (Critical)

This project is **CSS-first**.

Required skills:
- CSS Grid (advanced usage)
- Flexbox (non-trivial layouts)
- `scroll-snap` for horizontal carousels
- Intersection Observer (or equivalent) for reveal logic
- Custom scrollbar styling
- Backdrop blur + translucency without performance degradation

Must be able to:
- Avoid vertical “stacked card” anti-patterns on mobile
- Build bento-style layouts without JS sliders
- Control motion using pure CSS transitions and transforms

If you rely on heavy JS animation libraries for layout,
you are not suited for this project.

---

## 3. Motion Design Discipline

Required:
- Ability to design motion that is **felt, not seen**
- Understanding of motion as hierarchy reinforcement, not decoration

Must understand:
- Motion budgets
- Reduced-motion preferences
- How to stop animations when offscreen or tab-hidden

Explicitly discouraged:
- Looping animations
- Attention-grabbing effects
- “Demo-style” motion

---

## 4. three.js / WebGL (Optional but Advanced)

three.js is permitted **only** as an ambient layer.

Required understanding:
- How to render a single, lightweight scene
- How to throttle or pause rendering
- How to layer Canvas behind DOM content
- How to fail gracefully to CSS-only fallback

Must be able to:
- Create abstract light / halo effects
- Avoid surveillance metaphors (no grids, scanlines, targets)
- Respect reduced motion settings

This is **not** a 3D showcase project.

---

## 5. Accessibility & Ethics Awareness

Required:
- WCAG 2.1 AA compliance
- Keyboard-first navigation
- Focus visibility
- Semantic HTML usage

Must understand:
- That accessibility is part of trust
- That dark patterns are prohibited
- That persuasion ≠ clarity

---

## 6. Performance Engineering

Required:
- First paint optimization
- Avoidance of layout shift
- Image optimization via `next/image`
- Deferred loading of non-critical features

Must hit:
- TTFP < 2s
- Interactive < 3s on mid-tier devices

Performance is a **trust signal**.

---

## 7. Security & Privacy Sensitivity

Required mindset:
- Minimize data collection
- Minimize forms
- No default trackers
- Privacy-first analytics only (if any)

Must understand:
- Why Guardian Angel AI® must never feel like surveillance
- Why technical restraint matters more than conversion metrics

---

## 8. Product & Institutional Judgment (Most Important)

The implementer must demonstrate:
- Restraint over novelty
- Judgment over feature count
- Ability to say “no” to unnecessary UI ideas

This is a **safety infrastructure** site, not a startup landing page.

If a design choice feels impressive but not calm,
it is wrong.

---

## Final Requirement

The person or agent implementing this site must be able to answer “why” for every visual and motion decision.

If they cannot explain why an effect exists,
it must be removed.
