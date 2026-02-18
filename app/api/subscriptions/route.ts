import { NextResponse } from 'next/server'

/**
 * GET /api/subscriptions
 * Returns user's subscriptions (requires auth)
 * POST /api/subscriptions
 * Creates a new subscription (requires auth)
 * Ready for NextAuth + Prisma integration
 */
export async function GET() {
  // TODO: Add NextAuth session check
  // const session = await getServerSession()
  // if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // TODO: Replace with Prisma query
  // const subscriptions = await prisma.subscription.findMany({
  //   where: { customerId: session.user.id },
  //   include: { product: true, deliveries: true },
  // })

  return NextResponse.json({
    subscriptions: [],
    message: 'Ready for authentication and database integration',
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(_request: Request) {
  // TODO: Add NextAuth session check
  // TODO: Validate request body
  // TODO: Create subscription with Prisma
  // TODO: Set up payment (Razorpay-ready structure)

  return NextResponse.json(
    { message: 'Subscription creation endpoint ready for integration' },
    { status: 201 },
  )
}
