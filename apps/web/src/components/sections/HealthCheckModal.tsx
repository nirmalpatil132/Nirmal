'use client';

import React, { useEffect, useState } from 'react';
import { HealthCheckData, ApiResponse } from '@nirmal/types';
import { fetchApiHealth } from '../../lib/api/health';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export interface HealthCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HealthCheckModal({ isOpen, onClose }: HealthCheckModalProps) {
  const [healthState, setHealthState] = useState<{
    loading: boolean;
    response: ApiResponse<HealthCheckData> | null;
  }>({
    loading: true,
    response: null,
  });

  const checkHealth = async () => {
    setHealthState((prev) => ({ ...prev, loading: true }));
    const result = await fetchApiHealth();
    setHealthState({
      loading: false,
      response: result,
    });
  };

  useEffect(() => {
    if (isOpen) {
      checkHealth();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isApiOnline = healthState.response?.success === true;
  const isDbConnected =
    healthState.response?.success === true &&
    healthState.response.data.database === 'ok';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 'var(--z-modal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-md)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-xl)',
          maxWidth: '650px',
          width: '100%',
          boxShadow: 'var(--shadow-lg)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <Badge variant="primary">Phase 1 Check</Badge>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)' }}>
              System Architecture Status
            </h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ✕ Close
          </Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
          <div style={{ background: 'var(--bg-elevated)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Next.js Frontend</span>
            <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--success)', marginTop: '2px' }}>
              Online
            </div>
          </div>

          <div style={{ background: 'var(--bg-elevated)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Express API (Port 4000)</span>
            <div
              style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-bold)',
                color: healthState.loading ? 'var(--warning)' : isApiOnline ? 'var(--success)' : 'var(--error)',
                marginTop: '2px',
              }}
            >
              {healthState.loading ? 'Checking...' : isApiOnline ? 'Online' : 'Offline'}
            </div>
          </div>

          <div style={{ background: 'var(--bg-elevated)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>PostgreSQL / Prisma</span>
            <div
              style={{
                fontSize: 'var(--font-size-lg)',
                fontWeight: 'var(--font-weight-bold)',
                color: healthState.loading ? 'var(--warning)' : isDbConnected ? 'var(--success)' : 'var(--error)',
                marginTop: '2px',
              }}
            >
              {healthState.loading ? 'Checking...' : isDbConnected ? 'Connected' : 'Disconnected'}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-md)' }}>
          <h4 style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-xs)' }}>
            Live Endpoint Output (`GET /api/v1/health`)
          </h4>
          <pre
            style={{
              background: 'var(--bg-primary)',
              padding: 'var(--space-sm)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--secondary)',
              fontSize: 'var(--font-size-xs)',
              overflowX: 'auto',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {healthState.loading ? 'Fetching live endpoint response...' : JSON.stringify(healthState.response, null, 2)}
          </pre>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant="secondary" size="sm" onClick={checkHealth} disabled={healthState.loading}>
            {healthState.loading ? 'Refetching...' : 'Recheck Health 🔄'}
          </Button>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Window
          </Button>
        </div>
      </div>
    </div>
  );
}
