import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, ExternalLink, FileText, Phone, Printer } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import JsonLdScript from '@/components/structured-data/JsonLdScript'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

const APP_URL = 'https://klepsydra.nekrolog-lodz.com'
const GENERATOR_URL = `${APP_URL}/generator`
const PRICING_URL = `${APP_URL}/cennik`

export const metadata: Metadata = {
  title: { absolute: 'Klepsydra online - darmowy generator klepsydr | Nekrolog Łódź' },
  description:
    'Darmowy generator klepsydry pogrzebowej od Jolanta Kostowska Nekrolog Łódź. Wzór klepsydry, tekst i podgląd A4 — wydrukuj w kilka minut. Konto dla zakładu pogrzebowego za 20 zł miesięcznie.',
  keywords: [
    'klepsydra online',
    'klepsydra pogrzebowa',
    'generator klepsydry',
    'darmowy generator klepsydr',
    'wzór klepsydry',
    'jak napisać klepsydrę',
    'tekst klepsydry',
    'klepsydra łódź',
    'jolanta kostowska nekrolog łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/klepsydra`,
  },
  openGraph: {
    title: 'Klepsydra online - darmowy generator klepsydr',
    description:
      'Przejdź do generatora klepsydry Nekrolog Łódź albo sprawdź konto zakładu z własnym brandingiem za 20 zł miesięcznie.',
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

const funeralHomeBenefits = [
  'Własna nazwa zakładu pogrzebowego na klepsydrze',
  'Własny telefon, adres, strona internetowa i logo',
  'Dane zakładu zapisywane na koncie i używane automatycznie',
  'Klepsydry z własnym brandingiem za 20 zł miesięcznie',
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
      '@type': 'SoftwareApplication',
      name: 'Generator klepsydry online — klepsydra.nekrolog-lodz.com',
      alternateName: ['darmowy generator klepsydry', 'generator klepsydr', 'program do klepsydry'],
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      url: APP_URL,
      isAccessibleForFree: true,
      inLanguage: 'pl-PL',
      description: 'Darmowa aplikacja internetowa do generowania klepsydry pogrzebowej w formacie A4. Działa bez rejestracji i bez instalacji. Przygotowana przez zakład pogrzebowy Jolanta Kostowska Nekrolog Łódź.',
      featureList: [
        'Bezpłatne generowanie klepsydry bez rejestracji',
        'Podgląd klepsydry w formacie A4 przed wydrukiem',
        'Druk bezpośrednio z przeglądarki lub zapis PDF',
        'Własne logo i dane zakładu pogrzebowego (konto B2B za 20 zł/miesiąc)',
      ],
      offers: [
        { '@type': 'Offer', name: 'Generator klepsydry — bezpłatny', price: '0', priceCurrency: 'PLN', availability: 'https://schema.org/InStock' },
        { '@type': 'Offer', name: 'Konto zakładu pogrzebowego', price: '20', priceCurrency: 'PLN', availability: 'https://schema.org/InStock' },
      ],
      creator: {
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
    {
      '@type': 'HowTo',
      name: 'Jak wygenerować klepsydrę online krok po kroku',
      description: 'Instrukcja jak bezpłatnie wygenerować i wydrukować klepsydrę pogrzebową w formacie A4 na stronie klepsydra.nekrolog-lodz.com.',
      tool: { '@type': 'HowToTool', name: 'Generator klepsydry — klepsydra.nekrolog-lodz.com' },
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Wpisz dane pogrzebu', text: 'Uzupełnij formularz: imię i nazwisko osoby zmarłej, daty urodzenia i śmierci, datę, godzinę i miejsce ceremonii pogrzebowej, cmentarz oraz podpis rodziny.' },
        { '@type': 'HowToStep', position: 2, name: 'Sprawdź podgląd klepsydry', text: 'Generator pokazuje podgląd klepsydry w poziomym formacie A4. Możesz edytować dane i wybierać styl klepsydry.' },
        { '@type': 'HowToStep', position: 3, name: 'Wydrukuj lub zapisz jako PDF', text: 'Wydrukuj klepsydrę bezpośrednio z przeglądarki lub wybierz "Zapisz jako PDF" w opcjach drukowania.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Co powinna zawierać klepsydra pogrzebowa?', acceptedAnswer: { '@type': 'Answer', text: 'Klepsydra powinna zawierać: imię i nazwisko osoby zmarłej, daty urodzenia i śmierci, datę i godzinę ceremonii pogrzebowej, adres kościoła lub miejsca ceremonii, nazwę cmentarza oraz podpis rodziny.' } },
        { '@type': 'Question', name: 'Jak napisać klepsydrę pogrzebową?', acceptedAnswer: { '@type': 'Answer', text: 'Zacznij od formuły żałobnej ("Z głębokim żalem zawiadamiamy…"), następnie podaj imię, nazwisko i daty życia, informacje o ceremonii i zakończ podpisem rodziny. Generator Nekrolog Łódź prowadzi przez każde pole krok po kroku.' } },
        { '@type': 'Question', name: 'Czy generator klepsydry jest bezpłatny?', acceptedAnswer: { '@type': 'Answer', text: 'Tak, generator klepsydry jest bezpłatny dla rodzin. Zakłady pogrzebowe mogą aktywować konto z własnym brandingiem za 20 zł miesięcznie.' } },
        { '@type': 'Question', name: 'Czym różni się klepsydra od nekrologu?', acceptedAnswer: { '@type': 'Answer', text: 'Klepsydra to fizyczne zawiadomienie wywieszane w miejscach publicznych. Nekrolog to ogłoszenie prasowe lub internetowe. Oba słowa są często używane wymiennie.' } },
      ],
    },
    {
      '@type': 'Product',
      name: 'Konto zakładu pogrzebowego w generatorze klepsydry',
      description:
        'Miesięczne konto dla zakładów pogrzebowych, które pozwala generować klepsydry z własną nazwą, telefonem, adresem, stroną internetową i logo.',
      brand: {
        '@type': 'Brand',
        name: 'Nekrolog Łódź',
      },
      offers: {
        '@type': 'Offer',
        price: '20.00',
        priceCurrency: 'PLN',
        availability: 'https://schema.org/InStock',
        url: PRICING_URL,
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
              Zakład pogrzebowy Jolanta Kostowska Nekrolog Łódź
            </div>
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h1 className="text-4xl font-playfair font-medium leading-tight text-white md:text-5xl lg:text-6xl">
                  Klepsydra pogrzebowa online
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-gray-200">
                  Przygotuj darmową klepsydrę pogrzebową, sprawdź układ w formacie A4 i wydrukuj
                  w kilka minut — w osobnym generatorze od zakładu <strong className="text-white">Jolanta Kostowska Nekrolog Łódź</strong>.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-gray-300">
                  Znajdziesz tu też gotowe wzory klepsydry, przykładowe teksty i poradnik jak napisać
                  klepsydrę. Jeśli potrzebujesz pomocy przy pogrzebie — działamy całą dobę, bez zaliczki.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={GENERATOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-base font-semibold text-black transition hover:bg-primary/90 sm:w-auto sm:min-w-[230px] md:text-lg"
                  >
                    Przejdź do generatora
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-black/40 px-6 py-4 text-base font-semibold text-white transition hover:border-primary/40 hover:text-primary sm:w-auto md:text-lg"
                  >
                    <Phone className="h-5 w-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <div className="mt-5 rounded-md border border-primary/20 bg-primary/10 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-relaxed text-gray-200 md:text-base">
                      Dla zakładów pogrzebowych: personalizowane klepsydry z własnym logo i danymi
                      za <strong className="text-white">20 zł miesięcznie</strong>.
                    </p>
                    <a
                      href={PRICING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-primary/30 px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/15"
                    >
                      Cennik dla zakładów
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
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

            <Card className="border border-primary/20 bg-black/30">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-playfair font-medium text-white">
                  Konto dla zakładu pogrzebowego
                </h2>
                <p className="mt-4 leading-relaxed text-gray-300">
                  Jeśli przygotowujesz klepsydry jako zakład pogrzebowy, możesz aktywować konto za
                  20 zł miesięcznie. Wtedy generator drukuje na klepsydrach dane Twojego zakładu
                  zamiast domyślnego brandingu Nekrolog Łódź.
                </p>
                <ul className="mt-5 space-y-3">
                  {funeralHomeBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-gray-300">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={PRICING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-primary transition hover:text-primary/80"
                >
                  Sprawdź cennik konta zakładu
                  <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto mt-6 max-w-5xl">
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

      {/* 3-step how-to */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-playfair font-medium text-white md:text-4xl">
              Jak zrobić klepsydrę w 3 krokach?
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                ['1', 'Wpisz dane pogrzebu', 'Imię i nazwisko osoby zmarłej, daty, godzinę i miejsce ceremonii, cmentarz oraz podpis rodziny.'],
                ['2', 'Sprawdź układ', 'Generator pokazuje podgląd klepsydry w formacie A4. Możesz edytować dane do momentu, aż wszystko się zgadza.'],
                ['3', 'Wydrukuj lub zapisz PDF', 'Drukujesz bezpośrednio z przeglądarki na zwykłej drukarce domowej lub zapisujesz jako PDF.'],
              ].map(([num, title, text]) => (
                <div key={num} className="rounded-md border border-white/10 bg-black/30 p-6">
                  <span className="text-4xl font-bold text-primary">{num}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-400">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href={GENERATOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-base font-semibold text-black transition hover:bg-primary/90"
              >
                Przejdź do generatora klepsydry
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black/95 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-playfair font-medium text-white md:text-4xl">
              Najczęstsze pytania o klepsydrę
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                {
                  q: 'Co powinna zawierać klepsydra pogrzebowa?',
                  a: 'Klepsydra powinna zawierać: imię i nazwisko osoby zmarłej, daty urodzenia i śmierci, datę i godzinę ceremonii pogrzebowej, pełny adres kościoła lub miejsca ceremonii, nazwę cmentarza oraz podpis rodziny.',
                },
                {
                  q: 'Jak napisać klepsydrę — od czego zacząć?',
                  a: 'Zacznij od formuły żałobnej, np. "Z głębokim żalem zawiadamiamy, że odszedł od nas…". Następnie podaj imię i nazwisko, daty życia, informacje o ceremonii i zakończ podpisem rodziny. Nasz generator prowadzi przez każde pole krok po kroku.',
                },
                {
                  q: 'Czy generator klepsydry jest bezpłatny?',
                  a: 'Tak, generator klepsydry jest całkowicie bezpłatny dla rodzin. Zakłady pogrzebowe mogą odblokować generowanie klepsydry z własnym logo i danymi kontaktowymi za 20 zł miesięcznie.',
                },
                {
                  q: 'Czym różni się klepsydra od nekrologu?',
                  a: 'Klepsydra to fizyczne zawiadomienie wywieszane na klatkach schodowych i tablicach. Nekrolog to ogłoszenie w prasie lub internecie. W praktyce oba słowa są często używane wymiennie.',
                },
                {
                  q: 'Czy Nekrolog Łódź – Jolanta Kostowska pomaga napisać klepsydrę?',
                  a: 'Tak. Zakład pogrzebowy Jolanta Kostowska Nekrolog Łódź pomaga rodzinom zarówno z klepsydrą, jak i z pełną organizacją pogrzebu. Kontakt całodobowy: ' + BUSINESS_INFO.phone + '.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-md border border-white/10 bg-black/30 p-6">
                  <h3 className="text-lg font-semibold text-white">{q}</h3>
                  <p className="mt-3 leading-relaxed text-gray-400">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
