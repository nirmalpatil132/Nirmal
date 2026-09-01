import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { PageHeader } from '../../components/ui/PageHeader';
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

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        <Section id="achievements-hero" spacing="md">
          <Container size="lg">
            <PageHeader
              badge="🏆 HONORS & RECOGNITION"
              title="Achievements, Education &"
              highlightText="Certifications"
              description="National entrepreneurship competition victories at IIT Bombay, B.Tech computer science coursework at GCOEK, research paper submissions, and industry credentials."
            />
          </Container>
        </Section>
        <AchievementsSection />
        <EducationSection />
        <CertificatesSection />
      </main>

      <Footer />
    </div>
  );
}
