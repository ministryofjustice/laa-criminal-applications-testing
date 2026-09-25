import { HttpMethod } from './HttpMethod';

export type QueryValue =
  | string
  | number
  | boolean;

export interface ApiRequest {
  method: HttpMethod;
  url: string;
  headers: Record<string, string>;
  body?: unknown;
}

export class ApiRequestBuilder {
  private path = '';
  private requestHeaders: Record<string, string> = {};
  private params = new URLSearchParams();
  private body?: unknown;

  constructor(
    private readonly baseUrl: string,
  ) {}

  endpoint(path: string): this {
    this.path = path;
    return this;
  }

  header(
    name: string,
    value: string,
  ): this {
    this.requestHeaders[name] = value;
    return this;
  }

  headers(
    headers: Record<string, string>,
  ): this {
    this.requestHeaders = {
      ...this.requestHeaders,
      ...headers,
    };

    return this;
  }

  authorization(token: string): this {
    return this.header(
      'X-Authorization',
      token,
    );
  }

  authorizationIf(token?: string): this {
    if (token) {
      this.header('x-authorization', token)
    }
    return this;
  }

  jsonContentType(value = 'application/json'): this {
    return this.header(
      'Content-Type',
      value,
    );
  }

  textPlainContentType(value = 'text/plain'): this {
    return this.header(
      'Content-Type',
      value,
    );
  }

  acceptApplicationJson(value = 'application/json'): this {
    return this.header(
      'Accept',
      value,
    );
  }

  acceptTextPlain(value = 'text/plain'): this {
    return this.header(
      'Accept',
      value,
    );
  }

  param(
    name: string,
    value: string | number | boolean,
  ): this {
    this.params.set(
      name,
      String(value),
    );

    return this;
  }

  paramsFrom(
    params: Record<string, QueryValue>,
  ): this {
    Object.entries(params).forEach(
      ([name, value]) => {
        this.param(name, value);
      },
    );

    return this;
  }

  withBody(body: unknown): this {
    this.body = body;
    return this;
  }

  build(method: HttpMethod): ApiRequest {
    const url = new URL(
      this.path,
      this.baseUrl,
    );

    this.params.forEach(
      (value, key) => {
        url.searchParams.set(key, value);
      },
    );

    return {
      method,
      url: url.toString(),
      headers: this.requestHeaders,
      body: this.body,
    };
  }

  get(): ApiRequest {
    return this.build('GET');
  }

  post(): ApiRequest {
    return this.build('POST');
  }

  put(): ApiRequest {
    return this.build('PUT');
  }

  patch(): ApiRequest {
    return this.build('PATCH');
  }

  delete(): ApiRequest {
    return this.build('DELETE');
  }
}