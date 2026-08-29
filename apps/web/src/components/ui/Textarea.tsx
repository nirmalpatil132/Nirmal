import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ error = false, style, disabled, rows = 4, ...props }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      disabled={disabled}
      style={{
        width: '100%',
        padding: 'var(--space-xs) var(--space-md)',
        fontSize: 'var(--font-size-base)',
        fontFamily: 'inherit',
        color: 'var(--text-primary)',
        background: 'var(--bg-primary)',
        border: '1px solid',
        borderColor: error ? 'var(--error)' : 'var(--border-default)',
        borderRadius: 'var(--radius-md)',
        outline: 'none',
        resize: 'vertical',
        transition: 'all var(--transition-fast)',
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'text',
        ...style,
      }}
      {...props}
    />
  );
}
