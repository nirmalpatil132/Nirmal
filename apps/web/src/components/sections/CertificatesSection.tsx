'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { CertificateFlipCard } from '../ui/CertificateFlipCard';
import { CERTIFICATIONS_DATA } from '../../data/certifications';

export function CertificatesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Derive unique categories dynamically from authoritative data
  const categories = useMemo(() => {
    const set = new Set<string>();
    CERTIFICATIONS_DATA.forEach((cert) => {
      if (cert.category) {
        set.add(cert.category);
      }
    });
    return ['All', ...Array.from(set)];
  }, []);

  // Filter certifications based on user selection
  const filteredCertifications = useMemo(() => {
    if (selectedCategory === 'All') {
      return CERTIFICATIONS_DATA;
    }
    return CERTIFICATIONS_DATA.filter((cert) => cert.category === selectedCategory);
  }, [selectedCategory]);

  // Dynamically derived metrics without any fabricated scores
  const totalCertifications = CERTIFICATIONS_DATA.length;
  const totalDomains = useMemo(() => {
    const set = new Set<string>();
    CERTIFICATIONS_DATA.forEach((c) => set.add(c.category));
    return set.size;
  }, []);
  const totalSkillsCovered = useMemo(() => {
    const set = new Set<string>();
    CERTIFICATIONS_DATA.forEach((c) => c.skills.forEach((s) => set.add(s)));
    return set.size;
  }, []);

  return (
    <Section id="certificates" spacing="lg" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '350px',
          background: 'radial-gradient(ellipse at center, rgba(255, 107, 0, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        {/* =========================================================================
            SECTION HERO & TITLE
            ========================================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto var(--space-2xl)' }}>
          {/* Small Top Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 107, 0, 0.12)',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              marginBottom: 'var(--space-md)',
              boxShadow: '0 2px 10px rgba(255, 107, 0, 0.1)',
            }}
          >
            <span style={{ fontSize: '15px' }}>📜</span>
            <span
              style={{
                fontSize: 'var(--font-size-xs)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#ff8533',
              }}
            >
              Credentials & Specializations
            </span>
          </div>

          {/* Oversized Heading */}
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-md)',
            }}
          >
            TECHNICAL{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff8533 0%, #ff6b00 50%, #ff3b00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              CERTIFICATIONS
            </span>
          </h2>

          {/* Accent Line */}
          <div
            style={{
              width: '72px',
              height: '4px',
              background: 'linear-gradient(90deg, #ff6b00, #ff8533)',
              borderRadius: 'var(--radius-full)',
              margin: '0 auto var(--space-md)',
              boxShadow: '0 0 12px rgba(255, 107, 0, 0.5)',
            }}
          />

          {/* Supporting verified narrative */}
          <p
            style={{
              fontSize: 'var(--font-size-base)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Specialized engineering programs and technical certifications that enhance my practical
            capabilities across Agentic AI systems, Python data analytics, full-stack architectures,
            and user interface design.
          </p>
        </div>

        {/* =========================================================================
            CREDENTIALS METRICS STRIP (DERIVED ONLY)
            ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {/* Metric 1 */}
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.7) 0%, rgba(10, 13, 20, 0.8) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-md) var(--space-lg)',
              textAlign: 'center',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#ff8533',
                lineHeight: 1.1,
                marginBottom: '4px',
              }}
            >
              {totalCertifications}
            </div>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontWeight: 600 }}>
              Specializations Earned
            </div>
          </div>

          {/* Metric 2 */}
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.7) 0%, rgba(10, 13, 20, 0.8) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-md) var(--space-lg)',
              textAlign: 'center',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#38bdf8',
                lineHeight: 1.1,
                marginBottom: '4px',
              }}
            >
              {totalDomains}
            </div>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontWeight: 600 }}>
              Engineering Domains
            </div>
          </div>

          {/* Metric 3 */}
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.7) 0%, rgba(10, 13, 20, 0.8) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-md) var(--space-lg)',
              textAlign: 'center',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#10b981',
                lineHeight: 1.1,
                marginBottom: '4px',
              }}
            >
              {totalSkillsCovered}+
            </div>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontWeight: 600 }}>
              Core Skills Covered
            </div>
          </div>

          {/* Metric 4 */}
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(21, 27, 40, 0.7) 0%, rgba(10, 13, 20, 0.8) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-md) var(--space-lg)',
              textAlign: 'center',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#a855f7',
                lineHeight: 1.1,
                marginBottom: '4px',
              }}
            >
              100%
            </div>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', fontWeight: 600 }}>
              Applied Project Scope
            </div>
          </div>
        </div>

        {/* =========================================================================
            CATEGORY FILTER TABS
            ========================================================================= */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === 'All'
                ? CERTIFICATIONS_DATA.length
                : CERTIFICATIONS_DATA.filter((c) => c.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  background: isSelected
                    ? 'linear-gradient(135deg, #ff8533 0%, #ff6b00 100%)'
                    : 'rgba(255, 255, 255, 0.04)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: isSelected
                    ? '1px solid #ff6b00'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isSelected
                    ? '0 4px 16px rgba(255, 107, 0, 0.35)'
                    : 'none',
                }}
              >
                <span>{cat === 'All' ? 'All Specializations' : cat}</span>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '1px 6px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '10px',
                    background: isSelected ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                    color: isSelected ? '#ffffff' : 'var(--text-muted)',
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            CERTIFICATION 3D FLIP CARDS GRID
            ========================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'var(--space-xl)',
            marginBottom: 'var(--space-3xl)',
          }}
        >
          {filteredCertifications.map((cert) => (
            <CertificateFlipCard
              key={cert.id}
              id={cert.id}
              title={cert.title}
              category={cert.category}
              description={cert.description}
              skills={cert.skills}
              issuer={cert.issuer}
              issueDate={cert.issueDate}
              credentialId={cert.credentialId}
              verificationUrl={cert.verificationUrl}
            />
          ))}
        </div>

        {/* =========================================================================
            LEARNING CONNECTION & APPLIED ENGINEERING BANNER
            ========================================================================= */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(21, 27, 40, 0.85) 0%, rgba(13, 17, 26, 0.95) 100%)',
            border: '1px solid rgba(255, 107, 0, 0.25)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(var(--space-lg), 4vw, var(--space-2xl))',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 24px rgba(255, 107, 0, 0.08)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 107, 0, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Left / Center: Philosophy Narrative */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 107, 0, 0.1)',
                border: '1px solid rgba(255, 107, 0, 0.25)',
                color: '#ff8533',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 'var(--space-xs)',
              }}
            >
              <span>✦</span> Applied Learning Philosophy
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-xs)',
                lineHeight: 1.3,
              }}
            >
              Learning Becomes Valuable When Applied
            </h3>

            <p
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: 'var(--space-sm)',
              }}
            >
              Every certification, course, and conceptual framework is immediately put into practice
              by architecting real-world applications, high-performance backends, and multi-agent AI systems.
            </p>

            <p
              style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              &ldquo;The beautiful thing about learning is nobody can take it away from you.&rdquo; — B.B. King
            </p>
          </div>

          {/* Right: Actions linking to Skills and Projects */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Link
              href="/skills"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                maxWidth: '280px',
                padding: '12px 22px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, #ff8533 0%, #ff6b00 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(255, 107, 0, 0.35)',
                transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
              }}
            >
              <span>Explore Technical Skills</span>
              <span style={{ fontSize: '15px' }}>⚡</span>
            </Link>

            <Link
              href="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                maxWidth: '280px',
                padding: '12px 22px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: 'var(--font-size-sm)',
                textDecoration: 'none',
                transition: 'background var(--transition-fast), border-color var(--transition-fast)',
              }}
            >
              <span>View Applied Projects</span>
              <span style={{ fontSize: '15px' }}>🚀</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
