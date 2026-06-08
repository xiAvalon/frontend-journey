# Task 6 — Practical Projects: Todo App

A fully-featured todo app with localStorage persistence.

## Features
- Add todos (validated — no empty entries)
- Toggle complete / incomplete
- Delete todos
- Filter: all / active / completed
- Adds item on Enter (click)
- Persists across page refreshes (localStorage)

## Concepts Demonstrated
- useState for local state (todos, input, filter)
- Controlled input (value + onChange, state as source of truth)
- Immutable updates (map returns new objects, filter for removal,
  spread for adds — no direct mutation)
- Stable keys (crypto.randomUUID, never index)
- Derived state (filtered list computed at render, not stored)
- Custom hook (useLocalStorage)

## Custom Hook — useLocalStorage
useLocalStorage(key, initialValue) works like useState but persists
the value to localStorage. Lazy initializer reads stored data on
mount (falling back to initialValue); a useEffect writes on change.
Returns [value, setValue], so it's a drop-in for useState and
supports the updater form.

## Run Locally
\`\`\`
npm install
npm run dev
\`\`\`

## Notes
- CSS is intentionally minimal — the focus was to practice the concepts demonstrated and get a good grasp of them.
- I used localStorage instead of a JSON server since the earlier task already demonstrates server-based CRUD, and to practice additional browser APIs.