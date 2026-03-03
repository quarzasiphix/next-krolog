'use client'

import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

interface ServiceSchemaProps {
  serviceName: string
  description: string
  url: string
  phone?: string
  address?: string
  city?: string
  postalCode?: string
  openingHours?: string
}

const ServiceSchema = ({ 
  serviceName, 
  description, 
  url, 
  phone = BUSINESS_INFO.phone,
  address = BUSINESS_INFO.address.streetAddress,
  city = BUSINESS_INFO.address.addressLocality,
  postalCode = BUSINESS_INFO.address.postalCode,
  openingHours = 'Mo-Su 00:00-23:59',
}: ServiceSchemaProps) => {
  const absoluteUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl}#service`,
    name: serviceName,
    serviceType: serviceName,
    description,
    url: absoluteUrl,
    areaServed: BUSINESS_INFO.areaServed.map((servedCity) => ({
      '@type': 'City',
      name: servedCity,
    })),
    availableLanguage: ['pl'],
    provider: {
      '@type': 'FuneralHome',
      '@id': `${SITE_URL}#organization`,
      name: BUSINESS_INFO.legalName,
      url: SITE_URL,
      telephone: phone,
      email: BUSINESS_INFO.email,
      sameAs: BUSINESS_INFO.sameAs,
      priceRange: BUSINESS_INFO.priceRange,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address,
        addressLocality: city,
        postalCode,
        addressCountry: 'PL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_INFO.geo.latitude,
        longitude: BUSINESS_INFO.geo.longitude,
      },
      openingHours,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl,
    },
    offers: {
      '@type': 'Offer',
      url: absoluteUrl,
      priceCurrency: 'PLN',
      description:
        'Indywidualna wycena usługi. W wielu przypadkach możliwa organizacja bez kosztów z góry.',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default ServiceSchema
