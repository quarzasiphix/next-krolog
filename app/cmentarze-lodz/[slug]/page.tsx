import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Clock, Phone, CheckCircle2, Building2, ArrowLeft, Navigation, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL, BUSINESS_INFO } from '@/lib/constants'
import { cemeteries, cemeterySlugs, getCemetery, type Cemetery } from '@/lib/cemeteries'
import FAQSchema from '@/components/structured-data/FAQSchema'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

export function generateStaticParams() {
  return cemeterySlugs.map((slug) => ({ slug }))
}

export const dynamic = 'force-static'
export const dynamicParams = false

const PHONE = BUSINESS_INFO.phone
const PHONE_HREF = `tel:${PHONE.replace(/\s+/g, '')}`

function pageUrl(slug: string) {
  return `${SITE_URL}/cmentarze-lodz/${slug}`
}

function officeHoursSummary(cemetery: Cemetery) {
  const weekday = cemetery.office.hours.find((row) => /piątek/i.test(row.days))
  return weekday ? weekday.hours : cemetery.office.hours[0]?.hours || 'w dni robocze'
}

/** Question-shaped FAQ built from verified data — matches how people ask search engines and AI assistants. */
function buildFaq(cemetery: Cemetery) {
  const faqs: { question: string; answer: string }[] = [
    {
      question: `Jakie są godziny otwarcia kancelarii ${cemetery.name}?`,
      answer: `Kancelaria (${cemetery.office.name}) przy ${cemetery.office.address} jest czynna: ${cemetery.office.hours
        .map((row) => `${row.days} – ${row.hours}`)
        .join('; ')}.${cemetery.office.phone ? ` Telefon: ${cemetery.office.phone}.` : ''}${
        cemetery.office.phoneNote ? ` ${cemetery.office.phoneNote}.` : ''
      }`,
    },
    {
      question: `W jakich godzinach otwarty jest ${cemetery.name}?`,
      answer: `Brama ${cemetery.name} jest otwarta zwykle w godzinach: ${cemetery.gateHours.summer} oraz ${cemetery.gateHours.winter}. W okolicy Wszystkich Świętych godziny bywają wydłużone.`,
    },
    {
      question: `Gdzie znajduje się ${cemetery.name}?`,
      answer: `${cemetery.name} znajduje się przy ${cemetery.address}, w dzielnicy ${cemetery.district} w Łodzi.${
        cemetery.coordinates
          ? ` Współrzędne: ${cemetery.coordinates.lat}, ${cemetery.coordinates.lng}.`
          : ''
      }`,
    },
    {
      question: `Kto zarządza ${cemetery.name}?`,
      answer: `${cemetery.name} prowadzi ${cemetery.manager}.`,
    },
  ]

  if (cemetery.foundedYear) {
    faqs.push({
      question: `W którym roku powstał ${cemetery.name}?`,
      answer: `${cemetery.foundedNote || `${cemetery.name} powstał w ${cemetery.foundedYear} roku.`}`,
    })
  }

  faqs.push(
    {
      question: `Czy organizujecie pogrzeby na ${cemetery.name}?`,
      answer: `Tak. Zakład Pogrzebowy Nekrolog Łódź – Jolanta Kostowska organizuje kompleksowe pogrzeby na ${cemetery.name}: formalności w USC i kancelarii cmentarza, transport zmarłego, ceremonię, trumnę lub urnę oraz oprawę. Pogrzeb organizujemy bez kosztów z góry – rozliczenie następuje z zasiłku pogrzebowego ZUS lub KRUS. Telefon całodobowy: ${PHONE}.`,
    },
    {
      question: `Jak załatwić formalności grobowe na ${cemetery.name}?`,
      answer: `Sprawy miejsca pochówku, opłat i rezerwacji terminu prowadzi ${cemetery.office.name}, ${cemetery.office.address}${
        cemetery.office.phone ? `, tel. ${cemetery.office.phone}` : ''
      }. Pomagamy rodzinom w kontakcie z kancelarią i w skompletowaniu dokumentów.`,
    },
  )

  return faqs
}

function buildCemeterySchema(cemetery: Cemetery) {
  const url = pageUrl(cemetery.slug)
  const weekdayOfficeHours =
    cemetery.office.schemaOpens && cemetery.office.schemaCloses
      ? [
          {
            '@type': 'OpeningHoursSpecification',
            name: 'Kancelaria cmentarza',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: cemetery.office.schemaOpens,
            closes: cemetery.office.schemaCloses,
          },
        ]
      : undefined

  const additionalProperty = [
    { '@type': 'PropertyValue', name: 'Rodzaj cmentarza', value: cemetery.typeLabel },
    { '@type': 'PropertyValue', name: 'Zarządca', value: cemetery.manager },
    { '@type': 'PropertyValue', name: 'Godziny otwarcia bramy (sezon letni)', value: cemetery.gateHours.summer },
    { '@type': 'PropertyValue', name: 'Godziny otwarcia bramy (sezon zimowy)', value: cemetery.gateHours.winter },
    cemetery.areaHa
      ? { '@type': 'PropertyValue', name: 'Powierzchnia', value: `${cemetery.areaHa} ha` }
      : null,
    cemetery.foundedYear
      ? { '@type': 'PropertyValue', name: 'Rok założenia', value: String(cemetery.foundedYear) }
      : null,
    { '@type': 'PropertyValue', name: 'Wyznania i części', value: cemetery.denominations.join(', ') },
  ].filter(Boolean)

  const cemeterySchema = {
    '@context': 'https://schema.org',
    '@type': 'Cemetery',
    '@id': `${url}#cemetery`,
    name: cemetery.name,
    alternateName: cemetery.alternateNames,
    description: cemetery.summary,
    url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: cemetery.address,
      addressLocality: 'Łódź',
      addressRegion: 'łódzkie',
      postalCode: (cemetery.address.match(/\d{2}-\d{3}/) || [''])[0] || undefined,
      addressCountry: 'PL',
    },
    geo: cemetery.coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: cemetery.coordinates.lat,
          longitude: cemetery.coordinates.lng,
        }
      : undefined,
    telephone: cemetery.office.phone,
    foundingDate: cemetery.foundedYear ? String(cemetery.foundedYear) : undefined,
    sameAs: cemetery.sameAs.length ? cemetery.sameAs : undefined,
    isAccessibleForFree: true,
    openingHoursSpecification: weekdayOfficeHours,
    additionalProperty,
    subjectOf: {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: `${cemetery.name} – godziny otwarcia, adres, kontakt`,
      dateModified: cemetery.lastVerified,
      inLanguage: 'pl-PL',
    },
  }

  const funeralServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#pogrzeb`,
    serviceType: `Organizacja pogrzebu na ${cemetery.name}`,
    name: `Organizacja pogrzebu na ${cemetery.name} – bez zaliczki`,
    description: `Kompleksowa organizacja pogrzebu na ${cemetery.name} w Łodzi: formalności, transport zmarłego, ceremonia, trumna lub urna. Rozliczenie z zasiłku pogrzebowego ZUS/KRUS, bez kosztów z góry.`,
    areaServed: { '@type': 'Place', name: cemetery.name, address: cemetery.address },
    provider: {
      '@type': 'FuneralHome',
      '@id': `${SITE_URL}/#funeral-home`,
      name: BUSINESS_INFO.legalName,
      telephone: PHONE,
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PLN',
      description: 'Indywidualna wycena. Możliwa organizacja bez kosztów z góry – rozliczenie z zasiłku pogrzebowego ZUS/KRUS.',
      availability: 'https://schema.org/InStock',
    },
  }

  return [cemeterySchema, funeralServiceSchema]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cemetery = getCemetery(slug)
  if (!cemetery) {
    return { title: 'Cmentarz nie znaleziony', robots: { index: false } }
  }

  const officeHours = officeHoursSummary(cemetery)
  const description = `${cemetery.name} – kancelaria czynna ${officeHours} (${cemetery.office.address})${
    cemetery.office.phone ? `, tel. ${cemetery.office.phone}` : ''
  }. Adres: ${cemetery.address}. Organizujemy pogrzeby na tym cmentarzu bez kosztów z góry – tel. ${PHONE}.`

  return {
    title: {
      absolute: `${cemetery.name} – godziny otwarcia kancelarii, adres, kontakt`,
    },
    description,
    keywords: [
      cemetery.name.toLowerCase(),
      ...cemetery.alternateNames.map((n) => n.toLowerCase()),
      `${cemetery.slug} godziny otwarcia`,
      'kancelaria cmentarza łódź',
      'organizacja pogrzebu łódź',
    ],
    alternates: { canonical: pageUrl(cemetery.slug) },
    openGraph: {
      title: `${cemetery.name} – godziny otwarcia, adres, kontakt`,
      description: cemetery.summary,
      url: pageUrl(cemetery.slug),
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

export default async function CemeteryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cemetery = getCemetery(slug)
  if (!cemetery) notFound()

  const faqData = buildFaq(cemetery)
  const schema = buildCemeterySchema(cemetery)
  const breadcrumbs = [
    { name: 'Strona Główna', url: '/' },
    { name: 'Cmentarze w Łodzi', url: '/cmentarze-lodz' },
    { name: cemetery.name },
  ]
  const related = cemetery.relatedSlugs
    .map((slug) => cemeteries[slug])
    .filter((c): c is Cemetery => Boolean(c))

  const lastVerifiedPl = new Date(cemetery.lastVerified).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="bg-black text-white min-h-screen">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqData} name={`Najczęstsze pytania – ${cemetery.name}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="relative pt-20 pb-10 bg-gradient-to-b from-black via-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/cmentarze-lodz"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Wszystkie cmentarze w Łodzi
            </Link>

            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-4 text-white">
              {cemetery.name}
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">{cemetery.summary}</p>

            <div className="flex flex-col gap-3 mb-8 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>{cemetery.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>
                  Kancelaria: {officeHoursSummary(cemetery)}
                  {cemetery.office.phone && (
                    <>
                      {' · '}
                      <a href={`tel:${cemetery.office.phone.replace(/\s+/g, '')}`} className="text-primary hover:underline">
                        {cemetery.office.phone}
                      </a>
                    </>
                  )}
                </span>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <p className="text-lg text-white mb-2">
                <strong>Organizujemy pogrzeby na {cemetery.name}</strong>
              </p>
              <p className="text-gray-300 mb-4">
                Bez kosztów z góry – rozliczenie bezpośrednio z zasiłkiem pogrzebowym ZUS/KRUS.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
              >
                <Phone className="w-5 h-5" />
                Zadzwoń całodobowo: {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts — primary extraction target for search engines and AI assistants */}
      <section className="py-10 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/30 border border-white/10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-medium text-white mb-5">
                  Najważniejsze informacje – {cemetery.name}
                </h2>
                <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  <div>
                    <dt className="text-gray-400 mb-1">Pełna nazwa</dt>
                    <dd className="text-white">{cemetery.officialName}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 mb-1">Inne nazwy</dt>
                    <dd className="text-white">{cemetery.alternateNames.join(', ')}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 mb-1">Adres</dt>
                    <dd className="text-white">{cemetery.address}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 mb-1">Dzielnica</dt>
                    <dd className="text-white">{cemetery.district}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 mb-1">Rodzaj</dt>
                    <dd className="text-white">{cemetery.typeLabel}</dd>
                  </div>
                  {cemetery.foundedYear && (
                    <div>
                      <dt className="text-gray-400 mb-1">Rok założenia</dt>
                      <dd className="text-white">{cemetery.foundedYear}</dd>
                    </div>
                  )}
                  {cemetery.areaHa && (
                    <div>
                      <dt className="text-gray-400 mb-1">Powierzchnia</dt>
                      <dd className="text-white">ok. {String(cemetery.areaHa).replace('.', ',')} ha</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-gray-400 mb-1">Wyznania / części</dt>
                    <dd className="text-white">{cemetery.denominations.join(', ')}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 mb-1">Zarządca</dt>
                    <dd className="text-white">{cemetery.manager}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400 mb-1">Godziny kancelarii</dt>
                    <dd className="text-white">
                      {cemetery.office.hours.map((row) => `${row.days}: ${row.hours}`).join(' · ')}
                    </dd>
                  </div>
                  {cemetery.office.phone && (
                    <div>
                      <dt className="text-gray-400 mb-1">Telefon kancelarii</dt>
                      <dd className="text-white">{cemetery.office.phone}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-gray-400 mb-1">Godziny otwarcia bramy</dt>
                    <dd className="text-white">
                      {cemetery.gateHours.summer}; {cemetery.gateHours.winter}
                    </dd>
                  </div>
                  {cemetery.coordinates && (
                    <div>
                      <dt className="text-gray-400 mb-1">Współrzędne</dt>
                      <dd className="text-white">
                        {cemetery.coordinates.lat}, {cemetery.coordinates.lng}
                        {cemetery.coordinates.approximate ? ' (przybliżone)' : ''}
                      </dd>
                    </div>
                  )}
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office hours */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-medium text-white mb-4">
              Godziny otwarcia kancelarii {cemetery.name}
            </h2>
            <p className="text-gray-300 mb-4">
              Sprawy miejsca pochówku, opłat za grób i rezerwacji terminu ceremonii prowadzi{' '}
              <strong className="text-white">{cemetery.office.name}</strong> przy {cemetery.office.address}.
            </p>
            <Card className="bg-black/30 border border-white/10 mb-4">
              <CardContent className="p-6">
                <table className="w-full text-left text-gray-300">
                  <tbody>
                    {cemetery.office.hours.map((row) => (
                      <tr key={row.days} className="border-b border-white/5 last:border-0">
                        <th scope="row" className="py-2 pr-4 font-medium text-white align-top">
                          {row.days}
                        </th>
                        <td className="py-2">{row.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {cemetery.office.phone && (
                  <p className="mt-4 text-gray-300">
                    Telefon:{' '}
                    <a href={`tel:${cemetery.office.phone.replace(/\s+/g, '')}`} className="text-primary hover:underline">
                      {cemetery.office.phone}
                    </a>
                    {cemetery.office.phoneNote ? ` — ${cemetery.office.phoneNote}` : ''}
                  </p>
                )}
              </CardContent>
            </Card>

            {cemetery.secondaryOffice && (
              <Card className="bg-black/30 border border-white/10 mb-4">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-white mb-3">{cemetery.secondaryOffice.name}</h3>
                  <p className="text-gray-300 mb-2">{cemetery.secondaryOffice.address}</p>
                  <table className="w-full text-left text-gray-300">
                    <tbody>
                      {cemetery.secondaryOffice.hours.map((row) => (
                        <tr key={row.days} className="border-b border-white/5 last:border-0">
                          <th scope="row" className="py-2 pr-4 font-medium text-white align-top">
                            {row.days}
                          </th>
                          <td className="py-2">{row.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {cemetery.secondaryOffice.phone && (
                    <p className="mt-4 text-gray-300">
                      Telefon:{' '}
                      <a
                        href={`tel:${cemetery.secondaryOffice.phone.replace(/\s+/g, '')}`}
                        className="text-primary hover:underline"
                      >
                        {cemetery.secondaryOffice.phone}
                      </a>
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            <p className="text-gray-400 text-sm">
              Godziny otwarcia bramy cmentarza (wejście na teren): {cemetery.gateHours.summer};{' '}
              {cemetery.gateHours.winter}. W okresie Wszystkich Świętych godziny są zwykle wydłużone, a wokół
              cmentarza obowiązuje zmieniona organizacja ruchu.
            </p>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-10 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-medium text-white mb-4">
              Jak dojechać na {cemetery.name}
            </h2>
            <Card className="bg-black/30 border border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-primary" />
                  Komunikacja miejska
                </h3>
                <ul className="space-y-2 mb-6">
                  {cemetery.transport.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-medium text-white mb-2">Parking</h3>
                <p className="text-gray-300">{cemetery.parking}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      {cemetery.history && (
        <section className="py-10 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                Historia {cemetery.name}
              </h2>
              <p className="text-gray-300 leading-relaxed">{cemetery.history}</p>
            </div>
          </div>
        </section>
      )}

      {/* Sections & denominations */}
      <section className="py-10 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-medium text-white mb-4">
              Sekcje i wyznania – {cemetery.name}
            </h2>
            <Card className="bg-black/30 border border-white/10">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-3">
                  {cemetery.sections.map((section) => (
                    <div key={section} className="flex items-start gap-2">
                      <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{section}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notable burials */}
      {cemetery.notableBurials && cemetery.notableBurials.length > 0 && (
        <section className="py-10 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                Osoby i miejsca pamięci na {cemetery.name}
              </h2>
              <ul className="space-y-3">
                {cemetery.notableBurials.map((person) => (
                  <li key={person.name} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-white">{person.name}</strong> – {person.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Our service */}
      <section className="py-12 bg-gradient-to-b from-black/90 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-4">
                  Organizacja pogrzebu na {cemetery.name}
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Zakład Pogrzebowy Nekrolog Łódź – Jolanta Kostowska organizuje pogrzeby na {cemetery.name} oraz na
                  wszystkich pozostałych cmentarzach w Łodzi. Przejmujemy formalności w Urzędzie Stanu Cywilnego i w
                  kancelarii cmentarza, zapewniamy transport zmarłego, trumnę lub urnę, ceremonię oraz oprawę
                  florystyczną i muzyczną.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Pogrzeb organizujemy <strong className="text-white">bez kosztów z góry</strong> – rozliczenie
                  następuje bezpośrednio z zasiłku pogrzebowego ZUS lub KRUS, więc rodzina nie musi mieć środków na
                  start. Działamy całą dobę.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                  >
                    <Phone className="w-5 h-5" />
                    {PHONE}
                  </a>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 border border-primary/30 bg-black/50 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-black/70 transition"
                  >
                    Formularz kontaktowy
                  </Link>
                </div>
                <p className="text-sm text-gray-400 mt-6">
                  {BUSINESS_INFO.legalName} • {BUSINESS_INFO.address.streetAddress},{' '}
                  {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.addressLocality} • NIP:{' '}
                  {BUSINESS_INFO.nip}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-6">
              Najczęstsze pytania o {cemetery.name}
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
          </div>
        </div>
      </section>

      {/* Related cemeteries */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-medium text-white mb-6">Inne cmentarze w Łodzi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((c) => (
                <Link key={c.slug} href={`/cmentarze-lodz/${c.slug}`} className="block">
                  <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium text-white mb-1">{c.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {c.address} • kancelaria {officeHoursSummary(c)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
              <Link href="/cmentarze-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-1">Wszystkie cmentarze w Łodzi</h3>
                    <p className="text-gray-400 text-sm">Adresy, godziny otwarcia i kontakt do kancelarii</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sources & freshness */}
      <section className="py-10 bg-black/95 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-sm text-gray-400">
            <h2 className="text-lg font-medium text-white mb-3">Źródła i aktualizacja</h2>
            <p className="mb-3">
              Informacje o {cemetery.name} zweryfikowano {lastVerifiedPl} na podstawie źródeł publicznych. Godziny
              pracy kancelarii mogą się zmieniać – przed wizytą warto potwierdzić je telefonicznie. Pomożemy to
              ustalić: {PHONE}.
            </p>
            <ul className="space-y-1">
              {cemetery.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {source.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
