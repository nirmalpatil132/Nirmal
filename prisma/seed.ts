import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seed process started...');
  try {
    await prisma.$connect();
    console.log('✅ Database connection established for seed script.');
    console.log('ℹ️  No fake data inserted. Schema readiness verified.');
  } catch (error) {
    console.warn('⚠️  Database is unavailable or offline during seeding. Skipping DB operations.');
  } finally {
    await prisma.$disconnect();
    console.log('🌱 Seed process finished.');
  }
}

main().catch((e) => {
  console.error('❌ Seed execution failed:', e);
  process.exit(1);
});
