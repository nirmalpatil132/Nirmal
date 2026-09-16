import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config/index.js';
import { generalRateLimiter } from './middleware/rateLimiter.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

import healthRoutes from './routes/health.routes.js';
import contactRoutes from './routes/contact.routes.js';

const app = express();

// Security Middleware
app.use(helmet());

// CORS Configuration
const defaultOrigins = [
  'http://localhost:3000',
  'https://nirmalpatil132.github.io',
];
const envOrigins = config.corsOrigin
  ? config.corsOrigin.split(',').map((o) => o.trim())
  : [];
const allowedOrigins = Array.from(new Set([...defaultOrigins, ...envOrigins]));

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS policy does not allow access from origin: ${origin}`));
      }
    },
    credentials: true,
  })
);

// Body Parsing Middleware
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// General Rate Limiting
app.use(generalRateLimiter);

// Health & Liveness Endpoints for Cloud Platforms & Load Balancers
app.get('/', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'nirmal-portfolio-api' });
});
app.use('/health', healthRoutes);

// Versioned API Routes (/api/v1)
app.use('/api/v1', healthRoutes);
app.use('/api/v1', contactRoutes);

// Unmatched Route (404) & Centralized Error Handler
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
