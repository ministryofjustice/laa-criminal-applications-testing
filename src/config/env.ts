import dotenv from 'dotenv';

const environment = process.env.STAGING_ENV ?? 'staging';

dotenv.config({
    path: `.env.${environment}`,
});

function required(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value
}

export const env = {
    environment,
    providerFirmOfficesUrl: required('PROVIDER_FIRM_OFFICES_URL'),
};
