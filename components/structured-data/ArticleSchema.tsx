'use client'

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
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `https://nekrolog-lodz.com${url}`,
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zakład Pogrzebowy Nekrolog Łódź",
      "url": "https://nekrolog-lodz.com"
    },
    "mainEntityOfPage": {
      "@type": "Service",
      "name": "Usługi Pogrzebowe",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Zakład Pogrzebowy Nekrolog Łódź"
      }
    }
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
