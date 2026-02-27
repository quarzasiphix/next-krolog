import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import FAQSchema, { FAQItem } from '@/components/structured-data/FAQSchema'
import { generateCanonicalMetadata } from '@/lib/canonical'
import { SITE_URL } from '@/lib/constants'

const faqs: FAQItem[] = [
  {
    question: 'Czy na pogrzeb trzeba ubrać się na czarno?',
    answer:
      'Nie ma bezwzględnego obowiązku prawnego. W Polsce czerń jest najczęściej wybierana, ale odpowiednie są także inne stonowane, ciemne kolory.',
  },
  {
    question: 'Jakie kolory poza czarnym są akceptowane na pogrzebie?',
    answer:
      'Najczęściej wybierane są granat, grafit, ciemna szarość i przygaszony brąz. Najważniejsze, by strój był spokojny, elegancki i nienachalny.',
  },
  {
    question: 'Czy można iść na pogrzeb w jasnych ubraniach?',
    answer:
      'W standardowej ceremonii lepiej unikać jasnych i kontrastowych kolorów. Wyjątkiem mogą być wyraźne życzenia rodziny lub charakter świeckiej ceremonii.',
  },
]

export const metadata: Metadata = {
  title: 'Czy Na Pogrzeb Trzeba Ubrać Się na Czarno? Zasady i Praktyka | Nekrolog Łódź',
  description:
    'Wyjaśniamy, czy czarny strój na pogrzeb jest obowiązkowy. Sprawdź, jakie kolory są akceptowane i jak ubrać się elegancko oraz z szacunkiem.',
  keywords: [
    'czy na pogrzeb trzeba ubrać się na czarno',
    'kolory na pogrzeb',
    'strój żałobny zasady',
    'jak się ubrać na pogrzeb',
    'odzież żałobna łódź',
  ],
  openGraph: {
    title: 'Czy Na Pogrzeb Trzeba Ubrać Się na Czarno?',
    description:
      'Praktyczny przewodnik po kolorach i zasadach ubioru na pogrzeb.',
    url: `${SITE_URL}/poradnik/czy-na-pogrzeb-trzeba-ubrac-sie-na-czarno`,
    type: 'article',
  },
  ...generateCanonicalMetadata('/poradnik/czy-na-pogrzeb-trzeba-ubrac-sie-na-czarno'),
}

export default function CzyNaPogrzebNaCzarnoPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium text-white">
              Czy Na Pogrzeb Trzeba Ubrać Się na Czarno?
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Czerń pozostaje klasycznym wyborem, ale nie jest jedyną dopuszczalną opcją.
              Kluczowe są stonowanie, schludność i szacunek do charakteru ceremonii.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-playfair text-white">Najbezpieczniejsze wybory</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li>Czarny</li>
                    <li>Granat</li>
                    <li>Grafit / ciemna szarość</li>
                    <li>Przygaszone dodatki</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-playfair text-white">Czego unikać</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li>Jaskrawych kolorów i neonów</li>
                    <li>Dużych, kontrastowych wzorów</li>
                    <li>Stroju typowo sportowego</li>
                    <li>Bardzo ekstrawaganckich dodatków</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/10 border border-primary/30">
              <CardContent className="p-6 space-y-3">
                <h2 className="text-2xl font-playfair text-white">Wskazówka praktyczna</h2>
                <p className="text-gray-300 leading-relaxed">
                  Jeśli nie masz pewności, wybierz prosty ciemny zestaw. Lepiej postawić na klasykę
                  niż na strój, który odciąga uwagę od ceremonii pożegnalnej.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/asortyment/odziez-lodz">Odzież żałobna Łódź</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 hover:bg-white/10">
                <Link href="/poradnik/jak-sie-ubrac-na-pogrzeb-kobieta-mezczyzna-dziecko">
                  Zobacz pełny poradnik stroju
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
