'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    title: 'The Farm of Dairy products',
    subtitle: 'Organic Dairy Products',
    description: 'Welcome to our dairy farm',
    image: '/farm-image/main-image.jpg',
  },
  {
    id: 2,
    title: 'Best Organic Dairy Products',
    subtitle: 'Organic Dairy Products',
    description: 'Welcome to our dairy farm',
    image: '/farm-image/second-main-image.jpg',
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[500px] overflow-hidden sm:min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0"
              style={{ zIndex: index === currentSlide ? 1 : 0 }}
            >
              <Image
                src={slide.image}
                alt="Dudhpuke farm background"
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                unoptimized
              />
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" style={{ zIndex: 2 }} />
      </div>

      {/* Carousel Content */}
      <div className="container-page relative z-10 flex h-full min-h-[500px] items-center justify-center sm:min-h-[600px] lg:min-h-[700px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] sm:text-base">
              {slides[currentSlide].subtitle}
            </p>
            <p className="mb-2 text-base sm:text-lg">{slides[currentSlide].description}</p>
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              {slides[currentSlide].title}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Previous/Next Buttons */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30"
          aria-label="Previous slide"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30"
          aria-label="Next slide"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

