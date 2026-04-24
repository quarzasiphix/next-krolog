import { MetadataRoute } from 'next'
import { type Locale, getIntlSitemapGroups, resolveIntlPage } from '@/lib/international/content'
import { buildIntlSitemapEntry } from '@/lib/international/seo'
import { generateSitemapEntries, validateProductionDomain } from '@/lib/sitemap-registry'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = validateProductionDomain(process.env.NEXT_PUBLIC_SITE_URL || 'https://nekrolog-lodz.com')
  const priorities = {
    static: 0.9,
    services: 0.86,
    countries: 0.84,
    cities: 0.83,
    routes: 0.88,
  }
  const intlEntries = Object.entries(getIntlSitemapGroups()).flatMap(([key, paths]) => {
    const priority = priorities[key as keyof typeof priorities]

    if (!priority) {
      return []
    }

    return paths
      .map((path) => {
        const segments = path.split('/').filter(Boolean)
        const locale = segments[0] as Locale
        const page = resolveIntlPage(locale, segments.slice(1))
        return page ? buildIntlSitemapEntry(page, path, priority) : null
      })
      .filter(Boolean) as MetadataRoute.Sitemap
  })

  const deduped = new Map<string, MetadataRoute.Sitemap[number]>()

  for (const entry of [...generateSitemapEntries(baseUrl), ...intlEntries]) {
    deduped.set(entry.url, entry)
  }

  return [...deduped.values()]
}
