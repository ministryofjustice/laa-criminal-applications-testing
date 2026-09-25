import { request, APIRequestContext } from '@playwright/test';
import { test as base, createBdd } from 'playwright-bdd';
import { env } from '../../../config/env.ts';
import { ApiClient } from '../clients/api.client.ts';
import { ApiTestContext } from './api-test-context.ts';
import { apiConfig } from '../../../config/api.config.ts';

/*
export type ApiTestContext = {
    response?: APIResponse;
    body?: unknown;
    validatedBody?: unknown;
};
*/

type ApiFixtures = {
  apiRequest: APIRequestContext;
  apiClient: ApiClient;
  apiContext: ApiTestContext;
};

export const test = base.extend<ApiFixtures>({
  apiRequest: async ({}, use) => {
    const apiRequest = await request.newContext({
      baseURL: apiConfig.baseUrl,
    });

    await use(apiRequest);

    await apiRequest.dispose();
  },

  apiClient: async ({ apiRequest }, use) => {
    const client = new ApiClient(apiRequest);

    await use(client);
  },

  apiContext: async ({}, use) => {
    await use({});
  },
})

/*
export type ApiTestContext<T = unknown> = {
  response?: APIResponse;
  body?: unknown;
  validatedBody?: T;
  testData: Record<string, unknown>;
};

type Fixtures = {
  apiContext: ApiTestContext;
};
*/

/*
export const test = base.extend<Fixtures>({
  apiContext: async ({}, use) => {

    const context: ApiTestContext = {
      testData: {},
    };
    await use(context);
  },
});
*/

export const { Given, When, Then } = createBdd(test);
export { expect } from '@playwright/test';
