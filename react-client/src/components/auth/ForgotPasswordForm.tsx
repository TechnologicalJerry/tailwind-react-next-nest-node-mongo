'use client';

import React, { useState } from 'react';
import { useForm } from '@/hooks/useForm';
import { forgotPasswordSchema } from '@/lib/validators';
import { authService } from '@/services/authService';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ForgotPasswordForm() {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(forgotPasswordSchema);

  const onSubmit = async (data: { identifier: string }) => {
    try {
      setError('');
      setSuccess('');
      await authService.forgotPassword(data);
      setSuccess('Password reset instructions have been sent to your email.');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to send reset instructions. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="p-3 text-sm text-green-700 bg-green-100 border border-green-400 rounded">
          {success}
        </div>
      )}
      
      <div className="text-sm text-gray-600 mb-4">
        Enter your email or username and we'll send you instructions to reset your password.
      </div>
      
      <Input
        label="Email or Username"
        type="text"
        {...register('identifier')}
        error={errors.identifier?.message}
        placeholder="Enter your email or username"
      />
      
      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Send Reset Instructions
      </Button>
      
      <div className="text-center">
        <a href="/login" className="text-sm text-blue-600 hover:text-blue-800">
          Back to login
        </a>
      </div>
    </form>
  );
}
