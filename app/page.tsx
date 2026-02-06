import { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Zakład Pogrzebowy w Łodzi – Nekrolog Łódź | Jolanta Kostowska',
  description:
    'Zakład Pogrzebowy Nekrolog Łódź oferuje kompleksowe usługi pogrzebowe w Łodzi. Organizacja ceremonii, kremacja, transport. Doświadczenie 20+ lat. Dostępni całodobowo. Tel: +48 602 274 661.',
  keywords: [
    'zakład pogrzebowy łódź',
    'usługi pogrzebowe łódź',
    'dom pogrzebowy łódź',
    'organizacja pogrzebu łódź',
    'kremacja łódź',
    'transport zmarłych łódź',
    'pogrzeby łódź',
    'całodobowy zakład pogrzebowy',
  ],
  alternates: {
    canonical: '/',
  },
}

export default async function HomePage() {

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#funeral-home`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: SITE_URL,
    additionalType: 'https://schema.org/FuneralHome',
    telephone: BUSINESS_INFO.phone,
    priceRange: BUSINESS_INFO.priceRange,
    image: `${SITE_URL}${BUSINESS_INFO.imagePath}`,
    hasMap: BUSINESS_INFO.mapUrl,
    sameAs: BUSINESS_INFO.sameAs,
    slogan: 'Pogrzeb bez zaliczki - pełne wsparcie w trudnej chwili',
    paymentAccepted: ['Cash', 'Bank Transfer', 'ZUS/KRUS Benefit'],
    currenciesAccepted: 'PLN',
    knowsAbout: [
      'Funeral Services',
      'Cremation Services',
      'Cemetery Services',
      'Grief Support',
      'Funeral Planning',
      'Transport of Deceased',
      'Funeral Home Services'
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
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
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
    },
    review: BUSINESS_INFO.reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.authorName,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: 5,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phone,
        contactType: 'customer service',
        availableLanguage: ['pl'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          opens: '08:00',
          closes: '16:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phone,
        contactType: 'emergency',
        availableLanguage: ['pl'],
        hoursAvailable: {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <HomePageClient />
    </>
  )
}
