# Task 3 — Side Effects

Blog app that fetches blog data from a local API on mount.

## Concepts Demonstrated
- useEffect for side effects
- Dependency array (empty = run once on mount)
- Data fetching with loading & error states
- Conditional rendering based on fetch status

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

## Components
- App, Navbar, Home, BlogList, BlogPreview
(see Task 1 for component breakdown)

## Notes
- CRUD operations update local React state only; they are not
  persisted to the JSON Server. API persistence is out of scope
  for this task.