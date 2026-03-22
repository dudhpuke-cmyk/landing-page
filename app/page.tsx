import Header from '../sections/Header'
import HeroSection from '../sections/HeroSection'
import FarmUpdatesSection from '../sections/FarmUpdatesSection'
import AboutSection from '../sections/AboutSection'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'
import StatisticsSection from '../sections/StatisticsSection'
import ProductsSection from '../sections/ProductsSection'
import ServicesSection from '../sections/ServicesSection'
import GallerySection from '../sections/GallerySection'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'
import AdUnit from '../sections/AdUnit'

export default function HomePage() {
  const hasSidebarAdConfig = Boolean(
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT && process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR
  )

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container">
        <AdUnit type="banner" />
      </div>

      <HeroSection />

      <div className={`container content-layout ${hasSidebarAdConfig ? 'with-sidebar' : ''}`.trim()}>
        <div className="content">
          <FarmUpdatesSection />
          <AboutSection />
          <AdUnit type="rectangle" />
          <WhyChooseUsSection />
          <StatisticsSection />
          <ProductsSection />
          <ServicesSection />
          <GallerySection />
          <AdUnit type="rectangle" className="hide-mobile-ad" />
          <ContactSection />
        </div>
        {hasSidebarAdConfig && (
          <aside className="sidebar">
            <AdUnit type="sidebar" />
          </aside>
        )}
      </div>

      <Footer />
    </main>
  )
}

