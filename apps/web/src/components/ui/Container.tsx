import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

export function Container({ size = 'lg', children, style, ...props }: ContainerProps) {
  const maxWidths = {
    sm: '600px',
    md: '800px',
    lg: '1200px',
    full: '100%',
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: maxWidths[size],
        margin: '0 auto',
        paddingLeft: 'var(--space-md)',
        paddingRight: 'var(--space-md)',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
