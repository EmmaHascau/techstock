# Stage 1: AI log

## Tools
- Gemini
- Claude

## Conversations
- Layout & Semantic Structure (Gemini): refined semantic HTML5 structure, CSS Grid/Flexbox layout, and accessibility focus states.
- Visual Theme & Typography (Claude): explored aesthetic concepts for hardware stock management, recommending typography pairings (Fraunces, Figtree) and the warm paper / PCB circuit trace styling.

## Key requests

### 1. HTML5 Semantic Structure & Form Controls
Asked: How to organize a hardware inventory dashboard with accessible form fields and distinct item cards without relying on generic wrapper divs.
- Got: Recommendations for `<section>` panels, direct `<label>` wrapping of inputs, and descriptive metadata blocks for pricing and stock.
Changed or rejected: Kept the suggested accessible structure and badge hierarchy, but customized labels and inputs to specifically match GSM/IT parts and accessories.

### 2. Visual Identity & Dual-Theme Palette
Asked: Brainstorming an authentic workshop theme with specific Google Fonts and a CSS variable system that transitions seamlessly from light mode to dark mode (`prefers-color-scheme: dark`).
- Got: Claude suggested pairing a characterful serif for headers with a clean geometric sans for UI text, along with warm cream / slate tones and circuit-trace aesthetics.
Changed or rejected: Adapted the suggested colors into CSS custom properties in `:root`, manually refining the contrast ratios and designing a custom folded-stamp indicator for out-of-stock items (`.done`).

### 3. Responsive Layout & Focus States
Asked: Structuring a responsive two-column grid that cleanly collapses on mobile viewports (< 700px) and maintaining keyboard focus indicators.
- Got: CSS Grid with `1fr 2fr` transitioning to `1fr` in `@media`, paired with `:focus-visible` styling.
Changed or rejected: Implemented and verified in browser DevTools.

## What I learned / what did not work
I practiced configuring CSS custom properties for effortless dark mode toggling, selecting cohesive typography pairings for a technical dashboard, and building responsive flexbox layouts.