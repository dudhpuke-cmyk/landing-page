import { ProductCard } from '../components/ProductCard'
import { SectionShell } from '../components/SectionShell'

export default function ProductsSection() {
  return (
    <SectionShell
      id="products"
      eyebrow="Our Products"
      title="Fresh Milk and Dairy Products from Dudhpuke"
      description="Start your day with farm-fresh Dudhpuke milk and add paneer, ghee, and cheese to your kitchen — all produced from the same trusted source."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ProductCard
          name="Fresh Cow Milk"
          status="available"
          description="Everyday drinking milk collected from our own herd. Ideal for tea, coffee, and children's glasses of milk."
        />
        <ProductCard
          name="Paneer"
          status="available"
          description="Soft, fresh paneer made from Dudhpuke milk — suitable for daily sabjis as well as special dishes."
        />
        <ProductCard
          name="Ghee"
          status="available"
          description="Slow-cooked, pure ghee prepared in small batches from our fresh milk. Perfect for cooking and traditional recipes."
        />
        <ProductCard
          name="Cheese"
          status="available"
          description="Fresh cheese options made from Dudhpuke milk, prepared in small batches for families across Nepal."
        />
      </div>
    </SectionShell>
  )
}

