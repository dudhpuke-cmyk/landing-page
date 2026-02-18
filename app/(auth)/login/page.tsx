import Link from 'next/link'
import { Button } from '../../../components/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-700">
          This login page is ready for NextAuth integration. Configure providers (email, Google,
          etc.) and connect to your authentication system.
        </p>
        <div className="space-y-3">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-xl border border-brand-cream bg-white px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              placeholder="admin@dudhpuke.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 w-full rounded-xl border border-brand-cream bg-white px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              placeholder="••••••••"
            />
          </div>
          <Button className="w-full">Sign In</Button>
        </div>
        <p className="text-center text-xs text-slate-500">
          <Link href="/" className="text-brand-green hover:underline">
            Back to home
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
