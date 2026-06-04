import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, ExternalLink, FileText, Phone, Printer } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import JsonLdScript from '@/components/structured-data/JsonLdScript'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

const GENERATOR_URL = 'https://klepsydra.nekrolog-lodz.com/generator'
const APP_URL = 'https://klepsydra.nekrolog-lodz.com'

export const metadata: Metadata = {
  title: { absolute: 'Klepsydra online - darmowy generator klepsydr | Nekrolog Łódź' },
  description:
    'Darmowy generator klepsydry online od Nekrolog Łódź. Przygotuj e-klepsydrę z podglądem A4 i wydrukuj zawiadomienie pogrzebowe.',
  keywords: [
    'klepsydra online',
    'generator klepsydry',
    'darmowy generator klepsydr',
    'e-klepsydra',
    'klepsydra pogrzebowa',
    'klepsydra łódź',
    'nekrolog łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/klepsydra`,
  },
  openGraph: {
    title: 'Klepsydra online - darmowy generator klepsydr',
    description:
      'Przejdź do generatora klepsydry Nekrolog Łódź, uzupełnij dane i przygotuj zawiadomienie do wydruku.',
    url: `${SITE_URL}/klepsydra`,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Klepsydra online' },
]

const benefits = [
  'Darmowy generator klepsydry bez instalowania dodatkowego programu',
  'Podgląd zawiadomienia w formacie A4 przed wydrukiem',
  'Pola na dane osoby zmarłej, termin ceremonii, cmentarz i podpis rodziny',
  'Możliwość szybkiego kontaktu z zakładem pogrzebowym, jeśli potrzebna jest pomoc',
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Klepsydra online - darmowy generator klepsydr',
      url: `${SITE_URL}/klepsydra`,
      description:
        'Strona prowadząca do darmowego generatora klepsydry online od Nekrolog Łódź.',
      inLanguage: 'pl-PL',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Nekrolog Łódź',
        url: SITE_URL,
      },
    },
    {
      '@type': 'WebApplication',
      name: 'Klepsydra online - generator klepsydry',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: GENERATOR_URL,
      isAccessibleForFree: true,
      inLanguage: 'pl-PL',
      publisher: {
        '@type': 'Organization',
        name: BUSINESS_INFO.legalName,
        url: SITE_URL,
        telephone: BUSINESS_INFO.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS_INFO.address.streetAddress,
          addressLocality: BUSINESS_INFO.address.addressLocality,
          addressRegion: BUSINESS_INFO.address.addressRegion,
          postalCode: BUSINESS_INFO.address.postalCode,
          addressCountry: BUSINESS_INFO.address.addressCountry,
        },
      },
    },
  ],
}

export default function KlepsydraPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <JsonLdScript data={jsonLd} />
      <BreadcrumbController overrides={[{ segment: 'klepsydra', label: 'Klepsydra online' }]} />

      <section className="relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black/90 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
              <FileText className="h-4 w-4" />
              Generator klepsydry od Nekrolog Łódź
            </div>
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h1 className="text-4xl font-playfair font-medium leading-tight text-white md:text-5xl lg:text-6xl">
                  Klepsydra online
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-gray-200">
                  Przygotuj darmową e-klepsydrę w osobnym generatorze Nekrolog Łódź. Uzupełnij
                  dane, sprawdź podgląd A4 i wydrukuj zawiadomienie pogrzebowe.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-gray-300">
                  Jeśli rodzina potrzebuje pomocy przy treści klepsydry, formalnościach albo
                  organizacji pogrzebu w Łodzi, jesteśmy dostępni całodobowo. Pogrzeb możemy
                  zorganizować bez zaliczki, z rozliczeniem przez zasiłek pogrzebowy ZUS/KRUS.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={GENERATOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary/90 sm:w-auto"
                  >
                    Przejdź do generatora
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-black/40 px-8 py-4 text-lg font-medium text-white transition hover:border-primary/40 hover:text-primary sm:w-auto"
                  >
                    <Phone className="h-5 w-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <Card className="border border-primary/20 bg-black/40">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Printer className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Osobna aplikacja</p>
                      <p className="text-lg font-medium text-white">klepsydra.nekrolog-lodz.com</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-gray-300">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/95 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <Card className="border border-white/10 bg-black/30">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-playfair font-medium text-white">
                  Generator do szybkiego wydruku
                </h2>
                <p className="mt-4 leading-relaxed text-gray-300">
                  Narzędzie prowadzi krok po kroku przez najważniejsze dane: imię i nazwisko osoby
                  zmarłej, daty, miejsce ceremonii, cmentarz oraz podpis rodziny. Gotową klepsydrę
                  można sprawdzić w podglądzie i przygotować do druku.
                </p>
                <a
                  href={GENERATOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-primary transition hover:text-primary/80"
                >
                  Otwórz generator
                  <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-black/30">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-playfair font-medium text-white">
                  Pomoc przy klepsydrze i pogrzebie
                </h2>
                <p className="mt-4 leading-relaxed text-gray-300">
                  Klepsydra jest jednym z elementów organizacji pogrzebu. Nekrolog Łódź pomaga też
                  w formalnościach, transporcie zmarłych, kremacji, oprawie ceremonii oraz
                  rozliczeniu kosztów bez płatności z góry.
                </p>
                <Link
                  href="/klepsydra-lodz"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-primary transition hover:text-primary/80"
                >
                  Więcej o klepsydrach w Łodzi
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-md border border-primary/20 bg-primary/10 p-6 text-center md:p-8">
            <p className="text-lg font-medium text-white">
              Bezpośredni adres generatora: <span className="text-primary">{APP_URL}</span>
            </p>
            <p className="mt-3 text-gray-300">
              W pilnych sprawach pogrzebowych zadzwoń całodobowo: {BUSINESS_INFO.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
