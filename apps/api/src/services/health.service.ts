import { HealthCheckData } from '@nirmal/types';
import { checkDatabaseHealth } from '../repositories/health.repository.js';
import { config } from '../config/index.js';

export async function getHealthStatus(): Promise<HealthCheckData> {
  const isDbUp = await checkDatabaseHealth();
  const isEmailConfigured = Boolean(config.email.postmarkServerToken && config.email.from);

  return {
    api: 'ok',
    database: isDbUp ? 'ok' : 'disconnected',
    email: {
      provider: 'postmark',
      configured: isEmailConfigured,
    },
  };
}
