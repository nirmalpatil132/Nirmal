'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { WHATSAPP_CONFIG } from '../../data/profile';

/**
 * WhatsAppAssistant — Floating Direct Contact Assistant
 *
 * Provides a persistent, accessible, non-intrusive floating contact affordance
 * at the bottom-right corner of public portfolio pages.
 * Deep-links directly to WhatsApp with Nirmal's verified international phone number
 * and a professional pre-filled message.
 */
export function WhatsAppAssistant() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Exclude on internal design-system showcase route
  if (pathname && pathname.includes('/design-system')) {
    return null;
  }

  const whatsappUrl = WHATSAPP_CONFIG.getDeepLink();
  const showTooltip = isHovered || isFocused;

  return (
    <aside
      aria-label="WhatsApp Contact Assistant"
      style={{
        position: 'fixed',
        bottom: 'var(--wa-bottom, 24px)',
        right: 'var(--wa-right, 24px)',
        zIndex: 120,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        pointerEvents: 'auto',
      }}
    >
      {/* Inline Scoped Styles for Responsiveness & Reduced Motion */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 640px) {
          aside[aria-label="WhatsApp Contact Assistant"] {
            --wa-bottom: 18px !important;
            --wa-right: 18px !important;
          }
          .wa-assistant-tooltip {
            display: none !important;
          }
          .wa-assistant-btn {
            width: 48px !important;
            height: 48px !important;
          }
          .wa-assistant-icon {
            width: 26px !important;
            height: 26px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-assistant-btn,
          .wa-assistant-tooltip,
          .wa-pulse-dot {
            animation: none !important;
            transition: none !important;
          }
        }
        .wa-assistant-btn:focus-visible {
          outline: 2px solid var(--primary, #ff6b00);
          outline-offset: 4px;
        }
        @keyframes waGlowPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.75;
            transform: scale(1.08);
          }
        }
      ` }} />

      {/* DESKTOP HOVER/FOCUS TOOLTIP PILL */}
      <div
        className="wa-assistant-tooltip"
        role="tooltip"
        id="wa-assistant-tooltip-text"
        aria-hidden={!showTooltip}
        style={{
          background: 'rgba(13, 17, 26, 0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 'var(--radius-full, 9999px)',
          padding: '7px 14px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 12px rgba(37, 211, 102, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          whiteSpace: 'nowrap',
          opacity: showTooltip ? 1 : 0,
          transform: showTooltip ? 'translateX(0)' : 'translateX(8px)',
          pointerEvents: 'none',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#25D366',
            boxShadow: '0 0 6px #25D366',
            display: 'inline-block',
          }}
        />
        <span
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--text-primary, #ffffff)',
            letterSpacing: '0.01em',
          }}
        >
          Chat with me on WhatsApp
        </span>
      </div>

      {/* FLOATING ACTION BUTTON LINK */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nirmal on WhatsApp"
        aria-describedby="wa-assistant-tooltip-text"
        className="wa-assistant-btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(20, 26, 38, 0.95) 0%, rgba(13, 17, 26, 0.98) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: isHovered
            ? '1px solid var(--primary, #ff6b00)'
            : '1px solid rgba(37, 211, 102, 0.35)',
          boxShadow: isHovered
            ? '0 8px 28px rgba(0, 0, 0, 0.65), 0 0 20px rgba(255, 107, 0, 0.35), 0 0 14px rgba(37, 211, 102, 0.3)'
            : '0 6px 20px rgba(0, 0, 0, 0.5), 0 0 14px rgba(37, 211, 102, 0.22)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#25D366',
          textDecoration: 'none',
          position: 'relative',
          cursor: 'pointer',
          transform: isHovered ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
          transition: 'transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        {/* ONLINE PRESENCE BADGE */}
        <span
          className="wa-pulse-dot"
          style={{
            position: 'absolute',
            top: '3px',
            right: '3px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#25D366',
            border: '2px solid #07090e',
            boxShadow: '0 0 6px #25D366',
            animation: 'waGlowPulse 2.5s infinite ease-in-out',
          }}
        />

        {/* AUTHENTIC WHATSAPP BRAND SVG ICON */}
        <svg
          className="wa-assistant-icon"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle Outer Bubble Path */}
          <path
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"
            fill="#25D366"
          />
          {/* Inner Phone Silhouette */}
          <path
            d="M17.47 14.39C17.18 14.25 15.76 13.55 15.5 13.45C15.24 13.35 15.05 13.3 14.86 13.59C14.67 13.88 14.12 14.53 13.95 14.72C13.78 14.91 13.62 14.93 13.33 14.79C13.04 14.65 12.11 14.35 11.01 13.37C10.15 12.61 9.57 11.67 9.4 11.38C9.23 11.09 9.38 10.93 9.53 10.79C9.66 10.66 9.82 10.45 9.96 10.29C10.11 10.12 10.16 10 10.26 9.81C10.36 9.61 10.31 9.45 10.24 9.31C10.17 9.17 9.62 7.82 9.39 7.27C9.17 6.74 8.94 6.81 8.77 6.8C8.61 6.8 8.42 6.8 8.23 6.8C8.04 6.8 7.73 6.87 7.47 7.15C7.21 7.44 6.47 8.13 6.47 9.53C6.47 10.93 7.49 12.28 7.63 12.47C7.77 12.66 9.63 15.53 12.48 16.76C13.16 17.05 13.69 17.23 14.1 17.36C14.78 17.58 15.4 17.55 15.89 17.48C16.44 17.4 17.58 16.79 17.82 16.11C18.06 15.43 18.06 14.85 17.99 14.72C17.92 14.6 17.76 14.53 17.47 14.39Z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </aside>
  );
}
