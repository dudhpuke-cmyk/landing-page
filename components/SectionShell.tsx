'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

type SectionShellProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

export function SectionShell({ id, eyebrow, title, description, children }: SectionShellProps) {
  const { ref, isInView, variants } = useInViewAnimation()

  return (
    <section id={id} className="section-spacing" aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="container-page">
        <motion.div
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={ref as any}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          className="space-y-10"
        >
          <header className="max-w-3xl space-y-3">
            {eyebrow && (
              <p className="inline-flex items-center rounded-full bg-brand-cream px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
                {eyebrow}
              </p>
            )}
            <h2
              id={id ? `${id}-title` : undefined}
              className="text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl lg:text-4xl"
            >
              {title}
            </h2>
            {description && (
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                {description}
              </p>
            )}
          </header>
          {children}
        </motion.div>
      </div>
    </section>
  )
}

