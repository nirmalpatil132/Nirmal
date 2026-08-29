'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { SOCIAL_LINKS } from '../../data/social';

export function SocialLinksSection() {
  const primaryLinks = SOCIAL_LINKS.filter((link) => link.category === 'primary');
  const developerLinks = SOCIAL_LINKS.filter((link) => link.category === 'developer');
  const socialLinks = SOCIAL_LINKS.filter((link) => link.category === 'social');

  return (
    <Section id="digital-presence" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Online Networks"
          title="Digital Presence & Developer Profiles"
          subtitle="Explore my open-source repositories, competitive coding profiles, design portfolios, and professional social profiles."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {/* PRIMARY PROFILES */}
          <div>
            <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
              Primary Developer Profiles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
              {primaryLinks.map((link) => (
                <Card key={link.platform} variant="elevated" interactive>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                      <span style={{ fontSize: 'var(--font-size-xl)' }}>{link.icon}</span>
                      <div>
                        <div style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                          {link.platform}
                        </div>
                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>@{link.username}</div>
                      </div>
                    </div>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <Button variant="primary" size="sm">
                        Visit ➔
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* DEVELOPER & PORTFOLIO PROFILES */}
          <div>
            <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
              Developer, Hackathon & Design Profiles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-md)' }}>
              {developerLinks.map((link) => (
                <Card key={link.platform} variant="default" interactive>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                      <span>{link.icon}</span>
                      <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>
                        {link.platform}
                      </span>
                    </div>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <Button variant="ghost" size="sm">
                        ↗
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* SOCIAL PROFILES */}
          <div>
            <h3 style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-muted)', marginBottom: 'var(--space-xs)' }}>
              Other Networks
            </h3>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              {socialLinks.map((link) => (
                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button variant="secondary" size="sm">
                    {link.icon} {link.platform}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
