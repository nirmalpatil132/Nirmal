'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { EDUCATION_DATA } from '../../data/education';

export function EducationSection() {
  return (
    <Section id="education" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Academic Background"
          title="Education & Academic Achievements"
          subtitle="Formal academic degrees, technical coursework, and school education history."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
          {EDUCATION_DATA.map((edu) => (
            <Card key={edu.id} variant="default" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-sm)' }}>
                <Badge variant="secondary">{edu.fieldOfStudy}</Badge>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                  {edu.period}
                </span>
              </div>

              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-2xs)' }}>
                {edu.degree}
              </h3>

              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--secondary)', marginBottom: 'var(--space-md)' }}>
                {edu.institution}
              </div>

              <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginBottom: 'var(--space-xs)' }}>
                Result / Performance: <strong style={{ color: 'var(--text-primary)' }}>{edu.result}</strong>
              </div>

              {edu.highlights && (
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: 'auto', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)' }}>
                  {edu.highlights}
                </p>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
