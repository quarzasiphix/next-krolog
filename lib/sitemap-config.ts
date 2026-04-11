export const SITEMAP_GROUP_KEYS = ['static', 'services', 'countries', 'cities', 'routes', 'legacy'] as const

export type SitemapGroupKey = (typeof SITEMAP_GROUP_KEYS)[number]
