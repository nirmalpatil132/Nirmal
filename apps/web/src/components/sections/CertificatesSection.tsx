'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { CertificateFlipCard } from '../ui/CertificateFlipCard';

const PLACEHOLDER_CERTIFICATES = [
  {
    id: 'c1',
    title: '[Placeholder Certificate 1: Full-Stack Web Engineering]',
    issuer: '[Meta / Coursera Placeholder]',
    issueDate: 'Aug 2026',
    credentialId: 'CERT-2026-NVR1',
    description: '[Certificate overview placeholder: Mastery of React, Next.js App Router, Express, TypeScript, REST API security, and PostgreSQL.]',
    skills: ['Next.js', 'React', 'TypeScript', 'Express', 'PostgreSQL'],
    verificationUrl: '#verify-placeholder',
  },
  {
    id: 'c2',
    title: '[Placeholder Certificate 2: Agentic AI Engineering Specialist]',
    issuer: '[Google DeepMind / AGY Placeholder]',
    issueDate: 'Jul 2026',
    credentialId: 'AGY-AI-8892',
    description: '[Certificate overview placeholder: Multi-agent system orchestration, tool schema design, safety evaluation metrics, and LLM fine-tuning.]',
    skills: ['Agentic AI', 'Python', 'LLMs', 'Multi-Agent', 'System Design'],
    verificationUrl: '#verify-placeholder',
  },
  {
    id: 'c3',
    title: '[Placeholder Certificate 3: UI/UX & Design Systems Masterclass]',
    issuer: '[Design Institute / Interaction Design Placeholder]',
    issueDate: 'Jan 2026',
    credentialId: 'UIUX-9910',
    description: '[Certificate overview placeholder: User research, wireframing, high-fidelity prototyping, WCAG AA accessibility, and design tokens.]',
    skills: ['UI/UX', 'Design Tokens', 'Figma', 'Accessibility'],
    verificationUrl: '#verify-placeholder',
  },
];

export function CertificatesSection() {
  return (
    <Section id="certificates" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Verified Credentials"
          title="Certificates & Specializations"
          subtitle="[Certificates section subtitle placeholder: Professional certifications and course completions. Click or hover on cards to inspect skills & credential verification details.]"
        />

        <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap', justifyContent: 'center' }}>
          {PLACEHOLDER_CERTIFICATES.map((cert) => (
            <CertificateFlipCard
              key={cert.id}
              title={cert.title}
              issuer={cert.issuer}
              issueDate={cert.issueDate}
              credentialId={cert.credentialId}
              description={cert.description}
              skills={cert.skills}
              verificationUrl={cert.verificationUrl}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
