import Link from 'next/link'
import type { ComponentProps } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'

type ButtonProps = {
  variant?: ButtonVariant
  href?: string
} & ComponentProps<'button'>

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-green text-white hover:bg-brand-dark shadow-soft shadow-brand-green/25',
  outline:
    'border border-brand-green text-brand-green bg-white/70 hover:bg-brand-green/5',
  ghost: 'text-brand-green hover:bg-brand-green/10',
}

export function Button({ variant = 'primary', href, className = '', ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    )
  }

  return <button className={classes} {...props} />
}

