import { z } from "zod";

export const signUpSchema = z.object({
  username: z.string().min(4, {
    message: "username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});
