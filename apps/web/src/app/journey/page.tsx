import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { PageHeader } from '../../components/ui/PageHeader';
import { LearningJourneySection } from '../../components/sections/LearningJourneySection';

export const metadata: Metadata = {
  title: 'Learning Journey — Nirmal Patil',
  description: 'Follow Nirmal Patil\'s 7-stage learning journey from foundational programming logic to production software engineering and agentic AI systems.',
};

export default function JourneyPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        <Section id="journey-hero" spacing="md">
          <Container size="lg">
            <PageHeader
              badge="🗺️ LEARNING PROGRESSION"
              title="7-Stage Software &"
              highlightText="Engineering Evolution"
              description="From writing initial programming scripts to building production web applications, fintech systems, and autonomous multi-agent workflows."
            />
          </Container>
        </Section>
        <LearningJourneySection />
      </main>

      <Footer />
    </div>
  );
}
