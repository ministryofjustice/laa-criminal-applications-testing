import { ApiTestContext } from '../fixtures/api-test-context.ts';
import { Given, When, Then, expect } from '../fixtures/fixtures.ts';
import dotenv from 'dotenv';
import { env } from '../../../config/env.ts';

dotenv.config({
  path: `.env.${process.env.STAGING_ENV ?? 'STAGING'}`,
})

Given('I do not have valid API access keys', async ({}) => {
  //
});

When(
  'I make a provider firm offices GET request for getting office information',
  async ({ request, apiContext }) => {
    //apiContext.response = await request.get(`${env.providerFirmOfficesUrl}`)
    apiContext.response = await request.get('https://jsonplaceholder.typicode.com/todos/1')
    apiContext.body = await apiContext.response.json();
  },
);

