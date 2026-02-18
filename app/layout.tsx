import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { siteMetadata, structuredData } from '../lib/seo'

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.siteName,
    images: [
      {
        url: '/logo-dudhpuke.jpg',
        width: 300,
        height: 280,
        alt: 'Dudhpuke - Farm Fresh Milk Delivery by Om Sai Pashu Palan',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ['/logo-dudhpuke.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-dudhpuke.jpg" />
      </head>
      <body>
        {children}
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>
      </body>
    </html>
  )
}

