import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import FAQSchema from '@/components/structured-data/FAQSchema'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import { BreadcrumbController } from '@/components/breadcrumb-context'

const PAGE_PATH = '/pogrzeb-lodz'
const DATE_MODIFIED = '2026-11-07'
const KLEPSYDRA_APP = 'https://klepsydra.nekrolog-lodz.com'

export const metadata: Metadata = {
  title: {
    absolute: 'Pogrzeb Łódź 2026 – Organizacja Pogrzebów, Koszty, Bez Zaliczki | Nekrolog Łódź',
  },
  description:
    'Pogrzeby w Łodzi: jak zorganizować pogrzeb krok po kroku, ile kosztuje pogrzeb w 2026 r., pogrzeb tradycyjny czy kremacja, zasiłek 7000 zł. Organizujemy pogrzeby bez zaliczki 24/7. Tel: +48 602 274 661.',
  keywords: [
    'pogrzeb łódź',
    'pogrzeby łódź',
    'pogrzeb w łodzi',
    'organizacja pogrzebów łódź',
    'organizacja pogrzebu łódź',
    'pogrzeb tradycyjny łódź',
    'tani pogrzeb łódź',
    'koszt pogrzebu łódź',
    'ile kosztuje pogrzeb w łodzi',
  ],
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: 'Pogrzeb w Łodzi – organizacja, koszty i pomoc bez zaliczki',
    description:
      'Jak zorganizować pogrzeb w Łodzi, ile kosztuje i jak rozliczyć go z zasiłku 7000 zł. Całodobowa pomoc zakładu pogrzebowego Nekrolog Łódź.',
    url: `${SITE_URL}${PAGE_PATH}`,
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const steps: { title: string; body: string }[] = [
  {
    title: 'Stwierdzenie zgonu i karta zgonu',
    body: 'Gdy śmierć nastąpiła w domu, wezwij lekarza (POZ lub nocną pomoc lekarską), który stwierdzi zgon i wystawi kartę zgonu. W szpitalu lub hospicjum kartę wystawia placówka.',
  },
  {
    title: 'Telefon do zakładu pogrzebowego',
    body: 'Dzwonisz do nas o każdej porze: +48 602 274 661. Przyjeżdżamy, przewozimy zmarłego do chłodni i od tej chwili prowadzimy całą organizację pogrzebu.',
  },
  {
    title: 'Akt zgonu w USC w Łodzi',
    body: 'Z kartą zgonu rejestruje się zgon w Urzędzie Stanu Cywilnego. Na podstawie upoważnienia możemy załatwić to w imieniu rodziny.',
  },
  {
    title: 'Cmentarz, termin i rodzaj ceremonii',
    body: 'Ustalamy z rodziną cmentarz (Doły, Zarzew, Szczecińska, Radogoszcz, Mania, Kurczaki, Stary Cmentarz i inne), termin w kancelarii cmentarza, a także ceremonię – w kościele, w kaplicy lub świecką.',
  },
  {
    title: 'Trumna lub urna, kwiaty, klepsydry, oprawa',
    body: 'Pomagamy wybrać trumnę lub urnę, wieńce i wiązanki, odzież dla zmarłego, oprawę muzyczną i nekrolog. Przygotowujemy i wywieszamy klepsydry.',
  },
  {
    title: 'Uroczystość pogrzebowa',
    body: 'Koordynujemy przebieg ceremonii: karawan, przygotowanie zmarłego, obsługę ceremonii i pochówek albo kremację z późniejszym złożeniem urny.',
  },
  {
    title: 'Zasiłek pogrzebowy',
    body: 'Wniosek o zasiłek (ZUS Z-12 lub KRUS) składa się w ciągu 12 miesięcy od dnia śmierci. Gdy organizujemy pogrzeb bez zaliczki, rozliczamy się z zasiłku i pomagamy złożyć wniosek.',
  },
]

// Średnie ceny rynkowe w Łodzi – źródło: kb.pl, cennik zakładów pogrzebowych w Łodzi (publikacja 29.04.2026).
const marketPrices: [string, string][] = [
  ['Organizacja pochówku', '3 280 zł'],
  ['Trumna sosnowa', '1 480 zł'],
  ['Zdobiona trumna dębowa', '5 500 zł'],
  ['Przygotowanie ciała do pogrzebu', '512 zł'],
  ['Przechowywanie ciała w chłodni (48 h)', '177 zł'],
  ['Msza pogrzebowa', '1 320 zł'],
  ['Opłaty kancelaryjne do pogrzebu', '611 zł'],
]

const faqData = [
  {
    question: 'Ile kosztuje pogrzeb w Łodzi w 2026 roku?',
    answer:
      'Koszt pogrzebu w Łodzi zależy od wyboru trumny lub urny, rodzaju ceremonii, cmentarza i dodatków. Według średnich cen rynkowych (kb.pl, kwiecień 2026) sama organizacja pochówku to ok. 3 280 zł, trumna sosnowa ok. 1 480 zł, przygotowanie ciała ok. 512 zł, a opłaty kancelaryjne ok. 611 zł. Dokładną wycenę podajemy przed podpisaniem umowy.',
  },
  {
    question: 'Czy można zorganizować pogrzeb w Łodzi bez pieniędzy?',
    answer:
      'Tak. Nekrolog Łódź organizuje pogrzeby bez zaliczki – rodzina nie płaci nic z góry, a koszt rozliczamy z zasiłku pogrzebowego ZUS lub KRUS, który od 1 stycznia 2026 r. wynosi 7000 zł (dla zgonów od tej daty).',
  },
  {
    question: 'Ile wynosi zasiłek pogrzebowy w 2026 roku?',
    answer:
      'Od 1 stycznia 2026 r. zasiłek pogrzebowy z ZUS i KRUS wynosi 7000 zł. O wysokości decyduje data zgonu – dla zgonów do 31 grudnia 2025 r. obowiązuje 4000 zł. Wniosek składa się w ciągu 12 miesięcy od dnia śmierci.',
  },
  {
    question: 'Co wybrać: pogrzeb tradycyjny czy kremację?',
    answer:
      'Pogrzeb tradycyjny to pochówek w trumnie, zwykle po mszy lub ceremonii w kaplicy. Przy kremacji ceremonia może odbyć się przed kremacją z trumną albo po niej z urną. Kremacja często jest tańsza i daje więcej swobody w wyborze miejsca pochówku, np. w niszy kolumbaryjnej lub w istniejącym grobie.',
  },
  {
    question: 'Jak szybko odbywa się pogrzeb w Łodzi?',
    answer:
      'Najczęściej pogrzeb odbywa się w ciągu 3–7 dni od śmierci. Termin zależy od dostępności cmentarza, parafii lub kaplicy oraz od tego, czy wybrano kremację.',
  },
  {
    question: 'Czy zakład pogrzebowy może załatwić formalności za rodzinę?',
    answer:
      'Tak. Na podstawie upoważnienia rejestrujemy zgon w USC, ustalamy termin z kancelarią cmentarza i parafią oraz pomagamy złożyć wniosek o zasiłek pogrzebowy.',
  },
  {
    question: 'Czy organizujecie pogrzeby całodobowo?',
    answer:
      'Tak. Odbieramy telefon i przyjeżdżamy 24 godziny na dobę, 7 dni w tygodniu, także w nocy, w weekendy i święta. Biuro: ul. Legionów 48, 90-702 Łódź.',
  },
]

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Pogrzeb Łódź' },
]

const cemeteryLinks: [string, string][] = [
  ['Cmentarz Doły', '/cmentarze-lodz/doly'],
  ['Cmentarz Zarzew', '/cmentarze-lodz/zarzew'],
  ['Cmentarz Szczecińska', '/cmentarze-lodz/komunalny-polnocny'],
  ['Cmentarz Radogoszcz (św. Rocha)', '/cmentarze-lodz/radogoszcz'],
  ['Cmentarz na Mani', '/cmentarze-lodz/mania'],
  ['Cmentarz na Kurczakach', '/cmentarze-lodz/kurczaki'],
  ['Stary Cmentarz (Ogrodowa)', '/cmentarze-lodz/stary'],
]

const relatedLinks: [string, string][] = [
  ['Organizacja pogrzebów Łódź', '/uslugi/organizacja-pogrzebow-lodz'],
  ['Pogrzeb bez zaliczki', '/pogrzeb-bez-zaliczki'],
  ['Krematorium i kremacja Łódź', '/uslugi/krematorium-lodz'],
  ['Ceremonie pogrzebowe Łódź', '/uslugi/ceremonie-pogrzebowe-lodz'],
  ['Trumny Łódź', '/asortyment/trumny-lodz'],
  ['Wieńce pogrzebowe Łódź', '/asortyment/wience-lodz'],
  ['Zasiłek pogrzebowy ZUS', '/poradnik/zasilek-pogrzebowy-zus'],
  ['USC Łódź i akt zgonu', '/urzad-stanu-cywilnego-lodz'],
  ['Co zrobić po śmierci bliskiej osoby', '/poradnik/co-zrobic-po-smierci'],
  ['Nekrologi Łódź', '/nekrologi-lodz'],
]

export default function PogrzebLodzPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${PAGE_PATH}#webpage`,
    url: `${SITE_URL}${PAGE_PATH}`,
    name: 'Pogrzeb w Łodzi – organizacja, koszty i pomoc bez zaliczki',
    description:
      'Jak zorganizować pogrzeb w Łodzi krok po kroku, ile kosztuje pogrzeb w 2026 r., pogrzeb tradycyjny czy kremacja i jak rozliczyć pogrzeb z zasiłku 7000 zł.',
    inLanguage: 'pl-PL',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#funeral-home` },
    dateModified: DATE_MODIFIED,
  }

  return (
    <>
      <FAQSchema faqs={faqData} name="Pogrzeb Łódź FAQ" />
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbController overrides={[{ segment: 'pogrzeb-lodz', label: 'Pogrzeb Łódź' }]} />

      <section className="relative min-h-[40vh] bg-gradient-to-b from-black via-black/95 to-black/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 text-white leading-tight">
              Pogrzeb w Łodzi – organizacja, koszty i pomoc bez zaliczki
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Zakład Pogrzebowy Nekrolog Łódź – Jolanta Kostowska organizuje pogrzeby w Łodzi i okolicach od ponad
              30 lat: tradycyjne i kremacyjne, całodobowo, bez zaliczki. Rodzina nie płaci nic z góry – koszt
              rozliczamy z zasiłku pogrzebowego ZUS lub KRUS (7000 zł od 2026 r.). Poniżej wyjaśniamy krok po kroku,
              jak zorganizować pogrzeb i ile kosztuje.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+48602274661"
                data-phone-location="pogrzeb_lodz_hero"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary/90 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                <span>+48 602 274 661 (24/7)</span>
              </a>
              <Link
                href="/pogrzeb-bez-zaliczki"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 bg-black/50 px-8 py-4 text-lg font-medium text-white transition hover:bg-black/70 w-full sm:w-auto"
              >
                Jak działa pogrzeb bez zaliczki
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-6">Najważniejsze informacje</h2>
            <dl className="grid gap-4 sm:grid-cols-2 text-gray-300">
              {[
                ['Rodzaje pogrzebów', 'tradycyjny (trumna), kremacyjny (urna), katolicki, świecki'],
                ['Płatność', 'bez zaliczki – rozliczenie z zasiłku pogrzebowego'],
                ['Zasiłek pogrzebowy 2026', '7000 zł (ZUS / KRUS, zgony od 1.01.2026)'],
                ['Dostępność', '24/7, także w nocy, weekendy i święta'],
                ['Typowy czas do pogrzebu', '3–7 dni od śmierci'],
                ['Adres biura', 'ul. Legionów 48, 90-702 Łódź'],
              ].map(([term, value]) => (
                <div key={term} className="rounded-lg border border-white/10 bg-black/40 p-4">
                  <dt className="text-sm uppercase tracking-wide text-primary/80">{term}</dt>
                  <dd className="mt-1 text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-14 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-6">
              Jak zorganizować pogrzeb w Łodzi – krok po kroku
            </h2>
            <ol className="space-y-5">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-white">{step.title}</h3>
                    <p className="mt-1 text-gray-300 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-gray-300">
              Więcej o dokumentach: <Link href="/urzad-stanu-cywilnego-lodz" className="text-primary underline">USC Łódź i akt zgonu</Link>
              {' · '}
              <Link href="/formalnosci-pogrzebowe-lodz" className="text-primary underline">formalności pogrzebowe w Łodzi</Link>
              {' · '}
              <Link href="/poradnik/co-zrobic-po-smierci" className="text-primary underline">co zrobić po śmierci bliskiej osoby</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-6">Pogrzeb tradycyjny czy kremacja?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-white">
                    <th className="py-3 pr-4"></th>
                    <th className="py-3 pr-4">Pogrzeb tradycyjny</th>
                    <th className="py-3">Pogrzeb kremacyjny</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white">Pochówek</td>
                    <td className="py-3 pr-4">trumna w grobie ziemnym lub murowanym</td>
                    <td className="py-3">urna w grobie, niszy kolumbaryjnej lub istniejącym grobie</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white">Ceremonia</td>
                    <td className="py-3 pr-4">msza lub ceremonia w kaplicy z trumną</td>
                    <td className="py-3">przed kremacją z trumną albo po kremacji z urną</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white">Koszt</td>
                    <td className="py-3 pr-4">zwykle wyższy (trumna, większe miejsce)</td>
                    <td className="py-3">często niższy, mniejsze miejsce pochówku</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white">Więcej</td>
                    <td className="py-3 pr-4">
                      <Link href="/uslugi/ceremonie-pogrzebowe-lodz" className="text-primary underline">ceremonie pogrzebowe</Link>
                    </td>
                    <td className="py-3">
                      <Link href="/uslugi/krematorium-lodz" className="text-primary underline">kremacja w Łodzi</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-4">Ile kosztuje pogrzeb w Łodzi w 2026 roku?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cena pogrzebu zależy od trumny lub urny, ceremonii, cmentarza i dodatków (kwiaty, oprawa muzyczna,
              nekrolog). Dla orientacji – średnie ceny rynkowe w Łodzi (brutto):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-white">
                    <th className="py-3 pr-4">Pozycja</th>
                    <th className="py-3">Średnia cena w Łodzi</th>
                  </tr>
                </thead>
                <tbody>
                  {marketPrices.map(([item, price]) => (
                    <tr key={item} className="border-b border-white/10">
                      <td className="py-3 pr-4">{item}</td>
                      <td className="py-3 text-white">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Źródło: <a href="https://kb.pl/cenniki/miejskie/zaklad-pogrzebowy/lodz/" rel="nofollow noopener" target="_blank" className="underline">kb.pl – cennik zakładów pogrzebowych w Łodzi</a>, publikacja 29.04.2026. Ceny szacunkowe, nie stanowią oferty.
            </p>
            <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
              <h3 className="text-xl font-medium text-white mb-2">Zasiłek 7000 zł i pogrzeb bez zaliczki</h3>
              <p className="text-gray-300 leading-relaxed">
                Od 1 stycznia 2026 r. zasiłek pogrzebowy z ZUS i KRUS wynosi 7000 zł (dla zgonów od tej daty).
                Organizujemy pogrzeb bez kosztów z góry i rozliczamy się bezpośrednio z zasiłku. Wycenę przedstawiamy
                przed podpisaniem umowy, więc rodzina od początku wie, czy pogrzeb zmieści się w kwocie zasiłku.
              </p>
              <p className="mt-3">
                <Link href="/poradnik/zasilek-pogrzebowy-zus" className="text-primary underline">Zasiłek pogrzebowy – komu przysługuje i jak złożyć wniosek</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-6">Pogrzeby na cmentarzach w Łodzi</h2>
            <p className="text-gray-300 mb-6">
              Organizujemy pogrzeby na wszystkich łódzkich cmentarzach komunalnych i parafialnych. Adresy kancelarii,
              godziny otwarcia i telefony:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {cemeteryLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg border border-white/10 bg-black/40 p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-gray-300">
              Klepsydrę na pogrzeb możesz przygotować samodzielnie w{' '}
              <a href={`${KLEPSYDRA_APP}/generator`} className="text-primary underline">darmowym generatorze klepsydry online</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-6">Najczęstsze pytania o pogrzeb w Łodzi</h2>
            <div className="space-y-6">
              {faqData.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-medium text-white mb-6">Zobacz także</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg border border-white/10 bg-black/40 p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-gray-300 mb-4">Potrzebujesz pomocy teraz? Zadzwoń – odbieramy całą dobę.</p>
              <a
                href="tel:+48602274661"
                data-phone-location="pogrzeb_lodz_footer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary/90"
              >
                <Phone className="h-5 w-5" />
                <span>+48 602 274 661</span>
              </a>
              <p className="mt-6 text-sm text-gray-500">Aktualizacja: 7 listopada 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
