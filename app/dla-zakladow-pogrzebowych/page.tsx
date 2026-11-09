import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

const PAGE_PATH = '/dla-zakladow-pogrzebowych'

export const metadata: Metadata = {
  title: { absolute: 'Współpraca dla zakładów pogrzebowych – transport zmarłych do Polski | Nekrolog Łódź' },
  description:
    'Partner w Polsce dla zakładów pogrzebowych i ubezpieczycieli: odbiór zmarłego, przewóz własnym busem, formalności i przekazanie lub pogrzeb w Łodzi. Telefon 24/7.',
  keywords: [
    'transport zmarłych dla zakładów pogrzebowych',
    'współpraca zakład pogrzebowy transport',
    'partner repatriacja zwłok polska',
    'podwykonawca przewóz zwłok',
  ],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
    languages: { pl: `${SITE_URL}${PAGE_PATH}`, en: `${SITE_URL}/repatriation-to-poland` },
  },
  openGraph: {
    title: 'Współpraca dla zakładów pogrzebowych i ubezpieczycieli',
    description: 'Odbiór, przewóz i formalności po stronie polskiej. Telefon 24/7.',
    url: `${SITE_URL}${PAGE_PATH}`,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const scope = [
  'Odbiór zmarłego lub urny z lotniska, granicy, prosektorium albo zagranicznego domu pogrzebowego',
  'Przewóz własnym specjalistycznym busem w Polsce i w Europie',
  'Koordynacja transportu drogowego i lotniczego',
  'Wniosek o zezwolenie starosty lub prezydenta miasta na podstawie upoważnienia',
  'Przekazanie zmarłego do wskazanego zakładu w Polsce albo pełna organizacja pogrzebu w Łodzi i okolicach',
]

const partners = [
  ['Zakłady pogrzebowe w Polsce', 'bez własnego transportu międzynarodowego lub gdy potrzebny jest dodatkowy pojazd.'],
  ['Zakłady pogrzebowe za granicą', 'które potrzebują partnera odbierającego zmarłego i prowadzącego sprawę w Polsce.'],
  ['Ubezpieczyciele i firmy assistance', 'organizujące powrót zmarłego do Polski w ramach polisy.'],
  ['Szpitale, domy opieki i instytucje', 'które potrzebują kontaktu w Polsce dla rodziny zmarłego.'],
]

const brief = [
  'Imię i nazwisko zmarłego, data i miejsce zgonu',
  'Miejsce odbioru oraz docelowe miejsce w Polsce',
  'Trumna czy urna; transport drogowy czy lotniczy',
  'Dokumenty, które już są gotowe',
  'Kto zleca i kto pokrywa koszt (rodzina, zakład, ubezpieczyciel)',
]

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Dla zakładów pogrzebowych' },
]

export default function DlaZakladowPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <section className="py-16 bg-gradient-to-b from-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white text-center">
              Współpraca dla zakładów pogrzebowych i ubezpieczycieli
            </h1>
            <p className="text-lg md:text-xl text-gray-200 text-center mb-8">
              Potrzebujesz partnera w Polsce? {BUSINESS_INFO.legalName} działa w Łodzi od {BUSINESS_INFO.foundedYear} r.
              Przejmujemy odbiór, przewóz i formalności po stronie polskiej – całość albo wybrany etap.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <a href="tel:+48602270050" data-phone-location="b2b_hero" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black">
                <Phone className="h-5 w-5" aria-hidden />
                <span>{BUSINESS_INFO.secondaryPhone} (24/7)</span>
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}?subject=Wsp%C3%B3%C5%82praca%20-%20transport%20zmar%C5%82ego`} data-cta-location="b2b_hero" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 px-8 py-4 text-lg text-white">
                <Mail className="h-5 w-5" aria-hidden />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            <h2 className="text-3xl font-playfair font-medium text-white mb-4">Zakres współpracy</h2>
            <ul className="list-disc pl-6 space-y-2 mb-12">
              {scope.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2 className="text-3xl font-playfair font-medium text-white mb-4">Z kim współpracujemy</h2>
            <dl className="grid gap-4 sm:grid-cols-2 mb-12">
              {partners.map(([term, value]) => (
                <div key={term} className="rounded-lg border border-white/10 bg-black/40 p-4">
                  <dt className="text-white font-medium">{term}</dt>
                  <dd className="mt-1 text-sm">{value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="text-3xl font-playfair font-medium text-white mb-4">Co podać w zgłoszeniu</h2>
            <p className="mb-3">Te informacje pozwalają od razu przygotować wycenę i plan działania:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-12">
              {brief.map((item) => <li key={item}>{item}</li>)}
            </ol>

            <div className="rounded-lg border border-white/10 bg-black/40 p-6">
              <h2 className="text-2xl font-playfair font-medium text-white mb-3">Dane firmy</h2>
              <p>{BUSINESS_INFO.legalName}</p>
              <p>ul. {BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.addressLocality}</p>
              <p>NIP: {BUSINESS_INFO.nip}</p>
              <p className="mt-4 text-sm">
                <Link href="/uslugi/sprowadzenie-zwlok-z-zagranicy" className="text-primary underline">Transport międzynarodowy</Link>
                {' · '}
                <Link href="/uslugi/transport-zmarlych-lodz" className="text-primary underline">Przewóz w Łodzi 24/7</Link>
                {' · '}
                <Link href="/repatriation-to-poland" className="text-primary underline" hrefLang="en">English</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
