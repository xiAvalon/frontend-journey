# Phase 6 — Task 1: Custom Hooks

Reusable custom hooks extracted from the blog app.

## Hooks
- useFetch(url) — data fetching with loading / error / data states,
  res.ok checking, and AbortController cleanup.
- useForm(initialValues) — manages form state for any set of fields
  via one generic handleChange (keyed by input name). Returns
  { values, setValues, handleChange, reset }. Reused in both the
  Create and Edit forms.

## Concepts Demonstrated
- A custom hook lets me reuse logic, not data. When two components
  use the same hook, each gets its own separate state. For example,
  Home and BlogDetails both call useFetch, but they hold different
  data — fetching a single blog doesn't overwrite the home list.
- Hook names must start with "use", and hooks can't be called inside conditions or loops — they have to run in the same order every render.
- I made useFetch return an object { data, isPending, error } instead of an array, because these names are fixed and I want to grab them by name in any order.

## Note
This task was started during Phase 2 (useFetch emerged
naturally while building the blog app) and completed early here,
since it was already half-done. However, I will go in depth on the documentation and re-write using TS when reaching phase-6. 