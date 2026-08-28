'use client';

import { useEffect, useState } from 'react';
import { HealthCheckData, ApiResponse } from '@nirmal/types';
import { fetchApiHealth } from '../lib/api/health';

export default function Phase1FoundationPage() {
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
    checkHealth();
  }, []);

  const isApiOnline = healthState.response?.success === true;
  const isDbConnected =
    healthState.response?.success === true &&
    healthState.response.data.database === 'ok';

  return (
    <main style={{ padding: '3rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2.5rem', borderBottom: '1px solid #1f2937', paddingBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '0.5rem' }}>
          Nirmal Portfolio V2
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#9ca3af' }}>
          Phase 1 — Architecture & Foundation
        </p>
      </header>

      <section
        style={{
          background: '#111827',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          border: '1px solid #1f2937',
          marginBottom: '2rem',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: '#f3f4f6' }}>
          System Architecture Status
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {/* Frontend Status */}
          <div style={{ background: '#1f2937', padding: '1rem', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Frontend (Next.js)</span>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#4ade80', marginTop: '0.25rem' }}>
              Online
            </div>
          </div>

          {/* Backend API Status */}
          <div style={{ background: '#1f2937', padding: '1rem', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Backend API (Express)</span>
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: healthState.loading ? '#facc15' : isApiOnline ? '#4ade80' : '#f87171',
                marginTop: '0.25rem',
              }}
            >
              {healthState.loading ? 'Checking...' : isApiOnline ? 'Online' : 'Offline'}
            </div>
          </div>

          {/* Database Status */}
          <div style={{ background: '#1f2937', padding: '1rem', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Database (PostgreSQL / Prisma)</span>
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: healthState.loading
                  ? '#facc15'
                  : isDbConnected
                  ? '#4ade80'
                  : '#f87171',
                marginTop: '0.25rem',
              }}
            >
              {healthState.loading
                ? 'Checking...'
                : isDbConnected
                ? 'Connected'
                : 'Disconnected'}
            </div>
          </div>

          {/* API Health */}
          <div style={{ background: '#1f2937', padding: '1rem', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>API Health Endpoint</span>
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: healthState.loading ? '#facc15' : isApiOnline ? '#4ade80' : '#f87171',
                marginTop: '0.25rem',
              }}
            >
              {healthState.loading ? 'Checking...' : isApiOnline ? 'Healthy' : 'Error'}
            </div>
          </div>
        </div>

        <button
          onClick={checkHealth}
          disabled={healthState.loading}
          style={{
            marginTop: '1.5rem',
            padding: '0.625rem 1.25rem',
            background: '#0284c7',
            color: '#ffffff',
            border: 'none',
            borderRadius: '0.375rem',
            fontWeight: '600',
            cursor: healthState.loading ? 'not-allowed' : 'pointer',
          }}
        >
          {healthState.loading ? 'Refetching Status...' : 'Recheck System Health'}
        </button>
      </section>

      <section
        style={{
          background: '#111827',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          border: '1px solid #1f2937',
        }}
      >
        <h3 style={{ fontSize: '1rem', color: '#9ca3af', marginBottom: '0.75rem' }}>
          Live API Response (`GET /api/v1/health`)
        </h3>
        <pre
          style={{
            background: '#030712',
            padding: '1rem',
            borderRadius: '0.5rem',
            color: '#38bdf8',
            fontSize: '0.875rem',
            overflowX: 'auto',
          }}
        >
          {healthState.loading
            ? 'Fetching live API status...'
            : JSON.stringify(healthState.response, null, 2)}
        </pre>
      </section>
    </main>
  );
}
