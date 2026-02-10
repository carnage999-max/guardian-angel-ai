# Guardian Angel AI® — Visual & Interaction System

Intent:
"Calm awareness" — premium safety infrastructure that is explicitly NOT surveillance.

Palette:
- Background: near-black (#06080C) with deep navy undertone
- Text: soft white (#EAF0FF)
- Muted text: blue-gray (#9AA8C7)
- Accent: Guardian blue-cyan (from logo) used sparingly
- Surfaces: translucent navy glass

Materials:
- Glass + soft bloom (not neon)
- Subtle noise texture
- No grids, scanlines, camera motifs, reticles

Typography:
- Headings: modern, slightly geometric (e.g. Sora / Inter Tight / Geist)
- Body: Inter / system
- Tracking: slightly tighter headings, generous line-height body

Cards:
- Rounded: 18–24px
- Border: 1px soft blue-gray with low opacity
- Background: rgba(...) glass with blur
- Hover: tiny lift + border brighten (no glow explosion)

Dividers:
- Hairline (1px) gradient rule in accent color (very low opacity)
- Used between major sections only

Motion (CSS-first):
- Section reveal: translateY(10–16px) + opacity transition on intersection
- Card hover: translateY(-2px), subtle shadow
- Mobile carousels: scroll-snap x-mandatory, hide scrollbars elegantly
- No looping animations except ambient background halo

Three.js ambient halo background:
- A slow distorted glow blob behind content
- No scanning, no radar, no rotating rings
- Must be subtle enough to ignore, strong enough to feel premium
- Disable on prefers-reduced-motion and low-power devices
