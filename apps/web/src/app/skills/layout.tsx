import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '../../utils/assets';

export const metadata: Metadata = {
  title: 'Skills & Capabilities — Nirmal Patil',
  description:
    'Core technical capabilities, programming languages, web frameworks, agentic AI architectures, and developer tooling of Nirmal Patil.',
  alternates: {
    canonical: getCanonicalUrl('/skills'),
  },
  openGraph: {
    title: 'Skills & Capabilities — Nirmal Patil',
    description:
      'Core technical capabilities, programming languages, web frameworks, agentic AI architectures, and developer tooling of Nirmal Patil.',
    url: getCanonicalUrl('/skills'),
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
