import React from 'react';

export interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function Tag({ label, active = false, onClick }: TagProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: 'var(--space-2xs) var(--space-sm)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-medium)',
        borderRadius: 'var(--radius-full)',
        background: active ? 'var(--primary)' : 'var(--bg-elevated)',
        color: active ? '#ffffff' : 'var(--text-secondary)',
        border: '1px solid',
        borderColor: active ? 'var(--primary)' : 'var(--border-default)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all var(--transition-fast)',
      }}
    >
      {label}
    </button>
  );
}
