import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle2, BookOpen, BellRing, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Jak Poinformować o Uroczystości Pogrzebowej? Praktyczny Poradnik | Nekrolog Łódź',
  description:
    'Praktyczny poradnik jak poinformować rodzinę i znajomych o pogrzebie. Wzory treści, kanały komunikacji, terminy i zasady taktu.',
  keywords: [
    'jak poinformować o pogrzebie',
    'informacja o uroczystości pogrzebowej',
    'jak napisać informację o pogrzebie',
    'klepsydra pogrzebowa',
    'nekrolog łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/poradnik/jak-poinformowac-inne-osoby-o-uroczystosci-pogrzebowej`,
  },
  openGraph: {
    title: 'Jak Poinformować o Uroczystości Pogrzebowej?',
    description:
      'Jak przekazać informację o pogrzebie spokojnie i z szacunkiem: telefon, SMS, klepsydra, media społecznościowe.',
    url: `${SITE_URL}/poradnik/jak-poinformowac-inne-osoby-o-uroczystosci-pogrzebowej`,
    type: 'article',
  },
}

export default function InformowanieOUroczystosciPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Kiedy najlepiej poinformować o terminie pogrzebu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Najlepiej zrobić to od razu po potwierdzeniu daty i godziny ceremonii. Najbliższą rodzinę warto poinformować telefonicznie, a dalsze osoby SMS-em lub komunikatem pisemnym.',
        },
      },
      {
        '@type': 'Question',
        name: 'Jakie informacje powinny znaleźć się w komunikacie o pogrzebie?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'W komunikacie podaj imię i nazwisko zmarłego, datę i godzinę ceremonii, miejsce mszy lub pożegnania, miejsce pochówku oraz ewentualną prośbę rodziny dotyczącą kwiatów, stroju lub kondolencji.',
        },
      },
      {
        '@type': 'Question',
        name: 'Czy można informować o pogrzebie przez media społecznościowe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tak, ale najpierw warto skontaktować się bezpośrednio z najbliższą rodziną i ważnymi osobami. Wpis w mediach społecznościowych powinien być krótki, spokojny i zawierać tylko niezbędne informacje.',
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
            <Link
              href="/poradnik/co-zrobic-po-smierci"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-6"
            >
              <BookOpen className="w-4 h-4" />
              Poradnik pogrzebowy
            </Link>

            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
              Jak Poinformować Inne Osoby o Uroczystości Pogrzebowej?
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              W trudnych chwilach warto mieć prosty plan komunikacji. Poniżej znajdziesz praktyczne wskazówki:
              kogo poinformować najpierw, jaką formę wybrać i jak napisać krótki, taktowny komunikat.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <BellRing className="w-8 h-8 text-primary" />
                Kolejność Informowania
              </h2>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong className="text-white">Najpierw najbliższa rodzina</strong> - telefonicznie, spokojnie i
                        bez pośpiechu.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong className="text-white">Następnie bliscy znajomi i współpracownicy</strong> - telefon,
                        SMS lub wiadomość prywatna.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong className="text-white">Na końcu szerszy komunikat</strong> - klepsydra, parafia,
                        media społecznościowe (jeśli rodzina wyraża zgodę).
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">Co Powinien Zawierać Komunikat</h2>
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-4 text-gray-300">
                  <p>Krótki komunikat powinien zawierać:</p>
                  <ul className="space-y-2">
                    <li>• imię i nazwisko zmarłego,</li>
                    <li>• datę i godzinę ceremonii,</li>
                    <li>• miejsce nabożeństwa lub pożegnania,</li>
                    <li>• miejsce pochówku,</li>
                    <li>• ewentualną prośbę rodziny (np. zamiast kwiatów).</li>
                  </ul>
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-white font-medium mb-2">Przykład:</p>
                    <p>
                      „Z głębokim żalem informujemy, że uroczystość pogrzebowa śp. Jana Kowalskiego odbędzie się dnia
                      5 marca 2026 r. o godz. 12:00 w kaplicy cmentarnej na Cmentarzu Doły w Łodzi.”
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-playfair font-medium text-white mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-primary" />
                Kanały Komunikacji
              </h2>
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-white font-medium mb-2">Telefon</h3>
                      <p>Najlepszy dla najbliższej rodziny i osób starszych.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-white font-medium mb-2">SMS / komunikator</h3>
                      <p>Dobre rozwiązanie dla dalszych znajomych, gdy liczy się czas.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-white font-medium mb-2">Klepsydra / nekrolog</h3>
                      <p>Forma oficjalna, czytelna i tradycyjna.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h3 className="text-white font-medium mb-2">Media społecznościowe</h3>
                      <p>Stosuj tylko po uzgodnieniu z rodziną i w wyważonej formie.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/10 border border-primary/30">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-playfair font-medium text-white mb-4">Potrzebujesz wsparcia?</h2>
                <p className="text-gray-300 mb-6">
                  Możemy pomóc w przygotowaniu treści klepsydry, organizacji komunikacji i formalnościach pogrzebowych.
                </p>
                <a
                  href="tel:+48602274661"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń: +48 602 274 661
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
