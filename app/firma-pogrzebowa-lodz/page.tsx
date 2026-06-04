import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import { Phone, Clock, MapPin, Check, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import FAQSchema from '@/components/structured-data/FAQSchema'

export const metadata: Metadata = {
  title: { absolute: 'Firma Pogrzebowa Łódź – Pogrzeb Bez Zaliczki | Nekrolog 24/7' },
  description:
    'Firma pogrzebowa w Łodzi – całodobowa obsługa, organizacja pogrzebów bez kosztów z góry. Rozliczenie z zasiłku ZUS/KRUS. Ul. Legionów 48. Tel: +48 602 274 661.',
  keywords: [
    'firma pogrzebowa łódź',
    'firma pogrzebowa',
    'zakład pogrzebowy łódź',
    'pogrzeb bez zaliczki łódź',
    'firma pogrzebowa całodobowa łódź',
    'usługi pogrzebowe łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/firma-pogrzebowa-lodz`,
  },
  openGraph: {
    title: 'Firma Pogrzebowa Łódź – Nekrolog Łódź',
    description: 'Firma pogrzebowa w Łodzi – pomoc 24/7, bez zaliczki. Ul. Legionów 48.',
    url: `${SITE_URL}/firma-pogrzebowa-lodz`,
    type: 'website',
  },
}

const faqData = [
  {
    question: 'Czym zajmuje się firma pogrzebowa w Łodzi?',
    answer:
      'Firma pogrzebowa Nekrolog Łódź organizuje kompleksowo całą ceremonię pogrzebową: transport, formalności w USC i na cmentarzu, przygotowanie ciała, trumnę lub urnę, oprawę muzyczną i florystyczną oraz wsparcie w rozliczeniu zasiłku pogrzebowego.',
  },
  {
    question: 'Czy firma pogrzebowa działa całą dobę?',
    answer:
      'Tak. Jesteśmy dostępni 24/7 pod numerem +48 602 274 661. Oddzwaniamy natychmiast i pomagamy od pierwszego telefonu, niezależnie od pory dnia i nocy.',
  },
  {
    question: 'Czy muszę zapłacić firmie pogrzebowej z góry?',
    answer:
      'Nie. Nasza firma pogrzebowa organizuje pogrzeb bez zaliczki – pokrywamy koszty i rozliczamy się bezpośrednio z zasiłkiem pogrzebowym ZUS lub KRUS. Rodzina nie musi mieć gotówki.',
  },
]

export default function FirmaPogrzebowaLodzPage() {
  const breadcrumbs = [
    { name: 'Strona Główna', url: '/' },
    { name: 'Firma Pogrzebowa Łódź' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqData} name="Firma Pogrzebowa Łódź FAQ" />
      <BreadcrumbController
        overrides={[{ segment: 'firma-pogrzebowa-lodz', label: 'Firma Pogrzebowa Łódź' }]}
      />

      <section className="relative min-h-[40vh] bg-gradient-to-b from-black via-black/95 to-black/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 text-white leading-tight">
              Firma Pogrzebowa Łódź
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
              Rodzinna firma pogrzebowa z ponad 30-letnim doświadczeniem – całodobowo
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Nekrolog Łódź to firma pogrzebowa prowadzona przez Jolantę Kostowską przy ul. Legionów 48.
              Organizujemy pogrzeby bez kosztów z góry, zajmujemy się wszystkimi formalnościami i jesteśmy dostępni 24/7.
            </p>

            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-8">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Bez zaliczki – rozliczenie z zasiłku ZUS/KRUS</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+48602274661"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary/90 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                <span>+48 602 274 661</span>
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-black/50 px-8 py-4 text-lg font-medium text-white transition hover:bg-black/70 w-full sm:w-auto"
              >
                Formularz kontaktowy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Zakres usług firmy pogrzebowej
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-medium text-white mb-4">Organizacja i ceremonia</h3>
                  <ul className="space-y-3">
                    {[
                      'Kompleksowa organizacja pogrzebu',
                      'Formalności w USC, cmentarzu, kościele',
                      'Transport i przygotowanie ciała',
                      'Oprawa muzyczna i florystyczna',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-medium text-white mb-4">Asortyment i kremacja</h3>
                  <ul className="space-y-3">
                    {[
                      'Szeroki wybór trumien i urn',
                      'Kremacja z ceremonią lub bez',
                      'Wieńce i wiązanki pogrzebowe',
                      'Odzież żałobna i akcesoria',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center text-center">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-gray-400 mb-1">Telefon całodobowy</p>
                <a href="tel:+48602274661" className="text-xl font-medium text-white hover:text-primary transition">
                  +48 602 274 661
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-gray-400 mb-1">Godziny biura</p>
                <p className="text-white">Pn–Pt: 8:00–16:00</p>
                <p className="text-white">Sob: 9:00–13:00</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <p className="text-sm text-gray-400 mb-1">Adres</p>
                <address className="not-italic text-white">Legionów 48<br />90-702 Łódź</address>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-medium text-white mb-8 text-center">
              Najczęściej zadawane pytania
            </h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <Card key={faq.question} className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/zaklad-pogrzebowy-lodz" className="text-primary hover:text-primary/80 underline underline-offset-4">
                Pełne informacje o zakładzie pogrzebowym Nekrolog Łódź
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
