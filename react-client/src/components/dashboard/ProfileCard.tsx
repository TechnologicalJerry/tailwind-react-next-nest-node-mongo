'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import Card from '@/components/ui/Card';

export default function ProfileCard() {
  const { user } = useAuth();

  if (!user) {
    return <Card>No user data available</Card>;
  }

  return (
    <Card title="Profile Information">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <p className="mt-1 text-sm text-gray-900">{user.firstName}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <p className="mt-1 text-sm text-gray-900">{user.lastName}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <p className="mt-1 text-sm text-gray-900">{user.userName}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1 text-sm text-gray-900">{user.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <p className="mt-1 text-sm text-gray-900">{user.phoneNumber}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <p className="mt-1 text-sm text-gray-900">{user.role || 'User'}</p>
        </div>
      </div>
    </Card>
  );
}
