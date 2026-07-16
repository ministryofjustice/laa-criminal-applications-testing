import type { APIResponse } from '@playwright/test';
import { test as base, createBdd } from 'playwright-bdd';

export type ApiTestContext = {
    response?: APIResponse;
    body?: unknown;
    validatedBody?: unknown;
};

type Fixtures = {
    apiContext: ApiTestContext;
};

export const test = base.extend<Fixtures>({
    apiContext: async ({}, use) => {
        const context: ApiTestContext = {};
        await use(context);
    },
});

export const { Given, When, Then } = createBdd(test);
export { expect } from '@playwright/test';
