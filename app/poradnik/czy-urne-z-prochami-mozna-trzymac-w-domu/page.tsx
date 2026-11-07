import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Scale, AlertCircle, CheckCircle2 } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import FAQSchema from '@/components/structured-data/FAQSchema'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

const PAGE_PATH = '/poradnik/czy-urne-z-prochami-mozna-trzymac-w-domu'
const DATE_MODIFIED = '2026-11-07'

export const metadata: Metadata = {
  title: { absolute: 'Czy można trzymać urnę z prochami w domu? Przepisy 2026 | Nekrolog Łódź' },
  description:
    'Czy w Polsce można trzymać urnę z prochami w domu lub rozsypać prochy? Co mówią obecne przepisy, jakie są legalne formy pochówku urny i jakie zmiany prawa są planowane.',
  keywords: [
    'czy można trzymać urnę w domu',
    'urna z prochami w domu',
    'urna w domu przepisy',
    'rozsypanie prochów polska',
    'pochówek urny',
    'co zrobić z urną po kremacji',
  ],
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: 'Czy można trzymać urnę z prochami w domu? Przepisy 2026',
    description: 'Obecne przepisy o pochówku urny, legalne miejsca pochówku i planowane zmiany prawa.',
    url: `${SITE_URL}${PAGE_PATH}`,
    type: 'article',
  },
}

const faqData = [
  {
    question: 'Czy w Polsce można legalnie trzymać urnę z prochami w domu?',
    answer:
      'Nie. Według obowiązującej ustawy z 31 stycznia 1959 r. o cmentarzach i chowaniu zmarłych prochy po kremacji chowa się na cmentarzu – w grobie ziemnym, grobie murowanym lub w niszy kolumbaryjnej. Przepisy nie przewidują przechowywania urny w mieszkaniu ani na prywatnej posesji.',
  },
  {
    question: 'Czy można rozsypać prochy zmarłego?',
    answer:
      'Obecnie nie. Rozsypywanie prochów, także w specjalnych „ogrodach pamięci”, nie jest w Polsce przewidziane w przepisach. Trwają prace nad zmianą prawa, która ma to umożliwić w wyznaczonych miejscach, ale do czasu jej wejścia w życie obowiązują dotychczasowe zasady.',
  },
  {
    question: 'Co się dzieje z urną po kremacji?',
    answer:
      'Po kremacji prochy umieszcza się w wybranej urnie. Najczęściej zakład pogrzebowy odbiera urnę z krematorium i przygotowuje ceremonię pochówku na cmentarzu – w grobie rodzinnym, nowym grobie urnowym albo w kolumbarium.',
  },
  {
    question: 'Czy urnę można pochować w istniejącym grobie rodzinnym?',
    answer:
      'Zwykle tak – urnę można dochować do istniejącego grobu, jeśli pozwala na to zarządca cmentarza i osoba dysponująca grobem. Pomagamy uzyskać zgodę i ustalić termin w kancelarii cmentarza.',
  },
  {
    question: 'Czy przepisy o urnach się zmienią?',
    answer:
      'Ministerstwo Rozwoju i Technologii przygotowuje nowe przepisy o cmentarzach i chowaniu zmarłych, w których mówi się m.in. o ogrodach pamięci. To projekt – do czasu uchwalenia i wejścia w życie nowej ustawy obowiązują obecne zasady.',
  },
]

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Poradnik', url: '/poradnik' },
  { name: 'Czy można trzymać urnę w domu?' },
]

export default function UrnaWDomuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}${PAGE_PATH}#article`,
    headline: 'Czy można trzymać urnę z prochami w domu? Przepisy 2026',
    inLanguage: 'pl-PL',
    dateModified: DATE_MODIFIED,
    mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
    author: { '@id': `${SITE_URL}/#funeral-home` },
    publisher: { '@id': `${SITE_URL}/#funeral-home` },
  }

  return (
    <>
      <FAQSchema faqs={faqData} name="Urna z prochami – FAQ" />
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-gradient-to-b from-black via-black/95 to-black/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white leading-tight">
              Czy można trzymać urnę z prochami w domu?
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Krótka odpowiedź: <strong className="text-white">obecnie nie</strong>. W Polsce prochy po kremacji
              chowa się na cmentarzu – w grobie lub w kolumbarium. Poniżej wyjaśniamy, co mówią przepisy, jakie są
              możliwości pochówku urny w Łodzi i jakie zmiany prawa są planowane.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 text-gray-300 leading-relaxed">
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-4 flex items-center gap-3">
                <Scale className="h-7 w-7 text-primary" aria-hidden /> Co mówią obecne przepisy
              </h2>
              <p className="mb-4">
                Zasady pochówku reguluje ustawa z 31 stycznia 1959 r. o cmentarzach i chowaniu zmarłych. Przewiduje
                ona pochowanie zwłok albo prochów na cmentarzu. Przechowywanie urny w mieszkaniu, zakopanie jej na
                działce czy rozsypanie prochów nie należą do form pochówku, które przepisy dopuszczają.
              </p>
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-5">
                <p className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-1 shrink-0" aria-hidden />
                  <span>
                    Media opisują prace Ministerstwa Rozwoju i Technologii nad nową ustawą, która mogłaby m.in.
                    dopuścić rozsypywanie prochów w wyznaczonych ogrodach pamięci. To projekt – stan na listopad 2026 r.
                    obowiązują dotychczasowe zasady. Zaktualizujemy tę stronę, gdy przepisy się zmienią.
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-4">Legalne miejsca pochówku urny</h2>
              <ul className="space-y-3">
                {[
                  ['Grób rodzinny', 'urnę można dochować do istniejącego grobu (za zgodą zarządcy cmentarza i dysponenta grobu).'],
                  ['Nowy grób urnowy', 'mniejszy niż tradycyjny, zwykle tańszy w przygotowaniu.'],
                  ['Kolumbarium', 'nisza w ścianie lub budowli kolumbaryjnej na cmentarzu.'],
                  ['Grób ziemny lub murowany', 'tak jak przy pochówku tradycyjnym.'],
                ].map(([name, desc]) => (
                  <li key={name} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" aria-hidden />
                    <span>
                      <strong className="text-white">{name}</strong> – {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Dostępność kolumbariów i miejsc na grób urnowy zależy od cmentarza. Godziny kancelarii i kontakty
                znajdziesz w zakładce <Link href="/cmentarze-lodz" className="text-primary underline">Cmentarze w Łodzi</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-4">Co dzieje się z urną po kremacji</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Po kremacji prochy umieszcza się w urnie wybranej przez rodzinę.</li>
                <li>Zakład pogrzebowy odbiera urnę z krematorium.</li>
                <li>Ustalamy z rodziną i kancelarią cmentarza termin pochówku urny.</li>
                <li>Odbywa się ceremonia – w kościele, w kaplicy lub bezpośrednio na cmentarzu – i złożenie urny.</li>
              </ol>
              <p className="mt-4">
                Więcej o przebiegu: <Link href="/uslugi/krematorium-lodz" className="text-primary underline">kremacja w Łodzi</Link>
                {' · '}
                <Link href="/poradnik/jak-wyglada-kremacja-zwlok" className="text-primary underline">jak wygląda kremacja zwłok</Link>
                {' · '}
                <Link href="/asortyment/urny-lodz" className="text-primary underline">urny</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-4">Najczęstsze pytania</h2>
              <div className="space-y-6">
                {faqData.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-6 text-center">
              <p className="mb-4">
                Planujesz pogrzeb z kremacją w Łodzi? Pomożemy wybrać urnę, miejsce pochówku i załatwić formalności –
                bez zaliczki, z rozliczeniem z zasiłku pogrzebowego.
              </p>
              <a
                href="tel:+48602274661"
                data-phone-location="poradnik_urna"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black"
              >
                <Phone className="h-5 w-5" aria-hidden />
                <span>+48 602 274 661 (24/7)</span>
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Aktualizacja: 7 listopada 2026. Informacja ogólna, nie stanowi porady prawnej.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
