'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from '@/hooks/useForm';
import { loginSchema } from '@/lib/validators';
import { useAuth } from '@/hooks/useAuth';
import Input from '@/components/ui/Input';
import PasswordInput from '@/components/ui/PasswordInput';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/constants';

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string>('');
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(loginSchema);

  const onSubmit = async (data: { identifier: string; password: string }) => {
    try {
      setError('');
      await login(data);
      // Use replace to avoid adding to history
      // The middleware will handle the redirect if needed
      router.replace(ROUTES.DASHBOARD);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {error && (
        <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded">
          {error}
        </div>
      )}
      
      <Input
        label="Email or Username"
        type="text"
        {...register('identifier')}
        error={errors.identifier?.message}
        placeholder="Enter your email or username"
      />
      
      <PasswordInput
        label="Password"
        {...register('password')}
        error={errors.password?.message}
        placeholder="Enter your password"
      />
      
      <div className="flex items-center justify-between">
        <a
          href={ROUTES.FORGOT_PASSWORD}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Forgot password?
        </a>
      </div>
      
      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Sign In
      </Button>
      
      <div className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href={ROUTES.SIGNUP} className="text-blue-600 hover:text-blue-800 font-medium">
          Sign up
        </a>
      </div>
    </form>
  );
}
