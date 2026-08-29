import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass';
  interactive?: boolean;
  children: React.ReactNode;
}

export function Card({
  variant = 'default',
  interactive = false,
  children,
  style,
  ...props
}: CardProps) {
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-subtle)',
    },
    elevated: {
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-md)',
    },
    glass: {
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid var(--border-subtle)',
    },
  };

  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        transition: 'all var(--transition-normal)',
        cursor: interactive ? 'pointer' : 'default',
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
