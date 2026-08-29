'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { CertificateFlipCard } from '../ui/CertificateFlipCard';
import { CERTIFICATIONS_DATA } from '../../data/certifications';

export function CertificatesSection() {
  return (
    <Section id="certificates" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Verified Credentials"
          title="Certifications & Technical Specializations"
          subtitle="Specialized course certifications across Agentic AI engineering, data analytics, full-stack development, and UI/UX design."
        />

        <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap', justifyContent: 'center' }}>
          {CERTIFICATIONS_DATA.map((cert) => (
            <CertificateFlipCard
              key={cert.id}
              title={cert.title}
              issuer={cert.category}
              issueDate="Specialization"
              description={cert.description}
              skills={cert.skills}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
