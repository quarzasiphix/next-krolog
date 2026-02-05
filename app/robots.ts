import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  // Always use production domain for sitemap
  const baseUrl = 'https://nekrolog-lodz.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/test-posthog',
          '/_next/',
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
          '/_next/',
          '/_error',
          '/404',
          '/_not-found',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
