'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Tag } from '../ui/Tag';
import { PROFESSIONAL_EXPERIENCE, LEADERSHIP_EXPERIENCE, ExperienceItem } from '../../data/experience';

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'professional' | 'leadership'>('all');

  const getFilteredItems = (): ExperienceItem[] => {
    if (activeTab === 'professional') return PROFESSIONAL_EXPERIENCE;
    if (activeTab === 'leadership') return LEADERSHIP_EXPERIENCE;
    return [...PROFESSIONAL_EXPERIENCE, ...LEADERSHIP_EXPERIENCE];
  };

  const filteredItems = getFilteredItems();

  return (
    <Section id="experience" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Career Timeline"
          title="Work Experience & Leadership Programs"
          subtitle="Professional internships, technical leadership roles at E-Cell and CSESA, and Google Student Ambassador activities."
        />

        {/* EXPERIENCE TYPE TAB FILTERS */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-xs)', marginBottom: 'var(--space-2xl)' }}>
          <Tag label="All Timeline Items" active={activeTab === 'all'} onClick={() => setActiveTab('all')} />
          <Tag label="💼 Professional Work" active={activeTab === 'professional'} onClick={() => setActiveTab('professional')} />
          <Tag label="🎯 Leadership & Ambassadors" active={activeTab === 'leadership'} onClick={() => setActiveTab('leadership')} />
        </div>

        {/* TIMELINE LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', maxWidth: '850px', margin: '0 auto' }}>
          {filteredItems.map((item) => (
            <Card key={item.id} variant="elevated">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', marginBottom: '4px' }}>
                    <Badge variant={item.type === 'professional' ? 'primary' : 'secondary'}>
                      {item.organization}
                    </Badge>
                    {item.isCurrent && <Badge variant="success">Current</Badge>}
                  </div>

                  <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                    {item.role}
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
                  {item.period}
                </span>
              </div>

              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                {item.description}
              </p>

              <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)' }}>
                    <span style={{ color: 'var(--primary)' }}>▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2xs)', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)' }}>
                {item.skillsGained.map((skill, idx) => (
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
