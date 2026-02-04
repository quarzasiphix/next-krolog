import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, AlertCircle, BookOpen, Scale } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Czy Urnę z Prochami Można Trzymać w Domu? Prawo i Praktyka | Nekrolog Łódź',
  description: 'Dowiedz się, czy można trzymać urnę z prochami w domu. Wyjaśniamy polskie prawo, praktyki religijne i emocjonalne aspekty przechowywania urny ze szczątkami bliskiej osoby.',
  keywords: [
    'urna z prochami w domu',
    'przechowywanie urny',
    'prawo kremacja polska',
    'urna ze szczątkami',
    'kremacja przepisy',
    'czy można trzymać urnę w domu',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/czy-urne-z-prochami-mozna-trzymac-w-domu`,
  },
  openGraph: {
    title: 'Czy Urnę z Prochami Można Trzymać w Domu? Prawo i Praktyka',
    description: 'Kompleksowy przewodnik o przechowywaniu urny z prochami - aspekty prawne, religijne i emocjonalne.',
    url: `${SITE_URL}/poradnik/czy-urne-z-prochami-mozna-trzymac-w-domu`,
    type: 'article',
  },
}

export default function UrnaWDomuPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Czy w Polsce można legalnie trzymać urnę z prochami w domu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, polskie prawo nie zabrania przechowywania urny z prochami w domu. Zgodnie z ustawą o cmentarzach i chowaniu zmarłych, rodzina może zdecydować o pozostawieniu urny w miejscu zamieszkania. Nie ma określonego limitu czasowego na podjęcie decyzji o pochówku.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jak długo można trzymać urnę z prochami w domu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Polskie prawo nie określa maksymalnego czasu przechowywania urny w domu. Rodzina może trzymać urnę tak długo, jak uzna za stosowne. Wiele osób przechowuje urnę przez kilka miesięcy do momentu podjęcia ostatecznej decyzji o miejscu pochówku.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy Kościół katolicki pozwala na trzymanie urny w domu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kościół katolicki zaleca pochowanie urny na cmentarzu lub w kolumbarium. Jednak tymczasowe przechowywanie urny w domu do czasu podjęcia decyzji o pochówku jest akceptowane. Kościół podkreśla, że ostatecznym miejscem spoczynku powinno być miejsce poświęcone.',
        },
      },
      {
        '@type': 'Question',
        name: 'Gdzie najlepiej przechowywać urnę w domu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Urnę należy przechowywać w spokojnym, godnym miejscu, z dala od wilgoci i bezpośredniego światła słonecznego. Wiele osób wybiera specjalną półkę, komodę lub gablotę w salonie lub sypialni. Ważne jest, aby miejsce było bezpieczne i traktowane z szacunkiem.',
        },
      },
      {
        '@type': 'Question',
        name: 'Co zrobić z urną po podjęciu decyzji o pochówku?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Po podjęciu decyzji o pochówku należy skontaktować się z zakładem pogrzebowym, który pomoże w organizacji ceremonii pochówku urny na cmentarzu lub w kolumbarium. Zakład zajmie się wszystkimi formalnościami i transportem urny.',
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
              Czy Urnę z Prochami Można Trzymać w Domu?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Pytanie o możliwość przechowywania urny z prochami w domu pojawia się często po kremacji bliskiej osoby. 
              W tym artykule wyjaśniamy aspekty prawne, religijne i emocjonalne związane z tą decyzją.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-primary" />
                Aspekty Prawne - Co Mówi Polskie Prawo
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Zgodnie z polskim prawem, a konkretnie z ustawą z dnia 31 stycznia 1959 r. o cmentarzach i chowaniu zmarłych, 
                    <strong className="text-white"> przechowywanie urny z prochami w domu jest legalne</strong>. Prawo nie nakłada 
                    obowiązku natychmiastowego pochowania urny na cmentarzu.
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Kluczowe Informacje Prawne:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Nie ma prawnego zakazu przechowywania urny w miejscu zamieszkania</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Brak określonego limitu czasowego na podjęcie decyzji o pochówku</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Rodzina ma pełne prawo decyzji o losie urny</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>Nie wymaga się specjalnych pozwoleń ani zgłoszeń</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Warto jednak pamiętać, że choć prawo nie zabrania przechowywania urny w domu, to ostatecznym celem 
                    powinno być godne pochowanie szczątków w miejscu do tego przeznaczonym - na cmentarzu lub w kolumbarium.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Stanowisko Kościoła Katolickiego
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Kościół katolicki ma jasne stanowisko w kwestii przechowywania prochów. Instrukcja Kongregacji Nauki Wiary 
                    "Ad resurgendum cum Christo" z 2016 roku zaleca, aby prochy zmarłych były <strong className="text-white">
                    pochowane na cmentarzu lub w innym miejscu świętym</strong>.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-3 mt-6">Zalecenia Kościoła:</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Prochy powinny spoczywać w miejscu poświęconym - na cmentarzu lub w kolumbarium</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Nie zaleca się rozpraszania prochów ani przechowywania ich w domu na stałe</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Tymczasowe przechowywanie urny do czasu pochówku jest akceptowane</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Ważne jest, aby miejsce spoczynku umożliwiało modlitwę i pamięć</span>
                    </li>
                  </ul>
                  
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-gray-300 leading-relaxed italic">
                      "Przechowywanie prochów w domu nie jest zgodne z wiarą chrześcijańską. Ciało zmarłego nie jest 
                      własnością rodziny, lecz świątynią Ducha Świętego i powinno spocząć w miejscu poświęconym."
                    </p>
                    <p className="text-sm text-gray-400 mt-2">- Fragment instrukcji Kongregacji Nauki Wiary</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Aspekty Emocjonalne i Psychologiczne
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Decyzja o przechowywaniu urny w domu często wynika z potrzeby bliskości ze zmarłym i trudności 
                    w pogodzeniu się ze stratą. To naturalna reakcja w procesie żałoby.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Powody Przechowywania Urny w Domu:</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-2">Potrzeba Bliskości</h4>
                      <p className="text-gray-300">
                        Wiele osób czuje, że trzymając urnę w domu, zachowuje bliskość z osobą zmarłą. 
                        To może przynosić pocieszenie w pierwszych miesiącach po stracie.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-2">Czas na Decyzję</h4>
                      <p className="text-gray-300">
                        Przechowywanie urny daje rodzinie czas na przemyślenie, gdzie chcą pochować bliską osobę. 
                        Nie trzeba podejmować tej decyzji w pośpiechu.
                      </p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-2">Oczekiwanie na Ceremonię</h4>
                      <p className="text-gray-300">
                        Niektóre rodziny czekają na odpowiedni moment lub zebranie wszystkich bliskich przed 
                        ceremonią pochówku urny.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">Wsparcie Psychologiczne</h4>
                        <p className="text-gray-300">
                          Jeśli przechowywanie urny w domu przedłuża się i utrudnia proces żałoby, warto rozważyć 
                          rozmowę z psychologiem lub terapeutą specjalizującym się w żałobie. Pochówek urny może 
                          być ważnym krokiem w procesie godzenia się ze stratą.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Praktyczne Aspekty Przechowywania Urny
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Jeśli zdecydowaliście się na tymczasowe przechowywanie urny w domu, ważne jest, aby zrobić to 
                    w sposób godny i bezpieczny.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Gdzie Przechowywać Urnę:</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Spokojne miejsce</strong> - wybierz ciche, godne miejsce w domu</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Z dala od wilgoci</strong> - unikaj łazienek i pomieszczeń z wysoką wilgotnością</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Bezpieczne miejsce</strong> - gdzie urna nie zostanie przypadkowo przewrócona</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Z dala od światła</strong> - bezpośrednie światło słoneczne może uszkodzić urnę</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-medium text-white mb-4 mt-6">Popularne Miejsca:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-gray-300">• Specjalna półka w salonie</p>
                      <p className="text-gray-300">• Komoda w sypialni</p>
                      <p className="text-gray-300">• Gablota z pamiątkami</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-gray-300">• Domowa kapliczka</p>
                      <p className="text-gray-300">• Biblioteczka</p>
                      <p className="text-gray-300">• Specjalny stolik pamiątkowy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Kiedy Zdecydować Się na Pochówek Urny
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Choć prawo nie określa terminu, psychologowie i duchowni zalecają, aby urna została pochowana 
                    w ciągu kilku miesięcy do roku po kremacji. Pochówek urny jest ważnym elementem procesu żałoby 
                    i zamknięcia pewnego etapu.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Znaki, że Nadszedł Czas na Pochówek:</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Rodzina czuje się gotowa na ceremonię pożegnania</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Minął okres intensywnej żałoby</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Znaleziono odpowiednie miejsce na cmentarzu</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Wszyscy bliscy mogą uczestniczyć w ceremonii</span>
                    </li>
                  </ul>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">Pomoc w Organizacji Pochówku Urny</h4>
                    <p className="text-gray-300 mb-4">
                      Zakład Pogrzebowy Nekrolog Łódź pomaga w organizacji ceremonii pochówku urny. Zajmujemy się 
                      wszystkimi formalnościami, rezerwacją miejsca na cmentarzu lub w kolumbarium oraz transportem urny.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Bez kosztów z góry</strong> - rozliczenie bezpośrednio z zasiłkiem pogrzebowym.
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
                      Czy w Polsce można legalnie trzymać urnę z prochami w domu?
                    </h3>
                    <p className="text-gray-300">
                      Tak, polskie prawo nie zabrania przechowywania urny z prochami w domu. Zgodnie z ustawą o cmentarzach 
                      i chowaniu zmarłych, rodzina może zdecydować o pozostawieniu urny w miejscu zamieszkania. Nie ma 
                      określonego limitu czasowego na podjęcie decyzji o pochówku.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Jak długo można trzymać urnę z prochami w domu?
                    </h3>
                    <p className="text-gray-300">
                      Polskie prawo nie określa maksymalnego czasu przechowywania urny w domu. Rodzina może trzymać urnę 
                      tak długo, jak uzna za stosowne. Wiele osób przechowuje urnę przez kilka miesięcy do momentu podjęcia 
                      ostatecznej decyzji o miejscu pochówku.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy Kościół katolicki pozwala na trzymanie urny w domu?
                    </h3>
                    <p className="text-gray-300">
                      Kościół katolicki zaleca pochowanie urny na cmentarzu lub w kolumbarium. Jednak tymczasowe przechowywanie 
                      urny w domu do czasu podjęcia decyzji o pochówku jest akceptowane. Kościół podkreśla, że ostatecznym 
                      miejscem spoczynku powinno być miejsce poświęcone.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Gdzie najlepiej przechowywać urnę w domu?
                    </h3>
                    <p className="text-gray-300">
                      Urnę należy przechowywać w spokojnym, godnym miejscu, z dala od wilgoci i bezpośredniego światła 
                      słonecznego. Wiele osób wybiera specjalną półkę, komodę lub gablotę w salonie lub sypialni. Ważne jest, 
                      aby miejsce było bezpieczne i traktowane z szacunkiem.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Co zrobić z urną po podjęciu decyzji o pochówku?
                    </h3>
                    <p className="text-gray-300">
                      Po podjęciu decyzji o pochówku należy skontaktować się z zakładem pogrzebowym, który pomoże w organizacji 
                      ceremonii pochówku urny na cmentarzu lub w kolumbarium. Zakład zajmie się wszystkimi formalnościami 
                      i transportem urny.
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
                  Potrzebujesz Pomocy w Organizacji Pochówku Urny?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Pomożemy w organizacji ceremonii pochówku urny - bez kosztów z góry
                </p>
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
                <p className="text-sm text-gray-400 mt-6">
                  Dostępni całodobowo • Rozliczenie z zasiłkiem pogrzebowym
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
              <Link href="/poradnik/jak-wyglada-kremacja-zwlok" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Jak Wygląda Kremacja Zwłok</h3>
                    <p className="text-gray-400 text-sm">Proces kremacji krok po kroku</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/uslugi/krematorium-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Krematorium Łódź</h3>
                    <p className="text-gray-400 text-sm">Organizacja kremacji w Łodzi</p>
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
              <Link href="/cmentarze-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Cmentarze w Łodzi</h3>
                    <p className="text-gray-400 text-sm">Przewodnik po cmentarzach</p>
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
