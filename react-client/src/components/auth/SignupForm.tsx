'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from '@/hooks/useForm';
import { signupSchema } from '@/lib/validators';
import { useAuth } from '@/hooks/useAuth';
import Input from '@/components/ui/Input';
import PasswordInput from '@/components/ui/PasswordInput';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/constants';

export default function SignupForm() {
  const router = useRouter();
  const { register: registerUser } = useAuth();
  const [error, setError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(signupSchema);

  const onSubmit = async (data: any) => {
    try {
      setError('');
      await registerUser(data, false);
      // Use replace to avoid adding to history and prevent refresh
      router.replace(ROUTES.LOGIN);
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        (Array.isArray(err.response?.data?.message)
          ? err.response.data.message.join(', ')
          : 'Registration failed. Please try again.')
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          type="text"
          {...register('firstName')}
          error={errors.firstName?.message}
          placeholder="Enter your first name"
        />

        <Input
          label="Last Name"
          type="text"
          {...register('lastName')}
          error={errors.lastName?.message}
          placeholder="Enter your last name"
        />
      </div>

      <Input
        label="Username"
        type="text"
        {...register('userName')}
        error={errors.userName?.message}
        placeholder="Choose a username"
      />

      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        placeholder="Enter your email"
      />

      <Input
        label="Phone Number"
        type="tel"
        {...register('phoneNumber')}
        error={errors.phoneNumber?.message}
        placeholder="e.g., +1234567890, (123) 456-7890, or 123-456-7890"
      />

      <PasswordInput
        label="Password"
        {...register('password')}
        error={errors.password?.message}
        placeholder="Create a password"
      />

      <PasswordInput
        label="Confirm Password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
        placeholder="Confirm your password"
      />

      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Create Account
      </Button>

      <div className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href={ROUTES.LOGIN} className="text-blue-600 hover:text-blue-800 font-medium">
          Sign in
        </a>
      </div>
    </form>
  );
}
