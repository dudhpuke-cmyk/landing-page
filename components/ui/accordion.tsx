'use client'

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '../../lib/utils'

type AccordionContextValue = {
  openItem: string | null
  toggleItem: (id: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)
const AccordionItemContext = createContext<string>('')

type AccordionProps = {
  defaultItemId?: string
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export function Accordion({ defaultItemId, children, className, ...props }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(defaultItemId ?? null)

  const toggleItem = useCallback((id: string) => {
    setOpenItem((current) => (current === id ? null : id))
  }, [])

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div
        className={cn('divide-y divide-brand-cream rounded-2xl border border-brand-cream bg-white/90', className)}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

type AccordionItemProps = {
  itemId?: string
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export function AccordionItem({ itemId, children, className, ...props }: AccordionItemProps) {
  const generatedId = useId()
  const id = itemId ?? generatedId

  return (
    <AccordionItemContext.Provider value={id}>
      <div className={cn('group', className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

type AccordionTriggerProps = {
  children: ReactNode
} & HTMLAttributes<HTMLButtonElement>

export function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('AccordionTrigger must be used within <Accordion>')

  const itemId = useContext(AccordionItemContext) ?? ''
  const isOpen = ctx.openItem === itemId

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      className={cn(
        'flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-brand-dark transition-colors hover:bg-brand-cream/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2',
        className,
      )}
      onClick={() => ctx.toggleItem(itemId)}
      {...props}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-5 w-5 items-center justify-center rounded-full border border-brand-cream text-[10px] text-slate-500 transition-transform',
          isOpen && 'rotate-90',
        )}
      >
        →
      </span>
    </button>
  )
}

type AccordionContentProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('AccordionContent must be used within <Accordion>')

  const itemId = useContext(AccordionItemContext) ?? ''
  const isOpen = ctx.openItem === itemId

  return (
    <div
      hidden={!isOpen}
      className={cn('px-5 pb-4 pt-1 text-sm text-slate-700', className)}
      {...props}
    >
      {children}
    </div>
  )
}

