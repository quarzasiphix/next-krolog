'use client'

import { usePathname } from 'next/navigation'
import JsonLdScript from '@/components/structured-data/JsonLdScript'
import { buildFaqJsonLd } from '@/lib/local-seo'

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
  return <JsonLdScript data={buildFaqJsonLd({ faqs, path: pathname, name })} />
}

export default FAQSchema
