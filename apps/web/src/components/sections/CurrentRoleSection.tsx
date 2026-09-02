'use client';

import React from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { PROFESSIONAL_EXPERIENCE } from '../../data/experience';

export function CurrentRoleSection() {
  const currentRole = PROFESSIONAL_EXPERIENCE.find((exp) => exp.isCurrent);

  if (!currentRole) return null;

  return (
    <Section id="current-role" spacing="md">
      <Container size="lg">
        <Card variant="glass" style={{ borderLeft: '4px solid var(--primary)', borderRight: '1px solid var(--border-orange)', borderTop: '1px solid var(--border-orange)', borderBottom: '1px solid var(--border-orange)', padding: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', marginBottom: 'var(--space-2xs)', flexWrap: 'wrap' }}>
                <Badge variant="success">⚡ ACTIVE PROFESSIONAL ROLE</Badge>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontWeight: 'var(--font-weight-medium)' }}>
                  🗓 {currentRole.period}
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                {currentRole.role}
              </h2>
              <div style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--primary)', marginTop: '4px' }}>
                {currentRole.organization}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                📍 {currentRole.location} ({currentRole.workArrangement})
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--success)', fontWeight: 'var(--font-weight-medium)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>🟢</span> Open to New Engineering Opportunities
              </div>
            </div>
          </div>

          <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-md)', maxWidth: '900px' }}>
            {currentRole.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', marginBottom: 'var(--space-lg)' }}>
            {currentRole.highlights.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>▹</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
              {currentRole.skillsGained.map((skill, idx) => (
                <Badge key={idx} variant="primary">
                  {skill}
                </Badge>
              ))}
            </div>

            <Link href="/experience" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="sm">
                View Career &amp; Leadership Story ➔
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
