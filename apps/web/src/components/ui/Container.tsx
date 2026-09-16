import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
}

export function Container({ size = 'lg', children, style, ...props }: ContainerProps) {
  const maxWidths = {
    sm: '600px',
    md: '820px',
    lg: '1200px',
    full: '100%',
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: maxWidths[size],
        margin: '0 auto',
        paddingLeft: 'clamp(1rem, 2.5vw, 1.5rem)',
        paddingRight: 'clamp(1rem, 2.5vw, 1.5rem)',
        boxSizing: 'border-box',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
