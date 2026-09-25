import { APIResponse } from '@playwright/test';
import { test as base, createBdd } from 'playwright-bdd';
import { ApiClient } from '../clients/ApiClient.ts';
import { ProviderFirmOfficesService } from '../services/ProviderFirmOfficesService.ts';

export type ApiTestContext = {
  authToken?: string;
  response?: APIResponse;
  body?: unknown;
};

type ApiFixtures = {
  apiClient: ApiClient;
  providerFirmOfficesService: ProviderFirmOfficesService;
  apiContext: ApiTestContext;
};

export const test = base.extend<ApiFixtures>({
  apiClient: async ({ request }, use) => {
    await use(new ApiClient(request));
  },

  providerFirmOfficesService: async ({ apiClient }, use) => {
    await use(
      new ProviderFirmOfficesService(apiClient),
    );
  },

  apiContext: async ({}, use) => {
    await use({});
  },
});

export const { Given, When, Then } = createBdd(test);
export { expect } from '@playwright/test';
