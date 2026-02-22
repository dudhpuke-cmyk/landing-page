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
          src="/farm-image/IMG_1752.JPG"
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-cream bg-white/95 shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream/20">
                <Image
                  src="/farm-image/IMG_1754.JPG"
                  alt="Young calf resting on hay at Dudhpuke dairy farm"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="space-y-1 p-4 text-xs sm:text-sm">
                <p className="font-semibold text-brand-dark">Our Young Calves</p>
                <p className="text-slate-700">Caring for our young calves with fresh hay and comfortable shelter.</p>
              </figcaption>
            </figure>

            <figure className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-cream bg-white/95 shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream/20">
                <Image
                  src="/farm-image/IMG_1755.JPG"
                  alt="Black dairy cow eating from trough at Dudhpuke farm"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="space-y-1 p-4 text-xs sm:text-sm">
                <p className="font-semibold text-brand-dark">Well-Fed Cows</p>
                <p className="text-slate-700">Our dairy cows receive proper nutrition and care daily.</p>
              </figcaption>
            </figure>

            <figure className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-cream bg-white/95 shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream/20">
                <Image
                  src="/farm-image/IMG_1756.JPG"
                  alt="Puspa Raj Adhikari cooking food for the cows at Dudhpuke dairy farm"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="space-y-1 p-4 text-xs sm:text-sm">
                <p className="font-semibold text-brand-dark">Preparing Cow Feed</p>
                <p className="text-slate-700">Our founder, Puspa Raj Adhikari, preparing nutritious meals for our cows.</p>
              </figcaption>
            </figure>

            <figure className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-cream bg-white/95 shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream/20">
                <Image
                  src="/farm-image/IMG_1757.JPG"
                  alt="Cow in pen with hay at Dudhpuke dairy farm"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="space-y-1 p-4 text-xs sm:text-sm">
                <p className="font-semibold text-brand-dark">Comfortable Pens</p>
                <p className="text-slate-700">Our cows rest in clean, well-maintained pens with fresh hay.</p>
              </figcaption>
            </figure>

            <figure className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-cream bg-white/95 shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream/20">
                <Image
                  src="/farm-image/IMG_1758.JPG"
                  alt="Close-up of dairy cow in barn at Dudhpuke farm"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="space-y-1 p-4 text-xs sm:text-sm">
                <p className="font-semibold text-brand-dark">Caring for Our Cows</p>
                <p className="text-slate-700">Each cow receives individual attention and proper care in our barn.</p>
              </figcaption>
            </figure>

            <figure className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-cream bg-white/95 shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream/20">
                <Image
                  src="/farm-image/IMG_1759.JPG"
                  alt="Dairy cow feeding in barn at Dudhpuke farm"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="space-y-1 p-4 text-xs sm:text-sm">
                <p className="font-semibold text-brand-dark">Daily Feeding</p>
                <p className="text-slate-700">Regular feeding ensures our cows stay healthy and produce quality milk.</p>
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

