import type { APIResponse } from '@playwright/test';

export type ApiTestContext = {
    response?: APIResponse;
    body?: unknown;
};