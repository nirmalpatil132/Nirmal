import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg' | 'none';
  children: React.ReactNode;
}

export function Section({ spacing = 'md', children, style, ...props }: SectionProps) {
  const paddings = {
    none: '0',
    sm: 'var(--space-xl) 0',
    md: 'var(--space-2xl) 0',
    lg: 'var(--space-3xl) 0',
  };

  return (
    <section
      style={{
        padding: paddings[spacing],
        width: '100%',
        ...style,
      }}
      {...props}
    >
      {children}
    </section>
  );
}
