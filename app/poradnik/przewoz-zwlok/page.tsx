import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, Plane, MapPin, FileText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Przewóz Zwłok - Krajowy i Międzynarodowy Transport Zmarłych | Nekrolog Łódź',
  description: 'Kompleksowy przewodnik o przewozie zwłok w Polsce i za granicę. Dowiedz się, jakie formalności są potrzebne, ile kosztuje transport i jak go zorganizować.',
  keywords: [
    'przewóz zwłok',
    'transport zmarłych',
    'przewóz zwłok za granicę',
    'transport międzynarodowy zmarłych',
    'repatriacja zwłok',
    'transport zwłok polska',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/przewoz-zwlok`,
  },
  openGraph: {
    title: 'Przewóz Zwłok - Krajowy i Międzynarodowy Transport Zmarłych',
    description: 'Wszystko o transporcie zmarłych - formalności, koszty i organizacja przewozu krajowego i międzynarodowego.',
    url: `${SITE_URL}/poradnik/przewoz-zwlok`,
    type: 'article',
  },
}

export default function PrzewozZwlokPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Jakie dokumenty są potrzebne do przewozu zwłok?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Do przewozu zwłok potrzebne są: karta zgonu, akt zgonu, zezwolenie na przewóz zwłok wydane przez Państwowego Powiatowego Inspektora Sanitarnego, protokół oględzin zwłok (jeśli dotyczy). W przypadku transportu międzynarodowego dodatkowo wymagane są tłumaczenia dokumentów i specjalne zezwolenia.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ile kosztuje przewóz zwłok?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Koszt przewozu zwłok zależy od odległości i rodzaju transportu. Transport lokalny w obrębie miasta to koszt od 200-500 zł. Transport krajowy na większe odległości: 1000-3000 zł. Transport międzynarodowy: od 3000 zł wzwyż, w zależności od kraju docelowego i środka transportu.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jak długo trwa organizacja przewozu zwłok za granicę?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Organizacja przewozu międzynarodowego zwłok zajmuje zazwyczaj 3-7 dni roboczych. Czas ten jest potrzebny na załatwienie wszystkich formalności, uzyskanie zezwoleń i przygotowanie odpowiedniej dokumentacji. W pilnych przypadkach możliwe jest przyspieszenie procedur.',
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
              Przewóz Zwłok - Transport Krajowy i Międzynarodowy
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Przewóz zwłok to usługa, która może być potrzebna w różnych sytuacjach. W tym przewodniku wyjaśniamy, 
              jak wygląda transport zmarłych w Polsce i za granicę, jakie są wymagania prawne i jak go zorganizować.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Kiedy Potrzebny Jest Przewóz Zwłok?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Przewóz zwłok może być konieczny w różnych sytuacjach:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Śmierć Poza Miejscem Zamieszkania</h3>
                      <p className="text-gray-300">
                        Gdy osoba zmarła poza swoim miejscem zamieszkania (w innym mieście, szpitalu, domu opieki), 
                        konieczny jest transport do miejsca pochówku.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Śmierć Za Granicą</h3>
                      <p className="text-gray-300">
                        Gdy Polak zmarł za granicą, a rodzina chce pochować go w Polsce, konieczna jest repatriacja zwłok.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Pochówek Za Granicą</h3>
                      <p className="text-gray-300">
                        Gdy osoba zmarła w Polsce, ale rodzina chce pochować ją w kraju pochodzenia lub innym kraju.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Transport do Krematorium</h3>
                      <p className="text-gray-300">
                        Transport zmarłego z miejsca śmierci lub domu pogrzebowego do krematorium.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-primary" />
                Przewóz Krajowy
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-4">Wymagane Dokumenty:</h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Karta zgonu</strong> - wydana przez lekarza stwierdzającego zgon</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Akt zgonu</strong> - wydany przez Urząd Stanu Cywilnego</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Zezwolenie na przewóz</strong> - wydane przez Państwowego Powiatowego Inspektora Sanitarnego</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Protokół oględzin</strong> - jeśli śmierć była nagła lub w niewyjaśnionych okolicznościach</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Proces Przewozu Krajowego:</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <p className="text-gray-300">Zgłoszenie do zakładu pogrzebowego</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <p className="text-gray-300">Załatwienie formalności i uzyskanie zezwoleń</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <p className="text-gray-300">Przygotowanie ciała do transportu (zabezpieczenie, umieszczenie w trumnie)</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <p className="text-gray-300">Transport specjalnym pojazdem pogrzebowym</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">5</span>
                      </div>
                      <p className="text-gray-300">Przekazanie w miejscu docelowym</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                    <h4 className="text-lg font-medium text-white mb-2">Czas Realizacji:</h4>
                    <p className="text-gray-300">
                      Przewóz krajowy można zorganizować zazwyczaj w ciągu 1-2 dni roboczych od zgłoszenia.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Plane className="w-8 h-8 text-primary" />
                Przewóz Międzynarodowy
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Przewóz międzynarodowy zwłok (repatriacja) to bardziej skomplikowany proces wymagający 
                    dodatkowych formalności i dokumentów.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Wymagane Dokumenty:</h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Paszport zmarłego</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Międzynarodowa karta zgonu</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Zaświadczenie o zabalsamowaniu (w większości krajów obowiązkowe)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Zezwolenie na wywóz/wwóz zwłok</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Zaświadczenie o hermetyczności trumny</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Tłumaczenia przysięgłe wszystkich dokumentów</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Rodzaje Transportu Międzynarodowego:</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-2">Transport Lotniczy</h4>
                      <p className="text-gray-300 mb-2">
                        Najszybszy sposób transportu międzynarodowego. Wymaga specjalnej cynkowej trumny transportowej.
                      </p>
                      <p className="text-sm text-gray-400">
                        <strong>Czas:</strong> 2-5 dni | <strong>Koszt:</strong> od 5000 zł
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-2">Transport Drogowy</h4>
                      <p className="text-gray-300 mb-2">
                        Tańsza opcja dla krajów sąsiednich. Specjalny pojazd pogrzebowy z odpowiednim wyposażeniem.
                      </p>
                      <p className="text-sm text-gray-400">
                        <strong>Czas:</strong> 1-3 dni | <strong>Koszt:</strong> od 3000 zł
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Wymagania Specjalne
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Balsamowanie</h3>
                      <p className="text-gray-300 mb-3">
                        W przypadku transportu międzynarodowego lub długiego transportu krajowego często wymagane 
                        jest balsamowanie zwłok. Proces ten:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zabezpiecza ciało przed rozkładem</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Jest wymagane przez większość krajów przy transporcie lotniczym</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Musi być wykonane przez wykwalifikowanego specjalistę</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Wymaga specjalnego zaświadczenia</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Hermetyczna Trumna</h3>
                      <p className="text-gray-300 mb-3">
                        Do transportu międzynarodowego wymagana jest specjalna trumna:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Cynkowa lub z innego metalu (dla transportu lotniczego)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Całkowicie hermetyczna i spawana</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Umieszczona w drewnianej skrzyni transportowej</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Z odpowiednimi oznaczeniami i dokumentacją</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Koszty Przewozu Zwłok
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Koszty przewozu zwłok zależą od wielu czynników: odległości, rodzaju transportu, kraju docelowego 
                    i dodatkowych usług.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Transport Lokalny (w obrębie miasta)</h3>
                      <p className="text-gray-300">200-500 zł</p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Transport Krajowy (większe odległości)</h3>
                      <p className="text-gray-300">1000-3000 zł (w zależności od odległości)</p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Transport Międzynarodowy Drogowy</h3>
                      <p className="text-gray-300">3000-8000 zł (kraje sąsiednie)</p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Transport Międzynarodowy Lotniczy</h3>
                      <p className="text-gray-300">5000-15000 zł (w zależności od kraju)</p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Uwaga:</strong> Do kosztów transportu doliczyć należy: balsamowanie 
                      (1000-2000 zł), specjalną trumnę (2000-5000 zł), formalności i dokumenty (500-1500 zł).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Jak Organizujemy Przewóz Zwłok
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    W Zakładzie Pogrzebowym Nekrolog Łódź zajmujemy się kompleksową organizacją przewozu zwłok - 
                    zarówno krajowego, jak i międzynarodowego.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Nasze Usługi Obejmują:</h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Załatwienie wszystkich formalności i dokumentów</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Uzyskanie niezbędnych zezwoleń</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Przygotowanie ciała do transportu (w tym balsamowanie, jeśli wymagane)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Zapewnienie odpowiedniej trumny transportowej</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Organizację transportu (własny transport lub współpraca z zaufanymi partnerami)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Koordynację z zakładem pogrzebowym w miejscu docelowym</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Pełne wsparcie i informowanie rodziny na każdym etapie</span>
                    </li>
                  </ul>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-gray-300">
                      <strong className="text-white">Doświadczenie:</strong> Organizujemy przewozy zwłok od ponad 20 lat. 
                      Mamy doświadczenie w transporcie do wszystkich krajów europejskich oraz wielu krajów pozaeuropejskich.
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
                      Jakie dokumenty są potrzebne do przewozu zwłok?
                    </h3>
                    <p className="text-gray-300">
                      Do przewozu zwłok potrzebne są: karta zgonu, akt zgonu, zezwolenie na przewóz zwłok wydane przez 
                      Państwowego Powiatowego Inspektora Sanitarnego, protokół oględzin zwłok (jeśli dotyczy). W przypadku 
                      transportu międzynarodowego dodatkowo wymagane są tłumaczenia dokumentów i specjalne zezwolenia.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Ile kosztuje przewóz zwłok?
                    </h3>
                    <p className="text-gray-300">
                      Koszt przewozu zwłok zależy od odległości i rodzaju transportu. Transport lokalny w obrębie miasta 
                      to koszt od 200-500 zł. Transport krajowy na większe odległości: 1000-3000 zł. Transport 
                      międzynarodowy: od 3000 zł wzwyż, w zależności od kraju docelowego i środka transportu.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Jak długo trwa organizacja przewozu zwłok za granicę?
                    </h3>
                    <p className="text-gray-300">
                      Organizacja przewozu międzynarodowego zwłok zajmuje zazwyczaj 3-7 dni roboczych. Czas ten jest 
                      potrzebny na załatwienie wszystkich formalności, uzyskanie zezwoleń i przygotowanie odpowiedniej 
                      dokumentacji. W pilnych przypadkach możliwe jest przyspieszenie procedur.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy balsamowanie jest obowiązkowe?
                    </h3>
                    <p className="text-gray-300">
                      Balsamowanie nie jest obowiązkowe przy transporcie krajowym, ale jest wymagane przez większość 
                      krajów przy transporcie międzynarodowym, szczególnie lotniczym. Służy zabezpieczeniu ciała przed 
                      rozkładem podczas transportu.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy zakład pogrzebowy zajmie się wszystkimi formalnościami?
                    </h3>
                    <p className="text-gray-300">
                      Tak, profesjonalny zakład pogrzebowy zajmie się wszystkimi formalnościami związanymi z przewozem 
                      zwłok - zarówno krajowym, jak i międzynarodowym. Obejmuje to uzyskanie zezwoleń, przygotowanie 
                      dokumentów, tłumaczenia i koordynację transportu.
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
                  Potrzebujesz Pomocy w Organizacji Przewozu Zwłok?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Zajmiemy się wszystkimi formalnościami - transport krajowy i międzynarodowy
                </p>
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Doświadczenie w transporcie międzynarodowym
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
              <Link href="/uslugi/transport-zmarlych-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Transport Zmarłych Łódź</h3>
                    <p className="text-gray-400 text-sm">Nasza oferta transportu</p>
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
              <Link href="/poradnik/jak-wybrac-zaklad-do-organizacji-pogrzebu" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Jak Wybrać Zakład Pogrzebowy</h3>
                    <p className="text-gray-400 text-sm">Praktyczny przewodnik</p>
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
