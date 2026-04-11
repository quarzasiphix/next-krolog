import JsonLdScript from '@/components/structured-data/JsonLdScript'
import { buildOrganizationJsonLd } from '@/lib/local-seo'

export default function OrganizationSchema() {
  return <JsonLdScript data={buildOrganizationJsonLd()} />
}
