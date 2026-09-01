import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error = false, style, disabled, ...props }: InputProps) {
  return (
    <input
      disabled={disabled}
      style={{
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        padding: 'var(--space-xs) var(--space-md)',
        fontSize: 'var(--font-size-base)',
        color: 'var(--text-primary)',
        background: 'var(--bg-primary)',
        border: '1px solid',
        borderColor: error ? 'var(--error)' : 'var(--border-default)',
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        transition: 'all var(--transition-fast)',
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'text',
        ...style,
      }}
      {...props}
    />
  );
}
