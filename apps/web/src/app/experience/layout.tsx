import React from 'react';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '../../utils/assets';

export const metadata: Metadata = {
  title: 'Experience — Nirmal Patil',
  description:
    'Professional software engineering experience, fintech internship contributions at Evnorix Infotech, and leadership history of Nirmal Patil.',
  alternates: {
    canonical: getCanonicalUrl('/experience'),
  },
  openGraph: {
    title: 'Experience — Nirmal Patil',
    description:
      'Professional software engineering experience, fintech internship contributions at Evnorix Infotech, and leadership history of Nirmal Patil.',
    url: getCanonicalUrl('/experience'),
  },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
