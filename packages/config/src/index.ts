// Non-Secret Shared Application Constants

export const APP_CONFIG = {
  name: 'Nirmal Portfolio V2',
  version: '2.0.0',
  author: 'Nirmal Patil',
  roles: ['Software Developer', 'UI/UX & Product Designer', 'Agentic AI Engineer'],
  defaultApiPort: 4000,
  defaultWebPort: 3000,
  apiVersion: 'v1',
  apiPrefix: '/api/v1',
} as const;

export const API_ROUTES = {
  health: '/api/v1/health',
  projects: '/api/v1/projects',
  internships: '/api/v1/internships',
  certificates: '/api/v1/certificates',
  skills: '/api/v1/skills',
  education: '/api/v1/education',
  contact: '/api/v1/contact',
  analytics: '/api/v1/analytics',
} as const;

export const RATE_LIMIT_CONFIG = {
  general: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
  },
  contact: {
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // Limit each IP to 5 contact submissions per hour
  },
} as const;
