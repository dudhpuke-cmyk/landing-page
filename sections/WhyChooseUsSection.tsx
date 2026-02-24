import { FeatureCard } from '../components/FeatureCard'
import { SectionShell } from '../components/SectionShell'

export default function WhyChooseUsSection() {
  return (
    <SectionShell
      id="why-us"
      eyebrow="Why Us!"
      title="Few Reasons Why People Choosing Us!"
      description="Our commitment to quality, freshness, and sustainability sets us apart in the dairy industry. Here's why our customers trust us:"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Fresh, quality dairy products"
          description="We deliver consistently fresh, premium-quality dairy products with rigorous quality checks."
        />
        <FeatureCard
          title="Eco-friendly practices"
          description="Pure, natural, and sustainably sourced dairy straight from local farms with environmentally conscious practices."
        />
        <FeatureCard
          title="Strict quality checks"
          description="Every product undergoes thorough quality assurance to ensure you receive only the best dairy products."
        />
      </div>
      <div className="mt-8 text-center">
        <a
          href="#products"
          className="inline-flex items-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          Explore More
        </a>
      </div>
    </SectionShell>
  )
}

