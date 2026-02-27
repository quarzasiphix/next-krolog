import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import FAQSchema, { FAQItem } from '@/components/structured-data/FAQSchema'
import { generateCanonicalMetadata } from '@/lib/canonical'
import { SITE_URL } from '@/lib/constants'

const faqs: FAQItem[] = [
  {
    question: 'Jak ubrać się na pogrzeb jako kobieta?',
    answer:
      'Najbezpieczniejszy wybór to stonowany, elegancki strój w ciemnych barwach: czarny, grafitowy, granatowy. Najważniejsze są skromność, prostota i komfort.',
  },
  {
    question: 'Czy mężczyzna musi mieć czarny garnitur na pogrzebie?',
    answer:
      'Nie zawsze. Najlepiej sprawdza się ciemny garnitur (czarny, granatowy, grafit) z jasną koszulą i stonowanym dodatkiem. Kluczowe są schludność i elegancja.',
  },
  {
    question: 'Jak ubrać dziecko na pogrzeb?',
    answer:
      'Dziecko powinno mieć czysty, schludny i wygodny strój w spokojnych kolorach. Nie trzeba ubierać go w formalny strój dorosłych, ważniejsza jest prostota i wygoda.',
  },
  {
    question: 'Czy strój na pogrzeb zawsze musi być czarny?',
    answer:
      'Nie. W polskiej praktyce dominuje czerń, ale dopuszczalne są też inne ciemne, stonowane kolory, jeśli ubiór pozostaje elegancki i adekwatny do ceremonii.',
  },
]

export const metadata: Metadata = {
  title: 'Jak Się Ubrać na Pogrzeb? Kobieta, Mężczyzna, Dziecko | Nekrolog Łódź',
  description:
    'Praktyczny poradnik jak ubrać się na pogrzeb. Zasady stroju dla kobiet, mężczyzn i dzieci. Co wypada, czego unikać i jak zachować elegancję oraz szacunek.',
  keywords: [
    'jak się ubrać na pogrzeb',
    'strój na pogrzeb',
    'jak ubrać się na pogrzeb kobieta',
    'jak ubrać się na pogrzeb mężczyzna',
    'jak ubrać dziecko na pogrzeb',
    'odzież żałobna',
  ],
  openGraph: {
    title: 'Jak Się Ubrać na Pogrzeb? Kobieta, Mężczyzna, Dziecko',
    description:
      'Kompletny przewodnik po stroju na pogrzeb dla kobiet, mężczyzn i dzieci.',
    url: `${SITE_URL}/poradnik/jak-sie-ubrac-na-pogrzeb-kobieta-mezczyzna-dziecko`,
    type: 'article',
  },
  ...generateCanonicalMetadata('/poradnik/jak-sie-ubrac-na-pogrzeb-kobieta-mezczyzna-dziecko'),
}

export default function JakSieUbracNaPogrzebPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-playfair font-medium text-white">
                Jak Się Ubrać na Pogrzeb?
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Odpowiedni strój na pogrzeb powinien wyrażać szacunek, ale też zapewniać komfort.
                Poniżej znajdziesz proste zasady dla kobiet, mężczyzn i dzieci.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-xl text-white font-medium">Kobieta</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li>Stonowana sukienka lub garsonka</li>
                    <li>Ciemne kolory: czarny, grafit, granat</li>
                    <li>Skromne dodatki i obuwie</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-xl text-white font-medium">Mężczyzna</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li>Ciemny garnitur lub marynarka i spodnie</li>
                    <li>Jasna koszula, stonowany krawat</li>
                    <li>Czarne lub ciemne buty</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-xl text-white font-medium">Dziecko</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li>Ubranie schludne i wygodne</li>
                    <li>Spokojna, nienachalna kolorystyka</li>
                    <li>Bez formalnego przymusu jak u dorosłych</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/10 border border-primary/30">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-playfair text-white">Czego unikać</h2>
                <ul className="text-gray-300 space-y-2">
                  <li>Zbyt jaskrawych kolorów i wzorów</li>
                  <li>Stroju sportowego lub bardzo casualowego</li>
                  <li>Wyrazistej biżuterii i krzykliwych dodatków</li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/asortyment/odziez-lodz">Zobacz odzież żałobną w Łodzi</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 hover:bg-white/10">
                <Link href="/poradnik/w-co-ubrac-zmarlego-na-pogrzeb">
                  W co ubrać zmarłego na pogrzeb
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
