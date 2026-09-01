import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled,
  children,
  style,
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: { padding: 'var(--space-2xs) var(--space-sm)', fontSize: 'var(--font-size-sm)' },
    md: { padding: 'var(--space-xs) var(--space-lg)', fontSize: 'var(--font-size-base)' },
    lg: { padding: 'var(--space-sm) var(--space-xl)', fontSize: 'var(--font-size-lg)' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'var(--primary)',
      color: '#ffffff',
      border: 'none',
    },
    secondary: {
      background: 'var(--bg-elevated)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)',
    },
    text: {
      background: 'transparent',
      color: 'var(--secondary)',
      border: 'none',
      paddingLeft: 0,
      paddingRight: 0,
    },
    danger: {
      background: 'var(--error)',
      color: '#ffffff',
      border: 'none',
    },
  };

  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-xs)',
        fontWeight: 'var(--font-weight-semibold)',
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all var(--transition-fast)',
        width: fullWidth ? '100%' : 'auto',
        maxWidth: '100%',
        boxSizing: 'border-box',
        textAlign: 'center',
        whiteSpace: 'normal',
        wordBreak: 'break-word',
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
