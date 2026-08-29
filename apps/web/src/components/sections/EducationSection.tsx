'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Education } from '@nirmal/types';

const PLACEHOLDER_EDUCATION: Education[] = [
  {
    id: 'edu1',
    institution: '[Placeholder University / College Name 1]',
    degree: '[Placeholder Degree: Bachelor of Technology / Computer Science]',
    fieldOfStudy: '[Computer Science & Engineering Placeholder]',
    startDate: new Date('2023-08-01'),
    endDate: new Date('2027-05-30'),
    grade: '[Grade / GPA Placeholder]',
    activities: '[Placeholder Activities: Web Development Club Lead, Hackathon Organizer]',
    order: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'edu2',
    institution: '[Placeholder High School / Institution 2]',
    degree: '[Placeholder Higher Secondary Education]',
    fieldOfStudy: '[Science / Mathematics Placeholder]',
    startDate: new Date('2021-06-01'),
    endDate: new Date('2023-04-30'),
    grade: '[Percentage Placeholder]',
    activities: '[Placeholder Activities: Science Club, Academic Excellence Award]',
    order: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function EducationSection() {
  return (
    <Section id="education" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Academic Background"
          title="Education & Academic Background"
          subtitle="[Education section subtitle placeholder: Academic degrees, coursework, leadership activities, and academic honors.]"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
          {PLACEHOLDER_EDUCATION.map((edu) => (
            <Card key={edu.id} variant="default">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-sm)' }}>
                <Badge variant="secondary">{edu.fieldOfStudy}</Badge>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                  {edu.startDate.getFullYear()} – {edu.endDate ? edu.endDate.getFullYear() : 'Present'}
                </span>
              </div>

              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-2xs)' }}>
                {edu.degree}
              </h3>

              <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--secondary)', marginBottom: 'var(--space-md)' }}>
                {edu.institution}
              </div>

              {edu.grade && (
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-xs)' }}>
                  Score: <strong style={{ color: 'var(--text-primary)' }}>{edu.grade}</strong>
                </div>
              )}

              {edu.activities && (
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {edu.activities}
                </p>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
