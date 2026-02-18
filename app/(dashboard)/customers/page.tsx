import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-brand-dark">Customers</h1>
        <p className="mt-2 text-sm text-slate-600">View and manage customer accounts.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700">
            This page will display customer profiles, order history, subscription status, and
            delivery addresses. Ready for customer relationship management features.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
