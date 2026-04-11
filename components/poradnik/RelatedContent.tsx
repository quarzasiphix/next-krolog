'use client'

import type { ResolvedRelatedGroup } from '@/lib/site-navigation'
import RelatedLinks from '@/components/RelatedLinks'

interface RelatedContentProps {
  currentSlug: string
  relatedServices?: Array<{
    title: string
    href: string
    description: string
  }>
  relatedArticles?: Array<{
    title: string
    href: string
    excerpt: string
  }>
}

const RelatedContent = ({ 
  currentSlug, 
  relatedServices = [], 
  relatedArticles = [] 
}: RelatedContentProps) => {
  const groups: ResolvedRelatedGroup[] = []

  if (relatedServices.length > 0) {
    groups.push({
      title: 'Powiązane usługi pogrzebowe',
      links: relatedServices.map((service) => ({
        href: service.href,
        label: service.title,
        description: service.description,
        section: 'service',
      })),
    })
  }

  if (relatedArticles.length > 0) {
    groups.push({
      title: 'Powiązane artykuły',
      links: relatedArticles.map((article) => ({
        href: article.href,
        label: article.title,
        description: article.excerpt,
        section: 'guide',
      })),
    })
  }

  return (
    <RelatedLinks
      pathname={`/poradnik/${currentSlug}`}
      heading="Powiązane usługi i artykuły"
      intro="Na końcu poradnika kierujemy dalej do usług, formalności i kontaktu, żeby rodzina mogła od razu przejść do działania."
      groups={groups.length > 0 ? groups : undefined}
    />
  )
}

export default RelatedContent
