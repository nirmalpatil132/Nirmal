// API Standard Response Wrapper Types
export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiErrorDetail {
  code: string;
  message: string;
  details?: unknown;
}

export interface ApiErrorResponse {
  success: false;
  error: ApiErrorDetail;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

// API Health Check Data Type
export interface HealthCheckData {
  api: 'ok';
  database: 'ok' | 'disconnected';
}

// Domain Model Types
export interface ProjectTechnology {
  id: string;
  projectId: string;
  name: string;
  icon?: string | null;
}

export interface ProjectImage {
  id: string;
  projectId: string;
  url: string;
  caption?: string | null;
  order: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription?: string | null;
  category: string;
  featured: boolean;
  demoUrl?: string | null;
  repoUrl?: string | null;
  thumbnailUrl?: string | null;
  technologies?: ProjectTechnology[];
  images?: ProjectImage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface InternshipProject {
  id: string;
  internshipId: string;
  title: string;
  description: string;
}

export interface Internship {
  id: string;
  slug: string;
  company: string;
  role: string;
  location?: string | null;
  startDate: Date;
  endDate?: Date | null;
  current: boolean;
  description: string;
  highlights: string[];
  projects?: InternshipProject[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Certificate {
  id: string;
  slug: string;
  title: string;
  issuer: string;
  issueDate: Date;
  credentialId?: string | null;
  credentialUrl?: string | null;
  imageUrl?: string | null;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  category: string; // e.g., 'Frontend', 'Backend', 'AI/ML', 'Design', 'Tools'
  proficiency?: number | null; // 1-100 percentage or level
  icon?: string | null;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date | null;
  grade?: string | null;
  activities?: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: Date;
  description?: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

export interface AnalyticsEvent {
  id: string;
  eventName: string;
  path: string;
  metadata?: Record<string, unknown> | null;
  createdAt: Date;
}
