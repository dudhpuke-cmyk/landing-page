import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-brand-dark">Dashboard Overview</h1>
        <p className="mt-2 text-sm text-slate-600">
          Welcome to the Dudhpuke admin dashboard. Manage orders, subscriptions, and customers from here.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-brand-dark">--</p>
            <p className="text-xs text-slate-500">Ready for database integration</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-brand-dark">--</p>
            <p className="text-xs text-slate-500">Ready for database integration</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-brand-dark">--</p>
            <p className="text-xs text-slate-500">Ready for database integration</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-brand-dark">--</p>
            <p className="text-xs text-slate-500">Ready for database integration</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700">
            This dashboard is ready for authentication (NextAuth), database queries (Prisma), and
            payment integration (Razorpay). All routes and components are structured for easy
            expansion.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
