import { Router } from 'express';
import { ContactFormSchema } from '@nirmal/validation';
import { validateRequest } from '../middleware/validateRequest.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';
import { contactController } from '../controllers/contact.controller.js';

const router = Router();

router.post('/contact', contactRateLimiter, validateRequest(ContactFormSchema), contactController);

export default router;
