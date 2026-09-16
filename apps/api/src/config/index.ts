import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from root or apps/api directory
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || process.env.API_PORT || '4000', 10),
  corsOrigin: process.env.CORS_ORIGIN || 'https://nirmalpatil132.github.io',
  databaseUrl: process.env.DATABASE_URL || '',
  isDev: (process.env.NODE_ENV || 'development') === 'development',
  email: {
    provider: process.env.EMAIL_PROVIDER || 'resend',
    apiKey: process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY || '',
    from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
    to: process.env.CONTACT_TO_EMAIL || process.env.EMAIL_TO || 'nirmalpatil615@gmail.com',
  },
  whatsapp: {
    number: process.env.WHATSAPP_NUMBER || '',
    apiKey: process.env.WHATSAPP_API_KEY || '',
  },
};
