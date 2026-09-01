'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { PROJECTS_DATA, ProjectData } from '../../data/projects';

const CATEGORIES = ['All', 'Featured', 'Product / Professional', 'Supporting', 'Archive & Learning'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        {/* HERO BANNER */}
        <Section id="projects-hero" spacing="md">
          <Container size="lg">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', marginBottom: 'var(--space-lg)' }}>
              <Badge variant="primary">🚀 FEATURED PRODUCT SHOWCASE</Badge>
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                  fontWeight: 'var(--font-weight-extrabold)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                Engineering &amp; <span className="text-gradient-orange">Project Portfolio</span>
              </h1>
              <p
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--text-secondary)',
                  maxWidth: '750px',
                  lineHeight: 1.6,
                }}
              >
                Full-stack web applications, AI-assisted platforms, production B2B services, and backend systems built with modern web technologies.
              </p>
            </div>

            {/* CATEGORY TAG FILTERS */}
            <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap', marginBottom: 'var(--space-xl)' }}>
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      background: isActive ? 'var(--primary)' : 'var(--bg-elevated)',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                      padding: 'var(--space-xs) var(--space-md)',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      boxShadow: isActive ? 'var(--shadow-glow)' : 'none',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* PROJECTS GRID SHOWCASE */}
        <Section id="projects-grid" spacing="lg">
          <Container size="lg">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 'var(--space-lg)',
              }}
            >
              {filteredProjects.map((project: ProjectData) => (
                <Card
                  key={project.id}
                  variant={project.featured ? 'glass' : 'elevated'}
                  interactive
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: project.featured ? '1px solid var(--border-orange)' : '1px solid var(--border-subtle)',
                  }}
                >
                  <div>
                    {/* CARD HEADER & BADGES */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-xs)', marginBottom: 'var(--space-xs)' }}>
                      <Badge variant={project.featured ? 'primary' : 'neutral'}>
                        {project.category}
                      </Badge>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 'var(--font-weight-medium)' }}>
                        {project.status}
                      </span>
                    </div>

                    {/* TITLE & SUBTITLE */}
                    <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {project.title}
                    </h2>
                    {project.subtitle && (
                      <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-medium)', color: 'var(--primary)', marginBottom: 'var(--space-xs)' }}>
                        {project.subtitle}
                      </div>
                    )}

                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                      {project.oneLiner}
                    </p>

                    {/* ROLE BADGE */}
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 'var(--space-sm)' }}>
                      Role: {project.role}
                    </div>

                    {/* FEATURES LIST */}
                    <div style={{ marginBottom: 'var(--space-md)' }}>
                      <div style={{ fontSize: '11px', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-muted)', marginBottom: 'var(--space-2xs)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Highlights &amp; Features:
                      </div>
                      <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {project.features.slice(0, 3).map((f, i) => (
                          <li key={i} style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CARD FOOTER: TECH TAGS & LINKS */}
                  <div>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: 'var(--space-md)', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)' }}>
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="neutral">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-xs)', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
                        <Button variant="secondary" size="sm" style={{ width: '100%', fontSize: '12px' }}>
                          View Case Study ➔
                        </Button>
                      </Link>

                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                          <Button variant="ghost" size="sm" style={{ fontSize: '12px' }}>
                            GitHub ↗
                          </Button>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                          <Button variant="primary" size="sm" style={{ fontSize: '12px' }}>
                            Live Demo ↗
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
