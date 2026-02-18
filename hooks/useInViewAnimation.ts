'use client'

import { useRef } from 'react'
import { useInView, type Variants } from 'framer-motion'

type MarginType = `${number}${'px' | '%'}` | `${number}${'px' | '%'} ${number}${'px' | '%'}` | `${number}${'px' | '%'} ${number}${'px' | '%'} ${number}${'px' | '%'}` | `${number}${'px' | '%'} ${number}${'px' | '%'} ${number}${'px' | '%'} ${number}${'px' | '%'}`

export function useInViewAnimation(options?: { once?: boolean; margin?: MarginType }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? '-10% 0px -10% 0px',
  })

  const variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
    },
  }

  return { ref, isInView, variants }
}

