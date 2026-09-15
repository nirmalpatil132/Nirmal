'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { PROFILE_DATA } from '../../data/profile';
import { PROJECTS_DATA } from '../../data/projects';
import { PROFESSIONAL_EXPERIENCE } from '../../data/experience';

interface ValueItem {
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  {
    title: 'Curiosity',
    description: 'I love exploring new technologies and ideas.',
  },
  {
    title: 'Consistency',
    description: 'I believe in showing up every day and improving.',
  },
  {
    title: 'Quality',
    description: 'I write clean, maintainable and efficient code.',
  },
  {
    title: 'Impact',
    description: 'I build solutions that create real value.',
  },
  {
    title: 'Continuous Learning',
    description: 'Learning never stops, and neither do I.',
  },
];

interface CapabilityItem {
  icon: string;
  title: string;
  description: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    icon: '</>',
    title: 'Web Development',
    description: 'Building modern, responsive and user-friendly web apps.',
  },
  {
    icon: '🗄️',
    title: 'Backend Systems',
    description: 'Designing scalable APIs and robust backend architectures.',
  },
  {
    icon: '🧠',
    title: 'AI & Automation',
    description: 'Exploring AI tools, agentic systems and automation to solve complex problems.',
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    description: 'Extracting insights from data and building smart dashboards.',
  },
  {
    icon: '📱',
    title: 'Mobile & UI/UX',
    description: 'Designing clean interfaces and exploring mobile app development.',
  },
];

export function AboutSection() {
  const internshipCount = PROFESSIONAL_EXPERIENCE.length;
  const projectCount = PROJECTS_DATA.length;

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', paddingBottom: 'var(--space-3xl)' }}>
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '8%',
          right: '5%',
          width: 'clamp(350px, 45vw, 650px)',
          height: 'clamp(350px, 45vw, 650px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.22) 0%, rgba(255, 107, 0, 0.06) 50%, transparent 70%)',
          filter: 'blur(55px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '55%',
          left: '-5%',
          width: 'clamp(300px, 35vw, 500px)',
          height: 'clamp(300px, 35vw, 500px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.12) 0%, transparent 65%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        {/* TOP TWO-COLUMN HERO SECTION */}
        <div className="about-hero-grid" style={{ marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          {/* LEFT COLUMN: TITLE, BIO, STAT CARDS, QUOTE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
            {/* HEADING WITH ORANGE ACCENT */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.05,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                }}
              >
                ABOUT <span style={{ color: 'var(--primary)' }}>ME</span>
              </h1>
              {/* Decorative underline bar */}
              <div
                style={{
                  width: '64px',
                  height: '4px',
                  borderRadius: '2px',
                  background: 'linear-gradient(90deg, #ff6b00 0%, #ff8533 100%)',
                  boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)',
                }}
              />
            </div>

            {/* BIO PARAGRAPHS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                I&apos;m Nirmal Patil, a{' '}
                <strong style={{ color: 'var(--primary)', fontWeight: 600 }}>Software Developer Intern</strong>{' '}
                passionate about building scalable web applications, backend systems, and AI-powered solutions.
              </p>

              <p
                style={{
                  fontSize: 'clamp(0.9rem, 1.15vw, 1rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                I enjoy turning ideas into real products and solving meaningful problems through clean code. My journey is
                driven by curiosity, consistency, and a love for learning.
              </p>
            </div>

            {/* 4 STAT / HIGHLIGHT CARDS ROW */}
            <div className="about-stats-grid">
              {/* Stat 1: Internships */}
              <div
                className="card-hover-orange"
                style={{
                  background: 'rgba(13, 17, 26, 0.8)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(0.875rem, 1.5vw, 1.15rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.35rem',
                }}
              >
                <div style={{ color: 'var(--primary)', fontSize: '1.35rem', lineHeight: 1 }}>💼</div>
                <div style={{ fontSize: 'clamp(1.35rem, 2vw, 1.65rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                  {internshipCount}+
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  Internships
                </div>
              </div>

              {/* Stat 2: Projects */}
              <div
                className="card-hover-orange"
                style={{
                  background: 'rgba(13, 17, 26, 0.8)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(0.875rem, 1.5vw, 1.15rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.35rem',
                }}
              >
                <div style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 800, lineHeight: 1 }}>{'</>'}</div>
                <div style={{ fontSize: 'clamp(1.35rem, 2vw, 1.65rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                  {projectCount}+
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  Projects
                </div>
              </div>

              {/* Stat 3: Technologies */}
              <div
                className="card-hover-orange"
                style={{
                  background: 'rgba(13, 17, 26, 0.8)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(0.875rem, 1.5vw, 1.15rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.35rem',
                }}
              >
                <div style={{ color: 'var(--primary)', fontSize: '1.35rem', lineHeight: 1 }}>🔲</div>
                <div style={{ fontSize: 'clamp(1.35rem, 2vw, 1.65rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                  10+
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  Technologies
                </div>
              </div>

              {/* Stat 4: Achievements */}
              <div
                className="card-hover-orange"
                style={{
                  background: 'rgba(13, 17, 26, 0.8)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(0.875rem, 1.5vw, 1.15rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.35rem',
                }}
              >
                <div style={{ color: 'var(--primary)', fontSize: '1.35rem', lineHeight: 1 }}>🏆</div>
                <div style={{ fontSize: 'clamp(1.35rem, 2vw, 1.65rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                  3+
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                  Achievements
                </div>
              </div>
            </div>

            {/* PHILOSOPHY / QUOTE CARD */}
            <div
              style={{
                position: 'relative',
                background: 'rgba(13, 17, 26, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1rem, 2vw, 1.35rem) clamp(1.25rem, 2.5vw, 1.75rem)',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(0.875rem, 2vw, 1.25rem)',
                overflow: 'hidden',
              }}
            >
              {/* Quote Circle Icon */}
              <div
                style={{
                  flexShrink: 0,
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '1.35rem',
                  fontWeight: 900,
                  boxShadow: '0 0 12px rgba(255, 107, 0, 0.3)',
                }}
              >
                “
              </div>

              {/* Quote Text */}
              <p
                style={{
                  fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                  flex: 1,
                  fontStyle: 'normal',
                }}
              >
                I don&apos;t just write code, I build experiences that solve real problems and create real impact.
              </p>

              {/* Subtle Decorative Dot Matrix */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '60px',
                  height: '40px',
                  opacity: 0.15,
                  backgroundImage: 'radial-gradient(var(--primary) 1.5px, transparent 1.5px)',
                  backgroundSize: '8px 8px',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: LARGE PORTRAIT WITH GLOW + PROFILE IDENTITY GLASS CARD */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            {/* PORTRAIT VISUAL CONTAINER */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(320px, 38vw, 440px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              {/* Radial Orange Glow behind Portrait */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '30%',
                  left: '50%',
                  transform: 'translate(-50%, -40%)',
                  width: 'clamp(280px, 32vw, 380px)',
                  height: 'clamp(280px, 32vw, 380px)',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 107, 0, 0.4) 0%, rgba(255, 107, 0, 0.12) 50%, transparent 72%)',
                  filter: 'blur(35px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Subtle Orbital Ring */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '28%',
                  left: '50%',
                  transform: 'translate(-50%, -40%)',
                  width: 'clamp(310px, 35vw, 410px)',
                  height: 'clamp(310px, 35vw, 410px)',
                  borderRadius: '50%',
                  border: '1px dashed rgba(255, 107, 0, 0.22)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Portrait Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  maxWidth: '380px',
                  zIndex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}
              >
                <Image
                  src={PROFILE_DATA.heroPortraitPath}
                  alt="Nirmal Patil — Software Developer Intern"
                  width={420}
                  height={500}
                  priority
                  style={{
                    width: 'auto',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.8))',
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  }}
                />
              </div>
            </div>

            {/* IDENTITY / PROFILE GLASS CARD */}
            <div
              style={{
                width: '100%',
                background: 'rgba(13, 17, 26, 0.9)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 107, 0, 0.25)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(1rem, 2vw, 1.25rem) clamp(1.25rem, 2.5vw, 1.5rem)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 107, 0, 0.15)',
                marginTop: '-24px',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              {/* Row 1: Name */}
              <div style={{ display: 'grid', gridTemplateColumns: '110px 1px 1fr', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1rem' }}>👤</span>
                  <span>Name</span>
                </div>
                <div style={{ height: '18px', background: 'rgba(255, 255, 255, 0.1)' }} />
                <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.92rem' }}>
                  {PROFILE_DATA.displayName}
                </div>
              </div>

              {/* Row 2: Role */}
              <div style={{ display: 'grid', gridTemplateColumns: '110px 1px 1fr', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1rem' }}>💼</span>
                  <span>Role</span>
                </div>
                <div style={{ height: '18px', background: 'rgba(255, 255, 255, 0.1)' }} />
                <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.88rem' }}>
                  SDE Intern
                </div>
              </div>

              {/* Row 3: Company */}
              <div style={{ display: 'grid', gridTemplateColumns: '110px 1px 1fr', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1rem' }}>🏢</span>
                  <span>Company</span>
                </div>
                <div style={{ height: '18px', background: 'rgba(255, 255, 255, 0.1)' }} />
                <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.88rem' }}>
                  {PROFILE_DATA.currentOrganization}
                </div>
              </div>

              {/* Row 4: Location */}
              <div style={{ display: 'grid', gridTemplateColumns: '110px 1px 1fr', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1rem' }}>📍</span>
                  <span>Location</span>
                </div>
                <div style={{ height: '18px', background: 'rgba(255, 255, 255, 0.1)' }} />
                <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.88rem' }}>
                  {PROFILE_DATA.location}
                </div>
              </div>

              {/* Row 5: Availability */}
              <div style={{ display: 'grid', gridTemplateColumns: '110px 1px 1fr', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1rem' }}>🕒</span>
                  <span>Availability</span>
                </div>
                <div style={{ height: '18px', background: 'rgba(255, 255, 255, 0.1)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#10b981', fontWeight: 600, fontSize: '0.88rem' }}>
                  <span className="pulse-green-dot" />
                  <span>Open to new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: MY VALUES & WHAT I LOVE TO WORK ON */}
        <div className="about-bottom-grid">
          {/* LEFT: MY VALUES CARD */}
          <div
            style={{
              background: 'rgba(13, 17, 26, 0.85)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>🎯</span>
              <h2
                style={{
                  fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                MY VALUES
              </h2>
            </div>

            {/* Values List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {VALUES.map((val, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.65rem',
                    paddingBottom: idx !== VALUES.length - 1 ? '0.75rem' : 0,
                    borderBottom: idx !== VALUES.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                  }}
                >
                  <span style={{ color: 'var(--primary)', fontSize: '0.85rem', lineHeight: 1 }}>•</span>
                  <div style={{ fontSize: 'clamp(0.82rem, 1.05vw, 0.9rem)', lineHeight: 1.5 }}>
                    <strong style={{ color: '#ffffff', fontWeight: 600, marginRight: '0.45rem' }}>
                      {val.title}
                    </strong>
                    <span style={{ color: 'var(--text-secondary)' }}>{val.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: WHAT I LOVE TO WORK ON CARD */}
          <div
            style={{
              position: 'relative',
              background: 'rgba(13, 17, 26, 0.85)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>❤️</span>
                <h2
                  style={{
                    fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  WHAT I LOVE TO WORK ON
                </h2>
              </div>

              {/* Decorative Dot Matrix in Corner */}
              <div
                aria-hidden="true"
                style={{
                  width: '50px',
                  height: '24px',
                  opacity: 0.15,
                  backgroundImage: 'radial-gradient(var(--primary) 1.5px, transparent 1.5px)',
                  backgroundSize: '7px 7px',
                }}
              />
            </div>

            {/* 5 Capability Items in Horizontal / Responsive Layout */}
            <div className="about-capability-grid">
              {CAPABILITIES.map((cap, idx) => (
                <div
                  key={idx}
                  className="card-hover-orange"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 0.5rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(21, 27, 40, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                  }}
                >
                  {/* Circular Line Icon */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      border: '1.5px solid var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      boxShadow: '0 0 10px rgba(255, 107, 0, 0.25)',
                    }}
                  >
                    {cap.icon}
                  </div>

                  {/* Title */}
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.25,
                    }}
                  >
                    {cap.title}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div
          style={{
            marginTop: 'clamp(2rem, 4vw, 3.5rem)',
            background: 'linear-gradient(135deg, rgba(21, 27, 40, 0.9) 0%, rgba(13, 17, 26, 0.95) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--border-orange)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 107, 0, 0.15)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            Let&apos;s build something <span className="text-gradient-orange">meaningful.</span>
          </h3>

          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Whether you are looking for a Software Developer Intern, exploring AI agent workflows, or discussing new projects,
            I am always excited to connect.
          </p>

          <div
            className="responsive-btn-group"
            style={{
              display: 'flex',
              gap: 'var(--space-md)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '0.5rem',
            }}
          >
            <Link href="/projects" style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="md" style={{ boxShadow: 'var(--shadow-glow)' }}>
                Explore Projects →
              </Button>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="md">
                Let&apos;s Connect →
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
