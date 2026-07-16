import { z } from "zod";

export const ContactSchema = z.object({
  telephone: z.string(),
  email: z.email(),
  website: z.httpUrl(),
});

export type Contact = z.infer<typeof ContactSchema>;
