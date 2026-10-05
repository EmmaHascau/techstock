# Stage 2: AI log

## Tools
- Gemini

## Conversations
- JavaScript Data Logic & Immutability: guided the implementation of immutable array operations (`map`, `filter`, `reduce`), custom ID increment logic, and defensive validation rules.

## Key requests

### 1. Unique ID Generation
Asked: How to properly generate incremental integer IDs for added items without running into collision bugs caused by `array.length + 1` after deletions.
- Got: Explanation of `reduce` with `Math.max` to track the absolute highest ID in the dataset.
Changed or rejected: Implemented the `nextId` helper function directly as recommended by the course guidelines.

### 2. Immutability in State Updates
Asked: Best practice for toggling product inventory status and creating a new record without mutating the source objects.
- Got: Suggested using object destructuring and array spreading (`[...list, newItem]` and `{ ...item, in_stock: !item.in_stock }`).
Changed or rejected: Applied object spread syntax across both `adaugaProdus` and `comutaStoc`, additionally handling stock quantity synchronization when switching out-of-stock items back to active.

### 3. Input Validation
Asked: Structuring validation guards for GSM product fields (rejecting empty names, invalid fixed enum tags, negative quantities or prices).
- Got: Recommended warning via `console.warn` and returning the unmodified array reference on failure.
Changed or rejected: Integrated checks for both the required fixed conditions and domain-specific numeric boundaries.

## What I learned / what did not work
I understood why direct mutation methods like `.push()` break change-detection paradigms in modern front-end frameworks like React, and how functional array methods allow safe state updates.