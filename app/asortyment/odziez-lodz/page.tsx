import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'
import { Card, CardContent } from '@/components/ui/card'
import { Package, CheckCircle } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

import { generateCanonicalMetadata } from '@/lib/canonical'

const clothingCategories = [
  {
    name: 'Garnitury pogrzebowe męskie',
    description:
      'Eleganckie garnitury w stonowanych kolorach, starannie dopasowane do uroczystości pożegnalnych.',
    features: ['Klasyczny krój', 'Wysoka jakość tkanin', 'Pełna rozmiarówka'],
  },
  {
    name: 'Suknie i garsonki żałobne',
    description:
      'Stonowane suknie i garsonki dla kobiet, łączące elegancję z komfortem podczas ceremonii.',
    features: ['Eleganckie fasony', 'Delikatne materiały', 'Kolory: czerń, granat, grafit'],
  },
  {
    name: 'Koszule i bluzki',
    description:
      'Klasyczne koszule męskie oraz eleganckie bluzki damskie, idealne jako uzupełnienie stroju żałobnego.',
    features: ['Oddychające tkaniny', 'Łatwe w prasowaniu', 'Uniwersalne kroje'],
  },
  {
    name: 'Dodatki żałobne',
    description:
      'Krawaty, poszetki, szale oraz rękawiczki, które dopełniają uroczystą stylizację.',
    features: ['Spójne kolorystycznie', 'Stonowane wzory', 'Dostępne komplety rodzinne'],
  },
  {
    name: 'Obuwie',
    description:
      'Wygodne, czarne obuwie dla kobiet i mężczyzn, przystosowane do całodziennego uczestnictwa w uroczystości.',
    features: ['Miękkie wykończenia', 'Stabilna podeszwa', 'Różne rozmiary'],
  },
  {
    name: 'Odzież dla zmarłych',
    description:
      'Specjalistyczne komplety dla zmarłych – suknie, garnitury i dodatki przygotowane z najwyższym szacunkiem.',
    features: ['Delikatne podszycia', 'Tradycyjne kroje', 'Możliwość personalizacji'],
  },
]

export const metadata: Metadata = {
  title: 'Odzież Pogrzebowa Łódź - Garnitury i Sukienki',
  description:
    'Elegancka odzież żałobna dostępna w Łodzi. Garnitury męskie, suknie damskie, obuwie oraz odzież dla zmarłych. Pełna rozmiarówka na miejscu.',
  keywords: ['odzież pogrzebowa łódź', 'ubrania dla zmarłych łódź', 'garnitur żałobny łódź', 'suknia żałobna', 'sklep z odzieżą żałobną'],
  ...generateCanonicalMetadata('/asortyment/odziez-lodz'),
  openGraph: {
    title: 'Odzież Pogrzebowa Łódź - Nekrolog',
    description: 'Elegancka odzież żałobna dla kobiet i mężczyzn oraz komplety dla zmarłych dostępna w Łodzi.',
    url: `${SITE_URL}/asortyment/odziez-lodz`,
    type: 'website',
  },
}

export default function OdziezPage() {
  return (
    <ServiceLayout
      title="Odzież Pogrzebowa - Łódź"
      description="Zapewniamy elegancką odzież żałobną oraz komplety dla zmarłych, dbając o godny i stonowany charakter ceremonii."
      backgroundImage={IMAGES.subpages.odziez}
    >
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">Odzież żałobna w Łodzi</h2>
          <p className="text-gray-300">
            W naszym domu pogrzebowym przy ul. Legionów 48 w Łodzi dostępna jest odzież dla wszystkich uczestników ceremonii.
            Posiadamy pełną rozmiarówkę klasycznych garniturów, sukien oraz butów. Nasi pracownicy pomagają w doborze odpowiedniego stroju.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clothingCategories.map((category) => (
            <Card
              key={category.name}
              className="bg-black/30 border border-white/10 hover:border-primary/50 transition-colors duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-playfair text-white">{category.name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature) => (
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
      </div>
    </ServiceLayout>
  )
}
