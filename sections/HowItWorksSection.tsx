import { SectionShell } from '../components/SectionShell'
import { Timeline } from '../components/marketing/Timeline'

export default function HowItWorksSection() {
  return (
    <SectionShell
      id="how-it-works"
      eyebrow="How It Works"
      title="Daily Routine from Farm to Your Cup"
      description="The same simple routine every day — so you know exactly how your milk is handled before it reaches your family."
    >
      <Timeline
        items={[
          {
            year: '3:30–5:00',
            title: 'Morning Milking at the Farm',
            description:
              'Milking starts around 3:30 am and finishes by 5:00 am at our own farm. The same milk we keep for our family is what we send out for customers.',
          },
          {
            year: '5:15',
            title: 'Chilling, Packing & First Deliveries',
            description:
              'Straight after milking we chill and pack the milk, then send fresh cans to local tea shops so they can open with Dudhpuke milk.',
          },
          {
            year: '7:00+',
            title: 'Doorstep Delivery & Farm Pick‑Ups',
            description:
              'Morning rounds continue to nearby homes and shops, while 5–6 neighbouring families visit the farm to collect their milk directly.',
          },
          {
            year: 'PM',
            title: 'Care, Cleanliness & Afternoon Milking',
            description:
              'After each milking we feed green grass, maize mix and balanced feed, clean sheds for hygiene, then repeat the routine with afternoon milking (around 1:30–2:30 pm), chilling and delivery.',
          },
        ]}
      />
    </SectionShell>
  )
}

