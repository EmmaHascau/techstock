# Stage 7: AI log

## Tools
- Claude

## Conversations
- https://gemini.google.com/app/0c0f7ed291b87384 (Review of the project against the Stage 7 guide, form and validation, CRUD through api.js, data-testid and tw.json, CSS cleanup)

## Key requests

### 1. Aligning the project with the Stage 7 guide
Asked: Compare my project with the Stage 7 requirements and list what is inconsistent.
- Got: A list of mismatches: README data model vs real field names, CSS classes (item-*) not matching the JSX classes (task-*), missing fonts and favicon, new products created with in_stock derived from quantity instead of false.
Changed or rejected: Fixed all of them; kept the Romanian field names (denumire, conditie, pret, cantitate, categorie) and updated the README instead.

### 2. Form validation and error handling
Asked: How to validate the name, price and quantity and show the error next to the form.
- Got: A validation function returning the field and the message, aria-invalid only on the wrong field, error shown in the page (no alert), button disabled while saving, fields cleared only after a successful save.
Changed or rejected: Added the price and quantity checks on top of the required name and the 100 char limit.

### 3. Layout and card design
Asked: Why the interface looked broken after Stage 6.
- Got: The grid columns were uneven because of the implicit minimum width of 1fr; fixed with minmax(0, 1fr) minmax(0, 2fr). Cards rebuilt on the item-card styles from the mockup, with the stock toggle and delete button inside.
Changed or rejected: Moved the chip watermark so it does not overlap the price.

## What I learned / what did not work
I learned that the server must confirm a change before the list is updated, why the error must travel from api.js through handleAdd back to the form, and that a 1fr grid column can grow because of its content unless it is written as minmax(0, 1fr).