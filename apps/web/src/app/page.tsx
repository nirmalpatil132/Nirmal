'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { CurrentRoleSection } from '../components/sections/CurrentRoleSection';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { HealthCheckModal } from '../components/sections/HealthCheckModal';
import { PROJECTS_DATA } from '../data/projects';
import { SKILL_GROUPS } from '../data/skills';
import { PROFILE_DATA } from '../data/profile';

export default function PortfolioHomePage() {
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);

  // Top featured projects for homepage preview
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured).slice(0, 3);

  // Top skill highlights for homepage preview
  const topSkills = SKILL_GROUPS.slice(0, 4);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        {/* 1. CINEMATIC HERO */}
        <HeroSection />

        {/* 2. ABOUT & IDENTITY PREVIEW */}
        <Section id="about-preview" spacing="lg">
          <Container size="lg">
            <Card variant="glass" style={{ border: '1px solid var(--border-orange)', padding: 'var(--space-xl)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
                  <Badge variant="primary">👋 ABOUT NIRMAL PATIL</Badge>
                  <Link href="/about" style={{ textDecoration: 'none' }}>
                    <Button variant="ghost" size="sm">
                      Read Full Bio &amp; Story ➔
                    </Button>
                  </Link>
                </div>

                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  Building modern <span className="text-gradient-orange">full-stack web apps</span>, scalable backend systems &amp; <span className="text-gradient-orange">agentic AI workflows</span>.
                </h2>

                <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '900px' }}>
                  {PROFILE_DATA.shortBio} Currently serving as a Software Developer Intern at Evnorix Infotech, working on Loan Origination Systems (LOS) and fintech workflows.
                </p>

                <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', paddingTop: 'var(--space-xs)' }}>
                  <Link href="/about" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" size="md">
                      Explore Full Profile
                    </Button>
                  </Link>
                  <Link href="/experience" style={{ textDecoration: 'none' }}>
                    <Button variant="ghost" size="md">
                      View Experience &amp; Internships ➔
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </Container>
        </Section>

        {/* 3. CURRENT ROLE PREVIEW */}
        <CurrentRoleSection />

        {/* 4. FEATURED PROJECTS PREVIEW */}
        <Section id="featured-projects-preview" spacing="lg">
          <Container size="lg">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
              <div>
                <Badge variant="primary" style={{ marginBottom: 'var(--space-xs)' }}>🚀 FEATURED WORK</Badge>
                <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--text-primary)' }}>
                  Highlight <span className="text-gradient-orange">Product Engineering</span>
                </h2>
              </div>

              <Link href="/projects" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="md">
                  View All {PROJECTS_DATA.length} Projects ➔
                </Button>
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-lg)' }}>
              {featuredProjects.map((project) => (
                <Card key={project.id} variant="glass" interactive style={{ border: '1px solid var(--border-orange)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-xs)' }}>
                    <Badge variant="primary">{project.category}</Badge>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{project.status}</span>
                  </div>

                  <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {project.title}
                  </h3>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--primary)', fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-xs)' }}>
                    {project.subtitle}
                  </div>

                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                    {project.oneLiner}
                  </p>

                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="neutral">{tech}</Badge>
                    ))}
                  </div>

                  <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" size="sm" style={{ width: '100%', fontSize: '12px' }}>
                      View Case Study ➔
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* 5. CORE SKILLS PREVIEW */}
        <Section id="skills-preview" spacing="lg">
          <Container size="lg">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
              <div>
                <Badge variant="primary" style={{ marginBottom: 'var(--space-xs)' }}>⚡ TECH STACK &amp; TOOLS</Badge>
                <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--text-primary)' }}>
                  Core <span className="text-gradient-orange">Technical Capabilities</span>
                </h2>
              </div>

              <Link href="/skills" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size="md">
                  Explore All Skills ➔
                </Button>
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-md)' }}>
              {topSkills.map((group, idx) => (
                <Card key={idx} variant="elevated" interactive>
                  <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                    {group.category}
                  </h3>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {group.skills.slice(0, 4).map((skill, sIdx) => (
                      <Badge key={sIdx} variant="neutral">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* 6. EXPLORATION HUB & CTAS */}
        <Section id="exploration-hub" spacing="lg">
          <Container size="lg">
            <Card variant="glass" style={{ border: '1px solid var(--border-orange)', padding: 'var(--space-2xl)', textAlign: 'center' }}>
              <Badge variant="primary" style={{ marginBottom: 'var(--space-xs)' }}>🌐 EXPLORE PORTFOLIO</Badge>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                Discover More About My <span className="text-gradient-orange">Work &amp; Journey</span>
              </h2>
              <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto var(--space-xl)', lineHeight: 1.6 }}>
                Navigate directly to specific areas of interest or reach out for professional engineering inquiries.
              </p>

              <div className="responsive-btn-group" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                <Link href="/experience" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" size="lg" style={{ boxShadow: 'var(--shadow-glow)' }}>
                    💼 Experience &amp; Roles
                  </Button>
                </Link>
                <Link href="/projects" style={{ textDecoration: 'none' }}>
                  <Button variant="secondary" size="lg">
                    🚀 All Projects
                  </Button>
                </Link>
                <Link href="/journey" style={{ textDecoration: 'none' }}>
                  <Button variant="ghost" size="lg">
                    🗺️ Learning Journey
                  </Button>
                </Link>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" size="lg">
                    ✉️ Get In Touch
                  </Button>
                </Link>
              </div>
            </Card>
          </Container>
        </Section>
      </main>

      <Footer onOpenHealthModal={() => setIsHealthModalOpen(true)} />

      <HealthCheckModal
        isOpen={isHealthModalOpen}
        onClose={() => setIsHealthModalOpen(false)}
      />
    </div>
  );
}
