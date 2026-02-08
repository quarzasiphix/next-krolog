import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { Card, CardContent } from '@/components/ui/card'
import { Box, CheckCircle } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import { generateCanonicalMetadata } from '@/lib/canonical'

const urns = [
  {
    name: 'Urna metalowa klasyczna',
    description: 'Tradycyjna urna metalowa dostępna w różnych kolorach i wykończeniach.',
    features: ['Wytrzymały metal', 'Różne kolory', 'Klasyczny kształt', 'Przystępna cena'],
  },
  {
    name: 'Urna drewniana dębowa',
    description: 'Ciepła i naturalna urna wykonana z drewna dębowego, idealna do pochówku tradycyjnego.',
    features: ['Lite drewno dębowe', 'Ręczne wykonanie', 'Naturalny wygląd', 'Ekologiczna'],
  },
  {
    name: 'Urna kompozytowa',
    description: 'Nowoczesna urna wykonana z trwałych materiałów kompozytowych, odporna na warunki atmosferyczne.',
    features: ['Nowoczesny design', 'Odporność na wilgoć', 'Lekka konstrukcja', 'Wiele wzorów'],
  },
]

export const metadata: Metadata = {
  title: 'Urny Pogrzebowe Łódź - Kamienne, Drewniane, Metalowe',
  description: 'Duży wybór urn pogrzebowych w Łodzi. Urny kamienne, drewniane, metalowe i kompozytowe. Dostępne od ręki w naszym zakładzie.',
  keywords: ['urny łódź', 'urny pogrzebowe łódź', 'urna na prochy', 'urny kamienne łódź', 'urny drewniane'],
  ...generateCanonicalMetadata('/asortyment/urny-lodz'),
  openGraph: {
    title: 'Urny Pogrzebowe Łódź - Nekrolog',
    description: 'Ekskluzywne i tradycyjne urny pogrzebowe w Łodzi. Sprawdź naszą ofertę urn kamiennych, drewnianych i metalowych.',
    url: `${SITE_URL}/asortyment/urny-lodz`,
    type: 'website',
  },
}

export default function UrnyPage() {
  return (
    <ServiceLayout
      title="Urny - Łódź"
      description="Szeroki wybór urn pogrzebowych wykonanych z różnych materiałów, dostępnych w naszym zakładzie w Łodzi."
    >
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">Urny Pogrzebowe Łódź</h2>
          <p className="text-gray-300">
            Oferujemy szeroki wybór urn dostosowanych do różnych potrzeb i budżetów. W naszym asortymencie w Łodzi
            znajdą Państwo urny wykonane z kamienia, metalu, drewna oraz nowoczesnych kompozytów.
            Każdy produkt cechuje się wysoką estetyką i trwałością.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {urns.map((urn) => (
            <Card
              key={urn.name}
              className="bg-black/30 border border-white/10 hover:border-primary/50 transition-colors duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Box className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-playfair text-white">{urn.name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{urn.description}</p>
                <ul className="space-y-2">
                  {urn.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-gray-400">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-black/40 to-black/60 rounded-lg flex items-center justify-center h-64">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Box className="w-8 h-8 text-primary" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-black/40 to-black/60 rounded-lg flex items-center justify-center h-64">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-black/40 to-black/60 rounded-lg flex items-center justify-center h-64">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Box className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-playfair text-white text-center">Dodatkowe informacje</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div className="space-y-3">
              <h4 className="text-xl font-medium text-white">Personalizacja urn</h4>
              <p>
                Wiele modeli oferujemy z możliwością grawerowania imienia, dat lub symboli. Na życzenie przygotowujemy
                urny w specjalnych kolorach oraz wykończeniach dopasowanych do charakteru ceremonii.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-medium text-white">Wsparcie doradców</h4>
              <p>
                Nasi doradcy pomagają dobrać odpowiednią urnę zgodnie z tradycją, wymogami krematorium oraz preferencjami
                rodziny. Zapewniamy pełne wsparcie w formalnościach związanych z pochówkiem urnowym.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}
