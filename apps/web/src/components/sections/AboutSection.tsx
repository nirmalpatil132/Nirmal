'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { PROFILE_DATA } from '../../data/profile';

export function AboutSection() {
  return (
    <Section id="about" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="About Me"
          title="Professional Journey & Engineering Background"
          subtitle="From building initial programming scripts to developing full-stack web applications, AI systems, and enterprise fintech software."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-2xl)', alignItems: 'start' }}>
          {/* STORY CARD */}
          <Card variant="elevated">
            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-md)' }}>
              My Developer Journey
            </h3>

            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
              I&apos;m a Computer Science & Engineering student at Government College of Engineering, Kolhapur (GCOEK), currently working as a Software Developer Intern at Evnorix Infotech Pvt. Ltd.
            </p>

            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
              My software engineering mindset is driven by a simple core philosophy: <strong>&ldquo;I learn by building&rdquo;</strong>. Rather than keeping skills theoretical, I apply new concepts directly into real-world applications — whether building B2B manufacturing platforms, full-stack job hubs, AI-driven gamified learning architectures, or autonomous multi-agent pipelines.
            </p>

            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-md)' }}>
              At Evnorix Infotech, I contribute to the Loan Origination System (LOS) ecosystem, focusing on the LOS Intake and LOS Staff application workflows. Alongside my professional role, I active mentor student developers as Technical Head of E-Cell and serve as a Google Student Ambassador for AI technologies.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', marginTop: 'var(--space-md)' }}>
              <Badge variant="primary">Full-Stack Development</Badge>
              <Badge variant="secondary">Backend Engineering</Badge>
              <Badge variant="success">Agentic AI Systems</Badge>
              <Badge variant="neutral">Fintech LOS Ecosystem</Badge>
            </div>
          </Card>

          {/* 4 MILESTONE HIGHLIGHT CARDS */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
            <Card variant="glass">
              <div style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-xs)' }}>🏆</div>
              <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                3-Time
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)' }}>
                NEC Winner (IIT Bombay)
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                National Entrepreneurship Challenge Basic & Advanced Tracks.
              </p>
            </Card>

            <Card variant="glass">
              <div style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-xs)' }}>💼</div>
              <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                SDE Intern
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)' }}>
                Evnorix Infotech
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Fintech software systems & LOS application workflows.
              </p>
            </Card>

            <Card variant="glass">
              <div style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-xs)' }}>✨</div>
              <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                Ambassador
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)' }}>
                Google Student Program
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Google Gemini AI advocate & student community mentor.
              </p>
            </Card>

            <Card variant="glass">
              <div style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-xs)' }}>🚀</div>
              <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                15+
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)' }}>
                Projects & Tools Built
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Full-stack web apps, agentic AI pipelines, & data tools.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
