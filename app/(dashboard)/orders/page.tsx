import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-brand-dark">Orders</h1>
        <p className="mt-2 text-sm text-slate-600">View and manage all customer orders.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700">
            This page will display a table of orders with filters, search, and status management.
            Ready for Prisma queries and real-time updates.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
