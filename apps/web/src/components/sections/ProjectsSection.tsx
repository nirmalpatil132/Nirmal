'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Tag } from '../ui/Tag';
import { PROJECTS_DATA, ProjectData } from '../../data/projects';

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('Featured');

  const filterOptions = ['Featured', 'All', 'Product / Professional', 'Supporting', 'Archive & Learning'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Featured') return proj.featured;
    if (selectedFilter === 'Product / Professional') return proj.category === 'Featured' || proj.category === 'Product / Professional';
    if (selectedFilter === 'Supporting') return proj.category === 'Supporting';
    if (selectedFilter === 'Archive & Learning') return proj.category === 'Archive & Learning';
    return true;
  });

  return (
    <Section id="projects" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Selected Engineering Work"
          title="Featured Projects & Digital Products"
          subtitle="Real-world web applications, AI systems, B2B platforms, and full-stack software projects developed by Nirmal Patil."
        />

        {/* CATEGORY FILTERS */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-xs)',
            flexWrap: 'wrap',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {filterOptions.map((filter) => (
            <Tag
              key={filter}
              label={filter === 'Featured' ? '⭐ Featured Projects' : filter}
              active={selectedFilter === filter}
              onClick={() => setSelectedFilter(filter)}
            />
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="elevated"
              interactive
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                border: project.featured ? '1px solid var(--border-orange)' : '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-xs)', flexWrap: 'wrap', gap: '4px' }}>
                <Badge variant={project.featured ? 'primary' : 'neutral'}>
                  {project.featured ? '⭐ Featured' : project.category}
                </Badge>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)' }}>
                  {project.status}
                </span>
              </div>

              <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '2px' }}>
                {project.title}
              </h3>

              {project.subtitle && (
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--primary)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-xs)' }}>
                  {project.subtitle}
                </div>
              )}

              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 'var(--space-md)', flex: 1 }}>
                {project.oneLiner}
              </p>

              {/* TECH STACK TAGS */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2xs)', marginBottom: 'var(--space-md)' }}>
                {project.technologies.slice(0, 5).map((tech, idx) => (
                  <Badge key={idx} variant="neutral">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 5 && (
                  <Badge variant="neutral">+{project.technologies.length - 5}</Badge>
                )}
              </div>

              {/* CARD ACTIONS */}
              <div style={{ display: 'flex', gap: 'var(--space-xs)', paddingTop: 'var(--space-sm)', borderTop: '1px solid var(--border-subtle)', marginTop: 'auto', flexWrap: 'wrap' }}>
                <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', flex: 1, minWidth: '120px' }}>
                  <Button variant="secondary" size="sm" fullWidth style={{ fontSize: '12px' }}>
                    Case Study ➔
                  </Button>
                </Link>

                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="ghost" size="sm" style={{ fontSize: '12px' }}>
                      🐙 Code
                    </Button>
                  </a>
                )}

                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="primary" size="sm" style={{ fontSize: '12px' }}>
                      🚀 Live
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
