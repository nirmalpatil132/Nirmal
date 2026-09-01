import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { PageHeader } from '../../components/ui/PageHeader';
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

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        <Section id="contact-hero" spacing="md">
          <Container size="lg">
            <PageHeader
              badge="✉️ GET IN TOUCH"
              title="Contact & Collaboration"
              highlightText="Inquiry"
              description="Have an opportunity, project, or technical inquiry? Reach out directly via the message form or explore official developer networks."
            />
          </Container>
        </Section>
        <ContactSection />
        <SocialLinksSection />
      </main>

      <Footer />
    </div>
  );
}
