import { Metadata } from 'next'
import Link from 'next/link'
import ServiceLayout from '@/components/ServiceLayout'
import type { FAQItem } from '@/components/structured-data/FAQSchema'
import { IMAGES } from '@/assets/images'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, MapPin, Clock, Globe, AlertTriangle, Plane, Building2, Star, Truck } from 'lucide-react'
import { buildLocalMetadata, buildMetaDescription } from '@/lib/local-seo'

const transportServices = [
  'Transport zmarłych z miejsca zgonu do kostnicy lub chłodni',
  'Przewóz na terenie Łodzi i całego kraju specjalistycznymi karawanami',
  'Pełna obsługa ceremonii, przewóz na mszę oraz na cmentarz',
  'Transport do krematorium i odbiór urny po kremacji',
  'Koordynacja formalności i dokumentów transportowych',
]

const infoBoxes = [
  {
    icon: MapPin,
    title: 'Transport lokalny',
    description:
      'Zapewniamy szybki i godny transport na terenie Łodzi i województwa łódzkiego, z zachowaniem wszystkich procedur sanitarnych.',
  },
  {
    icon: Clock,
    title: 'Dostępność 24/7',
    description:
      'Nasze zespoły dyżurują przez całą dobę. Reagujemy natychmiast po otrzymaniu zgłoszenia, niezależnie od dnia tygodnia.',
  },
  {
    icon: Globe,
    title: 'Transport międzynarodowy',
    description:
      'Organizujemy przewóz zmarłych z zagranicy i za granicę, przygotowując wszystkie konieczne pozwolenia oraz dokumenty konsularne.',
  },
]

const internationalDocuments = [
  'Akt zgonu w języku polskim i tłumaczeniu przysięgłym',
  'Zaświadczenie lekarskie wykluczające choroby zakaźne',
  'Zezwolenie konsularne lub ambasady, gdy wymagają tego przepisy',
  'Dokument potwierdzający balsamację, jeśli jest konieczna',
]

const internationalSupport = [
  'Specjalistyczne trumny transportowe zgodne z wymogami sanitarnymi',
  'Pomoc w uzyskaniu wszystkich pozwoleń i tłumaczeń dokumentów',
  'Koordynacja transportu lotniczego lub lądowego do wybranego kraju',
  'Opieka koordynatora, który monitoruje transport na każdym etapie',
  'Informowanie rodziny o postępie transportu i przewidywanym terminie pochówku',
]

const priorityMarkets = [
  'Wielka Brytania i Irlandia',
  'Niemcy, Holandia, Belgia i Luksemburg',
  'Francja, Szwajcaria i Austria',
  'Norwegia, Szwecja i Dania',
  'Włochy i Hiszpania',
  'Kraje spoza Unii Europejskiej',
]

const faqData: FAQItem[] = [
  {
    question: 'Czy transport zmarłych w Łodzi jest dostępny całodobowo?',
    answer:
      'Tak. Transport zmarłych realizujemy 24/7 na terenie Łodzi i okolic, również w nocy, weekendy i święta.',
  },
  {
    question: 'Czy organizujecie transport zmarłych z zagranicy?',
    answer:
      'Tak. Organizujemy transport międzynarodowy, pomagamy z dokumentami konsularnymi i koordynujemy cały proces do miejsca pochówku.',
  },
  {
    question: 'Czy macie własny pojazd do transportu?',
    answer:
      'Tak. Dysponujemy specjalistycznym busem do transportu zmarłych, dzięki czemu możemy sprawnie realizować przewozy drogowe w Polsce i Europie.',
  },
]

export const metadata: Metadata = buildLocalMetadata({
  title: 'Transport Zmarłych Łódź',
  path: '/uslugi/transport-zmarlych-lodz',
  description: buildMetaDescription([
    'Całodobowy transport zmarłych w Łodzi i na terenie kraju',
    'własny specjalistyczny bus, pomoc formalna i szybka organizacja 24/7',
    'obsługa także dla transportu międzynarodowego i sprowadzenia do Polski',
  ]),
  keywords: [
    'transport zmarłych łódź',
    'przewóz zwłok łódź',
    'karawan łódź',
    'transport międzynarodowy zmarłych',
    'transport zmarłych z zagranicy do polski',
    'transport zwłok niemcy polska',
    'transport zwłok uk polska',
  ],
})

export default function TransportZmarlychPage() {
  return (
    <ServiceLayout
      title="Transport Zmarłych"
      description="Zapewniamy całodobowy, profesjonalny transport zmarłych na terenie kraju oraz międzynarodowo."
      backgroundImage={IMAGES.subpages.transport}
      faqItems={faqData}
    >
      <div className="space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">
              Kompleksowa usługa transportu zmarłych
            </h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-4">
              <p>
                Zakład Pogrzebowy Nekrolog Łódź dysponuje specjalistycznym transportem oraz doświadczonym personelem,
                który zapewnia godny przewóz ciała na każdym etapie, od miejsca zgonu po miejsce pochówku lub kremację.
                Działamy całodobowo, by rodzina otrzymała pomoc w chwili, gdy jest ona najbardziej potrzebna.
              </p>
              <p>
                Obsługujemy transport miejscowy, krajowy oraz międzynarodowy, dbając o bezpieczeństwo, dyskrecję i pełną
                zgodność z obowiązującymi przepisami sanitarnymi. W imieniu rodziny zajmujemy się także formalnościami oraz logistyką.
              </p>
            </div>

            <ul className="space-y-3">
              {transportServices.map((service) => (
                <li key={service} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {infoBoxes.map((box) => (
              <Card key={box.title} className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <box.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-medium text-white">{box.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{box.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="glass-card p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-playfair text-white text-center">Transport międzynarodowy - ważne informacje</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Niezbędne dokumenty</h4>
              <ul className="space-y-3">
                {internationalDocuments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Wsparcie ze strony Nekrolog Łódź</h4>
              <ul className="space-y-3">
                {internationalSupport.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 text-gray-300">
                  <AlertTriangle className="h-5 w-5 text-primary mt-1" />
                  <span>Niektóre kraje wymagają dodatkowych zezwoleń, pomagamy w ich uzyskaniu oraz przeprowadzamy rodzinę przez procedury.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-4">
          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-3">
                <Plane className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-playfair text-white">Kierunki zagraniczne</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {priorityMarkets.map((market) => (
                  <div key={market} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
                    {market}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3">
              <Truck className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-playfair text-white">Specjalistyczny bus</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Dysponujemy własnym busem do transportu zmarłych, co pozwala nam sprawnie obsługiwać przewozy drogowe
                z Polski i wielu krajów europejskich.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3">
              <Building2 className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-playfair text-white">Obsługa rodzin i partnerów</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Oprócz bezpośredniej obsługi rodzin możemy również pośredniczyć dla innych zakładów pogrzebowych,
                szpitali i instytucji, które potrzebują sprawnego partnera w Polsce.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3">
              <Star className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-playfair text-white">Renoma 5 gwiazdek</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Nekrolog Łódź ma bardzo dobrą renomę i ocenę 5 gwiazdek, co wzmacnia zaufanie rodzin powierzających nam
                trudne i pilne sprawy transportowe.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="rounded-xl border border-primary/20 bg-white/5 p-8">
          <h3 className="text-2xl font-playfair text-white">Transport i organizacja bez zaliczki</h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Jeżeli rodzina nie ma środków na start, pomagamy rozpocząć organizację transportu i dalszych usług bez kosztów z góry. Wyjaśniamy, jak wygląda rozliczenie zasiłku pogrzebowego i jakie formalności można powierzyć naszej firmie.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="bg-black/30 border border-primary/20">
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-playfair text-white">Transport z całej Europy</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Obsługujemy kierunki najważniejsze dla Polonii i rodzin wracających do kraju, ale również mniej oczywiste
                państwa, jeśli wymaga tego sytuacja. Każde zlecenie analizujemy indywidualnie pod kątem trasy, formalności i czasu realizacji.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border border-primary/20">
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-playfair text-white">Obsługa rodzin i partnerów</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Oprócz bezpośredniej obsługi rodzin możemy również pośredniczyć dla innych zakładów pogrzebowych,
                szpitali i instytucji, które potrzebują sprawnego partnera w Polsce. Przejmujemy ustalenia
                transportowe, odbiór w kraju i dalszą koordynację.
              </p>
              <Link
                href="/uslugi/sprowadzenie-zwlok-z-zagranicy"
                className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-primary/10 px-6 py-3 font-medium text-primary transition hover:bg-primary/20"
              >
                Zobacz usługę sprowadzenia zwłok z zagranicy
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </ServiceLayout>
  )
}
