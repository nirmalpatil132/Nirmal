import React from 'react';

export interface DividerProps {
  spacing?: 'sm' | 'md' | 'lg';
}

export function Divider({ spacing = 'md' }: DividerProps) {
  const margins = {
    sm: 'var(--space-md) 0',
    md: 'var(--space-xl) 0',
    lg: 'var(--space-2xl) 0',
  };

  return (
    <hr
      style={{
        border: 'none',
        borderTop: '1px solid var(--border-subtle)',
        margin: margins[spacing],
        width: '100%',
      }}
    />
  );
}
