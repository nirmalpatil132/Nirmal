'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ACHIEVEMENTS_DATA } from '../../data/achievements';

export function AchievementsSection() {
  return (
    <Section id="achievements" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Honors & Recognition"
          title="Achievements & Competitions"
          subtitle="National entrepreneurship competition victories at IIT Bombay, research paper submissions, and leadership achievements."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
          {ACHIEVEMENTS_DATA.map((ach) => (
            <Card key={ach.id} variant="elevated">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-sm)' }}>
                <Badge variant="primary">{ach.badgeText}</Badge>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                  {ach.dateStr}
                </span>
              </div>

              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                {ach.title}
              </h3>

              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-xs)' }}>
                {ach.issuer}
              </div>

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
