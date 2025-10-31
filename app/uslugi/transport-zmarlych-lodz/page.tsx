import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, MapPin, Clock, Globe, AlertTriangle } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

const transportServices = [
  'Transport zmarłych z miejsca zgonu do kostnicy lub chłodni',
  'Przewóz na terenie Łodzi i całego kraju specjalistycznymi karawanami',
  'Pełna obsługa ceremonii – przewóz na mszę oraz na cmentarz',
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
  'Zezwolenie konsularne lub ambasady (wymagane w wielu krajach)',
  'Dokument potwierdzający balsamację (jeśli wymagają tego przepisy)',
]

const internationalSupport = [
  'Specjalistyczne trumny transportowe zgodne z wymogami sanitarnymi',
  'Pomoc w uzyskaniu wszystkich pozwoleń i tłumaczeń dokumentów',
  'Koordynacja transportu lotniczego lub lądowego do wybranego kraju',
  'Opieka koordynatora, który monitoruje transport na każdym etapie',
  'Informowanie rodziny o postępie transportu i przewidywanym terminie pochówku',
]

export const metadata: Metadata = {
  title: 'Transport Zmarłych Łódź',
  description:
    'Całodobowy transport zmarłych w Łodzi i na terenie kraju oraz transport międzynarodowy. Profesjonalne karawany i pomoc formalna. Dostępni 24/7.',
  keywords: ['transport zmarłych łódź', 'przewóz zwłok', 'karawan łódź', 'transport międzynarodowy zmarłych'],
  alternates: {
    canonical: `${SITE_URL}/uslugi/transport-zmarlych-lodz`,
  },
  openGraph: {
    title: 'Transport Zmarłych Łódź - Nekrolog',
    description: 'Całodobowy transport zmarłych w Łodzi, na terenie kraju i międzynarodowy. Profesjonalne karawany.',
    url: `${SITE_URL}/uslugi/transport-zmarlych-lodz`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TransportZmarlychPage() {
  return (
    <ServiceLayout
      title="Transport Zmarłych"
      description="Zapewniamy całodobowy, profesjonalny transport zmarłych na terenie kraju oraz międzynarodowo."
      backgroundImage={IMAGES.subpages.transport}
    >
      <div className="space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">
              Kompleksowa usługa transportu zmarłych
            </h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-4">
              <p>
                Dom Pogrzebowy Nekrolog Łódź dysponuje specjalistycznymi karawanami oraz doświadczonym personelem, który
                zapewnia godny transport ciała na każdym etapie – od miejsca zgonu po miejsce pochówku lub kremację. Działamy
                całodobowo, by rodzina otrzymała pomoc w chwili, gdy jest ona najbardziej potrzebna.
              </p>
              <p>
                Obsługujemy transport miejscowy, krajowy oraz międzynarodowy, dbając o bezpieczeństwo, dyskrecję i pełną zgodność
                z obowiązującymi przepisami sanitarnymi. W imieniu rodziny zajmujemy się także formalnościami oraz logistyką.
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
          <h3 className="text-2xl font-playfair text-white text-center">Transport międzynarodowy – ważne informacje</h3>
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
                  <span>Niektóre kraje wymagają dodatkowych zezwoleń – pomagamy w ich uzyskaniu oraz przeprowadzamy rodzinę przez procedury.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}
