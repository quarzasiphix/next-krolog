import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, Heart, Shirt } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'W Co Ubrać Zmarłego na Pogrzeb? Praktyczny Przewodnik | Nekrolog Łódź',
  description: 'Praktyczny przewodnik o ubiorze zmarłego na pogrzeb. Dowiedz się, w co ubrać bliską osobę, jakie są tradycje i co jest odpowiednie. Porady dla rodzin w trudnej chwili.',
  keywords: [
    'w co ubrać zmarłego',
    'ubiór na pogrzeb',
    'odzież pogrzebowa',
    'strój zmarłego',
    'ubranie do trumny',
    'tradycje pogrzebowe',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/w-co-ubrac-zmarlego-na-pogrzeb`,
  },
  openGraph: {
    title: 'W Co Ubrać Zmarłego na Pogrzeb? Praktyczny Przewodnik',
    description: 'Kompleksowy przewodnik o wyborze ubioru dla zmarłego - tradycje, praktyczne porady i aspekty kulturowe.',
    url: `${SITE_URL}/poradnik/w-co-ubrac-zmarlego-na-pogrzeb`,
    type: 'article',
  },
}

export default function UbiorZmarlegoPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'W co najczęściej ubiera się zmarłych?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Najczęściej zmarłych ubiera się w elegancki strój - garnitur dla mężczyzn lub sukienkę dla kobiet. Wybór zależy od tradycji rodzinnych, religii i życzeń zmarłego. Ważne jest, aby ubiór był godny i odpowiedni do uroczystości pogrzebowej.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy można ubrać zmarłego w ulubione ubrania?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, można ubrać zmarłego w jego ulubione ubrania, jeśli są odpowiednie i godne. Wiele rodzin wybiera ubrania, które zmarły lubił nosić lub które mają szczególne znaczenie. Ważne jest, aby strój był czysty, zadbany i pasował do charakteru ceremonii.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy do trumny wkłada się buty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, zmarłemu zazwyczaj zakłada się buty lub pantofle. Powinny być czyste i eleganckie. Niektóre rodziny wybierają nowe buty, inne preferują ulubione obuwie zmarłego. W przypadku kremacji buty powinny być bez metalowych elementów.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jakie kolory są odpowiednie na pogrzeb?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tradycyjnie wybiera się kolory stonowane - czerń, granat, szarość, biel. Jednak współcześnie coraz częściej rodziny wybierają ulubione kolory zmarłego lub jasne barwy, jeśli takie było jego życzenie. Ważniejszy od koloru jest ogólny charakter stroju - powinien być godny i odpowiedni.',
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
              W Co Ubrać Zmarłego na Pogrzeb?
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Wybór ubioru dla zmarłego to ważna decyzja, która często budzi wiele pytań. W tym przewodniku 
              znajdziesz praktyczne porady, informacje o tradycjach i wskazówki, jak wybrać odpowiedni strój.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Shirt className="w-8 h-8 text-primary" />
                Ogólne Zasady Wyboru Ubioru
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Wybór ubioru dla zmarłego powinien uwzględniać kilka ważnych aspektów: tradycję, religię, 
                    osobowość zmarłego oraz życzenia rodziny. Nie ma jednego właściwego rozwiązania - najważniejsze 
                    jest, aby strój był godny i odpowiedni.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Kluczowe Zasady:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Godność</strong> - ubiór powinien być elegancki i zadbany</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Czystość</strong> - ubrania muszą być czyste i wyprasowane</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Odpowiedni rozmiar</strong> - ubrania powinny dobrze leżeć</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Kompletność</strong> - pełny strój z dodatkami</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Zgodność z tradycją</strong> - uwzględnienie zwyczajów religijnych i kulturowych</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Ubiór dla Mężczyzn
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-4">Tradycyjny Wybór:</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-3">Garnitur</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Ciemny garnitur (czarny, granatowy, szary)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Biała lub jasna koszula</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Krawat w stonowanym kolorze</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Eleganckie buty (czarne lub ciemnobrązowe)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Skarpety w kolorze dopasowanym do garnituru</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-3">Alternatywne Opcje:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Marynarka z eleganckimi spodniami</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Ulubiony strój zmarłego (jeśli elegancki)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Mundur (dla osób wojskowych, strażaków, policjantów)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Strój ludowy (zgodnie z tradycją regionalną)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">Praktyczne Wskazówki:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Jeśli zmarły nie miał garnituru, można go wypożyczyć lub kupić</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Krawat nie jest obowiązkowy, ale dodaje elegancji</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Ubrania powinny być wygodne w zakładaniu</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Ubiór dla Kobiet
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-4">Tradycyjny Wybór:</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-3">Sukienka lub Kostium</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Elegancka sukienka w stonowanym kolorze</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Kostium (spódnica lub spodnie z żakietem)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Bluzka lub koszula</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Eleganckie buty (czółenka lub pantofle)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Rajstopy lub pończochy</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className="text-lg font-medium text-white mb-3">Alternatywne Opcje:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Ulubiona sukienka zmarłej</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Strój ludowy (zgodnie z tradycją)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Habit (dla osób zakonnych)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Elegancki komplet bluzka + spodnie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">Praktyczne Wskazówki:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Długość sukienki powinna być odpowiednia (do kolan lub dłuższa)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Unikać zbyt głębokich dekoltów</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>Biżuteria powinna być dyskretna</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Aspekty Religijne i Kulturowe
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Tradycja Katolicka</h3>
                      <p className="text-gray-300 mb-3">
                        W tradycji katolickiej nie ma ścisłych wymogów co do ubioru zmarłego. Najważniejsze jest, 
                        aby strój był godny i odpowiedni. Często wybiera się:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Elegancki, stonowany strój</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Różaniec w dłoniach (opcjonalnie)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Krzyżyk lub medalik</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Tradycja Prawosławna</h3>
                      <p className="text-gray-300 mb-3">
                        W tradycji prawosławnej często:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zmarły jest ubrany w białe lub jasne szaty</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Na głowie umieszcza się wieniec lub opaskę z tekstem modlitwy</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>W dłoniach umieszcza się ikonę lub krzyż</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Inne Tradycje</h3>
                      <p className="text-gray-300 mb-3">
                        Różne kultury i religie mają swoje zwyczaje. Ważne jest, aby je respektować i 
                        konsultować z rodziną lub duchownym.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Dodatkowe Elementy Ubioru
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Biżuteria i Dodatki</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Obrączka ślubna (jeśli zmarły ją nosił)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Dyskretna biżuteria (łańcuszek, kolczyki)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Zegarek (opcjonalnie)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Okulary (jeśli zmarły je nosił)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium text-white mb-4">Przedmioty Osobiste</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Różaniec lub modlitewnik</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Fotografia bliskich</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>List od rodziny</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>Ulubiony przedmiot (mały)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Uwaga przy kremacji:</strong> Jeśli planowana jest kremacja, 
                      wszystkie metalowe elementy (biżuteria, guziki, zamki) powinny być usunięte lub zastąpione 
                      elementami nieметalowymi.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Personalizacja i Życzenia Zmarłego
              </h2>
              
              <Card className="bg-black/30 border border-white/10 mb-6">
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Coraz więcej osób wyraża swoje życzenia dotyczące ubioru pogrzebowego. Jeśli zmarły pozostawił 
                    takie wskazówki, warto je uszanować, o ile są one zgodne z godnością ceremonii.
                  </p>
                  
                  <h3 className="text-xl font-medium text-white mb-4">Przykłady Personalizacji:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Ulubiony kolor ubrania</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Strój związany z hobby lub pasją (np. koszulka ulubionej drużyny pod marynarką)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Mundur lub strój zawodowy</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Strój ludowy lub regionalny</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-primary mt-1">•</span>
                      <span>Szczególna biżuteria lub dodatki</span>
                    </li>
                  </ul>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                    <p className="text-gray-300">
                      <strong className="text-white">Pamiętaj:</strong> Personalizacja powinna być zgodna z godnością 
                      ceremonii i nie powinna razić innych uczestników pogrzebu. W razie wątpliwości warto 
                      skonsultować się z zakładem pogrzebowym.
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
                      <h3 className="text-lg font-medium text-white mb-2">Przygotowanie Ubrań</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Wypierz i wyprasuj ubrania z wyprzedzeniem</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Sprawdź, czy wszystko jest kompletne</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Przygotuj ubrania dzień przed przekazaniem do zakładu</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Zakup Nowych Ubrań</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Jeśli kupujesz nowe ubrania, wybierz rozmiar większy niż zwykle</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Wybieraj ubrania łatwe w zakładaniu (z przodu zapinane)</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zachowaj paragony - czasem trzeba wymienić rozmiar</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-lg font-medium text-white mb-2">Współpraca z Zakładem Pogrzebowym</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Zakład pogrzebowy pomoże w wyborze odpowiedniego ubioru</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Można wypożyczyć lub kupić ubrania w zakładzie</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-300">
                          <span className="text-primary mt-1">•</span>
                          <span>Personel zadba o odpowiednie ubranie zmarłego</span>
                        </li>
                      </ul>
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
                      W co najczęściej ubiera się zmarłych?
                    </h3>
                    <p className="text-gray-300">
                      Najczęściej zmarłych ubiera się w elegancki strój - garnitur dla mężczyzn lub sukienkę dla kobiet. 
                      Wybór zależy od tradycji rodzinnych, religii i życzeń zmarłego. Ważne jest, aby ubiór był godny 
                      i odpowiedni do uroczystości pogrzebowej.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy można ubrać zmarłego w ulubione ubrania?
                    </h3>
                    <p className="text-gray-300">
                      Tak, można ubrać zmarłego w jego ulubione ubrania, jeśli są odpowiednie i godne. Wiele rodzin 
                      wybiera ubrania, które zmarły lubił nosić lub które mają szczególne znaczenie. Ważne jest, aby 
                      strój był czysty, zadbany i pasował do charakteru ceremonii.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy do trumny wkłada się buty?
                    </h3>
                    <p className="text-gray-300">
                      Tak, zmarłemu zazwyczaj zakłada się buty lub pantofle. Powinny być czyste i eleganckie. Niektóre 
                      rodziny wybierają nowe buty, inne preferują ulubione obuwie zmarłego. W przypadku kremacji buty 
                      powinny być bez metalowych elementów.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Jakie kolory są odpowiednie na pogrzeb?
                    </h3>
                    <p className="text-gray-300">
                      Tradycyjnie wybiera się kolory stonowane - czerń, granat, szarość, biel. Jednak współcześnie 
                      coraz częściej rodziny wybierają ulubione kolory zmarłego lub jasne barwy, jeśli takie było jego 
                      życzenie. Ważniejszy od koloru jest ogólny charakter stroju - powinien być godny i odpowiedni.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-white mb-3">
                      Czy zakład pogrzebowy może pomóc w wyborze ubioru?
                    </h3>
                    <p className="text-gray-300">
                      Tak, zakład pogrzebowy chętnie doradzi w wyborze odpowiedniego ubioru. Możemy również wypożyczyć 
                      lub sprzedać kompletny strój pogrzebowy. Nasz personel ma doświadczenie i pomoże wybrać to, co 
                      będzie najbardziej odpowiednie.
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
                  Potrzebujesz Pomocy w Przygotowaniu Pogrzebu?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Pomożemy w każdym aspekcie organizacji pogrzebu - również w wyborze ubioru
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
              <Link href="/poradnik/jakie-czynnosci-obejmuje-kosmetyka-posmiertna" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Kosmetyka Pośmiertna</h3>
                    <p className="text-gray-400 text-sm">Przygotowanie zmarłego do pogrzebu</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/asortyment/odziez-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Odzież Pogrzebowa</h3>
                    <p className="text-gray-400 text-sm">Nasza oferta odzieży</p>
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
