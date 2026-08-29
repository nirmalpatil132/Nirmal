'use client';

import React from 'react';
import Image from 'next/image';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { PROFILE_DATA } from '../../data/profile';

export function HeroSection() {
  return (
    <Section id="hero" spacing="lg" style={{ paddingTop: 'calc(var(--space-2xl) + 2rem)' }}>
      <Container size="lg">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-2xl)',
            alignItems: 'center',
          }}
        >
          {/* TEXT & HERO CONTENT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
              <Badge variant="success">🟢 Open to Opportunities</Badge>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                SDE Intern @ Evnorix Infotech
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 'var(--font-weight-extrabold)',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Hi, I&apos;m <span style={{ color: 'var(--primary)' }}>{PROFILE_DATA.displayName}</span>
            </h1>

            <p
              style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--secondary)',
                lineHeight: 1.4,
              }}
            >
              {PROFILE_DATA.headline}
            </p>

            <p
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}
            >
              {PROFILE_DATA.shortBio}
            </p>

            <div
              style={{
                padding: 'var(--space-sm) var(--space-md)',
                background: 'var(--bg-glass)',
                borderLeft: '3px solid var(--primary)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
              }}
            >
              &ldquo;{PROFILE_DATA.philosophy}&rdquo;
            </div>

            {/* CTAS */}
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-xs)' }}>
              <a href="#projects" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="lg">
                  Explore Projects ➔
                </Button>
              </a>

              <a href="#contact" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="lg">
                  Let&apos;s Connect
                </Button>
              </a>

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

          {/* PROFILE PHOTO & VISUAL CARD */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '360px',
                aspectRatio: '4 / 5',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-xs)',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 100%)',
                border: '1px solid var(--border-default)',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  background: 'var(--bg-tertiary)',
                }}
              >
                <Image
                  src={PROFILE_DATA.profileImagePath}
                  alt="Nirmal Patil — Software Developer Intern"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority
                />
              </div>

              {/* OVERLAY BADGE */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 'var(--space-md)',
                  left: 'var(--space-md)',
                  right: 'var(--space-md)',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-xs) var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-xs)',
                }}
              >
                <span style={{ fontSize: 'var(--font-size-md)' }}>💻</span>
                <div>
                  <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                    Nirmal Rajendra Patil
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--secondary)' }}>
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
