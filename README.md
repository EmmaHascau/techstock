# TechStock

A lightweight inventory management application tailored for IT & GSM mobile accessory shops.
It allows technicians and store managers to track available parts, accessories, and stock status.

## Data model

| Field | Type | Notes |
| :--- | :--- | :--- |
| product_name | text | required, max 100 chars |
| in_stock | boolean | toggled from the list, default false |
| condition | fixed values | Nou, Refurbished, Service/Piese |
| category | relation | Accesorii, Piese GSM, Periferice IT (from week 10) |
| user | relation | the store manager / technician (from week 11) |

Sample data used across all stages:
1. Incarcator Fast Charge 25W, active, Nou
2. Display OLED Galaxy S21, done, Service/Piese
3. Husa Silicon iPhone 15 Pro, active, Refurbished

## AI usage

| Tool | Used for |
| :--- | :--- |
| Gemini | Assisting with documentation drafting, data logic architecture, immutability implementation, component splitting, and props management |
| Claude | Brainstorming aesthetic themes, typography pairings (Fraunces & Figtree), and color token design for CSS |

Details per stage: see the ai-log/ folder.

## How to run
Navigate to the `frontend/` folder, install dependencies (`npm install`), and run the development server (`npm run dev`). Open the local URL provided by Vite in your browser.

## Stage 2: data logic
Plain JavaScript, no DOM. produse.js holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 4: components
The list is rendered from data through two components:
- `ProdusList` receives the whole array and renders one card per item (or an empty state message if the list is empty).
- `ProdusCard` receives a single item through props and displays its details.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data

## Verification table

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/README.md) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [mockup/index.html](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/mockup/index.html) | open the page |
| S1-R5 | finished card looks different | [mockup/style.css](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/mockup/style.css) | look at the card (.done) |
| S1-R6 | 2 columns on desktop, 1 under 700px | [mockup/style.css](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/mockup/style.css) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [mockup/style.css](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/mockup/style.css) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit history](https://github.com/EmmaHascau/techstock/commits/main) | commit history |
| S2-R1 | JS file linked, logs on page load | [mockup/index.html](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/mockup/index.html) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [mockup/produse.js](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/mockup/produse.js) | read |
| S2-R3 | list, count, search, add, toggle, delete | [mockup/produse.js](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/mockup/produse.js) | console output |
| S2-R4 | add rejects empty name and invalid tag | [mockup/produse.js](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/mockup/produse.js) | last console lines |
| S2-R5 | original array unchanged after add | [mockup/produse.js](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/mockup/produse.js) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/README.md), [ai-log/etapa-02.md](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [Commit history](https://github.com/EmmaHascau/techstock/commits/main) | commit history |
| S3-R1 | Vite + React project in frontend/ | [package.json](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/frontend/package.json) | read |
| S3-R2 | Data moved inside App.jsx | [App.jsx](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/frontend/src/App.jsx) | read |
| S3-R3 | Layout moved to App.jsx with JSX syntax | [App.jsx](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/frontend/src/App.jsx) | read |
| S3-R4 | UI looks identical to Stage 1 | [App.jsx](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/frontend/src/App.jsx) | open page |
| S3-R5 | README updated for React and status checked | [README.md](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/README.md) | read |
| S3-R6 | AI log for Stage 3 added | [ai-log/etapa-03.md](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/ai-log/etapa-03.md) | read |
| S3-R7 | Commit pushed | [Commit history](https://github.com/EmmaHascau/techstock/commits/main) | commit history |
| S4-R1 | 2+ components in src/components/ | [frontend/src/components](https://github.com/EmmaHascau/techstock/tree/5fdd6a7/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [ProdusCard.jsx](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/frontend/src/components/ProdusCard.jsx) | read |
| S4-R3 | map + key={id}, no console warnings | [ProdusList.jsx](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/frontend/src/components/ProdusList.jsx) | F12, Console |
| S4-R4 | message for empty list | [ProdusList.jsx](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/frontend/src/components/ProdusList.jsx) | set array to [] |
| S4-R5 | state changes the card look | [ProdusCard.jsx](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/frontend/src/components/ProdusCard.jsx) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/README.md), [ai-log/etapa-04.md](https://github.com/EmmaHascau/techstock/blob/5fdd6a7/ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [Commit history](https://github.com/EmmaHascau/techstock/commits/main) | commit history |