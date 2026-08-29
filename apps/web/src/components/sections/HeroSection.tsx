'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export function HeroSection() {
  return (
    <Section id="hero" spacing="lg" style={{ minHeight: 'calc(100vh - var(--header-height))', display: 'flex', alignItems: 'center' }}>
      <Container size="lg">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
            alignItems: 'center',
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            <div style={{ display: 'flex', gap: 'var(--space-xs)', marginBottom: 'var(--space-md)', flexWrap: 'wrap' }}>
              <Badge variant="primary">Phase 3 Application Shell</Badge>
              <Badge variant="secondary">Full-Stack & UI/UX</Badge>
            </div>

            <h1
              style={{
                fontSize: 'var(--font-size-display)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: 'var(--space-sm)',
              }}
            >
              Hi, I am <br />
              <span style={{ color: 'var(--secondary)' }}>[Portfolio Owner Name]</span>
            </h1>

            <h2
              style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-md)',
              }}
            >
              [Professional Headline / Software Developer & Product Designer]
            </h2>

            <p
              style={{
                fontSize: 'var(--font-size-lg)',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: 'var(--space-xl)',
                maxWidth: '600px',
              }}
            >
              [Short biography placeholder: Passionate software developer and UI/UX designer building modern web applications, high-performance API services, and intuitive user experiences.]
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <a href="#projects" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="lg">
                  Explore Featured Projects ➔
                </Button>
              </a>
              <a href="#contact" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="lg">
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL / AVATAR PLACEHOLDER CARD */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              variant="glass"
              style={{
                width: '100%',
                maxWidth: '380px',
                padding: 'var(--space-2xl)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-glow)',
                border: '1px solid var(--border-default)',
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'var(--bg-elevated)',
                  border: '3px solid var(--primary)',
                  margin: '0 auto var(--space-md) auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-2xl)',
                  color: 'var(--secondary)',
                }}
              >
                👤
              </div>

              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-2xs)' }}>
                [Profile Visual Placeholder]
              </h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginBottom: 'var(--space-md)' }}>
                Authoritative personal photo & biography will be populated upon request in a later phase.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-xs)' }}>
                <Badge variant="success">Available for Opportunities</Badge>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
