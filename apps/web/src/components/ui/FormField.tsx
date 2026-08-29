import React from 'react';

export interface FormFieldProps {
  label: string;
  htmlFor?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({
  label,
  htmlFor,
  error,
  helperText,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <div style={{ marginBottom: 'var(--space-md)', width: '100%' }}>
      <label
        htmlFor={htmlFor}
        style={{
          display: 'block',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-2xs)',
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--error)', marginLeft: 'var(--space-2xs)' }}>*</span>}
      </label>
      {children}
      {error ? (
        <span
          style={{
            display: 'block',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--error)',
            marginTop: 'var(--space-2xs)',
          }}
        >
          {error}
        </span>
      ) : helperText ? (
        <span
          style={{
            display: 'block',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--text-muted)',
            marginTop: 'var(--space-2xs)',
          }}
        >
          {helperText}
        </span>
      ) : null}
    </div>
  );
}
