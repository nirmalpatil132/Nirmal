import { ContactFormInput } from '@nirmal/validation';
import { logger } from '../utils/logger.js';
import { sendContactEmail } from './email.service.js';

export interface ContactProcessResult {
  received: boolean;
  delivered: boolean;
  provider: string;
  messageId?: string;
  message: string;
  honeypotTrapped?: boolean;
}

export async function processContactSubmission(
  input: ContactFormInput & { honeypot?: string; hp?: string }
): Promise<ContactProcessResult> {
  // Anti-Spam: Reject submission if silent honeypot field is populated by bots
  if (input.honeypot || input.hp) {
    logger.warn(`Spam bot submission trapped by honeypot from IP/Email: ${input.email}`);
    return {
      received: true,
      delivered: false,
      honeypotTrapped: true,
      provider: 'honeypot',
      message: 'Thank you for your message.',
    };
  }

  logger.info(`Processing verified contact submission from: ${input.name} <${input.email}> - Subject: ${input.subject}`);

  // Dispatch real email delivery
  const emailResult = await sendContactEmail({
    name: input.name,
    email: input.email,
    subject: input.subject,
    message: input.message,
  });

  return {
    received: true,
    delivered: emailResult.delivered,
    provider: emailResult.provider,
    messageId: emailResult.messageId,
    message: emailResult.message,
  };
}
