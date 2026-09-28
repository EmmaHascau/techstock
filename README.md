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