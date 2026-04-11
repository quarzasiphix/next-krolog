import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  publishDate: string
  author: string
  image?: string
}

const ArticleSchema = ({ 
  title, 
  description, 
  url, 
  publishDate, 
  author,
  image 
}: ArticleSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#funeral-home`,
      name: BUSINESS_INFO.legalName,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}${BUSINESS_INFO.imagePath}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${url}`,
    },
  }

  if (image) {
    ;(schema as any).image = image
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default ArticleSchema
