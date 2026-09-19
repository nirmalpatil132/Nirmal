'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { PROFILE_DATA } from '../../data/profile';

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

const ROUTE_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'About', href: '/about', icon: '👤' },
  { label: 'Experience', href: '/experience', icon: '💼' },
  { label: 'Projects', href: '/projects', icon: '🚀' },
  { label: 'Skills', href: '/skills', icon: '⚡' },
  { label: 'Journey', href: '/journey', icon: '🗺️' },
  { label: 'Achievements', href: '/achievements', icon: '🏆' },
  { label: 'Contact', href: '/contact', icon: '✉️' },
];

const HOMEPAGE_SECTIONS: NavItem[] = [
  { label: 'Hero Intro', href: '/#hero', icon: '🎯' },
  { label: 'About Narrative', href: '/#about-preview', icon: '👤' },
  { label: 'Active Internship Role', href: '/#current-role', icon: '⚡' },
  { label: 'Featured Products', href: '/#featured-projects-preview', icon: '🚀' },
  { label: 'Core Technical Stack', href: '/#skills-preview', icon: '🛠️' },
  { label: 'Exploration Hub', href: '/#exploration-hub', icon: '🌐' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const pathname = usePathname();

  // Safe pathname helper to prevent null dereference errors during hydration
  const safePathname = pathname || '';

  // Initialize theme from localStorage, default to dark
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('nirmal-theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        setTheme('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    } catch {
      // Ignore when localStorage is inaccessible
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      localStorage.setItem('nirmal-theme', nextTheme);
    } catch {}
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Track scroll state for glass header intensity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  // Smooth scroll handler for section anchor links when on homepage
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, targetHref: string) => {
    setMobileMenuOpen(false);

    if (safePathname === '/') {
      const elementId = targetHref.replace('/#', '').replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        e.preventDefault();
        const navbarOffset = 68; // 4.25rem header height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 'var(--z-sticky)',
          width: '100%',
          background: isScrolled ? 'var(--bg-glass)' : 'var(--bg-glass-card)',
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
            {/* BRAND LOGO — NO EXTRA TRAILING DOT */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
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
            </Link>

            {/* DESKTOP ROUTE NAVIGATION LINKS */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                WebkitFontSmoothing: 'antialiased',
              }}
              className="hidden-mobile"
            >
              {ROUTE_ITEMS.map((item) => {
                const isActive = item.href === '/' ? safePathname === '/' : (safePathname.length > 1 && safePathname.startsWith(item.href));
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`navbar-link-item ${isActive ? 'active-nav-link' : ''}`}
                    style={{
                      textDecoration: 'none',
                      fontSize: '13px',
                      fontWeight: isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
                      color: isActive ? '#ff8533' : 'var(--text-secondary)',
                      padding: '5px 13px',
                      borderRadius: 'var(--radius-full)',
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(255, 107, 0, 0.16) 0%, rgba(255, 107, 0, 0.06) 100%)'
                        : 'transparent',
                      border: isActive ? '1px solid rgba(255, 107, 0, 0.45)' : '1px solid transparent',
                      boxShadow: isActive
                        ? '0 0 12px rgba(255, 107, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                        : 'none',
                      transition: 'all var(--transition-fast)',
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link href="/design-system" style={{ textDecoration: 'none', marginLeft: '4px' }}>
                <Button variant="ghost" size="sm" style={{ fontSize: '11px' }}>
                  Design System ↗
                </Button>
              </Link>

              <a
                href={PROFILE_DATA.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', marginLeft: '6px' }}
              >
                <Button variant="secondary" size="sm" style={{ fontSize: '11px', borderColor: 'var(--border-orange)', padding: '5px 10px' }}>
                  Resume 📄
                </Button>
              </a>

              {/* DESKTOP THEME TOGGLE */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  minWidth: '40px',
                  minHeight: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
                  border: '1px solid var(--border-default)',
                  color: theme === 'dark' ? '#fbbf24' : '#f59e0b',
                  cursor: 'pointer',
                  marginLeft: '8px',
                  transition: 'all var(--transition-fast)',
                  outline: 'none',
                }}
                className="theme-toggle-btn"
              >
                {theme === 'dark' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>
            </nav>

            {/* MOBILE HEADER ACTIONS: THEME TOGGLE + HAMBURGER */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="show-mobile">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  minWidth: '44px',
                  minHeight: '44px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-default)',
                  color: theme === 'dark' ? '#fbbf24' : '#f59e0b',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  outline: 'none',
                }}
                className="theme-toggle-btn"
              >
                {theme === 'dark' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>

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
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  minWidth: '44px',
                }}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE MENU DRAWER OVERLAY - INDEPENDENT VIEWPORT OVERLAY OUTSIDE HEADER BACKDROP-FILTER */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100dvh',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            background: 'var(--bg-primary)',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
          className="show-mobile"
        >
          {/* DRAWER TOP HEADER BAR */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 var(--space-md)',
              height: '4.25rem',
              borderBottom: '1px solid var(--border-subtle)',
              background: 'var(--bg-primary)',
              flexShrink: 0,
              boxSizing: 'border-box',
            }}
          >
            {/* BRAND LOGO — NO EXTRA TRAILING DOT */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
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
            </Link>

            {/* DRAWER HEADER ACTIONS: THEME TOGGLE + CLOSE BUTTON */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  minWidth: '44px',
                  minHeight: '44px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-default)',
                  color: theme === 'dark' ? '#fbbf24' : '#f59e0b',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  outline: 'none',
                }}
                className="theme-toggle-btn"
              >
                {theme === 'dark' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Navigation Menu"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: '1.25rem',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  minWidth: '44px',
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* INTERNAL SCROLLABLE CONTENT AREA */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              padding: 'var(--space-md) var(--space-md) var(--space-2xl)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-lg)',
              maxWidth: '100%',
              boxSizing: 'border-box',
              background: 'radial-gradient(circle at 85% 15%, rgba(255, 107, 0, 0.05) 0%, transparent 40%), var(--bg-primary)',
            }}
          >
            {/* SECTION 1: PRIMARY NAVIGATION */}
            <div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--text-muted)',
                  marginBottom: 'var(--space-xs)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Primary Navigation
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: '10px',
                }}
              >
                {ROUTE_ITEMS.map((item) => {
                  const isActive = item.href === '/' ? safePathname === '/' : (safePathname.length > 1 && safePathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        textDecoration: 'none',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
                        color: isActive ? '#ffffff' : 'var(--text-secondary)',
                        padding: '12px 10px',
                        background: isActive ? 'rgba(255, 107, 0, 0.15)' : 'var(--bg-secondary)',
                        border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        minHeight: '48px',
                        boxSizing: 'border-box',
                        transition: 'all var(--transition-fast)',
                        boxShadow: isActive ? '0 0 16px rgba(255, 107, 0, 0.25)' : '0 2px 6px rgba(0, 0, 0, 0.3)',
                        overflow: 'hidden',
                      }}
                    >
                      <span style={{ fontSize: '1.1rem', width: '22px', textAlign: 'center', flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* SECTION 2: RESUME & QUICK ACCESS */}
            <div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--text-muted)',
                  marginBottom: 'var(--space-xs)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Resume &amp; Quick Access
              </div>

              {/* RESUME CTA */}
              <a
                href={PROFILE_DATA.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minHeight: '48px',
                  padding: '12px 20px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-orange)',
                  borderRadius: 'var(--radius-md)',
                  color: '#ffffff',
                  fontWeight: 'var(--font-weight-bold)',
                  fontSize: 'var(--font-size-sm)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4), 0 0 16px rgba(255, 107, 0, 0.2)',
                  boxSizing: 'border-box',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <span>📄 View / Download Resume (PDF)</span>
                <span style={{ color: 'var(--primary)' }}>↗</span>
              </a>

              {/* QUICK ACCESS SECTIONS */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {HOMEPAGE_SECTIONS.map((sec) => (
                  <Link
                    key={sec.label}
                    href={sec.href}
                    onClick={(e) => handleSectionClick(e, sec.href)}
                    style={{
                      textDecoration: 'none',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--text-secondary)',
                      padding: '10px 8px',
                      borderBottom: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      minHeight: '40px',
                      boxSizing: 'border-box',
                      transition: 'color var(--transition-fast)',
                    }}
                  >
                    <span style={{ fontSize: '0.9rem', width: '20px', textAlign: 'center' }}>{sec.icon}</span>
                    <span>{sec.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* SECTION 3: DEVELOPER UTILITY LINK */}
            <div style={{ paddingTop: 'var(--space-xs)', textAlign: 'center' }}>
              <Link
                href="/design-system"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-muted)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-secondary)',
                }}
              >
                <span>🎨 Design System Reference</span>
                <span style={{ color: 'var(--primary)' }}>↗</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
