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
import { PageHeader } from '../../components/ui/PageHeader';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PROFESSIONAL_EXPERIENCE, LEADERSHIP_EXPERIENCE, AMBASSADOR_EXPERIENCE } from '../../data/experience';

export const metadata: Metadata = {
  title: 'Professional Experience & Internships — Nirmal Patil',
  description: 'Explore Nirmal Patil\'s professional experience, software engineering internships, technical leadership, and student ambassador initiatives.',
};

export default function ExperiencePage() {
  const currentRole = PROFESSIONAL_EXPERIENCE.find((exp) => exp.isCurrent);
  const previousProfessionalRoles = PROFESSIONAL_EXPERIENCE.filter((exp) => !exp.isCurrent);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-md))' }}>
        {/* PAGE HEADER HERO BANNER */}
        <Section id="experience-hero" spacing="md">
          <Container size="lg">
            <PageHeader
              badge="💼 CAREER & LEADERSHIP STORY"
              title="Professional"
              highlightText="Experience & Internships"
              description="Verified software development roles, backend engineering internships, technical leadership positions, and developer community ambassador initiatives."
            />
          </Container>
        </Section>

        {/* SECTION 1: CURRENT PROFESSIONAL FOCUS HERO */}
        {currentRole && (
          <Section id="current-focus" spacing="md">
            <Container size="lg">
              <Card
                variant="glass"
                style={{
                  borderLeft: '4px solid var(--primary)',
                  borderRight: '1px solid var(--border-orange)',
                  borderTop: '1px solid var(--border-orange)',
                  borderBottom: '1px solid var(--border-orange)',
                  padding: 'var(--space-xl)',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', marginBottom: 'var(--space-2xs)', flexWrap: 'wrap' }}>
                      <Badge variant="primary">⚡ CURRENT PROFESSIONAL FOCUS</Badge>
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)' }}>
                        🗓 {currentRole.period}
                      </span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--text-primary)', lineHeight: 1.15 }}>
                      {currentRole.role}
                    </h2>
                    <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--primary)', marginTop: '4px' }}>
                      {currentRole.organization}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>
                      📍 {currentRole.location}
                    </span>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--success)', fontWeight: 'var(--font-weight-medium)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>🟢</span> Open to Engineering Roles
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-md)', maxWidth: '900px' }}>
                  {currentRole.description}
                </p>

                {/* HIGHLIGHTS */}
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-muted)', marginBottom: 'var(--space-xs)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Core Technical Responsibilities &amp; Workflows:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                    {currentRole.highlights.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>▹</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SKILLS & CONNECTED LINKS */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2xs)' }}>
                    {currentRole.skillsGained.map((skill, idx) => (
                      <Badge key={idx} variant="primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Link href="/projects" style={{ textDecoration: 'none' }}>
                    <Button variant="ghost" size="sm" style={{ fontSize: '12px' }}>
                      See Related Projects ➔
                    </Button>
                  </Link>
                </div>
              </Card>
            </Container>
          </Section>
        )}

        {/* SECTION 2: SOFTWARE ENGINEERING INTERNSHIP TIMELINE */}
        <Section id="professional-roles" spacing="lg">
          <Container size="lg">
            <SectionHeader
              badge="Engineering Work History"
              title="Software Engineering Internships"
              subtitle="Hands-on backend engineering, API service architecture, and fintech application development roles."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              {PROFESSIONAL_EXPERIENCE.map((exp) => (
                <Card
                  key={exp.id}
                  variant="glass"
                  interactive
                  style={{
                    borderLeft: exp.isCurrent ? '4px solid var(--primary)' : '4px solid var(--secondary)',
                    borderTop: '1px solid var(--border-subtle)',
                    borderRight: '1px solid var(--border-subtle)',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-xs)' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                          {exp.role}
                        </h3>
                        {exp.isCurrent ? (
                          <Badge variant="primary">Active Internship</Badge>
                        ) : (
                          <Badge variant="secondary">Completed Internship</Badge>
                        )}
                      </div>
                      <div style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--primary)', marginTop: '2px' }}>
                        {exp.organization}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                      <span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
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
                    <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-muted)', marginBottom: 'var(--space-xs)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Key Responsibilities &amp; Engineering Contributions:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                      {exp.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-xs)', fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>▹</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SKILLS GAINED */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-xs)', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', gap: 'var(--space-2xs)', flexWrap: 'wrap' }}>
                      {exp.skillsGained.map((skill, i) => (
                        <Badge key={i} variant="neutral">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Link href="/skills" style={{ textDecoration: 'none' }}>
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', fontWeight: 'var(--font-weight-medium)' }}>
                        Inspect Skills ➔
                      </span>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* SECTION 3: TECHNICAL LEADERSHIP POSITIONS */}
        <Section id="leadership-roles" spacing="lg">
          <Container size="lg">
            <SectionHeader
              badge="Institutional & Student Body Leadership"
              title="Technical Leadership Positions"
              subtitle="Guiding engineering student teams, organizing coding workshops, and managing student community initiatives."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
              {LEADERSHIP_EXPERIENCE.map((lead) => (
                <Card key={lead.id} variant="glass" interactive style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xs)' }}>
                      <Badge variant={lead.isCurrent ? 'primary' : 'neutral'}>
                        {lead.isCurrent ? 'Active Position' : 'Leadership'}
                      </Badge>
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                        {lead.period}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '2px' }}>
                      {lead.role}
                    </h3>
                    <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--primary)', marginBottom: 'var(--space-xs)' }}>
                      {lead.organization}
                    </div>

                    <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                      {lead.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: 'var(--space-md)' }}>
                      {lead.highlights.map((h, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '4px', fontSize: '11px', color: 'var(--text-muted)' }}>
                          <span style={{ color: 'var(--primary)' }}>▹</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)' }}>
                    {lead.skillsGained.map((skill, i) => (
                      <Badge key={i} variant="neutral">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* SECTION 4: STUDENT AMBASSADOR INITIATIVES */}
        <Section id="ambassador-roles" spacing="lg">
          <Container size="lg">
            <SectionHeader
              badge="Community Outreach & Advocacy"
              title="Ambassador & Developer Programs"
              subtitle="Promoting AI tools, Google Gemini workflows, and student career readiness programs."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
              {AMBASSADOR_EXPERIENCE.map((amb) => (
                <Card key={amb.id} variant="elevated" interactive>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2xs)' }}>
                    <Badge variant={amb.isCurrent ? 'primary' : 'neutral'}>
                      {amb.isCurrent ? 'Active Program' : 'Ambassador'}
                    </Badge>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>{amb.period}</span>
                  </div>

                  <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginTop: '4px' }}>
                    {amb.role}
                  </h3>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', marginBottom: 'var(--space-xs)', fontWeight: 'var(--font-weight-medium)' }}>
                    {amb.organization}
                  </div>

                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 'var(--space-sm)' }}>
                    {amb.description}
                  </p>

                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', paddingTop: 'var(--space-xs)', borderTop: '1px solid var(--border-subtle)' }}>
                    {amb.skillsGained.map((skill, i) => (
                      <Badge key={i} variant="neutral">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* BOTTOM EXPLORATION CTA */}
        <Section id="experience-cta" spacing="md">
          <Container size="lg">
            <Card variant="glass" style={{ border: '1px solid var(--border-orange)', textAlign: 'center', padding: 'var(--space-xl)' }}>
              <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
                Want to explore what I&apos;ve built with these skills?
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto var(--space-md)', lineHeight: 1.6 }}>
                Inspect my full portfolio of featured products, software projects, and applied technical skills.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                <Link href="/projects" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" size="lg" style={{ boxShadow: 'var(--shadow-glow)' }}>
                    🚀 Explore Projects Showcase
                  </Button>
                </Link>
                <Link href="/skills" style={{ textDecoration: 'none' }}>
                  <Button variant="secondary" size="lg">
                    ⚡ Inspect Applied Stack
                  </Button>
                </Link>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button variant="ghost" size="lg">
                    ✉️ Get In Touch
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
