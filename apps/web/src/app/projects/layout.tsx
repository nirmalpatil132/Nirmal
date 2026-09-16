import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '../../utils/assets';

export const metadata: Metadata = {
  title: 'Projects Showcase — Nirmal Patil',
  description:
    'Explore engineering projects, AI-driven platforms, full-stack systems, and web applications designed and engineered by Nirmal Patil.',
  alternates: {
    canonical: getCanonicalUrl('/projects'),
  },
  openGraph: {
    title: 'Projects Showcase — Nirmal Patil',
    description:
      'Explore engineering projects, AI-driven platforms, full-stack systems, and web applications designed and engineered by Nirmal Patil.',
    url: getCanonicalUrl('/projects'),
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
