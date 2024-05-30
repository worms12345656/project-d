import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginFormType = z.infer<typeof LoginSchema>;

export const RegisterSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => {
    return password === confirmPassword;
  }, 'Confirm Error');

export type RegisterFormType = z.infer<typeof RegisterSchema>;
