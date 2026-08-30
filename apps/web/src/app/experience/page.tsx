import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { Section } from '../../components/ui/Section';
import { Container } from '../../components/ui/Container';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { PROFESSIONAL_EXPERIENCE, LEADERSHIP_EXPERIENCE, AMBASSADOR_EXPERIENCE } from '../../data/experience';

export const metadata: Metadata = {
  title: 'Professional Experience & Internships — Nirmal Patil',
  description: 'Explore Nirmal Patil\'s professional experience, software engineering internships, technical leadership, and student ambassador initiatives.',
};

export default function ExperiencePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        {/* PAGE HEADER HERO BANNER */}
        <Section id="experience-hero" spacing="md">
          <Container size="lg">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', marginBottom: 'var(--space-xl)' }}>
              <Badge variant="primary">💼 CAREER & LEADERSHIP STORY</Badge>
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                  fontWeight: 'var(--font-weight-extrabold)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                Professional <span className="text-gradient-orange">Experience &amp; Internships</span>
              </h1>
              <p
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--text-secondary)',
                  maxWidth: '750px',
                  lineHeight: 1.6,
                }}
              >
                Verified software development roles, backend engineering internships, student body leadership positions, and ambassador initiatives.
              </p>
            </div>
          </Container>
        </Section>

        {/* SECTION 1: PROFESSIONAL ROLES & INTERNSHIPS */}
        <Section id="professional-roles" spacing="lg">
          <Container size="lg">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <span style={{ fontSize: 'var(--font-size-xl)' }}>⚡</span>
                <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                  Software Engineering Internships
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                {PROFESSIONAL_EXPERIENCE.map((exp) => (
                  <Card
                    key={exp.id}
                    variant="glass"
                    interactive
                    style={{
                      borderLeft: exp.isCurrent ? '4px solid var(--primary)' : '1px solid var(--border-subtle)',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-xs)' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                          <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                            {exp.role}
                          </h3>
                          {exp.isCurrent && <Badge variant="primary">CURRENT ROLE</Badge>}
                        </div>
                        <div style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--primary)' }}>
                          {exp.organization}
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                        <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-medium)', color: 'var(--secondary)' }}>
                          🗓 {exp.period}
                        </span>
                        {exp.location && (
                          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                            📍 {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                      {exp.description}
                    </p>

                    {/* KEY HIGHLIGHTS */}
                    <div style={{ marginBottom: 'var(--space-md)' }}>
                      <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-muted)', marginBottom: 'var(--space-2xs)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Key Responsibilities &amp; Contributions:
                      </div>
                      <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: 'var(--space-2xs)' }}>
                        {exp.highlights.map((h, i) => (
                          <li key={i} style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* SKILLS GAINED */}
                    <div style={{ display: 'flex', gap: 'var(--space-2xs)', flexWrap: 'wrap', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)' }}>
                      {exp.skillsGained.map((skill, i) => (
                        <Badge key={i} variant="neutral">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* SECTION 2: TECHNICAL LEADERSHIP POSITIONS */}
        <Section id="leadership-roles" spacing="lg">
          <Container size="lg">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <span style={{ fontSize: 'var(--font-size-xl)' }}>🎓</span>
                <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                  Technical Leadership &amp; Institutional Positions
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-md)' }}>
                {LEADERSHIP_EXPERIENCE.map((lead) => (
                  <Card key={lead.id} variant="glass" interactive>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-2xs)', marginBottom: 'var(--space-xs)' }}>
                      <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {lead.period}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {lead.role}
                    </h3>
                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--secondary)', marginBottom: 'var(--space-xs)' }}>
                      {lead.organization}
                    </div>

                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-sm)' }}>
                      {lead.description}
                    </p>

                    <div style={{ display: 'flex', gap: 'var(--space-2xs)', flexWrap: 'wrap' }}>
                      {lead.skillsGained.map((skill, i) => (
                        <Badge key={i} variant="neutral">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* SECTION 3: STUDENT AMBASSADOR INITIATIVES */}
        <Section id="ambassador-roles" spacing="lg">
          <Container size="lg">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <span style={{ fontSize: 'var(--font-size-xl)' }}>🌐</span>
                <h2 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                  Ambassador &amp; Developer Community Programs
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
                {AMBASSADOR_EXPERIENCE.map((amb) => (
                  <Card key={amb.id} variant="elevated" interactive>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-2xs)' }}>
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>{amb.period}</span>
                    </div>
                    <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                      {amb.role}
                    </h3>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--primary)', marginBottom: 'var(--space-xs)' }}>
                      {amb.organization}
                    </div>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 'var(--space-xs)' }}>
                      {amb.description}
                    </p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                      {amb.skillsGained.map((skill, i) => (
                        <Badge key={i} variant="neutral">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* BOTTOM EXPLORATION CTA */}
        <Section id="experience-cta" spacing="md">
          <Container size="lg">
            <Card variant="glass" style={{ border: '1px solid var(--border-orange)', textAlign: 'center', padding: 'var(--space-xl)' }}>
              <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                Want to see what I&apos;ve built with these skills?
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto var(--space-md)', lineHeight: 1.6 }}>
                Explore my full showcase of featured product platforms, backend systems, and agentic AI projects.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                <Link href="/projects" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" size="lg" style={{ boxShadow: 'var(--shadow-glow)' }}>
                    Explore Projects Showcase ➔
                  </Button>
                </Link>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button variant="secondary" size="lg">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </Card>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
