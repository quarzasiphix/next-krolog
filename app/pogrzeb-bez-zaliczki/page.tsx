import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, Shield, Clock, FileText, Heart, Euro } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { BreadcrumbController } from '@/components/breadcrumb-context'

export const metadata: Metadata = {
  title: 'Pogrzeb Bez Zaliczki w Łodzi - Organizacja Bez Kosztów Z Góry | Nekrolog',
  description: 'Organizujemy pogrzeb bez zaliczki i płatności z góry. Rozliczenie bezpośrednio z zasiłkiem pogrzebowym ZUS/KRUS. Nie musisz martwić się o pieniądze w trudnym czasie. Tel: +48 602 274 661.',
  keywords: [
    'pogrzeb bez zaliczki',
    'pogrzeb bez kosztów z góry',
    'pogrzeb bez płacenia z góry',
    'rozliczenie z zus',
    'pogrzeb finansowany z zus',
    'brak zaliczki na pogrzeb',
    'pogrzeb łódź bez zaliczki',
  ],
  alternates: {
    canonical: '/pogrzeb-bez-zaliczki',
  },
}

export default function PogrzebBezZaliczkiPage() {
  return (
    <>
      <BreadcrumbController
        overrides={[
          { segment: 'pogrzeb-bez-zaliczki', label: 'Pogrzeb Bez Zaliczki' },
        ]}
      />
      <div className="bg-black text-white min-h-screen">
      <section className="relative pt-20 pb-12 bg-gradient-to-b from-black via-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Bez Kosztów Z Góry</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
              Pogrzeb Bez Zaliczki w Łodzi
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Organizujemy pogrzeb i finansujemy wszystkie koszty. Rozliczenie następuje bezpośrednio z zasiłkiem pogrzebowym ZUS/KRUS. Nie musisz martwić się o pieniądze w tym trudnym czasie.
            </p>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8">
              <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                Jak To Działa?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Organizujemy Pogrzeb</h3>
                  <p className="text-gray-300 text-sm">
                    Przejmujemy całą organizację i finansujemy wszystkie koszty
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Pomagamy z ZUS</h3>
                  <p className="text-gray-300 text-sm">
                    Kompletujemy dokumenty do zasiłku pogrzebowego
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Rozliczamy Się</h3>
                  <p className="text-gray-300 text-sm">
                    Bezpośrednie rozliczenie z zasiłkiem pogrzebowym
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-4">
                  Dostępni całodobowo, 7 dni w tygodniu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Dlaczego Oferujemy Pogrzeb Bez Zaliczki?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-medium text-white">Zrozumienie Sytuacji</h3>
                  </div>
                  <p className="text-gray-300">
                    Wiemy, że śmierć bliskiej osoby to trudny czas. Ostatnią rzeczą, o którą powinieneś się martwić, 
                    to pieniądze. Dlatego przejmujemy ciężar finansowy organizacji pogrzebu.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-medium text-white">Bezpieczeństwo i Pewność</h3>
                  </div>
                  <p className="text-gray-300">
                    Masz pewność, że pogrzeb zostanie zorganizowany profesjonalnie, bez względu na Twoją aktualną 
                    sytuację finansową. Wszystko załatwiamy kompleksowo.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-medium text-white">Oszczędność Czasu</h3>
                  </div>
                  <p className="text-gray-300">
                    Nie musisz biegać po bankach, pożyczać pieniędzy od rodziny czy martwić się o środki. 
                    Możesz skupić się na pożegnaniu bliskiej osoby.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-medium text-white">Pomoc w Formalach</h3>
                  </div>
                  <p className="text-gray-300">
                    Pomagamy w kompletowaniu dokumentów do zasiłku pogrzebowego ZUS/KRUS. 
                    Przeprowadzamy przez cały proces krok po kroku.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-playfair font-medium text-white mb-6 text-center">
                Co Obejmuje Nasza Usługa?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Transport zmarłego z miejsca zgonu</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Przygotowanie i przechowanie ciała</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Załatwienie formalności w USC</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Kontakt z parafią i cmentarzem</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Wybór trumny, urny i akcesoriów</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Oprawa muzyczna i florystyczna</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Przygotowanie klepsydry i nekrologu</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Koordynacja ceremonii w dniu pogrzebu</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Pomoc w uzyskaniu zasiłku pogrzebowego</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Wsparcie i doradztwo na każdym etapie</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Jak Wygląda Rozliczenie?
            </h2>

            <div className="space-y-4 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Euro className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Zasiłek Pogrzebowy</h3>
                      <p className="text-gray-300 mb-3">
                        Zasiłek pogrzebowy z ZUS/KRUS wynosi 4000 zł. To kwota, którą państwo wypłaca na pokrycie 
                        kosztów pogrzebu osoby ubezpieczonej.
                      </p>
                      <p className="text-sm text-gray-400">
                        Więcej informacji: <Link href="/poradnik/zasilek-pogrzebowy-zus" className="text-primary hover:underline">
                          Zasiłek Pogrzebowy ZUS - Kompletny Przewodnik
                        </Link>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Dokumenty i Wniosek</h3>
                      <p className="text-gray-300 mb-3">
                        Pomagamy w kompletowaniu wszystkich dokumentów potrzebnych do złożenia wniosku o zasiłek 
                        pogrzebowy. Wypełniamy formularz i doradzamy w całym procesie.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Akt zgonu z USC</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Faktura za pogrzeb</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Wniosek ZUS Z-12 lub KRUS</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Bezpośrednie Rozliczenie</h3>
                      <p className="text-gray-300">
                        Po otrzymaniu zasiłku pogrzebowego z ZUS/KRUS, następuje rozliczenie kosztów pogrzebu. 
                        Jeśli koszty przekraczają kwotę zasiłku, ustalamy dogodny sposób uregulowania różnicy. 
                        Jeśli koszty są niższe, otrzymujesz pozostałą kwotę.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Najczęściej Zadawane Pytania
            </h2>

            <div className="space-y-4 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Czy to jest darmowy pogrzeb?
                  </h3>
                  <p className="text-gray-300">
                    Nie, to nie jest darmowy pogrzeb. Organizujemy pogrzeb i finansujemy koszty, a następnie 
                    rozliczamy się z zasiłkiem pogrzebowym ZUS/KRUS. To forma finansowania, która pozwala 
                    uniknąć płatności z góry w trudnym czasie.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Co jeśli zmarły nie był ubezpieczony?
                  </h3>
                  <p className="text-gray-300">
                    Jeśli zmarły nie był objęty ubezpieczeniem ZUS ani KRUS, możliwe jest uzyskanie zasiłku 
                    z pomocy społecznej. Pomożemy w ustaleniu możliwości i alternatywnych rozwiązań finansowych.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Czy muszę podpisywać jakieś umowy?
                  </h3>
                  <p className="text-gray-300">
                    Tak, podpisujemy standardową umowę na organizację pogrzebu, która określa zakres usług 
                    i sposób rozliczenia. Wszystko jest transparentne i jasno określone.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Jak długo trwa wypłata zasiłku z ZUS?
                  </h3>
                  <p className="text-gray-300">
                    ZUS ma 30 dni na rozpatrzenie wniosku i wypłatę zasiłku. W praktyce często następuje to 
                    szybciej, w ciągu 2-3 tygodni. Mamy doświadczenie w tym procesie i wiemy, jak go przyspieszyć.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Czy mogę wybrać dowolną trumnę i usługi?
                  </h3>
                  <p className="text-gray-300">
                    Tak, masz pełną swobodę wyboru trumny, urny i wszystkich elementów ceremonii. Przedstawiamy 
                    różne opcje w różnych przedziałach cenowych i doradzamy, co będzie najlepsze dla Twojej sytuacji.
                  </p>
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
                  Potrzebujesz Pomocy? Jesteśmy Tu Dla Ciebie
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Zadzwoń o każdej porze - jesteśmy dostępni całodobowo
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <a
                    href="tel:+48602274661"
                    className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                  >
                    <Phone className="w-5 h-5" />
                    Zadzwoń: +48 602 274 661
                  </a>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 border border-primary/30 bg-black/50 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-black/70 transition"
                  >
                    Formularz kontaktowy
                  </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-left mt-8 pt-8 border-t border-primary/20">
                  <div>
                    <h3 className="text-white font-medium mb-2">Doświadczenie</h3>
                    <p className="text-gray-300 text-sm">Ponad 20 lat w branży pogrzebowej</p>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Zaufanie</h3>
                    <p className="text-gray-300 text-sm">94 opinie, ocena 5.0/5.0</p>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Dostępność</h3>
                    <p className="text-gray-300 text-sm">Całodobowo, 7 dni w tygodniu</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-6">
                  Zakład Pogrzebowy Nekrolog Łódź • Jolanta Kostowska<br />
                  Legionów 48, 90-702 Łódź • NIP: 7271089145
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
              Powiązane Tematy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/poradnik/zasilek-pogrzebowy-zus" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Zasiłek Pogrzebowy ZUS</h3>
                    <p className="text-gray-400 text-sm">Jak uzyskać zasiłek i ile wynosi w 2024 roku</p>
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
              <Link href="/uslugi-pogrzebowe-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Usługi Pogrzebowe</h3>
                    <p className="text-gray-400 text-sm">Pełna oferta usług w Łodzi</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/cmentarze-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Cmentarze w Łodzi</h3>
                    <p className="text-gray-400 text-sm">Przewodnik po cmentarzach w Łodzi</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
