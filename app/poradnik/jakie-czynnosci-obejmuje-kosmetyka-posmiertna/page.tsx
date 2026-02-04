import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, Heart, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Jakie Czynności Obejmuje Kosmetyka Pośmiertna? | Nekrolog Łódź',
  description: 'Dowiedz się, czym jest kosmetyka pośmiertna i jakie czynności obejmuje. Wyjaśniamy proces przygotowania zmarłego do pogrzebu w sposób pełen szacunku i profesjonalizmu.',
  keywords: [
    'kosmetyka pośmiertna',
    'przygotowanie zmarłego',
    'toaleta zmarłego',
    'przygotowanie do pogrzebu',
    'tanato',
    'kosmetyka pogrzebowa',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/jakie-czynnosci-obejmuje-kosmetyka-posmiertna`,
  },
  openGraph: {
    title: 'Jakie Czynności Obejmuje Kosmetyka Pośmiertna?',
    description: 'Profesjonalny przewodnik o kosmetyce pośmiertnej - przygotowanie zmarłego do pogrzebu z godnością i szacunkiem.',
    url: `${SITE_URL}/poradnik/jakie-czynnosci-obejmuje-kosmetyka-posmiertna`,
    type: 'article',
  },
}

export default function KosmetykaPosmiernaPage() {
  return (
    <div className="bg-black text-white min-h-screen">
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
              Jakie Czynności Obejmuje Kosmetyka Pośmiertna?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Kosmetyka pośmiertna to delikatny proces przygotowania zmarłego do ostatniego pożegnania. 
              W tym artykule wyjaśniamy, jakie czynności są wykonywane i dlaczego są one tak ważne.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary" />
                Czym Jest Kosmetyka Pośmiertna?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Kosmetyka pośmiertna, zwana również toaletą zmarłego lub tanatokosmetyką, to zespół czynności 
                    mających na celu godne przygotowanie ciała zmarłego do ceremonii pogrzebowej. Jest to proces 
                    przeprowadzany z najwyższym szacunkiem i profesjonalizmem.
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-white mb-3">Cele Kosmetyki Pośmiertnej:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Przywrócenie godnego wyglądu zmarłego</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Umożliwienie rodzinie godnego pożegnania</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Zachowanie pamięci o zmarłym w sposób pozytywny</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Zapewnienie higieny i bezpieczeństwa</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Podstawowe Czynności Kosmetyki Pośmiertnej
              </h2>
              
              <div className="space-y-6">
                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-3">Mycie i Dezynfekcja</h3>
                        <p className="text-gray-300 mb-3">
                          Pierwszym etapem jest dokładne umycie ciała zmarłego specjalnymi środkami dezynfekującymi. 
                          Proces ten obejmuje:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Delikatne oczyszczenie całego ciała</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Mycie włosów i twarzy</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Dezynfekcję wszystkich części ciała</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Dbałość o higienę i bezpieczeństwo</span>
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
                        <h3 className="text-xl font-medium text-white mb-3">Ułożenie Ciała</h3>
                        <p className="text-gray-300 mb-3">
                          Profesjonalne ułożenie ciała w naturalnej, spokojnej pozycji:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Ułożenie rąk w naturalnej pozycji (zazwyczaj złożone na piersi)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Zamknięcie oczu i ust</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Nadanie twarzy spokojnego wyrazu</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Ułożenie ciała w sposób godny i naturalny</span>
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
                        <h3 className="text-xl font-medium text-white mb-3">Pielęgnacja Twarzy</h3>
                        <p className="text-gray-300 mb-3">
                          Szczególna dbałość o wygląd twarzy zmarłego:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Golenie (w przypadku mężczyzn)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Czesanie i układanie włosów</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Pielęgnacja skóry twarzy</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Dbałość o naturalny wygląd</span>
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
                        <h3 className="text-xl font-medium text-white mb-3">Makijaż Korekcyjny</h3>
                        <p className="text-gray-300 mb-3">
                          Delikatny makijaż mający na celu przywrócenie naturalnego kolorytu:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Wyrównanie kolorytu skóry</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Delikatne podkreślenie rysów twarzy</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Maskowanie śladów choroby lub urazów (jeśli to możliwe)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Nadanie twarzy spokojnego, naturalnego wyglądu</span>
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
                        <h3 className="text-xl font-medium text-white mb-3">Ubieranie</h3>
                        <p className="text-gray-300 mb-3">
                          Profesjonalne ubranie zmarłego w strój wybrany przez rodzinę:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Delikatne ubranie zmarłego w przygotowane ubrania</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Dbałość o odpowiednie ułożenie ubrań</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Założenie butów i dodatków</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Ostateczne poprawki i sprawdzenie wyglądu</span>
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
                        <h3 className="text-xl font-medium text-white mb-3">Ułożenie w Trumnie</h3>
                        <p className="text-gray-300 mb-3">
                          Ostatni etap przygotowania:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Delikatne przeniesienie do trumny</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Odpowiednie ułożenie ciała</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Umieszczenie przedmiotów osobistych (różaniec, fotografie)</span>
                          </li>
                          <li className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>Ostateczne poprawki i sprawdzenie</span>
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
                <Heart className="w-8 h-8 text-primary" />
                Szacunek i Profesjonalizm
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Kosmetyka pośmiertna jest wykonywana przez wykwalifikowany personel z najwyższym szacunkiem 
                    dla zmarłego i jego rodziny. Każda czynność jest przeprowadzana z godnością i delikatnością.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Zasady Naszej Pracy:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Szacunek</strong> - traktujemy zmarłego z najwyższym szacunkiem</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Profesjonalizm</strong> - wykwalifikowany i doświadczony personel</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Dyskrecja</strong> - pełna poufność i dyskrecja</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Higiena</strong> - najwyższe standardy czystości</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Indywidualne podejście</strong> - uwzględniamy życzenia rodziny</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Kiedy Kosmetyka Pośmiertna Jest Szczególnie Ważna?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Kosmetyka pośmiertna jest zawsze ważna, ale w niektórych sytuacjach ma szczególne znaczenie:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Długa Choroba</h3>
                      <p className="text-gray-300">
                        Po długiej chorobie zmarły może wyglądać wychudzony lub zmieniony. Kosmetyka pośmiertna 
                        pomaga przywrócić godny wygląd i pozwala rodzinie zapamiętać bliską osobę w lepszym stanie.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Nagła Śmierć</h3>
                      <p className="text-gray-300">
                        W przypadku nagłej śmierci kosmetyka pośmiertna pomaga rodzinie w procesie pożegnania, 
                        przygotowując zmarłego do ostatniego spotkania.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Pogrzeb z Otwartą Trumną</h3>
                      <p className="text-gray-300">
                        Jeśli rodzina planuje pogrzeb z otwartą trumną, profesjonalna kosmetyka pośmiertna jest 
                        niezbędna, aby zmarły wyglądał godnie podczas ceremonii.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Czy Rodzina Może Być Obecna?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Zazwyczaj kosmetyka pośmiertna jest wykonywana bez obecności rodziny, aby zapewnić spokój 
                    i profesjonalizm procesu. Jednak w niektórych przypadkach, jeśli rodzina wyraża takie życzenie, 
                    możliwe jest:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Obecność podczas ubierania zmarłego</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Pomoc w wyborze ubrań i dodatków</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Ostatnie pożegnanie przed zamknięciem trumny</span>
                    </li>
                  </ul>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Ważne:</strong> Decyzję o obecności rodziny podejmujemy 
                      indywidualnie, uwzględniając stan emocjonalny bliskich i specyfikę sytuacji.
                    </p>
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
                      Czy kosmetyka pośmiertna jest obowiązkowa?
                    </h3>
                    <p className="text-gray-300">
                      Kosmetyka pośmiertna nie jest prawnie obowiązkowa, ale jest standardową praktyką w zakładach 
                      pogrzebowych. Służy godności zmarłego i komfortowi rodziny podczas pożegnania.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Ile czasu zajmuje kosmetyka pośmiertna?
                    </h3>
                    <p className="text-gray-300">
                      Proces kosmetyki pośmiertnej zajmuje zazwyczaj od 2 do 4 godzin, w zależności od stanu ciała 
                      i zakresu prac. Każda czynność jest wykonywana z należytą starannością.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy kosmetyka pośmiertna jest wykonywana przed kremacją?
                    </h3>
                    <p className="text-gray-300">
                      Tak, jeśli rodzina chce pożegnać się z otwartą trumną przed kremacją, kosmetyka pośmiertna 
                      jest wykonywana. W przypadku kremacji bez ceremonii pożegnania zakres kosmetyki może być 
                      ograniczony do podstawowych czynności higienicznych.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy można poprosić o specjalne życzenia dotyczące kosmetyki?
                    </h3>
                    <p className="text-gray-300">
                      Tak, uwzględniamy życzenia rodziny dotyczące wyglądu zmarłego - fryzury, makijażu, ubioru. 
                      Staramy się, aby zmarły wyglądał tak, jak rodzina go pamięta i chce zapamiętać.
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
                  Zajmiemy się wszystkim z godnością i szacunkiem - bez kosztów z góry
                </p>
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Profesjonalna obsługa
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
              <Link href="/poradnik/w-co-ubrac-zmarlego-na-pogrzeb" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">W Co Ubrać Zmarłego</h3>
                    <p className="text-gray-400 text-sm">Przewodnik po wyborze ubioru</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/jak-wyglada-kremacja-zwlok" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Jak Wygląda Kremacja</h3>
                    <p className="text-gray-400 text-sm">Proces kremacji krok po kroku</p>
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
