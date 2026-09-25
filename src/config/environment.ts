import dotenv from 'dotenv';
import { envSchema } from './env.schema.ts';

const environment = process.env.STAGING_ENV ?? 'staging';

dotenv.config({
  path: `.env.${environment}`,
});

export const env = envSchema.parse(process.env);