import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, CheckCircle2, Building2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cmentarze w Łodzi - Przewodnik Po Cmentarzach | Nekrolog Łódź',
  description: 'Kompletny przewodnik po cmentarzach w Łodzi. Adresy, godziny otwarcia, procedury pogrzebowe. Organizujemy pogrzeby na wszystkich cmentarzach w Łodzi bez kosztów z góry. Tel: +48 602 274 661.',
  keywords: [
    'cmentarze łódź',
    'cmentarze w łodzi',
    'cmentarz łódź',
    'cmentarz doły',
    'cmentarz radogoszcz',
    'pogrzeb łódź',
    'organizacja pogrzebu łódź',
  ],
}

export default function CmentarzeLodzPage() {
  const cemeteries = [
    {
      name: 'Cmentarz Doły',
      address: 'ul. Smutna 2, 91-729 Łódź',
      description: 'Największy cmentarz komunalny w Łodzi, założony w 1892 roku. Ponad 180 hektarów powierzchni.',
      features: [
        'Największy cmentarz w Łodzi',
        'Sekcje katolickie, prawosławne, ewangelickie',
        'Możliwość pochówku tradycyjnego i urnowego',
        'Kolumbarium',
      ],
      slug: 'doly',
    },
    {
      name: 'Cmentarz Radogoszcz',
      address: 'ul. Zgierska 205, 91-520 Łódź',
      description: 'Cmentarz komunalny na północy Łodzi, otwarty w 1971 roku.',
      features: [
        'Nowoczesna infrastruktura',
        'Sekcje wyznaniowe',
        'Pochówki tradycyjne i urnowe',
        'Dobre połączenia komunikacyjne',
      ],
      slug: 'radogoszcz',
    },
    {
      name: 'Stary Cmentarz',
      address: 'ul. Ogrodowa 43, 91-065 Łódź',
      description: 'Zabytkowy cmentarz w centrum Łodzi, założony w 1855 roku.',
      features: [
        'Zabytkowy cmentarz',
        'Sekcje katolicka, ewangelicka, prawosławna',
        'Historyczne nagrobki',
        'Centralna lokalizacja',
      ],
      slug: 'stary',
    },
    {
      name: 'Cmentarz Zarzew',
      address: 'ul. Traktorowa 84, 91-204 Łódź',
      description: 'Cmentarz komunalny na wschodzie Łodzi.',
      features: [
        'Spokojne położenie',
        'Sekcje wyznaniowe',
        'Pochówki tradycyjne i urnowe',
        'Łatwy dojazd',
      ],
      slug: 'zarzew',
    },
    {
      name: 'Cmentarz Komunalny Północny',
      address: 'ul. Szczecińska 40, 91-479 Łódź',
      description: 'Nowoczesny cmentarz komunalny na północy miasta.',
      features: [
        'Nowoczesna infrastruktura',
        'Kolumbarium',
        'Pochówki tradycyjne i urnowe',
        'Parking dla odwiedzających',
      ],
      slug: 'komunalny-polnocny',
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative pt-20 pb-12 bg-gradient-to-b from-black via-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
              Cmentarze w Łodzi
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Kompletny przewodnik po cmentarzach w Łodzi - adresy, godziny otwarcia, procedury pogrzebowe
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <p className="text-lg text-white mb-4">
                <strong>Organizujemy pogrzeby na wszystkich cmentarzach w Łodzi</strong>
              </p>
              <p className="text-gray-300 mb-4">
                Bez kosztów z góry - rozliczenie bezpośrednio z zasiłkiem pogrzebowym ZUS/KRUS
              </p>
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
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Główne Cmentarze w Łodzi
            </h2>

            <div className="grid gap-6 mb-12">
              {cemeteries.map((cemetery, index) => (
                <Card key={index} className="bg-black/30 border border-white/10 hover:border-primary/30 transition">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-playfair font-medium text-white mb-3">
                          {cemetery.name}
                        </h3>
                        <div className="flex items-start gap-2 text-gray-400 mb-4">
                          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>{cemetery.address}</span>
                        </div>
                        <p className="text-gray-300 mb-4">{cemetery.description}</p>
                        <div className="space-y-2">
                          {cemetery.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-gray-400">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Link
                          href={`/cmentarze-lodz/${cemetery.slug}`}
                          className="inline-flex items-center justify-center gap-2 bg-primary/10 border border-primary/30 text-white px-6 py-3 rounded-md font-medium hover:bg-primary/20 transition whitespace-nowrap"
                        >
                          Więcej informacji
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-playfair font-medium text-white mb-6 text-center">
                Jak Organizujemy Pogrzeby Na Cmentarzach w Łodzi
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-primary" />
                    Kontakt z Administracją
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Rezerwacja miejsca na cmentarzu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ustalenie terminu pogrzebu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Załatwienie formalności</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Koordynacja z parafią</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    Organizacja Ceremonii
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Transport zmarłego na cmentarz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Koordynacja ceremonii</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Oprawa muzyczna i florystyczna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Obsługa pochówku</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Najczęściej Zadawane Pytania
            </h2>

            <div className="space-y-4 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Czy mogę wybrać dowolny cmentarz w Łodzi?
                  </h3>
                  <p className="text-gray-300">
                    Tak, możesz wybrać dowolny cmentarz w Łodzi. Pomożemy w rezerwacji miejsca i załatwieniu 
                    wszystkich formalności na wybranym cmentarzu. Organizujemy pogrzeby na wszystkich cmentarzach 
                    komunalnych i parafialnych w Łodzi.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Ile kosztuje miejsce na cmentarzu?
                  </h3>
                  <p className="text-gray-300">
                    Koszty miejsca na cmentarzu różnią się w zależności od cmentarza i rodzaju grobu (tradycyjny, 
                    urnowy). Ceny ustala administracja cmentarza. Pomożemy w wyborze najlepszej opcji dla Twojej 
                    sytuacji i budżetu.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Czy muszę płacić za pogrzeb z góry?
                  </h3>
                  <p className="text-gray-300">
                    Nie. Organizujemy pogrzeb i finansujemy wszystkie koszty. Rozliczenie następuje bezpośrednio 
                    z zasiłkiem pogrzebowym ZUS/KRUS. Nie musisz martwić się o pieniądze w tym trudnym czasie.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Jak długo trwa rezerwacja miejsca na cmentarzu?
                  </h3>
                  <p className="text-gray-300">
                    Rezerwacja miejsca na cmentarzu zazwyczaj trwa 1-2 dni robocze. W pilnych przypadkach możemy 
                    przyspieszyć ten proces. Zajmujemy się całą procedurą - nie musisz osobiście kontaktować się 
                    z administracją cmentarza.
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
                  Potrzebujesz Pomocy w Organizacji Pogrzebu?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Organizujemy pogrzeby na wszystkich cmentarzach w Łodzi - bez kosztów z góry
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
                    <p className="text-gray-400 text-sm">Jak uzyskać zasiłek i ile wynosi</p>
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
