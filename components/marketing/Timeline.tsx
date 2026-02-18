'use client'

import { motion } from 'framer-motion'
import { useInViewAnimation } from '../../hooks/useInViewAnimation'

type TimelineItem = {
  year: string
  title: string
  description: string
}

type TimelineProps = {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  const { ref, isInView, variants } = useInViewAnimation()

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-brand-cream md:left-8" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.year}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ delay: index * 0.15 }}
            className="relative flex gap-6 md:gap-8"
          >
            <div className="flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-green bg-white text-xs font-semibold text-brand-green md:h-10 md:w-10 md:text-sm">
                {item.year}
              </div>
            </div>
            <div className="flex-1 pb-8">
              <h4 className="mb-1 text-base font-semibold text-brand-dark sm:text-lg">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
