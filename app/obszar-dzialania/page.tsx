import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import FAQSchema from '@/components/structured-data/FAQSchema'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

const PAGE_PATH = '/obszar-dzialania'

export const metadata: Metadata = {
  title: { absolute: 'Pogrzeby w okolicach Łodzi – Zgierz, Pabianice, Aleksandrów | Nekrolog Łódź' },
  description:
    'Organizujemy pogrzeby i przewóz zmarłych 24/7 w Łodzi i okolicach: Zgierz, Pabianice, Aleksandrów Łódzki, Konstantynów Łódzki, Zduńska Wola, Łowicz, Sieradz. Bez zaliczki.',
  keywords: [
    'zakład pogrzebowy zgierz',
    'zakład pogrzebowy pabianice',
    'zakład pogrzebowy aleksandrów łódzki',
    'zakład pogrzebowy konstantynów łódzki',
    'pogrzeb pabianice',
    'pogrzeb zgierz',
  ],
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: 'Pogrzeby w okolicach Łodzi – obszar działania Nekrolog Łódź',
    description: 'Całodobowy przewóz zmarłych i organizacja pogrzebów w miejscowościach wokół Łodzi, bez zaliczki.',
    url: `${SITE_URL}${PAGE_PATH}`,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

// Approximate road distance from Łódź city centre; used only to set expectations.
const towns: { name: string; distance: string }[] = [
  { name: 'Zgierz', distance: 'ok. 12 km' },
  { name: 'Konstantynów Łódzki', distance: 'ok. 12 km' },
  { name: 'Aleksandrów Łódzki', distance: 'ok. 15 km' },
  { name: 'Pabianice', distance: 'ok. 17 km' },
  { name: 'Zduńska Wola', distance: 'ok. 45 km' },
  { name: 'Łowicz', distance: 'ok. 50 km' },
  { name: 'Sieradz', distance: 'ok. 60 km' },
]

const faqData = [
  {
    question: 'Czy organizujecie pogrzeby poza Łodzią?',
    answer:
      'Tak. Z biura przy ul. Legionów 48 w Łodzi obsługujemy także rodziny z okolicznych miejscowości – m.in. Zgierza, Pabianic, Aleksandrowa Łódzkiego, Konstantynowa Łódzkiego, Zduńskiej Woli, Łowicza i Sieradza. Pogrzeb może odbyć się na cmentarzu w miejscu zamieszkania albo w Łodzi.',
  },
  {
    question: 'Czy przyjedziecie w nocy, jeśli zgon nastąpił poza Łodzią?',
    answer:
      'Tak. Przewóz zmarłych realizujemy całodobowo, także w nocy, w weekendy i święta. Czas dojazdu zależy od odległości – podajemy go przy telefonie.',
  },
  {
    question: 'Czy pogrzeb poza Łodzią też można zorganizować bez zaliczki?',
    answer:
      'Tak. Zasady są takie same jak w Łodzi: rodzina nie płaci z góry, a koszt rozliczamy z zasiłku pogrzebowego ZUS lub KRUS (7000 zł dla zgonów od 1 stycznia 2026 r.).',
  },
  {
    question: 'Gdzie załatwia się akt zgonu, jeśli śmierć nastąpiła poza Łodzią?',
    answer:
      'Zgon rejestruje się w urzędzie stanu cywilnego właściwym dla miejsca śmierci. Na podstawie upoważnienia możemy załatwić to za rodzinę.',
  },
]

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Obszar działania' },
]

export default function ObszarDzialaniaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${PAGE_PATH}#webpage`,
    url: `${SITE_URL}${PAGE_PATH}`,
    name: 'Pogrzeby w okolicach Łodzi – obszar działania',
    inLanguage: 'pl-PL',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#funeral-home` },
    dateModified: '2026-11-07',
  }

  return (
    <>
      <FAQSchema faqs={faqData} name="Obszar działania FAQ" />
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-gradient-to-b from-black via-black/95 to-black/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white leading-tight">
              Pogrzeby w Łodzi i okolicach
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Zakład Pogrzebowy Nekrolog Łódź – Jolanta Kostowska ma biuro przy ul. Legionów 48 w Łodzi. Pomagamy
              też rodzinom z miejscowości wokół Łodzi: przyjeżdżamy całodobowo, przewozimy zmarłego, załatwiamy
              formalności i organizujemy pogrzeb na wybranym cmentarzu – bez zaliczki.
            </p>
            <a
              href="tel:+48602274661"
              data-phone-location="obszar_hero"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black"
            >
              <Phone className="h-5 w-5" aria-hidden />
              <span>+48 602 274 661 (24/7)</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-300">
            <h2 className="text-3xl font-playfair font-medium text-white mb-6">Miejscowości, w których pomagamy</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-white">
                    <th className="py-3 pr-4">Miejscowość</th>
                    <th className="py-3">Odległość od Łodzi</th>
                  </tr>
                </thead>
                <tbody>
                  {towns.map((t) => (
                    <tr key={t.name} className="border-b border-white/10">
                      <td className="py-3 pr-4 text-white">{t.name}</td>
                      <td className="py-3">{t.distance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Odległości orientacyjne, liczone drogą od centrum Łodzi. Nie widzisz swojej miejscowości? Zadzwoń –
              powiemy od razu, czy i jak szybko możemy pomóc.
            </p>

            <h2 className="text-3xl font-playfair font-medium text-white mt-12 mb-4">Co robimy dla rodzin spoza Łodzi</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Całodobowy przewóz zmarłego z domu, szpitala, hospicjum lub domu opieki do chłodni.</li>
              <li>Rejestracja zgonu w USC właściwym dla miejsca śmierci – na podstawie upoważnienia.</li>
              <li>Pogrzeb na cmentarzu w miejscu zamieszkania albo na jednym z cmentarzy w Łodzi.</li>
              <li>Pogrzeb tradycyjny lub kremacyjny, ceremonia katolicka lub świecka.</li>
              <li>Rozliczenie z zasiłku pogrzebowego – bez płatności z góry.</li>
            </ul>
            <p className="mt-6">
              Szczegóły:{' '}
              <Link href="/pogrzeb-lodz" className="text-primary underline">jak zorganizować pogrzeb krok po kroku</Link>{' · '}
              <Link href="/uslugi/transport-zmarlych-lodz" className="text-primary underline">przewóz zwłok 24h</Link>{' · '}
              <Link href="/uslugi/krematorium-lodz" className="text-primary underline">kremacja</Link>{' · '}
              <Link href="/pogrzeb-bez-zaliczki" className="text-primary underline">pogrzeb bez zaliczki</Link>.
            </p>

            <h2 className="text-3xl font-playfair font-medium text-white mt-12 mb-6">Najczęstsze pytania</h2>
            <div className="space-y-6">
              {faqData.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
