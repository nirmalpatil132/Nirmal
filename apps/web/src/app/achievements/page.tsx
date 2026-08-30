import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { AchievementsSection } from '../../components/sections/AchievementsSection';
import { EducationSection } from '../../components/sections/EducationSection';
import { CertificatesSection } from '../../components/sections/CertificatesSection';

export const metadata: Metadata = {
  title: 'Achievements, Education & Certifications — Nirmal Patil',
  description: 'Academic background (B.Tech GCOEK), industry certifications, awards, and accomplishments of Nirmal Patil.',
};

export default function AchievementsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'var(--space-xl)' }}>
        <AchievementsSection />
        <EducationSection />
        <CertificatesSection />
      </main>

      <Footer />
    </div>
  );
}
