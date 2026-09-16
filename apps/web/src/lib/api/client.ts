import { ApiResponse } from '@nirmal/types';

function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  // If running in browser on remote production host (e.g. GitHub Pages) without configured API URL
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return '';
  }
  return 'http://localhost:4000';
}

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const baseUrl = getBaseUrl();

  if (!baseUrl) {
    return {
      success: false,
      error: {
        code: 'API_NOT_CONFIGURED',
        message: 'The backend API service is not yet deployed for this environment. Please reach out directly via email or LinkedIn below.',
      },
    };
  }

  const url = `${baseUrl}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      cache: 'no-store',
    });

    const data = await res.json();
    return data as ApiResponse<T>;
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: error instanceof Error ? error.message : 'Failed to connect to backend API server.',
      },
    };
  }
}
