import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Check, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL, BUSINESS_INFO } from '@/lib/constants'
import FAQSchema from '@/components/structured-data/FAQSchema'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import { BreadcrumbController } from '@/components/breadcrumb-context'

const APP_URL = 'https://klepsydra.nekrolog-lodz.com'

export const metadata: Metadata = {
  title: {
    absolute: 'Nekrologi Łódź – Ogłoszenia Pogrzebowe i Klepsydry | Nekrolog Łódź',
  },
  description:
    'Nekrologi w Łodzi – jak znaleźć i jak zamieścić ogłoszenie pogrzebowe. Klepsydry na cmentarzach Doły, Zarzew, Radogoszcz i innych. Darmowy generator klepsydry online oraz pomoc całodobowa. Tel: +48 602 274 661.',
  keywords: [
    'nekrologi łódź',
    'łódź nekrologi',
    'nekrologi internetowe łódź',
    'e-nekrologi łódź',
    'ogłoszenia pogrzebowe łódź',
    'klepsydra łódź nekrologi',
    'nekrologi cmentarz doły',
    'nekrologi cmentarz zarzew',
    'zawiadomienie o pogrzebie łódź',
  ],
  alternates: { canonical: `${SITE_URL}/nekrologi-lodz` },
  openGraph: {
    title: 'Nekrologi Łódź – Ogłoszenia Pogrzebowe i Klepsydry',
    description:
      'Jak znaleźć i jak zamieścić nekrolog w Łodzi. Klepsydry na łódzkich cmentarzach, darmowy generator online i pomoc całodobowa.',
    url: `${SITE_URL}/nekrologi-lodz`,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqData = [
  {
    question: 'Gdzie szukać nekrologów z Łodzi?',
    answer:
      'Nekrologi z Łodzi publikowane są w prasie lokalnej, na portalach z ogłoszeniami pogrzebowymi oraz jako drukowane klepsydry wywieszane przy kościołach, na klatkach schodowych i przy bramach cmentarzy – m.in. Doły, Zarzew, Radogoszcz, Mania, Kurczaki i Stary Cmentarz. Zakład Pogrzebowy Nekrolog Łódź pomaga rodzinie przygotować i rozpowszechnić takie ogłoszenie.',
  },
  {
    question: 'Jak zamieścić nekrolog w Łodzi?',
    answer:
      'Treść nekrologu można przygotować samodzielnie w darmowym generatorze klepsydry online (klepsydra.nekrolog-lodz.com) albo zlecić jej redakcję zakładowi pogrzebowemu. Nekrolog prasowy zamieszcza się przez redakcję wybranego tytułu, a klepsydry drukujemy i wywieszamy w okolicy zamieszkania oraz przy właściwym cmentarzu.',
  },
  {
    question: 'Czym różni się nekrolog od klepsydry?',
    answer:
      'Nekrolog to ogłoszenie o śmierci w prasie lub internecie. Klepsydra to drukowane zawiadomienie wywieszane w przestrzeni publicznej. Treść bywa taka sama – informuje o osobie zmarłej oraz o dacie, godzinie i miejscu uroczystości pogrzebowej.',
  },
  {
    question: 'Czy pomoc w przygotowaniu nekrologu jest płatna?',
    answer:
      'Darmowy generator klepsydry online jest bezpłatny dla rodzin. Redakcja treści i druk klepsydr wchodzą w zakres organizacji pogrzebu, którą prowadzimy bez kosztów z góry – z rozliczeniem z zasiłku pogrzebowego ZUS lub KRUS. Publikacja nekrologu w prasie to osobna opłata redakcji.',
  },
  {
    question: 'Czy przygotowujecie e-nekrologi i klepsydry online?',
    answer:
      'Tak. Poza tradycyjnymi klepsydrami pomagamy zamieścić informację o pogrzebie w formie elektronicznej. Bezpłatny generator klepsydry online udostępniamy pod adresem klepsydra.nekrolog-lodz.com.',
  },
]

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Nekrologi Łódź' },
]

const cemeteryLinks: [string, string][] = [
  ['Nekrologi – Cmentarz Doły', '/cmentarze-lodz/doly'],
  ['Nekrologi – Cmentarz Zarzew', '/cmentarze-lodz/zarzew'],
  ['Nekrologi – Cmentarz Radogoszcz (św. Rocha)', '/cmentarze-lodz/radogoszcz'],
  ['Nekrologi – Stary Cmentarz (Ogrodowa)', '/cmentarze-lodz/stary'],
  ['Nekrologi – Cmentarz na Mani', '/cmentarze-lodz/mania'],
  ['Nekrologi – Cmentarz na Kurczakach', '/cmentarze-lodz/kurczaki'],
]

export default function NekrologiLodzPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/nekrologi-lodz#webpage`,
    url: `${SITE_URL}/nekrologi-lodz`,
    name: 'Nekrologi Łódź – Ogłoszenia Pogrzebowe i Klepsydry',
    description:
      'Jak znaleźć i jak zamieścić nekrolog w Łodzi. Klepsydry na łódzkich cmentarzach, darmowy generator online i całodobowa pomoc zakładu pogrzebowego Nekrolog Łódź.',
    inLanguage: 'pl-PL',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#funeral-home` },
    dateModified: '2026-09-09',
  }

  return (
    <>
      <FAQSchema faqs={faqData} name="Nekrologi Łódź FAQ" />
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbController overrides={[{ segment: 'nekrologi-lodz', label: 'Nekrologi Łódź' }]} />

      <section className="relative min-h-[40vh] bg-gradient-to-b from-black via-black/95 to-black/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 text-white leading-tight">
              Nekrologi Łódź
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
              Ogłoszenia pogrzebowe i klepsydry – jak je znaleźć i jak zamieścić
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Zakład Pogrzebowy Nekrolog Łódź – Jolanta Kostowska pomaga rodzinom przygotować nekrologi,
              klepsydry i zawiadomienia o uroczystościach pogrzebowych. Działamy całą dobę, 7 dni w tygodniu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+48602274661"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary/90 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                <span>+48 602 274 661</span>
              </a>
              <a
                href={`${APP_URL}/generator`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 bg-black/50 px-8 py-4 text-lg font-medium text-white transition hover:bg-black/70 w-full sm:w-auto"
              >
                Darmowy generator klepsydry
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Nekrolog, klepsydra, e-nekrolog – co wybrać?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Nekrolog</strong> to ogłoszenie o śmierci publikowane w prasie lub w
                internecie. <strong className="text-white">Klepsydra</strong> to jego drukowana forma –
                zawiadomienie wywieszane w Łodzi na klatkach schodowych, przy kościołach i przy bramach cmentarzy.
                <strong className="text-white"> E-nekrolog</strong> to wersja elektroniczna, którą można udostępnić
                rodzinie w całej Polsce.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Wszystkie trzy formy zawierają te same informacje: imię i nazwisko osoby zmarłej, daty życia oraz
                datę, godzinę i miejsce ceremonii pogrzebowej wraz z nazwą cmentarza. Dlatego jeden przygotowany
                tekst można wykorzystać w każdej z nich.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { h: 'Klepsydra tradycyjna', items: ['Druk na kartce A4', 'Wywieszana w okolicy', 'Gotowa w kilka godzin'] },
                { h: 'Nekrolog prasowy', items: ['Publikacja w gazecie', 'Szerszy zasięg', 'Redakcja treści po naszej stronie'] },
                { h: 'E-nekrolog', items: ['Wersja online', 'Łatwe udostępnianie', 'Możliwość zdjęcia i wspomnienia'] },
              ].map((col) => (
                <Card key={col.h} className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-medium text-white mb-4">{col.h}</h3>
                    <ul className="space-y-3">
                      {col.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="rounded-lg border border-primary/30 bg-primary/10 p-6 text-center">
              <p className="text-lg text-white mb-2">
                <strong>Przygotuj klepsydrę online za darmo</strong>
              </p>
              <p className="text-gray-300 mb-4">
                Wpisz dane w przeglądarce, sprawdź podgląd A4 i wydrukuj – bez rejestracji.
              </p>
              <a
                href={`${APP_URL}/generator`}
                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
              >
                Otwórz generator klepsydry
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black/90 to-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Nekrologi według cmentarza w Łodzi
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Klepsydry wywiesza się przy bramie i kancelarii właściwego cmentarza. Sprawdź adres, godziny
              otwarcia kancelarii i kontakt dla każdego z łódzkich cmentarzy:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cemeteryLinks.map(([label, href]) => (
                <Link key={href} href={href} className="block">
                  <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                    <CardContent className="p-4 flex items-center justify-between gap-3">
                      <span className="text-white">{label}</span>
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Najczęstsze pytania o nekrologi w Łodzi
            </h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <Card key={faq.question} className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 rounded-lg border border-white/10 bg-black/30 p-6 text-center">
              <p className="text-gray-300 mb-4">
                Potrzebujesz pomocy przy pożegnaniu bliskiej osoby w Łodzi? Zajmiemy się formalnościami,
                klepsydrą i całą organizacją pogrzebu – bez kosztów z góry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/klepsydra-lodz"
                  className="inline-flex items-center justify-center gap-2 border border-primary/30 bg-black/50 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-black/70 transition"
                >
                  Klepsydra Łódź
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
