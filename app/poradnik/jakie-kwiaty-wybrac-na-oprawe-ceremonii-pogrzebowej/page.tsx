import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, Flower2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Jakie Kwiaty Wybrać na Oprawę Ceremonii Pogrzebowej? | Nekrolog Łódź',
  description: 'Przewodnik po kwiatach pogrzebowych - symbolika, znaczenie kolorów i praktyczne porady. Dowiedz się, jakie kwiaty wybrać na pogrzeb i kremację.',
  keywords: ['kwiaty na pogrzeb', 'kwiaty pogrzebowe', 'symbolika kwiatów', 'wiązanki pogrzebowe', 'wieńce pogrzebowe'],
  alternates: {
    canonical: `${SITE_URL}/poradnik/jakie-kwiaty-wybrac-na-oprawe-ceremonii-pogrzebowej`,
  },
  openGraph: {
    title: 'Jakie Kwiaty Wybrać na Oprawę Ceremonii Pogrzebowej?',
    description: 'Kompleksowy przewodnik po kwiatach pogrzebowych - symbolika, kolory i praktyczne porady.',
    url: `${SITE_URL}/poradnik/jakie-kwiaty-wybrac-na-oprawe-ceremonii-pogrzebowej`,
    type: 'article',
  },
}

export default function KwiatyPogrzebowePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Jakie kwiaty są odpowiednie na pogrzeb?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Na pogrzeb najczęściej wybiera się: róże (symbol miłości i szacunku), lilie (czystość i niewinność), goździki (pamięć), chryzantemy (tradycyjnie pogrzebowe), gerbery (radość życia). Kolory: biel, czerwień, róż, fiolet. Unika się jaskrawych, wesołych kolorów, chyba że taka była wola zmarłego.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy na kremację wybiera się inne kwiaty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Na kremację często wybiera się mniejsze kompozycje kwiatowe lub pojedyncze kwiaty, które można położyć na trumnie. Unika się dużych wieńców i wiązanek z metalowymi elementami. Popularne są bukiety róż, tulipanów lub lilii.',
        },
      },
    ],
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative pt-20 pb-12 bg-gradient-to-b from-black via-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/poradnik/co-zrobic-po-smierci" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-6">
              <BookOpen className="w-4 h-4" />
              Poradnik pogrzebowy
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
              Jakie Kwiaty Wybrać na Oprawę Ceremonii Pogrzebowej?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Kwiaty są ważnym elementem ceremonii pogrzebowej. W tym przewodniku wyjaśniamy symbolikę kwiatów, 
              znaczenie kolorów i podpowiadamy, jak wybrać odpowiednią oprawę kwiatową.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Flower2 className="w-8 h-8 text-primary" />
                Symbolika Kwiatów
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Każdy kwiat ma swoje znaczenie symboliczne. Oto najpopularniejsze kwiaty pogrzebowe i ich symbolika:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Róże</h3>
                      <p className="text-gray-300 mb-2">Symbol miłości, szacunku i pamięci.</p>
                      <ul className="space-y-1 ml-4">
                        <li className="text-gray-300"><span className="text-primary">•</span> Czerwone - głęboka miłość</li>
                        <li className="text-gray-300"><span className="text-primary">•</span> Białe - czystość, niewinność</li>
                        <li className="text-gray-300"><span className="text-primary">•</span> Różowe - wdzięczność, pamięć</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Lilie</h3>
                      <p className="text-gray-300">Symbol czystości, niewinności i odnowy duchowej. Często wybierane na pogrzeby młodych osób.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Goździki</h3>
                      <p className="text-gray-300">Symbol pamięci i wierności. Tradycyjnie pogrzebowe, szczególnie w Polsce.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Chryzantemy</h3>
                      <p className="text-gray-300">W Polsce tradycyjnie kojarzone z cmentarzami i Dniem Wszystkich Świętych. Symbol pamięci.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Gerbery</h3>
                      <p className="text-gray-300">Symbol radości życia i optymizmu. Odpowiednie, gdy chcemy podkreślić pozytywne wspomnienia.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Znaczenie Kolorów
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Biel</h3>
                      <p className="text-gray-300">Czystość, niewinność, pokój. Uniwersalny kolor pogrzebowy, odpowiedni zawsze.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Czerwień</h3>
                      <p className="text-gray-300">Miłość, szacunek, pamięć. Odpowiedni dla najbliższych osób.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Róż</h3>
                      <p className="text-gray-300">Wdzięczność, delikatność, czułość. Często wybierany na pogrzeby kobiet.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Fiolet</h3>
                      <p className="text-gray-300">Godność, szacunek, duchowość. Tradycyjnie pogrzebowy.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Żółty</h3>
                      <p className="text-gray-300">Przyjaźń, ciepło. Można wybrać, jeśli zmarły lubił ten kolor.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Rodzaje Kompozycji Kwiatowych
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Wieniec</h3>
                      <p className="text-gray-300 mb-2">Tradycyjna forma, symbol wieczności. Zazwyczaj składany przez najbliższą rodzinę.</p>
                      <p className="text-sm text-gray-400">Koszt: 300-800 zł</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Wiązanka</h3>
                      <p className="text-gray-300 mb-2">Elegancka kompozycja na podstawie. Popularna forma od dalszej rodziny i znajomych.</p>
                      <p className="text-sm text-gray-400">Koszt: 200-500 zł</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Bukiet</h3>
                      <p className="text-gray-300 mb-2">Prostsza forma, odpowiednia na kremację. Można położyć na trumnie.</p>
                      <p className="text-sm text-gray-400">Koszt: 100-300 zł</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Krzyż z Kwiatów</h3>
                      <p className="text-gray-300 mb-2">Forma religijna, symbol wiary. Często wybierana przez rodzinę.</p>
                      <p className="text-sm text-gray-400">Koszt: 250-600 zł</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Kwiaty na Kremację vs Pochówek Tradycyjny
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Kremacja</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Mniejsze kompozycje</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Bukiety zamiast wieńców</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Bez metalowych elementów</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Pojedyncze kwiaty</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Pochówek Tradycyjny</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Wieńce i wiązanki</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Większe kompozycje</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Dekoracje na grób</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Kwiaty doniczkowe</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Praktyczne Porady
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Zamów kwiaty z wyprzedzeniem (2-3 dni przed pogrzebem)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Poinformuj kwiaciarnię o rodzaju ceremonii (pogrzeb/kremacja)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Dodaj wstążkę z dedykacją</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Zakład pogrzebowy może pomóc w zamówieniu kwiatów</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Uwzględnij preferencje zmarłego (ulubione kwiaty/kolory)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Najczęściej Zadawane Pytania
              </h2>
              
              <div className="space-y-4">
                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Jakie kwiaty są odpowiednie na pogrzeb?
                    </h3>
                    <p className="text-gray-300">
                      Na pogrzeb najczęściej wybiera się: róże (symbol miłości i szacunku), lilie (czystość i niewinność), 
                      goździki (pamięć), chryzantemy (tradycyjnie pogrzebowe), gerbery (radość życia). Kolory: biel, 
                      czerwień, róż, fiolet. Unika się jaskrawych, wesołych kolorów, chyba że taka była wola zmarłego.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy na kremację wybiera się inne kwiaty?
                    </h3>
                    <p className="text-gray-300">
                      Na kremację często wybiera się mniejsze kompozycje kwiatowe lub pojedyncze kwiaty, które można 
                      położyć na trumnie. Unika się dużych wieńców i wiązanek z metalowymi elementami. Popularne są 
                      bukiety róż, tulipanów lub lilii.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Ile kosztują kwiaty na pogrzeb?
                    </h3>
                    <p className="text-gray-300">
                      Koszty zależą od rodzaju kompozycji: wieniec 300-800 zł, wiązanka 200-500 zł, bukiet 100-300 zł, 
                      krzyż z kwiatów 250-600 zł. Ceny zależą od wielkości, rodzaju kwiatów i sezonu.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-black/90 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-playfair font-medium text-white mb-4">
                  Potrzebujesz Pomocy w Organizacji Pogrzebu?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Pomożemy również w zamówieniu kwiatów
                </p>
                <a href="tel:+48602274661" className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition">
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Kompleksowa pomoc
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-medium text-white mb-6">
              Powiązane Artykuły
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/poradnik/co-zrobic-po-smierci" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Co Zrobić Po Śmierci</h3>
                    <p className="text-gray-400 text-sm">Kompletny przewodnik</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/asortyment/kwiaty-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Kwiaty Pogrzebowe</h3>
                    <p className="text-gray-400 text-sm">Nasza oferta</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/jak-wybrac-zaklad-do-organizacji-pogrzebu" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Wybór Zakładu Pogrzebowego</h3>
                    <p className="text-gray-400 text-sm">Praktyczny przewodnik</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/uslugi-pogrzebowe-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Usługi Pogrzebowe</h3>
                    <p className="text-gray-400 text-sm">Pełna oferta</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
