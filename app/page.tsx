import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'
import ProductsSection from '../sections/ProductsSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import DeliverySection from '../sections/DeliverySection'
import TestimonialsSection from '../sections/TestimonialsSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'
import { FaqFloating } from '../components/marketing/FaqFloating'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-light via-brand-cream to-white">
      <div className="container-page space-y-6 pb-10 pt-4 sm:space-y-8 sm:pt-6 lg:space-y-10 lg:pt-8">
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ProductsSection />
        <HowItWorksSection />
        <DeliverySection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <Footer />
      <FaqFloating />
    </main>
  )
}

