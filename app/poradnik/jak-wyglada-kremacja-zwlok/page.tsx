import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, Clock, BookOpen, Flame, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Jak Wygląda Kremacja Zwłok? Proces Krok Po Kroku | Nekrolog Łódź',
  description: 'Szczegółowy opis procesu kremacji zwłok. Dowiedz się, jak przebiega kremacja, ile trwa i co dzieje się podczas tego procesu. Informacje w sposób edukacyjny i pełen szacunku.',
  keywords: [
    'kremacja zwłok',
    'jak wygląda kremacja',
    'proces kremacji',
    'kremacja krok po kroku',
    'krematorium',
    'spalanie zwłok',
    'kremacja opis',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/jak-wyglada-kremacja-zwlok`,
  },
  openGraph: {
    title: 'Jak Wygląda Kremacja Zwłok? Proces Krok Po Kroku',
    description: 'Edukacyjny przewodnik o procesie kremacji - wyjaśniamy wszystkie etapy w sposób pełen szacunku.',
    url: `${SITE_URL}/poradnik/jak-wyglada-kremacja-zwlok`,
    type: 'article',
  },
}

export default function KremacjaZwlokPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Ile czasu trwa kremacja zwłok?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Proces kremacji trwa zazwyczaj od 2 do 3 godzin, w zależności od budowy ciała zmarłego. Po kremacji następuje okres schładzania pieców, a następnie zbieranie i przetwarzanie szczątków, co łącznie może zająć od 4 do 6 godzin.',
        },
      },
      {
        '@type': 'Question',
        name: 'W jakiej temperaturze odbywa się kremacja?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kremacja odbywa się w temperaturze od 800 do 1000 stopni Celsjusza. Tak wysoka temperatura zapewnia całkowite spalenie ciała i pozostawienie jedynie szczątków kostnych, które następnie są przetwarzane na prochy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy podczas kremacji spala się trumna?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, trumna jest spalana razem ze zwłokami. Do kremacji używa się specjalnych trumien wykonanych z materiałów łatwopalnych, bez metalowych elementów. Trumna musi spełniać określone normy kremacyjne.',
        },
      },
      {
        '@type': 'Question',
        name: 'Co zostaje po kremacji?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Po kremacji pozostają szczątki kostne, które są następnie przetwarzane na drobny proszek - prochy. Masa prochów wynosi zazwyczaj od 2 do 4 kilogramów. Prochy są umieszczane w urnie i przekazywane rodzinie.',
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
              Jak Wygląda Kremacja Zwłok?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Kremacja to coraz popularniejsza forma pochówku w Polsce. W tym artykule wyjaśniamy szczegółowo, 
              jak przebiega proces kremacji - w sposób edukacyjny, pełen szacunku i bez tajemnic.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Czym Jest Kremacja?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Kremacja to proces termicznego przetworzenia zwłok w specjalnym piecu kremacyjnym. 
                    W wyniku kremacji ciało zostaje przekształcone w prochy (szczątki kostne), które następnie 
                    są umieszczane w urnie.
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-medium text-white mb-3">Podstawowe Informacje:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Kremacja odbywa się w specjalnie do tego przeznaczonym krematorium</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Proces jest przeprowadzany z pełnym szacunkiem dla zmarłego</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Kremacja jest zgodna z prawem polskim i akceptowana przez Kościół katolicki</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Po kremacji rodzina otrzymuje urnę z prochami</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Flame className="w-8 h-8 text-primary" />
                Proces Kremacji Krok Po Kroku
              </h2>
              
              <div className="space-y-6">
                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Przygotowanie Przed Kremacją</h3>
                        <p className="text-gray-300 mb-3">
                          Przed kremacją ciało zmarłego jest przygotowywane przez personel zakładu pogrzebowego. 
                          Obejmuje to:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Umycie i ubranie ciała zgodnie z życzeniem rodziny</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Usunięcie przedmiotów metalowych (biżuteria, rozruszniki serca)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Umieszczenie ciała w specjalnej trumnie kremacyjnej</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Identyfikacja - przypisanie numeru identyfikacyjnego</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Ceremonia Pożegnania (Opcjonalna)</h3>
                        <p className="text-gray-300 mb-3">
                          Przed kremacją rodzina może zorganizować ceremonię pożegnania w kaplicy krematorium. 
                          Ceremonia może obejmować:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Nabożeństwo religijne lub świeckie</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Pożegnanie przy otwartej lub zamkniętej trumnie</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Oprawę muzyczną</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Przemówienia i wspomnienia</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Wprowadzenie do Pieca Kremacyjnego</h3>
                        <p className="text-gray-300 mb-3">
                          Po ceremonii trumna jest transportowana do pieca kremacyjnego. W tym momencie:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Trumna jest umieszczana w specjalnym piecu kremacyjnym</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Każda kremacja odbywa się indywidualnie - jedna osoba na raz</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Numer identyfikacyjny towarzyszy ciału przez cały proces</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Proces jest monitorowany przez wykwalifikowany personel</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xl">4</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Proces Kremacji</h3>
                        <p className="text-gray-300 mb-3">
                          Właściwy proces kremacji przebiega w następujący sposób:
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-3">
                          <p className="text-gray-300 mb-2">
                            <strong className="text-white">Temperatura:</strong> 800-1000°C
                          </p>
                          <p className="text-gray-300 mb-2">
                            <strong className="text-white">Czas trwania:</strong> 2-3 godziny
                          </p>
                          <p className="text-gray-300">
                            <strong className="text-white">Proces:</strong> Ciało i trumna są całkowicie spalone
                          </p>
                        </div>
                        <p className="text-gray-300 mb-3">
                          Podczas kremacji:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Trumna i ciało są poddawane działaniu bardzo wysokiej temperatury</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Tkanki miękkie ulegają całkowitemu spaleniu</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Pozostają jedynie szczątki kostne</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Nowoczesne piece kremacyjne są wyposażone w filtry oczyszczające spaliny</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xl">5</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Schładzanie i Zbieranie Szczątków</h3>
                        <p className="text-gray-300 mb-3">
                          Po zakończeniu kremacji następuje:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Okres schładzania pieców (około 1-2 godziny)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Ostrożne zbieranie szczątków kostnych</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Usunięcie ewentualnych metalowych elementów (np. endoprotezy)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Weryfikacja numeru identyfikacyjnego</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xl">6</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Przetwarzanie na Prochy</h3>
                        <p className="text-gray-300 mb-3">
                          Szczątki kostne są następnie przetwarzane:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Szczątki są umieszczane w specjalnym urządzeniu (kremulatorze)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Kości są rozdrabniane na drobny, jednorodny proszek</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Prochy mają konsystencję drobnego piasku</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Masa prochów wynosi zazwyczaj 2-4 kg</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xl">7</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Umieszczenie w Urnie i Przekazanie Rodzinie</h3>
                        <p className="text-gray-300 mb-3">
                          Ostatnim etapem jest:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Umieszczenie prochów w urnie wybranej przez rodzinę</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Zapieczętowanie urny</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Dołączenie dokumentu potwierdzającego kremację</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Przekazanie urny rodzinie lub zakładowi pogrzebowemu</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-primary" />
                Ile Trwa Cały Proces?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Sama Kremacja</h3>
                      <p className="text-gray-300">2-3 godziny (w zależności od budowy ciała)</p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Schładzanie</h3>
                      <p className="text-gray-300">1-2 godziny</p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Przetwarzanie i Pakowanie</h3>
                      <p className="text-gray-300">30-60 minut</p>
                    </div>
                    
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Łączny Czas</h3>
                      <p className="text-gray-300">
                        <strong className="text-white">4-6 godzin</strong> od momentu wprowadzenia do pieca do przekazania urny
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mt-6">
                    Rodzina zazwyczaj odbiera urnę następnego dnia po kremacji, co daje czas na załatwienie 
                    wszystkich formalności i przygotowanie urny.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Bezpieczeństwo i Godność Procesu
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Kremacja jest przeprowadzana z najwyższym szacunkiem dla zmarłego i zgodnie z surowymi 
                    standardami bezpieczeństwa i higieny.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Gwarancje Jakości:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Indywidualna kremacja</strong> - tylko jedna osoba na raz</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">System identyfikacji</strong> - numer towarzyszy ciału przez cały proces</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Wykwalifikowany personel</strong> - przeszkoleni operatorzy pieców</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Nowoczesne urządzenia</strong> - piece spełniające najwyższe normy</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Ochrona środowiska</strong> - zaawansowane systemy filtracji</span>
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
                      Ile czasu trwa kremacja zwłok?
                    </h3>
                    <p className="text-gray-300">
                      Proces kremacji trwa zazwyczaj od 2 do 3 godzin, w zależności od budowy ciała zmarłego. 
                      Po kremacji następuje okres schładzania pieców, a następnie zbieranie i przetwarzanie szczątków, 
                      co łącznie może zająć od 4 do 6 godzin.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      W jakiej temperaturze odbywa się kremacja?
                    </h3>
                    <p className="text-gray-300">
                      Kremacja odbywa się w temperaturze od 800 do 1000 stopni Celsjusza. Tak wysoka temperatura 
                      zapewnia całkowite spalenie ciała i pozostawienie jedynie szczątków kostnych, które następnie 
                      są przetwarzane na prochy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy podczas kremacji spala się trumna?
                    </h3>
                    <p className="text-gray-300">
                      Tak, trumna jest spalana razem ze zwłokami. Do kremacji używa się specjalnych trumien wykonanych 
                      z materiałów łatwopalnych, bez metalowych elementów. Trumna musi spełniać określone normy kremacyjne.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Co zostaje po kremacji?
                    </h3>
                    <p className="text-gray-300">
                      Po kremacji pozostają szczątki kostne, które są następnie przetwarzane na drobny proszek - prochy. 
                      Masa prochów wynosi zazwyczaj od 2 do 4 kilogramów. Prochy są umieszczane w urnie i przekazywane rodzinie.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy można być obecnym podczas kremacji?
                    </h3>
                    <p className="text-gray-300">
                      W większości krematorium nie ma możliwości obserwowania samego procesu kremacji ze względów 
                      technicznych i emocjonalnych. Rodzina może jednak uczestniczyć w ceremonii pożegnania przed 
                      kremacją oraz w momencie wprowadzenia trumny do pieca.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy kremacja jest zgodna z wiarą katolicką?
                    </h3>
                    <p className="text-gray-300">
                      Tak, Kościół katolicki akceptuje kremację od 1963 roku. Ważne jest jednak, aby prochy zostały 
                      pochowane na cmentarzu lub w kolumbarium, a nie rozproszone czy przechowywane w domu na stałe.
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
                  Potrzebujesz Pomocy w Organizacji Kremacji?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Organizujemy kremację w Łodzi - bez kosztów z góry, z pełnym wsparciem
                </p>
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Rozliczenie z zasiłkiem pogrzebowym
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
              <Link href="/poradnik/czy-urne-z-prochami-mozna-trzymac-w-domu" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Czy Urnę z Prochami Można Trzymać w Domu?</h3>
                    <p className="text-gray-400 text-sm">Prawo i praktyka przechowywania urny</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/uslugi/krematorium-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Krematorium Łódź</h3>
                    <p className="text-gray-400 text-sm">Organizacja kremacji w Łodzi</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/asortyment/urny-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Urny Pogrzebowe</h3>
                    <p className="text-gray-400 text-sm">Wybór urny na prochy</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/co-zrobic-po-smierci" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Co Zrobić Po Śmierci</h3>
                    <p className="text-gray-400 text-sm">Kompletny przewodnik krok po kroku</p>
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
