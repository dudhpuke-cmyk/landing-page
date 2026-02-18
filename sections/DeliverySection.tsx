import { SectionShell } from '../components/SectionShell'

export default function DeliverySection() {
  return (
    <SectionShell
      id="delivery"
      eyebrow="Delivery Coverage"
      title="Where We Deliver Dudhpuke Products"
      description="Dudhpuke focuses on nearby areas around Om Sai Pashu Palan so fresh milk and dairy products reach your home quickly."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
        <div className="space-y-3 rounded-2xl border border-brand-cream bg-white/90 p-5 shadow-soft text-sm text-slate-700">
          <h3 className="text-sm font-semibold text-brand-dark">How we plan routes</h3>
          <p>
            Our delivery routes are designed around nearby neighbourhoods, apartments, and shops so
            we can maintain quality and reliability. Shorter routes mean less time between milking
            and your morning glass of milk, and fresher paneer, ghee, and cheese.
          </p>
          <ul className="mt-2 space-y-1 text-xs sm:text-sm">
            <li>• Primary coverage around Itahari-20, Tarahara and nearby areas.</li>
            <li>• Focus on housing clusters and main roads for predictable timing.</li>
            <li>• Scope to expand delivery zones as demand grows.</li>
          </ul>
        </div>
        <div className="space-y-3">
          <div className="flex h-44 items-center justify-center rounded-2xl border border-dashed border-brand-cream bg-brand-light/70 text-[11px] text-slate-400">
            Local areas around Itahari-20, Tarahara and nearby neighbourhoods.
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

