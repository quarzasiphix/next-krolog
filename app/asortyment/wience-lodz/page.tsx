import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'
import { Card, CardContent } from '@/components/ui/card'
import { Flower, Leaf, CheckCircle } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

const wreaths = [
  {
    name: 'Wieńce tradycyjne',
    description:
      'Klasyczne wieńce wykonane z wysokiej jakości kwiatów, dostępne w różnych rozmiarach i kompozycjach kolorystycznych.',
    features: ['Eleganckie wykonanie', 'Możliwość personalizacji', 'Różnorodne formy'],
    icon: Flower,
  },
  {
    name: 'Wieńce okolicznościowe',
    description:
      'Kompozycje z wstążkami dedykowanymi od rodziny, współpracowników lub instytucji, przygotowane według ustalonej symboliki.',
    features: ['Dedykowane napisy', 'Firmowe wstążki', 'Profesjonalne wykonanie'],
    icon: Leaf,
  },
  {
    name: 'Wiązanki pogrzebowe',
    description:
      'Mniejsze kompozycje kwiatowe, które mogą towarzyszyć wieńcom lub stanowić delikatny gest pamięci.',
    features: ['Kompaktowe rozmiary', 'Eleganckie ułożenie', 'Szeroki wybór kwiatów'],
    icon: Flower,
  },
  {
    name: 'Wieńce z szarfami',
    description:
      'Wieńce przygotowane z personalizowanymi szarfami zawierającymi pożegnalne słowa bliskich.',
    features: ['Osobiste dedykacje', 'Trwałe materiały', 'Staranne wykończenie'],
    icon: Leaf,
  },
  {
    name: 'Kompozycje z kwiatów żywych',
    description:
      'Wieńce i dekoracje wykonywane wyłącznie z żywych kwiatów, symbolizujących przemijanie i pamięć.',
    features: ['Świeże kwiaty', 'Naturalne piękno', 'Różnorodne gatunki'],
    icon: Flower,
  },
  {
    name: 'Wieńce ekskluzywne',
    description:
      'Wyjątkowe kompozycje tworzone z rzadkich i ekskluzywnych gatunków kwiatów na specjalne zamówienie.',
    features: ['Indywidualny projekt', 'Luksusowe wykończenia', 'Najwyższa jakość'],
    icon: Leaf,
  },
]

export const metadata: Metadata = {
  title: 'Wieńce Pogrzebowe Łódź',
  description:
    'Wieńce i kompozycje kwiatowe na pogrzeb – tradycyjne, okolicznościowe i ekskluzywne aranżacje dostępne w Nekrolog Łódź. Możliwość personalizacji szarf.',
  keywords: ['wieńce pogrzebowe łódź', 'wiązanki pogrzebowe', 'kwiaty na pogrzeb', 'wieńce z szarfami'],
  alternates: {
    canonical: `${SITE_URL}/asortyment/wience-lodz`,
  },
  openGraph: {
    title: 'Wieńce Pogrzebowe Łódź - Nekrolog',
    description: 'Wieńce i kompozycje kwiatowe – tradycyjne, okolicznościowe i ekskluzywne. Możliwość personalizacji.',
    url: `${SITE_URL}/asortyment/wience-lodz`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WiencePage() {
  return (
    <ServiceLayout
      title="Wieńce Pogrzebowe"
      description="Przygotowujemy wieńce i kompozycje kwiatowe, które w taktowny sposób oddają hołd zmarłej osobie."
      backgroundImage={IMAGES.subpages.wience}
    >
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">Wieńce i kompozycje kwiatowe</h2>
          <p className="text-gray-300">
            Oferujemy wieńce, wiązanki i dekoracje kwiatowe przygotowywane ze świeżych kwiatów przez doświadczonych
            florystów. Każda kompozycja powstaje według indywidualnych wytycznych, tak aby podkreślić powagę i charakter uroczystości.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wreaths.map(({ icon: Icon, name, description, features }) => (
            <Card
              key={name}
              className="bg-black/30 border border-white/10 hover:border-primary/50 transition-colors duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-playfair text-white">{name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{description}</p>
                <ul className="space-y-2">
                  {features.map((feature) => (
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
            src={IMAGES.subpages.wience}
            alt="Wieńce pogrzebowe"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <img
            src={IMAGES.subpages.wiazanki}
            alt="Kompozycje kwiatowe"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <img
            src={IMAGES.cross}
            alt="Symboliczne dekoracje"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </ServiceLayout>
  )
}
