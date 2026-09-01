import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '../../../components/navigation/Navbar';
import { Footer } from '../../../components/navigation/Footer';
import { Section } from '../../../components/ui/Section';
import { Container } from '../../../components/ui/Container';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { PROJECTS_DATA, ProjectData } from '../../../data/projects';

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found — Nirmal Patil',
    };
  }
  return {
    title: `${project.title} — Project Case Study | Nirmal Patil`,
    description: project.oneLiner,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projectIndex = PROJECTS_DATA.findIndex((p) => p.slug === params.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project: ProjectData = PROJECTS_DATA[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS_DATA[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[projectIndex + 1] : null;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        <Section id="project-detail" spacing="lg">
          <Container size="lg">
            {/* BREADCRUMB & BACK BUTTON */}
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <Link href="/projects" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size="sm">
                  ← Back to All Projects
                </Button>
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              {/* HERO CARD */}
              <Card variant="glass" style={{ border: '1px solid var(--border-orange)', padding: 'var(--space-xl)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap', alignItems: 'center', marginBottom: 'var(--space-xs)' }}>
                  <Badge variant={project.featured ? 'primary' : 'neutral'}>{project.category}</Badge>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontWeight: 'var(--font-weight-medium)' }}>
                    Status: {project.status}
                  </span>
                </div>

                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--text-primary)', marginBottom: 'var(--space-2xs)', lineHeight: 1.15 }}>
                  {project.title}
                </h1>

                {project.subtitle && (
                  <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-medium)', color: 'var(--primary)', marginBottom: 'var(--space-md)' }}>
                    {project.subtitle}
                  </p>
                )}

                <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-lg)', maxWidth: '900px' }}>
                  {project.oneLiner}
                </p>

                {/* ROLE & ACTION LINKS */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>
                    <strong>Engineering Role:</strong> <span style={{ color: 'var(--text-primary)' }}>{project.role}</span>
                  </div>

                  <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button variant="secondary" size="md">
                          GitHub Repository ↗
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button variant="primary" size="md" style={{ boxShadow: 'var(--shadow-glow)' }}>
                          Live Demo ↗
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>

              {/* PROBLEM SOLVED & TECHNOLOGIES */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
                <Card variant="elevated">
                  <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                    🎯 Problem Solved &amp; Objective
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.problemSolves}
                  </p>
                </Card>

                <Card variant="elevated">
                  <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                    💻 Technologies &amp; Architecture
                  </h3>
                  <div style={{ display: 'flex', gap: 'var(--space-2xs)', flexWrap: 'wrap', marginTop: 'var(--space-xs)' }}>
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>

              {/* FEATURES & CHALLENGES */}
              <Card variant="glass">
                <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>
                  ✨ Key Features &amp; Technical Highlights
                </h3>
                <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', marginBottom: 'var(--space-lg)' }}>
                  {project.features.map((feat, i) => (
                    <li key={i} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, display: 'flex', gap: 'var(--space-xs)' }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>▹</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {project.challengesSolved.length > 0 && (
                  <>
                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
                      🧩 Engineering Challenges Solved
                    </h3>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                      {project.challengesSolved.map((ch, i) => (
                        <li key={i} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, display: 'flex', gap: 'var(--space-xs)' }}>
                          <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>▹</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Card>

              {/* NEXT / PREVIOUS PROJECT NAVIGATION */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
                {prevProject ? (
                  <Link href={`/projects/${prevProject.slug}`} style={{ textDecoration: 'none' }}>
                    <Button variant="ghost" size="sm">
                      ← Previous: {prevProject.title}
                    </Button>
                  </Link>
                ) : <div />}

                {nextProject ? (
                  <Link href={`/projects/${nextProject.slug}`} style={{ textDecoration: 'none' }}>
                    <Button variant="ghost" size="sm">
                      Next: {nextProject.title} →
                    </Button>
                  </Link>
                ) : <div />}
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
