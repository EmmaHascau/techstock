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
| Gemini | Assisting with documentation drafting, structuring the HTML/CSS mockup, and project setup guidance |

Details per stage: see the ai-log/ folder.

## How to run
Open index.html in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Verification table

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/EmmaHascau/techstock/blob/f41c34e/README.md) | read |
| S1-R2 | AI usage section | [README.md#L18-L23](https://github.com/EmmaHascau/techstock/blob/f41c34e/README.md#L18-L23) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/EmmaHascau/techstock/blob/f41c34e/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L9-L65](https://github.com/EmmaHascau/techstock/blob/f41c34e/index.html#L9-L65) | open the page |
| S1-R5 | finished card looks different | [style.css#L162-L170](https://github.com/EmmaHascau/techstock/blob/f41c34e/style.css#L162-L170) | look at the card (.done) |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L177-L187](https://github.com/EmmaHascau/techstock/blob/f41c34e/style.css#L177-L187) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L172-L175](https://github.com/EmmaHascau/techstock/blob/f41c34e/style.css#L172-L175), [style.css#L189-L203](https://github.com/EmmaHascau/techstock/blob/f41c34e/style.css#L189-L203) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit f41c34e](https://github.com/EmmaHascau/techstock/commit/f41c34e) | commit history |