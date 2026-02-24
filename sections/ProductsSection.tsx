import Image from 'next/image'
import { SectionShell } from '../components/SectionShell'

export default function ProductsSection() {
  const products = [
    {
      name: 'Pure Milk',
      image: '/farm-image/milk -bottle.jpg',
    },
    {
      name: 'Fresh Paneer',
      image: '/farm-image/paneer-image.jpg',
    },
    {
      name: 'Organic Ghee',
      image: '/farm-image/ghee.jpg',
    },
    {
      name: 'Fresh Curd',
      image: '/farm-image/IMG_1763.JPG',
    },
  ]

  return (
    <SectionShell
      id="products"
      eyebrow="Our Products"
      title="Our Dairy Products For Healthy Living"
      description="Bringing you a curated range of top-quality dairy goods straight from our farm, delivered fresh and ready to enjoy."
    >
      <div className="mb-8 text-center">
        <h3 className="mb-2 text-xl font-semibold text-brand-dark">We Sell Best Dairy Products</h3>
        <p className="text-sm text-slate-700">
          Direct Sales of Premium Dairy - We sell the best dairy products, ensuring farm-to-table freshness.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-brand-cream bg-white/90 shadow-soft transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-brand-cream/20">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-base font-semibold text-brand-dark sm:text-lg">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

