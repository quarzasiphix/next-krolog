import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import JsonLdScript from '@/components/structured-data/JsonLdScript'
import { buildFuneralHomeJsonLd } from '@/lib/local-seo'

interface FuneralHomeSchemaProps {
  businessName?: string
  description: string
  phone?: string
  address?: string
  city?: string
  postalCode?: string
  openingHours?: string
  path?: string
}

const FuneralHomeSchema = ({
  businessName = BUSINESS_INFO.legalName,
  description,
  phone = BUSINESS_INFO.phone,
  address = BUSINESS_INFO.address.streetAddress,
  city = BUSINESS_INFO.address.addressLocality,
  postalCode = BUSINESS_INFO.address.postalCode,
  openingHours = 'Mo-Su 00:00-23:59',
  path = '/',
}: FuneralHomeSchemaProps) => {
  const schema = {
    ...buildFuneralHomeJsonLd({ description, path }),
    name: businessName,
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: city,
      postalCode,
      addressCountry: 'PL',
    },
    openingHours,
  }

  return <JsonLdScript data={schema} />
}

export default FuneralHomeSchema
