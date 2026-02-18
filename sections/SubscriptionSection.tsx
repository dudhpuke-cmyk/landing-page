import { SectionShell } from '../components/SectionShell'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const plans = [
  {
    id: 'daily',
    name: 'Daily Plan',
    badge: 'Most Common',
    price: 'Based on daily litres',
    description:
      'Ideal for families who want a fixed quantity of milk delivered every morning.',
    points: ['Fixed daily quantity', 'Simple month-end summary', 'Pause on holidays'],
  },
  {
    id: 'monthly',
    name: 'Monthly Plan',
    badge: 'Subscription Ready',
    price: 'Predictable monthly billing',
    description:
      'Structured for predictable monthly expenses with the same route and timing.',
    points: ['Monthly billing cycle', 'Consistent timings', 'Option to adjust quantity'],
  },
  {
    id: 'custom',
    name: 'Custom Plan',
    badge: 'Flexible',
    price: 'Tailored to your routine',
    description:
      'For apartments, tea shops, or households with changing weekly needs.',
    points: ['Different quantities on different days', 'Suitable for small businesses', 'Designed to support online self-service later'],
  },
]

export default function SubscriptionSection() {
  return null
}

