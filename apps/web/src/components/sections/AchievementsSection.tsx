'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Achievement } from '@nirmal/types';

const PLACEHOLDER_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach1',
    title: '[Placeholder Achievement 1: Hackathon Winner / 1st Place]',
    issuer: '[Hackathon Organization Placeholder]',
    date: new Date('2026-03-15'),
    description: '[Description placeholder: Built an agentic AI developer assistant web application under 36 hours.]',
    order: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'ach2',
    title: '[Placeholder Achievement 2: Open Source Contributor Award]',
    issuer: '[Open Source Community Placeholder]',
    date: new Date('2025-11-20'),
    description: '[Description placeholder: Contributed key bug fixes and feature enhancements to popular developer tool repositories.]',
    order: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function AchievementsSection() {
  return (
    <Section id="achievements" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Honors & Recognition"
          title="Achievements & Leadership"
          subtitle="[Achievements section subtitle placeholder: Competitions, awards, open-source contributions, and leadership recognitions.]"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
          {PLACEHOLDER_ACHIEVEMENTS.map((ach) => (
            <Card key={ach.id} variant="elevated">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-sm)' }}>
                <Badge variant="primary">🏆 {ach.issuer}</Badge>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                  {ach.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </div>

              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                {ach.title}
              </h3>

              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {ach.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
