import React from 'react';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function Badge({ variant = 'neutral', style, children }: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: 'var(--primary-light)', color: 'var(--primary)' },
    secondary: { background: 'var(--secondary-light)', color: 'var(--secondary)' },
    success: { background: 'var(--success-bg)', color: 'var(--success)' },
    warning: { background: 'var(--warning-bg)', color: 'var(--warning)' },
    error: { background: 'var(--error-bg)', color: 'var(--error)' },
    neutral: { background: 'var(--bg-elevated)', color: 'var(--text-secondary)' },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: 'var(--space-2xs) var(--space-xs)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-medium)',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-subtle)',
        ...styles[variant],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
