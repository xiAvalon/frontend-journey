# Task 2 — Component UI Patterns

Extracted reusable UI components (`Button`, `Input`) and refactored the app to use them, replacing the repeated class strings left inline in Task 1.

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
The main thing was figuring out how to design a props API for reusable components — what to name explicitly (`variant`) vs. what to just forward with `...rest`. Conditional styling with a variant map, polymorphic components via an `as` prop, and keeping spacing (margins) out of the component itself so it stays usable in different layouts.

## Notes
- Added a `danger` variant for Delete so the destructive action looks different
  from the normal buttons.
- Set `type='button'` on Cancel: a `<button>` inside a `<form>` defaults to
  `type='submit'`, which would submit the form when clicked.
- Made the Add button a single button whose label and `disabled` are driven by
  `isPending`, instead of rendering two separate buttons — same pattern as Save.
- Made `Input` polymorphic with an `as` prop, so one component renders `<input>`,
  `<textarea>`, or `<select>`.
- `<Input>` renders `{children}` inside the chosen tag. That's safe for
  `<input>`/`<textarea>` only because nothing is passed as children there
  (learned that undefined children are allowed in react), children are actually used for the `<select>` options.
