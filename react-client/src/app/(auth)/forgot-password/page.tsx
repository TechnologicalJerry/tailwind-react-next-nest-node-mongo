import React from 'react';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import Card from '@/components/ui/Card';

export default function ForgotPasswordPage() {
  return (
    <Card title="Reset Your Password">
      <ForgotPasswordForm />
    </Card>
  );
}
