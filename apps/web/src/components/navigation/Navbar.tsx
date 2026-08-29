'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section active indicator tracking
      const sections = NAV_ITEMS.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement | null;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-sticky)',
        height: 'var(--header-height)',
        background: scrolled ? 'var(--bg-glass)' : 'rgba(11, 15, 25, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'var(--border-default)' : 'var(--border-subtle)',
        transition: 'all var(--transition-normal)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width-container)',
          margin: '0 auto',
          padding: '0 var(--space-md)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* LOGO PLACEHOLDER */}
        <a
          href="#hero"
          onClick={closeMenu}
          style={{
            textDecoration: 'none',
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'var(--primary)',
              boxShadow: 'var(--shadow-glow)',
            }}
          />
          [Portfolio V2 Shell]
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'var(--space-sm)',
          }}
          className="desktop-nav"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
                  color: isActive ? 'var(--secondary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  padding: 'var(--space-2xs) var(--space-xs)',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all var(--transition-fast)',
                  background: isActive ? 'var(--secondary-light)' : 'transparent',
                }}
              >
                {item.label}
              </a>
            );
          })}
          <a href="/design-system" style={{ textDecoration: 'none', marginLeft: 'var(--space-xs)' }}>
            <Button variant="ghost" size="sm">
              Design System 🎨
            </Button>
          </a>
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '5px',
            width: '40px',
            height: '40px',
            padding: '8px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
          }}
          className="mobile-hamburger-btn"
        >
          <span
            style={{
              height: '2px',
              width: '100%',
              background: 'var(--text-primary)',
              borderRadius: '1px',
              transition: 'transform var(--transition-fast)',
              transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              height: '2px',
              width: '100%',
              background: 'var(--text-primary)',
              borderRadius: '1px',
              opacity: isOpen ? 0 : 1,
              transition: 'opacity var(--transition-fast)',
            }}
          />
          <span
            style={{
              height: '2px',
              width: '100%',
              background: 'var(--text-primary)',
              borderRadius: '1px',
              transition: 'transform var(--transition-fast)',
              transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(11, 15, 25, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 'var(--z-overlay)',
            padding: 'var(--space-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-md)',
            overflowY: 'auto',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-semibold)',
                color: activeSection === item.href ? 'var(--secondary)' : 'var(--text-primary)',
                textDecoration: 'none',
                padding: 'var(--space-xs) 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {item.label}
            </a>
          ))}
          <a href="/design-system" onClick={closeMenu} style={{ textDecoration: 'none', marginTop: 'var(--space-md)' }}>
            <Button variant="primary" fullWidth size="lg">
              Design System Showcase 🎨
            </Button>
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
