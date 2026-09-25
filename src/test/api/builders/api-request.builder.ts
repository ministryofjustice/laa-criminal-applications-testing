export type ApiRequest = {
  endpoint: string;
  query?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
  body?: unknown;
};

export class ApiRequestBuilder {
  private request: ApiRequest = {
    endpoint: '',
  };

  withEndpoint(endpoint: string): this {
    this.request.endpoint = endpoint;
    return this;
  }

  withQueryParam(
    key: string,
    value: string | number | boolean,
  ): this {
    this.request.query ??= {};
  
    this.request.query[key] = value;

    return this;
  }

  withQueryParams(
    params: Record<string, string | number | boolean>,
  ): this {
    this.request.query = {
      ...this .request.query,
      ...params,
    };

    return this;
  }

  withHeader(key: string, value: string): this {
    this.request.headers ??= {};
    this.request.headers[key] = value;
    return this;
  }

  withHeaders(headers: Record<string, string>): this {
    this.request.headers = {
      ...this.request.headers,
      ...headers,
    };

    return this;
  }

  withBody(body: unknown): this {
    this.request.body = body;
    return this;
  } 

  build(): ApiRequest {
    if (!this.request.endpoint) {
      throw new Error('Endpoint must be provided');
    }

    return {
      ...this.request,
      query: this.request.query
        ? { ...this.request.query }
        : undefined,
      headers: this.request.headers
        ? { ...this.request.headers }
        : undefined,
    };
  }
}