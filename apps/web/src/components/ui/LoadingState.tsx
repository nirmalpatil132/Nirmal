import React from 'react';

export interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-2xl)',
        gap: 'var(--space-md)',
        color: 'var(--text-muted)',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          border: '3px solid var(--border-subtle)',
          borderTopColor: 'var(--primary)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
        {message}
      </span>
    </div>
  );
}
