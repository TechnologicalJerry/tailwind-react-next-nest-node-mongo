'use client';

import React from 'react';
import ProductsTable from '@/components/dashboard/ProductsTable';
import { useAuth } from '@/hooks/useAuth';

export default function ProductsPage() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="mt-2 text-sm text-gray-600">
            Manage all products in the system.
          </p>
        </div>
        {isAdmin && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium">
            Add New Product
          </button>
        )}
      </div>
      <ProductsTable />
    </div>
  );
}
