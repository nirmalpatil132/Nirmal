import rateLimit from 'express-rate-limit';
import { RATE_LIMIT_CONFIG } from '@nirmal/config';

export const generalRateLimiter = rateLimit({
  windowMs: RATE_LIMIT_CONFIG.general.windowMs,
  max: RATE_LIMIT_CONFIG.general.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: 'TOO_MANY_REQUESTS',
      message: 'Too many requests from this IP, please try again later.',
    },
  },
});

export const contactRateLimiter = rateLimit({
  windowMs: RATE_LIMIT_CONFIG.contact.windowMs,
  max: RATE_LIMIT_CONFIG.contact.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: 'TOO_MANY_REQUESTS',
      message: 'Too many contact submissions from this IP, please try again later.',
    },
  },
});
