import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { generateCanonicalMetadata } from '@/lib/canonical'
import ServiceSchema from '@/components/structured-data/ServiceSchema'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import FAQSchema from '@/components/structured-data/FAQSchema'
import {
  FileText,
  Music,
  Truck,
  Flame,
  Archive,
  Package,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Usługi Pogrzebowe Łódź | Zakład Pogrzebowy Nekrolog',
  description:
    'Kompleksowe usługi pogrzebowe w Łodzi. Organizacja pogrzebu, transport zmarłych, sprowadzenie zwłok z zagranicy, kremacja, oprawa muzyczna i ekshumacja. Profesjonalna pomoc 24/7.',
  keywords: [
    'usługi pogrzebowe łódź',
    'zakład pogrzebowy łódź',
    'organizacja pogrzebu łódź',
    'transport zmarłych łódź',
    'sprowadzenie zwłok z zagranicy',
    'kremacja łódź',
    'oprawa muzyczna łódź',
    'ekshumacja łódź',
  ],
  ...generateCanonicalMetadata('/uslugi'),
}

const services = [
  {
    title: 'Organizacja Pogrzebu',
    description:
      'Kompleksowa organizacja ceremonii pogrzebowej od A do Z. Pomoc w formalnościach, koordynacja wszystkich elementów uroczystości.',
    href: '/uslugi/organizacja-pogrzebow-lodz',
    icon: FileText,
    features: ['Pomoc w formalnościach', 'Koordynacja ceremonii', 'Kontakt z urzędami', 'Wsparcie rodzinie'],
  },
  {
    title: 'Transport Zmarłych',
    description:
      'Całodobowy transport zmarłych na terenie Łodzi i całej Polski. Nowoczesne karawany z odpowiednim wyposażeniem.',
    href: '/uslugi/transport-zmarlych-lodz',
    icon: Truck,
    features: ['Transport 24/7', 'Nowoczesne karawany', 'Transport krajowy', 'Transport międzynarodowy'],
  },
  {
    title: 'Sprowadzenie Zwłok z Zagranicy',
    description:
      'Obsługa transportu z krajów UE, Wielkiej Brytanii, Skandynawii i państw spoza UE. Pomoc dla rodzin oraz partnerów branżowych.',
    href: '/uslugi/sprowadzenie-zwlok-z-zagranicy',
    icon: Package,
    features: ['UE i poza UE', 'Dokumenty i tłumaczenia', 'Lotniczo lub drogowo', 'Wsparcie dla innych zakładów'],
  },
  {
    title: 'Kremacja',
    description:
      'Profesjonalne usługi kremacyjne z godnym podejściem. Pomoc w wyborze urny i organizacji ceremonii.',
    href: '/uslugi/krematorium-lodz',
    icon: Flame,
    features: ['Nowoczesne krematorium', 'Pomoc w wyborze urny', 'Ceremonie kremacyjne', 'Dokumentacja'],
  },
  {
    title: 'Oprawa Muzyczna',
    description:
      'Elegancka oprawa muzyczna ceremonii pogrzebowych. Trębacze, organiści i zespoły muzyczne.',
    href: '/uslugi/oprawa-muzyczna-lodz',
    icon: Music,
    features: ['Trębacze', 'Organiści', 'Zespoły muzyczne', 'Repertuar żałobny'],
  },
  {
    title: 'Ekshumacja',
    description:
      'Profesjonalne przeprowadzanie ekshumacji z zachowaniem wszystkich procedur i wymogów prawnych.',
    href: '/uslugi/ekshumacja-lodz',
    icon: Archive,
    features: ['Zgodnie z prawem', 'Wszystkie pozwolenia', 'Koordynacja z cmentarzem', 'Transport'],
  },
]

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Usługi Pogrzebowe', url: '/uslugi' },
]

const faqData = [
  {
    question: 'Czy organizujecie pogrzeb bez zaliczki?',
    answer:
      'Tak. W wielu przypadkach organizujemy pogrzeb bez kosztów z góry i pomagamy w rozliczeniu zasiłku pogrzebowego ZUS/KRUS.',
  },
  {
    question: 'Czy pomagacie w formalnościach urzędowych?',
    answer:
      'Tak. Pomagamy w kompletowaniu dokumentów, kontakcie z urzędami i administracją cmentarza.',
  },
  {
    question: 'Czy zajmujecie się także sprowadzeniem zmarłych z zagranicy?',
    answer:
      'Tak. Organizujemy transport do Polski z krajów UE, Wielkiej Brytanii, Skandynawii i innych państw, a także pośredniczymy dla innych zakładów oraz instytucji.',
  },
]

export default function UslugiPage() {
  const servicesItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Usługi Pogrzebowe Łódź - Lista usług',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: `https://nekrolog-lodz.com${service.href}`,
        areaServed: 'Łódź',
      },
    })),
  }

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqData} />
      <ServiceSchema
        serviceName="Usługi Pogrzebowe"
        description="Kompleksowe usługi pogrzebowe w Łodzi obejmujące organizację pogrzebu, transport zmarłych, sprowadzenie zwłok z zagranicy, kremację, oprawę muzyczną i ekshumację."
        url="/uslugi"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListSchema) }}
      />

      <div className="min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
                Usługi Pogrzebowe Łódź
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Jako profesjonalny zakład pogrzebowy w Łodzi, oferujemy kompleksowe usługi pogrzebowe
                z zachowaniem najwyższych standardów. Działamy całodobowo, zapewniając wsparcie
                rodzinom w najtrudniejszych chwilach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/kontakt" className="flex items-center gap-2">
                    Zadzwoń teraz: +48 602 274 661
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
                  <Link href="/poradnik" className="flex items-center gap-2">
                    Poradnik pogrzebowy
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="bg-black/30 border border-white/10 hover:border-primary/50 transition-colors duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl text-white">
                        <Icon className="h-6 w-6 text-primary" />
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full mt-6">
                        <Link href={service.href} className="flex items-center gap-2">
                          Dowiedz się więcej
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-16 text-center">
              <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto">
                <h2 className="text-2xl font-playfair text-white mb-6">
                  Dlaczego warto nam zaufać?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">Doświadczenie</h3>
                    <p>
                      Ponad 30 lat działalności rodzinnej firmy w branży funeralnej.
                      Znamy procedury i potrafimy pomóc w każdej sytuacji.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">Dostępność 24/7</h3>
                    <p>
                      Jesteśmy do dyspozycji przez całą dobę, 7 dni w tygodniu.
                      Pomoc w nagłych sytuacjach gwarantowana.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">Uczciwe ceny</h3>
                    <p>
                      Oferujemy pełen zakres usług pogrzebowych w konkurencyjnych cenach.
                      Najważniejsza jest dla nas pomoc rodzinie, nie zawyżanie kosztów.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-playfair font-semibold text-white text-center mb-8">
                Najczęściej Zadawane Pytania
              </h2>
              <div className="grid gap-4 max-w-4xl mx-auto">
                {faqData.map((faq) => (
                  <Card key={faq.question} className="bg-black/30 border border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-xl text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
