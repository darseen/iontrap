import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(16),
});

export type LoginSchema = z.infer<typeof loginSchema>;
