import { config } from '../config/index.js';
import { logger } from '../utils/logger.js';

export interface SendEmailOptions {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailDeliveryResult {
  delivered: boolean;
  provider: string;
  messageId?: string;
  message: string;
}

/**
 * Clean HTML template for portfolio contact inquiries delivered to Nirmal Patil.
 */
function buildContactEmailHtml(options: SendEmailOptions, timestamp: string): string {
  // Sanitize values for safe HTML rendering
  const safeName = options.name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeEmail = options.email.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeSubject = options.subject.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeMessage = options.message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0e14; color: #e2e8f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #121722; border: 1px solid rgba(255, 107, 0, 0.35); border-radius: 12px; overflow: hidden;">
    <!-- Header -->
    <tr>
      <td style="padding: 24px; background: linear-gradient(135deg, rgba(255, 107, 0, 0.2) 0%, rgba(18, 23, 34, 0.8) 100%); border-bottom: 1px solid rgba(255, 107, 0, 0.2);">
        <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #ff8533; margin-bottom: 4px;">
          Nirmal Portfolio V2 — Direct Message
        </div>
        <h1 style="margin: 0; font-size: 20px; font-weight: 800; color: #ffffff;">
          New Contact Submission
        </h1>
      </td>
    </tr>
    <!-- Metadata Table -->
    <tr>
      <td style="padding: 20px 24px; background-color: #0e121b; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
        <table width="100%" cellpadding="4" cellspacing="0" style="font-size: 13px;">
          <tr>
            <td width="90" style="color: #94a3b8; font-weight: 600;">From:</td>
            <td style="color: #ffffff; font-weight: 700;">${safeName}</td>
          </tr>
          <tr>
            <td style="color: #94a3b8; font-weight: 600;">Reply-To:</td>
            <td><a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="color: #94a3b8; font-weight: 600;">Subject:</td>
            <td style="color: #ffffff;">${safeSubject}</td>
          </tr>
          <tr>
            <td style="color: #94a3b8; font-weight: 600;">Received:</td>
            <td style="color: #94a3b8;">${timestamp}</td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- Message Body -->
    <tr>
      <td style="padding: 24px; font-size: 14px; line-height: 1.65; color: #f1f5f9;">
        <div style="font-weight: 700; color: #ff8533; margin-bottom: 10px; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em;">
          Message Content:
        </div>
        <div style="background-color: #080a0f; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 16px; color: #e2e8f0; font-size: 14px;">
          ${safeMessage}
        </div>
      </td>
    </tr>
    <!-- Footer CTA -->
    <tr>
      <td style="padding: 16px 24px; background-color: #0e121b; border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center;">
        <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(options.subject)}" style="display: inline-block; background-color: #ff6b00; color: #ffffff; font-weight: 600; font-size: 13px; text-decoration: none; padding: 10px 20px; border-radius: 6px;">
          Reply Directly to ${safeName}
        </a>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Plain text email content for fallback and screen readers.
 */
function buildContactEmailText(options: SendEmailOptions, timestamp: string): string {
  return [
    `NIRMAL PORTFOLIO V2 — NEW CONTACT MESSAGE`,
    `==========================================`,
    `Received: ${timestamp}`,
    `From:     ${options.name}`,
    `Email:    ${options.email}`,
    `Subject:  ${options.subject}`,
    ``,
    `MESSAGE:`,
    `--------`,
    options.message,
    ``,
    `==========================================`,
    `Reply directly to: ${options.email}`,
  ].join('\n');
}

/**
 * Production email delivery service supporting Resend REST API (default zero-dependency)
 * and SendGrid REST API with graceful local development simulation.
 */
export async function sendContactEmail(options: SendEmailOptions): Promise<EmailDeliveryResult> {
  const timestamp = new Date().toISOString();
  const emailHtml = buildContactEmailHtml(options, timestamp);
  const emailText = buildContactEmailText(options, timestamp);
  const emailSubject = `[Portfolio Inquiry] ${options.subject} — from ${options.name}`;

  const resendApiKey = process.env.RESEND_API_KEY || config.email.apiKey;
  const sendgridApiKey = process.env.SENDGRID_API_KEY;
  const targetRecipient = process.env.EMAIL_TO || process.env.CONTACT_TO_EMAIL || config.email.to || 'nirmalpatil615@gmail.com';
  let fromAddress = process.env.EMAIL_FROM || config.email.from;

  // Validate sender address for production
  if (!config.isDev && !fromAddress) {
    logger.error('[EMAIL] Configuration Error: EMAIL_FROM is missing in production. Resend requires a verified sender address.');
    throw new Error('Email delivery service is misconfigured on this server (missing sender address).');
  }

  // Fallback for local development if unset
  if (!fromAddress) {
    fromAddress = 'onboarding@resend.dev';
  }

  // 1. Resend REST API (Primary transactional email provider)
  if (resendApiKey) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12-second timeout

    try {
      logger.info(`[EMAIL] Sending contact email via Resend to=${targetRecipient} from=${fromAddress} subject="${options.subject}"`);

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [targetRecipient],
          reply_to: options.email,
          subject: emailSubject,
          html: emailHtml,
          text: emailText,
        }),
      });

      const responseData = (await response.json()) as { id?: string; message?: string; error?: { message: string } };

      if (!response.ok) {
        const errorMsg = responseData?.error?.message || responseData?.message || `HTTP ${response.status}`;
        logger.error(`[EMAIL] Resend rejected email. status=${response.status} message=${errorMsg}`);
        throw new Error(`Email provider error: ${errorMsg}`);
      }

      if (!responseData?.id || typeof responseData.id !== 'string') {
        logger.error(`[EMAIL] Resend returned HTTP ${response.status} but missing message ID in response.`);
        throw new Error('Email provider did not return a confirmation message ID.');
      }

      logger.info(`[EMAIL] Resend accepted email. messageId=${responseData.id}`);
      return {
        delivered: true,
        provider: 'resend',
        messageId: responseData.id,
        message: 'Your message has been delivered directly to Nirmal Patil.',
      };
    } catch (err: unknown) {
      if ((err as Error)?.name === 'AbortError') {
        logger.error('[EMAIL] Resend request timed out after 12 seconds.');
        throw new Error('Email service request timed out. Please try again or reach out directly.');
      }
      logger.error('[EMAIL] Failed to dispatch email via Resend:', (err as Error)?.message || err);
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  // 2. SendGrid REST API (Secondary supported provider)
  if (sendgridApiKey) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      logger.info(`[EMAIL] Sending contact email via SendGrid to=${targetRecipient} from=${fromAddress}`);

      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${sendgridApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: targetRecipient }],
              subject: emailSubject,
            },
          ],
          from: { email: fromAddress.includes('<') ? fromAddress.replace(/.*<([^>]+)>.*/, '$1') : fromAddress },
          reply_to: { email: options.email, name: options.name },
          content: [
            { type: 'text/plain', value: emailText },
            { type: 'text/html', value: emailHtml },
          ],
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        logger.error(`[EMAIL] SendGrid API error: status=${response.status} message=${errText}`);
        throw new Error(`SendGrid delivery error: ${response.statusText}`);
      }

      logger.info('[EMAIL] SendGrid accepted email.');
      return {
        delivered: true,
        provider: 'sendgrid',
        message: 'Your message has been delivered directly to Nirmal Patil.',
      };
    } catch (err: unknown) {
      if ((err as Error)?.name === 'AbortError') {
        logger.error('[EMAIL] SendGrid request timed out after 12 seconds.');
        throw new Error('Email service request timed out.');
      }
      logger.error('[EMAIL] Failed to dispatch email via SendGrid:', (err as Error)?.message || err);
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  // 3. Fallback when no transactional email provider secret is configured
  if (config.isDev) {
    logger.warn('[EMAIL] No RESEND_API_KEY found. Simulating email delivery in development mode.');
    logger.info(`[SIMULATED EMAIL TO: ${targetRecipient}]`);
    logger.info(`[SUBJECT]: ${emailSubject}`);
    logger.info(`[FROM]: ${options.name} <${options.email}>`);

    return {
      delivered: false,
      provider: 'development-simulation',
      message: 'Contact form submission successfully validated and logged in development mode. Configure RESEND_API_KEY on the server for live inbox delivery.',
    };
  }

  // In production without email credentials, fail explicitly to prevent false success claims
  logger.error('[EMAIL] Production email delivery attempted but no RESEND_API_KEY or SENDGRID_API_KEY configured.');
  throw new Error('Email delivery service is not configured on this server. Please reach out directly via email or WhatsApp.');
}
