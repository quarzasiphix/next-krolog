import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, UserCheck, FileCheck, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Czy Zakład Pogrzebowy Może Dopełnić Formalności w Zastępstwie Klienta? | Nekrolog Łódź',
  description: 'Dowiedz się, jakie formalności zakład pogrzebowy może załatwić za rodzinę. Pełnomocnictwo, dokumenty, zasiłek pogrzebowy - kompleksowa pomoc prawna.',
  keywords: ['formalności pogrzebowe', 'pełnomocnictwo zakład pogrzebowy', 'pomoc w formalnościach', 'zakład pogrzebowy formalności'],
  alternates: {
    canonical: `${SITE_URL}/poradnik/czy-zaklad-pogrzebowy-moze-dopelnic-formalnosci-pogrzebowych-w-zastepstwie-klienta`,
  },
  openGraph: {
    title: 'Czy Zakład Pogrzebowy Może Dopełnić Formalności w Zastępstwie Klienta?',
    description: 'Kompleksowy przewodnik o pomocy zakładu pogrzebowego w załatwianiu formalności.',
    url: `${SITE_URL}/poradnik/czy-zaklad-pogrzebowy-moze-dopelnic-formalnosci-pogrzebowych-w-zastepstwie-klienta`,
    type: 'article',
  },
}

export default function FormalnosciZastepstwoPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Czy zakład pogrzebowy może załatwić dokumenty za rodzinę?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, zakład pogrzebowy może załatwić większość dokumentów w imieniu rodziny, w tym: uzyskanie aktu zgonu, zezwolenie na przewóz zwłok, rezerwację miejsca na cmentarzu, wniosek o zasiłek pogrzebowy. Wymaga to pełnomocnictwa lub zgody rodziny. Zakład Nekrolog Łódź oferuje kompleksową pomoc bez kosztów z góry.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy potrzebne jest pełnomocnictwo dla zakładu pogrzebowego?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'W większości przypadków wystarczy ustna zgoda rodziny. Pełnomocnictwo notarialne jest potrzebne tylko w szczególnych sytuacjach, np. przy skomplikowanych sprawach spadkowych lub gdy zakład ma reprezentować rodzinę w urzędach. Standardowe formalności pogrzebowe nie wymagają notarialnego pełnomocnictwa.',
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
              Czy Zakład Pogrzebowy Może Dopełnić Formalności w Zastępstwie Klienta?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Organizacja pogrzebu wiąże się z wieloma formalnościami. W tym artykule wyjaśniamy, jakie czynności 
              zakład pogrzebowy może wykonać za rodzinę i jak wygląda pomoc prawna w trudnym czasie.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-primary" />
                Zakres Pomocy Zakładu Pogrzebowego
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Tak, zakład pogrzebowy może załatwić większość formalności w imieniu rodziny. Jest to legalne 
                    i powszechnie praktykowane. Oto co możemy zrobić za Ciebie:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Formalności Urzędowe:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Uzyskanie aktu zgonu z USC</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Zamówienie dodatkowych odpisów aktu zgonu</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Uzyskanie zezwolenia na przewóz zwłok od PPIS</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Wypełnienie i złożenie wniosku o zasiłek pogrzebowy</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Formalności Cmentarne:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Rezerwacja miejsca na cmentarzu</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Załatwienie zgody na pochówek w grobie rodzinnym</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Koordynacja z zarządem cmentarza</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Opłaty cmentarne</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Organizacja Ceremonii:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Kontakt z kościołem/kaplicą</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Ustalenie terminu pogrzebu</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Zamówienie kwiatów</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Przygotowanie nekrologów</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-primary" />
                Czy Potrzebne Jest Pełnomocnictwo?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    W większości przypadków pełnomocnictwo notarialne nie jest wymagane. Wystarczy ustna zgoda 
                    rodziny i dostarczenie podstawowych dokumentów.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Bez Pełnomocnictwa:</h3>
                      <p className="text-gray-300 mb-3">Większość standardowych formalności pogrzebowych:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Uzyskanie aktu zgonu (z kartą zgonu dostarczoną przez rodzinę)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zezwolenie na przewóz zwłok</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Rezerwacja miejsca na cmentarzu</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Organizacja ceremonii</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Z Pełnomocnictwem (rzadko potrzebne):</h3>
                      <p className="text-gray-300 mb-3">Tylko w szczególnych sytuacjach:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Skomplikowane sprawy spadkowe</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Reprezentacja w sądzie</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Spory rodzinne dotyczące pogrzebu</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">W praktyce:</strong> Rodzina dostarcza nam podstawowe dokumenty 
                      zmarłego (dowód osobisty, kartę zgonu), a my załatwiamy resztę formalności. To proste i legalne.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Model Nekrolog Łódź - Bez Kosztów z Góry
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    W Zakładzie Pogrzebowym Nekrolog Łódź oferujemy kompleksową pomoc w formalnościach, 
                    a dodatkowo organizujemy pogrzeb bez wymagania wpłaty z góry.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Co Oferujemy:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Organizacja bez kosztów z góry</strong> - finansujemy 
                          wszystkie koszty pogrzebu</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Rozliczenie z zasiłkiem</strong> - bezpośrednie 
                          rozliczenie z ZUS/KRUS</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Wszystkie formalności</strong> - zajmujemy się 
                          kompletną dokumentacją</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Pomoc w uzyskaniu zasiłku</strong> - wypełniamy 
                          i składamy wniosek</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span><strong className="text-white">Wsparcie dla rodzin</strong> - jesteśmy z Tobą 
                          na każdym etapie</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Jak To Działa:</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">1</span>
                          </div>
                          <p className="text-gray-300">Kontaktujesz się z nami - dostępni całodobowo</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">2</span>
                          </div>
                          <p className="text-gray-300">Organizujemy pogrzeb - finansujemy wszystkie koszty</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">3</span>
                          </div>
                          <p className="text-gray-300">Załatwiamy wszystkie formalności - w tym wniosek o zasiłek</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">4</span>
                          </div>
                          <p className="text-gray-300">Rozliczamy się bezpośrednio z ZUS/KRUS</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Ważne:</strong> Ten model jest szczególnie pomocny dla rodzin, 
                      które nie mają środków finansowych w momencie śmierci bliskiej osoby. Więcej informacji 
                      znajdziesz w artykule{' '}
                      <Link href="/poradnik/jak-zorganizowac-pogrzeb-bez-srodkow-finansowych" className="text-primary hover:text-primary/80 underline">
                        Jak Zorganizować Pogrzeb Bez Środków Finansowych
                      </Link>.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Co Rodzina Musi Dostarczyć
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Aby mogliśmy załatwić formalności, rodzina musi dostarczyć tylko podstawowe dokumenty:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Dowód osobisty zmarłego (lub paszport)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Karta zgonu (od lekarza)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Dowód osobisty osoby zgłaszającej</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Informacje o miejscu pochówku (jeśli rodzina ma preferencje)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Dokumenty do zasiłku (numer PESEL, dane do wniosku)</span>
                    </li>
                  </ul>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">To wszystko!</strong> Resztę załatwiamy my. Ty skupiasz się 
                      na pożegnaniu bliskiej osoby.
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
                      Czy zakład pogrzebowy może załatwić dokumenty za rodzinę?
                    </h3>
                    <p className="text-gray-300">
                      Tak, zakład pogrzebowy może załatwić większość dokumentów w imieniu rodziny, w tym: uzyskanie 
                      aktu zgonu, zezwolenie na przewóz zwłok, rezerwację miejsca na cmentarzu, wniosek o zasiłek 
                      pogrzebowy. Wymaga to pełnomocnictwa lub zgody rodziny. Zakład Nekrolog Łódź oferuje kompleksową 
                      pomoc bez kosztów z góry.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy potrzebne jest pełnomocnictwo dla zakładu pogrzebowego?
                    </h3>
                    <p className="text-gray-300">
                      W większości przypadków wystarczy ustna zgoda rodziny. Pełnomocnictwo notarialne jest potrzebne 
                      tylko w szczególnych sytuacjach, np. przy skomplikowanych sprawach spadkowych lub gdy zakład ma 
                      reprezentować rodzinę w urzędach. Standardowe formalności pogrzebowe nie wymagają notarialnego 
                      pełnomocnictwa.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy zakład może złożyć wniosek o zasiłek pogrzebowy?
                    </h3>
                    <p className="text-gray-300">
                      Tak, zakład pogrzebowy może wypełnić i złożyć wniosek o zasiłek pogrzebowy w imieniu rodziny. 
                      Wymaga to dostarczenia podstawowych danych zmarłego i osoby wnioskującej. W Nekrolog Łódź 
                      pomagamy w całym procesie i rozliczamy się bezpośrednio z ZUS/KRUS.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy to legalne, że zakład załatwia formalności?
                    </h3>
                    <p className="text-gray-300">
                      Tak, jest to całkowicie legalne i powszechnie praktykowane. Zakłady pogrzebowe od lat pomagają 
                      rodzinom w załatwianiu formalności. Działa to na zasadzie reprezentacji - rodzina wyraża zgodę, 
                      a zakład działa w jej imieniu.
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
                  Potrzebujesz Pomocy z Formalnościami?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Zajmiemy się wszystkim - bez kosztów z góry
                </p>
                <a href="tel:+48602274661" className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition">
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Kompleksowa pomoc • Bez zaliczki
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
                    <p className="text-gray-400 text-sm">Kompletna lista</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/jak-zorganizowac-pogrzeb-bez-srodkow-finansowych" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Pogrzeb Bez Środków</h3>
                    <p className="text-gray-400 text-sm">Jak zorganizować bez pieniędzy</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/zasilek-pogrzebowy-zus" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Zasiłek Pogrzebowy</h3>
                    <p className="text-gray-400 text-sm">Jak uzyskać zasiłek</p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
