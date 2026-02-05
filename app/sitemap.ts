import { MetadataRoute } from 'next'
import { generateSitemapEntries, validateProductionDomain } from '@/lib/sitemap-registry'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = validateProductionDomain(process.env.NEXT_PUBLIC_SITE_URL || 'https://nekrolog-lodz.com')
  
  return generateSitemapEntries(baseUrl)
}
