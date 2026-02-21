export const siteMetadata = {
  title: 'Dudhpuke | Farm Fresh Milk Delivery by Om Sai Pashu Palan',
  description:
    'Dudhpuke delivers fresh, pure, farm-direct milk from Om Sai Pashu Palan. 20+ years of trusted local dairy service with convenient home delivery and subscription plans.',
  url: 'https://omsaipashupalan.com.np',
  siteName: 'Dudhpuke',
  keywords: [
    'Dudhpuke',
    'Om Sai Pashu Palan',
    'farm fresh milk',
    'milk delivery',
    'local dairy',
    'subscription milk service',
    'pure cow milk',
    'fresh milk home delivery',
    'Itahari',
    'Tarahara',
    'Sunsari',
    'Nepal',
  ],
  businessPhone: '+977-9763514556',
  whatsappNumber: '+9779806343974',
  address: {
    street: 'Itahari-20, Tarahara',
    locality: 'Tarahara',
    city: 'Itahari',
    region: 'Sunsari',
    postalCode: '00000',
    country: 'NP',
  },
  geo: {
    latitude: 26.667, // Approximate for Itahari, Sunsari
    longitude: 87.283,
  },
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dudhpuke',
  image: ['https://omsaipashupalan.com.np/og-image.jpg'],
  '@id': 'https://omsaipashupalan.com.np',
  url: 'https://omsaipashupalan.com.np',
  telephone: siteMetadata.businessPhone,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteMetadata.address.street,
    addressLocality: siteMetadata.address.city,
    addressRegion: siteMetadata.address.region,
    postalCode: siteMetadata.address.postalCode,
    addressCountry: siteMetadata.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteMetadata.geo.latitude,
    longitude: siteMetadata.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '05:00',
      closes: '11:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/profile.php?id=61559236224392',
    'https://www.instagram.com/dudhpuke/',
    'https://wa.me/9779806343974',
  ],
  servesCuisine: 'Dairy',
  description: siteMetadata.description,
}

