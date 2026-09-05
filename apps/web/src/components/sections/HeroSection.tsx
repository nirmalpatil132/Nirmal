'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { PROFILE_DATA } from '../../data/profile';

// Capability categories verified from skills.ts
// 1. Web Development ('Development & Tools' / 'Programming Languages')
// 2. Backend Development ('Backend & Databases')
// 3. UI/UX Design ('Design & Digital Tools')
// 4. AI & Automation ('AI & Agentic Systems')
// 5. Problem Solving ('Professional & Leadership')
interface CapabilityCardItem {
  label: string;
  icon: string;
}

const CAPABILITY_CARDS: CapabilityCardItem[] = [
  {
    label: 'Web Development',
    icon: '</>',
  },
  {
    label: 'Backend Development',
    icon: '🗄️',
  },
  {
    label: 'UI/UX Design',
    icon: '✏️',
  },
  {
    label: 'AI & Automation',
    icon: '🤖',
  },
  {
    label: 'Problem Solving',
    icon: '💡',
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 4.25rem)',
        background: '#07090e',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'clamp(1rem, 2.5vw, 1.75rem)',
        paddingBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
      }}
    >
      {/* 1. CINEMATIC AMBIENT LIGHTING GLOWS */}
      {/* Primary warm orange radial glow centered behind portrait */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '25%',
          left: '52%',
          transform: 'translate(-50%, -35%)',
          width: 'clamp(380px, 62vw, 820px)',
          height: 'clamp(380px, 62vw, 820px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.32) 0%, rgba(255, 107, 0, 0.15) 42%, rgba(7, 9, 14, 0) 72%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Subtle secondary ambient fill for depth */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          right: '8%',
          width: 'clamp(250px, 35vw, 450px)',
          height: 'clamp(250px, 35vw, 450px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 133, 51, 0.18) 0%, rgba(7, 9, 14, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* 2. OVERSIZED BACKGROUND TYPOGRAPHY: NIRMAL PATIL */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 'clamp(2rem, 7vw, 4.5rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1440px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 clamp(1rem, 3.5vw, 3rem)',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            fontSize: 'clamp(3.5rem, 14vw, 12rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: 'clamp(-0.04em, -0.01em, -0.02em)',
            color: 'rgba(255, 255, 255, 0.085)',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-family)',
          }}
        >
          NIRMAL
        </span>
        <span
          style={{
            fontSize: 'clamp(3.5rem, 14vw, 12rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: 'clamp(-0.04em, -0.01em, -0.02em)',
            color: 'rgba(255, 255, 255, 0.085)',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-family)',
          }}
        >
          PATIL
        </span>
      </div>

      {/* 3. MAIN HERO VIEWPORT CONTENT GRID */}
      <Container size="lg" style={{ position: 'relative', zIndex: 3, width: '100%', flex: 1, display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
            gap: 'clamp(1rem, 3vw, 2.5rem)',
            alignItems: 'center',
            width: '100%',
            paddingTop: 'clamp(0.5rem, 1.5vw, 1.25rem)',
            paddingBottom: 'clamp(0.5rem, 1.5vw, 1.25rem)',
          }}
          className="hero-grid-responsive"
        >
          {/* LEFT CONTENT COLUMN */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(0.75rem, 1.8vw, 1.25rem)',
              zIndex: 4,
              maxWidth: '520px',
            }}
          >
            {/* ROLE BADGE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: 'clamp(11px, 1.2vw, 13px)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                }}
              >
                SOFTWARE DEVELOPER
              </span>
            </div>

            {/* MAIN PUNCHY HEADLINE */}
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4.6vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              Building digital products that create{' '}
              <span className="text-gradient-orange" style={{ fontWeight: 800 }}>
                impact.
              </span>
            </h1>

            {/* SUPPORTING DESCRIPTION DERIVED FROM VERIFIED DATA */}
            <p
              style={{
                fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '480px',
              }}
            >
              Software Developer Intern passionate about building scalable web applications, backend systems, and practical digital products.
            </p>

            {/* CTA BUTTONS ROW */}
            <div
              className="responsive-btn-group"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(0.6rem, 1.2vw, 1rem)',
                marginTop: 'clamp(0.25rem, 0.75vw, 0.75rem)',
                flexWrap: 'wrap',
              }}
            >
              {/* PRIMARY CTA */}
              <Link href="/projects" style={{ textDecoration: 'none' }}>
                <Button
                  variant="primary"
                  size="lg"
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    padding: '12px 28px',
                    fontWeight: 700,
                    fontSize: '15px',
                    boxShadow: '0 4px 20px rgba(255, 107, 0, 0.45)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  Explore My Work <span style={{ fontSize: '1.1em' }}>➔</span>
                </Button>
              </Link>

              {/* SECONDARY RESUME CTA */}
              <a
                href={PROFILE_DATA.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    padding: '12px 24px',
                    fontWeight: 600,
                    fontSize: '14px',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    background: 'rgba(21, 27, 40, 0.75)',
                    backdropFilter: 'blur(12px)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  View Resume <span style={{ fontSize: '1.1em' }}>↗</span>
                </Button>
              </a>

              {/* OPTIONAL SUPPORTING CTA */}
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="ghost"
                  size="lg"
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    padding: '12px 20px',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Let&apos;s Connect
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT/CENTER COLUMN: LARGE CENTRAL FOREGROUND PORTRAIT */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              zIndex: 3,
              width: '100%',
              height: '100%',
              minHeight: 'clamp(340px, 48vw, 600px)',
            }}
            className="hero-portrait-container"
          >
            {/* Soft subtle backlight behind portrait */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '15%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '85%',
                height: '85%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 107, 0, 0.25) 0%, rgba(7, 9, 14, 0) 70%)',
                filter: 'blur(45px)',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />

            {/* Foreground Transparent Portrait Image - Centralized & Prominent */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
                height: 'clamp(360px, 52vw, 640px)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/images/nirmal-hero-portrait.png"
                alt="Nirmal Patil — Software Developer"
                fill
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 55vw, 540px"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.75))',
                }}
                priority
              />

              {/* Seamless bottom fade mask to blend naturally into dark section base */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '45px',
                  background: 'linear-gradient(to bottom, rgba(7, 9, 14, 0) 0%, #07090e 100%)',
                  pointerEvents: 'none',
                  zIndex: 3,
                }}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* 4. BOTTOM CAPABILITY CARDS STRIP */}
      <Container size="lg" style={{ position: 'relative', zIndex: 4, width: '100%', marginTop: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(0.6rem, 1.2vw, 1rem)',
            width: '100%',
          }}
          className="hero-capability-strip"
        >
          {CAPABILITY_CARDS.map((card, idx) => (
            <Link
              key={idx}
              href="/skills"
              style={{ textDecoration: 'none' }}
              title={`View ${card.label} in Skills`}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 18px',
                  background: 'rgba(13, 17, 26, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-xl)',
                  transition: 'all var(--transition-normal)',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                }}
                className="capability-pill-hover"
              >
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '24px',
                  }}
                >
                  {card.icon}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {card.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
