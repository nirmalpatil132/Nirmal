'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Tag } from '../ui/Tag';
import { Input } from '../ui/Input';
import { SKILL_GROUPS, SkillStatus, SkillItem } from '../../data/skills';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_GROUPS.map((g) => g.category)];

  const getStatusBadgeVariant = (status: SkillStatus) => {
    switch (status) {
      case 'Applied':
        return 'primary'; // Orange theme
      case 'Working With':
        return 'secondary';
      case 'Learning':
        return 'warning';
      case 'Explored':
        return 'neutral';
      default:
        return 'neutral';
    }
  };

  // Filter skills based on selected category & search query
  const filteredSkillGroups = SKILL_GROUPS.map((group) => {
    if (selectedCategory !== 'All' && group.category !== selectedCategory) {
      return null;
    }

    const matchingSkills = group.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchingSkills.length === 0) return null;

    return {
      category: group.category,
      skills: matchingSkills,
    };
  }).filter(Boolean) as Array<{ category: string; skills: SkillItem[] }>;

  return (
    <Section id="skills" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Technical Competencies"
          title="Skills & Technology Matrix"
          subtitle="Categorized technical competencies evaluated by real-world application state rather than artificial percentage metrics."
        />

        {/* SEARCH & FILTER CONTROLS */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
            alignItems: 'center',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {/* SEARCH INPUT */}
          <div style={{ maxWidth: '450px', width: '100%' }}>
            <Input
              type="text"
              placeholder="🔍 Search technologies (e.g. Python, CrewAI, Node.js...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'var(--bg-secondary)',
                borderColor: searchQuery ? 'var(--primary)' : 'var(--border-default)',
                boxShadow: searchQuery ? 'var(--shadow-glow)' : 'none',
              }}
            />
          </div>

          {/* SKILL STATE LEGEND */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-xs)',
              flexWrap: 'wrap',
            }}
          >
            <Badge variant="primary">● Applied (In Production / Projects)</Badge>
            <Badge variant="secondary">● Working With (Actively Strengthening)</Badge>
            <Badge variant="warning">● Learning (Currently Developing)</Badge>
            <Badge variant="neutral">● Explored (Experimental / Research)</Badge>
          </div>

          {/* CATEGORY TAG FILTERS */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-xs)',
              flexWrap: 'wrap',
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
        </div>

        {/* SKILL GROUPS DISPLAY */}
        {filteredSkillGroups.length === 0 ? (
          <Card variant="glass" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              No technologies match &ldquo;{searchQuery}&rdquo;. Try clearing your search query.
            </p>
          </Card>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            {filteredSkillGroups.map((group) => (
              <Card key={group.category} variant="elevated" style={{ borderLeft: '3px solid var(--primary)' }}>
                <h3
                  style={{
                    fontSize: 'var(--font-size-md)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-md)',
                    paddingBottom: 'var(--space-xs)',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{group.category}</span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontWeight: 'normal' }}>
                    {group.skills.length} skills
                  </span>
                </h3>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 'var(--space-sm)',
                  }}
                >
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: 'var(--space-xs) var(--space-sm)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all var(--transition-fast)',
                      }}
                      className="card-hover-orange"
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
        )}
      </Container>
    </Section>
  );
}
