'use client';

import React from 'react';
import UsersTable from '@/components/dashboard/UsersTable';
import { useAuth } from '@/hooks/useAuth';

export default function UsersPage() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-600">
            Manage all users in the system.
          </p>
        </div>
        {isAdmin && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium">
            Add New User
          </button>
        )}
      </div>
      <UsersTable />
    </div>
  );
}
