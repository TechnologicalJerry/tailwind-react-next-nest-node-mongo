'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <div className="bg-indigo-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-indigo-100">
          Join thousands of users who are already using our platform
        </p>
        <Link href={ROUTES.SIGNUP}>
          <Button variant="secondary" size="lg">
            Create Your Account
          </Button>
        </Link>
      </div>
    </div>
  );
}
