import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import FAQSchema, { FAQItem } from '@/components/structured-data/FAQSchema'
import { generateCanonicalMetadata } from '@/lib/canonical'
import { SITE_URL } from '@/lib/constants'

const faqs: FAQItem[] = [
  {
    question: 'Jak wybrać trumnę na pogrzeb?',
    answer:
      'Najpierw określ rodzaj ceremonii i budżet, następnie wybierz materiał, rozmiar i wykończenie. Ważne są też wymagania cmentarza oraz preferencje rodziny.',
  },
  {
    question: 'Jaka trumna jest odpowiednia do kremacji?',
    answer:
      'Do kremacji stosuje się trumny spełniające wymogi krematorium, bez elementów niedopuszczonych technologicznie. Zakład pogrzebowy pomaga dobrać właściwy model.',
  },
  {
    question: 'Czy można kupić trumnę bezpośrednio w zakładzie pogrzebowym?',
    answer:
      'Tak. W praktyce większość rodzin wybiera trumnę bezpośrednio w zakładzie, który dopasowuje model do rodzaju ceremonii i formalności.',
  },
]

export const metadata: Metadata = {
  title: 'Jak Wybrać Trumnę na Pogrzeb? Praktyczny Poradnik | Nekrolog Łódź',
  description:
    'Praktyczny poradnik jak wybrać trumnę na pogrzeb. Materiały, rozmiary, estetyka, kremacja i koszty. Sprawdź, na co zwrócić uwagę przed decyzją.',
  keywords: [
    'jak wybrać trumnę na pogrzeb',
    'jaka trumna na pogrzeb',
    'trumny łódź',
    'trumna do kremacji',
    'asortyment pogrzebowy',
  ],
  openGraph: {
    title: 'Jak Wybrać Trumnę na Pogrzeb? Praktyczny Poradnik',
    description: 'Na co zwrócić uwagę przy wyborze trumny: materiał, rozmiar, koszt i typ ceremonii.',
    url: `${SITE_URL}/poradnik/jak-wybrac-trumne-na-pogrzeb`,
    type: 'article',
  },
  ...generateCanonicalMetadata('/poradnik/jak-wybrac-trumne-na-pogrzeb'),
}

export default function JakWybracTrumnePage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium text-white">
              Jak Wybrać Trumnę na Pogrzeb?
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Wybór trumny jest jedną z ważniejszych decyzji organizacyjnych. Warto podejść do niej
              spokojnie i praktycznie: od typu ceremonii, przez materiał, po estetykę i budżet.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-playfair text-white">Najważniejsze kryteria</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li>Rodzaj ceremonii: tradycyjna lub kremacja</li>
                    <li>Materiał i trwałość wykonania</li>
                    <li>Rozmiar i dopasowanie</li>
                    <li>Kolorystyka i styl</li>
                    <li>Koszt i przejrzyste warunki</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-playfair text-white">Wsparcie zakładu</h2>
                  <p className="text-gray-300 leading-relaxed">
                    W Nekrolog Łódź pomagamy dobrać trumnę do typu ceremonii i oczekiwań rodziny,
                    a także wyjaśniamy wszystkie formalności i koszty bez presji.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/asortyment/trumny-lodz">Zobacz ofertę trumien w Łodzi</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 hover:bg-white/10">
                <Link href="/kontakt">Skontaktuj się z nami 24/7</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
