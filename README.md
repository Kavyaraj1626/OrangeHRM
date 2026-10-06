# OrangeHRM Playwright Automation

This project contains Playwright end-to-end tests for the OrangeHRM demo website. The suite covers login scenarios and key Admin and PIM workflows used in this workspace.

## Project structure

- `package.json` — project metadata and Playwright dev dependencies
- `playwright.config.js` — Playwright configuration, browser projects, and HTML reporter
- `tests/` — all test files
  - `login.spec.js` — login validation scenarios for valid, invalid, and blank credentials
  - `Admin/`
    - `Addjobtittle.spec.js` — adds a job title and validates admin job configuration flow
    - `Addempstatus.spec.js` — adds an employment status under Admin > Job
  - `PIM/`
    - `Addemp.spec.js` — adds an employee record from the PIM module
  - `example.spec.js` — sample Playwright example test
- `playwright-report/` — generated HTML test report output
- `test-results/` — raw Playwright execution artifacts and screenshots/traces
- `e2e/` — additional end-to-end test artifacts or future automation folders

## Tech stack

- Playwright Test
- JavaScript (CommonJS project setup)
- Chromium, Firefox, and WebKit browser projects enabled in the config

## Prerequisites

- Node.js 18 or above
- npm

## Setup

```bash
npm install
npx playwright install
```

## Run tests

```bash
npx playwright test
```

Run a specific file:

```bash
npx playwright test tests/login.spec.js
npx playwright test tests/Admin/Addjobtittle.spec.js
npx playwright test tests/PIM/Addemp.spec.js
```

Run a specific browser project:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## View reports

```bash
npx playwright show-report
```

This project currently uses the HTML reporter configured in `playwright.config.js`, and the generated report is stored under the `playwright-report/` folder.
