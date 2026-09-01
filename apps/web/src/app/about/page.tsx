import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { PageHeader } from '../../components/ui/PageHeader';
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

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        <Section id="about-hero" spacing="md">
          <Container size="lg">
            <PageHeader
              badge="👤 ABOUT & BACKGROUND"
              title="Professional Story &"
              highlightText="Engineering Mindset"
              description="Computer Science & Engineering student at GCOEK, Software Developer Intern at Evnorix Infotech, technical community mentor, and builder of modern full-stack web applications and AI agent systems."
            />
          </Container>
        </Section>
        <AboutSection />
        <SocialLinksSection />
      </main>

      <Footer />
    </div>
  );
}
