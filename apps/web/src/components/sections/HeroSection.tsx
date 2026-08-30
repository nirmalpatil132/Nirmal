'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PROFILE_DATA } from '../../data/profile';

export function HeroSection() {
  return (
    <Section id="hero" spacing="lg" style={{ paddingTop: 'calc(var(--space-2xl) + 2.5rem)', paddingBottom: 'var(--space-3xl)' }}>
      <Container size="lg">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-3xl)',
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN: HEADLINE, NARRATIVE & CTAS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {/* SUBTITLE BADGE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
              <Badge variant="primary">⚡ SDE INTERN @ EVNORIX INFOTECH</Badge>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--success)', fontWeight: 'var(--font-weight-medium)' }}>
                🟢 Open to Opportunities
              </span>
            </div>

            {/* OVERSIZED HEADLINE */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 3.8rem)',
                fontWeight: 'var(--font-weight-extrabold)',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
              }}
            >
              Hi, I&apos;m <span className="text-gradient-orange">{PROFILE_DATA.displayName}</span>
            </h1>

            {/* PRIMARY ROLE SUBTITLE */}
            <p
              style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--secondary)',
                lineHeight: 1.4,
              }}
            >
              {PROFILE_DATA.headline}
            </p>

            {/* SHORT NARRATIVE BIO */}
            <p
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}
            >
              {PROFILE_DATA.shortBio}
            </p>

            {/* PHILOSOPHY QUOTE BOX */}
            <div
              style={{
                padding: 'var(--space-sm) var(--space-md)',
                background: 'var(--bg-glass)',
                borderLeft: '3px solid var(--primary)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              &ldquo;{PROFILE_DATA.philosophy}&rdquo;
            </div>

            {/* CTA BUTTON SYSTEM */}
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-xs)' }}>
              <Link href="/projects" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="lg" style={{ boxShadow: 'var(--shadow-glow-lg)' }}>
                  Explore My Work ➔
                </Button>
              </Link>

              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="lg">
                  Let&apos;s Connect
                </Button>
              </Link>

              <a href={PROFILE_DATA.resumePdfPath} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size="lg">
                  📄 View Resume ↗
                </Button>
              </a>
            </div>

            {/* IDENTITY TAGS */}
            <div style={{ display: 'flex', gap: 'var(--space-2xs)', flexWrap: 'wrap', marginTop: 'var(--space-2xs)' }}>
              {PROFILE_DATA.identityTags.map((tag, idx) => (
                <Badge key={idx} variant="neutral">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: CINEMATIC FRAMED PROFILE IMAGE */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '4 / 5',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-xs)',
                background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.45) 0%, rgba(139, 92, 246, 0.15) 100%)',
                border: '1px solid var(--border-orange)',
                boxShadow: 'var(--shadow-glow-lg)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  background: 'var(--bg-elevated)',
                }}
              >
                <Image
                  src={PROFILE_DATA.profileImagePath}
                  alt="Nirmal Patil — Software Developer Intern"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority
                />
              </div>

              {/* GLASSMORPHISM OVERLAY BADGE */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 'var(--space-md)',
                  left: 'var(--space-md)',
                  right: 'var(--space-md)',
                  background: 'rgba(7, 9, 14, 0.88)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--border-orange)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-xs) var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-xs)',
                  boxShadow: 'var(--shadow-glow)',
                }}
              >
                <span style={{ fontSize: 'var(--font-size-md)' }}>💻</span>
                <div>
                  <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                    Nirmal Rajendra Patil
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 'var(--font-weight-medium)' }}>
                    Software Developer Intern @ Evnorix
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
