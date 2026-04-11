import JsonLdScript from '@/components/structured-data/JsonLdScript'
import { buildBreadcrumbJsonLd } from '@/lib/local-seo'

interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  return <JsonLdScript data={buildBreadcrumbJsonLd(items)} />
}

export default BreadcrumbSchema
