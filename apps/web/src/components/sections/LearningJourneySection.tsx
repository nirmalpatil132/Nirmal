'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { LEARNING_STAGES, TIMELINE_MESSAGE, LearningStage } from '../../data/learningJourney';
import { PROFILE_DATA } from '../../data/profile';
import { SOCIAL_LINKS } from '../../data/social';

// =============================================================================
// HELPER: Map Stage to Project Links & Accent Colors
// =============================================================================
interface StageProjectLink {
  name: string;
  href: string;
}

function getStageProjectLinks(stageNumber: string): StageProjectLink[] {
  switch (stageNumber) {
    case 'Stage 01':
      return [
        { name: 'Tic Tac Toe Game', href: '/projects' },
        { name: 'Snake Game', href: '/projects' },
      ];
    case 'Stage 02':
      return [
        { name: 'CineMood', href: '/projects' },
        { name: 'HTML Portfolio V1', href: '/projects' },
        { name: 'My Resume Website', href: '/projects' },
      ];
    case 'Stage 03':
      return [
        { name: 'Data Analytics Case Studies', href: '/projects' },
        { name: 'Stock Analysis Research', href: '/projects' },
      ];
    case 'Stage 04':
      return [
        { name: 'Codetech Internship', href: '/experience' },
        { name: 'Blog Backend System', href: '/projects' },
        { name: 'Stock Analysis Platform', href: '/projects' },
      ];
    case 'Stage 05':
      return [
        { name: 'Autonomous Deep Research System', href: '/projects' },
        { name: '4-Agent SWE Workflow', href: '/projects' },
      ];
    case 'Stage 06':
      return [
        { name: 'Path Pilot (Featured)', href: '/projects/path-pilot' },
        { name: 'Job Hub', href: '/projects' },
        { name: 'Virat Plast B2B', href: '/projects' },
      ];
    case 'Stage 07':
      return [
        { name: 'Evnorix SDE Internship', href: '/experience' },
        { name: 'LOS Intake Application', href: '/experience' },
        { name: 'LOS Staff Application', href: '/experience' },
      ];
    default:
      return [];
  }
}

function getStageTheme(stageNumber: string): {
  accent: string;
  accentLight: string;
  glow: string;
  border: string;
  category: string;
} {
  switch (stageNumber) {
    case 'Stage 01':
      return {
        accent: '#10b981',
        accentLight: 'rgba(16, 185, 129, 0.12)',
        glow: 'rgba(16, 185, 129, 0.35)',
        border: 'rgba(16, 185, 129, 0.3)',
        category: 'FOUNDATIONAL LOGIC',
      };
    case 'Stage 02':
      return {
        accent: '#38bdf8',
        accentLight: 'rgba(56, 189, 248, 0.12)',
        glow: 'rgba(56, 189, 248, 0.35)',
        border: 'rgba(56, 189, 248, 0.3)',
        category: 'CLIENT-SIDE WEB & UI/UX',
      };
    case 'Stage 03':
      return {
        accent: '#f59e0b',
        accentLight: 'rgba(245, 158, 11, 0.12)',
        glow: 'rgba(245, 158, 11, 0.35)',
        border: 'rgba(245, 158, 11, 0.3)',
        category: 'ANALYTICAL PROBLEM SOLVING',
      };
    case 'Stage 04':
      return {
        accent: '#ff8533',
        accentLight: 'rgba(255, 107, 0, 0.12)',
        glow: 'rgba(255, 107, 0, 0.35)',
        border: 'rgba(255, 107, 0, 0.3)',
        category: 'SERVERS, APIS & DATABASES',
      };
    case 'Stage 05':
      return {
        accent: '#a855f7',
        accentLight: 'rgba(168, 85, 247, 0.12)',
        glow: 'rgba(168, 85, 247, 0.35)',
        border: 'rgba(168, 85, 247, 0.3)',
        category: 'MULTI-AGENT ARCHITECTURE',
      };
    case 'Stage 06':
      return {
        accent: '#ff6b00',
        accentLight: 'rgba(255, 107, 0, 0.15)',
        glow: 'rgba(255, 107, 0, 0.45)',
        border: 'rgba(255, 107, 0, 0.4)',
        category: 'FULL-STACK PRODUCT BUILDING',
      };
    case 'Stage 07':
    default:
      return {
        accent: '#ff3b00',
        accentLight: 'rgba(255, 59, 0, 0.15)',
        glow: 'rgba(255, 59, 0, 0.5)',
        border: 'rgba(255, 107, 0, 0.5)',
        category: 'PRODUCTION FINTECH & SYSTEMS',
      };
  }
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export function LearningJourneySection() {
  const [activeStageFilter, setActiveStageFilter] = useState<string>('all');

  // Derived Metrics (Strictly Authoritative)
  const totalStages = LEARNING_STAGES.length; // 7
  const allUniqueSkills = Array.from(new Set(LEARNING_STAGES.flatMap((s) => s.skills)));
  const totalSkillsCount = allUniqueSkills.length; // 30+
  const currentStage = LEARNING_STAGES.find((s) => s.stageNumber === 'Stage 07') || LEARNING_STAGES[6];

  // Filtered Stages
  const displayedStages = activeStageFilter === 'all'
    ? LEARNING_STAGES
    : LEARNING_STAGES.filter((s) => s.stageNumber === activeStageFilter);

  return (
    <div id="learning-journey" style={{ width: '100%', position: 'relative' }}>
      <style>{`
        .journey-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: var(--space-2xl);
          align-items: center;
        }
        .journey-metrics-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: var(--space-md);
        }
        .journey-stepper-track {
          display: flex;
          overflow-x: auto;
          gap: 12px;
          padding-bottom: 8px;
          scrollbar-width: thin;
        }
        .journey-timeline-container {
          position: relative;
          padding: var(--space-2xl) 0;
        }
        .journey-spine-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          background: linear-gradient(180deg, #10b981 0%, #38bdf8 25%, #ff8533 50%, #a855f7 75%, #ff6b00 100%);
          box-shadow: 0 0 12px rgba(255, 107, 0, 0.4);
          z-index: 0;
        }
        .timeline-card-wrapper {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          align-items: center;
          margin-bottom: var(--space-3xl);
          position: relative;
          z-index: 1;
        }
        .timeline-card-left {
          grid-column: 1;
        }
        .timeline-card-right {
          grid-column: 3;
        }
        .timeline-node-center {
          grid-column: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .journey-card-hover {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .journey-card-hover:hover {
          transform: translateY(-4px);
        }
        @media (max-width: 1024px) {
          .journey-hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .journey-hero-badges {
            justify-content: center !important;
          }
          .journey-hero-links {
            justify-content: center !important;
          }
          .journey-metrics-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .journey-spine-line {
            left: 28px !important;
          }
          .timeline-card-wrapper {
            grid-template-columns: 56px 1fr !important;
            gap: var(--space-md);
            margin-bottom: var(--space-2xl) !important;
          }
          .timeline-card-left, .timeline-card-right {
            grid-column: 2 !important;
          }
          .timeline-node-center {
            grid-column: 1 !important;
          }
        }
        @media (max-width: 640px) {
          .journey-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 420px) {
          .journey-metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* =======================================================================
          1. CINEMATIC JOURNEY HERO (Matching 19.png / 13.png visual language)
          ======================================================================= */}
      <section style={{ padding: 'var(--space-2xl) 0 var(--space-xl)', position: 'relative', overflow: 'hidden' }}>
        <Container size="lg">
          <div className="journey-hero-grid">
            {/* Left Hero Narrative */}
            <div>
              {/* Badge */}
              <div
                className="journey-hero-badges"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 107, 0, 0.12)',
                  border: '1px solid rgba(255, 107, 0, 0.35)',
                  marginBottom: 'var(--space-md)',
                  boxShadow: '0 2px 10px rgba(255, 107, 0, 0.15)',
                }}
              >
                <span style={{ fontSize: '15px' }}>🗺️</span>
                <span
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#ff8533',
                  }}
                >
                  ENGINEERING EVOLUTION
                </span>
              </div>

              {/* Oversized Heading */}
              <h1
                style={{
                  fontSize: 'clamp(2.15rem, 4.8vw, 3.5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.12,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                FROM FOUNDATIONS TO{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #ff8533 0%, #ff6b00 50%, #ff3b00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  BUILDING REAL PRODUCTS
                </span>
              </h1>

              {/* Accent Bar */}
              <div
                style={{
                  width: '64px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b00, #ff8533)',
                  borderRadius: 'var(--radius-full)',
                  marginBottom: 'var(--space-md)',
                  boxShadow: '0 0 12px rgba(255, 107, 0, 0.5)',
                }}
              />

              {/* Supporting Statement */}
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  maxWidth: '660px',
                  marginBottom: 'var(--space-xl)',
                }}
              >
                I don&apos;t see my skills as a static list. Each project has pushed me to explore deeper — from foundational
                programming logic and data analysis to building full-stack platforms, autonomous agentic AI workflows, and
                production fintech software.
              </p>

              {/* Quick Jump Buttons */}
              <div
                className="journey-hero-links"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <a
                  href="#timeline-stages"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, #ff8533 0%, #ff6b00 100%)',
                    color: '#ffffff',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(255, 107, 0, 0.3)',
                  }}
                >
                  <span>Explore 7 Stages</span>
                  <span>↓</span>
                </a>

                <a
                  href="#tech-evolution"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'var(--text-primary)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <span>Roadmap Overview</span>
                  <span>→</span>
                </a>

                <a
                  href="#current-stage"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 59, 0, 0.1)',
                    border: '1px solid rgba(255, 107, 0, 0.4)',
                    color: '#ff8533',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff3b00', display: 'inline-block' }} />
                  <span>Current Focus (Stage 07)</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual: Portrait with Glowing Orbital Geometry (Matching 19.png) */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '320px',
              }}
            >
              {/* Radial Backdrop Glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 107, 0, 0.25) 0%, rgba(255, 107, 0, 0.05) 55%, transparent 75%)',
                  filter: 'blur(24px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* SVG Orbital Rings & Constellation Details */}
              <svg
                width="340"
                height="340"
                viewBox="0 0 340 340"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                  opacity: 0.8,
                }}
              >
                <circle cx="170" cy="170" r="150" stroke="rgba(255, 107, 0, 0.2)" strokeWidth="1.5" strokeDasharray="6 6" />
                <circle cx="170" cy="170" r="125" stroke="rgba(255, 107, 0, 0.35)" strokeWidth="1" />
                <circle cx="170" cy="170" r="100" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" strokeDasharray="3 5" />
                {/* Orbiting glowing dots */}
                <circle cx="170" cy="20" r="4" fill="#ff6b00" />
                <circle cx="320" cy="170" r="3.5" fill="#38bdf8" />
                <circle cx="65" cy="275" r="3" fill="#10b981" />
                <circle cx="280" cy="260" r="3.5" fill="#a855f7" />
              </svg>

              {/* Circular Portrait Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '210px',
                  height: '210px',
                  borderRadius: '50%',
                  padding: '4px',
                  background: 'linear-gradient(135deg, #ff8533 0%, rgba(255, 107, 0, 0.3) 50%, #38bdf8 100%)',
                  boxShadow: '0 0 30px rgba(255, 107, 0, 0.35), 0 12px 30px rgba(0, 0, 0, 0.6)',
                  zIndex: 1,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={PROFILE_DATA.heroPortraitPath}
                  alt="Nirmal Patil — Engineering Evolution"
                  fill
                  sizes="210px"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =======================================================================
          2. JOURNEY OVERVIEW METRICS STRIP (Strictly Derived Data)
          ======================================================================= */}
      <section style={{ padding: '0 0 var(--space-2xl)' }}>
        <Container size="lg">
          <div className="journey-metrics-grid">
            {/* Metric 1: Total Stages */}
            <div
              className="journey-card-hover"
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.8) 0%, rgba(13, 17, 26, 0.9) 100%)',
                border: '1px solid rgba(255, 107, 0, 0.25)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-md) var(--space-sm)',
                textAlign: 'center',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 107, 0, 0.12)',
                  border: '2px solid #ff6b00',
                  boxShadow: '0 0 14px rgba(255, 107, 0, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  fontSize: '18px',
                }}
              >
                🗺️
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ff8533', lineHeight: 1.1 }}>
                {totalStages}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                Evolution Stages
              </div>
            </div>

            {/* Metric 2: Skills Covered */}
            <div
              className="journey-card-hover"
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.8) 0%, rgba(13, 17, 26, 0.9) 100%)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-md) var(--space-sm)',
                textAlign: 'center',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '2px solid #38bdf8',
                  boxShadow: '0 0 14px rgba(56, 189, 248, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  fontSize: '18px',
                }}
              >
                ⚡
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#38bdf8', lineHeight: 1.1 }}>
                {totalSkillsCount}+
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                Technologies Explored
              </div>
            </div>

            {/* Metric 3: Connected Projects */}
            <div
              className="journey-card-hover"
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.8) 0%, rgba(13, 17, 26, 0.9) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-md) var(--space-sm)',
                textAlign: 'center',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '2px solid #10b981',
                  boxShadow: '0 0 14px rgba(16, 185, 129, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  fontSize: '18px',
                }}
              >
                🚀
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#10b981', lineHeight: 1.1 }}>
                10+
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                Connected Projects
              </div>
            </div>

            {/* Metric 4: Current Stage */}
            <div
              className="journey-card-hover"
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.8) 0%, rgba(13, 17, 26, 0.9) 100%)',
                border: '1px solid rgba(255, 59, 0, 0.35)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-md) var(--space-sm)',
                textAlign: 'center',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 59, 0, 0.12)',
                  border: '2px solid #ff3b00',
                  boxShadow: '0 0 14px rgba(255, 59, 0, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  fontSize: '18px',
                }}
              >
                💼
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ff8533', lineHeight: 1.1 }}>
                Stage 07
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                Active (SDE Intern)
              </div>
            </div>

            {/* Metric 5: Hands-On Applied */}
            <div
              className="journey-card-hover"
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.8) 0%, rgba(13, 17, 26, 0.9) 100%)',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-md) var(--space-sm)',
                textAlign: 'center',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(168, 85, 247, 0.12)',
                  border: '2px solid #a855f7',
                  boxShadow: '0 0 14px rgba(168, 85, 247, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  fontSize: '18px',
                }}
              >
                🎯
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#a855f7', lineHeight: 1.1 }}>
                100%
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                Hands-On Applied
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =======================================================================
          3. ENGINEERING ROADMAP STEPPER (Matching Reference UI 19.png)
          ======================================================================= */}
      <section id="tech-evolution" style={{ padding: '0 0 var(--space-2xl)' }}>
        <Container size="lg">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(21, 27, 40, 0.75) 0%, rgba(13, 17, 26, 0.9) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-lg)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#ff8533', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  STEP-BY-STEP PROGRESSION
                </span>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '2px 0 0' }}>
                  MY JOURNEY AT A GLANCE
                </h2>
              </div>

              {/* Filter controls */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setActiveStageFilter('all')}
                  style={{
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: activeStageFilter === 'all' ? 'linear-gradient(135deg, #ff8533 0%, #ff6b00 100%)' : 'rgba(255, 255, 255, 0.05)',
                    color: activeStageFilter === 'all' ? '#ffffff' : 'var(--text-secondary)',
                    border: activeStageFilter === 'all' ? '1px solid #ff6b00' : '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  View All (7)
                </button>
              </div>
            </div>

            {/* Stepper Track */}
            <div className="journey-stepper-track">
              {LEARNING_STAGES.map((s, idx) => {
                const theme = getStageTheme(s.stageNumber);
                const isCurrent = s.stageNumber === 'Stage 07';
                const isFilterActive = activeStageFilter === s.stageNumber;

                return (
                  <button
                    key={s.stageNumber}
                    type="button"
                    onClick={() => setActiveStageFilter(activeStageFilter === s.stageNumber ? 'all' : s.stageNumber)}
                    style={{
                      flex: '1 0 145px',
                      background: isFilterActive ? 'rgba(255, 107, 0, 0.15)' : 'rgba(13, 17, 26, 0.7)',
                      border: isFilterActive ? '1.5px solid #ff6b00' : isCurrent ? '1.5px solid rgba(255, 107, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '12px 10px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                  >
                    {isCurrent && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '6px',
                          right: '6px',
                          fontSize: '8px',
                          fontWeight: 800,
                          color: '#ff8533',
                          background: 'rgba(255, 107, 0, 0.2)',
                          padding: '1px 5px',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        ACTIVE
                      </span>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '15px' }}>{s.icon}</span>
                      <span style={{ fontSize: '10px', fontWeight: 800, color: theme.accent, letterSpacing: '0.04em' }}>
                        {s.stageNumber}
                      </span>
                    </div>

                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, whiteSpace: 'normal' }}>
                      {s.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* =======================================================================
          4. THE 7-STAGE VISUAL TIMELINE CENTERPIECE
          ======================================================================= */}
      <section id="timeline-stages" style={{ padding: '0 0 var(--space-3xl)' }}>
        <Container size="lg">
          <div className="journey-timeline-container">
            {/* Center Timeline Spine Line */}
            <div className="journey-spine-line" aria-hidden="true" />

            {displayedStages.map((stage, index) => {
              const theme = getStageTheme(stage.stageNumber);
              const isEven = index % 2 === 0;
              const isCurrent = stage.stageNumber === 'Stage 07';
              const projectLinks = getStageProjectLinks(stage.stageNumber);

              return (
                <div key={stage.stageNumber} className="timeline-card-wrapper">
                  {/* LEFT CARD (on desktop for even items) */}
                  <div className={isEven ? 'timeline-card-left' : 'timeline-card-right'}>
                    <div
                      className="journey-card-hover"
                      style={{
                        background: isCurrent
                          ? 'linear-gradient(145deg, rgba(26, 20, 15, 0.95) 0%, rgba(13, 17, 26, 0.95) 100%)'
                          : 'linear-gradient(145deg, rgba(21, 27, 40, 0.8) 0%, rgba(13, 17, 26, 0.9) 100%)',
                        border: isCurrent
                          ? '1.5px solid rgba(255, 107, 0, 0.45)'
                          : '1px solid rgba(255, 255, 255, 0.09)',
                        borderRadius: 'var(--radius-xl)',
                        padding: 'clamp(var(--space-md), 3vw, var(--space-xl))',
                        boxShadow: isCurrent
                          ? '0 12px 36px rgba(0, 0, 0, 0.5), 0 0 24px rgba(255, 107, 0, 0.15)'
                          : '0 8px 24px rgba(0, 0, 0, 0.35)',
                        backdropFilter: 'blur(12px)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Top Badges Row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)', flexWrap: 'wrap', gap: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 800,
                              color: theme.accent,
                              background: theme.accentLight,
                              border: `1px solid ${theme.border}`,
                              borderRadius: 'var(--radius-full)',
                              padding: '2px 10px',
                              letterSpacing: '0.04em',
                            }}
                          >
                            {stage.stageNumber}
                          </span>

                          <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            {theme.category}
                          </span>
                        </div>

                        {isCurrent && (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              fontSize: '10px',
                              fontWeight: 800,
                              color: '#ff8533',
                              background: 'rgba(255, 107, 0, 0.15)',
                              border: '1px solid rgba(255, 107, 0, 0.35)',
                              borderRadius: 'var(--radius-full)',
                              padding: '2px 8px',
                            }}
                          >
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff3b00' }} />
                            CURRENT STAGE
                          </span>
                        )}
                      </div>

                      {/* Stage Title */}
                      <h3
                        style={{
                          fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
                          fontWeight: 800,
                          color: '#ffffff',
                          lineHeight: 1.25,
                          marginBottom: '8px',
                        }}
                      >
                        {stage.title}
                      </h3>

                      {/* Learning Focus */}
                      <div style={{ marginBottom: 'var(--space-md)' }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: theme.accent, textTransform: 'uppercase', marginBottom: '2px' }}>
                          🎯 Learning Focus
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                          {stage.learningFocus}
                        </p>
                      </div>

                      {/* Applied Through */}
                      <div style={{ marginBottom: 'var(--space-md)', padding: '10px 12px', background: 'rgba(13, 17, 26, 0.6)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2px' }}>
                          🛠️ Applied Through
                        </div>
                        <div style={{ fontSize: '13px', color: '#e2e8f0', lineHeight: 1.5, marginBottom: '6px' }}>
                          {stage.appliedThrough}
                        </div>

                        {/* Interactive Verified Project Links */}
                        {projectLinks.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                            {projectLinks.map((p, pIdx) => (
                              <Link
                                key={pIdx}
                                href={p.href}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  fontSize: '11px',
                                  fontWeight: 600,
                                  color: theme.accent,
                                  background: theme.accentLight,
                                  border: `1px solid ${theme.border}`,
                                  borderRadius: 'var(--radius-full)',
                                  padding: '2px 8px',
                                  textDecoration: 'none',
                                  transition: 'background 0.2s ease',
                                }}
                              >
                                <span>{p.name}</span>
                                <span style={{ fontSize: '9px' }}>↗</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Skills Covered Pills */}
                      <div>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                          Technologies &amp; Competencies
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {stage.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              style={{
                                fontSize: '11px',
                                fontWeight: 600,
                                color: '#cbd5e1',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: 'var(--radius-full)',
                                padding: '3px 9px',
                              }}
                            >
                              • {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CENTER TIMELINE NODE */}
                  <div className="timeline-node-center">
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: isCurrent ? 'rgba(255, 59, 0, 0.2)' : 'rgba(13, 17, 26, 0.95)',
                        border: `2.5px solid ${theme.accent}`,
                        boxShadow: `0 0 16px ${theme.glow}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        zIndex: 2,
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      {stage.icon}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =======================================================================
          5. CURRENT PROFESSIONAL LEARNING SPOTLIGHT (Stage 07)
          ======================================================================= */}
      <section id="current-stage" style={{ padding: '0 0 var(--space-3xl)' }}>
        <Container size="lg">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(26, 20, 15, 0.95) 0%, rgba(13, 17, 26, 0.95) 60%, rgba(20, 15, 10, 0.9) 100%)',
              border: '1.5px solid rgba(255, 107, 0, 0.4)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(var(--space-lg), 4vw, var(--space-2xl))',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 107, 0, 0.12)',
            }}
          >
            {/* Ambient Background Glow */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 107, 0, 0.25) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Top row: Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                marginBottom: 'var(--space-md)',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 107, 0, 0.2)',
                    border: '1px solid rgba(255, 107, 0, 0.5)',
                    color: '#ff8533',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  ✦ STAGE 07 • ACTIVE PROFESSIONAL MILESTONE
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    color: '#10b981',
                    fontSize: '11px',
                    fontWeight: 700,
                  }}
                >
                  ⚡ Active Role: {PROFILE_DATA.rolePeriod}
                </span>
              </div>

              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)' }}>
                <span>📍 {PROFILE_DATA.location}</span>
              </div>
            </div>

            {/* Title & Role */}
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3.2vw, 2.25rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '8px',
              }}
            >
              {currentStage.title}: {PROFILE_DATA.currentRole}
            </h2>

            <div
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                color: '#ff8533',
                fontWeight: 700,
                marginBottom: 'var(--space-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>🏛️</span>
              <span>{PROFILE_DATA.currentOrganization}</span>
              <span
                style={{
                  fontSize: '10px',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 107, 0, 0.15)',
                  border: '1px solid rgba(255, 107, 0, 0.3)',
                  color: '#ff8533',
                  fontWeight: 800,
                }}
              >
                Fintech Software
              </span>
            </div>

            {/* Narrative Description */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '850px',
                marginBottom: 'var(--space-lg)',
              }}
            >
              Focusing on fintech software systems, Loan Origination System (LOS) intake application and staff application
              workflows, and collaborative full-stack development practices. Translating complex financial compliance and
              origination pipelines into clean, scalable software architecture.
            </p>

            {/* Bottom Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 'var(--space-md)',
                paddingTop: 'var(--space-md)',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {currentStage.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#ff8533',
                      background: 'rgba(255, 107, 0, 0.1)',
                      border: '1px solid rgba(255, 107, 0, 0.25)',
                      borderRadius: 'var(--radius-full)',
                      padding: '3px 10px',
                    }}
                  >
                    • {skill}
                  </span>
                ))}
              </div>

              <Link
                href="/experience"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, #ff8533 0%, #ff6b00 100%)',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(255, 107, 0, 0.3)',
                }}
              >
                <span>View Full Experience Story</span>
                <span>💼</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =======================================================================
          6. CROSS-PORTFOLIO INTEGRATION BRIDGES
          ======================================================================= */}
      <section style={{ padding: '0 0 var(--space-2xl)' }}>
        <Container size="lg">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            {/* Bridge 1: Skills */}
            <Link
              href="/skills"
              className="journey-card-hover"
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.75) 0%, rgba(13, 17, 26, 0.85) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-lg)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '8px' }}>⚡</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                Technical Stack &amp; Skills
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
                See how these 7 learning stages synthesized into complete proficiency across Frontend, Backend, AI, and Data.
              </p>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ff8533', marginTop: '12px' }}>
                Explore Technical Skills →
              </div>
            </Link>

            {/* Bridge 2: Projects */}
            <Link
              href="/projects"
              className="journey-card-hover"
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.75) 0%, rgba(13, 17, 26, 0.85) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-lg)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '8px' }}>🚀</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                Applied Projects Portfolio
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
                Inspect real-world systems including Path Pilot, Virat Plast, Job Hub, and Multi-Agent AI workflows.
              </p>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8', marginTop: '12px' }}>
                View Projects Portfolio →
              </div>
            </Link>

            {/* Bridge 3: Experience */}
            <Link
              href="/experience"
              className="journey-card-hover"
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.75) 0%, rgba(13, 17, 26, 0.85) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-lg)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '8px' }}>💼</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                Professional Experience
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
                Review software development internships at Evnorix Infotech and Codetech IT Solutions.
              </p>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#10b981', marginTop: '12px' }}>
                View Work History →
              </div>
            </Link>

            {/* Bridge 4: Certifications */}
            <Link
              href="/achievements#certificates"
              className="journey-card-hover"
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.75) 0%, rgba(13, 17, 26, 0.85) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-lg)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '22px', marginBottom: '8px' }}>📜</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                Technical Certifications
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
                Inspect verified engineering credentials across Agentic AI, Data Analytics, and Full-Stack development.
              </p>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#a855f7', marginTop: '12px' }}>
                View Certifications →
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* =======================================================================
          7. PHILOSOPHY & CONNECT CTA BANNER
          ======================================================================= */}
      <section style={{ padding: 'var(--space-md) 0 var(--space-2xl)' }}>
        <Container size="lg">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(13, 17, 26, 0.95) 0%, rgba(7, 9, 14, 0.98) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(var(--space-lg), 3vw, var(--space-xl))',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 'var(--space-xl)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Left: Statement */}
            <div style={{ maxWidth: '580px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 107, 0, 0.1)',
                  border: '1px solid rgba(255, 107, 0, 0.25)',
                  color: '#ff8533',
                  fontSize: '11px',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}
              >
                <span>✦</span> KEEP LEARNING • KEEP BUILDING
              </div>

              <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, marginBottom: '6px' }}>
                &ldquo;{PROFILE_DATA.philosophy}&rdquo;
              </div>

              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '6px 0 0' }}>
                &ldquo;{TIMELINE_MESSAGE}&rdquo;
              </p>

              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px' }}>
                — Nirmal Patil • SDE Intern, Evnorix Infotech
              </div>
            </div>

            {/* Right: Quick Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              <Link
                href="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, #ff8533 0%, #ff6b00 100%)',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(255, 107, 0, 0.3)',
                }}
              >
                <span>View Projects</span>
                <span>🚀</span>
              </Link>

              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'var(--text-primary)',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <span>Let&apos;s Connect</span>
                <span>✉️</span>
              </Link>

              {/* LinkedIn icon shortcut */}
              {SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn') && (
                <a
                  href={SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn')?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(0, 119, 181, 0.15)',
                    border: '1px solid rgba(0, 119, 181, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    textDecoration: 'none',
                    fontSize: '16px',
                  }}
                >
                  💼
                </a>
              )}

              {/* GitHub icon shortcut */}
              {SOCIAL_LINKS.find((s) => s.platform === 'GitHub') && (
                <a
                  href={SOCIAL_LINKS.find((s) => s.platform === 'GitHub')?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub Profile"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '16px',
                  }}
                >
                  🐙
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
