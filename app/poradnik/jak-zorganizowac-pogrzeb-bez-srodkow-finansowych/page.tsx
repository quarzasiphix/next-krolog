import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, Heart, DollarSign, HelpCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Jak Zorganizować Pogrzeb Bez Środków Finansowych? Praktyczny Przewodnik | Nekrolog Łódź',
  description: 'Kompleksowy przewodnik dla rodzin bez środków finansowych. Zasiłek pogrzebowy, pogrzeb bez zaliczki, pomoc zakładu pogrzebowego. Realistyczne i empatyczne porady.',
  keywords: ['pogrzeb bez pieniędzy', 'brak środków na pogrzeb', 'zasiłek pogrzebowy', 'pogrzeb bez zaliczki', 'pomoc finansowa pogrzeb'],
  alternates: {
    canonical: `${SITE_URL}/poradnik/jak-zorganizowac-pogrzeb-bez-srodkow-finansowych`,
  },
  openGraph: {
    title: 'Jak Zorganizować Pogrzeb Bez Środków Finansowych?',
    description: 'Praktyczny przewodnik dla rodzin w trudnej sytuacji finansowej - zasiłek, pomoc i wsparcie.',
    url: `${SITE_URL}/poradnik/jak-zorganizowac-pogrzeb-bez-srodkow-finansowych`,
    type: 'article',
  },
}

export default function PogrzebBezSrodkowPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Co zrobić gdy nie mam pieniędzy na pogrzeb?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gdy nie masz środków na pogrzeb, możesz skorzystać z zasiłku pogrzebowego z ZUS/KRUS oraz wybrać zakład pogrzebowy, który organizuje pogrzeb bez wpłaty z góry. Zakład Nekrolog Łódź finansuje wszystkie koszty i rozlicza się bezpośrednio z zasiłkiem pogrzebowym, bez wymagania zaliczki od rodziny.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kiedy wypłacany jest zasiłek pogrzebowy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zasiłek pogrzebowy z ZUS jest wypłacany zazwyczaj w ciągu 30 dni od złożenia wniosku, ale często trwa to 2-3 miesiące. To powoduje problem dla rodzin bez środków. Dlatego niektóre zakłady pogrzebowe, jak Nekrolog Łódź, finansują pogrzeb z góry i czekają na zasiłek.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy zakład pogrzebowy może zorganizować pogrzeb bez wpłaty z góry?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, niektóre zakłady pogrzebowe oferują organizację pogrzebu bez wymagania wpłaty z góry. Zakład Nekrolog Łódź finansuje wszystkie koszty pogrzebu i rozlicza się bezpośrednio z zasiłkiem pogrzebowym z ZUS/KRUS. Rodzina nie musi martwić się o pieniądze w trudnym czasie.',
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
              Jak Zorganizować Pogrzeb Bez Środków Finansowych?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Śmierć bliskiej osoby to trudny czas, a brak środków finansowych dodatkowo komplikuje sytuację. 
              W tym artykule wyjaśniamy, jak zorganizować godny pogrzeb, gdy nie masz pieniędzy w chwili śmierci.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Nie Jesteś Sam
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Brak środków finansowych w momencie śmierci bliskiej osoby to sytuacja, z którą boryka się 
                    wiele rodzin. Nie ma w tym nic wstydliwego - to realna trudność, z którą można sobie poradzić.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    W Polsce istnieją mechanizmy wsparcia, a niektóre zakłady pogrzebowe oferują pomoc rodzinom 
                    w trudnej sytuacji finansowej. Godny pogrzeb jest możliwy, nawet gdy nie masz pieniędzy w tej chwili.
                  </p>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-gray-300">
                      <strong className="text-white">Ważne:</strong> Ten artykuł jest napisany z empatią i szacunkiem. 
                      Przedstawiamy realistyczne rozwiązania dla rodzin w trudnej sytuacji.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-primary" />
                Zasiłek Pogrzebowy - Podstawowe Wsparcie
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Zasiłek pogrzebowy to świadczenie z ZUS lub KRUS, które ma pomóc pokryć koszty pogrzebu. 
                    Jest to podstawowe wsparcie dla rodzin.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Wysokość Zasiłku (2024):</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">ZUS:</strong> 4000 zł</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">KRUS:</strong> 4000 zł</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Kto Ma Prawo:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Osoba, która poniosła koszty pogrzebu</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Członek rodziny zmarłego ubezpieczonego/emeryta/rencisty</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Zakład pogrzebowy (jeśli poniósł koszty)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Problem z Czasem Wypłaty:</h3>
                      <p className="text-gray-300 mb-3">
                        Zasiłek pogrzebowy jest wypłacany zazwyczaj w ciągu 30 dni od złożenia wniosku, ale w praktyce 
                        często trwa to 2-3 miesiące. To powoduje problem:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Pogrzeb musi odbyć się w ciągu kilku dni</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Rodzina nie ma pieniędzy teraz</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zasiłek przyjdzie dopiero za kilka miesięcy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-primary" />
                Rozwiązania dla Rodzin Bez Środków
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Gdy nie masz pieniędzy w momencie śmierci, masz kilka opcji:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">1. Zakład Pogrzebowy Bez Wpłaty z Góry</h3>
                      <p className="text-gray-300 mb-3">
                        Niektóre zakłady pogrzebowe oferują organizację pogrzebu bez wymagania wpłaty z góry. 
                        Finansują wszystkie koszty i czekają na zasiłek pogrzebowy.
                      </p>
                      <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                        <p className="text-gray-300">
                          <strong className="text-white">Jak to działa:</strong> Zakład organizuje pogrzeb, ponosi 
                          wszystkie koszty, a następnie rozlicza się bezpośrednio z ZUS/KRUS po otrzymaniu zasiłku.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">2. Pożyczka od Rodziny/Znajomych</h3>
                      <p className="text-gray-300 mb-3">
                        Jeśli masz rodzinę lub znajomych, którzy mogą pomóc, możesz pożyczyć pieniądze na pogrzeb 
                        i oddać je po otrzymaniu zasiłku.
                      </p>
                      <p className="text-sm text-gray-400">
                        Zasiłek 4000 zł powinien pokryć podstawowy, godny pogrzeb.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">3. Pomoc Gminy/Ośrodka Pomocy Społecznej</h3>
                      <p className="text-gray-300 mb-3">
                        W wyjątkowych sytuacjach gmina może pomóc w organizacji pogrzebu. Dotyczy to głównie osób 
                        samotnych bez rodziny.
                      </p>
                      <p className="text-sm text-gray-400">
                        Kontakt z Ośrodkiem Pomocy Społecznej w Twojej gminie.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">4. Zbiórka Publiczna</h3>
                      <p className="text-gray-300 mb-3">
                        Możesz zorganizować zbiórkę pieniędzy online (np. na platformach crowdfundingowych) lub 
                        wśród znajomych i społeczności lokalnej.
                      </p>
                      <p className="text-sm text-gray-400">
                        Wiele osób chętnie pomaga w takich sytuacjach.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Czy Zakład Pogrzebowy Może Zorganizować Pogrzeb Bez Wpłaty z Góry?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Tak, niektóre zakłady pogrzebowe oferują taką możliwość. To legalne i coraz bardziej popularne 
                    rozwiązanie, które pomaga rodzinom w trudnej sytuacji.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Jak To Działa:</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">1</span>
                          </div>
                          <p className="text-gray-300">Kontaktujesz się z zakładem pogrzebowym</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">2</span>
                          </div>
                          <p className="text-gray-300">Zakład organizuje pogrzeb - finansuje wszystkie koszty</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">3</span>
                          </div>
                          <p className="text-gray-300">Zakład pomaga w wypełnieniu wniosku o zasiłek pogrzebowy</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">4</span>
                          </div>
                          <p className="text-gray-300">Zakład składa wniosek jako podmiot, który poniósł koszty</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">5</span>
                          </div>
                          <p className="text-gray-300">ZUS/KRUS wypłaca zasiłek bezpośrednio do zakładu</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">6</span>
                          </div>
                          <p className="text-gray-300">Jeśli koszt pogrzebu był niższy niż zasiłek, różnica trafia do rodziny</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Warunki:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Zmarły lub rodzina muszą mieć prawo do zasiłku pogrzebowego</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Rodzina musi dostarczyć podstawowe dokumenty</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Koszt pogrzebu zazwyczaj nie przekracza wysokości zasiłku</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Model Nekrolog Łódź - Pomoc Bez Zaliczki
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    W Zakładzie Pogrzebowym Nekrolog Łódź rozumiemy, że nie każda rodzina ma środki finansowe 
                    w momencie śmierci bliskiej osoby. Dlatego oferujemy:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Nasza Oferta:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Organizacja bez kosztów z góry</strong> - nie musisz 
                          płacić zaliczki ani wpłaty</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Finansujemy wszystko</strong> - ponosimy koszty 
                          pogrzebu z własnych środków</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Rozliczenie z zasiłkiem</strong> - czekamy na zasiłek 
                          pogrzebowy z ZUS/KRUS</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Pomoc w formalnościach</strong> - załatwiamy wszystkie 
                          dokumenty, w tym wniosek o zasiłek</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Godny pogrzeb</strong> - oferujemy pełen zakres usług 
                          w ramach zasiłku</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Wsparcie emocjonalne</strong> - jesteśmy z Tobą 
                          w trudnym czasie</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Co Musisz Zrobić:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zadzwoń do nas - dostępni całodobowo</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Dostarcz podstawowe dokumenty zmarłego</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Resztę załatwiamy my</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Bez ukrytych kosztów:</strong> Nie ma żadnych ukrytych opłat. 
                      Organizujemy pogrzeb w ramach zasiłku pogrzebowego. Jesteśmy transparentni i uczciwy.
                    </p>
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
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Nie Wstydź Się Prosić o Pomoc</h3>
                      <p className="text-gray-300">
                        Brak pieniędzy w momencie śmierci to normalna sytuacja dla wielu rodzin. Nie ma w tym nic 
                        wstydliwego. Zakłady pogrzebowe są przyzwyczajone do takich sytuacji i chętnie pomogą.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Sprawdź Prawo do Zasiłku</h3>
                      <p className="text-gray-300">
                        Upewnij się, że zmarły lub rodzina mają prawo do zasiłku pogrzebowego. Większość osób 
                        ubezpieczonych, emerytów i rencistów ma takie prawo.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Wybierz Zaufany Zakład</h3>
                      <p className="text-gray-300">
                        Wybierz zakład pogrzebowy z dobrą reputacją, który jasno przedstawia warunki współpracy. 
                        Unikaj firm, które nie są transparentne co do kosztów.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Wszystko na Piśmie</h3>
                      <p className="text-gray-300">
                        Upewnij się, że wszystkie ustalenia z zakładem pogrzebowym są potwierdzone na piśmie. 
                        To zabezpieczy Cię przed nieporozumieniami.
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
                      Co zrobić gdy nie mam pieniędzy na pogrzeb?
                    </h3>
                    <p className="text-gray-300">
                      Gdy nie masz środków na pogrzeb, możesz skorzystać z zasiłku pogrzebowego z ZUS/KRUS oraz wybrać 
                      zakład pogrzebowy, który organizuje pogrzeb bez wpłaty z góry. Zakład Nekrolog Łódź finansuje 
                      wszystkie koszty i rozlicza się bezpośrednio z zasiłkiem pogrzebowym, bez wymagania zaliczki 
                      od rodziny.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Kiedy wypłacany jest zasiłek pogrzebowy?
                    </h3>
                    <p className="text-gray-300">
                      Zasiłek pogrzebowy z ZUS jest wypłacany zazwyczaj w ciągu 30 dni od złożenia wniosku, ale często 
                      trwa to 2-3 miesiące. To powoduje problem dla rodzin bez środków. Dlatego niektóre zakłady 
                      pogrzebowe, jak Nekrolog Łódź, finansują pogrzeb z góry i czekają na zasiłek.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy zakład pogrzebowy może zorganizować pogrzeb bez wpłaty z góry?
                    </h3>
                    <p className="text-gray-300">
                      Tak, niektóre zakłady pogrzebowe oferują organizację pogrzebu bez wymagania wpłaty z góry. 
                      Zakład Nekrolog Łódź finansuje wszystkie koszty pogrzebu i rozlicza się bezpośrednio z zasiłkiem 
                      pogrzebowym z ZUS/KRUS. Rodzina nie musi martwić się o pieniądze w trudnym czasie.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy 4000 zł zasiłku wystarczy na pogrzeb?
                    </h3>
                    <p className="text-gray-300">
                      Tak, 4000 zł zasiłku pogrzebowego wystarczy na godny, podstawowy pogrzeb. Obejmuje to: trumnę, 
                      transport, formalności, usługi zakładu, podstawową oprawę. Zakład Nekrolog Łódź organizuje 
                      pełen pogrzeb w ramach zasiłku.
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
                  Nie Masz Pieniędzy na Pogrzeb?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Zorganizujemy pogrzeb bez wpłaty z góry - zadzwoń teraz
                </p>
                <a href="tel:+48602274661" className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition">
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Bez zaliczki • Rozliczenie z zasiłkiem
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
              <Link href="/poradnik/zasilek-pogrzebowy-zus" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Zasiłek Pogrzebowy ZUS</h3>
                    <p className="text-gray-400 text-sm">Jak uzyskać zasiłek</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/czy-zaklad-pogrzebowy-moze-dopelnic-formalnosci-pogrzebowych-w-zastepstwie-klienta" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Formalności w Zastępstwie</h3>
                    <p className="text-gray-400 text-sm">Pomoc zakładu pogrzebowego</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/pogrzeb-bez-zaliczki" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Pogrzeb Bez Zaliczki</h3>
                    <p className="text-gray-400 text-sm">Nasza oferta</p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
