'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { siteMetadata } from '../lib/seo'

const phoneLink = `tel:${siteMetadata.businessPhone.replace(/[^0-9+]/g, '')}`

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-cream bg-white/95 backdrop-blur-sm">
      <div className="container-page">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-dudhpuke.jpg"
              alt="Dudhpuke logo"
              width={50}
              height={50}
              className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
            />
            <span className="text-xl font-semibold text-brand-dark sm:text-2xl">Dudhpuke</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-brand-green">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-slate-700 hover:text-brand-green">
              About
            </Link>
            <Link href="#products" className="text-sm font-medium text-slate-700 hover:text-brand-green">
              Products
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-slate-700 hover:text-brand-green">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-700 hover:text-brand-green">
              Contact
            </Link>
          </nav>

          {/* Phone Number & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href={phoneLink}
              className="hidden items-center gap-2 text-sm font-medium text-brand-green hover:text-brand-dark sm:flex"
            >
              <span>Call Us:</span>
              <span>{siteMetadata.businessPhone}</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1.5 p-2 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-6 bg-brand-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span className={`h-0.5 w-6 bg-brand-dark transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`h-0.5 w-6 bg-brand-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t border-brand-cream py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-slate-700 hover:text-brand-green"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-slate-700 hover:text-brand-green"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#products"
                className="text-sm font-medium text-slate-700 hover:text-brand-green"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="#gallery"
                className="text-sm font-medium text-slate-700 hover:text-brand-green"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-slate-700 hover:text-brand-green"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href={phoneLink}
                className="text-sm font-medium text-brand-green hover:text-brand-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Call Us: {siteMetadata.businessPhone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
