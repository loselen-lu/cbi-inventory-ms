import { z } from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required.")
    .max(10, "Username must be at most 10 characters.")
    .regex(/^[a-z]+$/, "Username must be lowercase letters only."),
  password: z.string().length(6, "Password must be exactly 6 characters."),
});

export { loginSchema };

export type LoginFormInput = z.infer<typeof loginSchema>;
