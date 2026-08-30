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
          badge="Academic Foundations"
          title="Education & Academic Background"
          subtitle="Formal academic degrees, technical computer science coursework, and high-school academic excellence."
        />

        {/* TIMELINE CONTAINER */}
        <div style={{ position: 'relative', maxWidth: '850px', margin: '0 auto' }}>
          {/* VERTICAL TIMELINE LINE */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '15px',
              bottom: '15px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--primary) 0%, rgba(255, 107, 0, 0.2) 100%)',
              zIndex: 0,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', position: 'relative', zIndex: 1 }}>
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                style={{
                  display: 'flex',
                  gap: 'var(--space-md)',
                  alignItems: 'flex-start',
                }}
              >
                {/* TIMELINE NODE DOT */}
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    border: '3px solid var(--bg-primary)',
                    boxShadow: '0 0 12px var(--primary)',
                    marginTop: 'var(--space-md)',
                    flexShrink: 0,
                    marginLeft: '13px',
                  }}
                />

                {/* EDUCATION CARD */}
                <Card variant="elevated" interactive style={{ flex: 1, borderLeft: '3px solid var(--primary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-xs)' }}>
                    <div>
                      <Badge variant="primary" style={{ marginBottom: '4px' }}>{edu.fieldOfStudy}</Badge>
                      <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                        {edu.degree}
                      </h3>
                    </div>

                    <span
                      style={{
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--primary)',
                        fontWeight: 'var(--font-weight-semibold)',
                        background: 'var(--primary-light)',
                        padding: 'var(--space-2xs) var(--space-xs)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-orange)',
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <div style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-medium)', color: 'var(--secondary)', marginBottom: 'var(--space-sm)' }}>
                    🏛️ {edu.institution} <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>({edu.location})</span>
                  </div>

                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-xs)' }}>
                    Academic Performance: <strong style={{ color: 'var(--primary)' }}>{edu.result}</strong>
                  </div>

                  {edu.highlights && (
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: 'var(--space-xs)', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)' }}>
                      💡 <strong>Key Activities:</strong> {edu.highlights}
                    </p>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
