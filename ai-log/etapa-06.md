# Stage 6: AI log

## Tools
- Gemini

## Conversations
- https://gemini.google.com/app/0c0f7ed291b87384 (Implementation of json-server mock REST API, asynchronous fetch requests in api.js, useEffect mounting lifecycle, and robust loading/error state management)

## Key requests

### 1. Setting up json-server and Mock Database
Asked: How to install json-server version 0.17.4, structure `db.json` with product resources, and add an npm script to run the API concurrently.
- Got: Guidance on fixing the version to avoid random ID bugs, creating the resource endpoint `/produse`, and configuring the package.json script.
Changed or rejected: Configured the local mock server and populated it with initial GSM inventory data matching the TechStock domain.

### 2. Encapsulating Fetch Requests in api.js and Environment Variables
Asked: How to isolate HTTP requests inside a dedicated module (`api.js`) and read the server URL dynamically from environment variables.
- Got: Implementation details using `import.meta.env.VITE_API_URL` with a fallback operator (`??`) and handling `res.ok` checks for server errors.
Changed or rejected: Created `api.js` and `.env.example` to centralize all backend communication cleanly away from UI components.

### 3. useEffect Lifecycle and Loading/Error States
Asked: How to fetch data on component mount using `useEffect`, handle cleanup with an `ignore` flag to prevent memory leaks during strict mode double-renders, and display clear loading/error feedback.
- Got: Step-by-step logic for async load functions inside `useEffect`, structured try/catch/finally blocks, and conditional rendering for loading and server-down messages.
Changed or rejected: Integrated robust state handling in `App.jsx` ensuring smooth UI transitions across loading, success, and error scenarios.

## What I learned / what did not work
I learned how to handle asynchronous data fetching in React using `useEffect` and `async/await`, how to encapsulate backend communication inside a separate API module, and how to gracefully manage loading and error states to prevent blank screens when the server is unreachable.