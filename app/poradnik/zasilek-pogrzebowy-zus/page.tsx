import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, FileText, Euro, CheckCircle2, AlertCircle, Clock, Building2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Zasiłek Pogrzebowy ZUS 2024 - Ile Wynosi, Jak Uzyskać, Kto Może Otrzymać',
  description: 'Kompletny przewodnik o zasiłku pogrzebowym ZUS i KRUS. Wysokość zasiłku, wymagane dokumenty, procedura składania wniosku. Pomożemy w rozliczeniu bezpośrednio z ZUS - bez kosztów z góry.',
  keywords: [
    'zasiłek pogrzebowy zus',
    'zasiłek pogrzebowy 2024',
    'ile wynosi zasiłek pogrzebowy',
    'wniosek o zasiłek pogrzebowy',
    'zasiłek pogrzebowy krus',
    'dokumenty do zasiłku pogrzebowego',
    'pogrzeb bez zaliczki',
  ],
  alternates: {
    canonical: '/poradnik/zasilek-pogrzebowy-zus',
  },
}

export default function ZasilekPogrzebowyZUSPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative pt-20 pb-12 bg-gradient-to-b from-black via-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
              Zasiłek Pogrzebowy ZUS i KRUS 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Wszystko co musisz wiedzieć o zasiłku pogrzebowym - wysokość, wymagane dokumenty, procedura składania wniosku
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Euro className="w-8 h-8 text-primary" />
                <p className="text-3xl font-bold text-primary">4000 zł</p>
              </div>
              <p className="text-lg text-gray-300">
                Wysokość zasiłku pogrzebowego w 2024 roku
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8">
              <h2 className="text-2xl font-playfair font-medium text-white mb-6 text-center">
                Nie Musisz Płacić Za Pogrzeb Z Góry
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    Jak To Działa?
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">1.</span>
                      <span>Organizujemy pogrzeb i finansujemy wszystkie koszty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">2.</span>
                      <span>Pomożemy w kompletowaniu dokumentów do ZUS/KRUS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">3.</span>
                      <span>Rozliczamy się bezpośrednio z zasiłkiem pogrzebowym</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">4.</span>
                      <span>Nie musisz martwić się o pieniądze w trudnym czasie</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/30 rounded-lg p-6">
                  <p className="text-lg text-white mb-4">
                    <strong>Zadzwoń i Zapytaj o Szczegóły</strong>
                  </p>
                  <a
                    href="tel:+48602274661"
                    className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    +48 602 274 661
                  </a>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Dostępni całodobowo
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-playfair font-medium text-white mb-8">
              Podstawowe Informacje o Zasiłku Pogrzebowym
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Euro className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-medium text-white">Wysokość Zasiłku</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Zasiłek pogrzebowy wynosi <strong className="text-primary">4000 zł</strong> niezależnie od rzeczywistych kosztów pogrzebu.
                  </p>
                  <p className="text-sm text-gray-400">
                    Kwota jest stała i nie zależy od tego, ile faktycznie kosztował pogrzeb.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-medium text-white">Termin Złożenia Wniosku</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Wniosek można złożyć w ciągu <strong className="text-primary">12 miesięcy</strong> od dnia pogrzebu.
                  </p>
                  <p className="text-sm text-gray-400">
                    Nie ma pośpiechu - masz rok czasu na złożenie wniosku.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-playfair font-medium text-white mb-8">
              Kto Może Otrzymać Zasiłek Pogrzebowy?
            </h2>

            <Card className="bg-black/30 border border-white/10 mb-12">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-6">
                  Zasiłek pogrzebowy przysługuje osobie, która pokryła koszty pogrzebu, jeżeli zmarły był:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      ZUS
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Ubezpieczonym (pracownik, przedsiębiorca)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Emerytem lub rencistą</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Członkiem rodziny ubezpieczonego</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Osobą pobierającą zasiłek przedemerytalny</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      KRUS
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Rolnikiem objętym ubezpieczeniem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Domownikiem rolnika</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Emerytem lub rencistą rolniczym</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-playfair font-medium text-white mb-8">
              Wymagane Dokumenty
            </h2>

            <Card className="bg-black/30 border border-white/10 mb-12">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-medium text-white">Lista Dokumentów</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Wniosek o zasiłek pogrzebowy</strong> (formularz ZUS Z-12 lub KRUS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Skrócony odpis aktu zgonu</strong> (z USC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Rachunek lub faktura za pogrzeb</strong> (wystawiona na osobę składającą wniosek)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Dowód osobisty</strong> osoby składającej wniosek</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Numer rachunku bankowego</strong> do przelewu zasiłku</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <p className="text-white">
                    <strong>Pomożemy w kompletowaniu dokumentów!</strong>
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    Zakład pogrzebowy pomoże w przygotowaniu wszystkich niezbędnych dokumentów i wypełnieniu wniosku.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-playfair font-medium text-white mb-8">
              Procedura Składania Wniosku
            </h2>

            <div className="space-y-4 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Przygotowanie Dokumentów</h3>
                      <p className="text-gray-300">
                        Zbierz wszystkie wymagane dokumenty: akt zgonu, fakturę za pogrzeb, dowód osobisty. 
                        Pomożemy w kompletowaniu dokumentacji.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Wypełnienie Wniosku</h3>
                      <p className="text-gray-300">
                        Wypełnij formularz ZUS Z-12 (lub odpowiedni formularz KRUS). Możesz to zrobić online 
                        przez PUE ZUS lub w formie papierowej.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Złożenie Wniosku</h3>
                      <p className="text-gray-300 mb-3">
                        Wniosek możesz złożyć na kilka sposobów:
                      </p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Elektronicznie przez PUE ZUS (Platformę Usług Elektronicznych)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Osobiście w oddziale ZUS/KRUS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Pocztą na adres właściwego oddziału ZUS/KRUS</span>
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
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">Oczekiwanie na Wypłatę</h3>
                      <p className="text-gray-300">
                        ZUS ma 30 dni na rozpatrzenie wniosku i wypłatę zasiłku. W praktyce często następuje 
                        to szybciej. Pieniądze zostaną przelane na wskazany rachunek bankowy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-playfair font-medium text-white mb-8">
              Najczęściej Zadawane Pytania
            </h2>

            <div className="space-y-4 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Co jeśli pogrzeb kosztował więcej niż 4000 zł?
                  </h3>
                  <p className="text-gray-300">
                    Zasiłek pogrzebowy wynosi zawsze 4000 zł, niezależnie od rzeczywistych kosztów pogrzebu. 
                    Jeśli pogrzeb kosztował więcej, różnicę pokrywa osoba organizująca pogrzeb.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Co jeśli pogrzeb kosztował mniej niż 4000 zł?
                  </h3>
                  <p className="text-gray-300">
                    Zasiłek i tak wynosi 4000 zł. Jeśli faktyczne koszty były niższe, otrzymujesz pełną kwotę zasiłku.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Czy zasiłek jest opodatkowany?
                  </h3>
                  <p className="text-gray-300">
                    Nie, zasiłek pogrzebowy jest zwolniony z podatku dochodowego.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Co jeśli zmarły nie był ubezpieczony?
                  </h3>
                  <p className="text-gray-300">
                    Jeśli zmarły nie był objęty ubezpieczeniem społecznym ani rolniczym, zasiłek pogrzebowy 
                    może być wypłacony z pomocy społecznej przez ośrodek pomocy społecznej (zazwyczaj niższa kwota).
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
                  Organizujemy Pogrzeb Bez Kosztów Z Góry
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Rozliczenie bezpośrednio z zasiłkiem pogrzebowym ZUS/KRUS
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
              <Link href="/poradnik/co-zrobic-po-smierci" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Co Zrobić Po Śmierci</h3>
                    <p className="text-gray-400 text-sm">Kompletny przewodnik krok po kroku</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/dokumenty-do-pogrzebu" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Dokumenty Do Pogrzebu</h3>
                    <p className="text-gray-400 text-sm">Lista wymaganych dokumentów</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/pogrzeb-bez-zaliczki" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Pogrzeb Bez Zaliczki</h3>
                    <p className="text-gray-400 text-sm">Organizacja pogrzebu bez kosztów z góry</p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
