import React from 'react';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionHeader({ title, subtitle, badge, align = 'left' }: SectionHeaderProps) {
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
            letterSpacing: '0.05em',
            color: 'var(--secondary)',
            background: 'var(--secondary-light)',
            borderRadius: 'var(--radius-full)',
            marginBottom: 'var(--space-xs)',
          }}
        >
          {badge}
        </span>
      )}
      <h2
        style={{
          fontSize: 'var(--font-size-3xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: 'var(--space-xs)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--text-muted)',
            maxWidth: '650px',
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
