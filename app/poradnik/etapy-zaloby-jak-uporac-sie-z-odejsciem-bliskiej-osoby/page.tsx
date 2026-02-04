import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Heart, Clock, Users, Lightbulb, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Etapy Żałoby - Jak Uporać Się z Odejściem Bliskiej Osoby | Nekrolog Łódź',
  description: 'Praktyczny przewodnik po etapach żałoby. Dowiedz się, jak przejść przez proces żałoby krok po kroku, gdzie szukać wsparcia i jak dbać o siebie w trudnym czasie.',
  keywords: ['etapy żałoby', 'jak uporać się ze śmiercią', 'przeżywanie żałoby', 'wsparcie w żałobie', 'fazy żałoby'],
  alternates: {
    canonical: `${SITE_URL}/poradnik/etapy-zaloby-jak-uporac-sie-z-odejsciem-bliskiej-osoby`,
  },
  openGraph: {
    title: 'Etapy Żałoby - Jak Uporać Się z Odejściem Bliskiej Osoby',
    description: 'Praktyczny przewodnik po etapach żałoby i procesie zdrowienia po stracie.',
    url: `${SITE_URL}/poradnik/etapy-zaloby-jak-uporac-sie-z-odejsciem-bliskiej-osoby`,
    type: 'article',
  },
}

export default function EtapyZalobyPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Ile trwa proces żałoby?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Proces żałoby jest indywidualny i może trwać od kilku miesięcy do kilku lat. Najtrudniejszy okres to pierwsze 6-12 miesięcy, ale uczucia żałoby mogą powracać w rocznice śmierci bliskiej osoby.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy żałoba to choroba?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Żałoba to naturalna reakcja na stratę, nie choroba. Jednak w niektórych przypadkach może przerodzić się w depresję żałobną, która wymaga profesjonalnej pomocy psychologicznej.',
        },
      },
      {
        '@type': 'Question',
        name: 'Gdzie szukać pomocy w żałobie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pomoc można znaleźć u psychologa, terapeuty, grup wsparcia dla osób w żałobie, a także wśród bliskich. W Łodzi działają ośrodki pomocy psychologicznej oraz grupy wsparcia dla osób po stracie.',
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
              <Heart className="w-4 h-4" />
              Poradnik pogrzebowy
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
              Etapy Żałoby - Jak Uporać Się z Odejściem Bliskiej Osoby
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Śmierć bliskiej osoby to jedno z najtrudniejszych doświadczeń w życiu. Żałoba to naturalny proces,
              przez który musimy przejść, aby zdrowieć. W tym przewodniku opisujemy etapy żałoby i podajemy
              praktyczne porady, jak przetrwać ten trudny czas.
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
                Czym Jest Żałoba?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Żałoba to naturalna reakcja emocjonalna na stratę. To proces psychologiczny, który pozwala nam
                    dostosować się do nowej rzeczywistości bez bliskiej osoby. Żałoba nie jest chorobą, ale
                    głębokim doświadczeniem, które wymaga czasu i zrozumienia.
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-gray-300">
                      <strong className="text-white">Ważne:</strong> Każdy przeżywa żałobę inaczej. Nie ma "dobrego" czy "złego"
                      sposobu na odczuwanie żałoby. Twoje uczucia są ważne i uzasadnione.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-primary" />
                Etapy Żałoby - Model Kübler-Ross
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Dr Elisabeth Kübler-Ross opisała pięć etapów żałoby. Warto pamiętać, że nie muszą one
                    występować w tej kolejności, a niektóre mogą się powtarzać.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">1. Zaprzeczenie</h3>
                      <p className="text-gray-300 mb-3">
                        Pierwsza reakcja na stratę. Trudno nam uwierzyć w to, co się stało. Może pojawić się
                        poczucie odrętwienia, niedowierzania.
                      </p>
                      <p className="text-sm text-gray-400">
                        <strong className="text-white">Objawy:</strong> "To niemożliwe", "Muszę być w śnie",
                        poczucie nierzeczywistości.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">2. Gniew</h3>
                      <p className="text-gray-300 mb-3">
                        Zaczynamy zdawać sobie sprawę z rzeczywistości straty. Pojawia się złość na lekarzy,
                        na siebie, na świat, a nawet na zmarłego.
                      </p>
                      <p className="text-sm text-gray-400">
                        <strong className="text-white">Objawy:</strong> "Dlaczego ja?", "To niesprawiedliwe",
                        irytacja, frustracja.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">3. Targowanie się</h3>
                      <p className="text-gray-300 mb-3">
                        Próbujemy "negocjować" z losem. Pojawiają się myśli "gdybym tylko...", "jeśli bym
                        zrobił inaczej...".
                      </p>
                      <p className="text-sm text-gray-400">
                        <strong className="text-white">Objawy:</strong> poczucie winy, żale, myśli "co by było,
                        gdyby...", próby odwrócenia sytuacji.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">4. Depresja</h3>
                      <p className="text-gray-300 mb-3">
                        Głębokie poczucie smutku i pustki. Zdajemy sobie sprawę z nieodwracalności straty.
                        To naturalny etap żałoby.
                      </p>
                      <p className="text-sm text-gray-400">
                        <strong className="text-white">Objawy:</strong> płacz, apatia, poczucie beznadziei,
                        brak energii, wycofanie społeczne.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">5. Akceptacja</h3>
                      <p className="text-gray-300 mb-3">
                        Uczymy się żyć ze stratą. Nie oznacza to zapomnienia o zmarłym, ale zaakceptowania
                        rzeczywistości i odnalezienia nowego sensu życia.
                      </p>
                      <p className="text-sm text-gray-400">
                        <strong className="text-white">Objawy:</strong> spokój, zdolność do planowania przyszłości,
                        wspomnienia bez bólu, nadanie sensu straty.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-primary" />
                  Czas Trwania Poszczególnych Etapów
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Pierwsze Dni i Tygodnie</h3>
                      <p className="text-gray-300">
                        Zaprzeczenie i szok dominują. Organizacja pogrzebu, formalności, wsparcie rodziny.
                        Często brak czasu na przetworzenie emocji.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Pierwsze 3 Miesiące</h3>
                      <p className="text-gray-300">
                        Najtrudniejszy okres. Pojawia się gniew, poczucie winy, głęboki smutek. Konfrontacja
                        z rzeczywistością straty. Wsparcie bliskich jest kluczowe.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">3-12 Miesięcy</h3>
                      <p className="text-gray-300">
                        Stopniowe akceptowanie straty. Uczucia stają się mniej intensywne. Uczenie się życia
                        bez zmarłej osoby. Pierwsze rocznice są szczególnie trudne.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Po Roku i Dłużej</h3>
                      <p className="text-gray-300">
                        Akceptacja i adaptacja. Wspomnienia stają się ciepłe, a nie bolesne. Możliwość
                        czerpania radości z życia, jednocześnie pamiętając o zmarłym.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-primary" />
                Jak Przetrwać Żałobę - Praktyczne Porady
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Daj Sobie Czas</h3>
                      <p className="text-gray-300">
                        Nie ma "terminu" na przeżycie żałoby. Każdy potrzebuje innego czasu. Nie naciskaj na
                        siebie, aby "wrócić do normalności".
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Mów o Swoich Uczuciach</h3>
                      <p className="text-gray-300">
                        Dziel się emocjami z bliskimi, przyjaciółmi lub terapeutą. Wypowiadanie uczuć pomaga
                        je przetworzyć. Nie izoluj się.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dbaj o Fizyczne Zdrowie</h3>
                      <p className="text-gray-300">
                        Jedz regularnie, śpij wystarczająco dużo, ruszaj się. Stres żałoby wpływa na ciało.
                        Dbanie o zdrowie fizyczne wspiera zdrowie psychiczne.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Unikaj Istotnych Decyzji</h3>
                      <p className="text-gray-300">
                        Jeśli to możliwe, odkładaj ważne decyzje (przeprowadzka, zmiana pracy) na co najmniej
                        rok. Żałoba wpływa na zdolność jasnego myślenia.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Stwórz Rytuały Pamięci</h3>
                      <p className="text-gray-300">
                        Świece, modlitwa, odwiedzanie grobu, tworzenie albumu wspomnień. Rytuały pomagają
                        wyrazić uczucia i utrzymać więź z zmarłym.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Szukaj Wsparcia</h3>
                      <p className="text-gray-300">
                        Grupy wsparcia, psycholog, terapeuta. Nie musisz przechodzić przez to sam. W Łodzi
                        działają ośrodki pomocy psychologicznej.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Gdzie Szukać Pomocy w Łodzi
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    W Łodzi dostępne są różne formy wsparcia dla osób w żałobie. Nie wahaj się skorzystać z pomocy.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Poradnie Psychologiczne</h3>
                      <p className="text-gray-300">
                        Miejskie Poradnie Psychologiczno-Pedagogiczne, prywatne gabinety psychologiczne.
                        Wiele z nich oferuje pomoc w kryzysie żałoby.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Grupy Wsparcia</h3>
                      <p className="text-gray-300">
                        Grupy dla osób po stracie, spotkania organizowane przez fundacje i stowarzyszenia.
                        Wspólne przeżywanie żałoby z innymi może być bardzo pomocne.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Pomoc Duchowa</h3>
                      <p className="text-gray-300">
                        Kapłani różnych wyznań, duchowni, ośrodki duchowe. Dla wielu osób wiara i wsparcie
                        duchowe są ważnym elementem przeżywania żałoby.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Telefoniczne Linie Wsparcia</h3>
                      <p className="text-gray-300">
                        Telefon Zaufania, kryzysowe linie telefoniczne. Dostępne 24/7, gdy potrzebujesz natychmiastowej
                        rozmowy i wsparcia.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Kiedy Szukać Pomocy Specjalistycznej?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Niektóre objawy żałoby mogą wymagać profesjonalnej pomocy. Zwróć uwagę na sygnały ostrzegawcze:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-white">Myśli samobójcze</strong> - jeśli pojawiają się myśli o odebraniu sobie życia,
                        natychmiast szukaj pomocy.
                      </p>
                    </div>
                    
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-white">Długotrwała depresja</strong> - jeśli smutek i apatia utrzymują się
                        przez wiele miesięcy i uniemożliwiają normalne funkcjonowanie.
                      </p>
                    </div>
                    
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-white">Nadużywanie substancji</strong> - jeśli sięgasz po alkohol,
                        leki lub inne substancje, aby "zagłuszyć" ból.
                      </p>
                    </div>
                    
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-white">Całkowita izolacja</strong> - jeśli unikasz kontaktu z ludźmi
                        i nie potrafisz funkcjonować w codziennym życiu.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Pamiętaj:</strong> Szukanie pomocy to oznaka siły, nie słabości.
                      Profesjonalista może pomóc Ci przejść przez najtrudniejszy okres.
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
                      Ile trwa proces żałoby?
                    </h3>
                    <p className="text-gray-300">
                      Proces żałoby jest indywidualny i może trwać od kilku miesięcy do kilku lat. Najtrudniejszy
                      okres to pierwsze 6-12 miesięcy, ale uczucia żałoby mogą powracać w rocznice śmierci bliskiej
                      osoby.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy żałoba to choroba?
                    </h3>
                    <p className="text-gray-300">
                      Żałoba to naturalna reakcja na stratę, nie choroba. Jednak w niektórych przypadkach może
                      przerodzić się w depresję żałobną, która wymaga profesjonalnej pomocy psychologicznej.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Gdzie szukać pomocy w żałobie?
                    </h3>
                    <p className="text-gray-300">
                      Pomoc można znaleźć u psychologa, terapeuty, grup wsparcia dla osób w żałobie, a także
                      wśród bliskich. W Łodzi działają ośrodki pomocy psychologicznej oraz grupy wsparcia dla
                      osób po stracie.
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
                  Potrzebujesz Wsparcia w Trudnym Czasie?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Jesteśmy tutaj, aby pomóc Ci zorganizować godny pogrzeb i przejść przez ten trudny okres.
                </p>
                <a href="tel:+48602274661" className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition">
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Empatyczne wsparcie • Profesjonalna pomoc
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
                    <p className="text-gray-400 text-sm">Praktyczny przewodnik krok po kroku</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/jak-zorganizowac-pogrzeb-bez-srodkow-finansowych" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Pogrzeb Bez Środków Finansowych</h3>
                    <p className="text-gray-400 text-sm">Jak zorganizować pogrzeb bez pieniędzy</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Dokumenty do Pogrzebu</h3>
                    <p className="text-gray-400 text-sm">Kompletna lista dokumentów</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/o-jakiej-porze-roku-moze-byc-przeprowadzana-ekshumacja" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Ekshumacja</h3>
                    <p className="text-gray-400 text-sm">Kiedy i jak można przeprowadzić ekshumację</p>
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
