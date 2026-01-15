import React from 'react';
import Widget1 from '@/components/dashboard/Widgets/Widget1';
import Widget2 from '@/components/dashboard/Widgets/Widget2';
import Widget3 from '@/components/dashboard/Widgets/Widget3';

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome to your dashboard. Here's an overview of your data.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Widget1 />
        <Widget2 />
        <Widget3 />
      </div>
    </div>
  );
}
