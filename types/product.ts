export type ProductStatus = 'ACTIVE' | 'COMING_SOON' | 'DISCONTINUED'

export type SubscriptionPlan = 'DAILY' | 'MONTHLY' | 'CUSTOM'

export type BillingCycle = 'MONTHLY' | 'QUARTERLY' | 'YEARLY'

export type Product = {
  id: string
  name: string
  slug: string
  description?: string
  status: ProductStatus
  unit: string
  basePrice: number
  isSubscriptionEnabled: boolean
  isVisibleOnSite: boolean
}

