type TestimonialCardProps = {
  name: string
  location: string
  quote: string
}

export function TestimonialCard({ name, location, quote }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-brand-cream bg-white/90 p-5 shadow-soft">
      <blockquote className="mb-4 text-sm leading-relaxed text-slate-700">
        “{quote}”
      </blockquote>
      <figcaption className="text-sm font-medium text-brand-dark">
        {name}
        <span className="ml-1 text-xs font-normal text-slate-500">• {location}</span>
      </figcaption>
    </figure>
  )
}

