import { APIResponse } from '@playwright/test';
import { env } from '../../../config/environment.ts';
import { ApiClient } from '../clients/ApiClient.ts';
import { ApiRequestBuilder } from '../clients/ApiRequestBuilder.ts';
import { ProviderFirmOfficesEndpoints } from '../endpoints/provider_firm_offices.endpoints.ts';

export class ProviderFirmOfficesService {
  constructor(
    private readonly apiClient: ApiClient,
  ) {}

  /*
  async deleteProviderFirmOffice(authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOffices())
      .authorizationIf(authToken)
      .accept();

    return this.apiClient.send(
      builder.delete(),
    );
  }
  */

  async deleteProviderFirmOffice(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      .acceptApplicationJson();

    return this.apiClient.send(
      builder.delete(),
    );
  }

  async getProviderFirmOffice(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      .acceptApplicationJson();

    return this.apiClient.send(
      builder.get(),
    );
  }

  async getTextPlainProviderFirmOffice(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken);
      //.textPlainContentType();

    return this.apiClient.send(
      builder.get(),
    );
  }

  async acceptTextPlainGetTextPlainProviderFirmOffice(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      //.textPlainContentType()
      .acceptTextPlain();

    return this.apiClient.send(
      builder.get(),
    );
  }

  async patchProviderFirmOffice(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      .acceptApplicationJson();

    return this.apiClient.send(
      builder.patch(),
    );
  }

  async postProviderFirmOffice(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      .acceptApplicationJson();

    return this.apiClient.send(
      builder.post(),
    );
  }

  async putProviderFirmOffice(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      .acceptApplicationJson();

    return this.apiClient.send(
      builder.put(),
    );
  }

  async deleteSchedules(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      .acceptApplicationJson();

    return this.apiClient.send(
      builder.delete(),
    );
  }

  async getSchedules(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      .acceptApplicationJson();

    return this.apiClient.send(
      builder.get(),
    );
  }

  async patchSchedules(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      .acceptApplicationJson();

    return this.apiClient.send(
      builder.patch(),
    );
  }

  async postSchedules(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      .acceptApplicationJson();

    return this.apiClient.send(
      builder.post(),
    );
  }

  async putSchedules(officeCode: number, authToken?: string): Promise<APIResponse> {
    const builder = new ApiRequestBuilder( env.API_BASE_URL)
      .endpoint(ProviderFirmOfficesEndpoints.providerOfficesOfficeCode(officeCode))
      .authorizationIf(authToken)
      .acceptApplicationJson();

    return this.apiClient.send(
      builder.put(),
    );
  }
}