import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import FAQSchema, { FAQItem } from '@/components/structured-data/FAQSchema'
import { generateCanonicalMetadata } from '@/lib/canonical'
import { SITE_URL } from '@/lib/constants'

const faqs: FAQItem[] = [
  {
    question: 'Jakie buty są odpowiednie na pogrzeb?',
    answer:
      'Najlepsze są klasyczne, zamknięte buty w ciemnym kolorze. Powinny być czyste, zadbane i wygodne, bo ceremonia często trwa kilka godzin.',
  },
  {
    question: 'Czy można iść na pogrzeb w sneakersach?',
    answer:
      'Zasadniczo nie jest to rekomendowane. Jeśli sytuacja wymaga kompromisu, wybierz możliwie najbardziej stonowane i czyste obuwie o prostym wyglądzie.',
  },
  {
    question: 'Czy obcasy są odpowiednie na pogrzeb?',
    answer:
      'Tak, ale najlepiej umiarkowane i stabilne. Ważne, aby obuwie było komfortowe na cały przebieg ceremonii oraz drogę na cmentarzu.',
  },
]

export const metadata: Metadata = {
  title: 'Jakie Buty na Pogrzeb i Czego Unikać? Praktyczne Zasady | Nekrolog Łódź',
  description:
    'Sprawdź, jakie buty na pogrzeb będą odpowiednie dla kobiet i mężczyzn. Praktyczne zasady, czego unikać i jak dobrać wygodne, eleganckie obuwie.',
  keywords: [
    'jakie buty na pogrzeb',
    'obuwie na pogrzeb',
    'jak się ubrać na pogrzeb',
    'strój żałobny',
    'odzież żałobna łódź',
  ],
  openGraph: {
    title: 'Jakie Buty na Pogrzeb i Czego Unikać?',
    description:
      'Praktyczny poradnik doboru obuwia na ceremonię pogrzebową.',
    url: `${SITE_URL}/poradnik/jakie-buty-na-pogrzeb-i-czego-unikac`,
    type: 'article',
  },
  ...generateCanonicalMetadata('/poradnik/jakie-buty-na-pogrzeb-i-czego-unikac'),
}

export default function JakieButyNaPogrzebPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium text-white">
              Jakie Buty na Pogrzeb i Czego Unikać?
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Obuwie na pogrzeb powinno być eleganckie, stonowane i wygodne. To drobny element,
              który mocno wpływa na cały odbiór stroju podczas ceremonii.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-playfair text-white">Rekomendowane</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li>Czarne lub ciemne półbuty</li>
                    <li>Klasyczne czółenka o stabilnym obcasie</li>
                    <li>Skórzane lub matowe wykończenie</li>
                    <li>Buty czyste i zadbane</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-2xl font-playfair text-white">Lepiej unikać</h2>
                  <ul className="text-gray-300 space-y-2">
                    <li>Sportowych modeli z dużym logo</li>
                    <li>Jasnych i krzykliwych kolorów</li>
                    <li>Bardzo wysokich, niestabilnych obcasów</li>
                    <li>Obuwia mocno zużytego</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/10 border border-primary/30">
              <CardContent className="p-6 space-y-3">
                <h2 className="text-2xl font-playfair text-white">Komfort ma znaczenie</h2>
                <p className="text-gray-300 leading-relaxed">
                  Uroczystość może obejmować kościół lub kaplicę, przejazd i cmentarz. Wybierz
                  obuwie, w którym przejdziesz całą ceremonię bez bólu i pośpiechu.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/asortyment/odziez-lodz">Sprawdź odzież i dodatki żałobne</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 hover:bg-white/10">
                <Link href="/poradnik/czy-na-pogrzeb-trzeba-ubrac-sie-na-czarno">
                  Czy na pogrzeb trzeba ubrać się na czarno?
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
