import { expect } from '@playwright/test';
import { CvPage } from '../pages/CvPage.ts';
import { test as base, createBdd } from 'playwright-bdd';

type PageFixtures = {
  cvPage: CvPage;
};

export const test = base.extend<PageFixtures>({
  cvPage: async ({ page }, use) => {
    const cvPage = new CvPage(page);
    await cvPage.goto();
    await use(cvPage);
  },
});

export { expect };
export const { Given, When, Then } = createBdd(test);
