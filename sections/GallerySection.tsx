import Image from 'next/image'
import { SectionShell } from '../components/SectionShell'

export default function GallerySection() {
  const galleryImages = [
    '/farm-image/IMG_1754.JPG',
    '/farm-image/IMG_1755.JPG',
    '/farm-image/IMG_1756.JPG',
    '/farm-image/IMG_1757.JPG',
    '/farm-image/IMG_1758.JPG',
    '/farm-image/IMG_1759.JPG',
  ]

  return (
    <SectionShell
      id="gallery"
      eyebrow="Gallery"
      title="Our Farm Gallery"
      description="Take a look at our dairy farm and the care we provide to our animals"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-brand-cream bg-brand-cream/20 shadow-soft"
          >
            <Image
              src={image}
              alt={`Farm image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
