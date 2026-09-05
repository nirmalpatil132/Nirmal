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
  className = '',
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: { minHeight: '36px', padding: '6px 14px', fontSize: 'var(--font-size-xs)' },
    md: { minHeight: '44px', padding: '10px 20px', fontSize: 'var(--font-size-sm)' },
    lg: { minHeight: '52px', padding: '14px 28px', fontSize: 'var(--font-size-base)' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, #ff7a1a 0%, #ff6b00 100%)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 14px rgba(255, 107, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
    },
    secondary: {
      background: 'var(--bg-elevated)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
    },
    ghost: {
      background: 'rgba(255, 255, 255, 0.03)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
    },
    text: {
      background: 'transparent',
      color: 'var(--secondary)',
      border: 'none',
      paddingLeft: 0,
      paddingRight: 0,
      minHeight: 'auto',
    },
    danger: {
      background: 'var(--error)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
  };

  return (
    <button
      disabled={disabled}
      className={`btn btn-${variant} btn-${size} ${className}`}
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
