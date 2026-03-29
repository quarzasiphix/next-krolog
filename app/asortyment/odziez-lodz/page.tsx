import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import type { FAQItem } from '@/components/structured-data/FAQSchema'
import { IMAGES } from '@/assets/images'
import { Card, CardContent } from '@/components/ui/card'
import { Package, CheckCircle } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

import { generateCanonicalMetadata } from '@/lib/canonical'

const clothingCategories = [
  {
    name: 'Garnitury pogrzebowe męskie',
    description:
      'Najczęściej wybierane są klasyczne garnitury w stonowanych kolorach, odpowiednie do uroczystości pożegnalnych.',
    features: ['Klasyczny krój', 'Stonowana kolorystyka', 'Warto dobrać strój wcześniej'],
  },
  {
    name: 'Suknie i garsonki żałobne',
    description:
      'Dla kobiet najczęściej sprawdzają się proste, eleganckie fasony w ciemnych i spokojnych kolorach.',
    features: ['Eleganckie fasony', 'Komfort podczas ceremonii', 'Kolory: czerń, granat, grafit'],
  },
  {
    name: 'Koszule i bluzki',
    description:
      'Klasyczne koszule męskie i eleganckie bluzki damskie są bezpiecznym wyborem jako uzupełnienie stroju żałobnego.',
    features: ['Uniwersalne kroje', 'Stonowany charakter', 'Dobrze komponują się z ciemnym strojem'],
  },
  {
    name: 'Dodatki żałobne',
    description:
      'Krawaty, szale i inne dodatki powinny pozostać dyskretne i spójne z resztą stroju.',
    features: ['Spójne kolorystycznie', 'Stonowane wzory', 'Minimalistyczny charakter'],
  },
  {
    name: 'Obuwie',
    description:
      'Najlepiej sprawdza się wygodne, ciemne obuwie, odpowiednie do dłuższego uczestnictwa w uroczystości.',
    features: ['Stabilna podeszwa', 'Spokojny wygląd', 'Wygoda na cały dzień'],
  },
  {
    name: 'Ubiór dla zmarłego',
    description:
      'Rodzina samodzielnie przygotowuje ubranie dla zmarłego. W razie potrzeby podpowiadamy, jaki strój będzie odpowiedni i zgodny z charakterem ceremonii.',
    features: ['Szacunek do woli rodziny', 'Możemy podpowiedzieć odpowiedni wybór', 'Najczęściej wybierane są tradycyjne kroje'],
  },
]

const faqData: FAQItem[] = [
  {
    question: 'Czy pomagacie dobrać strój żałobny na pogrzeb?',
    answer:
      'Tak. Możemy podpowiedzieć, jaki strój będzie odpowiedni dla bliskich i jaki ubiór rodzina może przygotować dla zmarłego, zgodnie z charakterem ceremonii i tradycją.',
  },
  {
    question: 'Czy oferujecie sprzedaż odzieży żałobnej na miejscu?',
    answer:
      'Nie. Nie prowadzimy sprzedaży odzieży żałobnej. Rodzina organizuje strój we własnym zakresie, a my możemy wskazać, jaki ubiór będzie stosowny na ceremonię.',
  },
  {
    question: 'Czy zapewniacie odzież dla zmarłych?',
    answer:
      'Nie. Rodzina przygotowuje ubranie dla zmarłego samodzielnie. Jeśli potrzeba, podpowiadamy jakie elementy stroju warto przygotować.',
  },
]

export const metadata: Metadata = {
  title: 'Odzież na Pogrzeb Łódź - Jak Przygotować Odpowiedni Strój',
  description:
    'Wskazówki, jak przygotować odpowiedni strój na pogrzeb w Łodzi. Podpowiadamy, jaki ubiór wybrać dla uczestników ceremonii i jaki strój rodzina może przygotować dla zmarłego.',
  keywords: ['odzież na pogrzeb łódź', 'jak ubrać się na pogrzeb', 'ubrania dla zmarłych łódź', 'garnitur żałobny łódź', 'suknia żałobna'],
  ...generateCanonicalMetadata('/asortyment/odziez-lodz'),
  openGraph: {
    title: 'Odzież na Pogrzeb Łódź - Nekrolog',
    description: 'Praktyczne wskazówki dotyczące stroju na pogrzeb oraz ubioru przygotowywanego przez rodzinę dla zmarłego.',
    url: `${SITE_URL}/asortyment/odziez-lodz`,
    type: 'website',
  },
}

export default function OdziezPage() {
  return (
    <ServiceLayout
      title="Odzież Na Pogrzeb - Łódź"
      description="Podpowiadamy, jak przygotować stosowny strój na pogrzeb. Rodzina organizuje odzież samodzielnie, a my pomagamy wskazać odpowiedni kierunek."
      backgroundImage={IMAGES.subpages.odziez}
      faqItems={faqData}
    >
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">Jak przygotować strój na pogrzeb</h2>
          <p className="text-gray-300">
            Nie prowadzimy sprzedaży odzieży żałobnej ani nie zapewniamy gotowych kompletów ubrań. Rodzina przygotowuje strój
            samodzielnie, a my możemy podpowiedzieć, jaki ubiór będzie odpowiedni dla uczestników ceremonii oraz jaki strój
            warto przygotować dla zmarłego.
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
