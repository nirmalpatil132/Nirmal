import React from 'react';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: 'primary' | 'secondary';
  align?: 'left' | 'center' | 'right';
}

export function SectionHeader({ title, subtitle, badge, badgeVariant = 'primary', align = 'left' }: SectionHeaderProps) {
  const isPrimary = badgeVariant === 'primary';
  return (
    <div style={{ textAlign: align, marginBottom: 'var(--space-xl)' }}>
      {badge && (
        <span
          style={{
            display: 'inline-block',
            padding: 'var(--space-2xs) var(--space-sm)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-semibold)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: isPrimary ? 'var(--primary)' : 'var(--secondary)',
            background: isPrimary ? 'var(--primary-light)' : 'var(--secondary-light)',
            border: isPrimary ? '1px solid var(--border-orange)' : '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: 'var(--radius-full)',
            marginBottom: 'var(--space-xs)',
          }}
        >
          {badge}
        </span>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          fontWeight: 'var(--font-weight-extrabold)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: 'var(--space-xs)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            lineHeight: 1.6,
            marginLeft: align === 'center' ? 'auto' : undefined,
            marginRight: align === 'center' ? 'auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
