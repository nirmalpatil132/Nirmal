'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Internship } from '@nirmal/types';

const PLACEHOLDER_INTERNSHIPS: Internship[] = [
  {
    id: 'exp1',
    slug: 'placeholder-internship-1',
    company: '[Placeholder Company / Organization 1]',
    role: '[Placeholder Role: Software Engineering Intern]',
    location: '[City, Country Placeholder]',
    startDate: new Date('2026-01-01'),
    endDate: new Date('2026-06-30'),
    current: false,
    description: '[High-level role overview placeholder: Built responsive frontend UI components and optimized REST API endpoints.]',
    highlights: [
      '[Key Highlight 1 Placeholder: Developed scalable React component primitives integrated with backend REST APIs.]',
      '[Key Highlight 2 Placeholder: Optimized database query performance and implemented automated unit tests.]',
      '[Key Highlight 3 Placeholder: Collaborated with cross-functional product designers and backend engineers.]',
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'exp2',
    slug: 'placeholder-internship-2',
    company: '[Placeholder Company / Organization 2]',
    role: '[Placeholder Role: UI/UX & Web Developer Intern]',
    location: '[Remote / Hybrid Placeholder]',
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-12-31'),
    current: false,
    description: '[High-level role overview placeholder: Designed glassmorphism design tokens and accessibility guidelines.]',
    highlights: [
      '[Key Highlight 1 Placeholder: Crafted interactive wireframes and design system tokens.]',
      '[Key Highlight 2 Placeholder: Improved web application accessibility (WCAG AA) and keyboard navigation.]',
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function ExperienceSection() {
  return (
    <Section id="experience" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Work Experience"
          title="Professional Internships & Experience"
          subtitle="[Experience section subtitle placeholder: Timeline of professional roles, industry experience, and engineering achievements.]"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', maxWidth: '850px', margin: '0 auto' }}>
          {PLACEHOLDER_INTERNSHIPS.map((exp) => (
            <Card key={exp.id} variant="elevated" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>
                <div>
                  <Badge variant="primary">{exp.company}</Badge>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--text-primary)',
                      marginTop: 'var(--space-2xs)',
                    }}
                  >
                    {exp.role}
                  </h3>
                </div>
                <span
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--secondary)',
                    fontWeight: 'var(--font-weight-semibold)',
                    background: 'var(--secondary-light)',
                    padding: 'var(--space-2xs) var(--space-xs)',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {exp.startDate.getFullYear()} – {exp.endDate ? exp.endDate.getFullYear() : 'Present'}
                </span>
              </div>

              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                {exp.description}
              </p>

              <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                {exp.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-xs)',
                    }}
                  >
                    <span style={{ color: 'var(--primary)' }}>▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
