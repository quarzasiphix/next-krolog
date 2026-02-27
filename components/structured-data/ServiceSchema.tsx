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
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "url": absoluteUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.legalName,
      "telephone": phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address,
        "addressLocality": city,
        "postalCode": postalCode,
        "addressCountry": "PL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.7592,
        "longitude": 19.4562
      },
      "openingHours": openingHours
    },
    "areaServed": city,
    "availableLanguage": ["Polish"]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default ServiceSchema
