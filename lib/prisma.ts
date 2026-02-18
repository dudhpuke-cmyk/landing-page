import { PrismaClient } from '@prisma/client'

/**
 * Prisma Client singleton
 * Use this for database queries throughout the application
 *
 * In production, this prevents multiple instances of Prisma Client
 * during hot reloading in development.
 * 
 * Note: Prisma Client will only be created if DATABASE_URL is set.
 * This allows the app to run without a database connection during initial deployment.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | null | undefined
}

// Only create Prisma Client if DATABASE_URL is available
// This prevents errors during build/deployment when database isn't configured yet
const createPrismaClient = (): PrismaClient | null => {
  if (!process.env.DATABASE_URL) {
    console.warn(
      'DATABASE_URL is not set. Prisma Client will not be initialized. ' +
      'Set DATABASE_URL in your environment variables to enable database functionality.'
    )
    return null
  }

  try {
    return new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    })
  } catch (error) {
    console.error('Failed to initialize Prisma Client:', error)
    return null
  }
}

export const prisma: PrismaClient | null =
  globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma
}

/**
 * Usage example:
 * import { prisma } from '@/lib/prisma'
 * 
 * // Always check if prisma is available before using it
 * if (!prisma) {
 *   throw new Error('Database is not configured. Please set DATABASE_URL.')
 * }
 * const products = await prisma.product.findMany()
 */
