'use client'

import { useEffect } from 'react'

type AdType = 'banner' | 'rectangle' | 'sidebar'

type AdUnitProps = {
  type?: AdType
  className?: string
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>
  }
}

export default function AdUnit({ type = 'banner', className = '' }: AdUnitProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({})
      }
    } catch {
      // Ignore AdSense runtime errors in dev or blocked-network environments.
    }
  }, [])

  const adClassByType: Record<AdType, string> = {
    banner: 'ad-unit-banner',
    rectangle: 'ad-unit-rectangle',
    sidebar: 'ad-unit-sidebar',
  }

  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-9234241970335447'
  const adSlotByType: Record<AdType, string> = {
    banner: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER || '7562389963',
    rectangle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE || '1751092832',
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR || '3456789012',
  }

  return (
    <div className={`ad-wrapper ${className}`.trim()}>
      <ins
        className={`adsbygoogle ${adClassByType[type]}`}
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlotByType[type]}
        data-ad-format={type === 'banner' ? 'horizontal' : 'rectangle'}
        data-full-width-responsive={type === 'banner' ? 'true' : 'false'}
      />
    </div>
  )
}
