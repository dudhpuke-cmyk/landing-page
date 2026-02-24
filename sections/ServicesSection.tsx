import { SectionShell } from '../components/SectionShell'
import { FeatureCard } from '../components/FeatureCard'

export default function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Our Services"
      title="Services That We Offer"
      description="Comprehensive dairy services to meet all your needs"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Farm Tours & Education"
          description="Guided visits and workshops to learn about sustainable dairy farming."
        />
        <FeatureCard
          title="Packaging & Delivery"
          description="Secure, timely distribution in eco-friendly packaging."
        />
        <FeatureCard
          title="Animal Care & Milking"
          description="Gentle handling and hygienic milking for optimal yield."
        />
      </div>
    </SectionShell>
  )
}
