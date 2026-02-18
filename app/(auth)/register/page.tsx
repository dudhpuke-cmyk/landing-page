import Link from 'next/link'
import { Button } from '../../../components/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-700">
          Customer registration page. Ready for NextAuth and Prisma integration to create user
          accounts.
        </p>
        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-slate-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full rounded-xl border border-brand-cream bg-white px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-xl border border-brand-cream bg-white px-4 py-2.5 text-sm focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              placeholder="customer@example.com"
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
          <Button className="w-full">Create Account</Button>
        </div>
        <p className="text-center text-xs text-slate-500">
          Already have an account?{' '}
          <Link href="/login" className="text-brand-green hover:underline">
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
