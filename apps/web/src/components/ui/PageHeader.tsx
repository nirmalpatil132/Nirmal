import React from 'react';
import { Badge } from './Badge';

export interface PageHeaderProps {
  title: string;
  highlightText?: string;
  description?: string;
  badge?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, highlightText, description, badge, children }: PageHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-xs)',
        marginBottom: 'var(--space-2xl)',
      }}
    >
      {badge && (
        <div style={{ marginBottom: '4px' }}>
          <Badge variant="primary">{badge}</Badge>
        </div>
      )}
      <h1
        style={{
          fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
          fontWeight: 'var(--font-weight-extrabold)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
        }}
      >
        {title}{' '}
        {highlightText && (
          <span className="text-gradient-orange">{highlightText}</span>
        )}
      </h1>
      {description && (
        <p
          style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--text-secondary)',
            maxWidth: '750px',
            lineHeight: 1.65,
            marginTop: '2px',
          }}
        >
          {description}
        </p>
      )}
      {children && <div style={{ marginTop: 'var(--space-md)' }}>{children}</div>}
    </div>
  );
}
