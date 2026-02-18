import { PrismaClient } from '@prisma/client'

/**
 * Prisma Client singleton
 * Use this for database queries throughout the application
 *
 * In production, this prevents multiple instances of Prisma Client
 * during hot reloading in development.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Gracefully handle missing DATABASE_URL
const getPrismaClient = () => {
  if (!process.env.DATABASE_URL) {
    console.warn(
      '⚠️  DATABASE_URL is not set. Database features will be unavailable. Set DATABASE_URL in your .env file to enable database functionality.',
    )
    // Return a mock client that throws helpful errors
    return new Proxy({} as PrismaClient, {
      get() {
        throw new Error(
          'Database is not configured. Please set DATABASE_URL in your environment variables.',
        )
      },
    })
  }

  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

export const prisma =
  globalForPrisma.prisma ?? getPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

/**
 * Usage example:
 * import { prisma } from '@/lib/prisma'
 * const products = await prisma.product.findMany()
 */
