import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, FileText, Building2, Landmark, CheckCircle2, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Co Zrobić Po Śmierci Bliskiej Osoby? Kompletny Poradnik Krok Po Kroku',
  description: 'Szczegółowy przewodnik: co zrobić po śmierci bliskiej osoby w Łodzi. Formalności, dokumenty, organizacja pogrzebu. Pomoc dostępna 24/7. Tel: +48 602 274 661.',
  keywords: [
    'co zrobić po śmierci',
    'śmierć bliskiej osoby',
    'formalności po śmierci',
    'organizacja pogrzebu łódź',
    'dokumenty po śmierci',
    'procedury pogrzebowe',
  ],
}

export default function CoZrobicPoSmierciPage() {
  const steps = [
    {
      title: 'Wezwanie lekarza i stwierdzenie zgonu',
      icon: FileText,
      description: 'Pierwszym krokiem jest wezwanie lekarza, który stwierdzi zgon i wystawi kartę zgonu.',
      details: [
        'W przypadku śmierci w domu - wezwij lekarza rodzinnego lub pogotowie',
        'W szpitalu - lekarz dyżurny wystawi kartę zgonu',
        'Karta zgonu jest niezbędna do dalszych formalności',
      ],
    },
    {
      title: 'Kontakt z zakładem pogrzebowym',
      icon: Phone,
      description: 'Skontaktuj się z zakładem pogrzebowym - pomożemy w całym procesie organizacji pogrzebu.',
      details: [
        'Jesteśmy dostępni całodobowo: +48 602 274 661',
        'Organizujemy transport zmarłego',
        'Nie musisz płacić z góry - rozliczenie bezpośrednio z ZUS',
        'Pomożemy w załatwieniu wszystkich formalności',
      ],
      highlight: true,
    },
    {
      title: 'Uzyskanie aktu zgonu w USC',
      icon: Building2,
      description: 'Akt zgonu wydaje Urząd Stanu Cywilnego na podstawie karty zgonu.',
      details: [
        'Potrzebne dokumenty: karta zgonu, dowód osobisty zmarłego',
        'Akt zgonu otrzymasz w USC właściwym dla miejsca zgonu',
        'Pomożemy w załatwieniu tej formalności',
        'Zazwyczaj akt wydawany jest tego samego dnia',
      ],
    },
    {
      title: 'Wybór miejsca pochówku',
      icon: Landmark,
      description: 'Decyzja o miejscu i formie pochówku - tradycyjny pogrzeb lub kremacja.',
      details: [
        'Wybór cmentarza w Łodzi lub okolicach',
        'Decyzja o kremacji lub pochówku tradycyjnym',
        'Rezerwacja terminu na cmentarzu',
        'Pomożemy w kontakcie z administracją cmentarną',
      ],
    },
    {
      title: 'Organizacja ceremonii pogrzebowej',
      icon: CheckCircle2,
      description: 'Ustalenie szczegółów ceremonii - msza, oprawa muzyczna, dekoracje.',
      details: [
        'Kontakt z parafią i ustalenie terminu mszy',
        'Wybór trumny, urny i akcesoriów',
        'Oprawa muzyczna i florystyczna',
        'Przygotowanie klepsydry i nekrologu',
      ],
    },
    {
      title: 'Zasiłek pogrzebowy z ZUS/KRUS',
      icon: FileText,
      description: 'Pomoc w uzyskaniu zasiłku pogrzebowego - rozliczenie bezpośrednio z ZUS.',
      details: [
        'Zasiłek wynosi 4000 zł (stan na 2024)',
        'Pomożemy w kompletowaniu dokumentów',
        'Możliwość rozliczenia bezpośrednio z ZUS - bez kosztów z góry',
        'Wniosek można złożyć w ciągu 12 miesięcy',
      ],
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative pt-20 pb-12 bg-gradient-to-b from-black via-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
              Co Zrobić Po Śmierci Bliskiej Osoby?
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Kompletny przewodnik krok po kroku - wszystkie formalności i procedury wyjaśnione prostym językiem
            </p>
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8">
              <p className="text-lg text-white mb-4">
                <strong>Pomoc dostępna całodobowo</strong>
              </p>
              <a
                href="tel:+48602274661"
                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
              >
                <Phone className="w-5 h-5" />
                +48 602 274 661
              </a>
              <p className="text-sm text-gray-400 mt-4">
                Zakład Pogrzebowy Nekrolog Łódź - Jolanta Kostowska
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h2 className="text-2xl font-playfair font-medium text-white mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                Najważniejsze informacje
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Nie musisz płacić z góry</strong> - organizujemy pogrzeb, a koszty rozliczamy bezpośrednio z zasiłkiem pogrzebowym ZUS</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Jesteśmy dostępni 24/7</strong> - zadzwoń o każdej porze, pomożemy w każdej sytuacji</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Załatwiamy wszystkie formalności</strong> - nie musisz biegać po urzędach</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Procedura Krok Po Kroku
            </h2>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <Card
                    key={index}
                    className={`bg-black/30 border ${
                      step.highlight ? 'border-primary/40 bg-primary/5' : 'border-white/10'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.highlight ? 'bg-primary/20' : 'bg-white/10'
                        }`}>
                          <Icon className={`w-6 h-6 ${step.highlight ? 'text-primary' : 'text-white'}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-playfair font-medium text-white mb-2">
                            {index + 1}. {step.title}
                          </h3>
                          <p className="text-gray-300 mb-4">{step.description}</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-400">
                                <span className="text-primary mt-1">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-black/90 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Najczęściej Zadawane Pytania
            </h2>

            <div className="space-y-4">
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
                    Ile czasu mam na zorganizowanie pogrzebu?
                  </h3>
                  <p className="text-gray-300">
                    Zgodnie z prawem, pogrzeb powinien odbyć się w ciągu 7 dni od daty zgonu. W praktyce 
                    najczęściej organizujemy pogrzeby w ciągu 3-5 dni, aby dać rodzinie czas na przygotowania 
                    i przybycie dalszej rodziny.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    Jakie dokumenty są potrzebne?
                  </h3>
                  <p className="text-gray-300">
                    Podstawowe dokumenty to: karta zgonu (od lekarza), dowód osobisty zmarłego, akt zgonu (z USC). 
                    Pomożemy w uzyskaniu wszystkich niezbędnych dokumentów i przeprowadzimy przez cały proces.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-playfair font-medium text-white mb-4">
                  Potrzebujesz Pomocy?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Jesteśmy dostępni całodobowo, aby pomóc w organizacji pogrzebu
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
              <Link href="/poradnik/zasilek-pogrzebowy-zus" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Zasiłek Pogrzebowy ZUS</h3>
                    <p className="text-gray-400 text-sm">Jak uzyskać zasiłek pogrzebowy i ile wynosi</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/dokumenty-do-pogrzebu" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Dokumenty Do Pogrzebu</h3>
                    <p className="text-gray-400 text-sm">Kompletna lista dokumentów potrzebnych do organizacji pogrzebu</p>
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
              <Link href="/uslugi-pogrzebowe-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Usługi Pogrzebowe</h3>
                    <p className="text-gray-400 text-sm">Pełna oferta usług pogrzebowych w Łodzi</p>
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
