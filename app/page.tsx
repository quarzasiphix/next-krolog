import { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'
import { createServerClient } from '@/lib/supabase/server'
import { normalizeForUrl } from '@/lib/utils'
import type { BlogSummary } from '@/types/blog'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo',
  description:
    'Profesjonalny zakład pogrzebowy Nekrolog Łódź Jolanta Kostowska. Kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Dostępni całodobowo. Tel: +48 602 274 661.',
  keywords: [
    'usługi pogrzebowe łódź',
    'zakład pogrzebowy łódź',
    'dom pogrzebowy łódź',
    'nekrolog łódź',
    'jolanta kostowska',
    'pogrzeby łódź',
    'kremacja łódź',
    'transport zwłok łódź',
    'całodobowy zakład pogrzebowy',
  ],
}

async function getRecentBlogPosts(): Promise<BlogSummary[]> {
  try {
    const supabase = createServerClient()

    const { data, error } = await supabase
      .from('blogs')
      .select(`
        id,
        title,
        excerpt,
        author,
        created_at,
        read_time,
        slug,
        featured_image_url,
        blog_categories(name)
      `)
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(3)

    if (error || !data) {
      console.error('Error fetching recent blog posts:', error)
      return []
    }

    return data.map((post) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      createdAt: post.created_at,
      readTime: post.read_time || '5 min',
      categoryName: post.blog_categories?.name || null,
      normalizedSlug: normalizeForUrl(post.slug || ''),
      featuredImageUrl: post.featured_image_url || null,
    }))
  } catch (error) {
    console.error('Unexpected error fetching recent blog posts:', error)
    return []
  }
}
export default async function HomePage() {
  const recentBlogPosts = await getRecentBlogPosts()

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
          'Saturday',
          'Sunday',
        ],
        opens: BUSINESS_INFO.openingHours.opens,
        closes: BUSINESS_INFO.openingHours.closes,
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
        contactType: 'Customer Service',
        availableLanguage: ['pl', 'en'],
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
      <HomePageClient blogPosts={recentBlogPosts} />
    </>
  )
}
