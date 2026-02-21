'use client'

import Image from 'next/image'
import { SectionShell } from '../components/SectionShell'
import { Timeline } from '../components/marketing/Timeline'

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      {/* Farm Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/farm-background.jpg"
          alt="Dudhpuke farm background - green fields and dairy farm"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-light/95 via-brand-cream/90 to-white/95" />
      </div>

      <div className="container-page relative">
        <div className="space-y-10">
          <header className="max-w-3xl space-y-3">
            <p className="inline-flex items-center rounded-full bg-brand-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
              About Dudhpuke
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl lg:text-4xl">
              A Family-Run Dairy You Can Rely On
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Dudhpuke is the farm-fresh dairy brand by Om Sai Pashu Palan — a family-run dairy that supplies fresh milk, paneer, ghee, and cheese to nearby homes and shops.
            </p>
          </header>

          {/* Farm Process Images Gallery */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            <figure className="group relative overflow-hidden rounded-2xl border border-brand-cream bg-white/95 shadow-soft">
              <Image
                src="/images/farm-family.jpg"
                alt="Family members working together at Dudhpuke dairy farm"
                width={900}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 lg:h-80"
              />
              <figcaption className="space-y-1 p-3 text-xs sm:text-sm">
                <p className="font-semibold text-brand-dark">Family-Run Operation</p>
                <p className="text-slate-700">Our family has been running this dairy for generations.</p>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-brand-cream bg-white/95 shadow-soft">
              <Image
                src="/images/farm-cows-grazing.jpg"
                alt="Healthy cows grazing on Dudhpuke farm fields"
                width={900}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 lg:h-80"
              />
              <figcaption className="space-y-1 p-3 text-xs sm:text-sm">
                <p className="font-semibold text-brand-dark">Our Farm Cattle</p>
                <p className="text-slate-700">Well-cared-for cows on our own farm fields.</p>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-brand-cream bg-white/95 shadow-soft">
              <Image
                src="/images/milking-process.jpg"
                alt="Fresh milking process at Dudhpuke dairy farm"
                width={900}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 lg:h-80"
              />
              <figcaption className="space-y-1 p-3 text-xs sm:text-sm">
                <p className="font-semibold text-brand-dark">Morning Milking</p>
                <p className="text-slate-700">Same-morning milking for the freshest milk.</p>
              </figcaption>
            </figure>

            <figure className="group relative overflow-hidden rounded-2xl border border-brand-cream bg-white/95 shadow-soft">
              <Image
                src="/images/dairy-processing.jpg"
                alt="Processing paneer and ghee from fresh milk at Dudhpuke"
                width={900}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 lg:h-80"
              />
              <figcaption className="space-y-1 p-3 text-xs sm:text-sm">
                <p className="font-semibold text-brand-dark">Dairy Processing</p>
                <p className="text-slate-700">Making paneer, ghee, and cheese from our fresh milk.</p>
              </figcaption>
            </figure>
          </div>

          {/* Story Content */}
          <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr]">
            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                Dudhpuke was started by our father,{' '}
                <span className="font-semibold text-brand-dark">Puspa Raj Adhikari</span>. He was a
                master&apos;s student who, together with a close friend, helped found Him Shikhar English
                School in his earlier days. Later, due to family responsibilities, he stepped away
                from the school and moved fully into farming and dairy work.
              </p>
              <p>
                Our story with milk began by supplying neighbours around Tarahara - caring for our
                cows and delivering fresh milk to nearby homes and shops. Over time, we expanded to
                make paneer, ghee, and cheese from the same fresh milk. This work has built a circle
                of families who rely on us every morning and who know our father personally.
              </p>
              <p>
                In 2020, Om Sai Pashu Palan was officially registered as a dairy business. With
                Dudhpuke, we continue the same straightforward promise our father began: fresh milk
                and dairy products from our own farm, delivered on time to your home.
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
        </div>
      </div>
    </section>
  )
}

