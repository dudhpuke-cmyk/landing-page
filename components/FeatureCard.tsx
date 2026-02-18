import type { ReactNode } from 'react'

type FeatureCardProps = {
  title: string
  description: string
  icon?: ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-brand-cream/70 bg-white/80 p-5 shadow-soft">
      <div className="mb-3 flex items-center gap-3">
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-brand-green">
            {icon}
          </div>
        )}
        <h3 className="text-base font-semibold text-brand-dark sm:text-lg">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-700">{description}</p>
    </div>
  )
}

