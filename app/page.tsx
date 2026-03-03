import { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nekrolog Łódź - Zakład Pogrzebowy w Łodzi | Jolanta Kostowska',
  description:
    'Nekrolog Łódź (nekrolog lodz) to całodobowy zakład pogrzebowy w Łodzi przy ul. Legionów 48. Organizacja pogrzebu bez zaliczki, kremacja, transport i formalności. Tel: +48 602 274 661.',
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
    additionalType: 'https://schema.org/FuneralHome',
    '@id': `${SITE_URL}/#funeral-home`,
    name: 'Zakład Pogrzebowy Nekrolog Łódź',
    alternateName: [BUSINESS_INFO.name, 'Nekrolog Łódź', 'Nekrolog Lodz'],
    legalName: BUSINESS_INFO.legalName,
    taxID: BUSINESS_INFO.nip,
    url: SITE_URL,
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
      bestRating: 5,
      worstRating: 1,
    },
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
      <section className="bg-black text-white pt-24 pb-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair mb-6">Zakład Pogrzebowy Łódź</h1>
            <p className="text-xl text-gray-300 mb-8">
              Nekrolog Łódź - całodobowa pomoc, organizacja pogrzebu bez kosztów z góry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+48602274661"
                className="inline-flex items-center justify-center bg-primary text-black px-8 py-4 rounded-md font-medium"
              >
                Zadzwoń: +48 602 274 661
              </a>
              <Link
                href="/pogrzeb-bez-zaliczki"
                className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-md font-medium hover:bg-white/10 transition"
              >
                Pogrzeb bez zaliczki
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              <Link href="/uslugi-pogrzebowe-lodz" className="text-gray-300 hover:text-white underline-offset-4 hover:underline">Usługi pogrzebowe Łódź</Link>
              <Link href="/cmentarze-lodz" className="text-gray-300 hover:text-white underline-offset-4 hover:underline">Cmentarze w Łodzi</Link>
              <Link href="/poradnik" className="text-gray-300 hover:text-white underline-offset-4 hover:underline">Poradnik pogrzebowy</Link>
              <Link href="/zaklad-pogrzebowy-lodz" className="text-gray-300 hover:text-white underline-offset-4 hover:underline">Zakład Pogrzebowy Łódź</Link>
              <Link href="/nekrolog-lodz" className="text-gray-300 hover:text-white underline-offset-4 hover:underline">Nekrolog Łódź</Link>
              <Link href="/kontakt" className="text-gray-300 hover:text-white underline-offset-4 hover:underline">Kontakt</Link>
            </div>
          </div>
        </div>
      </section>
      <HomePageClient />
    </>
  )
}
