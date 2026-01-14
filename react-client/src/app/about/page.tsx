import React from 'react';
import PublicLayout from '@/components/layouts/PublicLayout';

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                Welcome to our platform! We are dedicated to providing you with the best experience
                and tools to manage your work efficiently.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to simplify complex workflows and empower teams to achieve their goals
                through innovative technology solutions.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Innovation and Excellence</li>
                <li>User-Centric Design</li>
                <li>Transparency and Trust</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
