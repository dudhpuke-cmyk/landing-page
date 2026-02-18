import { SectionShell } from '../components/SectionShell'
import { Timeline } from '../components/marketing/Timeline'

export default function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About Dudhpuke"
      title="A Family-Run Dairy You Can Rely On"
      description="Dudhpuke is the farm-fresh dairy brand by Om Sai Pashu Palan — a family-run dairy that supplies fresh milk, paneer, ghee, and cheese to nearby homes and shops."
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr]">
        <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            Our story started with local milk supply — caring for our cows and delivering fresh milk
            to nearby homes and shops around Tarahara. Over time, we expanded to make paneer, ghee, and cheese from the same fresh milk. This work has built a group of
            families who rely on us every morning.
          </p>
          <p>
            In 2020, Om Sai Pashu Palan was officially registered as a dairy business. With
            Dudhpuke, we continue the same straightforward promise: fresh milk and dairy products from our own farm,
            delivered on time to your home.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-brand-cream bg-white/90 p-5 shadow-soft">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
            What we stand for
          </h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>• Fresh milk, paneer, ghee, and cheese from our own farm.</li>
            <li>• Clear, predictable daily delivery.</li>
            <li>• Simple monthly payment and easy changes over call or WhatsApp.</li>
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}

