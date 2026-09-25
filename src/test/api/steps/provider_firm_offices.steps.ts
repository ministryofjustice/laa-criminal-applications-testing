/*
import { ApiTestContext } from '../fixtures/api.fixture';
import { Given, When, Then } from '../fixtures/api.fixture';
import { test } from '../fixtures/api.fixture';
import dotenv from 'dotenv';
import { envSchema } from '../../config/env.schema';
import { ApiRequestBuilder } from '@api/clients/ApiRequestBuilder';
import { ApiClient } from '@api/clients/ApiClient';
import { env } from '../../config/environment';
import { ProviderFirmOfficesEndpoints } from '@api/endpoints/provider_firm_offices.endpoints';
import { ProviderFirmOfficesService } from '@api/services/ProviderFirmOfficesService';
*/
import { Given, When, Then } from '../fixtures/api.fixture.ts';
import dotenv from 'dotenv';
import { expect } from '../fixtures/api.fixture.ts';

dotenv.config({
  path: `.env.${process.env.STAGING_ENV ?? 'STAGING'}`,
})

When('I make a DELETE request for office information with office number {int}', 
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {

    apiContext.response = await providerFirmOfficesService.deleteProviderFirmOffice(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);

When('I make a GET request for office information with office number {int}', 
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {

    apiContext.response = await providerFirmOfficesService.getProviderFirmOffice(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);

When('I make a text\\/plain GET request for office information with office number {int}', 
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {

    apiContext.response = await providerFirmOfficesService.acceptTextPlainGetTextPlainProviderFirmOffice(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);

When('I make a PATCH request for office information with office number {int}', 
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {

    apiContext.response = await providerFirmOfficesService.patchProviderFirmOffice(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);

When('I make a POST request for office information with office number {int}', 
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {

    apiContext.response = await providerFirmOfficesService.postProviderFirmOffice(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);

When('I make a PUT request for office information with office number {int}', 
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {

    apiContext.response = await providerFirmOfficesService.putProviderFirmOffice(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);

When('I make a GET request for provider office schedule with office number {int}',
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {
    apiContext.response = await providerFirmOfficesService.getSchedules(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);

When('I make a DELETE request for office provider schedule information with office number {int}',
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {
    apiContext.response = await providerFirmOfficesService.deleteSchedules(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);

When('I make a PATCH request for office provider schedule information with office number {int}',
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {
    apiContext.response = await providerFirmOfficesService.patchSchedules(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);

When('I make a POST request for office provider schedule information with office number {int}',
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {
    apiContext.response = await providerFirmOfficesService.postSchedules(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);

When('I make a PUT request for office provider schedule information with office number {int}',
  async ({ providerFirmOfficesService, apiContext }, officeAccountNumber: number) => {
    apiContext.response = await providerFirmOfficesService.putSchedules(
      officeAccountNumber,
      apiContext.authToken,
    );
  },
);
