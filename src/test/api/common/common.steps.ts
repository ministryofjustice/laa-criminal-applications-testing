import { ApiTestContext, expect } from './fixtures.ts';
import { When, Then } from './fixtures.ts';

Then('I will receive a 401 Unauthorized response', async ({ apiContext }) => {
  const response = requireResponse(apiContext);
  expect(response.status()).toBe(401);
});

Then('the status is {int}', async ({ apiContext }, status: number) => {
  const response = requireResponse(apiContext);
  expect(response.status()).toBe(status);
});

function requireResponse(apiContext: ApiTestContext) {
  if (!apiContext.response) {
    throw new Error('No API response. Run a request step first.');
  }
  return apiContext.response;
}