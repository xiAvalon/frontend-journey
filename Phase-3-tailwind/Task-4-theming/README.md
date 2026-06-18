# Task 3 — Atomic Design

Refactored the app into the atomic design hierarchy.

## Setup
Requires JSON Server running locally:
\`\`\`
npx json-server --watch data/db.json --port 3000
\`\`\`
Then:
\`\`\`
npm install
npm run dev
\`\`\`

## Concepts Learned
Brad Frost's Atomic Design methodology:
- Atoms — smallest building blocks (Button, Input)
- Molecules — small groups of atoms working together (Field = Label + Input)
- Organisms — larger, distinct sections built from molecules/atoms (Navbar, BlogList)
- Templates — page-level layout/structure (none)
- Pages — templates filled with real content (my routed views)

## Notes
- Created a field component which combines both input and label for better readability and cleaner code.
- Skipped the templates folder as the app is relatively small, so kept the layout inside app.jsx without it feeling messy.