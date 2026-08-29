'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { Badge } from '../ui/Badge';
import { Skill } from '@nirmal/types';

const PLACEHOLDER_SKILLS: Skill[] = [
  { id: 's1', name: '[Placeholder Skill: React / Next.js]', category: 'Frontend', proficiency: 90, featured: true, order: 1, createdAt: new Date(), updatedAt: new Date() },
  { id: 's2', name: '[Placeholder Skill: TypeScript]', category: 'Frontend', proficiency: 85, featured: true, order: 2, createdAt: new Date(), updatedAt: new Date() },
  { id: 's3', name: '[Placeholder Skill: Node.js / Express]', category: 'Backend', proficiency: 85, featured: true, order: 3, createdAt: new Date(), updatedAt: new Date() },
  { id: 's4', name: '[Placeholder Skill: PostgreSQL / Prisma]', category: 'Backend', proficiency: 80, featured: true, order: 4, createdAt: new Date(), updatedAt: new Date() },
  { id: 's5', name: '[Placeholder Skill: Agentic AI Engineering]', category: 'AI/ML', proficiency: 80, featured: true, order: 5, createdAt: new Date(), updatedAt: new Date() },
  { id: 's6', name: '[Placeholder Skill: UI/UX & Design Systems]', category: 'Design', proficiency: 85, featured: true, order: 6, createdAt: new Date(), updatedAt: new Date() },
  { id: 's7', name: '[Placeholder Skill: Git & Monorepos]', category: 'Tools', proficiency: 90, featured: false, order: 7, createdAt: new Date(), updatedAt: new Date() },
  { id: 's8', name: '[Placeholder Skill: REST API Architecture]', category: 'Backend', proficiency: 88, featured: false, order: 8, createdAt: new Date(), updatedAt: new Date() },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Design', 'Tools'];

  const filteredSkills = activeCategory === 'All'
    ? PLACEHOLDER_SKILLS
    : PLACEHOLDER_SKILLS.filter((s) => s.category === activeCategory);

  return (
    <Section id="skills" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Technical Taxonomy"
          title="Skills & Learning Journey"
          subtitle="[Skills section subtitle placeholder: Categorized technical proficiencies, frameworks, tools, and domain expertise.]"
        />

        {/* CATEGORY FILTER TAGS */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-xs)',
            flexWrap: 'wrap',
            marginBottom: 'var(--space-xl)',
            justifyContent: 'center',
          }}
        >
          {categories.map((cat) => (
            <Tag
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* SKILLS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-md)',
          }}
        >
          {filteredSkills.map((skill) => (
            <Card key={skill.id} variant="default" interactive style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xs)' }}>
                  <Badge variant="secondary">{skill.category}</Badge>
                  {skill.proficiency && (
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                      {skill.proficiency}%
                    </span>
                  )}
                </div>
                <h3
                  style={{
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {skill.name}
                </h3>
              </div>

              {/* PROGRESS BAR PLACEHOLDER */}
              {skill.proficiency && (
                <div style={{ marginTop: 'var(--space-md)' }}>
                  <div
                    style={{
                      height: '6px',
                      width: '100%',
                      background: 'var(--bg-elevated)',
                      borderRadius: 'var(--radius-full)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${skill.proficiency}%`,
                        background: 'var(--primary)',
                        borderRadius: 'var(--radius-full)',
                        transition: 'width var(--transition-normal)',
                      }}
                    />
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
