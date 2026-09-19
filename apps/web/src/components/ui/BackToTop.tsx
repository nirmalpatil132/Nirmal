'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { scrollToTop, getScrollTop } from '../../utils/scroll';

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
  const isScrollingToTopRef = useRef(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    const top = getScrollTop();

    // If a smooth scroll-to-top was initiated, remain hidden until reaching top
    if (isScrollingToTopRef.current) {
      if (top <= 50) {
        isScrollingToTopRef.current = false;
        setIsVisible(false);
      }
      return;
    }

    setIsVisible(top > 300);
  }, []);

  // Ensure browser scroll restoration doesn't falsely retain scroll on fresh load
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Listen to window scroll and resize events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  // Re-check scroll position on route transitions
  useEffect(() => {
    isScrollingToTopRef.current = false;
    handleScroll();
  }, [pathname, handleScroll]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isScrollingToTopRef.current = true;
    setIsVisible(false);
    scrollToTop();
    // Safety timeout to ensure isScrollingToTop is reset even if scroll ends without event
    window.setTimeout(() => {
      isScrollingToTopRef.current = false;
    }, 1000);
  };

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
          transition: opacity 220ms ease, transform 220ms ease, visibility 220ms ease, border-color 150ms ease, box-shadow 150ms ease;
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
            width: 44px;
            height: 44px;
            min-width: 44px;
            min-height: 44px;
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
        onClick={handleClick}
        className="back-to-top-btn"
        aria-label="Back to top"
        title="Back to top"
        tabIndex={isVisible ? 0 : -1}
        aria-hidden={!isVisible}
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          pointerEvents: isVisible ? 'auto' : 'none',
          transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        }}
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
