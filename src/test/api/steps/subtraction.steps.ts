import { expect } from '@playwright/test';
import { createBdd, DataTable } from 'playwright-bdd';
import { test } from './fixtures.ts';

const { Given, When, Then } = createBdd(test);

Given('the following subtraction cases:',
  async ({ calculationCases }, dataTable: DataTable) => {
    const rows = dataTable.hashes();

    for (const row of rows) {
      calculationCases.push({
        firstNumber: Number(row.firstNumber),
        secondNumber: Number(row.secondNumber),
        expectedResult: Number(row.expectedResult),
      });
    }
  },
);

When(
  'each subtraction is calculated',
  async ({ calculationCases }) => {
    for (const calculationCase of calculationCases) {
      calculationCase.actualResult =
        calculationCase.firstNumber -
        calculationCase.secondNumber;
    }
  },
);

Then(
  'every calculated result should equal the expected result',
  async ({ calculationCases }) => {
    for (const calculationCase of calculationCases) {
      expect(
        calculationCase.actualResult,
        `${calculationCase.firstNumber} - ` +
          `${calculationCase.secondNumber} should equal ` +
          `${calculationCase.expectedResult}`,
      ).toBe(calculationCase.expectedResult);
    }
  },
);