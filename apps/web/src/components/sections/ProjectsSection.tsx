'use client';

import React, { useState } from 'react';
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
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const filterOptions = ['Featured', 'All', 'Supporting', 'Archive & Learning'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Featured') return proj.featured;
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {filteredProjects.map((project) => (
            <Card key={project.id} variant="elevated" interactive style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-xs)' }}>
                <Badge variant={project.featured ? 'primary' : 'neutral'}>
                  {project.featured ? '⭐ Featured Project' : project.category}
                </Badge>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)' }}>
                  {project.status}
                </span>
              </div>

              <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '2px' }}>
                {project.title}
              </h3>

              {project.subtitle && (
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-xs)' }}>
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
              <div style={{ display: 'flex', gap: 'var(--space-xs)', paddingTop: 'var(--space-sm)', borderTop: '1px solid var(--border-subtle)', marginTop: 'auto' }}>
                <Button variant="secondary" size="sm" fullWidth onClick={() => setActiveModalProject(project)}>
                  Details &amp; Case Study ➔
                </Button>

                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="ghost" size="sm">
                      🐙 Code
                    </Button>
                  </a>
                )}

                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="primary" size="sm">
                      🚀 Live
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* PROJECT CASE STUDY OVERLAY MODAL */}
        {activeModalProject && (
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
            onClick={() => setActiveModalProject(null)}
          >
            <div
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: 'var(--shadow-xl)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-md)' }}>
                <div>
                  <Badge variant="primary">{activeModalProject.category}</Badge>
                  <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginTop: 'var(--space-2xs)' }}>
                    {activeModalProject.title}
                  </h2>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--secondary)' }}>
                    {activeModalProject.subtitle}
                  </div>
                </div>

                <Button variant="ghost" size="sm" onClick={() => setActiveModalProject(null)}>
                  ✕ Close
                </Button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                <div>
                  <h4 style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Problem It Solves
                  </h4>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {activeModalProject.problemSolves}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                    My Role
                  </h4>
                  <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>
                    {activeModalProject.role}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Key Features
                  </h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2xs)' }}>
                    {activeModalProject.features.map((feat, idx) => (
                      <li key={idx} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', display: 'flex', gap: 'var(--space-xs)' }}>
                        <span style={{ color: 'var(--primary)' }}>▹</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Technologies Used
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2xs)' }}>
                    {activeModalProject.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'flex-end', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
                {activeModalProject.githubUrl && (
                  <a href={activeModalProject.githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" size="md">
                      🐙 View GitHub Repo ↗
                    </Button>
                  </a>
                )}
                {activeModalProject.liveUrl && (
                  <a href={activeModalProject.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="primary" size="md">
                      🚀 Open Live App ↗
                    </Button>
                  </a>
                )}
                <Button variant="ghost" size="md" onClick={() => setActiveModalProject(null)}>
                  Close Case Study
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
