'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionShell } from '../../components/SectionShell'
import farmUpdatesData from '../data/farmUpdates.json'

export default function FarmUpdatesSection() {
  const [updates, setUpdates] = useState([])
  const [imageErrors, setImageErrors] = useState({})

  useEffect(() => {
    const sortedUpdates = [...farmUpdatesData].sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    setUpdates(sortedUpdates)
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  if (updates.length === 0) {
    return (
      <SectionShell
        id="farm-updates"
        eyebrow="Farm Updates"
        title="From Our Farm to Your Family"
        description="Stay connected with daily happenings at our dairy farm."
      >
        <div className="py-12 text-center">
          <p className="text-slate-600">No farm updates available at the moment.</p>
        </div>
      </SectionShell>
    )
  }

  return (
    <SectionShell
      id="farm-updates"
      eyebrow="Farm Updates"
      title="From Our Farm to Your Family"
      description="Stay connected with daily happenings at our dairy farm."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {updates.map((update, index) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-brand-cream bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-brand-cream/20">
              {update.mediaType === 'image' ? (
                imageErrors[update.id] ? (
                  <div className="flex h-full items-center justify-center bg-brand-cream/30">
                    <p className="text-sm text-slate-500">Image not available</p>
                  </div>
                ) : (
                  <Image
                    src={update.mediaUrl}
                    alt={update.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={() => handleImageError(update.id)}
                  />
                )
              ) : (
                <video
                  src={update.mediaUrl}
                  controls
                  className="h-full w-full object-cover"
                  onError={() => handleImageError(update.id)}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold text-brand-dark">{update.title}</h3>
              <p className="mb-3 text-sm leading-relaxed text-slate-700">{update.caption}</p>
              <p className="text-xs font-medium text-brand-green">{formatDate(update.date)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
