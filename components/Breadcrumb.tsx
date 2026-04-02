'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import { useBreadcrumbContext } from '@/components/breadcrumb-context'

const labelOverrides: Record<string, string> = {
  pl: 'PL',
  en: 'EN',
  de: 'DE',
  fr: 'FR',
  nl: 'NL',
  it: 'IT',
  'zaklad-pogrzebowy-lodz': 'Zakład Pogrzebowy',
  'nekrolog-lodz': 'Nekrolog Łódź',
  'uslugi-pogrzebowe-lodz': 'Usługi Pogrzebowe',
  'uslugi': 'Usługi',
  'asortyment': 'Asortyment',
  'odziez-lodz': 'Odzież',
  'trumny-lodz': 'Trumny',
  'urny-lodz': 'Urny',
  'wiazanki-lodz': 'Wiązanki',
  'wience-lodz': 'Wieńce',
  'o-nas': 'O nas',
  'kontakt': 'Kontakt',
  'pogrzeb-bez-zaliczki': 'Pogrzeb Bez Zaliczki',
  'poradnik': 'Poradnik',
  'cmentarze-lodz': 'Cmentarze w Łodzi',
  'doly': 'Cmentarz Doły',
  'radogoszcz': 'Cmentarz Radogoszcz',
  'stary': 'Stary Cmentarz',
  'zarzew': 'Cmentarz Zarzew',
  'komunalny-polnocny': 'Cmentarz Komunalny Północny',
  'co-zrobic-po-smierci': 'Co Zrobić Po Śmierci',
  'czy-urne-z-prochami-mozna-trzymac-w-domu': 'Urna z Prochami w Domu',
  'czy-zaklad-pogrzebowy-moze-dopelnic-formalnosci-pogrzebowych-w-zastepstwie-klienta': 'Formalności w Zastępstwie',
  'etapy-zaloby-jak-uporac-sie-z-odejsciem-bliskiej-osoby': 'Etapy Żałoby',
  'jak-przetransportowac-cialo-zmarlego-z-zagranicy': 'Transport z Zagranicy',
  'sprowadzenie-zwlok-z-zagranicy': 'Sprowadzenie Zwłok z Zagranicy',
  'jak-sie-ubrac-na-pogrzeb-kobieta-mezczyzna-dziecko': 'Jak Się Ubrać na Pogrzeb',
  'jak-wybrac-zaklad-do-organizacji-pogrzebu': 'Jak Wybrać Zakład Pogrzebowy',
  'jak-wyglada-kremacja-zwlok': 'Jak Wygląda Kremacja',
  'jak-zgodnie-z-przepisami-przewozic-zwloki': 'Przepisy Przewozu Zwłok',
  'jak-zorganizowac-pogrzeb-bez-srodkow-finansowych': 'Pogrzeb Bez Środków Finansowych',
  'jakie-buty-na-pogrzeb-i-czego-unikac': 'Jakie Buty na Pogrzeb',
  'jakie-czynnosci-obejmuje-kosmetyka-posmiertna': 'Kosmetyka Pośmiertna',
  'jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb': 'Dokumenty do Pogrzebu',
  'jakie-kwiaty-wybrac-na-oprawe-ceremonii-pogrzebowej': 'Kwiaty na Pogrzeb',
  'o-jakiej-porze-roku-moze-byc-przeprowadzana-ekshumacja': 'Ekshumacja',
  'przewoz-zwlok': 'Przewóz Zwłok',
  'w-co-ubrac-zmarlego-na-pogrzeb': 'Ubiór Zmarłego',
  'zasilek-pogrzebowy-zus': 'Zasiłek Pogrzebowy ZUS',
  'czy-na-pogrzeb-trzeba-ubrac-sie-na-czarno': 'Czy Na Pogrzeb Ubrać Się na Czarno',
  'polityka-prywatnosci': 'Polityka Prywatności',
  'regulamin': 'Regulamin',
  'rodo': 'RODO',
}

const formatLabel = (segment: string) => {
  const normalized = segment.toLowerCase()
  if (labelOverrides[normalized]) {
    return labelOverrides[normalized]
  }

  return normalized
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const Breadcrumb = ({ pathname }: { pathname?: string } = {}) => {
  const pathnameFromRouter = usePathname()
  const { overrides, hide } = useBreadcrumbContext()

  const currentPath = pathname || pathnameFromRouter || '/'

  if (hide || currentPath === '/') {
    return null
  }

  const segments = currentPath.split('/').filter(Boolean)
  const localeSegments = new Set(['pl', 'en', 'de', 'fr', 'nl', 'it'])
  const locale = localeSegments.has(segments[0]) ? segments[0] : null
  const contentSegments = locale ? segments.slice(1) : segments

  const getLabel = (segment: string, href: string) => {
    const overrideByHref = overrides.find((item) => item.href === href)
    if (overrideByHref?.label) return overrideByHref.label

    const overrideBySegment = overrides.find((item) => item.segment === segment)
    if (overrideBySegment?.label) return overrideBySegment.label

    return formatLabel(segment)
  }

  const crumbs = contentSegments.map((segment, index) => {
    const pathAccumulator =
      '/' + [locale, ...contentSegments.slice(0, index + 1)].filter(Boolean).join('/')
    const label = getLabel(segment, pathAccumulator)

    return {
      href: pathAccumulator,
      label,
    }
  })

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale ? `Start ${locale.toUpperCase()}` : 'Strona główna',
        item: locale ? `${SITE_URL}/${locale}` : SITE_URL,
      },
      ...crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: crumb.label,
        item: `${SITE_URL}${crumb.href}`,
      })),
    ],
  }

  return (
    <nav className="container mx-auto px-4 py-4 text-sm mt-20" aria-label="Nawigacja okruszkowa">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ol className="flex flex-wrap items-center text-muted-foreground">
        <li className="flex items-center">
          <Link href={locale ? `/${locale}` : '/'} className="text-primary hover:underline">
            {locale ? `Start ${locale.toUpperCase()}` : 'Strona główna'}
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
        </li>
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1

          return (
            <li key={crumb.href} className="flex items-center">
              {last ? (
                <span className="text-foreground">{crumb.label}</span>
              ) : (
                <>
                  <Link href={crumb.href} className="text-primary hover:underline">
                    {crumb.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
