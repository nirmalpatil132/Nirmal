import React from 'react';

export interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'warning' | 'loading';
  label: string;
  sublabel?: string;
}

export function StatusIndicator({ status, label, sublabel }: StatusIndicatorProps) {
  const statusColors = {
    online: 'var(--success)',
    offline: 'var(--error)',
    warning: 'var(--warning)',
    loading: 'var(--secondary)',
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        padding: 'var(--space-sm) var(--space-md)',
        background: 'var(--bg-elevated)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-subtle)',
      }}
    >
      <span
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: statusColors[status],
          boxShadow: `0 0 8px ${statusColors[status]}`,
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>
          {label}
        </div>
        {sublabel && (
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
}
