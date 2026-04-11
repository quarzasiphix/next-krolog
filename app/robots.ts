import { MetadataRoute } from 'next'
import { SITEMAP_GROUP_KEYS } from '@/lib/sitemap-config'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nekrolog-lodz.com'
  const sitemapUrls = [`${baseUrl}/sitemap.xml`, ...SITEMAP_GROUP_KEYS.map((_, index) => `${baseUrl}/sitemap/${index}.xml`)]
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/test-posthog',
          '/_error',
          '/404',
          '/_not-found',
          '/wp-login.php',
          '/wp-admin/',
          '/wp-json/',
          '/xmlrpc.php',
          '/feed/',
          '/tag/',
          '/category/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/test-posthog',
          '/_error',
          '/404',
          '/_not-found',
        ],
      },
    ],
    sitemap: sitemapUrls,
    host: baseUrl,
  }
}
