'use client';

import React, { useState } from 'react';

export interface CertificateFlipCardProps {
  id?: string;
  title: string;
  category?: string;
  description: string;
  skills: string[];
  issuer?: string;
  issueDate?: string;
  credentialId?: string;
  verificationUrl?: string;
}

// Specialized icon badge based on credential category / topic
function getCategoryIcon(category: string, title: string) {
  const norm = `${category} ${title}`.toLowerCase();

  if (norm.includes('agentic') || norm.includes('multi-agent') || norm.includes('ai')) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill="#ff6b00" />
        <circle cx="5" cy="7" r="2" fill="#38bdf8" />
        <circle cx="19" cy="7" r="2" fill="#38bdf8" />
        <circle cx="5" cy="17" r="2" fill="#10b981" />
        <circle cx="19" cy="17" r="2" fill="#a855f7" />
        <line x1="12" y1="12" x2="5" y2="7" stroke="rgba(255, 107, 0, 0.5)" strokeWidth="1.5" />
        <line x1="12" y1="12" x2="19" y2="7" stroke="rgba(255, 107, 0, 0.5)" strokeWidth="1.5" />
        <line x1="12" y1="12" x2="5" y2="17" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1.5" />
        <line x1="12" y1="12" x2="19" y2="17" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="1.5" />
      </svg>
    );
  }

  if (norm.includes('data') || norm.includes('analytics') || norm.includes('pandas')) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="13" width="3.5" height="7" rx="1" fill="#38bdf8" />
        <rect x="10.25" y="9" width="3.5" height="11" rx="1" fill="#ff8533" />
        <rect x="16.5" y="4" width="3.5" height="16" rx="1" fill="#ff6b00" />
        <path d="M4 11L11 6L16.5 8.5L20 3" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (norm.includes('full stack') || norm.includes('web') || norm.includes('node')) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="#ff6b00" strokeWidth="1.8" />
        <line x1="7" y1="9" x2="9" y2="11" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="11" x2="7" y2="13" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="13" x2="16" y2="13" stroke="#ff8533" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 20H16M12 16V20" stroke="#ff6b00" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (norm.includes('python') || norm.includes('code') || norm.includes('programming')) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9 2C8.7 2 8.9 3.4 8.9 3.4L8.9 4.8H12.1V5.3H6.4C4.3 5.3 4 7 4 7L4 9.5C4 11.2 5.5 11.2 5.5 11.2H7.2V9.8C7.2 8.1 8.6 8.1 8.6 8.1H11.9C13.4 8.1 13.5 6.8 13.5 6.8L13.5 3.4C13.5 2 11.9 2 11.9 2ZM10.2 3.1C10.7 3.1 11.1 3.5 11.1 4C11.1 4.5 10.7 4.9 10.2 4.9C9.7 4.9 9.3 4.5 9.3 4C9.3 3.5 9.7 3.1 10.2 3.1Z"
          fill="#38bdf8"
        />
        <path
          d="M12.1 22C15.3 22 15.1 20.6 15.1 20.6L15.1 19.2H11.9V18.7H17.6C19.7 18.7 20 17 20 17L20 14.5C20 12.8 18.5 12.8 18.5 12.8H16.8V14.2C16.8 15.9 15.4 15.9 15.4 15.9H12.1C10.6 15.9 10.5 17.2 10.5 17.2L10.5 20.6C10.5 22 12.1 22 12.1 22ZM13.8 20.9C13.3 20.9 12.9 20.5 12.9 20C12.9 19.5 13.3 19.1 13.8 19.1C14.3 19.1 14.7 19.5 14.7 20C14.7 20.5 14.3 20.9 13.8 20.9Z"
          fill="#facc15"
        />
      </svg>
    );
  }

  if (norm.includes('figma') || norm.includes('design') || norm.includes('ui/ux')) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3" width="7" height="6" rx="3" fill="#f87171" />
        <rect x="12" y="3" width="7" height="6" rx="3" fill="#fb923c" />
        <rect x="5" y="9" width="7" height="6" rx="3" fill="#c084fc" />
        <circle cx="15.5" cy="12" r="3.5" fill="#38bdf8" />
        <path d="M5 15C5 13.3431 6.34315 12 8 12H12V18.5C12 20.433 10.433 22 8.5 22C6.567 22 5 20.433 5 18.5V15Z" fill="#4ade80" />
      </svg>
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L14.5 8.5L20.5 9.2L16 13.4L17.2 19.3L12 16.3L6.8 19.3L8 13.4L3.5 9.2L9.5 8.5L12 3Z" stroke="#ff6b00" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255, 107, 0, 0.15)" />
    </svg>
  );
}

export function CertificateFlipCard({
  title,
  category = 'Technical Specialization',
  description,
  skills = [],
  issuer,
  issueDate,
  credentialId,
  verificationUrl,
}: CertificateFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleFlip = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      className="perspective-1000"
      style={{
        width: '100%',
        minHeight: '340px',
        position: 'relative',
        outline: 'none',
      }}
      tabIndex={0}
      role="button"
      aria-expanded={isFlipped}
      aria-label={`Credential: ${title} (${category}). ${isFlipped ? 'Showing skills on back. Press Enter or Space to flip to front.' : 'Press Enter, Space, or tap to flip for verified competencies.'}`}
      onKeyDown={handleKeyDown}
      onClick={() => toggleFlip()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="transform-style-preserve-3d"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          minHeight: '340px',
          transition: 'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          cursor: 'pointer',
        }}
      >
        {/* =========================================================================
            FRONT SIDE OF CREDENTIAL CARD
            ========================================================================= */}
        <div
          className="backface-hidden"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.85) 0%, rgba(10, 13, 20, 0.95) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: isHovered
              ? '1px solid rgba(255, 107, 0, 0.5)'
              : '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-lg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: isHovered
              ? '0 12px 36px rgba(255, 107, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.4)'
              : '0 4px 20px rgba(0, 0, 0, 0.35)',
            transform: isHovered && !isFlipped ? 'translateY(-3px)' : 'none',
            transition: 'border var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast)',
            overflow: 'hidden',
          }}
        >
          {/* Subtle top ambient radial glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div>
            {/* Top row: Distinctive badge icon container + category pill */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-md)',
              }}
            >
              {/* Hexagonal-inspired Icon container */}
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 107, 0, 0.12) 100%)',
                  border: '1px solid rgba(255, 107, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(255, 107, 0, 0.15)',
                }}
              >
                {getCategoryIcon(category, title)}
              </div>

              {/* Status & Verification Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#10b981',
                  letterSpacing: '0.04em',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 6px #10b981',
                  }}
                />
                Verified Specialization
              </div>
            </div>

            {/* Category / Track subtitle */}
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#ff8533',
                marginBottom: '6px',
              }}
            >
              {category}
            </div>

            {/* Credential Title */}
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.35,
                marginBottom: 'var(--space-sm)',
              }}
            >
              {title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.55,
                margin: 0,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </p>
          </div>

          {/* Bottom row: Skill preview count + Interactive Flip hint */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 'var(--space-md)',
              marginTop: 'var(--space-md)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '13px' }}>⚡</span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {skills.length} competencies
              </span>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 107, 0, 0.12)',
                border: '1px solid rgba(255, 107, 0, 0.3)',
                color: '#ff8533',
                fontSize: '12px',
                fontWeight: 600,
                transition: 'background var(--transition-fast), color var(--transition-fast)',
              }}
            >
              <span>Tap for Skills</span>
              <span style={{ fontSize: '13px' }}>↺</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BACK SIDE OF CREDENTIAL CARD
            ========================================================================= */}
        <div
          className="backface-hidden rotate-y-180"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(145deg, rgba(16, 21, 32, 0.98) 0%, rgba(9, 12, 18, 0.98) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 107, 0, 0.45)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-lg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 36px rgba(255, 107, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.5)',
            overflow: 'hidden',
          }}
        >
          {/* Subtle warm corner glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle at top right, rgba(255, 107, 0, 0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div>
            {/* Header: Title summary & Flip Back Icon */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-sm)',
                paddingBottom: 'var(--space-xs)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#ff8533', fontSize: '13px' }}>✦</span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                  }}
                >
                  Technical Competencies
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => toggleFlip(e)}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'var(--text-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '3px 8px',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>↺</span>
                <span>Front</span>
              </button>
            </div>

            {/* Credential Name */}
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-xs)',
                lineHeight: 1.3,
              }}
            >
              {title}
            </h4>

            {/* Curriculum Scope */}
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                marginBottom: 'var(--space-md)',
              }}
            >
              {description}
            </p>

            {/* Skills & Frameworks Acquired */}
            <div style={{ marginBottom: 'var(--space-sm)' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#ff8533',
                  marginBottom: '8px',
                  letterSpacing: '0.04em',
                }}
              >
                Mastered Skills & Tools:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '4px 9px',
                      fontSize: '11px',
                      fontWeight: 500,
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-primary)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid rgba(255, 107, 0, 0.25)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ff6b00' }} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card Back Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 'var(--space-xs)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '11px',
              color: 'var(--text-muted)',
            }}
          >
            {credentialId ? (
              <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>
                ID: {credentialId}
              </span>
            ) : (
              <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>✓</span> Verified Curriculum
              </span>
            )}

            {verificationUrl ? (
              <a
                href={verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  color: 'var(--primary)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                }}
              >
                <span>Verify Credential</span>
                <span>↗</span>
              </a>
            ) : (
              <span style={{ color: 'var(--text-subtle)' }}>
                Tap card to return ↺
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
