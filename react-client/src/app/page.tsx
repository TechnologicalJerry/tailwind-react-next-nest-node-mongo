import React from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import CTA from '@/components/home/CTA';
import PublicLayout from '@/components/layouts/PublicLayout';

export default function Home() {
  return (
    <PublicLayout>
      <div className="min-h-screen">
        <Hero />
        <Features />
        <CTA />
      </div>
    </PublicLayout>
  );
}
