'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { LEARNING_STAGES, TIMELINE_MESSAGE } from '../../data/learningJourney';

export function LearningJourneySection() {
  return (
    <Section id="learning-journey" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Continuous Growth"
          title="Learning Journey & Progression"
          subtitle="I don't view skills as a finished list. Each project has pushed me to learn something new — from web fundamentals to AI agents and production fintech systems."
        />

        {/* TIMELINE PHILOSOPHY BANNER */}
        <Card variant="glass" style={{ marginBottom: 'var(--space-2xl)', borderLeft: '4px solid var(--primary)', boxShadow: 'var(--shadow-glow)' }}>
          <p
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-primary)',
              lineHeight: 1.7,
              fontStyle: 'italic',
            }}
          >
            &ldquo;{TIMELINE_MESSAGE}&rdquo;
          </p>
        </Card>

        {/* 7-STAGE TIMELINE GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-xl)' }}>
          {LEARNING_STAGES.map((stage) => (
            <Card key={stage.stageNumber} variant="elevated" interactive style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                <Badge variant="primary">{stage.stageNumber}</Badge>
                <span style={{ fontSize: 'var(--font-size-xl)' }}>{stage.icon}</span>
              </div>

              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                {stage.title}
              </h3>

              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--primary)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-xs)' }}>
                Focus: {stage.learningFocus}
              </div>

              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 'var(--space-md)', flex: 1 }}>
                <strong>Applied Through:</strong> {stage.appliedThrough}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2xs)', marginTop: 'auto', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)' }}>
                {stage.skills.map((skill, idx) => (
                  <Badge key={idx} variant="neutral">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
