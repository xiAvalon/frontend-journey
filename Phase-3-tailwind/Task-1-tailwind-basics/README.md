# Task 5 — Forms in React

A blog app with full CRUD backed by a local API, client-side routing, and a controlled-input form for creating blogs.

## Concepts Demonstrated
- Controlled inputs (value + onChange, state as source of truth)
- Form submission with preventDefault and validation (required fields)
- Client-side routing (React Router: routes, params, useNavigate)
- Data fetching via a reusable custom hook (useFetch, covers part of phase-6 task-1)
- HTTP error handling on all requests (res.ok, .catch, .finally)

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

## Routes
- `/`            — Home, lists all blogs
- `/create`      — CreateBlog, controlled form to add a blog
- `/blogs/:id`   — BlogDetails, view / edit / delete a single blog

## Components & Hooks
- App — router shell and layout
- Navbar — navigation links
- Home — fetches and lists blogs
- BlogList / BlogPreview — render the list and each item
- CreateBlog — controlled form, POSTs a new blog
- BlogDetails — fetches one blog, supports PUT (edit) and DELETE
- useFetch — reusable fetch hook (loading / error / data)

## Notes
- All CRUD persists to the server (POST / PUT / DELETE), so data
  stays on refresh.
- useFetch is introduced ahead of Phase 6 (custom hooks); will still study/revise the relevant topic but decided to apply it here.
- Every request checks res.ok (since fetch does not reject on HTTP errors),
  catches network failures, and resets pending state in .finally.

## Important
- Task 4 (Rendering Lists) has been fulfilled since Task 1, where lists are rendered from state using stable unique keys (blog.id), so I decided to combine it with this task(5) since I forgot to mention it in earlier tasks.