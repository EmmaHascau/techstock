# Stage 1: AI log

## Tools
- Gemini
- Claude

## Conversations
- https://gemini.google.com/app/7df1acde025922d6 (Layout & Semantic Structure: refined semantic HTML5 structure, CSS Grid/Flexbox layout, and accessibility focus states.)
- https://claude.ai/chat/414a12f4-9015-4775-859b-2765e76e4d01 (Visual Theme & Typography: explored aesthetic concepts for hardware stock management, recommending typography pairings and the warm paper / PCB circuit trace styling.)

## Key requests

### 1. HTML5 Semantic Structure & Form Controls
Asked: How to organize a hardware inventory dashboard with accessible form fields and distinct item cards without relying on generic wrapper divs.
- Got: Recommendations for `<section>` panels, direct `<label>` wrapping of inputs, and descriptive metadata blocks for pricing and stock. The AI provided a structural hierarchy separating the header, main content, and footer using semantic tags to enhance both readability and accessibility.
Changed or rejected: Kept the suggested accessible structure and badge hierarchy, but customized labels and inputs to specifically match GSM/IT parts and accessories. I manually adjusted the form inputs to include numeric validations, length constraints, and specific dropdown options relevant to the TechStock domain rather than utilizing generic placeholders.

### 2. Visual Identity & Dual-Theme Palette
Asked: Brainstorming an authentic workshop theme with specific Google Fonts and a CSS variable system that transitions seamlessly from light mode to dark mode (`prefers-color-scheme: dark`).
- Got: Claude suggested pairing a characterful serif for headers with a clean geometric sans for UI text, along with warm cream / slate tones and circuit-trace aesthetics. It provided a baseline `:root` configuration for establishing scalable color tokens.
Changed or rejected: Adapted the suggested colors into CSS custom properties in `:root`, manually refining the contrast ratios and designing a custom folded-stamp indicator for out-of-stock items (`.done`). I completely rewrote the CSS variable mappings to ensure the dark theme provides a highly legible, authentic workshop feel (dark slate and burgundy) rather than just executing a simple mathematical color inversion.

### 3. Responsive Layout & Focus States
Asked: Structuring a responsive two-column grid that cleanly collapses on mobile viewports (< 700px) and maintaining keyboard focus indicators.
- Got: CSS Grid with `1fr 2fr` transitioning to `1fr` in `@media`, paired with distinct `:focus-visible` styling for comprehensive keyboard accessibility.
Changed or rejected: Implemented and verified the transition breakpoints directly within the browser DevTools. I further refined the mobile layout by adjusting the padding values, removing the decorative pseudo-elements on smaller screens to maximize usable space, and ensuring the interface strictly adheres to the single-column requirement for viewports under 700px.

## What I learned / what did not work
I practiced configuring CSS custom properties for effortless dark mode toggling, selecting cohesive typography pairings for a technical dashboard, and building responsive flexbox and grid layouts. I also learned that directly integrating AI-generated color palettes often results in suboptimal contrast ratios for accessibility, requiring extensive manual fine-tuning and visual testing to ensure legibility standards are met across both the light and dark themes. The integration of semantic HTML elements substantially improved both the logical structure of the web application and its overall code maintainability.