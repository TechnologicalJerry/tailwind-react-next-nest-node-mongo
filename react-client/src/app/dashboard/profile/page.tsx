import React from 'react';
import ProfileCard from '@/components/dashboard/ProfileCard';

export default function ProfilePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="mt-2 text-sm text-gray-600">
          View and manage your profile information.
        </p>
      </div>
      <div className="max-w-2xl">
        <ProfileCard />
      </div>
    </div>
  );
}
