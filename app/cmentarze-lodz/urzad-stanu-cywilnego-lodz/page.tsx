import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Building2, CheckCircle2, FileText, Landmark, Phone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import FAQSchema from '@/components/structured-data/FAQSchema'
import FuneralChoiceNotice from '@/components/FuneralChoiceNotice'
import { SITE_URL } from '@/lib/constants'
import { buildMetaDescription } from '@/lib/local-seo'

export const metadata: Metadata = {
  title: 'USC Łódź - Akt Zgonu, Karta Zgonu i Formalności | Nekrolog Łódź',
  description: buildMetaDescription([
    'USC w Łodzi, akt zgonu i karta zgonu po śmierci bliskiej osoby',
    'pomoc w odebraniu karty zgonu, uzyskaniu aktu zgonu, organizacji miejsca pochówku i dokumentach do ZUS',
    'pełne wsparcie organizacyjne oraz organizacja pogrzebu zgodnie z wolą rodziny, także bez zaliczki',
  ]),
  keywords: [
    'urząd stanu cywilnego łódź',
    'usc łódź',
    'usc łódź akt zgonu',
    'akt zgonu łódź',
    'karta zgonu łódź',
    'formalności po śmierci łódź',
    'zakład pogrzebowy łódź usc',
  ],
  alternates: {
    canonical: `${SITE_URL}/cmentarze-lodz/urzad-stanu-cywilnego-lodz`,
  },
  openGraph: {
    title: 'USC Łódź - Akt Zgonu, Karta Zgonu i Formalności',
    description:
      'Pomagamy rodzinie po śmierci bliskiej osoby w sprawach USC w Łodzi, przy karcie zgonu, akcie zgonu, ZUS i organizacji pogrzebu.',
    url: `${SITE_URL}/cmentarze-lodz/urzad-stanu-cywilnego-lodz`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const supportItems = [
  'pomoc w odebraniu karty zgonu ze szpitala',
  'uzyskanie aktu zgonu',
  'organizację miejsca pochówku na cmentarzu',
  'dopełnienie formalności w ZUS',
  'kompleksową organizację ceremonii pogrzebowej zgodnie z wolą Rodziny',
]

const faqData = [
  {
    question: 'Czy jeśli ciało zostało przewiezione ze szpitala do chłodni, na przykład Skrzydlewska, muszę organizować tam pogrzeb?',
    answer:
      'Nie. Nawet jeśli ciało zostało przewiezione do chłodni współpracującej ze szpitalem, rodzina nadal może wybrać inny zakład pogrzebowy. Sam transport do chłodni nie oznacza obowiązku organizacji pogrzebu w tej firmie.',
  },
  {
    question: 'Czy pomagacie uzyskać akt zgonu w USC w Łodzi?',
    answer:
      'Tak. Pomagamy rodzinie przejść przez formalności związane z USC w Łodzi, uzyskaniem aktu zgonu oraz skompletowaniem dokumentów potrzebnych na każdym etapie.',
  },
  {
    question: 'Czy zakład pogrzebowy może pomóc w sprawach urzędowych po śmierci bliskiej osoby?',
    answer:
      'Tak. Wspieramy w kontakcie ze szpitalem, USC, cmentarzem i przy dokumentach do ZUS, aby odciążyć rodzinę od obowiązków urzędowych i organizacyjnych.',
  },
  {
    question: 'Czy można zorganizować pogrzeb bez zaliczki?',
    answer:
      'Tak. W wielu przypadkach organizujemy pogrzeb bez kosztów z góry i pomagamy w rozliczeniu zasiłku pogrzebowego ZUS/KRUS.',
  },
]

export default function UrzadStanuCywilnegoLodzPage() {
  const breadcrumbs = [
    { name: 'Strona Główna', url: '/' },
    { name: 'Cmentarze w Łodzi', url: '/cmentarze-lodz' },
    { name: 'Urząd Stanu Cywilnego Łódź' },
  ]

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'USC Łódź - akt zgonu, karta zgonu i pomoc rodziny po śmierci bliskiej osoby',
    url: `${SITE_URL}/cmentarze-lodz/urzad-stanu-cywilnego-lodz`,
    description:
      'Strona informacyjna o formalnościach związanych z USC w Łodzi, kartą zgonu, aktem zgonu oraz o wsparciu, jakie zapewnia Nekrolog Łódź.',
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqData} name="USC Łódź FAQ" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section className="relative bg-gradient-to-b from-black via-black/95 to-black/90 pb-12 pt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/cmentarze-lodz"
              className="mb-6 inline-flex items-center gap-2 text-primary transition hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Powrót do cmentarzy i formalności
            </Link>

            <h1 className="mb-6 text-4xl font-playfair font-medium text-white md:text-5xl">
              USC w Łodzi i Akt Zgonu
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Pomoc przy karcie zgonu, uzyskaniu aktu zgonu w USC w Łodzi oraz w pierwszych formalnościach po śmierci bliskiej osoby.
            </p>

            <FuneralChoiceNotice />
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
                  W ramach naszych usług zapewniamy
                </h2>
                <ul className="space-y-4">
                  {supportItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-gray-300">
                  Naszym celem jest odciążenie Państwa od spraw urzędowych.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-white/10 bg-black/30">
                <CardContent className="p-6">
                  <h2 className="mb-4 flex items-center gap-3 text-xl font-playfair text-white">
                    <FileText className="h-5 w-5 text-primary" />
                    Jak pomagamy rodzinie
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Koordynujemy formalności od odbioru karty zgonu po uzyskanie aktu zgonu w USC w Łodzi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Pomagamy przejść od dokumentów USC do wyboru miejsca pochówku i organizacji ceremonii.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Wspieramy również w dokumentach do ZUS i rozliczeniu zasiłku pogrzebowego bez niepotrzebnego obciążania rodziny.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-black/30">
                <CardContent className="p-6">
                  <h2 className="mb-4 flex items-center gap-3 text-xl font-playfair text-white">
                    <Landmark className="h-5 w-5 text-primary" />
                    Karta Zgonu, Akt Zgonu i Dalsza Organizacja
                  </h2>
                  <p className="text-gray-300">
                    Choć zgodnie z przepisami odbiór karty zgonu należy do obowiązków Rodziny, również dysponujemy własnym autem
                    i zapewniamy pomoc w szpitalu, aby odebrać z Państwem kartę zgonu.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Po uzyskaniu aktu zgonu w USC w Łodzi przejmujemy kolejne etapy organizacji: miejsce pochówku, termin ceremonii,
                    formalności cmentarne, dokumenty do ZUS oraz kompleksowe przygotowanie pogrzebu zgodnie z wolą rodziny.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-black/30">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-white">Pomoc 24/7</p>
                  <p className="mt-3 text-gray-300">
                    Jeśli potrzebują Państwo wsparcia po śmierci bliskiej osoby, prosimy o kontakt o każdej porze.
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

              <Card className="border-white/10 bg-black/30">
                <CardContent className="p-6">
                  <h2 className="mb-3 text-xl font-playfair text-white">
                    Czy jeśli ciało zostało zabrane do chłodni współpracującej ze szpitalem, trzeba tam organizować pogrzeb?
                  </h2>
                  <p className="text-gray-300">
                    Nie. Nawet jeśli ciało zostało przewiezione do chłodni, z którą szpital współpracuje, rodzina nadal
                    ma pełne prawo wybrać inny zakład pogrzebowy. Nie są Państwo zobowiązani do organizacji pogrzebu w tej firmie.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
