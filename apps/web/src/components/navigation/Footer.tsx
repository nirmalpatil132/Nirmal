'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { PROFILE_DATA } from '../../data/profile';
import { SOCIAL_LINKS } from '../../data/social';

export interface FooterProps {
  onOpenHealthModal?: () => void;
}

export function Footer({ onOpenHealthModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-default)',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-xl)',
        marginTop: 'var(--space-3xl)',
      }}
    >
      <Container size="lg">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-2xl)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {/* BRAND COL */}
          <div>
            <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-xs)' }}>
              NIRMAL PATIL
            </div>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
              {PROFILE_DATA.headline}
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-subtle)', fontStyle: 'italic' }}>
              &ldquo;{PROFILE_DATA.philosophy}&rdquo;
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>
              Portfolio Navigation
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xs)', fontSize: 'var(--font-size-xs)' }}>
              <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
              <Link href="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About</Link>
              <Link href="/experience" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Experience</Link>
              <Link href="/projects" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Projects</Link>
              <Link href="/skills" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Skills</Link>
              <Link href="/journey" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Journey</Link>
              <Link href="/achievements" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Achievements</Link>
              <Link href="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contact</Link>
              <a
                href={PROFILE_DATA.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'var(--font-weight-semibold)', gridColumn: 'span 2', marginTop: '4px' }}
              >
                📄 Verified Resume (PDF) ↗
              </a>
            </div>
          </div>

          {/* SYSTEM ARCHITECTURE & SOCIAL */}
          <div>
            <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>
              Developer &amp; Architecture
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', fontSize: 'var(--font-size-xs)' }}>
              <Link href="/design-system" style={{ color: 'var(--secondary)', textDecoration: 'none' }}>
                🎨 Phase 2 Design System Showcase ↗
              </Link>
              {onOpenHealthModal && (
                <button
                  onClick={onOpenHealthModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary)',
                    fontSize: 'var(--font-size-xs)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                  }}
                >
                  ⚡ Check Architecture Status (`GET /api/v1/health`)
                </button>
              )}
              <div style={{ display: 'flex', gap: 'var(--space-xs)', marginTop: 'var(--space-xs)', flexWrap: 'wrap' }}>
                {SOCIAL_LINKS.slice(0, 5).map((link) => (
                  <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" size="sm" style={{ fontSize: '11px' }}>
                      {link.icon} {link.platform}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
            paddingTop: 'var(--space-md)',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {currentYear} {PROFILE_DATA.fullName}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
