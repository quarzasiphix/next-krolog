import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

const PAGE_PATH = '/repatriation-to-poland'

export const metadata: Metadata = {
  title: { absolute: 'Repatriation to Poland – receiving funeral director in Łódź | Nekrolog Łódź' },
  description:
    'Funeral directors and insurers: a family-run Polish partner for repatriation to Poland. Collection, own vehicle, Polish permits, handover or funeral. 24/7 phone.',
  keywords: ['repatriation to poland', 'funeral director poland', 'repatriation of remains to poland', 'receiving funeral director poland'],
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
    languages: { en: `${SITE_URL}${PAGE_PATH}`, pl: `${SITE_URL}/dla-zakladow-pogrzebowych` },
  },
  openGraph: {
    title: 'Repatriation to Poland – receiving funeral director',
    description: 'Collection, Polish paperwork and handover or funeral in Poland. 24/7 phone.',
    url: `${SITE_URL}${PAGE_PATH}`,
    type: 'website',
    locale: 'en_GB',
  },
  robots: { index: true, follow: true },
}

const scope = [
  'Collection of the deceased or urn from the airport, border, mortuary or a funeral home abroad',
  'Road transport in our own specialist vehicle, in Poland and in Europe',
  'Coordination of road and air transport',
  'Application for the Polish burial permit (starosta or city mayor) under authorisation from the family',
  'Handover to a named funeral home in Poland, or a complete funeral in the Łódź area',
]

const procedure = [
  'The starosta or city mayor responsible for the place of burial issues a permit. The family or an authorised funeral home can apply.',
  'The Polish consul responsible for the place of death issues a certificate allowing the body or ashes into Poland, based on that permit.',
  'The consul’s requirements differ by country. Common items are the death certificate, a statement that the death was not caused by an infectious disease, and the funeral director’s statement on the sealed coffin or urn.',
]

const brief = [
  'Name of the deceased, date and place of death',
  'Collection point and destination in Poland',
  'Coffin or urn; road or air transport',
  'Documents already available',
  'Who is instructing and who is paying (family, funeral home, insurer)',
]

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Repatriation to Poland' },
]

export default function RepatriationToPolandPage() {
  return (
    <div lang="en">
      <BreadcrumbSchema items={breadcrumbs} />
      <section className="py-16 bg-gradient-to-b from-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white text-center">
              Repatriation to Poland: your receiving funeral director
            </h1>
            <p className="text-lg md:text-xl text-gray-200 text-center mb-8">
              For funeral directors and insurers who need a partner in Poland. We are a family-run funeral home in Łódź,
              established in {BUSINESS_INFO.foundedYear}. We can take on the whole Polish side, or a single stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <a href="tel:+48602270050" data-phone-location="b2b_en_hero" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black">
                <Phone className="h-5 w-5" aria-hidden />
                <span>{BUSINESS_INFO.secondaryPhone} (24/7)</span>
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}?subject=Repatriation%20to%20Poland`} data-cta-location="b2b_en_hero" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 px-8 py-4 text-lg text-white">
                <Mail className="h-5 w-5" aria-hidden />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            <h2 className="text-3xl font-playfair font-medium text-white mb-4">What we handle</h2>
            <ul className="list-disc pl-6 space-y-2 mb-12">
              {scope.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2 className="text-3xl font-playfair font-medium text-white mb-4">Polish requirements in brief</h2>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              {procedure.map((item) => <li key={item}>{item}</li>)}
            </ol>
            <p className="text-sm text-gray-500 mb-12">
              General information. We confirm current requirements with the responsible Polish consulate for each case.
            </p>

            <h2 className="text-3xl font-playfair font-medium text-white mb-4">What to include in your enquiry</h2>
            <ol className="list-decimal pl-6 space-y-2 mb-12">
              {brief.map((item) => <li key={item}>{item}</li>)}
            </ol>

            <div className="rounded-lg border border-white/10 bg-black/40 p-6">
              <h2 className="text-2xl font-playfair font-medium text-white mb-3">Company details</h2>
              <p>{BUSINESS_INFO.legalName}</p>
              <p>{BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.addressLocality}, Poland</p>
              <p>Tax ID (NIP): {BUSINESS_INFO.nip}</p>
              <p className="mt-4 text-sm">
                <Link href="/dla-zakladow-pogrzebowych" className="text-primary underline" hrefLang="pl">Polska wersja</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
