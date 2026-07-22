// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default defineConfig({
    files: ['src/test/api/steps/*.ts'],
    extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        playwright.configs['flat/recommended']
    ],
    rules: {
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/await-thenable": "error",
        "playwright/no-standalone-expect": "off", // turning off since we are using Playwright-BDD
    },
    languageOptions: {
        parserOptions: {
            projectService: true,
        },
    },
});
