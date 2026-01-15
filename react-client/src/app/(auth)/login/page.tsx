import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import Card from '@/components/ui/Card';

export default function LoginPage() {
  return (
    <Card title="Sign In to Your Account">
      <LoginForm />
    </Card>
  );
}
