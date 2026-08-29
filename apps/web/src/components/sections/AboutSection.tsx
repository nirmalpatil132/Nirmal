'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export function AboutSection() {
  const stats = [
    { label: 'Years Experience', value: '[X+]' },
    { label: 'Completed Projects', value: '[Y+]' },
    { label: 'Technologies Mastered', value: '[Z+]' },
    { label: 'Certifications', value: '[N+]' },
  ];

  return (
    <Section id="about" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="About Me"
          title="Engineering Background & Product Vision"
          subtitle="[About section subtitle placeholder: Bridging front-end design elegance with backend architecture reliability.]"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'start',
          }}
        >
          {/* TEXT SUMMARY PLACEHOLDER */}
          <Card variant="elevated">
            <h3
              style={{
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-md)',
              }}
            >
              [Professional Summary Placeholder]
            </h3>
            <p
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-md)',
              }}
            >
              [Paragraph 1 Placeholder: Detailed overview of engineering philosophy, problem-solving mindset, and dedication to writing clean, maintainable, and type-safe code.]
            </p>
            <p
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              [Paragraph 2 Placeholder: Description of design thinking, user-centered UI/UX principles, and full-stack software architecture capabilities.]
            </p>
          </Card>

          {/* STATS & HIGHLIGHTS GRID PLACEHOLDER */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-md)' }}>
              {stats.map((s) => (
                <Card key={s.label} variant="default" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: 'var(--font-size-3xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--secondary)',
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-2xs)' }}>
                    {s.label}
                  </div>
                </Card>
              ))}
            </div>

            <Card variant="glass">
              <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--primary)', marginBottom: 'var(--space-xs)' }}>
                [Core Focus Placeholder]
              </h4>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Full-stack web application development, microservices REST API engineering, schema design, and interactive UI component design.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
