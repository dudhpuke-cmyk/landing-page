'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'

const navItems = [
  { href: '/', label: 'Overview', icon: '📊' },
  { href: '/orders', label: 'Orders', icon: '📦' },
  { href: '/subscriptions', label: 'Subscriptions', icon: '🔄' },
  { href: '/customers', label: 'Customers', icon: '👥' },
  { href: '/products', label: 'Products', icon: '🥛' },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-brand-cream bg-white/90">
      <div className="border-b border-brand-cream p-6">
        <h2 className="text-lg font-semibold text-brand-dark">Dudhpuke</h2>
        <p className="text-xs text-slate-500">Admin Dashboard</p>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-brand-green/10 text-brand-green'
                  : 'text-slate-700 hover:bg-brand-cream/50',
              )}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-brand-cream p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-brand-cream/50"
        >
          <span className="text-base">🏠</span>
          <span>Back to Site</span>
        </Link>
      </div>
    </aside>
  )
}
