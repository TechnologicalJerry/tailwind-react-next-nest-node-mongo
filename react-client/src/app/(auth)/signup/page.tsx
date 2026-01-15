import React from 'react';
import SignupForm from '@/components/auth/SignupForm';
import Card from '@/components/ui/Card';

export default function SignupPage() {
  return (
    <Card title="Create Your Account">
      <SignupForm />
    </Card>
  );
}
