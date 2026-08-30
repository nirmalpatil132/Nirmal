import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { ContactSection } from '../../components/sections/ContactSection';
import { SocialLinksSection } from '../../components/sections/SocialLinksSection';

export const metadata: Metadata = {
  title: 'Contact — Nirmal Patil',
  description: 'Get in touch with Nirmal Patil for software developer opportunities, project inquiries, or technical collaborations.',
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'var(--space-xl)' }}>
        <ContactSection />
        <SocialLinksSection />
      </main>

      <Footer />
    </div>
  );
}
