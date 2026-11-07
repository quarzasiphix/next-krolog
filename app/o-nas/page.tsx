import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Star } from 'lucide-react'
import { SITE_URL, BUSINESS_INFO } from '@/lib/constants'
import { RATING } from '@/lib/reputation'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

export const metadata: Metadata = {
  title: { absolute: 'O nas – rodzinny zakład pogrzebowy w Łodzi od 1995 r. | Nekrolog Łódź' },
  description:
    'Nekrolog Łódź – Usługi Pogrzebowe Jolanta Kostowska: rodzinny zakład pogrzebowy przy ul. Legionów 48 w Łodzi, działający od 1995 r. Pomoc 24/7, pogrzeb bez zaliczki.',
  keywords: ['o nas', 'zakład pogrzebowy nekrolog', 'jolanta kostowska', 'rodzinny zakład pogrzebowy łódź'],
  alternates: { canonical: `${SITE_URL}/o-nas` },
  openGraph: {
    title: 'O nas – rodzinny zakład pogrzebowy w Łodzi od 1995 r.',
    description: 'Kim jesteśmy, jak pracujemy i jak się z nami skontaktować.',
    url: `${SITE_URL}/o-nas`,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const facts: [string, string][] = [
  ['Pełna nazwa', BUSINESS_INFO.legalName],
  ['Prowadzi', 'Jolanta Kostowska'],
  ['Działamy od', `${BUSINESS_INFO.foundedYear} r. – firma rodzinna`],
  ['Adres biura', `ul. ${BUSINESS_INFO.address.streetAddress}, ${BUSINESS_INFO.address.postalCode} ${BUSINESS_INFO.address.addressLocality}`],
  ['Telefon (24/7)', BUSINESS_INFO.phone],
  ['Transport międzynarodowy', BUSINESS_INFO.secondaryPhone],
  ['E-mail', BUSINESS_INFO.email],
  ['NIP', BUSINESS_INFO.nip],
]

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'O nas' },
]

export default function ONasPage() {
  const reviews = BUSINESS_INFO.reviews.slice(0, 3)

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <BreadcrumbController overrides={[{ segment: 'o-nas', label: 'O nas' }]} />

      <section className="py-16 bg-gradient-to-b from-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white text-center">
              O nas – rodzinny zakład pogrzebowy w Łodzi
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center mb-12">
              Nekrolog Łódź – Usługi Pogrzebowe Jolanta Kostowska to rodzinny zakład pogrzebowy z biurem przy
              ul. Legionów 48 w Łodzi, działający od {BUSINESS_INFO.foundedYear} roku. Organizujemy pogrzeby
              tradycyjne i kremacyjne, przewóz zmarłych w Polsce i z zagranicy oraz formalności – całodobowo
              i bez zaliczki.
            </p>

            <h2 className="text-3xl font-playfair font-medium text-white mb-6">Najważniejsze informacje</h2>
            <dl className="grid gap-4 sm:grid-cols-2 mb-14">
              {facts.map(([term, value]) => (
                <div key={term} className="rounded-lg border border-white/10 bg-black/40 p-4">
                  <dt className="text-sm uppercase tracking-wide text-primary/80">{term}</dt>
                  <dd className="mt-1 text-white break-words">{value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="text-3xl font-playfair font-medium text-white mb-4">Jak pracujemy</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed mb-14">
              <p>
                <strong className="text-white">Bez zaliczki.</strong> Rodzina nie musi mieć gotówki, żeby zorganizować
                pogrzeb. Koszt rozliczamy z zasiłku pogrzebowego ZUS lub KRUS (7000 zł dla zgonów od 1 stycznia
                2026 r.), a wycenę podajemy przed podpisaniem umowy.{' '}
                <Link href="/pogrzeb-bez-zaliczki" className="text-primary underline">Jak to działa</Link>.
              </p>
              <p>
                <strong className="text-white">Całą dobę.</strong> Telefon odbieramy w nocy, w weekendy i święta.
                Przyjeżdżamy do domu, szpitala, hospicjum lub domu opieki.
              </p>
              <p>
                <strong className="text-white">Formalności w jednym miejscu.</strong> Rejestracja zgonu w USC,
                termin w kancelarii cmentarza i parafii, wniosek o zasiłek – zajmujemy się tym za rodzinę na
                podstawie upoważnienia.
              </p>
              <p>
                <strong className="text-white">Łódź i okolice.</strong> Organizujemy pogrzeby na wszystkich
                łódzkich cmentarzach i w miejscowościach wokół Łodzi –{' '}
                <Link href="/obszar-dzialania" className="text-primary underline">obszar działania</Link>.
              </p>
            </div>

            <h2 className="text-3xl font-playfair font-medium text-white mb-2">Opinie rodzin</h2>
            <p className="text-gray-400 mb-6 flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" aria-hidden />
              {RATING.ratingValue.toFixed(1).replace('.', ',')}/5 ·{' '}
              <a href={BUSINESS_INFO.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="underline">
                {RATING.reviewCount} opinii w Google
              </a>
            </p>
            <div className="grid gap-4 md:grid-cols-3 mb-14">
              {reviews.map((r) => (
                <figure key={r.authorName} className="rounded-lg border border-white/10 bg-black/40 p-5">
                  <blockquote className="text-gray-300 text-sm leading-relaxed">„{r.reviewBody}”</blockquote>
                  <figcaption className="mt-3 text-sm text-white">— {r.authorName}</figcaption>
                </figure>
              ))}
            </div>

            <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 text-center">
              <p className="text-gray-200 mb-4">Potrzebujesz pomocy teraz? Zadzwoń – spokojnie powiemy, co zrobić w pierwszej kolejności.</p>
              <a
                href="tel:+48602274661"
                data-phone-location="o_nas_cta"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black"
              >
                <Phone className="h-5 w-5" aria-hidden />
                <span>+48 602 274 661</span>
              </a>
              <p className="mt-4 text-sm text-gray-400">
                <Link href="/kontakt" className="underline">Kontakt i dojazd</Link>
                {' · '}
                <Link href="/uslugi-pogrzebowe-lodz" className="underline">Usługi pogrzebowe</Link>
                {' · '}
                <Link href="/pogrzeb-lodz" className="underline">Jak zorganizować pogrzeb</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
