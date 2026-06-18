# Task 4: Theming with Tailwind CSS v4

A blog app supporting dark mode theming.

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
- Defining a custom theme using CSS variables in `index.css`
- Mapping CSS variables to Tailwind color tokens via `@theme inline` to avoid hardcoded colors
- Toggling dark mode by adding a `.dark` class to `<html>` via `document.documentElement`
- Using `@custom-variant dark` to apply dark mode styles with the `dark:` prefix
- `color-scheme` to style native browser controls (inputs, scrollbars) in dark mode
- Explicit `option` background/color styling to fix native select dropdown visibility in dark mode
