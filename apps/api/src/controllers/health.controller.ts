import { Request, Response, NextFunction } from 'express';
import { getHealthStatus } from '../services/health.service.js';

export async function healthController(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const healthData = await getHealthStatus();
    res.status(200).json({
      success: true,
      data: healthData,
    });
  } catch (error) {
    next(error);
  }
}
