'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export interface FooterProps {
  onOpenHealthModal?: () => void;
}

export function Footer({ onOpenHealthModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'var(--space-2xl) 0 var(--space-xl) 0',
        marginTop: 'var(--space-3xl)',
      }}
    >
      <Container size="lg">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xl)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 'var(--space-lg)',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--secondary)',
                  marginBottom: 'var(--space-xs)',
                }}
              >
                [Portfolio Owner Name Placeholder]
              </div>
              <p
                style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text-muted)',
                  maxWidth: '450px',
                  lineHeight: 1.5,
                }}
              >
                Full-Stack Personal Portfolio Application Shell — Phase 3 Structural Foundation. Built using Next.js App Router, Express API, TypeScript, and Prisma.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
              <div>
                <h4
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  Quick Links
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2xs)' }}>
                  <li>
                    <a href="#hero" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                      Home Section
                    </a>
                  </li>
                  <li>
                    <a href="#projects" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                      Featured Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                      Get In Touch
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: 'var(--space-xs)',
                  }}
                >
                  System & Verification
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2xs)' }}>
                  <li>
                    <a href="/design-system" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--secondary)', textDecoration: 'none' }}>
                      Design System Showcase 🎨
                    </a>
                  </li>
                  {onOpenHealthModal && (
                    <li>
                      <button
                        onClick={onOpenHealthModal}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          fontSize: 'var(--font-size-xs)',
                          color: 'var(--primary)',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                      >
                        System Health Status (Phase 1 Check) ⚙️
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: 'var(--space-lg)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-md)',
            }}
          >
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
              © 2026 [Portfolio Owner Name Placeholder]. All rights reserved. Phase 3 Application Shell.
            </span>
            <Button variant="ghost" size="sm" onClick={scrollToTop}>
              Back to Top ↑
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
