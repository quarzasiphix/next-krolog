import { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Nekrolog Lodz - Zaklad Pogrzebowy i miedzynarodowy transport zwlok | Jolanta Kostowska',
  description:
    'Nekrolog Lodz to calodobowy, rodzinny zaklad pogrzebowy w Lodzi oraz specjalista od krajowego i miedzynarodowego transportu zwlok. Organizacja pogrzebu, sprowadzanie zmarlych do Polski, formalnosci i pomoc 24/7 bez zaliczki.',
  keywords: [
    'zaklad pogrzebowy lodz',
    'nekrolog lodz',
    'uslugi pogrzebowe lodz',
    'pogrzeb bez zaliczki lodz',
    'dom pogrzebowy lodz',
    'organizacja pogrzebu lodz',
    'kremacja lodz',
    'transport zmarlych lodz',
    'sprowadzenie zwlok z zagranicy',
    'transport zmarlych z zagranicy do polski',
    'miedzynarodowy transport zwlok do polski',
    'sprowadzenie zmarlych do polski',
    'calodobowy zaklad pogrzebowy',
  ],
  alternates: {
    canonical: '/',
  },
}

export default async function HomePage() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/FuneralHome',
    '@id': `${SITE_URL}/#funeral-home`,
    name: 'Zaklad Pogrzebowy Nekrolog Lodz',
    alternateName: [BUSINESS_INFO.name, 'Nekrolog Lodz'],
    legalName: BUSINESS_INFO.legalName,
    taxID: BUSINESS_INFO.nip,
    url: SITE_URL,
    telephone: BUSINESS_INFO.phone,
    priceRange: BUSINESS_INFO.priceRange,
    image: `${SITE_URL}${BUSINESS_INFO.imagePath}`,
    hasMap: BUSINESS_INFO.mapUrl,
    sameAs: BUSINESS_INFO.sameAs,
    slogan: 'Pogrzeb bez zaliczki oraz miedzynarodowy transport zwlok do Polski 24/7',
    foundingDate: String(BUSINESS_INFO.foundedYear),
    description: 'Rodzinna firma pogrzebowa z Lodzi z ponad 30-letnim doswiadczeniem, organizacja ceremonii oraz krajowy i miedzynarodowy transport zwlok do Polski.',
    paymentAccepted: ['Cash', 'Bank Transfer', 'ZUS/KRUS Benefit'],
    currenciesAccepted: 'PLN',
    knowsAbout: [
      'Funeral Services',
      'Cremation Services',
      'Cemetery Services',
      'Grief Support',
      'Funeral Planning',
      'Transport of Deceased',
      'International Repatriation',
      'Funeral Home Services',
      'Bringing the deceased to Poland',
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    areaServed: BUSINESS_INFO.areaServed.map((name) => ({
      '@type': 'City',
      name,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.ratingValue,
      reviewCount: BUSINESS_INFO.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phone,
        contactType: 'customer service',
        availableLanguage: ['pl', 'en', 'de', 'fr'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '16:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: '+48 602 270 050',
        contactType: 'emergency',
        availableLanguage: ['pl', 'en', 'de', 'fr'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
    makesOffer: BUSINESS_INFO.services.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: service,
        provider: {
          '@id': `${SITE_URL}/#funeral-home`,
        },
        areaServed: BUSINESS_INFO.areaServed.map((name) => ({
          '@type': 'City',
          name,
        })),
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <HomePageClient />
    </>
  )
}
