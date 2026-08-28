import app from './app.js';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';

const server = app.listen(config.port, () => {
  logger.info(`🚀 Nirmal Portfolio V2 API running on http://localhost:${config.port}`);
  logger.info(`🔍 Health check available at http://localhost:${config.port}/api/v1/health`);
  logger.info(`🌍 Environment: ${config.env}`);
});

// Graceful Shutdown Handlers
const handleShutdown = (signal: string) => {
  logger.info(`Received ${signal}. Shutting down HTTP server gracefully...`);
  server.close(() => {
    logger.info('HTTP server closed. Exiting process.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
