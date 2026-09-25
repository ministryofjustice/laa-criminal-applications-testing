import { ApiTestContext } from '../fixtures/api.fixture.ts';
import { Given, When, Then, expect } from '../fixtures/api.fixture.ts';
import { env } from '../../../config/environment.ts';

Given('I do not have valid API access keys', async ({}) => {
  //
});

Given('I have valid API access keys', async ({ apiContext }) => {
  apiContext.authToken = env.API_TOKEN;
});

Then('I will receive a 200 OK response', async ({ apiContext }) => {
  const response = requireResponse(apiContext);
  expect(response.status()).toBe(200);
});

Then('I will receive a 401 Unauthorized response', async ({ apiContext }) => {
  const response = requireResponse(apiContext);
  expect(response.status()).toBe(401);
});

Then('I will receive a 403 Forbidden response', async ({ apiContext }) => {
  const response = requireResponse(apiContext);
  expect(response.status()).toBe(403);
});

Then('I will receive a 405 Method Not Allowed response', async ({ apiContext }) => {
  const response = requireResponse(apiContext);
  expect(response.status()).toBe(405);
});

Then('the status is {int}', async ({ apiContext }, status: number) => {
  const response = requireResponse(apiContext);
  expect(response.status()).toBe(status);
});

Then('I will receive a JSON response', async ({ apiContext }) => {
  console.log(apiContext.response?.headers());
  expect(apiContext.response?.headers()['content-type']).toContain('application/json');
  //expect(apiContext.body).toBeDefined();
})

function requireResponse(apiContext: ApiTestContext) {
  if (!apiContext.response) {
    throw new Error('No API response. Run a request step first.');
  }
  return apiContext.response;
}
