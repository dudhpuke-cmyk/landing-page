'use client'

import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { faqs } from '../../sections/FaqSection'

export function FaqFloating() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      {open && (
        <div className="mb-3 w-80 max-w-[90vw] rounded-2xl border border-brand-cream bg-white/95 p-3 shadow-soft backdrop-blur-sm sm:w-96">
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
              FAQ
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs text-slate-500 hover:text-brand-dark"
            >
              Close
            </button>
          </div>
          <p className="mb-2 text-xs text-slate-600">
            Quick answers to common questions about Dudhpuke dairy products.
          </p>
          <div className="max-h-64 overflow-y-auto rounded-xl border border-brand-cream/70 bg-white/90">
            <Accordion aria-label="Frequently asked questions about Dudhpuke dairy products">
              {faqs.map((item) => (
                <AccordionItem key={item.id} itemId={item.id}>
                  <AccordionTrigger className="text-xs sm:text-sm">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    <p className="leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white shadow-soft hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
        aria-expanded={open}
        aria-label="Toggle Dudhpuke dairy products FAQ"
      >
        <span>FAQ</span>
        <span className="text-[10px]">?</span>
      </button>
    </div>
  )
}

