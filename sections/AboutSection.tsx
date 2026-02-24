'use client'

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing relative overflow-hidden bg-white">
      <div className="container-page relative">
        <div className="space-y-10">
          <header className="max-w-3xl space-y-3 text-center mx-auto">
            <p className="inline-flex items-center rounded-full bg-brand-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
              About Us
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl lg:text-4xl">
              Know About Our Dairy Farm & Our History
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Om Sai Pashu Palan is revolutionizing Nepal's dairy industry by combining fresh, high-quality products with an unwavering commitment to sustainability and community impact. Dudhpuke is our milk brand, delivering farm-fresh dairy products to families across the region.
            </p>
          </header>

          {/* Feature Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-cream bg-white/90 p-6 shadow-soft">
              <h3 className="mb-3 text-lg font-semibold text-brand-dark">Quality Assurance</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Delivering consistently fresh, premium-quality dairy products with rigorous quality checks.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-cream bg-white/90 p-6 shadow-soft">
              <h3 className="mb-3 text-lg font-semibold text-brand-dark">Organic Products</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Pure, natural, and sustainably sourced dairy straight from local farms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

