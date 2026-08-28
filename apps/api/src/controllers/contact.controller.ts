import { Request, Response, NextFunction } from 'express';
import { processContactSubmission } from '../services/contact.service.js';

export async function contactController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const result = await processContactSubmission(req.body);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
}
