import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { PageHeader } from '../../components/ui/PageHeader';
import { ContactSection } from '../../components/sections/ContactSection';
import { SocialLinksSection } from '../../components/sections/SocialLinksSection';

import { Button } from '../../components/ui/Button';
import { PROFILE_DATA } from '../../data/profile';

export const metadata: Metadata = {
  title: 'Contact',
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
              title="Contact &amp; Collaboration"
              highlightText="Inquiry"
              description="Connect with Nirmal Patil for software engineering roles, full-stack web products, or AI system projects. Review verified contact channels or access the official resume below."
            >
              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                <a
                  href={PROFILE_DATA.resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="secondary" size="md">
                    📄 View Resume ↗
                  </Button>
                </a>
                <a
                  href={PROFILE_DATA.resumePdfPath}
                  download="Nirmal_Patil_Resume.pdf"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="ghost" size="md">
                    📥 Download Resume
                  </Button>
                </a>
              </div>
            </PageHeader>
          </Container>
        </Section>
        <ContactSection />
        <SocialLinksSection />
      </main>

      <Footer />
    </div>
  );
}
