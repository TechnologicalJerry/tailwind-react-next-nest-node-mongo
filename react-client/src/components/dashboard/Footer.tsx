import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href={ROUTES.ABOUT} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href={ROUTES.CONTACT} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
