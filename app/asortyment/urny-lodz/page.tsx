import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'
import { Card, CardContent } from '@/components/ui/card'
import { Box, CheckCircle } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

const urns = [
  {
    name: 'Urna metalowa klasyczna',
    description:
      'Elegancka urna wykonana z metalu wysokiej jakości, dostępna w różnych kolorach i wykończeniach.',
    features: ['Trwały materiał', 'Klasyczny wygląd', 'Różne kolory do wyboru'],
  },
  {
    name: 'Urna drewniana zdobiona',
    description:
      'Tradycyjna urna wykonana z naturalnego drewna, starannie wykończona i ozdobiona delikatnymi wzorami.',
    features: ['Naturalne drewno', 'Ręcznie zdobiona', 'Eleganckie wykończenie'],
  },
  {
    name: 'Urna biodegradowalna',
    description:
      'Ekologiczna urna wykonana z materiałów przyjaznych środowisku, idealna do pochówku w ziemi lub rozsypania prochów.',
    features: ['Ekologiczna', 'Biodegradowalna', 'Przyjazna środowisku'],
  },
  {
    name: 'Urna ceramiczna artystyczna',
    description:
      'Wyjątkowa urna ceramiczna, ręcznie wykonana przez artystów, z możliwością personalizacji wzorów i kolorów.',
    features: ['Ręcznie wykonana', 'Unikatowy wzór', 'Możliwość personalizacji'],
  },
  {
    name: 'Miniaturowa urna pamiątkowa',
    description:
      'Mniejsza wersja urny służąca jako pamiątka, pozwalająca zachować niewielką ilość prochów bliskiej osoby.',
    features: ['Kompaktowy rozmiar', 'Eleganckie wykonanie', 'Trwały materiał'],
  },
  {
    name: 'Urna kryształowa',
    description:
      'Luksusowa urna wykonana z wysokiej jakości kryształu, dostępna z możliwością grawerowania personalizowanych napisów.',
    features: ['Ekskluzywny wygląd', 'Możliwość grawerowania', 'Najwyższa jakość'],
  },
]

export const metadata: Metadata = {
  title: 'Urny Pogrzebowe Łódź',
  description:
    'Szeroki wybór urn pogrzebowych w Łodzi. Urny metalowe, drewniane, kamienne, ceramiczne, biodegradowalne i pamiątkowe. Możliwość personalizacji.',
  keywords: ['urny pogrzebowe łódź', 'urny na prochy', 'urna pogrzebowa', 'urny kremacyjne łódź', 'urna biodegradowalna'],
  alternates: {
    canonical: `${SITE_URL}/asortyment/urny-lodz`,
  },
  openGraph: {
    title: 'Urny Pogrzebowe Łódź - Nekrolog',
    description: 'Szeroki wybór urn pogrzebowych. Urny metalowe, drewniane, ceramiczne, biodegradowalne i pamiątkowe.',
    url: `${SITE_URL}/asortyment/urny-lodz`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function UrnyPage() {
  return (
    <ServiceLayout
      title="Urny Pogrzebowe"
      description="Szeroki wybór urn dostosowanych do różnych potrzeb i preferencji."
      backgroundImage={IMAGES.subpages.urny}
    >
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">Urny kremacyjne</h2>
          <p className="text-gray-300">
            Oferujemy urny wykonane z metalu, drewna, ceramiki, kryształu oraz materiałów biodegradowalnych. Każdy model
            dobieramy indywidualnie, dbając o estetykę i trwałość, aby godnie upamiętnić bliską osobę.
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
          <img
            src={IMAGES.subpages.urny}
            alt="Wybór urn pogrzebowych"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <img
            src={IMAGES.candles}
            alt="Symboliczna oprawa świec"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <img
            src={IMAGES.cross}
            alt="Detal krzyża pogrzebowego"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
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
