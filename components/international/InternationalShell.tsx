'use client'

import type { ReactNode } from 'react'
import { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe2, Phone } from 'lucide-react'
import StickyContactBar from '@/components/international/StickyContactBar'
import {
  type Locale,
  SUPPORTED_LOCALES,
  buildLocalizedPath,
  getPagePath,
  internationalContactChannels,
  localeInfo,
  resolveIntlPage,
} from '@/lib/international/content'

const shellCopy: Record<
  Locale,
  { summary: string; address: string; mainLine: string; call: string; form: string }
> = {
  pl: {
    summary: 'Spokojne i pilne wsparcie dla rodzin organizujacych transport z zagranicy do Polski.',
    address: 'Adres',
    mainLine: 'Glowna linia: +48 602 274 661',
    call: 'Zadzwon',
    form: 'Formularz',
  },
  en: {
    summary: 'Calm and urgent support for families arranging transport from abroad to Poland.',
    address: 'Address',
    mainLine: 'Main line: +48 602 274 661',
    call: 'Call',
    form: 'Form',
  },
  de: {
    summary: 'Ruhige und schnelle Unterstuetzung fuer Familien, die eine Ueberfuehrung aus dem Ausland nach Polen organisieren.',
    address: 'Adresse',
    mainLine: 'Hauptleitung: +48 602 274 661',
    call: 'Anrufen',
    form: 'Formular',
  },
  fr: {
    summary: 'Un accompagnement calme et urgent pour les familles qui organisent un transport depuis l etranger vers la Pologne.',
    address: 'Adresse',
    mainLine: 'Ligne principale : +48 602 274 661',
    call: 'Appeler',
    form: 'Formulaire',
  },
  nl: {
    summary: 'Rustige en snelle ondersteuning voor families die vervoer vanuit het buitenland naar Polen regelen.',
    address: 'Adres',
    mainLine: 'Hoofdlijn: +48 602 274 661',
    call: 'Bel',
    form: 'Formulier',
  },
  it: {
    summary: 'Supporto rapido e rassicurante per le famiglie che organizzano il trasporto dall estero verso la Polonia.',
    address: 'Indirizzo',
    mainLine: 'Linea principale: +48 602 274 661',
    call: 'Chiama',
    form: 'Modulo',
  },
}

export default function InternationalShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const copy = localeInfo[locale]
  const ui = shellCopy[locale]
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const resolvedPage = useMemo(() => resolveIntlPage(locale, segments.slice(1)), [locale, pathname])
  const switcherLinks = useMemo(
    () =>
      SUPPORTED_LOCALES.map((targetLocale) => ({
        locale: targetLocale,
        href: resolvedPage ? getPagePath(resolvedPage, targetLocale) : buildLocalizedPath(targetLocale, 'home'),
      })),
    [resolvedPage]
  )

  return (
    <div lang={copy.htmlLang} className="min-h-screen bg-[#111111] pb-20 text-white md:pb-0">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link href={buildLocalizedPath(locale, 'home')} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10">
              <Globe2 className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Nekrolog Lodz</p>
              <p className="text-base font-semibold text-white">{copy.homeTitle}</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-stone-300 lg:flex">
            <Link href={buildLocalizedPath(locale, 'services')} className="hover:text-amber-300">
              {copy.nav.services}
            </Link>
            <Link href={buildLocalizedPath(locale, 'formalities')} className="hover:text-amber-300">
              {copy.nav.formalities}
            </Link>
            <Link href={buildLocalizedPath(locale, 'faq')} className="hover:text-amber-300">
              {copy.nav.faq}
            </Link>
            <Link href={buildLocalizedPath(locale, 'contact')} className="hover:text-amber-300">
              {copy.nav.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden flex-wrap items-center gap-2 xl:flex">
              {switcherLinks.map((link) => (
                <Link
                  key={link.locale}
                  href={link.href}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                    link.locale === locale
                      ? 'border-amber-300 bg-amber-300 text-stone-950'
                      : 'border-white/15 text-stone-200 hover:border-amber-300/40'
                  }`}
                >
                  {localeInfo[link.locale].label}
                </Link>
              ))}
            </div>
            <a
              href={internationalContactChannels[0].href}
              data-phone-location="intl_header"
              className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-stone-950"
            >
              <Phone className="h-4 w-4" />
              {internationalContactChannels[0].value}
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-stone-300 md:grid-cols-3 md:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Nekrolog Lodz</p>
            <p className="mt-3 max-w-sm leading-7">{ui.summary}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{ui.address}</p>
            <p className="mt-3 leading-7">Legionow 48, 90-702 Lodz, Polska</p>
            <a href="mailto:kontakt@nekrolog-lodz.com" className="leading-7 text-stone-300 hover:text-amber-300 transition-colors">kontakt@nekrolog-lodz.com</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">24/7</p>
            <a href={internationalContactChannels[0].href} data-phone-location="intl_footer_primary" className="mt-3 block leading-7 text-stone-300 hover:text-amber-300 transition-colors">{internationalContactChannels[0].value}</a>
            <a href="tel:+48602274661" data-phone-location="intl_footer_main" className="block leading-7 text-stone-300 hover:text-amber-300 transition-colors">{ui.mainLine}</a>
          </div>
        </div>
      </footer>
      <StickyContactBar
        phoneHref={internationalContactChannels[0].href}
        callLabel={ui.call}
        whatsappLabel="WhatsApp"
        whatsappUrl={internationalContactChannels[2].href}
        locale={locale}
        pageType={resolvedPage?.kind || 'home'}
        routeSlug={resolvedPage?.kind === 'route' ? segments[2] || '' : undefined}
        formLabel={ui.form}
      />
    </div>
  )
}
