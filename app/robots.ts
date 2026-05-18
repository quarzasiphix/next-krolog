import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: [
        '/api/',
        '/_next/',
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
    sitemap: [`${SITE_URL}/sitemap.xml`],
    host: 'nekrolog-lodz.com',
  }
}
