import React from 'react';

export interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, badge, children }: PageHeaderProps) {
  return (
    <div
      style={{
        paddingBottom: 'var(--space-xl)',
        marginBottom: 'var(--space-2xl)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {badge && (
        <span
          style={{
            display: 'inline-block',
            padding: 'var(--space-2xs) var(--space-sm)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--primary)',
            background: 'var(--primary-light)',
            borderRadius: 'var(--radius-full)',
            marginBottom: 'var(--space-xs)',
          }}
        >
          {badge}
        </span>
      )}
      <h1
        style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          style={{
            marginTop: 'var(--space-xs)',
            fontSize: 'var(--font-size-lg)',
            color: 'var(--text-muted)',
            maxWidth: '700px',
          }}
        >
          {description}
        </p>
      )}
      {children && <div style={{ marginTop: 'var(--space-lg)' }}>{children}</div>}
    </div>
  );
}
