import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { SkillsSection } from '../../components/sections/SkillsSection';

export const metadata: Metadata = {
  title: 'Skills & Technologies — Nirmal Patil',
  description: 'Technical skills, programming languages, backend frameworks, database architectures, and development tools mastered by Nirmal Patil.',
};

export default function SkillsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'var(--space-xl)' }}>
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
}
