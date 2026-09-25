import type {
  APIRequestContext,
  APIResponse,
} from '@playwright/test';

import type { ApiRequest } from '../builders/api-request.builder.ts';

export class ApiClient {
  constructor(
    private readonly request: APIRequestContext,
  ) {}

  async get(
    apiRequest: ApiRequest,
  ): Promise<APIResponse> {
    return this.request.put(apiRequest.endpoint, {
      params: apiRequest.query,
      headers: apiRequest.headers,
    });
  }

  async post(
    apiRequest: ApiRequest,
  ): Promise<APIResponse> {
    return this.request.post(apiRequest.endpoint, {
      params: apiRequest.query,
      headers: apiRequest.headers,
      data: apiRequest.body,
    });
  }

  async put(
    apiRequest: ApiRequest,
  ): Promise<APIResponse> {
    return this.request.put(apiRequest.endpoint, {
      params: apiRequest.query,
      headers: apiRequest.headers,
      data: apiRequest.body,
    });
  }

  async delete(
    apiRequest: ApiRequest,
  ): Promise<APIResponse> {
    return this.request.delete(apiRequest.endpoint, {
      params: apiRequest.query,
      headers: apiRequest.headers,
    });
  }
}
