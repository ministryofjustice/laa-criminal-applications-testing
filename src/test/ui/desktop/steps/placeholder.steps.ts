import { When, Then } from './fixtures.ts';
import { expect, test } from './fixtures.ts';

When('I navigate to the website', async ({ cvPage }) => {
  await cvPage.goto();
});

Then('I should see the title', async ({ cvPage }) => {
  expect(await cvPage.pageHeading.locator.innerText()).toBe(
    cvPage.pageHeading.value,
  );
});
