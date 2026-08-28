import { HealthCheckData } from '@nirmal/types';
import { checkDatabaseHealth } from '../repositories/health.repository.js';

export async function getHealthStatus(): Promise<HealthCheckData> {
  const isDbUp = await checkDatabaseHealth();
  return {
    api: 'ok',
    database: isDbUp ? 'ok' : 'disconnected',
  };
}
