# Stage 4: AI log

## Tools
- Gemini

## Conversations
https://gemini.google.com/app/0c0f7ed291b87384 (Component splitting into `ProdusList` and `ProdusCard`, props data flow mechanics from `App.jsx`, list rendering via `.map()` with unique `key` attributes, and object destructuring syntax)

## Key requests

### 1. Component Architecture and File Splitting
Asked: How to split the interface into separate components by creating a `components/` folder containing `ProdusList.jsx` for the whole list and `ProdusCard.jsx` for a single element.
- Got: Guidance on structuring files inside `frontend/src/components/` and exporting components using default exports.
Changed or rejected: Created the `components` directory and separated the markup cleanly into modular React files.

### 2. Props Data Flow and Object Destructuring
Asked: How to correctly pass the array from `App.jsx` into `ProdusList`, then individual items into `ProdusCard` using props, and how destructuring like `{ produs }` works conceptually.
- Got: Explanation of parent-to-child data passing and how destructuring extracts properties directly from the props object parameters.
Changed or rejected: Implemented prop attributes and destructured the `produse` and `produs` parameters in the component definitions.

### 3. List Rendering and Conditional States
Asked: How to render items dynamically using `.map()` with unique `key` attributes and how to handle empty lists.
- Got: Instructions on using `produs.id` as a stable key and implementing early return checks for empty arrays.
Changed or rejected: Applied `.map()` inside `ProdusList` with explicit `key` props and conditional rendering for empty inventories.

## What I learned / what did not work
I learned how to break down a monolithic layout into reusable React components, how parent-to-child data flows via props, how object destructuring simplifies property access in function parameters, and how to safely render arrays with unique keys while avoiding console warnings.