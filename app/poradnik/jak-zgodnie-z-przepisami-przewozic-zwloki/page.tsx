import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, Scale, FileCheck, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Jak Zgodnie z Przepisami Przewozić Zwłoki? Regulacje Prawne | Nekrolog Łódź',
  description: 'Przepisy prawne i sanitarne dotyczące przewozu zwłok w Polsce. Wymagania dla transportu lokalnego i długodystansowego. Kompletny przewodnik prawny.',
  keywords: [
    'przepisy przewóz zwłok',
    'regulacje transport zmarłych',
    'prawo przewóz zwłok',
    'wymogi sanitarne transport',
    'przepisy transport zwłok',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/jak-zgodnie-z-przepisami-przewozic-zwloki`,
  },
  openGraph: {
    title: 'Jak Zgodnie z Przepisami Przewozić Zwłoki? Regulacje Prawne',
    description: 'Kompleksowy przewodnik po przepisach prawnych i sanitarnych dotyczących przewozu zwłok w Polsce.',
    url: `${SITE_URL}/poradnik/jak-zgodnie-z-przepisami-przewozic-zwloki`,
    type: 'article',
  },
}

export default function PrzepisyPrzewozuPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Jakie przepisy regulują przewóz zwłok w Polsce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Przewóz zwłok w Polsce regulują: ustawa o cmentarzach i chowaniu zmarłych, ustawa o zapobieganiu oraz zwalczaniu zakażeń i chorób zakaźnych u ludzi, rozporządzenia Ministra Zdrowia oraz przepisy sanitarne wydawane przez Głównego Inspektora Sanitarnego. Każdy transport wymaga zezwolenia Państwowego Powiatowego Inspektora Sanitarnego.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jakie dokumenty są wymagane do przewozu zwłok?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Do przewozu zwłok wymagane są: karta zgonu wystawiona przez lekarza, akt zgonu z USC, zezwolenie na przewóz zwłok wydane przez PPIS, protokół oględzin (jeśli dotyczy). W przypadku transportu międzynarodowego dodatkowo wymagane są tłumaczenia dokumentów i zezwolenia kraju docelowego.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy każdy pojazd może przewozić zwłoki?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nie, przewóz zwłok może odbywać się wyłącznie specjalnie przystosowanymi pojazdami pogrzebowymi, które spełniają wymogi sanitarne. Pojazd musi być zarejestrowany jako pojazd do przewozu zwłok, posiadać odpowiednie wyposażenie i być regularnie dezynfekowany.',
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
              Jak Zgodnie z Przepisami Przewozić Zwłoki?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Przewóz zwłok w Polsce podlega ścisłym regulacjom prawnym i sanitarnym. W tym artykule wyjaśniamy 
              wszystkie wymogi prawne, niezbędne dokumenty i procedury, które muszą być spełnione.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-primary" />
                Podstawy Prawne
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Przewóz zwłok w Polsce jest regulowany przez szereg aktów prawnych, które mają na celu 
                    zapewnienie bezpieczeństwa sanitarnego i poszanowanie godności zmarłego.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Główne Akty Prawne:</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-2">
                        Ustawa o Cmentarzach i Chowaniu Zmarłych
                      </h4>
                      <p className="text-gray-300">
                        Podstawowy akt prawny regulujący kwestie związane z pochówkiem i przewozem zwłok. 
                        Określa wymogi dotyczące miejsc pochówku, procedur pogrzebowych i transportu zmarłych.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-2">
                        Ustawa o Zapobieganiu oraz Zwalczaniu Zakażeń i Chorób Zakaźnych
                      </h4>
                      <p className="text-gray-300">
                        Reguluje wymogi sanitarne związane z przewozem zwłok, szczególnie w przypadku zgonów 
                        z przyczyn zakaźnych. Określa procedury bezpieczeństwa i dezynfekcji.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-2">
                        Rozporządzenia Ministra Zdrowia
                      </h4>
                      <p className="text-gray-300">
                        Szczegółowe przepisy wykonawcze dotyczące wymogów sanitarnych, procedur przewozu 
                        i wymagań dla pojazdów pogrzebowych.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-2">
                        Przepisy Państwowej Inspekcji Sanitarnej
                      </h4>
                      <p className="text-gray-300">
                        Wytyczne i zalecenia dotyczące praktycznych aspektów przewozu zwłok, wydawane przez 
                        Głównego Inspektora Sanitarnego.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-primary" />
                Wymagane Dokumenty
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Każdy przewóz zwłok wymaga kompletu dokumentów potwierdzających legalność i bezpieczeństwo 
                    transportu.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Karta Zgonu</h3>
                        <p className="text-gray-300 mb-2">
                          Dokument wystawiany przez lekarza stwierdzającego zgon. Zawiera:
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Dane osobowe zmarłego</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Datę i godzinę zgonu</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Przyczynę zgonu</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Informację o chorobach zakaźnych (jeśli dotyczy)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Akt Zgonu</h3>
                        <p className="text-gray-300">
                          Wydawany przez Urząd Stanu Cywilnego na podstawie karty zgonu. Jest to oficjalny 
                          dokument potwierdzający śmierć osoby, niezbędny do wszystkich formalności pogrzebowych.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Zezwolenie na Przewóz Zwłok</h3>
                        <p className="text-gray-300 mb-2">
                          Wydawane przez Państwowego Powiatowego Inspektora Sanitarnego (PPIS). Dokument ten:
                        </p>
                        <ul className="space-y-1 ml-4">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Potwierdza spełnienie wymogów sanitarnych</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Określa trasę przewozu</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Wskazuje miejsce docelowe</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Zawiera ewentualne dodatkowe wymogi</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Protokół Oględzin Zwłok</h3>
                        <p className="text-gray-300">
                          Wymagany w przypadku zgonu w niewyjaśnionych okolicznościach, nagłej śmierci lub 
                          podejrzenia przestępstwa. Sporządzany przez Policję lub Prokuraturę.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">5</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">Dokumenty Pojazdu</h3>
                        <p className="text-gray-300">
                          Pojazd przewożący zwłoki musi posiadać aktualne dokumenty rejestracyjne potwierdzające 
                          przeznaczenie do przewozu zwłok oraz certyfikat dezynfekcji.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Ważne:</strong> Wszystkie dokumenty muszą być oryginalne 
                      lub urzędowo poświadczone kopie. Brak któregokolwiek z wymaganych dokumentów uniemożliwia 
                      legalny przewóz zwłok.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Wymogi Sanitarne
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Przepisy sanitarne dotyczące przewozu zwłok mają na celu zapewnienie bezpieczeństwa 
                    zdrowotnego publicznego i zapobieganie rozprzestrzenianiu się chorób zakaźnych.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Podstawowe Wymogi:</h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Hermetyczne zabezpieczenie:</strong> Zwłoki muszą być 
                      umieszczone w trumnie lub innym hermetycznym pojemniku</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Materiał chłonny:</strong> Wewnątrz trumny musi znajdować 
                      się materiał chłonny (trociny, wióry) zapobiegający wyciekom</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Dezynfekcja:</strong> Ciało zmarłego musi być odpowiednio 
                      przygotowane i zdezynfekowane</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Czas transportu:</strong> Przewóz powinien odbyć się 
                      w możliwie najkrótszym czasie</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Temperatura:</strong> W przypadku długiego transportu 
                      może być wymagane chłodzenie</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium text-white mb-4">Szczególne Wymogi dla Chorób Zakaźnych:</h3>
                  
                  <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
                    <p className="text-gray-300 mb-3">
                      W przypadku zgonu z powodu choroby zakaźnej obowiązują dodatkowe wymogi:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Natychmiastowe umieszczenie w hermetycznej trumnie cynkowej</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Zakaz otwierania trumny</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Specjalne środki ochrony dla personelu</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Nadzór służb sanitarnych podczas transportu</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Dezynfekcja pojazdu po przewozie</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Wymogi dla Pojazdów
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Pojazdy przeznaczone do przewozu zwłok muszą spełniać szczególne wymogi techniczne i sanitarne.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Wymagania Techniczne:</h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Oddzielna, hermetyczna komora ładunkowa</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Powierzchnie łatwe do mycia i dezynfekcji</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>System mocowania trumny</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Odpowiednia wentylacja</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Wyposażenie w środki dezynfekcyjne</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Rejestracja jako pojazd do przewozu zwłok</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium text-white mb-4">Obowiązki Przewoźnika:</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Regularna dezynfekcja pojazdu (po każdym przewozie)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Prowadzenie dokumentacji przewozów</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Posiadanie aktualnych certyfikatów dezynfekcji</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Szkolenie personelu w zakresie przepisów sanitarnych</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Transport Lokalny vs Długodystansowy
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Transport Lokalny (w obrębie powiatu)</h3>
                      <p className="text-gray-300 mb-3">
                        Przewóz w obrębie tego samego powiatu jest prostszy proceduralnie:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zezwolenie wydaje lokalny PPIS</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Procedura zazwyczaj trwa 1-2 dni</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Mniej wymogów formalnych</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Niższe koszty</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Transport Długodystansowy (między powiatami/województwami)</h3>
                      <p className="text-gray-300 mb-3">
                        Przewóz na większe odległości wymaga dodatkowych formalności:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zezwolenie z określeniem trasy przewozu</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Możliwość wymagania dodatkowego zabezpieczenia zwłok</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Konieczność powiadomienia PPIS w miejscu docelowym</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Dłuższy czas realizacji (2-4 dni)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Więcej informacji:</strong> Szczegółowe informacje o praktycznych 
                      aspektach organizacji przewozu znajdziesz w artykule{' '}
                      <Link href="/poradnik/przewoz-zwlok" className="text-primary hover:text-primary/80 underline">
                        Przewóz Zwłok - Transport Krajowy i Międzynarodowy
                      </Link>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Konsekwencje Naruszenia Przepisów
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Naruszenie przepisów dotyczących przewozu zwłok może skutkować poważnymi konsekwencjami prawnymi.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Sankcje Administracyjne:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Kary pieniężne od 500 do 30 000 zł</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zakaz prowadzenia działalności pogrzebowej</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Cofnięcie zezwoleń</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Odpowiedzialność Karna:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Naruszenie przepisów sanitarnych - grzywna lub ograniczenie wolności</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Znieważenie zwłok - kara pozbawienia wolności do 2 lat</span>
                        </li>
                      </ul>
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
                      Jakie przepisy regulują przewóz zwłok w Polsce?
                    </h3>
                    <p className="text-gray-300">
                      Przewóz zwłok w Polsce regulują: ustawa o cmentarzach i chowaniu zmarłych, ustawa o zapobieganiu 
                      oraz zwalczaniu zakażeń i chorób zakaźnych u ludzi, rozporządzenia Ministra Zdrowia oraz przepisy 
                      sanitarne wydawane przez Głównego Inspektora Sanitarnego. Każdy transport wymaga zezwolenia 
                      Państwowego Powiatowego Inspektora Sanitarnego.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Jakie dokumenty są wymagane do przewozu zwłok?
                    </h3>
                    <p className="text-gray-300">
                      Do przewozu zwłok wymagane są: karta zgonu wystawiona przez lekarza, akt zgonu z USC, zezwolenie 
                      na przewóz zwłok wydane przez PPIS, protokół oględzin (jeśli dotyczy). W przypadku transportu 
                      międzynarodowego dodatkowo wymagane są tłumaczenia dokumentów i zezwolenia kraju docelowego.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy każdy pojazd może przewozić zwłoki?
                    </h3>
                    <p className="text-gray-300">
                      Nie, przewóz zwłok może odbywać się wyłącznie specjalnie przystosowanymi pojazdami pogrzebowymi, 
                      które spełniają wymogi sanitarne. Pojazd musi być zarejestrowany jako pojazd do przewozu zwłok, 
                      posiadać odpowiednie wyposażenie i być regularnie dezynfekowany.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Ile czasu zajmuje uzyskanie zezwolenia na przewóz?
                    </h3>
                    <p className="text-gray-300">
                      Uzyskanie zezwolenia na przewóz zwłok zajmuje zazwyczaj 1-2 dni w przypadku transportu lokalnego 
                      i 2-4 dni dla transportu długodystansowego. Czas może się wydłużyć, jeśli wymagane są dodatkowe 
                      dokumenty lub w przypadku zgonu z przyczyn zakaźnych.
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
                  Potrzebujesz Pomocy w Organizacji Przewozu?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Zajmiemy się wszystkimi formalnościami zgodnie z przepisami
                </p>
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Zgodność z przepisami
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
                    <h3 className="text-lg font-medium text-white mb-2">Przewóz Zwłok - Praktyczny Przewodnik</h3>
                    <p className="text-gray-400 text-sm">Organizacja transportu krok po kroku</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/jak-przetransportowac-cialo-zmarlego-z-zagranicy" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Transport z Zagranicy</h3>
                    <p className="text-gray-400 text-sm">Repatriacja zwłok</p>
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
