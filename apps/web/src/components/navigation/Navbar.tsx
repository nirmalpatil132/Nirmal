'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Role', href: '#current-role' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#learning-journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Profiles', href: '#digital-presence' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['hero', 'about', 'current-role', 'experience', 'projects', 'learning-journey', 'skills', 'education', 'certificates', 'achievements', 'digital-presence', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-sticky)',
        width: '100%',
        background: isScrolled ? 'rgba(3, 7, 18, 0.85)' : 'rgba(3, 7, 18, 0.5)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'all 250ms ease',
      }}
    >
      <Container size="lg">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4rem',
          }}
        >
          {/* BRAND LOGO */}
          <a
            href="#hero"
            style={{
              textDecoration: 'none',
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2xs)',
            }}
          >
            <span style={{ color: 'var(--primary)' }}>NIRMAL</span>
            <span style={{ color: 'var(--text-muted)' }}>PATIL</span>
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              WebkitFontSmoothing: 'antialiased',
            }}
            className="hidden-mobile"
          >
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    padding: 'var(--space-2xs) var(--space-xs)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'color 150ms ease',
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            <Link href="/design-system" style={{ textDecoration: 'none' }}>
              <Button variant="ghost" size="sm" style={{ fontSize: '11px' }}>
                Design System
              </Button>
            </Link>
          </nav>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'none',
            }}
            className="show-mobile"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: 'var(--space-md) 0 var(--space-lg)',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-xs)',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-md)',
                  color: 'var(--text-primary)',
                  padding: 'var(--space-xs) 0',
                }}
              >
                {item.label}
              </a>
            ))}

            <Link href="/design-system" style={{ textDecoration: 'none', marginTop: 'var(--space-xs)' }}>
              <Button variant="secondary" size="sm" fullWidth>
                Explore Design System
              </Button>
            </Link>
          </div>
        )}
      </Container>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hidden-mobile {
            display: none !important;
          }
          .show-mobile {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
