import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, FileText, ClipboardList, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Jakie Dokumenty Są Potrzebne Aby Zorganizować Pogrzeb? Lista | Nekrolog Łódź',
  description: 'Kompletna lista dokumentów potrzebnych do organizacji pogrzebu. Dowiedz się, kto wydaje każdy dokument i czego nie można zapomnieć. Praktyczny przewodnik.',
  keywords: [
    'dokumenty do pogrzebu',
    'dokumenty pogrzebowe',
    'co potrzebne do pogrzebu',
    'formalności pogrzebowe',
    'akt zgonu',
    'karta zgonu',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb`,
  },
  openGraph: {
    title: 'Jakie Dokumenty Są Potrzebne Aby Zorganizować Pogrzeb?',
    description: 'Kompletna lista dokumentów pogrzebowych - kto wydaje, gdzie załatwić i czego nie zapomnieć.',
    url: `${SITE_URL}/poradnik/jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb`,
    type: 'article',
  },
}

export default function DokumentyPogrzebPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Jakie dokumenty są potrzebne do organizacji pogrzebu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Do organizacji pogrzebu potrzebne są: karta zgonu (od lekarza), akt zgonu (z USC), dowód osobisty zmarłego, dokumenty cmentarza (potwierdzenie miejsca pochówku), zezwolenie na przewóz zwłok (od PPIS), dokumenty do zasiłku pogrzebowego. Zakład pogrzebowy pomoże w kompletowaniu dokumentacji.',
        },
      },
      {
        '@type': 'Question',
        name: 'Gdzie uzyskać akt zgonu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Akt zgonu wydaje Urząd Stanu Cywilnego właściwy dla miejsca zgonu. Należy złożyć wniosek wraz z kartą zgonu wystawioną przez lekarza. Akt zgonu jest wydawany zazwyczaj tego samego dnia lub następnego dnia roboczego. Jest to dokument bezpłatny.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy zakład pogrzebowy może załatwić dokumenty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, profesjonalny zakład pogrzebowy może załatwić większość dokumentów w imieniu rodziny. Obejmuje to: uzyskanie aktu zgonu, rezerwację miejsca na cmentarzu, zezwolenie na przewóz zwłok, wniosek o zasiłek pogrzebowy. Rodzina musi jedynie dostarczyć podstawowe dokumenty zmarłego.',
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
              Jakie Dokumenty Są Potrzebne Aby Zorganizować Pogrzeb?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Organizacja pogrzebu wymaga załatwienia wielu formalności i zebrania odpowiednich dokumentów. 
              W tym przewodniku znajdziesz kompletną listę dokumentów, informacje kto je wydaje i czego nie można zapomnieć.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <ClipboardList className="w-8 h-8 text-primary" />
                Kompletna Lista Dokumentów
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Poniżej przedstawiamy pełną listę dokumentów potrzebnych do organizacji pogrzebu, 
                    wraz z informacją gdzie je uzyskać i w jakiej kolejności.
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-gray-300">
                      <strong className="text-white">Ważne:</strong> Profesjonalny zakład pogrzebowy może załatwić 
                      większość dokumentów w Twoim imieniu. Nie musisz wszystkiego robić sam - poproś o pomoc.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Dokumenty Podstawowe
              </h2>
              
              <div className="space-y-6">
                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-white mb-3">Karta Zgonu</h3>
                        
                        <div className="space-y-3">
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <p className="text-sm text-gray-400 mb-1">Kto wydaje:</p>
                            <p className="text-white">Lekarz stwierdzający zgon</p>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <p className="text-sm text-gray-400 mb-1">Gdzie:</p>
                            <p className="text-white">Szpital, dom opieki, lekarz rodzinny (w przypadku zgonu w domu)</p>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <p className="text-sm text-gray-400 mb-1">Kiedy:</p>
                            <p className="text-white">Natychmiast po stwierdzeniu zgonu</p>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <p className="text-sm text-gray-400 mb-1">Co zawiera:</p>
                            <ul className="space-y-1 mt-2">
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
                          
                          <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-3">
                            <p className="text-gray-300">
                              <strong className="text-white">Ważne:</strong> Karta zgonu jest niezbędna do uzyskania 
                              aktu zgonu. Bez niej nie można przeprowadzić pogrzebu.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-white mb-3">Akt Zgonu</h3>
                        
                        <div className="space-y-3">
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <p className="text-sm text-gray-400 mb-1">Kto wydaje:</p>
                            <p className="text-white">Urząd Stanu Cywilnego</p>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <p className="text-sm text-gray-400 mb-1">Gdzie:</p>
                            <p className="text-white">USC właściwy dla miejsca zgonu</p>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <p className="text-sm text-gray-400 mb-1">Wymagane dokumenty:</p>
                            <ul className="space-y-1 mt-2">
                              <li className="flex items-start gap-2 text-gray-300">
                                <span className="text-primary mt-1">•</span>
                                <span>Karta zgonu</span>
                              </li>
                              <li className="flex items-start gap-2 text-gray-300">
                                <span className="text-primary mt-1">•</span>
                                <span>Dowód osobisty zmarłego</span>
                              </li>
                              <li className="flex items-start gap-2 text-gray-300">
                                <span className="text-primary mt-1">•</span>
                                <span>Dowód osobisty zgłaszającego</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <p className="text-sm text-gray-400 mb-1">Czas realizacji:</p>
                            <p className="text-white">Tego samego dnia lub następnego dnia roboczego</p>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <p className="text-sm text-gray-400 mb-1">Koszt:</p>
                            <p className="text-white">Bezpłatny (pierwszy egzemplarz)</p>
                          </div>
                          
                          <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                            <p className="text-gray-300">
                              <strong className="text-white">Wskazówka:</strong> Warto od razu poprosić o kilka 
                              odpisów aktu zgonu (koszt ok. 22 zł za odpis). Będą potrzebne do różnych formalności.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-white mb-3">Dowód Osobisty Zmarłego</h3>
                        
                        <div className="space-y-3">
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                            <p className="text-sm text-gray-400 mb-1">Po co potrzebny:</p>
                            <ul className="space-y-1 mt-2">
                              <li className="flex items-start gap-2 text-gray-300">
                                <span className="text-primary mt-1">•</span>
                                <span>Uzyskanie aktu zgonu</span>
                              </li>
                              <li className="flex items-start gap-2 text-gray-300">
                                <span className="text-primary mt-1">•</span>
                                <span>Identyfikacja zmarłego</span>
                              </li>
                              <li className="flex items-start gap-2 text-gray-300">
                                <span className="text-primary mt-1">•</span>
                                <span>Formalności na cmentarzu</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-3">
                            <p className="text-gray-300">
                              <strong className="text-white">Co jeśli nie ma dowodu?</strong> W przypadku braku dowodu 
                              osobistego można użyć paszportu lub innego dokumentu tożsamości. USC może również wydać 
                              akt zgonu na podstawie zeznań świadków.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Dokumenty Cmentarne
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-white mb-3">Dokumenty Miejsca Pochówku</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">Kto wydaje:</p>
                          <p className="text-white">Zarząd cmentarza lub administrator grobu rodzinnego</p>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">Rodzaje dokumentów:</p>
                          <ul className="space-y-2 mt-2">
                            <li className="flex items-start gap-2 text-gray-300">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                              <span><strong className="text-white">Umowa najmu miejsca</strong> - przy zakupie 
                              nowego miejsca na cmentarzu</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-300">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                              <span><strong className="text-white">Zgoda na pochówek</strong> - w przypadku grobu 
                              rodzinnego (od właściciela grobu)</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-300">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                              <span><strong className="text-white">Dokument własności grobu</strong> - potwierdzenie 
                              prawa do grobu rodzinnego</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                          <p className="text-gray-300">
                            <strong className="text-white">Pomoc zakładu:</strong> Zakład pogrzebowy zazwyczaj 
                            zajmuje się rezerwacją miejsca na cmentarzu i załatwieniem wszystkich formalności 
                            cmentarnych.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Dokumenty Transportowe
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-white mb-3">Zezwolenie na Przewóz Zwłok</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">Kto wydaje:</p>
                          <p className="text-white">Państwowy Powiatowy Inspektor Sanitarny (PPIS)</p>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">Kiedy potrzebne:</p>
                          <ul className="space-y-1 mt-2">
                            <li className="flex items-start gap-2 text-gray-300">
                              <span className="text-primary mt-1">•</span>
                              <span>Przy każdym przewozie zwłok</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-300">
                              <span className="text-primary mt-1">•</span>
                              <span>Transport do krematorium</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-300">
                              <span className="text-primary mt-1">•</span>
                              <span>Przewóz na inny cmentarz</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">Wymagane dokumenty:</p>
                          <ul className="space-y-1 mt-2">
                            <li className="flex items-start gap-2 text-gray-300">
                              <span className="text-primary mt-1">•</span>
                              <span>Karta zgonu</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-300">
                              <span className="text-primary mt-1">•</span>
                              <span>Akt zgonu</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-300">
                              <span className="text-primary mt-1">•</span>
                              <span>Wniosek o wydanie zezwolenia</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                          <p className="text-sm text-gray-400 mb-1">Czas realizacji:</p>
                          <p className="text-white">1-2 dni robocze</p>
                        </div>
                        
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                          <p className="text-gray-300">
                            <strong className="text-white">Pomoc zakładu:</strong> Zakład pogrzebowy zazwyczaj 
                            zajmuje się uzyskaniem zezwolenia na przewóz zwłok.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Dokumenty do Zasiłku Pogrzebowego
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Zasiłek pogrzebowy z ZUS lub KRUS pomaga pokryć koszty pogrzebu. Oto dokumenty potrzebne 
                    do jego uzyskania:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dokumenty Wymagane:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Wniosek o zasiłek pogrzebowy (druk ZUS Z-12)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Skrócony akt zgonu</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Rachunek lub faktura za pogrzeb</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Dowód osobisty wnioskującego</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Numer konta bankowego</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-white">Pomoc zakładu:</strong> Wiele zakładów pogrzebowych pomaga 
                        w wypełnieniu wniosku o zasiłek pogrzebowy i może złożyć go w imieniu rodziny.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-primary" />
                Czego Rodziny Często Zapominają
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Niektóre dokumenty są często pomijane lub o nich zapominamy. Oto lista rzeczy, 
                    o których warto pamiętać:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dodatkowe Odpisy Aktu Zgonu</h3>
                      <p className="text-gray-300">
                        Warto od razu zamówić kilka odpisów aktu zgonu (3-5 sztuk). Będą potrzebne do: banku, 
                        ubezpieczyciela, ZUS, spadku, rozliczeń z operatorami telefonicznymi itp.
                      </p>
                    </div>
                    
                    <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dokumenty Grobu Rodzinnego</h3>
                      <p className="text-gray-300">
                        Jeśli pochówek ma odbyć się w grobie rodzinnym, potrzebna jest zgoda właściciela grobu 
                        oraz dokument potwierdzający prawo do grobu. Warto to sprawdzić z wyprzedzeniem.
                      </p>
                    </div>
                    
                    <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Ubezpieczenie Pogrzebowe</h3>
                      <p className="text-gray-300">
                        Jeśli zmarły miał ubezpieczenie na życie lub ubezpieczenie pogrzebowe, warto od razu 
                        skontaktować się z ubezpieczycielem. Mogą pokryć część lub całość kosztów.
                      </p>
                    </div>
                    
                    <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dokumenty do Kremacji</h3>
                      <p className="text-gray-300">
                        W przypadku kremacji mogą być wymagane dodatkowe dokumenty, w tym pisemna zgoda zmarłego 
                        na kremację (jeśli została sporządzona za życia) lub zgoda rodziny.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Jak Zakład Pogrzebowy Może Pomóc
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Profesjonalny zakład pogrzebowy może załatwić większość dokumentów w Twoim imieniu, 
                    oszczędzając Ci czasu i stresu w trudnym momencie.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Zakład Pogrzebowy Może Załatwić:</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Uzyskanie aktu zgonu z USC</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Zezwolenie na przewóz zwłok od PPIS</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Rezerwację miejsca na cmentarzu</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Formalności cmentarne</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Pomoc w wypełnieniu wniosku o zasiłek pogrzebowy</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Koordynację z krematorium (jeśli dotyczy)</span>
                    </li>
                  </ul>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">W Nekrolog Łódź:</strong> Zajmujemy się wszystkimi formalnościami 
                      i dokumentami. Ty skupiasz się na pożegnaniu bliskiej osoby, my załatwiamy resztę.
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
                      Jakie dokumenty są potrzebne do organizacji pogrzebu?
                    </h3>
                    <p className="text-gray-300">
                      Do organizacji pogrzebu potrzebne są: karta zgonu (od lekarza), akt zgonu (z USC), dowód 
                      osobisty zmarłego, dokumenty cmentarza (potwierdzenie miejsca pochówku), zezwolenie na przewóz 
                      zwłok (od PPIS), dokumenty do zasiłku pogrzebowego. Zakład pogrzebowy pomoże w kompletowaniu 
                      dokumentacji.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Gdzie uzyskać akt zgonu?
                    </h3>
                    <p className="text-gray-300">
                      Akt zgonu wydaje Urząd Stanu Cywilnego właściwy dla miejsca zgonu. Należy złożyć wniosek wraz 
                      z kartą zgonu wystawioną przez lekarza. Akt zgonu jest wydawany zazwyczaj tego samego dnia lub 
                      następnego dnia roboczego. Jest to dokument bezpłatny.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy zakład pogrzebowy może załatwić dokumenty?
                    </h3>
                    <p className="text-gray-300">
                      Tak, profesjonalny zakład pogrzebowy może załatwić większość dokumentów w imieniu rodziny. 
                      Obejmuje to: uzyskanie aktu zgonu, rezerwację miejsca na cmentarzu, zezwolenie na przewóz zwłok, 
                      wniosek o zasiłek pogrzebowy. Rodzina musi jedynie dostarczyć podstawowe dokumenty zmarłego.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Ile kosztują dokumenty pogrzebowe?
                    </h3>
                    <p className="text-gray-300">
                      Większość dokumentów jest bezpłatna: karta zgonu, pierwszy egzemplarz aktu zgonu, zezwolenie 
                      na przewóz zwłok. Płatne są: dodatkowe odpisy aktu zgonu (ok. 22 zł), miejsce na cmentarzu 
                      (różnie w zależności od cmentarza), formalności cmentarne (zazwyczaj wliczone w usługi zakładu).
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
                  Potrzebujesz Pomocy z Dokumentami?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Zajmiemy się wszystkimi formalnościami - bez kosztów z góry
                </p>
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
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
              <Link href="/poradnik/czy-zaklad-pogrzebowy-moze-dopelnic-formalnosci-pogrzebowych-w-zastepstwie-klienta" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Formalności w Zastępstwie</h3>
                    <p className="text-gray-400 text-sm">Jak zakład może pomóc</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/zasilek-pogrzebowy-zus" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Zasiłek Pogrzebowy</h3>
                    <p className="text-gray-400 text-sm">Jak uzyskać zasiłek z ZUS</p>
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
