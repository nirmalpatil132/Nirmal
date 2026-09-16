import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { AboutSection } from '../../components/sections/AboutSection';
import { SocialLinksSection } from '../../components/sections/SocialLinksSection';

import { getCanonicalUrl } from '../../utils/assets';

export const metadata: Metadata = {
  title: 'About — Nirmal Patil',
  description: 'Learn more about Nirmal Patil, Software Developer Intern at Evnorix Infotech, full-stack engineer, and product builder.',
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
  openGraph: {
    title: 'About — Nirmal Patil',
    description: 'Learn more about Nirmal Patil, Software Developer Intern at Evnorix Infotech, full-stack engineer, and product builder.',
    url: getCanonicalUrl('/about'),
  },
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-lg))' }}>
        <AboutSection />
        <SocialLinksSection />
      </main>

      <Footer />
    </div>
  );
}
