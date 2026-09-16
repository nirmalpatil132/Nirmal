import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '../../utils/assets';

export const metadata: Metadata = {
  title: 'Learning Journey & Evolution — Nirmal Patil',
  description:
    'The engineering evolution of Nirmal Patil from CS fundamentals to full-stack systems, data analytics, and agentic AI architectures.',
  alternates: {
    canonical: getCanonicalUrl('/journey'),
  },
  openGraph: {
    title: 'Learning Journey & Evolution — Nirmal Patil',
    description:
      'The engineering evolution of Nirmal Patil from CS fundamentals to full-stack systems, data analytics, and agentic AI architectures.',
    url: getCanonicalUrl('/journey'),
  },
};

export default function JourneyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
