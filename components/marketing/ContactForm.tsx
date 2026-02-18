'use client'

import { useState, FormEvent } from 'react'
import { Button } from '../Button'

type ContactFormData = {
  name: string
  phone: string
  area?: string
  requirement?: string
  notes?: string
  email?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    area: '',
    requirement: '',
    notes: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! We will contact you shortly.',
        })
        // Reset form
        setFormData({
          name: '',
          phone: '',
          area: '',
          requirement: '',
          notes: '',
          email: '',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        })
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit. Please try again or contact us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 text-sm text-slate-700 sm:text-base"
      aria-label="Lead form to start Dudhpuke dairy product subscription"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-medium text-brand-dark">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-full border border-brand-cream bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-brand-green"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-xs font-medium text-brand-dark">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-full border border-brand-cream bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-brand-green"
            placeholder="Mobile / WhatsApp"
          />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="area" className="text-xs font-medium text-brand-dark">
            Area / locality
          </label>
          <input
            id="area"
            name="area"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            className="w-full rounded-full border border-brand-cream bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-brand-green"
            placeholder="Your neighbourhood"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="requirement" className="text-xs font-medium text-brand-dark">
            Daily dairy requirement
          </label>
          <input
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
            className="w-full rounded-full border border-brand-cream bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-brand-green"
            placeholder="e.g. 1.5L milk, 200g paneer"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-xs font-medium text-brand-dark">
          Email (optional, for confirmation)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-full border border-brand-cream bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-brand-green"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="notes" className="text-xs font-medium text-brand-dark">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full rounded-2xl border border-brand-cream bg-white px-3 py-2 text-sm outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-brand-green"
          placeholder="Share preferred start date, building name, or any special instructions."
        />
      </div>
      {submitStatus.type && (
        <div
          className={`rounded-xl border p-3 text-sm ${
            submitStatus.type === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border-red-200 bg-red-50 text-red-700'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
      </Button>
    </form>
  )
}
