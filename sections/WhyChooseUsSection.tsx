import { FeatureCard } from '../components/FeatureCard'
import { SectionShell } from '../components/SectionShell'

export default function WhyChooseUsSection() {
  return (
    <SectionShell
      id="why-us"
      eyebrow="Why Choose Us"
      title="Fresh Dairy Products with a Short Journey from Farm to Home"
      description="Dudhpuke keeps the path from our farm to your kitchen simple and clear, so you know what you are serving at home."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Farm Fresh"
          description="Milk is collected from our own farm, and we make paneer, ghee, and cheese fresh daily. Everything is dispatched quickly so it reaches you fresh each morning."
        />
        <FeatureCard
          title="No Chemicals"
          description="We do not use preservatives, whitening agents, or artificial thickening. Just honest, natural milk and dairy products."
        />
        <FeatureCard
          title="Direct from Farm"
          description="No aggregation, no mixing from unknown sources. All your dairy products come from Om Sai Pashu Palan only."
        />
        <FeatureCard
          title="Easy to Plan"
          description="Set your daily milk and dairy product needs once and get predictable deliveries with simple monthly payment."
        />
        <FeatureCard
          title="Local & Accessible"
          description="We focus on nearby delivery areas so we can keep routes short and quality under close watch."
        />
      </div>
    </SectionShell>
  )
}

