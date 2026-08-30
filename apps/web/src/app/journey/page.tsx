import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { LearningJourneySection } from '../../components/sections/LearningJourneySection';

export const metadata: Metadata = {
  title: 'Learning Journey — Nirmal Patil',
  description: 'Follow Nirmal Patil\'s 7-stage learning journey from foundational programming logic to production software engineering and agentic AI systems.',
};

export default function JourneyPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'var(--space-xl)' }}>
        <LearningJourneySection />
      </main>

      <Footer />
    </div>
  );
}
