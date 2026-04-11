import { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import { buildLocalMetadata, buildMetaDescription, buildWebPageJsonLd, stringifyJsonLd } from '@/lib/local-seo'

export const metadata: Metadata = buildLocalMetadata({
  title: 'Zakład Pogrzebowy Łódź',
  path: '/',
  description: buildMetaDescription([
    'Całodobowy, rodzinny zakład pogrzebowy w Łodzi przy ul. Legionów 48',
    'organizacja pogrzebu, kremacja, formalności i pomoc 24/7',
    'możliwość rozliczenia bez zaliczki',
    'dodatkowo transport zmarłych i sprowadzenie zwłok do Polski',
  ]),
  keywords: [
    'zakład pogrzebowy łódź',
    'zaklad pogrzebowy lodz',
    'nekrolog łódź',
    'nekrolog lodz',
    'usługi pogrzebowe łódź',
    'pogrzeb bez zaliczki łódź',
    'dom pogrzebowy łódź',
    'organizacja pogrzebu łódź',
    'kremacja łódź',
    'transport zmarłych łódź',
  ],
  ogTitle: 'Zakład Pogrzebowy Łódź | Nekrolog Łódź',
})

export default async function HomePage() {
  const homepageSchema = buildWebPageJsonLd({
    name: 'Zakład Pogrzebowy Łódź - Nekrolog Łódź',
    description:
      'Całodobowy zakład pogrzebowy w Łodzi z pomocą 24/7, możliwością rozliczenia bez zaliczki oraz dodatkowymi usługami transportu zmarłych.',
    path: '/',
  })
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
    slogan: 'Calodobowy zaklad pogrzebowy w Lodzi i pomoc bez zaliczki',
    foundingDate: String(BUSINESS_INFO.foundedYear),
    description: 'Rodzinna firma pogrzebowa z Lodzi z ponad 30-letnim doswiadczeniem, kompleksowa organizacja ceremonii, pomoc formalna oraz wsparcie rodzin 24/7.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd([homepageSchema, businessSchema]) }} />
      <HomePageClient />
    </>
  )
}
