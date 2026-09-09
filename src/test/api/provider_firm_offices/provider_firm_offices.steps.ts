import { ApiTestContext, expect } from '../common/fixtures.ts';
import { Given, When, Then } from '../common/fixtures.ts';
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
    apiContext.response = await request.get(`${env.providerFirmOfficesUrl}`)
    apiContext.body = await apiContext.response.json();
  },
);

