import type { APIResponse } from '@playwright/test';
import { test as base, createBdd } from 'playwright-bdd';

/*
export type ApiTestContext = {
    response?: APIResponse;
    body?: unknown;
    validatedBody?: unknown;
};
*/

export type ApiTestContext<T = unknown> = {
    response?: APIResponse;
    body?: unknown;
    validatedBody?: T;
    testData: Record<string, unknown>;
};

export type CalculationCase = {
  firstNumber: number;
  secondNumber: number;
  expectedResult: number;
  actualResult?: number;
};


type Fixtures = {
    apiContext: ApiTestContext;
    calculationCases: CalculationCase[];
};

export const test = base.extend<Fixtures>({
    apiContext: async ({}, use) => {
        const context: ApiTestContext = {
            testData: {},
        };
        await use(context);
    },
    calculationCases: async ({}, use) => {
        // A new array is created for every scenario/test.
        const cases: CalculationCase[] = [];

        await use(cases);
    },
});

export const { Given, When, Then } = createBdd(test);
export { expect } from '@playwright/test';
