'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { PROFILE_DATA } from '../../data/profile';
import { PROFESSIONAL_EXPERIENCE } from '../../data/experience';

export function CurrentRoleSection() {
  const currentRole = PROFESSIONAL_EXPERIENCE.find((exp) => exp.isCurrent);

  if (!currentRole) return null;

  return (
    <Section id="current-role" spacing="md">
      <Container size="lg">
        <Card variant="glass" style={{ borderLeft: '4px solid var(--primary)', padding: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', marginBottom: 'var(--space-2xs)' }}>
                <Badge variant="success">⚡ Active Professional Role</Badge>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>{currentRole.period}</span>
              </div>
              <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                {currentRole.role}
              </h2>
              <div style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--secondary)', marginTop: '4px' }}>
                {currentRole.organization}
              </div>
            </div>

            <div style={{ textAlign: 'right', fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
              <div>📍 {currentRole.location}</div>
              <div style={{ color: 'var(--success)', marginTop: '2px' }}>🟢 Open to New Opportunities</div>
            </div>
          </div>

          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)', maxWidth: '900px' }}>
            {currentRole.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
            {currentRole.highlights.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)', fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--primary)' }}>▹</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)' }}>
            {currentRole.skillsGained.map((skill, idx) => (
              <Badge key={idx} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      </Container>
    </Section>
  );
}
