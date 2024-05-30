'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '../../../app/ui/button';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { auth, signIn } from '@/auth';
import { Session } from 'next-auth';
import { OAuthenticate, authenticate, registerUser } from './action';
import { useForm } from 'react-hook-form';
import {
  LoginSchema,
  LoginFormType,
  RegisterFormType,
  RegisterSchema,
} from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonHTMLAttributes, useState } from 'react';
import { cn } from '@/app/lib/utils';
// import { authenticate } from '@/app/lib/action';

type Props = {
  formType: 'login' | 'register';
};

const onOAuth = (provider: 'google' | 'facebook') => {
  OAuthenticate(provider);
};

type Result =
  | {
      errors: string;
      sucess?: undefined;
    }
  | {
      sucess: string;
      errors?: undefined;
    };

export default function AuthForm({ formType }: Props) {
  const { register, handleSubmit, formState } = useForm<RegisterFormType>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
    resolver: zodResolver(
      formType === 'register' ? RegisterSchema : LoginSchema,
    ),
  });
  const [result, setResult] = useState<Result>();
  const { errors } = formState;

  const onRegister = handleSubmit(async (data) => {
    const result = await registerUser(data);
    setResult(result);
  });

  const onSubmit = handleSubmit(async (data) => {
    const result = await authenticate(data);
    setResult(result);
  });

  return (
    <form
      onSubmit={formType === 'login' ? onSubmit : onRegister}
      className="space-y-3"
    >
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please {formType === 'login' ? 'log in' : 'register'} to continue.
        </h1>
        {Object.keys(errors).length > 0 && (
          <div className="flex h-8 items-end space-x-1">
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {Object.keys(errors).map((item, index) => (
                <>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />

                  <p
                    className="text-sm text-red-500"
                    key={`errorMessage_${index}`}
                  >
                    {errors[item].message}
                  </p>
                </>
              ))}
            </div>
          </div>
        )}
        {result && (
          <div className="flex h-8 items-end space-x-1">
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />

                <p className="text-sm text-red-500">
                  {result.errors || result.sucess}
                </p>
              </>
            </div>
          </div>
        )}
        <section className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                {...register('email')}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className={cn('mt-4', formType === 'login' && 'hidden')}>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Name
            </label>
            <div className="relative">
              <input
                {...register('name')}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                {...register('password')}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                type="password"
                placeholder="Enter password"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className={cn('mt-4', formType === 'login' && 'hidden')}>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                {...register('confirmPassword')}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                type="password"
                placeholder="Re-enter password"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </section>
        <section className={'mt-5 gap-8'}>
          <p className="pr-10 text-end text-sm">
            {formType === 'login'
              ? "Don't have account?"
              : 'Already have account?'}
          </p>
          <div className="flex flex-row gap-8">
            <>
              <Button className="w-1/2 content-end">
                {formType === 'login' ? 'Login' : 'Register'}
                <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
              </Button>
              <Link
                className="flex w-1/2 content-end items-center rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-green-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                type="button"
                href={'/register'}
              >
                {formType === 'login' ? 'Register' : 'Login'}
                <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
              </Link>
            </>
          </div>
        </section>
        <section className={'mt-5 flex flex-row gap-8'}>
          <GoogleAuthButton />
          <FacebookAuthButton />
        </section>
      </div>
    </form>
  );
}

function GoogleAuthButton() {
  return (
    <Button
      type="button"
      className="flex w-1/2 justify-center bg-white"
      onClick={() => {
        onOAuth('google');
      }}
    >
      <Image width={20} height={20} src={'/google-icon.png'} alt="gg"></Image>
    </Button>
  );
}

function FacebookAuthButton() {
  return (
    <Button
      type="button"
      className="flex w-1/2 justify-center bg-white"
      onClick={() => onOAuth('facebook')}
    >
      <Image width={20} height={20} src={'/facebook-icon.png'} alt="gg"></Image>
    </Button>
  );
}
