import { HealthCheckData, ApiResponse } from '@nirmal/types';
import { API_ROUTES } from '@nirmal/config';
import { apiClient } from './client';

export async function fetchApiHealth(): Promise<ApiResponse<HealthCheckData>> {
  return apiClient<HealthCheckData>(API_ROUTES.health);
}
