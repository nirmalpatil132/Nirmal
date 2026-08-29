'use client';

import React, { useState } from 'react';

export interface CertificateFlipCardProps {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
  description: string;
  verificationUrl?: string;
}

export function CertificateFlipCard({
  title,
  issuer,
  issueDate,
  credentialId,
  skills,
  description,
  verificationUrl,
}: CertificateFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((prev) => !prev);

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
        maxWidth: '360px',
        height: '240px',
        cursor: 'pointer',
      }}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Certificate card for ${title}. Press Enter or Space to flip for details.`}
    >
      <div
        className="transform-style-preserve-3d"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform var(--transition-bounce)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT SIDE */}
        <div
          className="backface-hidden"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-lg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-sm)',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--secondary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {issuer}
              </span>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                {issueDate}
              </span>
            </div>
            <h3
              style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                lineHeight: 1.3,
              }}
            >
              {title}
            </h3>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 'var(--space-sm)',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
              Hover or click to flip ↺
            </span>
            <span
              style={{
                padding: 'var(--space-2xs) var(--space-xs)',
                fontSize: 'var(--font-size-xs)',
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Verified Credential
            </span>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="backface-hidden rotate-y-180"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--primary)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-lg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-glow)',
          }}
        >
          <div>
            <h4
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--secondary)',
                marginBottom: 'var(--space-2xs)',
              }}
            >
              Skills & Verification
            </h4>
            <p
              style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-sm)',
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2xs)' }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '2px 6px',
                    fontSize: '10px',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 'var(--space-2xs)',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            {credentialId && (
              <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                ID: {credentialId}
              </span>
            )}
            {verificationUrl ? (
              <a
                href={verificationUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--secondary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  textDecoration: 'underline',
                }}
              >
                Verify Link ↗
              </a>
            ) : (
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                Click to return
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
