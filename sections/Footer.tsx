import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-brand-cream bg-white/90">
      <div className="container-page flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-sm text-slate-700">
          <p className="font-semibold text-brand-dark">Dudhpuke</p>
          <p className="text-xs text-slate-500">A brand by Om Sai Pashu Palan</p>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-xs text-slate-600 sm:text-sm">
          <Link href="#about" className="hover:text-brand-green">
            About
          </Link>
          <Link href="#why-us" className="hover:text-brand-green">
            Why Dudhpuke
          </Link>
          <Link href="#products" className="hover:text-brand-green">
            Products
          </Link>
          <Link href="#how-it-works" className="hover:text-brand-green">
            How It Works
          </Link>
          <Link href="#contact" className="hover:text-brand-green">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3 text-slate-500">
          <a
            href="https://www.facebook.com/profile.php?id=61559236224392"
            aria-label="Dudhpuke on Facebook"
            className="rounded-full border border-brand-cream bg-brand-light/80 p-1.5 text-[11px] hover:border-brand-green hover:text-brand-green"
          >
            fb
          </a>
          <a
            href="https://www.instagram.com/dudhpuke/"
            aria-label="Dudhpuke on Instagram"
            className="rounded-full border border-brand-cream bg-brand-light/80 p-1.5 text-[11px] hover:border-brand-green hover:text-brand-green"
          >
            ig
          </a>
          <a
            href="https://wa.me/9779806343974"
            aria-label="Dudhpuke on WhatsApp"
            className="rounded-full border border-brand-cream bg-brand-light/80 p-1.5 text-[11px] hover:border-brand-green hover:text-brand-green"
          >
            wa
          </a>
        </div>
      </div>
    </footer>
  )
}

