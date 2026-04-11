export type NavigationSection =
  | 'home'
  | 'service'
  | 'guide'
  | 'contact'
  | 'faq'
  | 'city'
  | 'assortment'
  | 'company'
  | 'legal'

export type RelatedGroupConfig = {
  title: string
  description?: string
  hrefs: string[]
}

export type RouteEntry = {
  href: string
  label: string
  description: string
  section: NavigationSection
  relatedGroups?: RelatedGroupConfig[]
}

export type ResolvedRelatedGroup = {
  title: string
  description?: string
  links: RouteEntry[]
}

const LOCALE_SEGMENTS = new Set(['pl', 'en', 'de', 'fr', 'nl', 'it'])

const routeEntries: RouteEntry[] = [
  {
    href: '/',
    label: 'Strona główna',
    description:
      'Zakład pogrzebowy w Łodzi z całodobową pomocą, organizacją ceremonii i wsparciem bez zaliczki.',
    section: 'home',
    relatedGroups: [
      {
        title: 'Najważniejsze usługi',
        description: 'Najmocniejsze strony oferty zakładu pogrzebowego w Łodzi.',
        hrefs: [
          '/uslugi-pogrzebowe-lodz',
          '/uslugi/organizacja-pogrzebow-lodz',
          '/uslugi/krematorium-lodz',
          '/pogrzeb-bez-zaliczki',
        ],
      },
      {
        title: 'Przydatne informacje',
        description: 'Strony, które pomagają rodzinie szybko przejść do kolejnego kroku.',
        hrefs: ['/poradnik', '/poradnik/co-zrobic-po-smierci', '/kontakt'],
      },
    ],
  },
  {
    href: '/kontakt',
    label: 'Kontakt',
    description: 'Dane kontaktowe, dojazd i całodobowy numer zakładu pogrzebowego w Łodzi.',
    section: 'contact',
    relatedGroups: [
      {
        title: 'Najczęściej wybierane strony',
        description: 'Najkrótsza droga od kontaktu do usługi lub poradnika.',
        hrefs: ['/uslugi-pogrzebowe-lodz', '/poradnik/co-zrobic-po-smierci', '/pogrzeb-bez-zaliczki'],
      },
      {
        title: 'Usługi specjalistyczne',
        description: 'Strony o kremacji, transporcie i sprowadzeniu zmarłych do Polski.',
        hrefs: [
          '/uslugi/krematorium-lodz',
          '/uslugi/transport-zmarlych-lodz',
          '/uslugi/sprowadzenie-zwlok-z-zagranicy',
        ],
      },
    ],
  },
  {
    href: '/zaklad-pogrzebowy-lodz',
    label: 'Zakład Pogrzebowy Łódź',
    description: 'Główna strona lokalna zakładu pogrzebowego dla Łodzi i okolic.',
    section: 'home',
  },
  {
    href: '/nekrolog-lodz',
    label: 'Nekrolog Łódź',
    description: 'Lokalna strona marki Nekrolog Łódź i najważniejszych usług pogrzebowych.',
    section: 'home',
  },
  {
    href: '/uslugi',
    label: 'Usługi',
    description: 'Przegląd usług pogrzebowych, kremacyjnych i transportowych w Łodzi.',
    section: 'service',
    relatedGroups: [
      {
        title: 'Najważniejsze usługi pogrzebowe',
        hrefs: [
          '/uslugi/organizacja-pogrzebow-lodz',
          '/uslugi/krematorium-lodz',
          '/uslugi/transport-zmarlych-lodz',
          '/uslugi/sprowadzenie-zwlok-z-zagranicy',
        ],
      },
      {
        title: 'Pomoc dla rodziny',
        hrefs: ['/pogrzeb-bez-zaliczki', '/poradnik/co-zrobic-po-smierci', '/kontakt'],
      },
    ],
  },
  {
    href: '/uslugi-pogrzebowe-lodz',
    label: 'Usługi Pogrzebowe Łódź',
    description: 'Lokalna oferta usług pogrzebowych w Łodzi wraz z formalnościami i pomocą 24/7.',
    section: 'service',
    relatedGroups: [
      {
        title: 'Usługi powiązane',
        hrefs: [
          '/uslugi/organizacja-pogrzebow-lodz',
          '/uslugi/krematorium-lodz',
          '/uslugi/oprawa-muzyczna-lodz',
          '/uslugi/ekshumacja-lodz',
        ],
      },
      {
        title: 'Formalności i wsparcie',
        hrefs: ['/pogrzeb-bez-zaliczki', '/poradnik', '/kontakt'],
      },
    ],
  },
  {
    href: '/pogrzeb-bez-zaliczki',
    label: 'Pogrzeb bez zaliczki',
    description: 'Informacje o organizacji pogrzebu bez kosztów z góry i rozliczeniu zasiłku.',
    section: 'faq',
    relatedGroups: [
      {
        title: 'Powiązane strony usługowe',
        hrefs: ['/uslugi-pogrzebowe-lodz', '/uslugi/organizacja-pogrzebow-lodz', '/kontakt'],
      },
      {
        title: 'Poradnik i formalności',
        hrefs: ['/poradnik/zasilek-pogrzebowy-zus', '/poradnik/co-zrobic-po-smierci', '/poradnik'],
      },
    ],
  },
  {
    href: '/poradnik',
    label: 'Poradnik',
    description: 'Poradnik pogrzebowy z odpowiedziami na najczęstsze pytania rodzin z Łodzi.',
    section: 'guide',
    relatedGroups: [
      {
        title: 'Najważniejsze pytania rodzin',
        hrefs: [
          '/poradnik/co-zrobic-po-smierci',
          '/poradnik/zasilek-pogrzebowy-zus',
          '/poradnik/jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb',
          '/poradnik/jak-zorganizowac-pogrzeb-bez-srodkow-finansowych',
        ],
      },
      {
        title: 'Usługi, które rozwiązują te sprawy',
        hrefs: ['/uslugi/organizacja-pogrzebow-lodz', '/uslugi/transport-zmarlych-lodz', '/kontakt'],
      },
    ],
  },
  {
    href: '/poradnik/co-zrobic-po-smierci',
    label: 'Co zrobić po śmierci',
    description: 'Praktyczny poradnik krok po kroku po śmierci bliskiej osoby.',
    section: 'faq',
  },
  {
    href: '/poradnik/zasilek-pogrzebowy-zus',
    label: 'Zasiłek pogrzebowy ZUS',
    description: 'Poradnik o zasiłku pogrzebowym ZUS i rozliczeniu kosztów pogrzebu.',
    section: 'faq',
  },
  {
    href: '/poradnik/jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb',
    label: 'Dokumenty do pogrzebu',
    description: 'Lista dokumentów potrzebnych do organizacji pogrzebu.',
    section: 'faq',
  },
  {
    href: '/poradnik/jak-zorganizowac-pogrzeb-bez-srodkow-finansowych',
    label: 'Pogrzeb bez środków finansowych',
    description: 'Poradnik o organizacji pogrzebu bez własnych środków finansowych.',
    section: 'faq',
  },
  {
    href: '/poradnik/jak-przetransportowac-cialo-zmarlego-z-zagranicy',
    label: 'Transport ciała z zagranicy',
    description: 'Poradnik o sprowadzeniu zmarłego do Polski i formalnościach międzynarodowych.',
    section: 'faq',
  },
  {
    href: '/cmentarze-lodz',
    label: 'Cmentarze w Łodzi',
    description: 'Informacje o cmentarzach w Łodzi i organizacji pochówku.',
    section: 'guide',
  },
  {
    href: '/o-nas',
    label: 'O nas',
    description: 'Informacje o rodzinnej firmie pogrzebowej z Łodzi.',
    section: 'company',
  },
  {
    href: '/asortyment',
    label: 'Asortyment',
    description: 'Asortyment pogrzebowy: trumny, urny, wiązanki i odzież żałobna.',
    section: 'assortment',
  },
  {
    href: '/asortyment/trumny-lodz',
    label: 'Trumny',
    description: 'Trumny pogrzebowe dostępne w Łodzi.',
    section: 'assortment',
  },
  {
    href: '/asortyment/urny-lodz',
    label: 'Urny',
    description: 'Urny pogrzebowe i akcesoria kremacyjne.',
    section: 'assortment',
  },
  {
    href: '/asortyment/odziez-lodz',
    label: 'Odzież żałobna',
    description: 'Odzież żałobna i ubiór na pogrzeb.',
    section: 'assortment',
  },
  {
    href: '/asortyment/wiazanki-lodz',
    label: 'Wiązanki',
    description: 'Wiązanki pogrzebowe i kompozycje kwiatowe.',
    section: 'assortment',
  },
  {
    href: '/asortyment/wience-lodz',
    label: 'Wieńce',
    description: 'Wieńce pogrzebowe na ceremonie w Łodzi.',
    section: 'assortment',
  },
  {
    href: '/uslugi/organizacja-pogrzebow-lodz',
    label: 'Organizacja pogrzebów',
    description: 'Kompleksowa organizacja pogrzebu w Łodzi wraz z formalnościami i koordynacją ceremonii.',
    section: 'service',
    relatedGroups: [
      {
        title: 'Powiązane usługi',
        hrefs: ['/uslugi/krematorium-lodz', '/uslugi/oprawa-muzyczna-lodz', '/uslugi/transport-zmarlych-lodz'],
      },
      {
        title: 'Formalności i kontakt',
        hrefs: ['/pogrzeb-bez-zaliczki', '/poradnik/co-zrobic-po-smierci', '/kontakt'],
      },
    ],
  },
  {
    href: '/uslugi/krematorium-lodz',
    label: 'Kremacja',
    description: 'Usługa kremacji w Łodzi wraz z organizacją ceremonii i doborem urn.',
    section: 'service',
    relatedGroups: [
      {
        title: 'Powiązane usługi',
        hrefs: ['/uslugi/organizacja-pogrzebow-lodz', '/asortyment/urny-lodz', '/uslugi/oprawa-muzyczna-lodz'],
      },
      {
        title: 'Przydatne poradniki',
        hrefs: ['/poradnik/jak-wyglada-kremacja-zwlok', '/poradnik/co-zrobic-po-smierci', '/kontakt'],
      },
    ],
  },
  {
    href: '/uslugi/oprawa-muzyczna-lodz',
    label: 'Oprawa muzyczna',
    description: 'Oprawa muzyczna ceremonii pogrzebowej w Łodzi.',
    section: 'service',
    relatedGroups: [
      {
        title: 'Powiązane usługi',
        hrefs: ['/uslugi/organizacja-pogrzebow-lodz', '/asortyment/wiazanki-lodz', '/asortyment/wience-lodz'],
      },
      {
        title: 'Pomoc dla rodziny',
        hrefs: ['/poradnik/jakie-kwiaty-wybrac-na-oprawe-ceremonii-pogrzebowej', '/kontakt', '/pogrzeb-bez-zaliczki'],
      },
    ],
  },
  {
    href: '/uslugi/ekshumacja-lodz',
    label: 'Ekshumacja',
    description: 'Ekshumacja zwłok w Łodzi wraz z formalnościami i koordynacją.',
    section: 'service',
    relatedGroups: [
      {
        title: 'Powiązane strony',
        hrefs: ['/cmentarze-lodz', '/uslugi/transport-zmarlych-lodz', '/kontakt'],
      },
      {
        title: 'Przydatne poradniki',
        hrefs: ['/poradnik/o-jakiej-porze-roku-moze-byc-przeprowadzana-ekshumacja', '/poradnik', '/pogrzeb-bez-zaliczki'],
      },
    ],
  },
  {
    href: '/uslugi/transport-zmarlych-lodz',
    label: 'Transport zmarłych',
    description: 'Krajowy transport zmarłych z Łodzi i okolic, całodobowo i z pomocą w formalnościach.',
    section: 'service',
    relatedGroups: [
      {
        title: 'Usługi powiązane',
        hrefs: [
          '/uslugi/sprowadzenie-zwlok-z-zagranicy',
          '/uslugi/organizacja-pogrzebow-lodz',
          '/uslugi-pogrzebowe-lodz',
        ],
      },
      {
        title: 'Poradniki i kontakt',
        hrefs: [
          '/poradnik/jak-zgodnie-z-przepisami-przewozic-zwloki',
          '/poradnik/jak-przetransportowac-cialo-zmarlego-z-zagranicy',
          '/kontakt',
        ],
      },
    ],
  },
  {
    href: '/uslugi/sprowadzenie-zwlok-z-zagranicy',
    label: 'Sprowadzenie zwłok z zagranicy',
    description: 'Sprowadzanie zmarłych do Polski z Europy i spoza UE wraz z formalnościami.',
    section: 'service',
    relatedGroups: [
      {
        title: 'Usługi powiązane',
        hrefs: ['/uslugi/transport-zmarlych-lodz', '/uslugi/organizacja-pogrzebow-lodz', '/kontakt'],
      },
      {
        title: 'Poradniki i finansowanie',
        hrefs: [
          '/poradnik/jak-przetransportowac-cialo-zmarlego-z-zagranicy',
          '/pogrzeb-bez-zaliczki',
          '/poradnik/zasilek-pogrzebowy-zus',
        ],
      },
    ],
  },
]

const routeMap = new Map(routeEntries.map((entry) => [entry.href, entry]))

function normalizeSegments(path: string) {
  const cleaned = normalizePath(path)
  const segments = cleaned.split('/').filter(Boolean)
  return LOCALE_SEGMENTS.has(segments[0]) ? segments.slice(1) : segments
}

export function normalizePath(path: string) {
  if (!path) return '/'

  const strippedOrigin = path.replace(/^https?:\/\/[^/]+/i, '')
  const strippedHash = strippedOrigin.split('#')[0] || '/'
  const strippedQuery = strippedHash.split('?')[0] || '/'
  const normalized = strippedQuery === '/' ? '/' : strippedQuery.replace(/\/+$/, '')

  return normalized.startsWith('/') ? normalized || '/' : `/${normalized || ''}`
}

export function formatPathSegment(segment: string) {
  return segment
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function getRouteEntry(path: string) {
  return routeMap.get(normalizePath(path))
}

export function getRouteLabel(path: string) {
  const entry = getRouteEntry(path)
  if (entry) return entry.label

  const segments = normalizeSegments(path)
  const lastSegment = segments[segments.length - 1]
  return lastSegment ? formatPathSegment(lastSegment) : 'Strona główna'
}

export function getBreadcrumbItems(path: string, currentLabel?: string) {
  const normalized = normalizePath(path)
  if (normalized === '/') {
    return [{ name: 'Strona główna', url: '/' }]
  }

  const segments = normalizeSegments(normalized)
  const items: Array<{ name: string; url?: string }> = [{ name: 'Strona główna', url: '/' }]

  segments.forEach((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`
    const last = index === segments.length - 1
    const label = last && currentLabel ? currentLabel : getRouteLabel(href)

    items.push(last ? { name: label } : { name: label, url: href })
  })

  return items
}

function resolveRelatedGroup(group: RelatedGroupConfig, currentPath: string): ResolvedRelatedGroup {
  return {
    title: group.title,
    description: group.description,
    links: group.hrefs
      .map((href) => getRouteEntry(href))
      .filter((entry): entry is RouteEntry => Boolean(entry && entry.href !== currentPath)),
  }
}

function buildFallbackRelatedGroups(currentPath: string, section: NavigationSection): ResolvedRelatedGroup[] {
  const fallbackBySection: Record<NavigationSection, RelatedGroupConfig[]> = {
    home: [
      {
        title: 'Najważniejsze usługi',
        hrefs: ['/uslugi-pogrzebowe-lodz', '/uslugi/organizacja-pogrzebow-lodz', '/kontakt'],
      },
    ],
    service: [
      {
        title: 'Powiązane strony',
        hrefs: ['/uslugi-pogrzebowe-lodz', '/poradnik/co-zrobic-po-smierci', '/kontakt'],
      },
    ],
    guide: [
      {
        title: 'Powiązane strony',
        hrefs: ['/poradnik/co-zrobic-po-smierci', '/uslugi/organizacja-pogrzebow-lodz', '/kontakt'],
      },
    ],
    faq: [
      {
        title: 'Powiązane strony',
        hrefs: ['/poradnik', '/uslugi-pogrzebowe-lodz', '/kontakt'],
      },
    ],
    contact: [
      {
        title: 'Powiązane strony',
        hrefs: ['/uslugi-pogrzebowe-lodz', '/poradnik', '/pogrzeb-bez-zaliczki'],
      },
    ],
    city: [
      {
        title: 'Powiązane strony',
        hrefs: ['/zaklad-pogrzebowy-lodz', '/uslugi-pogrzebowe-lodz', '/kontakt'],
      },
    ],
    assortment: [
      {
        title: 'Powiązane strony',
        hrefs: ['/uslugi/krematorium-lodz', '/uslugi/organizacja-pogrzebow-lodz', '/kontakt'],
      },
    ],
    company: [
      {
        title: 'Powiązane strony',
        hrefs: ['/zaklad-pogrzebowy-lodz', '/kontakt', '/poradnik'],
      },
    ],
    legal: [
      {
        title: 'Powiązane strony',
        hrefs: ['/kontakt', '/polityka-prywatnosci', '/regulamin'],
      },
    ],
  }

  return fallbackBySection[section]
    .map((group) => resolveRelatedGroup(group, currentPath))
    .filter((group) => group.links.length > 0)
}

export function getRelatedGroups(path: string) {
  const normalized = normalizePath(path)
  const entry = getRouteEntry(normalized)

  if (entry?.relatedGroups?.length) {
    return entry.relatedGroups
      .map((group) => resolveRelatedGroup(group, normalized))
      .filter((group) => group.links.length > 0)
  }

  return buildFallbackRelatedGroups(normalized, entry?.section || 'guide')
}
