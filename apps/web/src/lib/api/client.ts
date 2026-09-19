import { ApiResponse } from '@nirmal/types';

const PRODUCTION_API_URL = 'https://nirmal-portfolio-api.onrender.com';

function getBaseUrl(): string {
  // If explicitly provided via environment variable
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  // Local development loopback fallback
  if (
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ) {
    return 'http://localhost:4000';
  }
  // Production fallback for GitHub Pages and production builds
  return PRODUCTION_API_URL;
}

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const baseUrl = getBaseUrl();

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
  } catch {
    // Visitor-friendly network failure response that avoids leaking internals
    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: 'Message delivery is temporarily unavailable. Please use the Email or WhatsApp option below.',
      },
    };
  }
}
