import { SectionShell } from '../components/SectionShell'
import { Button } from '../components/Button'
import { ContactForm } from '../components/marketing/ContactForm'
import { siteMetadata } from '../lib/seo'

const phoneDisplay = siteMetadata.businessPhone
const phoneLink = `tel:${siteMetadata.businessPhone.replace(/[^0-9+]/g, '')}`
const whatsappLink = `https://wa.me/${siteMetadata.whatsappNumber.replace(
  '+',
  '',
)}?text=${encodeURIComponent('Hi, I would like to know more about Dudhpuke milk and dairy products.')}`

export default function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Get in Touch for Dudhpuke Products"
      description="Share a few basic details and we will call or message you back to confirm your Dudhpuke milk and dairy product delivery."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
        <div className="space-y-5 rounded-2xl border border-brand-cream bg-white/90 p-5 shadow-soft">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
            Tell us about your requirement
          </h3>
          <ContactForm />
          <div className="space-y-3 text-sm text-slate-700 sm:text-base">
            <p>
              <span className="font-semibold text-brand-dark">Phone:&nbsp;</span>
              <a href={phoneLink} className="text-brand-green underline-offset-2 hover:underline">
                {phoneDisplay}
              </a>
            </p>
            <p>
              <span className="font-semibold text-brand-dark">WhatsApp:&nbsp;</span>
              <a
                href={whatsappLink}
                className="text-brand-green underline-offset-2 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Chat with us
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href={whatsappLink} className="gap-2">
              Start on WhatsApp
            </Button>
            <Button href={phoneLink} variant="outline">
              Call Om Sai Pashu Palan
            </Button>
          </div>
          <p className="pt-3 text-xs text-slate-500">
            Typical response time is within delivery hours. For any changes to your delivery, you can
            also send a simple message over WhatsApp.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-dashed border-brand-cream bg-brand-light/70 p-5 text-sm text-slate-700">
            <h3 className="text-sm font-semibold text-brand-dark">
              Where we deliver
            </h3>
            <p className="mt-2">
              Fresh milk, paneer, ghee, and cheese are supplied locally from Itahari-20, Tarahara and nearby areas. Packaged dairy products can also be shipped across Nepal.
            </p>
            <ul className="mt-3 space-y-1 text-xs sm:text-sm">
              <li>• Primary delivery radius around Om Sai Pashu Palan farm.</li>
              <li>• Neighbourhoods within a short driving distance for fresh supply.</li>
              <li>• Larger apartment complexes and housing societies on the main routes.</li>
            </ul>
            <div className="mt-4 flex h-32 items-center justify-center rounded-xl border border-brand-cream bg-white/70 text-[11px] text-slate-400">
              Google Maps / coverage illustration can be embedded here later.
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

