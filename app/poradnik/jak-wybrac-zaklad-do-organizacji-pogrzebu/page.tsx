import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, Search, Star, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Jak Wybrać Zakład Pogrzebowy? Praktyczny Przewodnik | Nekrolog Łódź',
  description: 'Dowiedz się, na co zwrócić uwagę przy wyborze zakładu pogrzebowego. Praktyczne porady, lista pytań i informacje o Nekrolog Łódź - zakładzie bez kosztów z góry.',
  keywords: [
    'jak wybrać zakład pogrzebowy',
    'wybór zakładu pogrzebowego',
    'dobry zakład pogrzebowy',
    'zakład pogrzebowy łódź',
    'pogrzeb bez zaliczki',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/jak-wybrac-zaklad-do-organizacji-pogrzebu`,
  },
  openGraph: {
    title: 'Jak Wybrać Zakład Pogrzebowy? Praktyczny Przewodnik',
    description: 'Kompleksowy przewodnik po wyborze zakładu pogrzebowego - na co zwrócić uwagę i jakie pytania zadać.',
    url: `${SITE_URL}/poradnik/jak-wybrac-zaklad-do-organizacji-pogrzebu`,
    type: 'article',
  },
}

export default function WyborZakladuPage() {
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
              Jak Wybrać Zakład Pogrzebowy?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Wybór zakładu pogrzebowego to ważna decyzja w trudnym czasie. W tym przewodniku znajdziesz praktyczne 
              porady, na co zwrócić uwagę i jakie pytania zadać, aby wybrać profesjonalną i rzetelną firmę.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Search className="w-8 h-8 text-primary" />
                Na Co Zwrócić Uwagę?
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Wybór zakładu pogrzebowego powinien być przemyślany. Oto najważniejsze kryteria, które pomogą 
                    Ci podjąć dobrą decyzję:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Doświadczenie i Reputacja
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Sprawdź, jak długo firma działa na rynku</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Poszukaj opinii innych klientów w internecie</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Zapytaj znajomych o rekomendacje</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Transparentność Cenowa
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Czy firma przedstawia jasny cennik?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Czy są ukryte opłaty?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Czy oferują różne pakiety cenowe?</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Zakres Usług</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Czy oferują kompleksową obsługę?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Czy zajmują się formalnościami?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Czy mają własny transport?</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-3">Dostępność</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Czy są dostępni całodobowo?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Jak szybko mogą przyjechać?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Czy mają biuro w Twojej okolicy?</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Pytania, Które Warto Zadać
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Podczas rozmowy z zakładem pogrzebowym warto zadać kilka kluczowych pytań:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Pytania o Koszty:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Jaki jest całkowity koszt pogrzebu?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Co dokładnie wchodzi w cenę?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Czy są dodatkowe opłaty?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Kiedy trzeba zapłacić?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Czy można rozliczyć się z zasiłkiem pogrzebowym?</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Pytania o Usługi:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Jakie usługi są wliczone w cenę?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Czy zajmują się załatwianiem formalności?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Czy pomagają w uzyskaniu zasiłku pogrzebowego?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Czy mają własną kaplicę?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Czy oferują transport międzynarodowy?</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Pytania o Doświadczenie:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Jak długo firma działa na rynku?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Czy personel jest wykwalifikowany?</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Czy mają doświadczenie w organizacji pogrzebów różnych wyznań?</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Sygnały Ostrzegawcze - Czego Unikać
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Niektóre sygnały powinny wzbudzić Twoją czujność:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-white">Brak jasnego cennika</strong> - unikaj firm, które nie chcą 
                        podać konkretnych cen
                      </p>
                    </div>
                    
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-white">Presja czasowa</strong> - nikt nie powinien Cię naciskać na 
                        szybką decyzję
                      </p>
                    </div>
                    
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-white">Ukryte opłaty</strong> - wszystkie koszty powinny być jasno 
                        przedstawione z góry
                      </p>
                    </div>
                    
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-white">Brak profesjonalizmu</strong> - personel powinien być uprzejmy 
                        i kompetentny
                      </p>
                    </div>
                    
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
                      <p className="text-gray-300">
                        <strong className="text-white">Złe opinie</strong> - sprawdź opinie w internecie przed 
                        podjęciem decyzji
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Wybierz Zakład Bez Opłat z Góry
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Jeśli nie masz środków finansowych w momencie śmierci bliskiej osoby, wybierz zakład pogrzebowy, 
                    który oferuje organizację pogrzebu bez konieczności wpłaty z góry. To rozwiązanie, które pozwala 
                    Ci skupić się na pożegnaniu, a nie na sprawach finansowych.
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-medium text-white mb-3">Dlaczego To Ważne?</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Zasiłek pogrzebowy jest wypłacany dopiero po 2-3 miesiącach</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Pogrzeb musi odbyć się w ciągu kilku dni</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Nie musisz martwić się o pieniądze w trudnym czasie</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium text-white mb-4 text-center">
                      Nekrolog Łódź - Jolanta Kostowska
                    </h3>
                    <p className="text-gray-300 mb-4 text-center">
                      Organizujemy pogrzeby bez żadnych kosztów z góry. Finansujemy wszystko i rozliczamy się 
                      bezpośrednio z zasiłkiem pogrzebowym z ZUS lub KRUS.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <p className="text-gray-300">
                          <strong className="text-white">Zadzwoń do nas</strong> - dostępni całodobowo
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold">2</span>
                        </div>
                        <p className="text-gray-300">
                          <strong className="text-white">My organizujemy pogrzeb</strong> - finansujemy wszystkie koszty
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold">3</span>
                        </div>
                        <p className="text-gray-300">
                          <strong className="text-white">Rozliczamy się z zasiłkiem</strong> - Ty nie płacisz nic
                        </p>
                      </div>
                    </div>

                    <div className="text-center">
                      <a
                        href="tel:+48602274661"
                        className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition"
                      >
                        <Phone className="w-5 h-5" />
                        Zadzwoń: +48 602 274 661
                      </a>
                      <p className="text-sm text-gray-400 mt-3">
                        Dostępni 24/7 • Bez zaliczki • Pełne wsparcie
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white mb-3">Co Oferujemy:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Organizacja pogrzebu bez żadnych kosztów z góry</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Pomoc w wypełnieniu wniosku o zasiłek pogrzebowy</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Załatwienie wszystkich formalności</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Bezpośrednie rozliczenie z ZUS/KRUS</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Godny pogrzeb w ramach zasiłku pogrzebowego</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Nekrolog Łódź - Nasz Model Obsługi
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    W Zakładzie Pogrzebowym Nekrolog Łódź stawiamy na przejrzystość, profesjonalizm i wsparcie 
                    dla rodzin w trudnym czasie. Oto, co nas wyróżnia:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Bez Kosztów z Góry</h3>
                      <p className="text-gray-300">
                        Organizujemy pogrzeb i finansujemy wszystkie koszty. Rozliczenie następuje bezpośrednio 
                        z zasiłkiem pogrzebowym ZUS/KRUS. Nie musisz martwić się o pieniądze w tym trudnym czasie.
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Uproszczony Proces</h3>
                      <p className="text-gray-300">
                        Zajmujemy się wszystkimi formalnościami - od uzyskania aktu zgonu, przez rezerwację miejsca 
                        na cmentarzu, po wniosek o zasiłek pogrzebowy. Ty skupiasz się na pożegnaniu bliskiej osoby.
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Wsparcie dla Rodzin</h3>
                      <p className="text-gray-300">
                        Nasz doświadczony personel służy pomocą i wsparciem na każdym etapie. Rozumiemy, że to 
                        trudny czas i staramy się ułatwić Ci wszystko, co możliwe.
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Dostępność 24/7</h3>
                      <p className="text-gray-300">
                        Jesteśmy dostępni całodobowo, 7 dni w tygodniu. Możesz zadzwonić o każdej porze - zawsze 
                        znajdziesz u nas pomoc i wsparcie.
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Ponad 20 Lat Doświadczenia</h3>
                      <p className="text-gray-300">
                        Działamy w Łodzi od ponad 20 lat. Zorganizowaliśmy setki pogrzebów, zawsze z pełnym 
                        profesjonalizmem i szacunkiem dla zmarłego i jego rodziny.
                      </p>
                    </div>
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
                      <h3 className="text-lg font-medium text-white mb-2">Nie Spiesz Się z Decyzją</h3>
                      <p className="text-gray-300">
                        Choć sytuacja jest trudna, poświęć chwilę na przemyślenie wyboru. Porównaj oferty kilku 
                        zakładów, jeśli masz taką możliwość.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Poproś o Pomoc</h3>
                      <p className="text-gray-300">
                        Jeśli czujesz się przytłoczony, poproś kogoś z rodziny lub przyjaciół o pomoc w kontakcie 
                        z zakładem pogrzebowym. Dodatkowa para oczu i uszu może być pomocna.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Wszystko na Piśmie</h3>
                      <p className="text-gray-300">
                        Upewnij się, że wszystkie ustalenia i koszty są potwierdzone na piśmie. To zabezpieczy 
                        Cię przed nieporozumieniami.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Zaufaj Intuicji</h3>
                      <p className="text-gray-300">
                        Jeśli coś Ci nie pasuje w kontakcie z danym zakładem, zaufaj swojej intuicji. Ważne jest, 
                        abyś czuł się komfortowo i bezpiecznie.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                  Zadzwoń do nas - bez kosztów z góry, z pełnym wsparciem
                </p>
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Ponad 20 lat doświadczenia
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
                    <p className="text-gray-400 text-sm">Kompletny przewodnik krok po kroku</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/pogrzeb-bez-zaliczki" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Pogrzeb Bez Zaliczki</h3>
                    <p className="text-gray-400 text-sm">Organizacja bez kosztów z góry</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/zasilek-pogrzebowy-zus" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Zasiłek Pogrzebowy ZUS</h3>
                    <p className="text-gray-400 text-sm">Jak uzyskać zasiłek</p>
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
