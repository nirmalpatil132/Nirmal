'use client';

import React, { useState, useEffect } from 'react';

/**
 * BackToTop — Reusable Smooth Scroll-To-Top Control
 *
 * Appears dynamically when the user scrolls down the page (> 300px).
 * Vertically coordinates with WhatsAppAssistant so floating actions form
 * an intentional, non-overlapping stack at the bottom-right corner.
 * Safe for Next.js static export / browser-only execution.
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on page scroll depth
      if (typeof window !== 'undefined') {
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      if (document.documentElement) {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    } catch {
      window.scrollTo(0, 0);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .back-to-top-btn {
          position: fixed;
          bottom: calc(24px + 60px);
          right: 24px;
          z-index: 110;
          width: 44px;
          height: 44px;
          min-width: 44px;
          min-height: 44px;
          border-radius: 50%;
          background: var(--bg-elevated, #151b28);
          border: 1.5px solid var(--border-orange, rgba(255, 107, 0, 0.35));
          color: var(--primary, #ff6b00);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35), 0 0 12px var(--primary-glow-subtle, rgba(255, 107, 0, 0.15));
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast, 150ms ease), border-color var(--transition-fast, 150ms ease), box-shadow var(--transition-fast, 150ms ease);
          outline: none;
        }
        .back-to-top-btn:hover {
          transform: translateY(-3px);
          border-color: var(--primary, #ff6b00);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4), 0 0 16px var(--primary-glow, rgba(255, 107, 0, 0.35));
        }
        .back-to-top-btn:focus-visible {
          outline: 2px solid var(--primary, #ff6b00);
          outline-offset: 3px;
        }
        @media (max-width: 640px) {
          .back-to-top-btn {
            bottom: calc(18px + env(safe-area-inset-bottom, 0px) + 54px);
            right: calc(18px + env(safe-area-inset-right, 0px));
            width: 42px;
            height: 42px;
            min-width: 42px;
            min-height: 42px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .back-to-top-btn {
            transition: none !important;
            transform: none !important;
          }
        }
      `}} />
      <button
        type="button"
        onClick={scrollToTop}
        className="back-to-top-btn"
        aria-label="Back to top of page"
        title="Back to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
