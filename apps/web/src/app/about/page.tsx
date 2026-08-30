import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { AboutSection } from '../../components/sections/AboutSection';
import { SocialLinksSection } from '../../components/sections/SocialLinksSection';

export const metadata: Metadata = {
  title: 'About — Nirmal Patil',
  description: 'Learn more about Nirmal Patil, Software Developer Intern at Evnorix Infotech, full-stack engineer, and product builder.',
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'var(--space-xl)' }}>
        <AboutSection />
        <SocialLinksSection />
      </main>

      <Footer />
    </div>
  );
}
