import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

export default function SubscriptionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-brand-dark">Subscriptions</h1>
        <p className="mt-2 text-sm text-slate-600">Manage active and paused subscriptions.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subscription Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700">
            This page will show all subscriptions with pause/resume, billing cycle management, and
            delivery schedule controls. Ready for subscription billing logic integration.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
