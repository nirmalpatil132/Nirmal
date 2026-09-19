import { Request, Response } from 'express';
import { processContactSubmission } from '../services/contact.service.js';
import { logger } from '../utils/logger.js';
import { config } from '../config/index.js';

export async function contactController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const result = await processContactSubmission(req.body);

    // 1. Anti-spam honeypot trapped: return benign 200 without delivery
    if (result.honeypotTrapped) {
      res.status(200).json({
        success: true,
        data: {
          received: true,
          delivered: false,
          provider: 'none',
          message: 'Thank you for your message.',
        },
      });
      return;
    }

    // 2. Verified real provider delivery
    if (result.delivered) {
      res.status(200).json({
        success: true,
        data: {
          received: true,
          delivered: true,
          provider: result.provider,
          message: result.message,
        },
      });
      return;
    }

    // 3. Development simulation (keys absent during local development)
    if (config.isDev && result.provider === 'development-simulation') {
      res.status(200).json({
        success: true,
        data: {
          received: true,
          delivered: false,
          provider: 'development-simulation',
          message: result.message,
        },
      });
      return;
    }

    // 4. Provider did not confirm delivery
    logger.warn('[CONTACT] Message processed but delivery could not be confirmed by provider.');
    res.status(502).json({
      success: false,
      error: {
        message: 'Unable to deliver your message right now. Please try again or contact me directly via email or WhatsApp.',
      },
    });
  } catch (error: unknown) {
    // Safely log failure internally without leaking secrets, credentials, or internal stack traces to client
    const safeErrorMsg = error instanceof Error ? error.message : 'Unknown error';
    logger.error(`[CONTACT] Contact submission failed: ${safeErrorMsg}`);

    res.status(502).json({
      success: false,
      error: {
        message: 'Unable to deliver your message right now. Please try again or contact me directly via email or WhatsApp.',
      },
    });
  }
}
