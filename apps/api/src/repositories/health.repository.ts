import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger.js';

let prisma: PrismaClient | null = null;

function getPrismaClient(): PrismaClient {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}

let lastLoggedStatus: boolean | null = null;

export async function checkDatabaseHealth(): Promise<boolean> {
  try {
    const client = getPrismaClient();
    // Run simple lightweight query
    await client.$queryRaw`SELECT 1`;
    if (lastLoggedStatus !== true) {
      logger.info('Database connection healthy (PostgreSQL connected).');
      lastLoggedStatus = true;
    }
    return true;
  } catch (err) {
    if (lastLoggedStatus !== false) {
      logger.warn('Database health check failed (PostgreSQL unavailable or disconnected).');
      lastLoggedStatus = false;
    }
    return false;
  }
}

