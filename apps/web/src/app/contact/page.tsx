import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { ContactSection } from '../../components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact & Connect — Nirmal Patil',
  description:
    'Connect with Nirmal Patil for software developer opportunities, full-stack web engineering, agentic AI workflows, or technical collaborations.',
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-lg))' }}>
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
