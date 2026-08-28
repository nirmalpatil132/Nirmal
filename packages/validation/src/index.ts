import { z } from 'zod';

export { z };

// Contact Form Input Schema
export const ContactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  email: z.string().trim().email('Invalid email address'),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters').max(200, 'Subject cannot exceed 200 characters'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(5000, 'Message cannot exceed 5000 characters'),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;

// Analytics Event Input Schema
export const AnalyticsEventSchema = z.object({
  eventName: z.string().trim().min(1, 'Event name is required').max(100),
  path: z.string().trim().min(1, 'Path is required').max(500),
  metadata: z.record(z.unknown()).optional(),
});

export type AnalyticsEventInput = z.infer<typeof AnalyticsEventSchema>;

// Pagination Query Schema
export const PaginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  category: z.string().optional(),
  search: z.string().optional(),
});

export type PaginationQueryInput = z.infer<typeof PaginationQuerySchema>;
