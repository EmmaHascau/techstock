# Stage 3: AI log

## Tools
- Gemini

## Conversations
https://gemini.google.com/app/0c0f7ed291b87384 (React StrictMode behavior, CSS file import setup, static data placement scope, JSON.stringify raw data previewing using `<pre>`, and JSX variable interpolation)

## Key requests

### 1. CSS & StrictMode Configuration
Asked: How to import the old custom CSS into the new Vite project and what `React.StrictMode` does technically.
- Got: Explanation of replacing `index.css` import in `main.jsx` and why `StrictMode` double-renders components in development for side-effect detection.
Changed or rejected: Configured `App.css` directly into the Vite template and retained strict mode for debugging adherence.

### 2. Static Data Scope and JSX Interpolation
Asked: Why mock data arrays should be declared outside the `App()` component scope and how variables are rendered via curly braces.
- Got: Explanation of render lifecycles preventing memory re-allocation on every re-render and using `{}` interpolation inside JSX.
Changed or rejected: Kept the product array above the component function and interpolated item counts dynamically.

### 3. Raw Data Preview via JSON.stringify
Asked: How to display raw data as a formatted string using `<pre>` and `JSON.stringify` with `null` and `2` parameters.
- Got: Breakdown of the replacer (`null`) and spacing (`2`) arguments alongside the layout function of the preformatted text element.
Changed or rejected: Implemented `{JSON.stringify(produse, null, 2)}` wrapped in a `<pre>` tag for staging phase verification.

## What I learned / what did not work
I learned how to migrate a static HTML layout into a modern React component structure using Vite, how variable scoping impacts component re-renders, and how to safely inspect state data in raw text format during early development stages.