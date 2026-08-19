import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, ServerCog, ShieldCheck, Wrench } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import JsonLdScript from '@/components/structured-data/JsonLdScript'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

const TOVERNET_URL = 'https://tovernet.online'
const TOVERNET_CASE_STUDY_URL = 'https://tovernet.online/pl/projekty/nekrolog-lodz'

export const metadata: Metadata = {
  title: 'Partner Technologiczny — Tovernet',
  description:
    'Infrastrukturę cyfrową zakładu pogrzebowego Jolanta Kostowska Nekrolog Łódź — stronę internetową, generator klepsydry i systemy techniczne — prowadzi Tovernet.',
  keywords: ['tovernet', 'partner technologiczny nekrolog łódź', 'infrastruktura cyfrowa zakładu pogrzebowego'],
  alternates: {
    canonical: `${SITE_URL}/tovernet`,
  },
  openGraph: {
    title: 'Partner Technologiczny — Tovernet',
    description:
      'Tovernet prowadzi infrastrukturę cyfrową Nekrolog Łódź — stronę, generator klepsydry i systemy techniczne zakładu.',
    url: `${SITE_URL}/tovernet`,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Partner technologiczny' },
]

const responsibilities = [
  {
    icon: ServerCog,
    title: 'Infrastruktura i utrzymanie',
    text: 'Strona internetowa nekrolog-lodz.com oraz generator klepsydry klepsydra.nekrolog-lodz.com są zaprojektowane, wdrożone i utrzymywane przez Tovernet.',
  },
  {
    icon: Wrench,
    title: 'Decyzje technologiczne i wykonawcy',
    text: 'Tovernet decyduje o wdrażanych rozwiązaniach technicznych i koordynuje wykonawców oraz dostawców usług cyfrowych zaangażowanych przy tych systemach.',
  },
  {
    icon: ShieldCheck,
    title: 'Rola techniczna, nie właścicielska',
    text: 'Usługodawcą i administratorem danych w rozumieniu regulaminu i polityki prywatności zakładu pozostaje Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska. Tovernet pełni rolę dostawcy technologii i płatności działającego na zlecenie zakładu.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Partner Technologiczny — Tovernet',
  url: `${SITE_URL}/tovernet`,
  description:
    'Strona opisująca rolę Tovernet jako dostawcy i operatora infrastruktury cyfrowej dla zakładu pogrzebowego Nekrolog Łódź.',
  inLanguage: 'pl-PL',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Nekrolog Łódź',
    url: SITE_URL,
  },
  about: {
    '@type': 'Organization',
    name: 'Tovernet',
    url: TOVERNET_URL,
  },
}

export default function TovernetPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <JsonLdScript data={jsonLd} />
      <BreadcrumbController overrides={[{ segment: 'tovernet', label: 'Partner technologiczny' }]} />

      <section className="relative overflow-hidden bg-gradient-to-b from-black via-black/95 to-black/90 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
              <ServerCog className="h-4 w-4" />
              Partner technologiczny
            </div>
            <h1 className="text-4xl font-playfair font-medium leading-tight text-white md:text-5xl">
              Za infrastrukturą cyfrową Nekrolog Łódź stoi Tovernet
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-200">
              Stronę internetową, generator klepsydry i systemy techniczne zakładu pogrzebowego{' '}
              <strong className="text-white">Jolanta Kostowska Nekrolog Łódź</strong> projektuje,
              wdraża i na bieżąco utrzymuje{' '}
              <a
                href={TOVERNET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline decoration-primary/40 underline-offset-4 hover:text-primary/80"
              >
                Tovernet
              </a>
              .
            </p>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              Tovernet zajmuje się rozwojem technicznym marki od strony infrastruktury — nie usługami
              pogrzebowymi. Za organizację ceremonii, formalności i kontakt z rodzinami odpowiada
              zakład pogrzebowy Nekrolog Łódź.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={TOVERNET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-base font-semibold text-black transition hover:bg-primary/90 sm:w-auto sm:min-w-[220px] md:text-lg"
              >
                Zobacz Tovernet
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={TOVERNET_CASE_STUDY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-black/40 px-6 py-4 text-base font-semibold text-white transition hover:border-primary/40 hover:text-primary sm:w-auto md:text-lg"
              >
                Case study współpracy
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/95 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-playfair font-medium text-white md:text-4xl">
              Zakres współpracy
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {responsibilities.map(({ icon: Icon, title, text }) => (
                <Card key={title} className="border border-white/10 bg-black/30">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-3 leading-relaxed text-gray-400">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Card className="border border-primary/20 bg-black/30">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-playfair font-medium text-white">
                  Generator klepsydry — przykład wdrożenia
                </h2>
                <p className="mt-4 leading-relaxed text-gray-300">
                  Generator klepsydry online, dostępny pod klepsydra.nekrolog-lodz.com, to jeden z
                  systemów zbudowanych i utrzymywanych przez Tovernet dla Nekrolog Łódź — od
                  darmowego narzędzia dla rodzin po konto z własnym brandingiem dla innych zakładów
                  pogrzebowych.
                </p>
                <Link
                  href="/klepsydra"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-primary transition hover:text-primary/80"
                >
                  Zobacz generator klepsydry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <div className="mt-10 rounded-md border border-primary/20 bg-primary/10 p-6 text-center md:p-8">
              <p className="text-lg font-medium text-white">
                W sprawach pogrzebowych zadzwoń całodobowo: {BUSINESS_INFO.phone}
              </p>
              <p className="mt-3 text-gray-300">
                Pytania techniczne dotyczące strony lub generatora klepsydry kieruj bezpośrednio do{' '}
                <a
                  href={TOVERNET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline decoration-primary/40 underline-offset-4 hover:text-primary/80"
                >
                  Tovernet
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
