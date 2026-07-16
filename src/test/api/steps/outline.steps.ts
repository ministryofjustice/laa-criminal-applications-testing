import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures.ts';

Given ("there are {int} cucumbers", async ({ page }, count: number) => {
    await page.goto("https://playwright.dev");
});

When("I eat {int} cucumbers", async ({ page }, name) => {});

Then("I should have left {int} cucumbers", async ({ page }, count: number) => {
    await expect(count < 10);
});
