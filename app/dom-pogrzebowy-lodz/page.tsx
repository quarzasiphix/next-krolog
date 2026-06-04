import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import { Phone, Clock, MapPin, Check, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import FAQSchema from '@/components/structured-data/FAQSchema'

export const metadata: Metadata = {
  title: { absolute: 'Dom Pogrzebowy Łódź – Całodobowy, Bez Zaliczki | Nekrolog Łódź' },
  description:
    'Dom pogrzebowy w Łodzi – całodobowa pomoc 24/7, organizacja pogrzebów bez kosztów z góry. Ul. Legionów 48. Rodzinna firma z 30-letnim doświadczeniem. Tel: +48 602 274 661.',
  keywords: [
    'dom pogrzebowy łódź',
    'dom pogrzebowy całodobowy łódź',
    'dom pogrzebowy 24h łódź',
    'dom pogrzebowy łódź nekrolog',
    'zakład pogrzebowy łódź',
    'pogrzeb bez zaliczki łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/dom-pogrzebowy-lodz`,
  },
  openGraph: {
    title: 'Dom Pogrzebowy Łódź – Całodobowy Nekrolog Łódź',
    description: 'Dom pogrzebowy w Łodzi – pomoc 24/7, pogrzeby bez zaliczki. Ul. Legionów 48.',
    url: `${SITE_URL}/dom-pogrzebowy-lodz`,
    type: 'website',
  },
}

const faqData = [
  {
    question: 'Czy dom pogrzebowy w Łodzi działa całą dobę?',
    answer:
      'Tak. Jesteśmy dostępni 24/7 pod numerem +48 602 274 661. Odbieramy telefony o każdej porze doby, w weekendy i święta.',
  },
  {
    question: 'Czy dom pogrzebowy organizuje pogrzeb bez zaliczki?',
    answer:
      'Tak. Pokrywamy koszty pogrzebu z góry i rozliczamy się bezpośrednio z zasiłkiem pogrzebowym ZUS lub KRUS. Rodzina nie musi mieć gotówki przy sobie.',
  },
  {
    question: 'Czym różni się dom pogrzebowy od zakładu pogrzebowego?',
    answer:
      'To dwie nazwy tego samego rodzaju firmy. Dom pogrzebowy i zakład pogrzebowy to synonimy – obie nazwy oznaczają przedsiębiorstwo zajmujące się organizacją pogrzebów, transportem i formalnościami.',
  },
]

export default function DomPogrzebowyLodzPage() {
  const breadcrumbs = [
    { name: 'Strona Główna', url: '/' },
    { name: 'Dom Pogrzebowy Łódź' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqData} name="Dom Pogrzebowy Łódź FAQ" />
      <BreadcrumbController
        overrides={[{ segment: 'dom-pogrzebowy-lodz', label: 'Dom Pogrzebowy Łódź' }]}
      />

      <section className="relative min-h-[40vh] bg-gradient-to-b from-black via-black/95 to-black/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 text-white leading-tight">
              Dom Pogrzebowy Łódź
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
              Całodobowy dom pogrzebowy w Łodzi – pomoc od pierwszego telefonu
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Nekrolog Łódź to rodzinny dom pogrzebowy przy ul. Legionów 48, prowadzony przez Jolantę Kostowską.
              Działamy całą dobę, organizujemy pogrzeby bez kosztów z góry i zajmujemy się wszystkimi formalnościami.
            </p>

            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-8">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Bez kosztów z góry – rozliczenie z zasiłku ZUS/KRUS</span>
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
              Co obejmuje nasza pomoc
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-medium text-white mb-4">Organizacja pogrzebu</h3>
                  <ul className="space-y-3">
                    {[
                      'Kompleksowa organizacja ceremonii',
                      'Formalności w USC i cmentarzu',
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
                  <h3 className="text-xl font-playfair font-medium text-white mb-4">Rozliczenie i formalności</h3>
                  <ul className="space-y-3">
                    {[
                      'Pogrzeb bez zaliczki – bez gotówki',
                      'Rozliczenie z zasiłku ZUS/KRUS',
                      'Pomoc w uzyskaniu zasiłku',
                      'Kremacja i pochówek urnowy',
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
