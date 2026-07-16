# Crime Apply and Review Test Automation

## Workflow

To create new tests:
- Create a test specification file in Gherkin format in `src/test/api/features/` or `src/test/ui/desktop/features/`
- Create a step file in `src/test/api/steps/`
- Generate the Playwright tests using Playwright-BDD: `pnpm bddgen`
- Run the Playwright tests: `pnpm playwright test`


## Tools

### Prettier
Use Prettier to format step files, schemas and configuration files. This will not fix any coding issues.

To use:
- Create your step files, schemas and configuration files
- Run Prettier to format files `pnpm prettier --write .`

### ESLint
Use ESLint to find coding issues.

To use:
- Create any required `.ts` files
Run ESLint to detect errors: `pnpm eslint`


## Important notes

### TypeScript
Do not upgrade to TypeScript 7 - this will break the ESLint configuration.
