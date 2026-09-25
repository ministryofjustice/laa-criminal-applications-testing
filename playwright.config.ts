import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { env } from './src/config/environment';
import dotenv from 'dotenv';
//import 'dotenv';

const uiTestDir = defineBddConfig({
  features: 'src/test/ui/features/*.feature',
  steps: 'src/test/ui/steps/*.ts',
  outputDir: '.bdd-gen/ui',
});

const apiTestDir = defineBddConfig({
  disableWarnings: { importTestFrom: true },
  features: 'src/test/api/features/*.feature',
  steps: 'src/test/api/steps/*.ts',
  importTestFrom: 'src/test/api/fixtures/api.fixture.ts',
  outputDir: '.bdd-gen/api',
});

const contractTestDir = defineBddConfig({
  features: 'src/test/api/contracts/features/*.feature',
  steps: 'src/test/api/contracts/steps/*.ts',
  outputDir: '.bdd-gen/contract',
});

export default defineConfig({
  reporter: [
    ["line"],  ["allure-playwright"]
  ],
  projects: [
    {
      name: 'ui',
      testDir: uiTestDir,

      use: {
        ...devices['Desktop Chrome'],
        baseURL: env.API_BASE_URL,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
      },
    },
    {
      name: 'api',
      testDir: apiTestDir,

      use: {
        baseURL: env.API_BASE_URL,
        trace: 'retain-on-failure',
      },
    },
  ],
});
