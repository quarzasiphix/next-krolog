import type { Metadata } from 'next'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

type JsonLdObject = Record<string, unknown>

type LocalMetadataConfig = {
  title: string
  path: string
  description: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  index?: boolean
}

type ServiceJsonLdConfig = {
  name: string
  description: string
  path: string
  areaServed?: string[]
  availableLanguages?: string[]
}

type BreadcrumbItem = {
  name: string
  url?: string
}

type FaqItem = {
  question: string
  answer: string
}

export function buildCanonicalUrl(path = '/') {
  const normalized = !path || path === '/' ? '' : path.replace(/\/+$/, '')
  const prefixed = normalized.startsWith('/') || normalized === '' ? normalized : `/${normalized}`
  return `${SITE_URL}${prefixed || '/'}`
}

export function buildSeoTitle(title: string, template = 'Zakład Pogrzebowy Łódź') {
  return title.includes(template) ? title : `${title} | ${template}`
}

export function buildMetaDescription(parts: Array<string | null | undefined>) {
  const cleaned = parts
    .filter((part): part is string => Boolean(part && part.trim()))
    .map((part) => part.trim().replace(/\.\s*$/, ''))

  return cleaned.length ? `${cleaned.join('. ')}.` : ''
}

export function buildOpenGraphFields({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): NonNullable<Metadata['openGraph']> {
  return {
    type: 'website',
    locale: 'pl_PL',
    url: buildCanonicalUrl(path),
    siteName: 'Nekrolog Łódź',
    title,
    description,
    images: [
      {
        url: `${SITE_URL}${BUSINESS_INFO.imagePath}`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  }
}

export function buildLocalMetadata({
  title,
  path,
  description,
  keywords = [],
  ogTitle,
  ogDescription,
  index = true,
}: LocalMetadataConfig): Metadata {
  const resolvedTitle = buildSeoTitle(title)

  return {
    title: resolvedTitle,
    description,
    keywords,
    alternates: {
      canonical: buildCanonicalUrl(path),
    },
    openGraph: buildOpenGraphFields({
      title: ogTitle || resolvedTitle,
      description: ogDescription || description,
      path,
    }),
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || resolvedTitle,
      description: ogDescription || description,
      images: [`${SITE_URL}${BUSINESS_INFO.imagePath}`],
    },
    robots: {
      index,
      follow: true,
    },
  }
}

export function buildWebPageJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}): JsonLdObject {
  const url = buildCanonicalUrl(path)

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'pl-PL',
    about: {
      '@id': `${SITE_URL}/#funeral-home`,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Nekrolog Łódź',
    },
  }
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.legalName,
    legalName: BUSINESS_INFO.legalName,
    url: SITE_URL,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    taxID: BUSINESS_INFO.nip,
    sameAs: BUSINESS_INFO.sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phone,
        contactType: 'customer service',
        availableLanguage: ['pl'],
      },
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.secondaryPhone,
        contactType: 'emergency',
        availableLanguage: ['pl', 'en', 'de', 'fr'],
      },
    ],
  }
}

export function buildFuneralHomeJsonLd({
  description,
  path = '/',
}: {
  description: string
  path?: string
}) {
  const url = buildCanonicalUrl(path)

  return {
    '@context': 'https://schema.org',
    '@type': 'FuneralHome',
    '@id': `${SITE_URL}/#funeral-home`,
    name: BUSINESS_INFO.name,
    alternateName: ['Nekrolog Łódź', 'Zakład Pogrzebowy Nekrolog Łódź'],
    legalName: BUSINESS_INFO.legalName,
    taxID: BUSINESS_INFO.nip,
    url,
    image: `${SITE_URL}${BUSINESS_INFO.imagePath}`,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    sameAs: BUSINESS_INFO.sameAs,
    hasMap: BUSINESS_INFO.mapUrl,
    description,
    parentOrganization: {
      '@id': `${SITE_URL}/#organization`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: BUSINESS_INFO.areaServed.map((name) => ({
      '@type': 'City',
      name,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: BUSINESS_INFO.openingHours.opens,
        closes: BUSINESS_INFO.openingHours.closes,
      },
    ],
  }
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const listItem: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      }

      if (item.url) {
        listItem.item = buildCanonicalUrl(item.url)
      }

      return listItem
    }),
  }
}

export function buildFaqJsonLd({
  faqs,
  path,
  name,
}: {
  faqs: FaqItem[]
  path: string
  name?: string
}) {
  const pageUrl = buildCanonicalUrl(path)

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    name: name || `FAQ - ${path === '/' ? 'Strona główna' : path}`,
    url: pageUrl,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildServiceJsonLd({
  name,
  description,
  path,
  areaServed = BUSINESS_INFO.areaServed,
  availableLanguages = ['pl', 'en', 'de', 'fr', 'nl', 'it'],
}: ServiceJsonLdConfig): JsonLdObject {
  const url = buildCanonicalUrl(path)

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    serviceType: name,
    category: 'Usługi pogrzebowe',
    description,
    url,
    areaServed: areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    availableLanguage: availableLanguages,
    provider: {
      '@type': 'FuneralHome',
      '@id': `${SITE_URL}/#funeral-home`,
      name: BUSINESS_INFO.legalName,
      url: SITE_URL,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      sameAs: BUSINESS_INFO.sameAs,
      priceRange: BUSINESS_INFO.priceRange,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.streetAddress,
        addressLocality: BUSINESS_INFO.address.addressLocality,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: 'PL',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_INFO.geo.latitude,
        longitude: BUSINESS_INFO.geo.longitude,
      },
      openingHours: 'Mo-Su 00:00-23:59',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'PLN',
      description: 'Indywidualna wycena usługi. W wielu przypadkach możliwa organizacja bez kosztów z góry.',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function stringifyJsonLd(data: JsonLdObject | JsonLdObject[]) {
  return JSON.stringify(data)
}
