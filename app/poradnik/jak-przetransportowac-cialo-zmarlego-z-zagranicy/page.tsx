import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, Plane, Globe, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Jak Przetransportować Ciało Zmarłego z Zagranicy? Repatriacja Zwłok | Nekrolog Łódź',
  description: 'Przewodnik krok po kroku o transporcie zmarłego z zagranicy do Polski. Dokumenty, procedury, terminy i praktyczne porady dla rodzin w trudnej sytuacji.',
  keywords: [
    'transport zmarłego z zagranicy',
    'repatriacja zwłok',
    'transport z zagranicy do polski',
    'śmierć za granicą',
    'przewóz zwłok międzynarodowy',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/jak-przetransportowac-cialo-zmarlego-z-zagranicy`,
  },
  openGraph: {
    title: 'Jak Przetransportować Ciało Zmarłego z Zagranicy?',
    description: 'Kompleksowy przewodnik o repatriacji zwłok - procedury, dokumenty i wsparcie dla rodzin.',
    url: `${SITE_URL}/poradnik/jak-przetransportowac-cialo-zmarlego-z-zagranicy`,
    type: 'article',
  },
}

export default function TransportZZagranPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Ile kosztuje transport zmarłego z zagranicy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Koszt transportu zmarłego z zagranicy zależy od kraju, odległości i rodzaju transportu. Transport lotniczy z Europy Zachodniej kosztuje zazwyczaj 5000-10000 zł, z krajów pozaeuropejskich 10000-20000 zł. Transport drogowy z krajów sąsiednich to koszt 3000-6000 zł. Do tego doliczyć należy koszty balsamowania, trumny transportowej i formalności.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ile czasu zajmuje transport zmarłego z zagranicy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Transport lotniczy zajmuje zazwyczaj 5-10 dni od zgłoszenia, w tym czas na załatwienie formalności (3-7 dni) i sam transport (1-3 dni). Transport drogowy z krajów sąsiednich może być szybszy - 3-7 dni łącznie. W pilnych przypadkach możliwe jest przyspieszenie procedur.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jakie dokumenty są potrzebne do repatriacji zwłok?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Do repatriacji zwłok potrzebne są: paszport zmarłego, międzynarodowa karta zgonu, zaświadczenie o zabalsamowaniu, zezwolenie na wywóz z kraju zgonu, zezwolenie na wwóz do Polski, zaświadczenie o hermetyczności trumny, tłumaczenia przysięgłe dokumentów. Zakład pogrzebowy pomoże w kompletowaniu dokumentacji.',
        },
      },
    ],
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative pt-20 pb-12 bg-gradient-to-b from-black via-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/poradnik/co-zrobic-po-smierci"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-6"
            >
              <BookOpen className="w-4 h-4" />
              Poradnik pogrzebowy
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
              Jak Przetransportować Ciało Zmarłego z Zagranicy?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Śmierć bliskiej osoby za granicą to trudna sytuacja wymagająca szybkiego działania. W tym przewodniku 
              wyjaśniamy krok po kroku, jak zorganizować transport zmarłego do Polski i jakie formalności należy załatwić.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Pierwsze Kroki Po Śmierci Za Granicą
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Gdy osoba bliska umiera za granicą, ważne jest zachowanie spokoju i podjęcie odpowiednich kroków. 
                    Oto co należy zrobić w pierwszej kolejności:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Skontaktuj się z Konsulatem</h3>
                        <p className="text-gray-300">
                          Natychmiast powiadom polską placówkę konsularną w danym kraju. Konsulat pomoże w kontakcie 
                          z lokalnymi władzami i udzieli informacji o procedurach.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Zgłoś się do Zakładu Pogrzebowego</h3>
                        <p className="text-gray-300">
                          Skontaktuj się z polskim zakładem pogrzebowym specjalizującym się w repatriacji. Doświadczony 
                          zakład poprowadzi Cię przez cały proces i załatwi formalności.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Zbierz Dokumenty Zmarłego</h3>
                        <p className="text-gray-300">
                          Przygotuj paszport zmarłego, dokumenty ubezpieczeniowe (jeśli posiadał ubezpieczenie 
                          podróżne) oraz wszelkie inne dokumenty tożsamości.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Sprawdź Ubezpieczenie</h3>
                        <p className="text-gray-300">
                          Jeśli zmarły posiadał ubezpieczenie podróżne lub ubezpieczenie na życie z klauzulą 
                          repatriacji, skontaktuj się z ubezpieczycielem - mogą pokryć koszty transportu.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                Wymagane Dokumenty
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Repatriacja zwłok wymaga kompletu dokumentów zarówno z kraju, w którym nastąpił zgon, 
                    jak i z Polski.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Dokumenty z Kraju Zgonu:</h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Międzynarodowa karta zgonu</strong> - wystawiana przez 
                      lekarza w kraju zgonu</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Akt zgonu</strong> - wydawany przez lokalny urząd stanu 
                      cywilnego</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Zaświadczenie o zabalsamowaniu</strong> - wymagane przez 
                      większość krajów</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Zezwolenie na wywóz zwłok</strong> - wydawane przez 
                      lokalne władze sanitarne</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Zaświadczenie o hermetyczności trumny</strong> - potwierdzenie, 
                      że trumna spełnia wymogi transportowe</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Protokół oględzin</strong> - jeśli śmierć nastąpiła 
                      w niewyjaśnionych okolicznościach</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium text-white mb-4">Dokumenty Polskie:</h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Paszport zmarłego</strong> - niezbędny do identyfikacji</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Zezwolenie na wwóz zwłok</strong> - wydawane przez 
                      Państwowego Powiatowego Inspektora Sanitarnego w Polsce</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Tłumaczenia przysięgłe</strong> - wszystkie dokumenty 
                      zagraniczne muszą być przetłumaczone</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Dokumenty miejsca pochówku</strong> - potwierdzenie 
                      rezerwacji miejsca na cmentarzu w Polsce</span>
                    </li>
                  </ul>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-gray-300">
                      <strong className="text-white">Ważne:</strong> Zakład pogrzebowy specjalizujący się w repatriacji 
                      pomoże w kompletowaniu wszystkich dokumentów i będzie koordynował proces z zakładem zagranicznym.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Plane className="w-8 h-8 text-primary" />
                Rodzaje Transportu
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Transport Lotniczy</h3>
                      <p className="text-gray-300 mb-4">
                        Najczęściej wybierany sposób transportu z odległych krajów. Wymaga specjalnej cynkowej 
                        trumny transportowej.
                      </p>
                      
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-medium text-white mb-2">Procedura:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Balsamowanie zwłok (obowiązkowe)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Umieszczenie w hermetycznej trumnie cynkowej</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Trumna cynkowa umieszczona w drewnianej skrzyni transportowej</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Transport samolotem cargo lub w specjalnym przedziale bagażowym</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Odbiór na lotnisku w Polsce przez zakład pogrzebowy</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">Czas realizacji:</p>
                          <p className="text-white font-medium">5-10 dni</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">Koszt orientacyjny:</p>
                          <p className="text-white font-medium">5000-20000 zł</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Transport Drogowy</h3>
                      <p className="text-gray-300 mb-4">
                        Opcja dla krajów sąsiednich (Niemcy, Czechy, Słowacja, Ukraina, Białoruś, Litwa). 
                        Tańsza i często szybsza niż transport lotniczy.
                      </p>
                      
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                        <h4 className="text-lg font-medium text-white mb-2">Procedura:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Przygotowanie ciała (balsamowanie zalecane, ale nie zawsze obowiązkowe)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Umieszczenie w odpowiedniej trumnie</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Transport specjalnym pojazdem pogrzebowym</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Przekazanie w miejscu docelowym w Polsce</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">Czas realizacji:</p>
                          <p className="text-white font-medium">3-7 dni</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">Koszt orientacyjny:</p>
                          <p className="text-white font-medium">3000-8000 zł</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-primary" />
                Harmonogram Działań
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Repatriacja zwłok to proces wymagający czasu. Oto typowy harmonogram:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dzień 1-2: Pierwsze Formalności</h3>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Kontakt z konsulatem</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zgłoszenie do zakładu pogrzebowego</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Uzyskanie karty zgonu</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dzień 3-5: Dokumentacja</h3>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Uzyskanie aktu zgonu</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Tłumaczenia przysięgłe dokumentów</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zezwolenie na wywóz z kraju zgonu</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zezwolenie na wwóz do Polski</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dzień 5-7: Przygotowanie do Transportu</h3>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Balsamowanie zwłok</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Przygotowanie trumny transportowej</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Rezerwacja transportu</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dzień 8-10: Transport</h3>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Transport do Polski</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Odprawa celna (jeśli dotyczy)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Przekazanie rodzinie w Polsce</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Uwaga:</strong> Podane terminy są orientacyjne. W pilnych 
                      przypadkach możliwe jest przyspieszenie procedur, ale wymaga to dodatkowych kosztów i 
                      współpracy wszystkich instytucji.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Koszty Repatriacji
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Koszty repatriacji zwłok są znaczne i zależą od wielu czynników. Oto orientacyjne koszty:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Transport Lotniczy z Europy Zachodniej</h3>
                      <p className="text-gray-300">5000-10000 zł</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Transport Lotniczy z Krajów Pozaeuropejskich</h3>
                      <p className="text-gray-300">10000-20000 zł</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Transport Drogowy z Krajów Sąsiednich</h3>
                      <p className="text-gray-300">3000-6000 zł</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-4">Dodatkowe Koszty:</h3>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Balsamowanie: 1000-2000 zł</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Trumna cynkowa transportowa: 2000-5000 zł</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Formalności i dokumenty: 500-1500 zł</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Tłumaczenia przysięgłe: 200-500 zł</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Usługi zakładu zagranicznego: 1000-3000 zł</span>
                    </li>
                  </ul>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">Ubezpieczenie Podróżne</h4>
                    <p className="text-gray-300">
                      Jeśli zmarły posiadał ubezpieczenie podróżne z klauzulą repatriacji, ubezpieczyciel może 
                      pokryć całość lub część kosztów transportu. Sprawdź warunki polisy i skontaktuj się z 
                      ubezpieczycielem jak najszybciej.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Jak Możemy Pomóc
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    W Zakładzie Pogrzebowym Nekrolog Łódź mamy doświadczenie w organizacji repatriacji zwłok 
                    z całego świata. Oferujemy kompleksową pomoc:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Koordynacja z zakładem pogrzebowym za granicą</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Pomoc w kompletowaniu dokumentów</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Kontakt z konsulatem i władzami sanitarnymi</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Organizacja transportu lotniczego lub drogowego</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Odbiór na lotnisku lub granicy</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Organizacja pogrzebu w Polsce</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Wsparcie i informowanie rodziny na każdym etapie</span>
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
                      Ile kosztuje transport zmarłego z zagranicy?
                    </h3>
                    <p className="text-gray-300">
                      Koszt transportu zmarłego z zagranicy zależy od kraju, odległości i rodzaju transportu. Transport 
                      lotniczy z Europy Zachodniej kosztuje zazwyczaj 5000-10000 zł, z krajów pozaeuropejskich 
                      10000-20000 zł. Transport drogowy z krajów sąsiednich to koszt 3000-6000 zł. Do tego doliczyć 
                      należy koszty balsamowania, trumny transportowej i formalności.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Ile czasu zajmuje transport zmarłego z zagranicy?
                    </h3>
                    <p className="text-gray-300">
                      Transport lotniczy zajmuje zazwyczaj 5-10 dni od zgłoszenia, w tym czas na załatwienie 
                      formalności (3-7 dni) i sam transport (1-3 dni). Transport drogowy z krajów sąsiednich może 
                      być szybszy - 3-7 dni łącznie. W pilnych przypadkach możliwe jest przyspieszenie procedur.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Jakie dokumenty są potrzebne do repatriacji zwłok?
                    </h3>
                    <p className="text-gray-300">
                      Do repatriacji zwłok potrzebne są: paszport zmarłego, międzynarodowa karta zgonu, zaświadczenie 
                      o zabalsamowaniu, zezwolenie na wywóz z kraju zgonu, zezwolenie na wwóz do Polski, zaświadczenie 
                      o hermetyczności trumny, tłumaczenia przysięgłe dokumentów. Zakład pogrzebowy pomoże w 
                      kompletowaniu dokumentacji.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy ubezpieczenie pokrywa koszty repatriacji?
                    </h3>
                    <p className="text-gray-300">
                      Jeśli zmarły posiadał ubezpieczenie podróżne z klauzulą repatriacji, ubezpieczyciel może pokryć 
                      całość lub część kosztów transportu. Należy jak najszybciej skontaktować się z ubezpieczycielem 
                      i sprawdzić warunki polisy. Niektóre ubezpieczenia na życie również zawierają taką klauzulę.
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
                  Potrzebujesz Pomocy w Repatriacji Zwłok?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Zajmiemy się wszystkim - od formalności po transport do Polski
                </p>
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Doświadczenie w repatriacji międzynarodowej
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
              <Link href="/poradnik/przewoz-zwlok" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Przewóz Zwłok</h3>
                    <p className="text-gray-400 text-sm">Transport krajowy i międzynarodowy</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/jak-zgodnie-z-przepisami-przewozic-zwloki" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Przepisy Przewozu Zwłok</h3>
                    <p className="text-gray-400 text-sm">Regulacje prawne</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Dokumenty do Pogrzebu</h3>
                    <p className="text-gray-400 text-sm">Kompletna lista</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/co-zrobic-po-smierci" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Co Zrobić Po Śmierci</h3>
                    <p className="text-gray-400 text-sm">Kompletny przewodnik</p>
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
