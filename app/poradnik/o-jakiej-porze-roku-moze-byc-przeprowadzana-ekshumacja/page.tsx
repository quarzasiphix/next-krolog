import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, Calendar, AlertTriangle, FileText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'O Jakiej Porze Roku Może Być Przeprowadzana Ekshumacja? | Nekrolog Łódź',
  description: 'Dowiedz się, kiedy prawnie można przeprowadzić ekshumację w Polsce. Wyjaśniamy ograniczenia sezonowe, wymogi sanitarne i procedury administracyjne.',
  keywords: [
    'ekshumacja',
    'ekshumacja zwłok',
    'kiedy można ekshumować',
    'pora roku ekshumacja',
    'przepisy ekshumacja',
    'ekshumacja polska',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/o-jakiej-porze-roku-moze-byc-przeprowadzana-ekshumacja`,
  },
  openGraph: {
    title: 'O Jakiej Porze Roku Może Być Przeprowadzana Ekshumacja?',
    description: 'Kompleksowy przewodnik o ekshumacji - przepisy prawne, ograniczenia sezonowe i wymagania administracyjne.',
    url: `${SITE_URL}/poradnik/o-jakiej-porze-roku-moze-byc-przeprowadzana-ekshumacja`,
    type: 'article',
  },
}

export default function EkshumacjaPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Kiedy można przeprowadzić ekshumację?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ekshumację można przeprowadzić przez cały rok, ale najczęściej odbywa się w okresie od kwietnia do października ze względu na warunki atmosferyczne. Zimą ekshumacja jest utrudniona przez zmarzniętą ziemię. Wymagane jest zezwolenie Państwowego Powiatowego Inspektora Sanitarnego oraz zgoda zarządcy cmentarza.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy są ograniczenia sezonowe dla ekshumacji?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nie ma prawnych zakazów sezonowych, ale praktyczne ograniczenia wynikają z warunków pogodowych. Zimą zmarzlina utrudnia prace ziemne. Latem wysokie temperatury mogą stanowić problem sanitarny. Najkorzystniejsze są wiosna i jesień - umiarkowane temperatury ułatwiają przeprowadzenie procedury.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ile czasu zajmuje uzyskanie zgody na ekshumację?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Procedura uzyskania zgody na ekshumację zajmuje zazwyczaj 2-4 tygodnie. Wymaga złożenia wniosku do Państwowego Powiatowego Inspektora Sanitarnego, uzyskania zgody zarządcy cmentarza oraz spełnienia wymogów sanitarnych. W uzasadnionych przypadkach procedura może być przyspieszona.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy ekshumacja wymaga zgody rodziny?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, ekshumacja wymaga zgody najbliższej rodziny zmarłego. Wyjątkiem są przypadki zarządzone przez prokuraturę lub sąd w ramach postępowania karnego lub cywilnego. W przypadku braku zgody wszystkich członków rodziny, sprawa może trafić do sądu.',
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
              O Jakiej Porze Roku Może Być Przeprowadzana Ekshumacja?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Ekshumacja to procedura wymagająca spełnienia wielu wymogów prawnych i sanitarnych. W tym artykule 
              wyjaśniamy, kiedy można ją przeprowadzić, jakie są ograniczenia sezonowe i co należy wiedzieć 
              o całej procedurze.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Czym Jest Ekshumacja?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Ekshumacja to prawnie uregulowana procedura polegająca na wydobyciu szczątków ludzkich z grobu. 
                    Może być przeprowadzona z różnych powodów - od przeniesienia zwłok na inny cmentarz, przez 
                    potrzeby śledcze, po konieczność likwidacji grobu.
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-white mb-3">Najczęstsze Przyczyny Ekshumacji:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Przeniesienie zwłok na inny cmentarz lub do innego grobu</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Potrzeby śledcze lub procesowe</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Likwidacja grobu po upływie okresu najmu</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Badania naukowe lub identyfikacyjne</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Prace budowlane lub modernizacja cmentarza</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-primary" />
                Ograniczenia Sezonowe
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Choć przepisy prawne nie zabraniają przeprowadzania ekshumacji o określonej porze roku, 
                    praktyczne ograniczenia wynikają z warunków atmosferycznych i wymogów sanitarnych.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Wiosna (Marzec - Maj)</h3>
                      <div className="space-y-2">
                        <p className="text-gray-300 mb-2">
                          <strong className="text-white">Zalety:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Umiarkowane temperatury ułatwiają prace</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Ziemia już nie jest zamarznięta</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Korzystne warunki sanitarne</span>
                          </li>
                        </ul>
                        <p className="text-gray-300 mt-3 mb-2">
                          <strong className="text-white">Wady:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Możliwe opady deszczu utrudniające prace</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Wilgotna ziemia może być trudniejsza w obróbce</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Lato (Czerwiec - Sierpień)</h3>
                      <div className="space-y-2">
                        <p className="text-gray-300 mb-2">
                          <strong className="text-white">Zalety:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Sucha ziemia łatwiejsza w obróbce</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Długie dni ułatwiają organizację prac</span>
                          </li>
                        </ul>
                        <p className="text-gray-300 mt-3 mb-2">
                          <strong className="text-white">Wady:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Wysokie temperatury mogą stanowić problem sanitarny</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Konieczność szczególnych środków ostrożności</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Trudniejsze warunki pracy dla personelu</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Jesień (Wrzesień - Listopad)</h3>
                      <div className="space-y-2">
                        <p className="text-gray-300 mb-2">
                          <strong className="text-white">Zalety:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Optymalne temperatury dla przeprowadzenia procedury</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Najkorzystniejsze warunki sanitarne</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Najczęściej wybierany okres przez rodziny</span>
                          </li>
                        </ul>
                        <p className="text-gray-300 mt-3 mb-2">
                          <strong className="text-white">Wady:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Pod koniec jesieni możliwe pierwsze przymrozki</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Krótsze dni mogą ograniczać czas prac</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Zima (Grudzień - Luty)</h3>
                      <div className="space-y-2">
                        <p className="text-gray-300 mb-2">
                          <strong className="text-white">Zalety:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Niskie temperatury korzystne sanitarnie</span>
                          </li>
                        </ul>
                        <p className="text-gray-300 mt-3 mb-2">
                          <strong className="text-white">Wady:</strong>
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Zmarzlina znacznie utrudnia prace ziemne</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Konieczność użycia specjalistycznego sprzętu</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Wyższe koszty ze względu na trudniejsze warunki</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Rzadko przeprowadzana poza pilnymi przypadkami</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Rekomendacja:</strong> Najkorzystniejszym okresem na 
                      przeprowadzenie ekshumacji jest wiosna (kwiecień-maj) oraz jesień (wrzesień-październik). 
                      W tych miesiącach warunki atmosferyczne i sanitarne są optymalne.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Wymagania Prawne i Administracyjne
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Ekshumacja wymaga spełnienia szeregu wymogów prawnych określonych w ustawie o cmentarzach 
                    i chowaniu zmarłych oraz przepisach sanitarnych.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Wymagane Dokumenty i Zgody:</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Wniosek o Ekshumację</h4>
                        <p className="text-gray-300">
                          Składany przez osobę uprawnioną (najbliższa rodzina, zarządca cmentarza, prokuratura) 
                          do Państwowego Powiatowego Inspektora Sanitarnego.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Zgoda Rodziny</h4>
                        <p className="text-gray-300">
                          Pisemna zgoda najbliższej rodziny zmarłego (małżonek, dzieci, rodzice). W przypadku 
                          braku zgody wszystkich uprawnionych, decyzję podejmuje sąd.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Zezwolenie Sanitarne</h4>
                        <p className="text-gray-300">
                          Wydawane przez Państwowego Powiatowego Inspektora Sanitarnego po sprawdzeniu, czy 
                          spełnione są wszystkie wymogi sanitarne i prawne.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Zgoda Zarządcy Cmentarza</h4>
                        <p className="text-gray-300">
                          Zarządca cmentarza musi wyrazić zgodę i ustalić termin oraz warunki przeprowadzenia 
                          ekshumacji.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Akt Zgonu</h4>
                        <p className="text-gray-300">
                          Kopia aktu zgonu osoby, której szczątki mają być ekshumowane.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">6</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Dokumenty Miejsca Pochówku</h4>
                        <p className="text-gray-300">
                          Jeśli szczątki mają być przeniesione, wymagane są dokumenty potwierdzające prawo 
                          do nowego miejsca pochówku.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                      Ważne Terminy
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Ekshumacja może być przeprowadzona najwcześniej po upływie 1 roku od pochówku 
                        (wyjątki: zarządzenie prokuratury lub sądu)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Procedura uzyskania zezwolenia trwa zazwyczaj 2-4 tygodnie</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Ekshumacja musi być przeprowadzona w godzinach ustalonych z zarządcą cmentarza</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Wymogi Sanitarne
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Ekshumacja musi być przeprowadzona zgodnie z rygorystycznymi wymogami sanitarnymi, 
                    aby zapewnić bezpieczeństwo zdrowotne.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Podstawowe Wymogi:</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Obecność przedstawiciela Państwowej Inspekcji Sanitarnej</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Użycie odpowiedniego sprzętu ochronnego przez personel</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Dezynfekcja miejsca ekshumacji</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Zabezpieczenie szczątków w odpowiedni sposób</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Utylizacja pozostałości zgodnie z przepisami</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Sporządzenie protokołu ekshumacji</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Przebieg Ekshumacji
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Ekshumacja jest przeprowadzana przez wykwalifikowany personel zakładu pogrzebowego 
                    pod nadzorem odpowiednich służb.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Przygotowanie</h3>
                      <p className="text-gray-300">
                        Zabezpieczenie terenu, przygotowanie sprzętu, obecność wymaganych osób (przedstawiciel 
                        sanepidu, zarządca cmentarza, personel zakładu pogrzebowego).
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Odkopanie</h3>
                      <p className="text-gray-300">
                        Ostrożne odkopanie grobu z zachowaniem wszelkich środków ostrożności i szacunku.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Wydobycie</h3>
                      <p className="text-gray-300">
                        Wydobycie szczątków i umieszczenie ich w odpowiednim pojemniku (trumna, urna).
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dokumentacja</h3>
                      <p className="text-gray-300">
                        Sporządzenie protokołu ekshumacji przez przedstawiciela sanepidu.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Transport</h3>
                      <p className="text-gray-300">
                        Przewiezienie szczątków do nowego miejsca pochówku lub do miejsca tymczasowego przechowania.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Uporządkowanie</h3>
                      <p className="text-gray-300">
                        Uporządkowanie miejsca po ekshumacji, dezynfekcja terenu.
                      </p>
                    </div>
                  </div>
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
                      Kiedy można przeprowadzić ekshumację?
                    </h3>
                    <p className="text-gray-300">
                      Ekshumację można przeprowadzić przez cały rok, ale najczęściej odbywa się w okresie od kwietnia 
                      do października ze względu na warunki atmosferyczne. Zimą ekshumacja jest utrudniona przez 
                      zmarzniętą ziemię. Wymagane jest zezwolenie Państwowego Powiatowego Inspektora Sanitarnego 
                      oraz zgoda zarządcy cmentarza.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy są ograniczenia sezonowe dla ekshumacji?
                    </h3>
                    <p className="text-gray-300">
                      Nie ma prawnych zakazów sezonowych, ale praktyczne ograniczenia wynikają z warunków pogodowych. 
                      Zimą zmarzlina utrudnia prace ziemne. Latem wysokie temperatury mogą stanowić problem sanitarny. 
                      Najkorzystniejsze są wiosna i jesień - umiarkowane temperatury ułatwiają przeprowadzenie procedury.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Ile czasu zajmuje uzyskanie zgody na ekshumację?
                    </h3>
                    <p className="text-gray-300">
                      Procedura uzyskania zgody na ekshumację zajmuje zazwyczaj 2-4 tygodnie. Wymaga złożenia wniosku 
                      do Państwowego Powiatowego Inspektora Sanitarnego, uzyskania zgody zarządcy cmentarza oraz 
                      spełnienia wymogów sanitarnych. W uzasadnionych przypadkach procedura może być przyspieszona.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy ekshumacja wymaga zgody rodziny?
                    </h3>
                    <p className="text-gray-300">
                      Tak, ekshumacja wymaga zgody najbliższej rodziny zmarłego. Wyjątkiem są przypadki zarządzone 
                      przez prokuraturę lub sąd w ramach postępowania karnego lub cywilnego. W przypadku braku zgody 
                      wszystkich członków rodziny, sprawa może trafić do sądu.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Ile kosztuje ekshumacja?
                    </h3>
                    <p className="text-gray-300">
                      Koszt ekshumacji zależy od wielu czynników: głębokości grobu, stanu szczątków, odległości 
                      transportu. Zazwyczaj wynosi od 2000 do 5000 zł. Do tego doliczyć należy koszty nowego pochówku, 
                      jeśli szczątki mają być przeniesione.
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
                  Potrzebujesz Pomocy w Organizacji Ekshumacji?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Zajmiemy się wszystkimi formalnościami i przeprowadzimy procedurę z godnością
                </p>
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Doświadczenie w procedurach ekshumacyjnych
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
              <Link href="/poradnik/jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Dokumenty do Pogrzebu</h3>
                    <p className="text-gray-400 text-sm">Kompletna lista dokumentów</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/przewoz-zwlok" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Przewóz Zwłok</h3>
                    <p className="text-gray-400 text-sm">Transport krajowy i międzynarodowy</p>
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
              <Link href="/uslugi-pogrzebowe-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Usługi Pogrzebowe</h3>
                    <p className="text-gray-400 text-sm">Pełna oferta usług</p>
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
