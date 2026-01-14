'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Streamline your workflow and boost productivity with our powerful tools and features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.SIGNUP}>
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
            </Link>
            <Link href={ROUTES.ABOUT}>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
