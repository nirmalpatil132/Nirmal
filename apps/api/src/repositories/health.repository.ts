import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger.js';

let prisma: PrismaClient | null = null;

function getPrismaClient(): PrismaClient {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}

export async function checkDatabaseHealth(): Promise<boolean> {
  try {
    const client = getPrismaClient();
    // Run simple lightweight query
    await client.$queryRaw`SELECT 1`;
    return true;
  } catch (err) {
    logger.warn('Database health check failed (PostgreSQL unavailable or disconnected).');
    return false;
  }
}
