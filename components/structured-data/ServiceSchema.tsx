import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import JsonLdScript from '@/components/structured-data/JsonLdScript'
import { buildServiceJsonLd } from '@/lib/local-seo'

interface ServiceSchemaProps {
  serviceName: string
  description: string
  url: string
  phone?: string
  address?: string
  city?: string
  postalCode?: string
  openingHours?: string
  availableLanguages?: string[]
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
  availableLanguages = ['pl', 'en', 'de', 'fr', 'nl', 'it'],
}: ServiceSchemaProps) => {
  const absoluteUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`
  const schema = buildServiceJsonLd({
    name: serviceName,
    description,
    path: absoluteUrl.replace(SITE_URL, ''),
    areaServed: BUSINESS_INFO.areaServed,
    availableLanguages,
  })

  return (
    <JsonLdScript data={schema} />
  )
}

export default ServiceSchema
