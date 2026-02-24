import Header from '../sections/Header'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'
import StatisticsSection from '../sections/StatisticsSection'
import ProductsSection from '../sections/ProductsSection'
import ServicesSection from '../sections/ServicesSection'
import GallerySection from '../sections/GallerySection'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
      <StatisticsSection />
        <ProductsSection />
      <ServicesSection />
      <GallerySection />
        <ContactSection />
      <Footer />
    </main>
  )
}

