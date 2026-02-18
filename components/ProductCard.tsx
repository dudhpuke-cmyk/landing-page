type ProductCardProps = {
  name: string
  status?: 'available' | 'coming-soon'
  description: string
}

export function ProductCard({ name, status = 'available', description }: ProductCardProps) {
  const isComingSoon = status === 'coming-soon'

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white/90 p-5 shadow-soft transition-transform hover:-translate-y-1 ${
        isComingSoon ? 'border-dashed border-brand-brown/40 opacity-90' : 'border-brand-cream'
      }`}
    >
      <header className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-brand-dark sm:text-lg">{name}</h3>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
            isComingSoon
              ? 'bg-brand-brown/10 text-brand-brown'
              : 'bg-emerald-50 text-emerald-700'
          }`}
        >
          {isComingSoon ? 'Coming Soon' : 'Available'}
        </span>
      </header>
      <p className="mb-4 text-sm leading-relaxed text-slate-700">{description}</p>
      {!isComingSoon && (
        <p className="mt-auto text-xs font-medium uppercase tracking-[0.18em] text-brand-green">
          Subscription ready
        </p>
      )}
    </article>
  )
}

