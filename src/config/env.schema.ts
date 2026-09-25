import { z } from 'zod';

export const envSchema = z.object({
  UI_APPLY_BASE_URL: z.url(),
  UI_REVIEW_BASE_URL: z.url(),
  API_BASE_URL: z.url(),
  API_TOKEN: z.string().min(1),
});

export type Environment = z.infer<typeof envSchema>;