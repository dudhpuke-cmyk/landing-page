import { SectionShell } from '../components/SectionShell'
import { TestimonialCard } from '../components/TestimonialCard'

const testimonials = [
  {
    name: 'Regular Customer',
    location: 'Local Area',
    quote:
      'We like that the milk comes from a nearby farm we know. The taste is consistent, and delivery is on time.',
  },
  {
    name: 'Young Family',
    location: 'Your City',
    quote:
      'Dudhpuke fits well into our mornings. We get fresh milk, paneer, and ghee delivered regularly. It is easier to plan when everything arrives at a fixed time every day.',
  },
  {
    name: 'Tea Shop Owner',
    location: 'Neighbourhood',
    quote:
      'Having one reliable source of milk keeps our tea flavour steady. The regular delivery makes it easy.',
  },
]

export default function TestimonialsSection() {
  return (
    <SectionShell
      id="testimonials"
      eyebrow="Testimonials"
      title="What Our Local Customers Say"
      description="A few words from people who rely on Om Sai Pashu Palan for their daily milk and dairy product needs."
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="flex text-amber-500" aria-hidden="true">
            ★★★★★
          </span>
          <span className="font-medium text-brand-dark">4.9 / 5</span>
          <span>based on early customer feedback</span>
        </div>
        <p className="text-xs text-slate-500">
          Local families, small tea shops, and regular home customers in and around Tarahara.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item.name}
            name={item.name}
            location={item.location}
            quote={item.quote}
          />
        ))}
      </div>
    </SectionShell>
  )
}

