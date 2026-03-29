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
    name: 'Jak ubrać się na pogrzeb',
    description:
      'Na ceremonię najlepiej wybrać strój stonowany, schludny i dopasowany do charakteru pożegnania.',
    features: ['Czerń, grafit lub granat', 'Prosty, elegancki fason', 'Bez jaskrawych dodatków'],
  },
  {
    name: 'Strój najbliższej rodziny',
    description:
      'Najczęściej wybierane są klasyczne garnitury, garsonki, sukienki lub płaszcze w spokojnej kolorystyce.',
    features: ['Ubranie dopasowane do pogody', 'Wygodne obuwie', 'Szacunek dla tradycji rodziny'],
  },
  {
    name: 'Odzież dla zmarłego',
    description:
      'Ubranie dla zmarłego rodzina przygotowuje samodzielnie. Najczęściej wybierany jest strój schludny, klasyczny i zgodny z wolą bliskich.',
    features: ['Strój przygotowuje rodzina', 'Warto zadbać o kompletność ubrania', 'Najlepiej przygotować go wcześniej'],
  },
]

const faqData: FAQItem[] = [
  {
    question: 'Czy sprzedajecie odzież żałobną w Łodzi?',
    answer:
      'Nie. Nasz zakład pogrzebowy nie prowadzi sprzedaży odzieży żałobnej ani ubrań dla zmarłych.',
  },
  {
    question: 'Czy można kupić u Was garnitur, sukienkę lub buty na pogrzeb?',
    answer:
      'Nie. W naszym biurze nie prowadzimy sklepu z odzieżą i nie mamy ubrań na miejscu.',
  },
  {
    question: 'Gdzie szukać odzieży żałobnej w Łodzi?',
    answer:
      'Rodzina powinna zorganizować odzież samodzielnie. Według publicznie dostępnych katalogów w Łodzi działa m.in. Helko przy ul. Kilińskiego 89. Przed wizytą warto zadzwonić i potwierdzić aktualną ofertę oraz godziny otwarcia.',
  },
]

export const metadata: Metadata = {
  title: 'Odzież Żałobna Łódź - Informacje Dla Rodziny',
  description:
    'Praktyczne informacje dla rodzin szukających odzieży żałobnej w Łodzi. Nasz zakład nie prowadzi sprzedaży ubrań, ale wskazujemy, co przygotować przed ceremonią.',
  keywords: ['odzież pogrzebowa łódź', 'odzież żałobna łódź', 'ubrania dla zmarłych łódź', 'garnitur żałobny łódź', 'suknia żałobna'],
  ...generateCanonicalMetadata('/asortyment/odziez-lodz'),
  openGraph: {
    title: 'Odzież Żałobna Łódź - Nekrolog',
    description: 'Praktyczne informacje o odzieży żałobnej w Łodzi. Nasz zakład nie prowadzi sprzedaży ubrań.',
    url: `${SITE_URL}/asortyment/odziez-lodz`,
    type: 'website',
  },
}

export default function OdziezPage() {
  return (
    <ServiceLayout
      title="Odzież Pogrzebowa - Łódź"
      description="Praktyczne informacje o stroju na pogrzeb i odzieży dla zmarłego. Nasz zakład nie prowadzi sprzedaży odzieży żałobnej."
      backgroundImage={IMAGES.subpages.odziez}
      faqItems={faqData}
    >
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">Odzież żałobna w Łodzi</h2>
          <p className="text-gray-300">
            Nasz zakład pogrzebowy nie sprzedaje odzieży żałobnej i nie posiada ubrań na miejscu. Rodzina powinna
            przygotować strój samodzielnie lub skorzystać z wybranych sklepów zewnętrznych w Łodzi.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-xl border border-white/10 bg-black/30 p-6 text-gray-300">
          <h3 className="mb-4 text-2xl font-playfair text-white">Gdzie szukać odzieży żałobnej w Łodzi</h3>
          <p className="mb-4">
            Na podstawie publicznie dostępnych katalogów firm można sprawdzić m.in.:
          </p>
          <p className="mb-2 text-white">Helko. Sklep z odzieżą żałobną</p>
          <p className="mb-2">ul. Kilińskiego 89, 90-119 Łódź</p>
          <p className="mb-4">tel. 42 632 24 98</p>
          <p className="text-sm text-gray-400">
            Dane pochodzą z publicznych katalogów online. Przed wizytą warto zadzwonić i potwierdzić aktualną ofertę oraz godziny otwarcia.
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
