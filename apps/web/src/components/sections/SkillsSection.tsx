'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Tag } from '../ui/Tag';
import { SKILL_GROUPS, SkillStatus } from '../../data/skills';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_GROUPS.map((g) => g.category)];

  const filteredGroups = selectedCategory === 'All'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter((g) => g.category === selectedCategory);

  const getStatusBadgeVariant = (status: SkillStatus) => {
    switch (status) {
      case 'Applied':
        return 'success';
      case 'Working With':
        return 'primary';
      case 'Learning':
        return 'warning';
      case 'Explored':
        return 'secondary';
      default:
        return 'neutral';
    }
  };

  return (
    <Section id="skills" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Technical Proficiency"
          title="Skills & Expertise Matrix"
          subtitle="Categorized technical competencies evaluated by real-world application state rather than artificial percentage metrics."
        />

        {/* SKILL STATE LEGEND */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
            flexWrap: 'wrap',
            marginBottom: 'var(--space-xl)',
          }}
        >
          <Badge variant="success">● Applied (In Production / Projects)</Badge>
          <Badge variant="primary">● Working With (Actively Strengthening)</Badge>
          <Badge variant="warning">● Learning (Currently Developing)</Badge>
          <Badge variant="secondary">● Explored (Experimental / Research)</Badge>
        </div>

        {/* CATEGORY TAG FILTERS */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-xs)',
            flexWrap: 'wrap',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {categories.map((cat) => (
            <Tag
              key={cat}
              label={cat}
              active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            />
          ))}
        </div>

        {/* SKILL GROUPS DISPLAY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {filteredGroups.map((group) => (
            <Card key={group.category} variant="elevated">
              <h3
                style={{
                  fontSize: 'var(--font-size-md)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-md)',
                  paddingBottom: 'var(--space-xs)',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {group.category}
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: 'var(--space-sm)',
                }}
              >
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-xs) var(--space-sm)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                      {skill.icon && <span style={{ fontSize: 'var(--font-size-md)' }}>{skill.icon}</span>}
                      <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                    </div>

                    <Badge variant={getStatusBadgeVariant(skill.status)}>
                      {skill.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
