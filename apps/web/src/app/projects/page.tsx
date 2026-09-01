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
import { Tag } from '../../components/ui/Tag';
import { PageHeader } from '../../components/ui/PageHeader';
import { PROJECTS_DATA, ProjectData } from '../../data/projects';

const CATEGORIES = ['All', 'Featured', 'Product / Professional', 'Supporting', 'Archive & Learning'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : selectedCategory === 'Featured'
    ? PROJECTS_DATA.filter((p) => p.featured)
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const featuredCount = PROJECTS_DATA.filter((p) => p.featured).length;
  const liveCount = PROJECTS_DATA.filter((p) => p.liveUrl).length;
  const repoCount = PROJECTS_DATA.filter((p) => p.githubUrl).length;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        {/* HERO BANNER */}
        <Section id="projects-hero" spacing="md">
          <Container size="lg">
            <PageHeader
              badge="🚀 FEATURED PRODUCT SHOWCASE"
              title="Engineering &"
              highlightText="Project Portfolio"
              description="Explore full-stack web applications, AI-assisted platforms, production B2B services, and backend systems built with modern web technologies."
            />

            {/* REAL PORTFOLIO SUMMARY STATS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-xl)',
              }}
            >
              <Card variant="elevated" style={{ padding: 'var(--space-md)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--primary)' }}>
                  {PROJECTS_DATA.length}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Total Projects
                </div>
              </Card>
              <Card variant="elevated" style={{ padding: 'var(--space-md)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--primary)' }}>
                  {featuredCount}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Featured Products
                </div>
              </Card>
              <Card variant="elevated" style={{ padding: 'var(--space-md)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--secondary)' }}>
                  {repoCount}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  GitHub Repositories
                </div>
              </Card>
              <Card variant="elevated" style={{ padding: 'var(--space-md)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--success)' }}>
                  {liveCount}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Deployed Live Demos
                </div>
              </Card>
            </div>

            {/* CATEGORY TAG FILTERS */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-xs)',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: 'var(--space-xl)',
                paddingBottom: 'var(--space-sm)',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontWeight: 'var(--font-weight-medium)', marginRight: 'var(--space-2xs)' }}>
                Filter By Category:
              </span>
              {CATEGORIES.map((cat) => (
                <Tag
                  key={cat}
                  label={cat}
                  active={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                />
              ))}
            </div>

            {/* PROJECTS GRID */}
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
                  variant="glass"
                  interactive
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    border: project.featured ? '1px solid var(--border-orange)' : '1px solid var(--border-subtle)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xs)', gap: '4px', flexWrap: 'wrap' }}>
                      <Badge variant={project.featured ? 'primary' : 'neutral'}>
                        {project.featured ? '⭐ Featured' : project.category}
                      </Badge>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 'var(--font-weight-medium)' }}>
                        {project.status}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '4px', lineHeight: 1.25 }}>
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--primary)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-xs)' }}>
                        {project.subtitle}
                      </div>
                    )}

                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                      {project.oneLiner}
                    </p>

                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <Badge key={i} variant="neutral">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge variant="neutral">+{project.technologies.length - 5}</Badge>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 'var(--space-2xs)', flexWrap: 'wrap', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)', marginTop: 'auto' }}>
                    <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', flex: 1, minWidth: '120px' }}>
                      <Button variant="secondary" size="sm" style={{ width: '100%', fontSize: '12px' }}>
                        Case Study ➔
                      </Button>
                    </Link>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button variant="ghost" size="sm" style={{ fontSize: '12px' }}>
                          Code 🐙
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button variant="primary" size="sm" style={{ fontSize: '12px' }}>
                          Live 🚀
                        </Button>
                      </a>
                    )}
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
