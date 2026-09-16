import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { AppError } from './errorHandler.js';

export function validateRequest(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      // Preserve honeypot field if present for anti-spam detection
      const honeypot = (req.body as any)?.honeypot || (req.body as any)?.hp;
      req.body = schema.parse(req.body);
      if (honeypot) {
        (req.body as any).honeypot = honeypot;
      }
      next();
    } catch (error: any) {
      // Check both instanceof and name/issues to support monorepo Zod instances reliably
      if (error instanceof ZodError || error?.name === 'ZodError' || Array.isArray(error?.issues)) {
        const issues = error.errors || error.issues || [];
        const issueDetails = issues.map((err: any) => ({
          field: Array.isArray(err.path) ? err.path.join('.') : String(err.path || ''),
          message: err.message,
        }));
        next(new AppError('Invalid request data', 400, 'VALIDATION_ERROR', issueDetails));
      } else {
        next(error);
      }
    }
  };
}
