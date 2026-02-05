'use client'

interface ServiceSchemaProps {
  serviceName: string
  description: string
  url: string
  phone: string
  address: string
  city: string
  postalCode: string
  openingHours: string
}

const ServiceSchema = ({ 
  serviceName, 
  description, 
  url, 
  phone, 
  address, 
  city, 
  postalCode, 
  openingHours 
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "url": `https://nekrolog-lodz.com${url}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Zakład Pogrzebowy Nekrolog Łódź",
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
    "areaServed": "Łódź",
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
