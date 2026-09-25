import {
  APIRequestContext,
  APIResponse,
} from '@playwright/test';

import {
  ApiRequest,
} from './ApiRequestBuilder';

export class ApiClient {
  constructor(
    private readonly requestContext: APIRequestContext,
  ) {}

  async send(
    request: ApiRequest,
  ): Promise<APIResponse> {

    console.log('method:' + request.method);
    console.log('url:' + request.url);
    console.log('headers:' + JSON.stringify(request.headers));
    const options = {
      headers: request.headers,
      data: request.body,
    };

    switch (request.method) {
      case 'GET':
        return this.requestContext.get(
          request.url,
          options,
        );

      case 'POST':
        return this.requestContext.post(
          request.url,
          options,
        );

      case 'PUT':
        return this.requestContext.put(
          request.url,
          options,
        );

      case 'PATCH':
        return this.requestContext.patch(
          request.url,
          options,
        );

      case 'DELETE':
        return this.requestContext.delete(
          request.url,
          options,
        );

      default:
        throw new Error(
          `Unsupported HTTP method: ${request.method}`,
        );
    }
  }
}