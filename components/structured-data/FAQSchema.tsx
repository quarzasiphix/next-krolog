'use client'

import { usePathname } from 'next/navigation'
import { SITE_URL } from '@/lib/constants'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
  name?: string
}

const FAQSchema = ({ faqs, name }: FAQSchemaProps) => {
  const pathname = usePathname() || '/'
  const pageUrl = `${SITE_URL}${pathname}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    name: name || `FAQ - ${pathname === '/' ? 'Strona główna' : pathname}`,
    url: pageUrl,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default FAQSchema
