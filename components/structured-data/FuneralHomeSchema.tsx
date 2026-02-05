'use client'

interface FuneralHomeSchemaProps {
  businessName: string
  description: string
  phone: string
  address: string
  city: string
  postalCode: string
  openingHours: string
}

const FuneralHomeSchema = ({ 
  businessName, 
  description, 
  phone, 
  address, 
  city, 
  postalCode, 
  openingHours 
}: FuneralHomeSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": description,
    "url": "https://nekrolog-lodz.com",
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
    "openingHours": openingHours,
    "priceRange": "$$",
    "sameAs": [
      "https://nekrolog-lodz.com",
      "https://www.ekrolog-lodz.com"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default FuneralHomeSchema
