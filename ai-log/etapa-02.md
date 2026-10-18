# Stage 2: AI log

## Tools
- Gemini

## Conversations
https://gemini.google.com/app/b93b8cac935ee3f0 (JavaScript data logic, immutability, array methods map, filter, reduce, and input validation guards)

## Key requests

### 1. Unique ID Generation
Asked: How to properly generate incremental integer IDs for added items without running into collision bugs caused by array.length + 1 after deletions.
- Got: Explanation of reduce with Math.max to track the absolute highest ID in the dataset.
Changed or rejected: Implemented the nextId helper function directly as recommended by the course guidelines.

### 2. Immutability in State Updates
Asked: Best practice for toggling product inventory status and creating a new record without mutating the source objects.
- Got: Suggested using object destructuring and array spreading ([...list, newItem] and { ...item, in_stock: !item.in_stock }).
Changed or rejected: Applied object spread syntax across both the add and toggle functions, ensuring immutable state updates.

### 3. Input Validation Guards
Asked: Structuring validation guards for GSM product fields (rejecting empty names and invalid fixed enum tags).
- Got: Recommended warning via console log and returning the unmodified array reference on failure.
Changed or rejected: Implemented early return guards with trim() and includes() to safely preserve the original array on invalid inputs.

## What I learned / what did not work
I learned why direct mutation methods like .push() break change-detection paradigms in modern front-end frameworks like React, and how functional array methods allow safe state updates. I also understood how to use reduce and Math.max to safely calculate unique identifiers, avoiding collision issues caused by array length calculations after deletions.