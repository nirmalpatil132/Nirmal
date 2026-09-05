import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The requested route does not exist in Nirmal Patil\'s portfolio.',
};

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'calc(var(--header-height) + var(--space-2xl)) var(--space-md) var(--space-3xl)',
        }}
      >
        <Container size="md">
          <Card
            variant="glass"
            style={{
              textAlign: 'center',
              padding: 'var(--space-2xl) var(--space-xl)',
              border: '1px solid var(--border-orange)',
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            <div style={{ display: 'inline-flex', marginBottom: 'var(--space-md)' }}>
              <Badge variant="primary">⚠️ 404 ERROR</Badge>
            </div>

            <div
              style={{
                fontSize: 'clamp(4rem, 12vw, 7rem)',
                fontWeight: 'var(--font-weight-extrabold)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-xs)',
              }}
              className="text-gradient-orange"
            >
              404
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-sm)',
              }}
            >
              Page Not Found
            </h1>

            <p
              style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '520px',
                margin: '0 auto var(--space-xl)',
              }}
            >
              The route you requested could not be located or may have been updated. Explore the portfolio via the quick destinations below.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-sm)',
                justifyContent: 'center',
              }}
            >
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="md">
                  Return Home 🏠
                </Button>
              </Link>
              <Link href="/projects" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="md">
                  View Projects 🚀
                </Button>
              </Link>
              <Link href="/experience" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size="md">
                  Experience &amp; Internships 💼
                </Button>
              </Link>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size="md">
                  Contact Nirmal ✉️
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
