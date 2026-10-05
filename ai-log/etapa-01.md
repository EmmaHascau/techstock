# Stage 1: AI log

## Tools
- Gemini

## Conversations
- Layout & Design Assistance: refined semantic HTML5 structure, CSS Grid/Flexbox layout, accessibility focus styles, and the dual-theme color token palette.

## Key requests

### 1. HTML5 Semantic Structure & Form Controls
Asked: How to organize a hardware inventory dashboard with accessible form fields and distinct item cards without relying on generic wrapper divs.
- Got: Recommendations for `<section>` panels, direct `<label>` wrapping of inputs, and descriptive metadata blocks for pricing and stock.
Changed or rejected: Kept the suggested accessible structure and badge hierarchy, but customized labels and inputs to specifically match GSM/IT parts and accessories.

### 2. Dual-Theme Palette & Contrast
Asked: Defining custom CSS variables in `:root` for a warm paper/hardware aesthetic in light mode and deep navy/slate in dark mode (`prefers-color-scheme: dark`).
- Got: Suggested variable pairs for `--bg`, `--card`, status indicators (`--ok`, `--out`), and category badges.
Changed or rejected: Fine-tuned contrast for high legibility, adding custom subtle borders and visual cues for out-of-stock items (`.done`).

### 3. Responsive Layout & Focus States
Asked: Structuring a responsive two-column grid that cleanly collapses on mobile viewports (< 700px) and maintaining keyboard focus indicators.
- Got: CSS Grid with `1fr 2fr` transitioning to `1fr` in `@media`, paired with `:focus-visible` styling.
Changed or rejected: Implemented and verified in browser DevTools.

## What I learned / what did not work
I practiced using modern CSS variables for zero-redundancy dark mode support, and learned how to craft responsive flexbox layouts that reorder content cleanly on smaller mobile screens.