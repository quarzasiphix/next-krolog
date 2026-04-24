import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Building2, CheckCircle2, FileText, Landmark, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import FAQSchema from '@/components/structured-data/FAQSchema'
import { SITE_URL } from '@/lib/constants'
import { buildMetaDescription } from '@/lib/local-seo'

export const metadata: Metadata = {
  title: 'ZUS Łódź - Zasiłek Pogrzebowy i Formalności | Nekrolog Łódź',
  description: buildMetaDescription([
    'ZUS w Łodzi i zasiłek pogrzebowy po śmierci bliskiej osoby',
    'pomoc w dokumentach do ZUS, rozliczeniu zasiłku pogrzebowego i organizacji pogrzebu bez zaliczki',
    'spokojne wsparcie rodziny na każdym etapie formalności',
  ]),
  keywords: [
    'zus łódź zasiłek pogrzebowy',
    'zasiłek pogrzebowy zus łódź',
    'zus łódź pogrzeb',
    'dokumenty do zus po śmierci',
    'formalności zus po pogrzebie',
    'pogrzeb bez zaliczki zus',
  ],
  alternates: {
    canonical: `${SITE_URL}/zus-zasilek-pogrzebowy-lodz`,
  },
  openGraph: {
    title: 'ZUS Łódź - Zasiłek Pogrzebowy i Formalności',
    description:
      'Pomagamy rodzinie przygotować dokumenty do ZUS, wyjaśniamy zasiłek pogrzebowy i wspieramy w organizacji pogrzebu bez zaliczki.',
    url: `${SITE_URL}/zus-zasilek-pogrzebowy-lodz`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const supportItems = [
  'wyjaśnienie, komu przysługuje zasiłek pogrzebowy',
  'pomoc w kompletowaniu dokumentów do ZUS',
  'wsparcie w rozliczeniu kosztów pogrzebu',
  'organizację pogrzebu bez zaliczki w wielu przypadkach',
  'przeprowadzenie rodziny przez formalności krok po kroku',
]

const faqData = [
  {
    question: 'Czy pomagacie w formalnościach do ZUS po pogrzebie?',
    answer:
      'Tak. Pomagamy rodzinie skompletować dokumenty do ZUS i wyjaśniamy, jak wygląda rozliczenie zasiłku pogrzebowego.',
  },
  {
    question: 'Ile wynosi zasiłek pogrzebowy?',
    answer:
      'Obecnie zasiłek pogrzebowy wynosi 4000 zł. Na osobnej stronie poradnikowej wyjaśniamy także szczegóły dotyczące dokumentów i terminu złożenia wniosku.',
  },
  {
    question: 'Czy można zorganizować pogrzeb bez kosztów z góry i później rozliczyć go z ZUS?',
    answer:
      'Tak. W wielu przypadkach pomagamy rodzinie rozpocząć organizację pogrzebu bez zaliczki i przeprowadzić rozliczenie przez zasiłek pogrzebowy.',
  },
]

export default function ZusZasilekPogrzebowyLodzPage() {
  const breadcrumbs = [
    { name: 'Strona Główna', url: '/' },
    { name: 'Poradnik', url: '/poradnik' },
    { name: 'ZUS i Zasiłek Pogrzebowy' },
  ]

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'ZUS Łódź - zasiłek pogrzebowy i pomoc w formalnościach',
    url: `${SITE_URL}/zus-zasilek-pogrzebowy-lodz`,
    description:
      'Strona informacyjna o formalnościach do ZUS po śmierci bliskiej osoby oraz o wsparciu, jakie zapewnia Nekrolog Łódź.',
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqData} name="ZUS Łódź FAQ" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="relative bg-gradient-to-b from-black via-black/95 to-black/90 pb-12 pt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/poradnik"
              className="mb-6 inline-flex items-center gap-2 text-primary transition hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Powrót do poradnika
            </Link>

            <h1 className="mb-6 text-4xl font-playfair font-medium text-white md:text-5xl">
              ZUS w Łodzi i Zasiłek Pogrzebowy
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Pomoc w dokumentach do ZUS, rozliczeniu zasiłku pogrzebowego oraz organizacji pogrzebu bez kosztów z góry.
            </p>

            <div className="rounded-lg border border-white/10 bg-black/40 p-6">
              <p className="text-lg leading-relaxed text-gray-200">
                Po śmierci bliskiej osoby formalności związane z ZUS bywają dodatkowym obciążeniem dla rodziny.
                Dlatego pomagamy spokojnie przejść przez kwestie związane z dokumentami, zasiłkiem pogrzebowym
                i rozliczeniem kosztów pogrzebu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/95 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-playfair font-medium text-white">
                  <Building2 className="h-6 w-6 text-primary" />
                  W czym pomagamy przy ZUS
                </h2>
                <ul className="space-y-4">
                  {supportItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-white/10 bg-black/30">
                <CardContent className="p-6">
                  <h2 className="mb-4 flex items-center gap-3 text-xl font-playfair text-white">
                    <FileText className="h-5 w-5 text-primary" />
                    Jak wygląda pomoc
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Wyjaśniamy, jakie dokumenty są potrzebne do rozliczenia zasiłku pogrzebowego.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Pomagamy połączyć formalności ZUS z organizacją samego pogrzebu.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>W wielu przypadkach prowadzimy rodzinę tak, aby nie trzeba było finansować całości z góry.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-black/30">
                <CardContent className="p-6">
                  <h2 className="mb-4 flex items-center gap-3 text-xl font-playfair text-white">
                    <Landmark className="h-5 w-5 text-primary" />
                    Więcej informacji o zasiłku
                  </h2>
                  <p className="text-gray-300">
                    Szczegółowy poradnik o wysokości zasiłku, wymaganych dokumentach i terminach znajduje się na osobnej stronie:
                  </p>
                  <Link
                    href="/poradnik/zasilek-pogrzebowy-zus"
                    className="mt-4 inline-flex items-center justify-center rounded-md border border-primary/30 bg-primary/10 px-6 py-3 font-medium text-white transition hover:bg-primary/20"
                  >
                    Zobacz poradnik o zasiłku pogrzebowym ZUS
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-black/30">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-white">Pomoc 24/7</p>
                  <p className="mt-3 text-gray-300">
                    Jeśli potrzebują Państwo wsparcia przy ZUS i organizacji pogrzebu, prosimy o kontakt o każdej porze.
                  </p>
                  <a
                    href="tel:+48602274661"
                    className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-lg font-medium text-black transition hover:bg-primary/90"
                  >
                    <Phone className="h-5 w-5" />
                    +48 602 274 661
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
