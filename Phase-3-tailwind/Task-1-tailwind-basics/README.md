# Task 1 — Tailwind Basics

Migrated the blog app from hand-written css to Tailwind.

## Concepts Demonstrated/Learned
- Utility-first styling: everything is styled with Tailwind classes directly in
  the JSX, so the CSS file stays almost empty.
- Used Tailwind's spacing scale instead of arbitrary pixel values to keep spacing
  consistent across the app.
- Mobile-first responsive layout: a single fluid column with max-width caps, plus
  an `md:` breakpoint on the content wrapper so spacing opens up on larger screens.
- Set the global font in the `base` layer, and used one `@apply` class
  (`.nav-link`) for the repeated navbar links.

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
