'use server';

import { signIn } from '@/auth';
import { LoginFormType, RegisterFormType, RegisterSchema } from '@/schemas';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { db } from '@/app/lib/db';
import { DEFAULT_LOGIN_SETTING } from '@/routes';

export async function authenticate(formData: LoginFormType) {
  const { email, password } = formData;
  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_SETTING,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            errors: 'Invalid credentials',
          };
        default:
          return {
            errors: 'Something went wrong.',
          };
      }
    }
    throw error;
  }
}

export async function OAuthenticate(provider: 'google' | 'facebook') {
  try {
    await signIn(provider, {
      redirectTo: DEFAULT_LOGIN_SETTING,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            errors: 'Invalid credentials',
          };
        default:
          return {
            errors: 'Something went wrong.',
          };
      }
    }
    throw error;
  }
}

export async function registerUser(data: RegisterFormType) {
  const validatedFields = RegisterSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      errors: 'Invalid Fields',
    };
  }
  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existedUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existedUser) {
    return {
      errors: 'Email already in used',
    };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return {
    sucess: 'User created',
  };
}
