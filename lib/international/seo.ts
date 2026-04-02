import type { Metadata, MetadataRoute } from 'next'
import { type Locale, type ResolvedIntlPage, buildAbsoluteUrl, getPageAlternates, localeInfo } from '@/lib/international/content'

export function normalizeCanonicalPath(path: string) {
  if (!path || path === '/') return '/'
  return path.endsWith('/') ? path.slice(0, -1) : path
}

function getKeywordHints(page: ResolvedIntlPage, title: string) {
  if (page.kind === 'route') {
    return [
      title,
      page.city.seoTitleTemplate[page.locale],
      `${page.city.namesPerLocale[page.locale]} ${page.locale === 'pl' ? 'Polska' : 'Poland'}`,
      localeInfo[page.locale].nav.contact,
    ]
  }

  if (page.kind === 'country') {
    return [
      title,
      `${page.country.namesPerLocale[page.locale]} ${page.locale === 'pl' ? 'Polska' : 'Poland'}`,
      localeInfo[page.locale].homeTitle,
      localeInfo[page.locale].nav.contact,
    ]
  }

  if (page.kind === 'service') {
    return [title, page.service.namePerLocale[page.locale], localeInfo[page.locale].homeTitle, localeInfo[page.locale].nav.contact]
  }

  return [title, localeInfo[page.locale].homeTitle, localeInfo[page.locale].nav.contact]
}

export function buildIntlMetadata(page: ResolvedIntlPage, options: { title: string; description: string; path: string }): Metadata {
  const path = normalizeCanonicalPath(options.path)
  return {
    title: { absolute: options.title },
    description: options.description,
    keywords: getKeywordHints(page, options.title),
    alternates: getPageAlternates(page),
    openGraph: { type: 'website', title: options.title, description: options.description, url: buildAbsoluteUrl(path), locale: localeInfo[page.locale].ogLocale, siteName: 'Nekrolog Lodz' },
    twitter: { card: 'summary_large_image', title: options.title, description: options.description },
    robots: { index: true, follow: true },
    other: { language: localeInfo[page.locale].htmlLang },
  }
}

export function buildIntlSitemapEntry(page: ResolvedIntlPage, path: string, priority: number): MetadataRoute.Sitemap[number] {
  return {
    url: buildAbsoluteUrl(path),
    lastModified: new Date('2026-03-30T12:00:00Z'),
    changeFrequency: 'weekly',
    priority,
    alternates: { languages: getPageAlternates(page).languages },
  }
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const locale = pathname.split('/').filter(Boolean)[0]
  if (!locale) return null
  return locale in localeInfo ? (locale as Locale) : null
}
