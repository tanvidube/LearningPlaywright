# Learning Playwright

A personal workspace for learning [Playwright](https://playwright.dev/) and related JavaScript basics. Content is organized by chapter folders so you can grow the repo as you progress.

## Prerequisites

- **Node.js** (LTS recommended) — used to run the sample scripts and, when you add them, Playwright tests.

## Repository layout

| Path | Purpose |
|------|---------|
| `chapter_01_Basics/` | Early scripts: console output, loops, and Node `process` checks |
| `chapter_02_JavaScript_Basics/` | Placeholder for upcoming material (currently empty) |

## Running the chapter scripts

From the repository root:

```bash
node chapter_01_Basics/01_basics.js
node chapter_01_Basics/02_JS_Step_By_Step.js
node chapter_01_Basics/03_verify_setup.js
```

`03_verify_setup.js` prints your OS, CPU architecture, and Node version — useful when checking that your environment matches expectations.

## Playwright tests (when you add them)

The `.gitignore` is already set up for typical Playwright and Node artifacts (`node_modules/`, `test-results/`, `playwright-report/`, etc.). When you introduce automated browser tests, install the test runner and browsers from the [Playwright installation docs](https://playwright.dev/docs/intro), then run tests with the commands shown there (commonly `npx playwright test`).

---

This repo is for learning; extend chapters and add a `package.json` when you start using npm packages or the official Playwright test runner.
