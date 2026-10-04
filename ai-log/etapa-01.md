# Stage 1: AI log

## Tools
- Gemini

## Conversations
- Project setup and layout assistance: helped structure semantic HTML5, CSS Grid/Flexbox layout, sticky footer logic, and color token configuration.

## Key requests

### 1. HTML5 Semantic Structure
Asked: Validated whether splitting the interface into two main panels (form on the left, inventory list on the right) meets HTML5 semantic standards and asked for proper `<label>` association.
- Got: Confirmation of `<section>` tags with dedicated `<h2>` headings and input label pairing, alongside extra decorative header text.
Changed or rejected: Implemented the clean panel structure but rejected the decorative subtitles in the header, keeping only the clean title and the required `.app-count` badge.

### 2. Dark Palette & CSS Variables
Asked: Brainstorming hex color values for an "Abyss Blue" dark theme in `:root` and badge contrast for status tags.
- Got: Suggested deep navy and slate tones with high-contrast badge background/text pairings.
Changed or rejected: Manually refined shades in browser DevTools to ensure contrast and a minimalist, non-cluttered look.

### 3. Layout: Sticky Footer
Asked: How to ensure the footer sticks to the bottom of the viewport when few items are rendered without using fixed positioning.
- Got: Recommended a Flexbox layout on `body` (`min-height: 100vh; display: flex; flex-direction: column;`) combined with `margin-top: auto;` on `.app-footer`.
Changed or rejected: Tested and applied the solution directly in `style.css`.

## What I learned / what did not work
I practiced using CSS Grid for the two-column layout (`320px 1fr`) and Flexbox for component alignment. I also learned how `:focus-visible` ensures keyboard accessibility without breaking mouse click aesthetics.