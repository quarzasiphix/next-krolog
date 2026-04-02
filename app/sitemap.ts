import { MetadataRoute } from 'next'
import { type Locale, getIntlSitemapGroups, resolveIntlPage } from '@/lib/international/content'
import { buildIntlSitemapEntry } from '@/lib/international/seo'
import { generateSitemapEntries, validateProductionDomain } from '@/lib/sitemap-registry'

export const dynamic = 'force-static'

const GROUP_KEYS = ['static', 'services', 'countries', 'cities', 'routes', 'legacy'] as const

export async function generateSitemaps() {
  return GROUP_KEYS.map((_, id) => ({ id }))
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = validateProductionDomain(process.env.NEXT_PUBLIC_SITE_URL || 'https://nekrolog-lodz.com')
  const key = GROUP_KEYS[id]

  if (!key) {
    return generateSitemapEntries(baseUrl)
  }

  const priorities: Record<(typeof GROUP_KEYS)[number], number> = {
    static: 0.9,
    services: 0.86,
    countries: 0.84,
    cities: 0.83,
    routes: 0.88,
    legacy: 0.8,
  }

  if (key === 'legacy') {
    return generateSitemapEntries(baseUrl)
  }

  return getIntlSitemapGroups()[key]
    .map((path) => {
      const segments = path.split('/').filter(Boolean)
      const locale = segments[0] as Locale
      const page = resolveIntlPage(locale, segments.slice(1))
      return page ? buildIntlSitemapEntry(page, path, priorities[key]) : null
    })
    .filter(Boolean) as MetadataRoute.Sitemap
}
