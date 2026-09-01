import React from 'react';

export interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function Badge({ variant = 'neutral', style, children }: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: 'var(--primary-light)', color: 'var(--primary)', borderColor: 'var(--border-orange)' },
    secondary: { background: 'var(--secondary-light)', color: 'var(--secondary)', borderColor: 'rgba(56, 189, 248, 0.3)' },
    success: { background: 'var(--success-bg)', color: 'var(--success)', borderColor: 'rgba(16, 185, 129, 0.3)' },
    warning: { background: 'var(--warning-bg)', color: 'var(--warning)', borderColor: 'rgba(245, 158, 11, 0.3)' },
    error: { background: 'var(--error-bg)', color: 'var(--error)', borderColor: 'rgba(239, 68, 68, 0.3)' },
    neutral: { background: 'var(--bg-elevated)', color: 'var(--text-secondary)', borderColor: 'var(--border-subtle)' },
  };

  const selectedStyle = styles[variant] || styles.neutral;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: 'var(--space-2xs) var(--space-xs)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-medium)',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid',
        ...selectedStyle,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
