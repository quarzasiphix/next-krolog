'use client'

interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => {
      const listItem: any = {
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name
      }
      
      if (item.url) {
        listItem.item = `https://nekrolog-lodz.com${item.url}`
      }
      
      return listItem
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default BreadcrumbSchema
