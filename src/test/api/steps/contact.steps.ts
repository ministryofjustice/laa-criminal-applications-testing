import { ContactSchema } from '../schemas/contact.schema.ts';
import { ApiTestContext, expect } from './fixtures.ts';
import { When, Then } from './fixtures.ts';

When('I send a GET request to {string}', async ({ request, apiContext }, url: string) => {
    apiContext.response = await request.get(url);
    apiContext.body = await apiContext.response.json();
});

Then('the status is {int}', async ({ apiContext }, status: number) => {
    const response = requireResponse(apiContext);
    expect(response.status()).toBe(status);
});

Then('the response should match the contact schema', async ({ apiContext }) => {
    const result = ContactSchema.safeParse(apiContext.body);
    if (!result.success) {
        throw new Error(
            [
                'Response did not match the contact schema:',
                JSON.stringify(result.error.issues, null, 2),
                '',
                'Actual response:',
                JSON.stringify(apiContext.body, null, 2),
            ].join('\n'),
        );
    };
});

function requireResponse(apiContext: ApiTestContext) {
    if (!apiContext.response) {
        throw new Error(
            'No API response. Run a request step first.',
        );
    };
    return apiContext.response;
};
