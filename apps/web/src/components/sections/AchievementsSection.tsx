'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { ACHIEVEMENTS_DATA, AchievementItem } from '../../data/achievements';
import { PROFILE_DATA } from '../../data/profile';
import { SOCIAL_LINKS } from '../../data/social';

// =============================================================================
// HERO TROPHY ILLUSTRATION (Pure SVG vector art matching Reference UI 15.png)
// =============================================================================
function HeroTrophyIllustration() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '320px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background ambient radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.25) 0%, rgba(255, 107, 0, 0.08) 45%, transparent 70%)',
          filter: 'blur(16px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 320 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 12px 30px rgba(255, 107, 0, 0.25))' }}
      >
        <defs>
          <linearGradient id="trophyGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="40%" stopColor="#ff9900" />
            <stop offset="100%" stopColor="#cc6600" />
          </linearGradient>
          <linearGradient id="trophyCupShine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff2a8" />
            <stop offset="50%" stopColor="#ffb833" />
            <stop offset="100%" stopColor="#b35a00" />
          </linearGradient>
          <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a3346" />
            <stop offset="100%" stopColor="#0d111a" />
          </linearGradient>
          <linearGradient id="laurelGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <radialGradient id="pedestalGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Pedestal Glow Disc */}
        <ellipse cx="160" cy="242" rx="110" ry="24" fill="url(#pedestalGlow)" />

        {/* Circular Stage / Pedestal Rings */}
        <ellipse cx="160" cy="236" rx="90" ry="16" fill="url(#baseGradient)" stroke="rgba(255, 107, 0, 0.4)" strokeWidth="1.5" />
        <ellipse cx="160" cy="226" rx="72" ry="12" fill="#151b28" stroke="rgba(255, 215, 0, 0.4)" strokeWidth="1" />
        <rect x="100" y="210" width="120" height="18" rx="4" fill="url(#baseGradient)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
        <line x1="108" y1="219" x2="212" y2="219" stroke="rgba(255, 107, 0, 0.5)" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Left Laurel Wreath */}
        <g opacity="0.9">
          <path d="M125 180 C95 160 85 110 115 80" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Leaves */}
          <path d="M110 85 C100 80 92 88 100 95 C108 95 112 90 110 85 Z" fill="url(#trophyGold)" />
          <path d="M96 110 C86 108 80 118 90 123 C98 122 100 115 96 110 Z" fill="url(#trophyGold)" />
          <path d="M92 140 C82 140 80 152 90 155 C98 153 98 144 92 140 Z" fill="url(#trophyGold)" />
          <path d="M104 165 C96 168 98 180 108 180 C114 176 112 168 104 165 Z" fill="url(#trophyGold)" />
        </g>

        {/* Right Laurel Wreath */}
        <g opacity="0.9">
          <path d="M195 180 C225 160 235 110 205 80" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Leaves */}
          <path d="M210 85 C220 80 228 88 220 95 C212 95 208 90 210 85 Z" fill="url(#trophyGold)" />
          <path d="M224 110 C234 108 240 118 230 123 C222 122 220 115 224 110 Z" fill="url(#trophyGold)" />
          <path d="M228 140 C238 140 240 152 230 155 C222 153 222 144 228 140 Z" fill="url(#trophyGold)" />
          <path d="M216 165 C224 168 222 180 212 180 C206 176 208 168 216 165 Z" fill="url(#trophyGold)" />
        </g>

        {/* Trophy Left Handle */}
        <path
          d="M125 105 C98 105 92 145 125 152"
          stroke="url(#trophyGold)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Trophy Right Handle */}
        <path
          d="M195 105 C222 105 228 145 195 152"
          stroke="url(#trophyGold)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Trophy Chalice Body */}
        <path
          d="M122 92 C122 88 126 84 130 84 H190 C194 84 198 88 198 92 V132 C198 158 178 175 160 175 C142 175 122 158 122 132 Z"
          fill="url(#trophyCupShine)"
          stroke="#ffe680"
          strokeWidth="1.5"
        />

        {/* Trophy Cup Rim */}
        <ellipse cx="160" cy="85" rx="38" ry="7" fill="#ffe066" stroke="#cc8800" strokeWidth="1" />
        <ellipse cx="160" cy="85" rx="32" ry="4" fill="#995c00" />

        {/* Embossed 5-Point Star on Trophy Cup */}
        <path
          d="M160 110 L163 118 L171 119 L165 124 L167 132 L160 128 L153 132 L155 124 L149 119 L157 118 Z"
          fill="#ffffff"
          opacity="0.95"
          filter="drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))"
        />

        {/* Trophy Stem & Neck */}
        <path d="M153 175 H167 V196 H153 Z" fill="url(#trophyGold)" stroke="#b36b00" strokeWidth="0.5" />
        <path d="M145 196 H175 V204 C175 208 171 210 167 210 H153 C149 210 145 208 145 204 Z" fill="url(#trophyGold)" />

        {/* Floating Confetti / Sparkle Accents */}
        <circle cx="70" cy="70" r="2.5" fill="#ff9900" opacity="0.8" />
        <circle cx="250" cy="65" r="3" fill="#38bdf8" opacity="0.8" />
        <circle cx="85" cy="195" r="2" fill="#ffd700" opacity="0.7" />
        <circle cx="240" cy="190" r="2.5" fill="#ff6b00" opacity="0.7" />
        <polygon points="160,40 162,46 168,48 162,50 160,56 158,50 152,48 158,46" fill="#ffd700" opacity="0.85" />
        <polygon points="230,95 231,99 235,100 231,101 230,105 229,101 225,100 229,99" fill="#ff8533" opacity="0.7" />
        <polygon points="90,95 91,99 95,100 91,101 90,105 89,101 85,100 89,99" fill="#38bdf8" opacity="0.7" />
      </svg>
    </div>
  );
}

// =============================================================================
// ICON ASSIGNMENT HELPER (Category & Achievement Specific)
// =============================================================================
function AchievementCategoryIcon({ category, id }: { category: string; id: string }) {
  if (id === 'nec-winner') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 15C15.866 15 19 11.866 19 8V3H5V8C5 11.866 8.13401 15 12 15Z" fill="#ff6b00" fillOpacity="0.2" stroke="#ff6b00" strokeWidth="2" />
        <path d="M19 5H21C21.5523 5 22 5.44772 22 6V8C22 9.65685 20.6569 11 19 11V11" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 5H3C2.44772 5 2 5.44772 2 6V8C2 9.65685 3.34315 11 5 11V11" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 15V18M8 21H16" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (category === 'Research' || id === 'ieee-paper') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" fill="#38bdf8" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === 'gsa-selection') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (category === 'Leadership' || id === 'ecell-lead') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="#10b981" fillOpacity="0.25" stroke="#10b981" strokeWidth="2" />
        <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Extracurricular / Sports
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="6" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2" />
      <path d="M15.5 13L18.5 21L12 18L5.5 21L8.5 13" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Color palette mapping based on category
function getCategoryColor(category: string): { primary: string; light: string; glow: string; border: string } {
  switch (category) {
    case 'Entrepreneurship':
      return {
        primary: '#ff6b00',
        light: 'rgba(255, 107, 0, 0.12)',
        glow: 'rgba(255, 107, 0, 0.4)',
        border: 'rgba(255, 107, 0, 0.3)',
      };
    case 'Research':
      return {
        primary: '#38bdf8',
        light: 'rgba(56, 189, 248, 0.12)',
        glow: 'rgba(56, 189, 248, 0.4)',
        border: 'rgba(56, 189, 248, 0.3)',
      };
    case 'Leadership':
      return {
        primary: '#a855f7',
        light: 'rgba(168, 85, 247, 0.12)',
        glow: 'rgba(168, 85, 247, 0.4)',
        border: 'rgba(168, 85, 247, 0.3)',
      };
    case 'Extracurricular':
    default:
      return {
        primary: '#f59e0b',
        light: 'rgba(245, 158, 11, 0.12)',
        glow: 'rgba(245, 158, 11, 0.4)',
        border: 'rgba(245, 158, 11, 0.3)',
      };
  }
}

// =============================================================================
// ACHIEVEMENTS SECTION COMPONENT
// =============================================================================
export function AchievementsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories extracted dynamically from authoritative data
  const categories = useMemo(() => {
    const cats = new Set<string>();
    ACHIEVEMENTS_DATA.forEach((item) => cats.add(item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filtered achievements
  const filteredAchievements = useMemo(() => {
    if (selectedCategory === 'All') {
      return ACHIEVEMENTS_DATA;
    }
    return ACHIEVEMENTS_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Featured Item: Premier National Recognition (IIT Bombay NEC Winner)
  const featuredItem = useMemo(() => {
    return ACHIEVEMENTS_DATA.find((item) => item.id === 'nec-winner') || ACHIEVEMENTS_DATA[0];
  }, []);

  // Leadership Items
  const leadershipItems = useMemo(() => {
    return ACHIEVEMENTS_DATA.filter((item) => item.category === 'Leadership');
  }, []);

  // Technical & Research / Sports Items
  const technicalAndResearchItems = useMemo(() => {
    return ACHIEVEMENTS_DATA.filter((item) => item.category === 'Research' || item.category === 'Extracurricular');
  }, []);

  // Dynamically derived verified counts (No invented claims)
  const totalHonorsCount = ACHIEVEMENTS_DATA.length; // 5
  const nationalVictoriesCount = '3×'; // From IIT Bombay NEC: "3-Time Winner across Basic and Advanced Tracks"
  const researchPublicationsCount = ACHIEVEMENTS_DATA.filter((i) => i.category === 'Research').length; // 1
  const leadershipHonorsCount = leadershipItems.length; // 2
  const recognizedDomainsCount = categories.filter((c) => c !== 'All').length; // 4

  return (
    <div id="achievements" style={{ width: '100%', position: 'relative' }}>
      <style>{`
        .ach-grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: var(--space-xl);
        }
        .ach-metrics-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: var(--space-md);
        }
        .ach-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xl);
        }
        .ach-hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: var(--space-2xl);
          align-items: center;
        }
        .ach-card-hover {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .ach-card-hover:hover {
          transform: translateY(-4px);
        }
        @media (max-width: 1024px) {
          .ach-metrics-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .ach-two-col {
            grid-template-columns: 1fr !important;
          }
          .ach-hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .ach-hero-badges {
            justify-content: center !important;
          }
          .ach-hero-links {
            justify-content: center !important;
          }
        }
        @media (max-width: 640px) {
          .ach-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .ach-grid-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 420px) {
          .ach-metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* =======================================================================
          1. CINEMATIC ACHIEVEMENTS HERO
          ======================================================================= */}
      <section style={{ padding: 'var(--space-2xl) 0 var(--space-xl)', position: 'relative', overflow: 'hidden' }}>
        <Container size="lg">
          <div className="ach-hero-grid">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div
                className="ach-hero-badges"
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
                <span style={{ fontSize: '15px' }}>🏆</span>
                <span
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#ff8533',
                  }}
                >
                  Honors &amp; Recognition
                </span>
              </div>

              {/* Oversized Title */}
              <h1
                style={{
                  fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.12,
                  color: 'var(--text-primary)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                MY{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #ff8533 0%, #ff6b00 50%, #ff3b00 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  ACHIEVEMENTS
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

              {/* Verified Supporting Statement */}
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  maxWidth: '680px',
                  marginBottom: 'var(--space-xl)',
                }}
              >
                Milestones that motivate me to keep building practical digital products. From 3-time national
                entrepreneurship competition victories at IIT Bombay and IEEE research paper co-authorship to
                Google Student Ambassador advocacy and technical engineering leadership.
              </p>

              {/* Quick Jump Anchors */}
              <div
                className="ach-hero-links"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  alignItems: 'center',
                }}
              >
                <a
                  href="#achievements-spotlight"
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
                  <span>★ Premier Award</span>
                </a>

                <a
                  href="#achievements-grid"
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
                  <span>Key Honors Grid</span>
                  <span>↓</span>
                </a>

                <a
                  href="#certificates"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(56, 189, 248, 0.08)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    color: '#38bdf8',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <span>📜 Certifications</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual: 3D Trophy Vector Artwork */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <HeroTrophyIllustration />
            </div>
          </div>
        </Container>
      </section>

      {/* =======================================================================
          2. ACHIEVEMENT METRICS STRIP (Strictly Verified & Dynamically Derived)
          ======================================================================= */}
      <section style={{ padding: '0 0 var(--space-2xl)' }}>
        <Container size="lg">
          <div className="ach-metrics-grid">
            {/* Metric 1: Total Honors */}
            <div
              className="ach-card-hover"
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
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 107, 0, 0.12)',
                  border: '2px solid #ff6b00',
                  boxShadow: '0 0 14px rgba(255, 107, 0, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                  fontSize: '20px',
                }}
              >
                🏆
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ff8533', lineHeight: 1.1 }}>
                {totalHonorsCount}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                Verified Honors
              </div>
            </div>

            {/* Metric 2: National Victories */}
            <div
              className="ach-card-hover"
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
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '2px solid #38bdf8',
                  boxShadow: '0 0 14px rgba(56, 189, 248, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                  fontSize: '20px',
                }}
              >
                🥇
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#38bdf8', lineHeight: 1.1 }}>
                {nationalVictoriesCount}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                National Wins (IIT Bombay)
              </div>
            </div>

            {/* Metric 3: Research Submissions */}
            <div
              className="ach-card-hover"
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
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '2px solid #10b981',
                  boxShadow: '0 0 14px rgba(16, 185, 129, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                  fontSize: '20px',
                }}
              >
                📄
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#10b981', lineHeight: 1.1 }}>
                {researchPublicationsCount}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                IEEE Paper Co-Author
              </div>
            </div>

            {/* Metric 4: Leadership Roles */}
            <div
              className="ach-card-hover"
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
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(168, 85, 247, 0.12)',
                  border: '2px solid #a855f7',
                  boxShadow: '0 0 14px rgba(168, 85, 247, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                  fontSize: '20px',
                }}
              >
                ✨
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#a855f7', lineHeight: 1.1 }}>
                {leadershipHonorsCount}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                Leadership &amp; Advocacy
              </div>
            </div>

            {/* Metric 5: Recognized Domains */}
            <div
              className="ach-card-hover"
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.8) 0%, rgba(13, 17, 26, 0.9) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
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
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '2px solid #f59e0b',
                  boxShadow: '0 0 14px rgba(245, 158, 11, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                  fontSize: '20px',
                }}
              >
                🎯
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f59e0b', lineHeight: 1.1 }}>
                {recognizedDomainsCount}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                Impact Domains
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =======================================================================
          3. FEATURED PREMIER RECOGNITION (IIT Bombay NEC Winner)
          ======================================================================= */}
      <section id="achievements-spotlight" style={{ padding: '0 0 var(--space-3xl)' }}>
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
            {/* Background Corner Glow */}
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
                  ★ PREMIER NATIONAL RECOGNITION
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 215, 0, 0.12)',
                    border: '1px solid rgba(255, 215, 0, 0.35)',
                    color: '#ffd700',
                    fontSize: '11px',
                    fontWeight: 700,
                  }}
                >
                  {featuredItem.badgeText}
                </span>
              </div>

              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>🗓</span>
                <span>{featuredItem.dateStr}</span>
              </div>
            </div>

            {/* Title & Organization */}
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3.2vw, 2.25rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '8px',
              }}
            >
              {featuredItem.title}
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
              <span>Organized by E-Cell, {featuredItem.issuer}</span>
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
                National Level
              </span>
            </div>

            {/* Verified Narrative */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '850px',
                marginBottom: 'var(--space-lg)',
              }}
            >
              {featuredItem.description} Evaluated on strategic initiative execution, technological infrastructure,
              inter-college outreach, and entrepreneurial leadership across multiple competitive seasons.
            </p>

            {/* Highlights Strip */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                paddingTop: 'var(--space-md)',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 12px',
                }}
              >
                ⚡ 3-Time National Winner
              </span>

              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 12px',
                }}
              >
                🎯 Basic &amp; Advanced Tracks
              </span>

              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 12px',
                }}
              >
                🏛️ IIT Bombay E-Cell
              </span>

              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  padding: '4px 12px',
                }}
              >
                🚀 Entrepreneurship &amp; Leadership
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* =======================================================================
          4. KEY ACHIEVEMENTS GRID & CATEGORY FILTERS (Matching 15.png)
          ======================================================================= */}
      <section id="achievements-grid" style={{ padding: '0 0 var(--space-3xl)' }}>
        <Container size="lg">
          {/* Section Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 'var(--space-md)',
              marginBottom: 'var(--space-xl)',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#ff8533',
                  marginBottom: '4px',
                }}
              >
                VERIFIED HONORS COLLECTION
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                KEY ACHIEVEMENTS
              </h2>
            </div>

            {/* Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count =
                  cat === 'All'
                    ? ACHIEVEMENTS_DATA.length
                    : ACHIEVEMENTS_DATA.filter((i) => i.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      background: isSelected
                        ? 'linear-gradient(135deg, #ff8533 0%, #ff6b00 100%)'
                        : 'rgba(255, 255, 255, 0.04)',
                      color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                      border: isSelected
                        ? '1px solid #ff6b00'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: isSelected
                        ? '0 4px 14px rgba(255, 107, 0, 0.35)'
                        : 'none',
                    }}
                  >
                    <span>{cat === 'All' ? 'All Recognitions' : cat}</span>
                    <span
                      style={{
                        padding: '1px 6px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '10px',
                        background: isSelected ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                        color: isSelected ? '#ffffff' : 'var(--text-muted)',
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="ach-grid-layout">
            {filteredAchievements.map((item) => {
              const theme = getCategoryColor(item.category);

              return (
                <div
                  key={item.id}
                  className="ach-card-hover"
                  style={{
                    background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.75) 0%, rgba(13, 17, 26, 0.85) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-xl) var(--space-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                  }}
                >
                  {/* Top Centered Circular Icon Badge (Matching 15.png) */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: theme.light,
                      border: `2px solid ${theme.primary}`,
                      boxShadow: `0 0 18px ${theme.glow}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 'var(--space-md)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <AchievementCategoryIcon category={item.category} id={item.id} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                      marginBottom: '6px',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Issuer / Organization */}
                  <div
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 700,
                      color: theme.primary,
                      marginBottom: 'var(--space-sm)',
                    }}
                  >
                    {item.issuer}
                  </div>

                  {/* Verified Description */}
                  <p
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: 'var(--space-lg)',
                      flexGrow: 1,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Bottom Row: Date & Scope Pill */}
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: 'var(--space-md)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: 'var(--font-size-xs)',
                    }}
                  >
                    <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span>🗓</span>
                      <span>{item.dateStr}</span>
                    </span>

                    <span
                      style={{
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: theme.primary,
                        background: theme.light,
                        border: `1px solid ${theme.border}`,
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =======================================================================
          5. TWO-COLUMN DEEP DIVE: LEADERSHIP & RESEARCH/ATHLETICS (Matching 15.png)
          ======================================================================= */}
      <section id="achievements-breakdown" style={{ padding: '0 0 var(--space-3xl)' }}>
        <Container size="lg">
          <div className="ach-two-col">
            {/* Column 1: LEADERSHIP & AMBASSADORSHIP */}
            <div
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.8) 0%, rgba(13, 17, 26, 0.9) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-lg)' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255, 107, 0, 0.12)',
                    border: '1px solid rgba(255, 107, 0, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                  }}
                >
                  👥
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#ff8533', textTransform: 'uppercase' }}>
                    COMMUNITY &amp; TEAMS
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    LEADERSHIP &amp; ADVOCACY
                  </h3>
                </div>
              </div>

              {/* Leadership Items Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', position: 'relative' }}>
                {leadershipItems.map((item, idx) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                      position: 'relative',
                    }}
                  >
                    {/* Glowing Timeline Node */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
                      <div
                        style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          background: '#a855f7',
                          boxShadow: '0 0 10px #a855f7',
                        }}
                      />
                      {idx !== leadershipItems.length - 1 && (
                        <div
                          style={{
                            width: '2px',
                            height: '70px',
                            background: 'linear-gradient(180deg, #a855f7 0%, rgba(168, 85, 247, 0.1) 100%)',
                            margin: '4px 0',
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                          {item.title}
                        </h4>
                        <span style={{ fontSize: '11px', fontWeight: 600, color: '#a855f7' }}>
                          {item.dateStr}
                        </span>
                      </div>

                      <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', marginTop: '2px' }}>
                        {item.issuer}
                      </div>

                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '6px' }}>
                        {item.description}
                      </p>

                      <span
                        style={{
                          display: 'inline-block',
                          marginTop: '6px',
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '10px',
                          fontWeight: 700,
                          background: 'rgba(168, 85, 247, 0.12)',
                          border: '1px solid rgba(168, 85, 247, 0.3)',
                          color: '#c084fc',
                        }}
                      >
                        {item.badgeText}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: RESEARCH & RECOGNITIONS */}
            <div
              style={{
                background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.8) 0%, rgba(13, 17, 26, 0.9) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-xl)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-lg)' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                  }}
                >
                  🔬
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase' }}>
                    SCHOLARLY &amp; COMPETITIVE
                  </div>
                  <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    RESEARCH &amp; EXCELLENCE
                  </h3>
                </div>
              </div>

              {/* Research & Extracurricular Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                {technicalAndResearchItems.map((item) => {
                  const isResearch = item.category === 'Research';
                  const accentColor = isResearch ? '#38bdf8' : '#f59e0b';
                  const bgLight = isResearch ? 'rgba(56, 189, 248, 0.12)' : 'rgba(245, 158, 11, 0.12)';
                  const borderCol = isResearch ? 'rgba(56, 189, 248, 0.3)' : 'rgba(245, 158, 11, 0.3)';

                  return (
                    <div
                      key={item.id}
                      style={{
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        background: 'rgba(13, 17, 26, 0.6)',
                        border: `1px solid ${borderCol}`,
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '6px', marginBottom: '4px' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                          {item.title}
                        </h4>
                        <span style={{ fontSize: '11px', fontWeight: 600, color: accentColor }}>
                          {item.dateStr}
                        </span>
                      </div>

                      <div style={{ fontSize: '12px', fontWeight: 700, color: accentColor, marginBottom: '6px' }}>
                        {item.issuer}
                      </div>

                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {item.description}
                      </p>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                        <span
                          style={{
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '10px',
                            fontWeight: 700,
                            background: bgLight,
                            border: `1px solid ${borderCol}`,
                            color: accentColor,
                          }}
                        >
                          {item.badgeText}
                        </span>

                        {isResearch && (
                          <Link
                            href="/projects"
                            style={{
                              fontSize: '11px',
                              fontWeight: 700,
                              color: '#38bdf8',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <span>BizHub Project</span>
                            <span>↗</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =======================================================================
          6. SEAMLESS BRIDGE TO PHASE 17 CERTIFICATIONS
          ======================================================================= */}
      <section style={{ padding: '0 0 var(--space-xl)' }}>
        <Container size="lg">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(21, 27, 40, 0.85) 0%, rgba(13, 17, 26, 0.95) 100%)',
              border: '1px solid rgba(255, 107, 0, 0.25)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(var(--space-md), 3vw, var(--space-lg)) var(--space-xl)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 'var(--space-md)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div style={{ maxWidth: '650px' }}>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#ff8533', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2px' }}>
                CONTINUOUS SPECIALIZATION
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                Looking for Technical Credentials &amp; Certifications?
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0', lineHeight: 1.5 }}>
                Explore 5 verified engineering specializations across Agentic AI, Data Analytics, Full-Stack Architecture, and UI/UX Design.
              </p>
            </div>

            <a
              href="#certificates"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, #ff8533 0%, #ff6b00 100%)',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(255, 107, 0, 0.35)',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Scroll to Certifications</span>
              <span>📜</span>
            </a>
          </div>
        </Container>
      </section>

      {/* =======================================================================
          7. PHILOSOPHY & CONNECT CTA BANNER (Matching Reference UI 15.png)
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
                <span>✦</span> Every achievement is a step forward.
              </div>

              <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, marginBottom: '6px' }}>
                &ldquo;{PROFILE_DATA.philosophy}&rdquo;
              </div>

              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                — Nirmal Patil • SDE Intern, Evnorix Infotech
              </div>
            </div>

            {/* Right: Quick Action Navigation */}
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
