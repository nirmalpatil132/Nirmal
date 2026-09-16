'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { Container } from '../../components/ui/Container';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { PROFESSIONAL_EXPERIENCE, LEADERSHIP_EXPERIENCE, ExperienceItem } from '../../data/experience';
import { PROFILE_DATA } from '../../data/profile';
import { PROJECTS_DATA } from '../../data/projects';

// Organization Brand Emblems
function OrganizationBadge({ id, organization }: { id: string; organization: string }) {
  if (id === 'evnorix') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          background: 'rgba(13, 17, 26, 0.9)',
          border: '1px solid rgba(255, 107, 0, 0.25)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 4L12 12L4 20" stroke="#ff6b00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 4L20 12L12 20" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.08em', color: '#ffffff' }}>
          EVNORIX
        </span>
      </div>
    );
  }

  if (id === 'codetech') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          background: 'rgba(13, 17, 26, 0.9)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#38bdf8" strokeWidth="2" />
          <path d="M14.5 8.5C13.5 7.5 11 7.5 9.5 9C8 10.5 8 13.5 9.5 15C11 16.5 13.5 16.5 14.5 15.5" stroke="#ff6b00" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.08em', color: '#ffffff' }}>
          CODETECH
        </span>
      </div>
    );
  }

  if (id === 'ecell') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          background: 'rgba(13, 17, 26, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div
          style={{
            width: '22px',
            height: '22px',
            borderRadius: '4px',
            background: 'linear-gradient(135deg, #ff6b00 0%, #8b5cf6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: 900,
            color: '#fff',
          }}
        >
          E
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.06em', color: '#ffffff', lineHeight: 1.1 }}>
            E-CELL
          </span>
          <span style={{ fontSize: '9px', fontWeight: 600, color: '#94a3b8', letterSpacing: '0.04em' }}>
            GCOEK
          </span>
        </div>
      </div>
    );
  }

  if (id === 'csesa') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          background: 'rgba(13, 17, 26, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8.5" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="3.5" fill="#ff6b00" />
        </svg>
        <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.06em', color: '#ffffff' }}>
          CSESA
        </span>
      </div>
    );
  }

  if (id === 'gsa') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          background: 'rgba(13, 17, 26, 0.9)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#gemini-gradient)" />
          <defs>
            <linearGradient id="gemini-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="0.5" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#ff6b00" />
            </linearGradient>
          </defs>
        </svg>
        <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.06em', color: '#ffffff' }}>
          GEMINI AI
        </span>
      </div>
    );
  }

  // Fallback monogram
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        background: 'rgba(13, 17, 26, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 'var(--radius-md)',
      }}
    >
      <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)' }}>
        {organization.split(' ')[0]}
      </span>
    </div>
  );
}

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'professional' | 'leadership'>('all');

  const allTimelineItems: ExperienceItem[] = [
    ...PROFESSIONAL_EXPERIENCE,
    ...LEADERSHIP_EXPERIENCE,
  ];

  const filteredItems = allTimelineItems.filter((item) => {
    if (activeFilter === 'professional') return item.type === 'professional';
    if (activeFilter === 'leadership') return item.type === 'leadership' || item.type === 'ambassador';
    return true;
  });

  const professionalCount = PROFESSIONAL_EXPERIENCE.length;
  const leadershipCount = LEADERSHIP_EXPERIENCE.length;
  const totalRolesCount = allTimelineItems.length;
  const projectCount = PROJECTS_DATA.length;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + 1.5rem)', paddingBottom: 'var(--space-3xl)' }}>
        <Container size="lg">
          {/* ========================================================
              1. EXPERIENCE HERO SECTION (Title + Portrait)
             ======================================================== */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-xl)',
              alignItems: 'center',
              marginBottom: 'var(--space-3xl)',
              position: 'relative',
            }}
          >
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', zIndex: 2 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 107, 0, 0.4)',
                    background: 'rgba(255, 107, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(255, 107, 0, 0.25)',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="#ff6b00" strokeWidth="2" />
                    <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="#ff6b00" strokeWidth="2" />
                    <path d="M12 12V14" stroke="#ff8533" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <Badge variant="primary">CAREER & LEADERSHIP STORY</Badge>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  lineHeight: 1.08,
                  textTransform: 'uppercase',
                }}
              >
                MY <span className="text-gradient-orange">EXPERIENCE</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  maxWidth: '540px',
                }}
              >
                Every experience has taught me something valuable and shaped the developer I am today — from backend systems &amp; fintech architectures to community leadership.
              </p>

              {/* Orange decorative accent bar */}
              <div
                style={{
                  width: '56px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b00, #ff8533)',
                  borderRadius: '9999px',
                  boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)',
                }}
              />

              {/* Filter Tabs */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginTop: 'var(--space-xs)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveFilter('all')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: activeFilter === 'all' ? '1px solid #ff6b00' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: activeFilter === 'all' ? 'rgba(255, 107, 0, 0.15)' : 'rgba(13, 17, 26, 0.7)',
                    color: activeFilter === 'all' ? '#ff8533' : 'var(--text-secondary)',
                    boxShadow: activeFilter === 'all' ? '0 0 14px rgba(255, 107, 0, 0.3)' : 'none',
                  }}
                >
                  All Experiences ({totalRolesCount})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('professional')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: activeFilter === 'professional' ? '1px solid #ff6b00' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: activeFilter === 'professional' ? 'rgba(255, 107, 0, 0.15)' : 'rgba(13, 17, 26, 0.7)',
                    color: activeFilter === 'professional' ? '#ff8533' : 'var(--text-secondary)',
                    boxShadow: activeFilter === 'professional' ? '0 0 14px rgba(255, 107, 0, 0.3)' : 'none',
                  }}
                >
                  💼 Professional Internships ({professionalCount})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('leadership')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: activeFilter === 'leadership' ? '1px solid #ff6b00' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: activeFilter === 'leadership' ? 'rgba(255, 107, 0, 0.15)' : 'rgba(13, 17, 26, 0.7)',
                    color: activeFilter === 'leadership' ? '#ff8533' : 'var(--text-secondary)',
                    boxShadow: activeFilter === 'leadership' ? '0 0 14px rgba(255, 107, 0, 0.3)' : 'none',
                  }}
                >
                  🎯 Leadership &amp; Community ({leadershipCount})
                </button>
              </div>
            </div>

            {/* Right Hero Visual: Authentic Portrait with Orange Constellation / Glow */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '340px',
              }}
            >
              {/* Radial Orange Glow Backdrop */}
              <div
                style={{
                  position: 'absolute',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 107, 0, 0.28) 0%, rgba(255, 107, 0, 0.05) 50%, transparent 70%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Constellation / Network SVG Lines (matching reference 13) */}
              <svg
                width="420"
                height="320"
                viewBox="0 0 420 320"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                  opacity: 0.65,
                }}
              >
                <circle cx="210" cy="160" r="140" stroke="rgba(255, 107, 0, 0.15)" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="210" cy="160" r="95" stroke="rgba(255, 107, 0, 0.22)" strokeWidth="1" />
                
                {/* Connected nodes */}
                <line x1="120" y1="90" x2="190" y2="60" stroke="rgba(255, 107, 0, 0.25)" strokeWidth="1" />
                <line x1="190" y1="60" x2="280" y2="80" stroke="rgba(255, 107, 0, 0.25)" strokeWidth="1" />
                <line x1="280" y1="80" x2="340" y2="150" stroke="rgba(255, 107, 0, 0.25)" strokeWidth="1" />
                <line x1="120" y1="90" x2="80" y2="180" stroke="rgba(255, 107, 0, 0.2)" strokeWidth="1" />
                <line x1="340" y1="150" x2="310" y2="240" stroke="rgba(255, 107, 0, 0.2)" strokeWidth="1" />

                <circle cx="120" cy="90" r="3" fill="#ff6b00" />
                <circle cx="190" cy="60" r="3.5" fill="#ff8533" />
                <circle cx="280" cy="80" r="3" fill="#ff6b00" />
                <circle cx="340" cy="150" r="3.5" fill="#38bdf8" />
                <circle cx="80" cy="180" r="2.5" fill="#ff6b00" />
                <circle cx="310" cy="240" r="3" fill="#ff6b00" />
              </svg>

              {/* Portrait Image with Fade Mask */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '360px',
                  height: '360px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  zIndex: 1,
                }}
              >
                <Image
                  src={PROFILE_DATA.heroPortraitPath}
                  alt="Nirmal Patil — Software Developer"
                  width={380}
                  height={440}
                  priority
                  style={{
                    width: 'auto',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.8))',
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          </section>

          {/* ========================================================
              2. TWO-COLUMN MAIN CONTENT: TIMELINE + SIDEBAR
             ======================================================== */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr)',
              gap: 'var(--space-2xl)',
              alignItems: 'start',
            }}
            className="experience-two-column-grid"
          >
            {/* Inline responsive style for desktop 2-column */}
            <style>{`
              @media (min-width: 1024px) {
                .experience-two-column-grid {
                  grid-template-columns: 1fr 360px !important;
                }
              }
              @media (max-width: 640px) {
                .timeline-card-wrapper {
                  padding-left: 28px !important;
                }
                .timeline-mobile-date {
                  display: block !important;
                }
                .timeline-desktop-date {
                  display: none !important;
                }
                .timeline-spine-line {
                  left: 10px !important;
                }
                .timeline-node-position {
                  left: 2px !important;
                }
              }
              @media (min-width: 641px) {
                .timeline-card-wrapper {
                  padding-left: 0 !important;
                }
                .timeline-mobile-date {
                  display: none !important;
                }
                .timeline-desktop-date {
                  display: block !important;
                }
              }
            `}</style>

            {/* LEFT / CENTER COLUMN: TIMELINE ITEMS */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              {/* Vertical Orange Timeline Guide Line */}
              <div
                className="timeline-spine-line"
                style={{
                  position: 'absolute',
                  left: '160px',
                  top: '20px',
                  bottom: '20px',
                  width: '2px',
                  background: 'linear-gradient(180deg, #ff6b00 0%, rgba(255, 107, 0, 0.4) 70%, rgba(255, 107, 0, 0.05) 100%)',
                  zIndex: 0,
                }}
              />

              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="timeline-card-wrapper"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '140px 40px 1fr',
                    alignItems: 'flex-start',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Desktop Date Column */}
                  <div
                    className="timeline-desktop-date"
                    style={{
                      textAlign: 'right',
                      paddingTop: '20px',
                      paddingRight: '12px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: item.isCurrent ? '#ff8533' : 'var(--text-primary)',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.period.split(' — ')[0]}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: item.isCurrent ? '#ff6b00' : 'var(--text-muted)',
                        fontWeight: 600,
                        marginTop: '2px',
                      }}
                    >
                      {item.isCurrent ? 'Present' : (item.period.split(' — ')[1] || '')}
                    </div>
                    {item.isCurrent && (
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '10px',
                          fontWeight: 700,
                          color: '#10b981',
                          background: 'rgba(16, 185, 129, 0.15)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          borderRadius: 'var(--radius-full)',
                          padding: '2px 8px',
                          marginTop: '6px',
                        }}
                      >
                        Active
                      </span>
                    )}
                  </div>

                  {/* Dual-Ring Glowing Timeline Node */}
                  <div
                    className="timeline-node-position"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      paddingTop: '22px',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: item.isCurrent ? '#ff6b00' : 'var(--bg-primary)',
                        border: '3px solid #ff6b00',
                        boxShadow: item.isCurrent
                          ? '0 0 16px #ff6b00, 0 0 24px rgba(255, 107, 0, 0.5)'
                          : '0 0 10px rgba(255, 107, 0, 0.5)',
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {item.isCurrent && (
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#ffffff',
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div
                    style={{
                      background: 'rgba(13, 17, 26, 0.85)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: item.isCurrent
                        ? '1px solid rgba(255, 107, 0, 0.35)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--radius-xl)',
                      padding: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                      boxShadow: item.isCurrent
                        ? '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 107, 0, 0.12)'
                        : '0 8px 25px rgba(0, 0, 0, 0.4)',
                      transition: 'transform 0.2s ease, border-color 0.2s ease',
                      position: 'relative',
                    }}
                  >
                    {/* Mobile Date Tag (visible on small screens) */}
                    <div
                      className="timeline-mobile-date"
                      style={{
                        marginBottom: '8px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: item.isCurrent ? '#ff8533' : 'var(--text-muted)',
                      }}
                    >
                      🗓 {item.period} {item.isCurrent && '• Active'}
                    </div>

                    {/* Card Header: Role & Organization + Right Emblem */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '12px',
                        marginBottom: '12px',
                      }}
                    >
                      <div style={{ flex: 1, minWidth: '220px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                          <h2
                            style={{
                              fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                              fontWeight: 800,
                              color: '#ffffff',
                              letterSpacing: '-0.01em',
                              lineHeight: 1.25,
                            }}
                          >
                            {item.role}
                          </h2>
                          {item.isCurrent && (
                            <span
                              style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: '#ff8533',
                                background: 'rgba(255, 107, 0, 0.15)',
                                border: '1px solid rgba(255, 107, 0, 0.3)',
                                borderRadius: 'var(--radius-full)',
                                padding: '2px 8px',
                              }}
                            >
                              ⚡ CURRENT ROLE
                            </span>
                          )}
                        </div>

                        <div
                          style={{
                            fontSize: '15px',
                            fontWeight: 700,
                            color: '#ff6b00',
                            marginTop: '2px',
                          }}
                        >
                          {item.organization}
                        </div>

                        {item.location && (
                          <div
                            style={{
                              fontSize: '12px',
                              color: 'var(--text-muted)',
                              marginTop: '4px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <span>📍 {item.location}</span>
                            {item.workArrangement && <span>• {item.workArrangement}</span>}
                          </div>
                        )}
                      </div>

                      {/* Right Organization Emblem Badge */}
                      <OrganizationBadge id={item.id} organization={item.organization} />
                    </div>

                    {/* Description narrative */}
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                        marginBottom: '14px',
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Key Contributions & Responsibilities */}
                    <div style={{ marginBottom: '16px' }}>
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          marginBottom: '8px',
                        }}
                      >
                        Key Contributions &amp; Workflows:
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {item.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              fontSize: '13px',
                              color: '#cbd5e1',
                              lineHeight: 1.5,
                            }}
                          >
                            <span style={{ color: '#ff6b00', fontWeight: 900, flexShrink: 0 }}>▹</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology / Skill Pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        paddingTop: '12px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {item.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(21, 27, 40, 0.8)',
                            color: '#e2e8f0',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDEBAR: SUPPORTING CARDS (matching reference 13) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', position: 'sticky', top: '100px' }}>
              {/* Card 1: EXPERIENCE AT A GLANCE */}
              <div
                style={{
                  background: 'rgba(13, 17, 26, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-lg)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '8px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="7" width="20" height="14" rx="2" stroke="#8b5cf6" strokeWidth="2" />
                      <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="#8b5cf6" strokeWidth="2" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.05em', color: '#ffffff' }}>
                    EXPERIENCE AT A GLANCE
                  </span>
                </div>

                {/* 3 Metric Columns */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                    textAlign: 'center',
                    paddingTop: '8px',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#ff6b00', lineHeight: 1.1 }}>
                      {professionalCount}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                      Internships
                    </div>
                  </div>
                  <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#38bdf8', lineHeight: 1.1 }}>
                      {totalRolesCount}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                      Total Roles
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#8b5cf6', lineHeight: 1.1 }}>
                      {projectCount}+
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                      Projects Built
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: WHAT I GAINED */}
              <div
                style={{
                  background: 'rgba(13, 17, 26, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-lg)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.05em', color: '#ffffff' }}>
                    WHAT I GAINED
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Hands-on full-stack & fintech application workflows',
                    'Scalable backend engineering & RESTful API architectures',
                    'Technical leadership & mentoring junior developers',
                    'Departmental community building & technical workshops',
                    'AI advocacy & developer demonstrations with Google Gemini',
                  ].map((gain, gIdx) => (
                    <div key={gIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '14px', flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.45 }}>{gain}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: PHILOSOPHY / QUOTE */}
              <div
                style={{
                  background: 'rgba(13, 17, 26, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 107, 0, 0.2)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-lg)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 107, 0, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Quotation icon */}
                <div
                  style={{
                    fontSize: '44px',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'rgba(255, 107, 0, 0.35)',
                    fontFamily: 'Georgia, serif',
                    marginBottom: '4px',
                  }}
                >
                  “
                </div>

                <p
                  style={{
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: '#f1f5f9',
                    lineHeight: 1.6,
                    marginBottom: '14px',
                  }}
                >
                  Experience is not just about time spent, it&apos;s about the value you create, the problems you solve, and the systems you build.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      height: '2px',
                      width: '40px',
                      background: 'linear-gradient(90deg, #ff6b00, transparent)',
                    }}
                  />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#ff8533' }}>
                    — Nirmal Patil
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              3. EXPERIENCE HIGHLIGHTS (matching reference 6)
             ======================================================== */}
          <section
            style={{
              marginTop: 'var(--space-3xl)',
              background: 'rgba(13, 17, 26, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-xl)' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 107, 0, 0.4)',
                  background: 'rgba(255, 107, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.06em', color: '#ffffff', textTransform: 'uppercase' }}>
                EXPERIENCE HIGHLIGHTS
              </span>
            </div>

            {/* Grid of 4 Highlight Metric Boxes */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-lg)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {/* Highlight 1 */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(21, 27, 40, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>🗓</span>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#ffffff' }}>1+</div>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#ff8533', marginBottom: '4px' }}>
                  Years of Experience
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Hands-on software development and backend engineering internships.
                </p>
              </div>

              {/* Highlight 2 */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(21, 27, 40, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>💼</span>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#ffffff' }}>{totalRolesCount}+</div>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#38bdf8', marginBottom: '4px' }}>
                  Roles &amp; Positions
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Diverse roles across engineering, student leadership &amp; developer advocacy.
                </p>
              </div>

              {/* Highlight 3 */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(21, 27, 40, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>👥</span>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#ffffff' }}>4+</div>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#8b5cf6', marginBottom: '4px' }}>
                  Developers Mentored
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Led technical developer core team at E-Cell GCOEK building student portals.
                </p>
              </div>

              {/* Highlight 4 */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(21, 27, 40, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px' }}>&lt;/&gt;</span>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#ffffff' }}>{projectCount}+</div>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#10b981', marginBottom: '4px' }}>
                  Projects Delivered
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Contributed to impactful applications, fintech systems &amp; web solutions.
                </p>
              </div>
            </div>

            {/* Subtle decorative dot pattern grid on right side */}
            <div
              style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                bottom: '20px',
                width: '280px',
                backgroundImage: 'radial-gradient(rgba(255, 107, 0, 0.25) 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
                opacity: 0.35,
                pointerEvents: 'none',
                maskImage: 'linear-gradient(to left, black 30%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 100%)',
              }}
            />
          </section>

          {/* ========================================================
              4. CAREER / FUTURE CTA BANNER (matching reference 13)
             ======================================================== */}
          <section
            style={{
              marginTop: 'var(--space-xl)',
              background: 'rgba(13, 17, 26, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 107, 0, 0.25)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.2rem, 2.5vw, 1.8rem) clamp(1.5rem, 3vw, 2.2rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 'var(--space-md)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: '280px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4.5 16.5C3.5 17.5 3 21 3 21C3 21 6.5 20.5 7.5 19.5L14.5 12.5L9.5 7.5L4.5 16.5Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.5 12.5L16.5 10.5C18 9 19.5 9 20.5 8C21.5 7 21 5 21 5C21 5 19 4.5 18 5.5C17 6.5 17 8 15.5 9.5L13.5 11.5" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.4,
                  }}
                >
                  I&apos;m just getting started. Many more experiences and learnings to come!
                </p>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Open for Software Developer Internships &amp; Full-Stack Engineering roles.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="md" style={{ boxShadow: 'var(--shadow-glow)' }}>
                  Let&apos;s build the future together →
                </Button>
              </Link>
              <Link href="/projects" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="md">
                  Explore Projects ➔
                </Button>
              </Link>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
