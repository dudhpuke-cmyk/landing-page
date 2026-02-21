'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { siteMetadata } from '../lib/seo'

const whatsappLink = `https://wa.me/${siteMetadata.whatsappNumber.replace(
  '+',
  '',
)}?text=${encodeURIComponent('Hi, I would like to know more about Dudhpuke milk and dairy products.')}`

export default function HeroSection() {
  return (
    <section className="section-spacing">
      <div className="container-page flex flex-col items-start gap-10 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex-1 space-y-6"
        >
          <p className="inline-flex items-center rounded-full bg-brand-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
            Local Farm • Fresh Dairy Products
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Fresh Milk & Dairy Products Delivered to Your Home
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Dudhpuke is the farm-fresh dairy service from{' '}
            <span className="font-semibold text-brand-green">Om Sai Pashu Palan</span>. We bring
            pure milk, fresh paneer, ghee, and cheese directly from our farm to your home every morning with simple,
            regular delivery.
          </p>
          <p className="max-w-xl text-xs font-medium text-brand-dark/80 sm:text-sm">
            Started by{' '}
            <span className="font-semibold text-brand-dark">Puspa Raj Adhikari</span> - a teacher
            who helped found School and later moved into dairy farming to serve
            local families like his own.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="#contact">Get Products Delivered</Button>
            <Button
              href={whatsappLink}
              variant="outline"
              className="gap-2"
              aria-label="Chat on WhatsApp to learn about Dudhpuke dairy products"
            >
              <span>Book Free Trial Call</span>
            </Button>
          </div>
            <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-600 sm:text-sm">
            <div>
              <p className="font-semibold text-brand-dark">Daily Morning Delivery</p>
              <p>Fresh milk, paneer, ghee & cheese from our farm.</p>
            </div>
            <div>
              <p className="font-semibold text-brand-dark">Transparent & Local</p>
              <p>Know exactly where your dairy products come from.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-3 text-[11px] text-slate-600 sm:text-xs">
            <span className="rounded-full bg-white/70 px-3 py-1 font-semibold text-brand-dark">
              From our own Om Sai Pashu Palan farm
            </span>
            <span className="rounded-full bg-white/70 px-3 py-1 font-semibold text-brand-dark">
              100% pure, farm-direct dairy products
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative flex-1"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-green/10 via-brand-cream/40 to-white blur-2xl" />
          <div className="relative rounded-[2rem] border border-brand-cream bg-white/90 p-4 shadow-soft">
            <div className="flex flex-col items-center gap-3 border-b border-brand-cream pb-4 sm:flex-row sm:justify-between">
              <div className="flex items-center justify-center">
                <Image
                  src="/logo-dudhpuke.jpg"
                  alt="Dudhpuke logo - Farm Fresh Milk"
                  width={300}
                  height={280}
                  className="h-auto w-32 sm:w-40"
                  priority
                />
              </div>
              <div className="text-center text-xs text-slate-500 sm:text-right">
                <p className="font-semibold text-brand-dark">Farm Fresh • Local • Pure</p>
                <p>Daily home delivery of milk & dairy products</p>
              </div>
            </div>
            <div className="mt-4 grid gap-4 text-xs text-slate-700 sm:grid-cols-3 sm:text-sm">
              <div className="rounded-xl bg-brand-cream/60 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">
                  From our farm
                </p>
                <p className="mt-2 font-medium text-brand-dark">Same-morning milking</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  No compromise
                </p>
                <p className="mt-2 font-medium text-brand-dark">No chemicals, no mixing</p>
              </div>
              <div className="rounded-xl bg-stone-50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-brown">
                  Simple to start
                </p>
                <p className="mt-2 font-medium text-brand-dark">Share your need and we handle delivery</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

