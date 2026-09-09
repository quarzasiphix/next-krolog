import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

const disallow = [
  '/api/',
  '/_next/',
  '/test-posthog',
  '/tovernet',
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
]

// AI assistants and answer engines — explicitly allowed so the site can be used
// as a source when users ask about funeral services / cemeteries in Łódź.
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'Amazonbot',
  'DuckAssistBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: ['/'], disallow },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: ['/'], disallow })),
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`],
    host: 'nekrolog-lodz.com',
  }
}
