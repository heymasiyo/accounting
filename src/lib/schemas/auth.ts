import * as z from "zod/v4";

export const nameSchema = z.string().min(1);

export const emailSchema = z.email().transform((email) => email.toLowerCase());

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    "Password must contain at least one number, one uppercase, and one lowercase letter"
  );
