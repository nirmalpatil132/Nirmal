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

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = [
        'hero',
        'about',
        'current-role',
        'experience',
        'projects',
        'learning-journey',
        'skills',
        'education',
        'certificates',
        'achievements',
        'digital-presence',
        'contact',
      ];
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-sticky)',
        width: '100%',
        background: isScrolled ? 'rgba(7, 9, 14, 0.88)' : 'rgba(7, 9, 14, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'all var(--transition-normal)',
      }}
    >
      <Container size="lg">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4.25rem',
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
              gap: '6px',
            }}
          >
            <span style={{ color: 'var(--primary)' }}>NIRMAL</span>
            <span style={{ color: 'var(--text-muted)' }}>PATIL</span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--primary)',
                boxShadow: '0 0 8px var(--primary)',
                display: 'inline-block',
              }}
            />
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
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
                    padding: '6px 10px',
                    borderRadius: 'var(--radius-sm)',
                    background: isActive ? 'var(--primary-light)' : 'transparent',
                    border: isActive ? '1px solid var(--border-orange)' : '1px solid transparent',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            <Link href="/design-system" style={{ textDecoration: 'none', marginLeft: '6px' }}>
              <Button variant="ghost" size="sm" style={{ fontSize: '11px' }}>
                Design System ↗
              </Button>
            </Link>
          </nav>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: '1.25rem',
              padding: '6px 12px',
              cursor: 'pointer',
              display: 'none',
            }}
            className="show-mobile"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU DRAWER OVERLAY */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '4.25rem',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(7, 9, 14, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 'var(--z-overlay)',
            padding: 'var(--space-lg) var(--space-md)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-xs)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation Menu
            </div>
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
                    color: isActive ? 'var(--primary)' : 'var(--text-primary)',
                    padding: 'var(--space-sm) var(--space-md)',
                    background: isActive ? 'var(--primary-light)' : 'var(--bg-secondary)',
                    border: isActive ? '1px solid var(--border-orange)' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{item.label}</span>
                  <span style={{ color: isActive ? 'var(--primary)' : 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>➔</span>
                </a>
              );
            })}
          </div>

          <div style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
            <Link href="/design-system" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="secondary" size="md" fullWidth>
                🎨 Explore Design System ↗
              </Button>
            </Link>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 1024px) {
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
