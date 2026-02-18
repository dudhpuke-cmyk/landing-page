type StepCardProps = {
  step: number
  title: string
  description: string
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-brand-cream bg-white/90 p-5 shadow-soft">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-green/10 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
        0{step}
      </div>
      <h3 className="mb-2 text-base font-semibold text-brand-dark sm:text-lg">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-700">{description}</p>
    </div>
  )
}

