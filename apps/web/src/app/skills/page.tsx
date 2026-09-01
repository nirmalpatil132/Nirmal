import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { PageHeader } from '../../components/ui/PageHeader';
import { SkillsSection } from '../../components/sections/SkillsSection';

export const metadata: Metadata = {
  title: 'Skills & Technologies — Nirmal Patil',
  description: 'Technical skills, programming languages, backend frameworks, database architectures, and development tools mastered by Nirmal Patil.',
};

export default function SkillsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        <Section id="skills-hero" spacing="md">
          <Container size="lg">
            <PageHeader
              badge="⚡ TECHNICAL CAPABILITIES"
              title="Technologies, Tools &"
              highlightText="Engineering Stack"
              description="A structured overview of core programming languages, web frameworks, database systems, AI tools, and developer platforms applied across real-world software projects."
            />
          </Container>
        </Section>
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
}
