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

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

/**
 * Usage example:
 * import { prisma } from '@/lib/prisma'
 * const products = await prisma.product.findMany()
 */
