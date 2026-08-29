'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Project } from '@nirmal/types';

const PLACEHOLDER_PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: 'placeholder-project-one',
    title: '[Placeholder Project 1: Full-Stack Web Application]',
    description: '[Short project description placeholder: High-performance monorepo application using Next.js, Express, and PostgreSQL.]',
    fullDescription: '[Detailed case study description placeholder: Architecture details, database entity relationship diagram, performance optimizations, state management, and deployment pipeline.]',
    category: 'Full-Stack',
    featured: true,
    demoUrl: '#demo-placeholder',
    repoUrl: '#repo-placeholder',
    thumbnailUrl: null,
    technologies: [
      { id: 't1', projectId: 'p1', name: 'Next.js' },
      { id: 't2', projectId: 'p1', name: 'Express' },
      { id: 't3', projectId: 'p1', name: 'PostgreSQL' },
      { id: 't4', projectId: 'p1', name: 'TypeScript' },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'p2',
    slug: 'placeholder-project-two',
    title: '[Placeholder Project 2: Agentic AI Workflow System]',
    description: '[Short project description placeholder: Autonomous multi-agent coordination system with tool execution capabilities.]',
    fullDescription: '[Detailed case study description placeholder: Agentic AI orchestration, tool schemas, safety guardrails, prompt evaluation metrics, and real-time event streaming.]',
    category: 'AI/ML',
    featured: true,
    demoUrl: '#demo-placeholder',
    repoUrl: '#repo-placeholder',
    thumbnailUrl: null,
    technologies: [
      { id: 't5', projectId: 'p2', name: 'Python' },
      { id: 't6', projectId: 'p2', name: 'Agentic AI' },
      { id: 't7', projectId: 'p2', name: 'FastAPI' },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'p3',
    slug: 'placeholder-project-three',
    title: '[Placeholder Project 3: Design System & UI Kit]',
    description: '[Short project description placeholder: Comprehensive accessible UI component library and glassmorphism token architecture.]',
    fullDescription: '[Detailed case study description placeholder: Accessibility auditing, WCAG compliance, fluid typography scales, CSS custom property tokens, and Storybook documentation.]',
    category: 'Frontend',
    featured: false,
    demoUrl: '#demo-placeholder',
    repoUrl: '#repo-placeholder',
    thumbnailUrl: null,
    technologies: [
      { id: 't8', projectId: 'p3', name: 'React' },
      { id: 't9', projectId: 'p3', name: 'CSS Tokens' },
      { id: 't10', projectId: 'p3', name: 'Storybook' },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Frontend', 'AI/ML'];

  const filteredProjects = activeCategory === 'All'
    ? PLACEHOLDER_PROJECTS
    : PLACEHOLDER_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <Section id="projects" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Portfolio Gallery"
          title="Featured Projects & Case Studies"
          subtitle="[Projects section subtitle placeholder: Showcase of full-stack web applications, backend APIs, and design system engineering.]"
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

        {/* PROJECTS GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="elevated"
              interactive
              onClick={() => setSelectedProject(project)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <div>
                {/* THUMBNAIL PLACEHOLDER */}
                <div
                  style={{
                    width: '100%',
                    height: '180px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: 'var(--space-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--space-2xs)',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span style={{ fontSize: 'var(--font-size-2xl)' }}>🖼️</span>
                  <span style={{ fontSize: 'var(--font-size-xs)' }}>[Project Thumbnail Placeholder]</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xs)' }}>
                  <Badge variant="primary">{project.category}</Badge>
                  {project.featured && <Badge variant="secondary">Featured</Badge>}
                </div>

                <h3
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div>
                {/* TECH STACK TAGS */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2xs)', marginBottom: 'var(--space-md)' }}>
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech.id}
                      style={{
                        padding: '2px 8px',
                        fontSize: '11px',
                        background: 'var(--bg-primary)',
                        color: 'var(--secondary)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* CARD ACTIONS */}
                <div
                  style={{
                    display: 'flex',
                    gap: 'var(--space-xs)',
                    paddingTop: 'var(--space-sm)',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <Button variant="secondary" size="sm" onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}>
                    View Case Study ↗
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CASE STUDY DETAIL MODAL PLACEHOLDER */}
        {selectedProject && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(3, 7, 18, 0.85)',
              backdropFilter: 'blur(12px)',
              zIndex: 'var(--z-modal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'var(--space-md)',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-2xl)',
                maxWidth: '650px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: 'var(--shadow-lg)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-md)' }}>
                <Badge variant="primary">{selectedProject.category}</Badge>
                <Button variant="ghost" size="sm" onClick={() => setSelectedProject(null)}>
                  ✕ Close
                </Button>
              </div>

              <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-xs)' }}>
                {selectedProject.title}
              </h2>

              <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                {selectedProject.fullDescription || selectedProject.description}
              </p>

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-muted)', marginBottom: 'var(--space-xs)' }}>
                  Technologies & Architecture
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
                  {selectedProject.technologies?.map((tech) => (
                    <Badge key={tech.id} variant="secondary">{tech.name}</Badge>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                <Button variant="primary" onClick={() => alert('Demo link placeholder')}>
                  Live Demo (Placeholder) ↗
                </Button>
                <Button variant="secondary" onClick={() => alert('Repo link placeholder')}>
                  GitHub Code (Placeholder) ↗
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
