import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-brand-dark">Products</h1>
        <p className="mt-2 text-sm text-slate-600">Manage product catalog and pricing.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700">
            This page will allow adding, editing, and managing products (milk, paneer, ghee, etc.)
            with pricing, availability status, and inventory tracking. Ready for e-commerce
            integration.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
