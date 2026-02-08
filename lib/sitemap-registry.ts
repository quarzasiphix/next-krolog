// Sitemap registry - single source of truth for all URLs
export interface SitemapEntry {
  url: string
  lastModified: string | Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

// Build timestamp for static pages
const BUILD_TIMESTAMP = new Date('2025-01-15T10:00:00Z') // Update this when you deploy major changes

// Content last modified dates (update when content changes)
const CONTENT_LAST_MODIFIED = {
  // Homepage and core pages
  homepage: '2025-01-15T10:00:00Z',
  about: '2025-01-10T15:30:00Z',
  contact: '2025-01-12T09:00:00Z',

  // Service pages
  services: {
    main: '2025-01-08T14:00:00Z',
    organizacja: '2025-01-08T14:00:00Z',
    oprawa: '2025-01-08T14:00:00Z',
    transport: '2025-01-08T14:00:00Z',
    krematorium: '2025-01-08T14:00:00Z',
    ekshumacja: '2025-01-08T14:00:00Z',
  },

  // Asortyment pages
  asortyment: {
    main: '2025-01-09T11:00:00Z',
    trumny: '2025-01-09T11:00:00Z',
    urny: '2025-01-09T11:00:00Z',
    odziez: '2025-01-09T11:00:00Z',
    wiazanki: '2025-01-09T11:00:00Z',
    wience: '2025-01-09T11:00:00Z',
  },

  // Poradnik articles with individual last modified dates
  poradnik: {
    'co-zrobic-po-smierci': '2025-01-05T16:00:00Z',
    'zasilek-pogrzebowy-zus': '2025-01-06T12:00:00Z',
    'czy-urne-z-prochami-mozna-trzymac-w-domu': '2025-01-07T14:00:00Z',
    'jak-wyglada-kremacja-zwlok': '2025-01-08T10:00:00Z',
    'w-co-ubrac-zmarlego-na-pogrzeb': '2025-01-09T15:00:00Z',
    'jakie-czynnosci-obejmuje-kosmetyka-posmiertna': '2025-01-10T11:00:00Z',
    'jak-wybrac-zaklad-do-organizacji-pogrzebu': '2025-01-11T13:00:00Z',
    'przewoz-zwlok': '2025-01-12T09:00:00Z',
    'o-jakiej-porze-roku-moze-byc-przeprowadzana-ekshumacja': '2025-01-13T16:00:00Z',
    'etapy-zaloby-jak-uporac-sie-z-odejsciem-bliskiej-osoby': '2025-01-14T10:00:00Z',
    'jak-zgodnie-z-przepisami-przewozic-zwloki': '2025-01-05T14:00:00Z',
    'jak-przetransportowac-cialo-zmarlego-z-zagranicy': '2025-01-06T11:00:00Z',
    'jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb': '2025-01-07T15:00:00Z',
    'jakie-kwiaty-wybrac-na-oprawe-ceremonii-pogrzebowej': '2025-01-08T12:00:00Z',
    'czy-zaklad-pogrzebowy-moze-dopelnic-formalnosci-pogrzebowych-w-zastepstwie-klienta': '2025-01-09T14:00:00Z',
    'jak-zorganizowac-pogrzeb-bez-srodkow-finansowych': '2025-01-10T10:00:00Z',
  },

  // Cemetery pages
  cmentarze: {
    main: '2025-01-11T16:00:00Z',
    doly: '2025-01-11T16:00:00Z',
    radogoszcz: '2025-01-11T16:00:00Z',
    stary: '2025-01-11T16:00:00Z',
    zarzew: '2025-01-11T16:00:00Z',
    'komunalny-polnocny': '2025-01-11T16:00:00Z',
  },

  // Legal pages (rarely change)
  legal: {
    rodo: '2024-12-01T00:00:00Z',
    'polityka-prywatnosci': '2024-12-01T00:00:00Z',
    regulamin: '2024-12-01T00:00:00Z',
  },
}

// URL slug registries
export const SLUGS = {
  services: [
    'organizacja-pogrzebow-lodz',
    'oprawa-muzyczna-lodz',
    'transport-zmarlych-lodz',
    'krematorium-lodz',
    'ekshumacja-lodz',
  ],

  asortyment: [
    'trumny-lodz',
    'urny-lodz',
    'odziez-lodz',
    'wiazanki-lodz',
    'wience-lodz',
  ],

  poradnik: Object.keys(CONTENT_LAST_MODIFIED.poradnik),

  cmentarze: [
    'doly',
    'radogoszcz',
    'stary',
    'zarzew',
    'komunalny-polnocny',
  ],

  locations: [
    'zaklad-pogrzebowy-pabianice',
    'zaklad-pogrzebowy-zgierz',
    'zaklad-pogrzebowy-aleksandrow-lodzki',
    'zaklad-pogrzebowy-konstantynow-lodzki',
    'zaklad-pogrzebowy-lowicz',
    'zaklad-pogrzebowy-sieradz',
    'zaklad-pogrzebowy-zdunska-wola',
  ]
}

// Generate sitemap entries from registries
export function generateSitemapEntries(baseUrl: string): SitemapEntry[] {
  const entries: SitemapEntry[] = []

  // Core pages
  entries.push(
    {
      url: baseUrl,
      lastModified: CONTENT_LAST_MODIFIED.homepage,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/zaklad-pogrzebowy-lodz`,
      lastModified: CONTENT_LAST_MODIFIED.homepage,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/uslugi-pogrzebowe-lodz`,
      lastModified: CONTENT_LAST_MODIFIED.services.main,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pogrzeb-bez-zaliczki`,
      lastModified: CONTENT_LAST_MODIFIED.homepage,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/o-nas`,
      lastModified: CONTENT_LAST_MODIFIED.about,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: CONTENT_LAST_MODIFIED.contact,
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  )

  // Service pages
  entries.push({
    url: `${baseUrl}/uslugi`,
    lastModified: CONTENT_LAST_MODIFIED.services.main,
    changeFrequency: 'monthly',
    priority: 0.8,
  })

  SLUGS.services.forEach(slug => {
    const serviceKey = slug.split('-')[0] as keyof typeof CONTENT_LAST_MODIFIED.services
    entries.push({
      url: `${baseUrl}/uslugi/${slug}`,
      lastModified: CONTENT_LAST_MODIFIED.services[serviceKey] || CONTENT_LAST_MODIFIED.services.main,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  // Asortyment pages
  entries.push({
    url: `${baseUrl}/asortyment`,
    lastModified: CONTENT_LAST_MODIFIED.asortyment.main,
    changeFrequency: 'monthly',
    priority: 0.7,
  })

  SLUGS.asortyment.forEach(slug => {
    const itemKey = slug.split('-')[0] as keyof typeof CONTENT_LAST_MODIFIED.asortyment
    entries.push({
      url: `${baseUrl}/asortyment/${slug}`,
      lastModified: CONTENT_LAST_MODIFIED.asortyment[itemKey] || CONTENT_LAST_MODIFIED.asortyment.main,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Poradnik hub and articles
  entries.push({
    url: `${baseUrl}/poradnik`,
    lastModified: BUILD_TIMESTAMP,
    changeFrequency: 'monthly',
    priority: 0.9,
  })

  SLUGS.poradnik.forEach(slug => {
    entries.push({
      url: `${baseUrl}/poradnik/${slug}`,
      lastModified: CONTENT_LAST_MODIFIED.poradnik[slug as keyof typeof CONTENT_LAST_MODIFIED.poradnik],
      changeFrequency: 'monthly',
      priority: 0.85,
    })
  })

  // Cemetery hub and pages
  entries.push({
    url: `${baseUrl}/cmentarze-lodz`,
    lastModified: CONTENT_LAST_MODIFIED.cmentarze.main,
    changeFrequency: 'monthly',
    priority: 0.9,
  })

  SLUGS.cmentarze.forEach(slug => {
    entries.push({
      url: `${baseUrl}/cmentarze-lodz/${slug}`,
      lastModified: CONTENT_LAST_MODIFIED.cmentarze[slug as keyof typeof CONTENT_LAST_MODIFIED.cmentarze],
      changeFrequency: 'monthly',
      priority: 0.85,
    })
  })

  // Legal pages
  Object.entries(CONTENT_LAST_MODIFIED.legal).forEach(([slug, lastModified]) => {
    entries.push({
      url: `${baseUrl}/${slug}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    })
  })

  // Location pages
  if (SLUGS.locations) {
    SLUGS.locations.forEach(slug => {
      entries.push({
        url: `${baseUrl}/${slug}`,
        lastModified: CONTENT_LAST_MODIFIED.homepage, // Assuming same update freq as homepage
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    })
  }

  return entries
}

// Production domain validation
export function validateProductionDomain(url: string): string {
  const PRODUCTION_DOMAIN = 'https://nekrolog-lodz.com'

  // In production, always use the canonical domain
  if (process.env.NODE_ENV === 'production') {
    return PRODUCTION_DOMAIN
  }

  // In development/staging, allow override but warn
  const allowedDomains = [PRODUCTION_DOMAIN, 'http://localhost:3000']
  if (allowedDomains.some(domain => url.startsWith(domain))) {
    return url
  }

  console.warn(`⚠️  Unexpected domain detected: ${url}. Using production domain in production mode.`)
  return PRODUCTION_DOMAIN
}
