import React from 'react';
import Card from '@/components/ui/Card';

export default function Widget2() {
  return (
    <Card className="hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">Total Products</p>
          <div className="flex items-baseline">
            <p className="text-3xl font-extrabold text-slate-900">567</p>
            <p className="ml-2 text-sm font-medium text-green-600 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              +5%
            </p>
          </div>
        </div>
        <div className="p-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg shadow-green-500/20 text-white">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      </div>
    </Card>
  );
}
