import { SectionShell } from '../components/SectionShell'
import { StepCard } from '../components/StepCard'

export default function HowItWorksSection() {
  return (
    <SectionShell
      id="how-it-works"
      eyebrow="How It Works"
      title="Simple Process, Predictable Delivery"
      description="Dudhpuke is designed around your daily routine — tell us your milk and dairy product needs once and we handle the rest."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <StepCard
          step={1}
          title="Share Your Requirement"
          description="Tell us your family's daily milk and dairy product needs (milk, paneer, ghee, cheese), preferred start date, and basic delivery details over call or WhatsApp."
        />
        <StepCard
          step={2}
          title="Daily Delivery"
          description="We deliver fresh milk, paneer, ghee, and cheese to your doorstep in the morning on agreed days, with clear communication on holidays."
        />
        <StepCard
          step={3}
          title="Monthly Payment"
          description="At month-end, you settle your bill with a simple summary of deliveries and can pay via your preferred offline or digital mode."
        />
      </div>
    </SectionShell>
  )
}

