import { NextResponse } from 'next/server'

/**
 * GET /api/products
 * Returns list of available products
 * Ready for Prisma integration
 */
export async function GET() {
  // TODO: Replace with Prisma query
  // const products = await prisma.product.findMany({ where: { isActive: true } })

  return NextResponse.json({
    products: [
      {
        id: '1',
        name: 'Fresh Cow Milk',
        status: 'available',
        description: 'Everyday drinking milk collected from our own herd.',
      },
      {
        id: '2',
        name: 'Paneer',
        status: 'available',
        description: 'Soft, fresh paneer made from Dudhpuke milk.',
      },
      {
        id: '3',
        name: 'Ghee & Cheese',
        status: 'coming-soon',
        description: 'Slow-cooked ghee and curated cheese options.',
      },
    ],
  })
}
