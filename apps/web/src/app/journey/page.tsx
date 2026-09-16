import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { LearningJourneySection } from '../../components/sections/LearningJourneySection';

export const metadata: Metadata = {
  title: 'Learning Journey & Engineering Evolution — Nirmal Patil',
  description: 'Follow Nirmal Patil\'s 7-stage engineering evolution from foundational programming logic to production software engineering, fintech systems, and agentic AI workflows.',
};

export default function JourneyPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        <LearningJourneySection />
      </main>

      <Footer />
    </div>
  );
}
