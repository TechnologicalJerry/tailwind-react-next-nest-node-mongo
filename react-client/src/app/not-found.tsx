import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div>

      <div className="text-center relative z-10 p-8 max-w-lg mx-auto">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tighter animate-pulse">
          404
        </h1>
        <h2 className="text-3xl font-bold text-slate-800 mt-4 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-slate-600 mt-4 mb-8 text-lg">
          Oops! The page you are looking for has vanished into thin air or never existed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ROUTES.HOME}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
