'use client';

import React, { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { PageHeader } from '../../components/ui/PageHeader';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Tag } from '../../components/ui/Tag';
import { Card } from '../../components/ui/Card';
import { Divider } from '../../components/ui/Divider';
import { Input } from '../../components/ui/Input';
import { Textarea } from '../../components/ui/Textarea';
import { FormField } from '../../components/ui/FormField';
import { StatusIndicator } from '../../components/ui/StatusIndicator';
import { LoadingState } from '../../components/ui/LoadingState';
import { CertificateFlipCard } from '../../components/ui/CertificateFlipCard';

export default function DesignSystemPage() {
  const [activeTag, setActiveTag] = useState('All');
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(false);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Section spacing="lg">
        <Container size="lg">
          <PageHeader
            badge="Phase 2 Foundation"
            title="Nirmal Portfolio V2 — Design System Showcase"
            description="Centralized visual token foundation, typography scale, UI primitives, card standards, form system, and motion rules for Nirmal Portfolio V2."
          >
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <a href="/" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="sm">← Return to Architecture Health Check</Button>
              </a>
              <Button variant="ghost" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Back to Top
              </Button>
            </div>
          </PageHeader>

          {/* COLOR SYSTEM */}
          <Section spacing="sm">
            <SectionHeader
              badge="Colors & Tokens"
              title="1. Color System & Glassmorphism Tokens"
              subtitle="Dark-first aesthetic designed to represent software engineering and UI/UX product design precision."
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-md)' }}>
              {[
                { label: 'Background Primary', color: 'var(--bg-primary)', text: '#ffffff' },
                { label: 'Background Secondary', color: 'var(--bg-secondary)', text: '#ffffff' },
                { label: 'Background Elevated', color: 'var(--bg-elevated)', text: '#ffffff' },
                { label: 'Primary (Indigo)', color: 'var(--primary)', text: '#ffffff' },
                { label: 'Secondary (Cyan)', color: 'var(--secondary)', text: '#000000' },
                { label: 'Accent (Purple)', color: 'var(--accent)', text: '#ffffff' },
                { label: 'Success (Emerald)', color: 'var(--success)', text: '#000000' },
                { label: 'Warning (Amber)', color: 'var(--warning)', text: '#000000' },
                { label: 'Error (Red)', color: 'var(--error)', text: '#ffffff' },
              ].map((c) => (
                <div
                  key={c.label}
                  style={{
                    background: c.color,
                    padding: 'var(--space-md)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-default)',
                    color: c.text,
                  }}
                >
                  <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)' }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: '10px', opacity: 0.8, marginTop: 'var(--space-2xs)' }}>
                    {c.color}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          {/* TYPOGRAPHY SCALE */}
          <Section spacing="sm">
            <SectionHeader
              badge="Typography"
              title="2. Typography System & Hierarchy"
              subtitle="Fluid hierarchy with explicit font weights and line heights for desktop and mobile readability."
            />
            <Card variant="elevated" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Display Title (3rem)</span>
                <h1 style={{ fontSize: 'var(--font-size-display)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                  Architect & Engineer
                </h1>
              </div>
              <div>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Heading 1 (2.25rem)</span>
                <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                  Full-Stack Software Development
                </h1>
              </div>
              <div>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Heading 2 (1.875rem)</span>
                <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
                  Featured Projects & Contributions
                </h2>
              </div>
              <div>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Body Text (1rem)</span>
                <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)' }}>
                  Nirmal Portfolio V2 couples Next.js presentation excellence with Express API security, Prisma ORM schema validation, and PostgreSQL data persistence.
                </p>
              </div>
            </Card>
          </Section>

          <Divider />

          {/* BUTTON SYSTEM */}
          <Section spacing="sm">
            <SectionHeader
              badge="Components"
              title="3. Button System"
              subtitle="Primary, secondary, ghost, text, and danger button variants with strict state management."
            />
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="text">Text Link Button</Button>
              <Button variant="danger">Danger Action</Button>
              <Button variant="primary" disabled>Disabled State</Button>
            </div>
          </Section>

          <Divider />

          {/* BADGES & TAGS */}
          <Section spacing="sm">
            <SectionHeader
              badge="Filters & Badges"
              title="4. Badges & Interactive Category Tags"
              subtitle="Metadata indicators and category filter chips for project/skill taxonomy."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                <Badge variant="primary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="success">PostgreSQL Connected</Badge>
                <Badge variant="warning">Phase 2 Active</Badge>
                <Badge variant="error">Validation Error</Badge>
                <Badge variant="neutral">Prisma ORM</Badge>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                {['All', 'Full-Stack', 'UI/UX Design', 'Agentic AI', 'Backend API'].map((t) => (
                  <Tag
                    key={t}
                    label={t}
                    active={activeTag === t}
                    onClick={() => setActiveTag(t)}
                  />
                ))}
              </div>
            </div>
          </Section>

          <Divider />

          {/* CARD SYSTEM & GLASSMORPHISM */}
          <Section spacing="sm">
            <SectionHeader
              badge="Surfaces"
              title="5. Card Foundation & Glassmorphism"
              subtitle="Base card container primitives for Future Projects, Experience, and Education."
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
              <Card variant="default">
                <Badge variant="primary">Default Card</Badge>
                <h4 style={{ marginTop: 'var(--space-xs)', fontSize: 'var(--font-size-lg)' }}>Standard Surface</h4>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-xs)' }}>
                  Used for basic list entries and secondary content blocks.
                </p>
              </Card>

              <Card variant="elevated" interactive>
                <Badge variant="secondary">Elevated Card</Badge>
                <h4 style={{ marginTop: 'var(--space-xs)', fontSize: 'var(--font-size-lg)' }}>Elevated Surface (Interactive)</h4>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-xs)' }}>
                  Includes elevation shadow and hover feedback for clickable cards.
                </p>
              </Card>

              <Card variant="glass">
                <Badge variant="success">Glassmorphism Card</Badge>
                <h4 style={{ marginTop: 'var(--space-xs)', fontSize: 'var(--font-size-lg)' }}>Glass Surface</h4>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-xs)' }}>
                  Uses backdrop blur filters and subtle borders for modern overlay panels.
                </p>
              </Card>
            </div>
          </Section>

          <Divider />

          {/* FORM SYSTEM */}
          <Section spacing="sm">
            <SectionHeader
              badge="Forms"
              title="6. Form Primitives & Validation States"
              subtitle="Reusable form control primitives with full error label and helper text integration."
            />
            <Card variant="elevated" style={{ maxWidth: '600px' }}>
              <FormField label="Full Name" required helperText="Enter your full name for contact validation.">
                <Input
                  placeholder="e.g. Nirmal Patil"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </FormField>

              <FormField
                label="Email Address"
                required
                error={hasError ? 'Invalid email format (e.g. name@domain.com)' : undefined}
              >
                <Input
                  placeholder="e.g. nirmalpatil615@gmail.com"
                  error={hasError}
                />
              </FormField>

              <FormField label="Project Message" required helperText="Minimum 10 characters required.">
                <Textarea placeholder="Write your message here..." rows={3} />
              </FormField>

              <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                <Button variant="primary" onClick={() => setHasError(!hasError)}>
                  Toggle Validation State ({hasError ? 'Error ON' : 'Normal'})
                </Button>
              </div>
            </Card>
          </Section>

          <Divider />

          {/* STATUS INDICATORS & LOADING */}
          <Section spacing="sm">
            <SectionHeader
              badge="Status"
              title="7. System Status Indicators & Loading States"
              subtitle="Accessible live status dots and loading animation primitives."
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-md)' }}>
              <StatusIndicator status="online" label="PostgreSQL DB" sublabel="Status: Connected" />
              <StatusIndicator status="online" label="Express API" sublabel="Status: Healthy (200 OK)" />
              <StatusIndicator status="warning" label="Rate Limiter" sublabel="Window: 15min / 100 req" />
              <StatusIndicator status="offline" label="Database Fallback" sublabel="Disconnected (Safe)" />
            </div>
            <div style={{ marginTop: 'var(--space-md)' }}>
              <LoadingState message="Simulating asynchronous API data fetch..." />
            </div>
          </Section>

          <Divider />

          {/* CERTIFICATE 3D FLIP CARD INTERACTION PREVIEW */}
          <Section spacing="sm">
            <SectionHeader
              badge="Interactive Showcase"
              title="8. Certificate 3D Flip Card Mechanism"
              subtitle="Demonstrates the smooth 3D flip card interaction for future Certificate showcases."
            />
            <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
              <CertificateFlipCard
                title="Full-Stack Web Development Certification"
                issuer="Udemy / Meta"
                issueDate="Aug 2026"
                credentialId="CERT-2026-NVR"
                description="Comprehensive mastery of React, Next.js App Router, Express, TypeScript, REST API architecture, and PostgreSQL."
                skills={['Next.js', 'React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma']}
                verificationUrl="https://github.com/nirmalpatil132/Nirmal"
              />
              <CertificateFlipCard
                title="Agentic AI Engineering Specialist"
                issuer="Google DeepMind / AGY"
                issueDate="Jul 2026"
                credentialId="AGY-AI-8892"
                description="Advanced multi-agent systems, prompt engineering, tool integration, and autonomous workflow design."
                skills={['Agentic AI', 'Python', 'LLMs', 'Multi-Agent', 'System Design']}
                verificationUrl="https://github.com/nirmalpatil132/Nirmal"
              />
            </div>
          </Section>
        </Container>
      </Section>
    </main>
  );
}
