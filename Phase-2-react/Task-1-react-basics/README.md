# Task 1 — React Basics

A blog app for displaying a list of blogs (built to practice Components, Props, State, Event handling)

## Concepts Demonstrated
- Components & composition
- Props
- Event handling (onClick)
- Derived state (filtered blogs)
- List rendering with stable keys

## Components
- App — root shell
- Navbar — top navigation
- Home — page container, owns blog state
- BlogList — renders a list of blogs (reusable)
- BlogPreview — renders a single blog (reusable)

## Run Locally
\`\`\`
npm install
npm run dev
\`\`\`

## Notes
- Used derived state for filtering to avoid bugs, reduce code, and for real time accuracy.
- Used 'updater' to ensure I'm working with the most up-to-date state, and prevent data overwriting.
- Implemented prop drilling (passed props from parent to BlogList to BlogPreview), in a larger app we would use Context or a state manager.