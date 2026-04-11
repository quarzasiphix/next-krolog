import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Globe, Landmark, Plane, ShieldCheck, Phone, Building2, Star, Truck, Wallet } from 'lucide-react'
import ServiceLayout from '@/components/ServiceLayout'
import { Card, CardContent } from '@/components/ui/card'
import type { FAQItem } from '@/components/structured-data/FAQSchema'
import { buildLocalMetadata, buildMetaDescription } from '@/lib/local-seo'

const priorityCountries = [
  'Wielka Brytania',
  'Irlandia',
  'Niemcy',
  'Holandia',
  'Belgia',
  'Luksemburg',
  'Francja',
  'Szwajcaria',
  'Austria',
  'Norwegia',
  'Szwecja',
  'Dania',
  'Włochy',
  'Hiszpania',
]

const keyBenefits = [
  'Sprowadzanie zwłok i prochów z krajów UE, Wielkiej Brytanii oraz państw spoza Unii Europejskiej',
  'Własny specjalistyczny bus do transportu zmarłych oraz koordynacja transportu drogowego i lotniczego',
  'Obsługa rodzin indywidualnych oraz pośrednictwo dla innych zakładów pogrzebowych, szpitali i instytucji',
  'Konkurencyjne, uczciwe ceny wynikające z rodzinnego charakteru firmy i nastawienia na pomoc rodzinie',
  'Odbiór z lotniska, granicy, prosektorium lub zagranicznego domu pogrzebowego i przewóz do miejsca pochówku w Polsce',
  'Możliwość organizacji dalszych usług pogrzebowych w Łodzi lub przekazania zmarłego do wybranego zakładu w innym mieście',
]

const supportSteps = [
  {
    title: 'Zgłoszenie i pierwsza konsultacja',
    description:
      'Po telefonie ustalamy kraj zgonu, miejsce odbioru, rodzaj transportu i zakres pomocy. Od razu wskazujemy, które dokumenty można uzyskać przez nas lub partnera za granicą.',
  },
  {
    title: 'Formalności i uzgodnienia',
    description:
      'Koordynujemy kontakt z konsulatem, urzędem, zagranicznym zakładem pogrzebowym, tłumaczem przysięgłym i przewoźnikiem. Przejmujemy formalności tak, aby rodzina nie musiała prowadzić wielu rozmów w stresie.',
  },
  {
    title: 'Transport i przekazanie',
    description:
      'Organizujemy transport do Polski albo do wskazanego miejsca w Europie. Możemy dalej poprowadzić całą organizację pogrzebu lub przekazać zmarłego innemu zakładowi zgodnie z ustaleniami.',
  },
]

const cooperationScopes = [
  'Obsługa rodzin mieszkających za granicą, które chcą zorganizować transport bliskiej osoby do Polski',
  'Pośrednictwo i koordynacja dla innych zakładów pogrzebowych potrzebujących partnera po stronie polskiej',
  'Wsparcie dla domów opieki, szpitali, ubezpieczycieli i instytucji potrzebujących sprawnego kontaktu w Polsce',
]

const faqData: FAQItem[] = [
  {
    question: 'Czy sprowadzacie zmarłych tylko z UK, Irlandii, Niemiec i Holandii?',
    answer:
      'Nie. To ważne kierunki, ale organizujemy również transport z Belgii, Luksemburga, Francji, Szwajcarii, Austrii, Włoch, Hiszpanii, krajów skandynawskich oraz innych państw UE i spoza UE.',
  },
  {
    question: 'Czy możecie działać jako partner dla innego zakładu pogrzebowego?',
    answer:
      'Tak. Możemy pośredniczyć w sprowadzeniu zmarłego do Polski, odebrać ciało lub urnę na lotnisku, koordynować formalności po stronie polskiej i przekazać zmarłego do wybranego zakładu lub instytucji.',
  },
  {
    question: 'Czy macie własny transport do przewozu zmarłych?',
    answer:
      'Tak. Dysponujemy specjalistycznym busem do transportu zmarłych, dzięki czemu możemy sprawnie realizować przewozy drogowe oraz odbiory na terenie Polski i Europy.',
  },
  {
    question: 'Dlaczego warto zaufać właśnie Wam?',
    answer:
      'Nekrolog Łódź ma bardzo dobrą renomę i ocenę 5 gwiazdek w opiniach klientów. Jako ponad 30-letnia firma rodzinna łączymy doświadczenie, empatyczne podejście, konkurencyjne ceny i sprawną organizację formalności oraz transportu.',
  },
]

export const metadata: Metadata = buildLocalMetadata({
  title: 'Sprowadzenie Zwłok z Zagranicy do Polski',
  path: '/uslugi/sprowadzenie-zwlok-z-zagranicy',
  description: buildMetaDescription([
    'Sprowadzanie zwłok i prochów z zagranicy do Polski przez zakład pogrzebowy z Łodzi',
    'obsługa transportu z UK, Irlandii, Niemiec, Holandii, Belgii, Francji, Szwajcarii i Skandynawii',
    'koordynacja formalności oraz wsparcie rodzin i partnerów branżowych',
  ]),
  keywords: [
    'sprowadzenie zwłok z zagranicy',
    'transport zwłok z zagranicy do polski',
    'repatriacja zwłok',
    'sprowadzenie ciała z niemiec do polski',
    'sprowadzenie ciała z uk do polski',
    'transport zmarłych z holandii do polski',
    'transport zmarłych z irlandii do polski',
    'transport zmarłych z francji do polski',
    'transport zmarłych ze szwajcarii do polski',
    'transport zmarłych skandynawia polska',
  ],
  ogTitle: 'Sprowadzenie Zwłok z Zagranicy do Polski | Łódź',
})

export default function SprowadzenieZwlokZagranicaPage() {
  return (
    <ServiceLayout
      title="Sprowadzenie Zwłok z Zagranicy"
      description="Organizujemy transport zmarłych z całej Europy i spoza UE do Polski, a także pośredniczymy dla innych zakładów i instytucji."
      faqItems={faqData}
    >
      <div className="space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">
              Transport z zagranicy dla rodzin w Polsce i Polonii mieszkającej poza krajem
            </h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-4">
              <p>
                Organizujemy sprowadzenie zwłok i prochów do Polski z krajów Unii Europejskiej, Wielkiej Brytanii,
                Irlandii, Niemiec, Holandii, Belgii, Francji, Szwajcarii, Austrii, Włoch, Hiszpanii, państw
                skandynawskich oraz z krajów poza UE. Działamy jako zakład pogrzebowy z Łodzi, ale obsługujemy
                zlecenia z całego kraju, jeśli rodzina lub partner potrzebuje sprawnego odbioru i koordynacji po stronie polskiej.
              </p>
              <p>
                To usługa ważna nie tylko dla rodzin, ale również dla innych zakładów pogrzebowych i instytucji.
                Możemy przejąć część procesu albo poprowadzić go kompleksowo: od kontaktu z partnerem za granicą,
                przez dokumenty i transport, aż po przekazanie zmarłego do miejsca pochówku lub do dalszej obsługi.
              </p>
            </div>

            <ul className="space-y-3">
              {keyBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-black/30 border border-primary/20">
            <CardContent className="p-6 space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Najczęstsze kierunki</p>
                <h3 className="mt-2 text-2xl font-playfair text-white">Kraje, z których najczęściej organizujemy transport</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {priorityCountries.map((country) => (
                  <div key={country} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
                    {country}
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-300">
                  Jeśli zgon nastąpił w innym kraju, również możemy pomóc. Każde zgłoszenie wyceniamy i planujemy
                  indywidualnie po ustaleniu lokalnych wymogów.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-4">
          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3">
              <Globe className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-playfair text-white">UE, UK i poza UE</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Organizujemy przewóz z krajów europejskich oraz państw, gdzie potrzebna jest szersza koordynacja
                konsularna i transport lotniczy.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3">
              <Truck className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-playfair text-white">Własny bus</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Dysponujemy specjalistycznym busem do transportu zmarłych, co daje większą kontrolę nad terminem,
                trasą i bezpieczeństwem przewozu drogowego.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3">
              <Building2 className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-playfair text-white">Dla rodzin i partnerów</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Wspieramy zarówno klientów indywidualnych, jak i zakłady pogrzebowe, szpitale, domy opieki oraz inne
                instytucje potrzebujące partnera w Polsce.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3">
              <Star className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-playfair text-white">Bardzo dobra renoma</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Nekrolog Łódź cieszy się bardzo dobrą opinią i oceną 5 gwiazdek, co dla rodzin i partnerów jest ważnym
                sygnałem bezpieczeństwa i jakości obsługi.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="rounded-xl border border-primary/20 bg-white/5 p-8">
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
              <Wallet className="h-7 w-7 text-primary" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-playfair text-white">Rodzinna firma, uczciwa wycena, realna pomoc</h2>
              <p className="text-gray-300 leading-relaxed">
                Jesteśmy ponad 30-letnią firmą rodzinną i stawiamy na pomoc rodzinie zmarłego, a nie na maksymalizowanie kosztów. Dlatego oferujemy konkurencyjne ceny, jasne ustalenia i spokojne przejęcie formalności także przy transporcie międzynarodowym.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-black/30 p-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white text-center">
            Jak wygląda współpraca krok po kroku
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {supportSteps.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/80">Krok {index + 1}</p>
                <h3 className="mt-3 text-xl font-playfair text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Landmark className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-playfair text-white">Zakres pośrednictwa</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {cooperationScopes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Plane className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-playfair text-white">Powiązane usługi</h2>
              </div>
              <div className="mt-6 space-y-4">
                <Link
                  href="/uslugi/transport-zmarlych-lodz"
                  className="block rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-primary/30 hover:bg-white/[0.07]"
                >
                  <h3 className="text-lg text-white">Transport zmarłych w Polsce i za granicą</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Zobacz pełną stronę usługi transportowej z informacjami o przewozie krajowym, lotniczym i odbiorze w Polsce.
                  </p>
                </Link>
                <Link
                  href="/poradnik/jak-przetransportowac-cialo-zmarlego-z-zagranicy"
                  className="block rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-primary/30 hover:bg-white/[0.07]"
                >
                  <h3 className="text-lg text-white">Poradnik: jak przetransportować ciało zmarłego z zagranicy</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Materiał informacyjny dla rodzin, które chcą lepiej zrozumieć procedurę i dokumenty.
                  </p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="rounded-xl border border-white/10 bg-black/30 p-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white text-center">
            Najważniejsze kierunki transportu
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/uslugi/sprowadzenie-zwlok-z-niemiec" className="rounded-lg border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/30 hover:bg-white/[0.07]">
              Sprowadzenie zwłok z Niemiec
            </Link>
            <Link href="/uslugi/sprowadzenie-zwlok-z-uk" className="rounded-lg border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/30 hover:bg-white/[0.07]">
              Sprowadzenie zwłok z UK
            </Link>
            <Link href="/uslugi/sprowadzenie-zwlok-z-irlandii" className="rounded-lg border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/30 hover:bg-white/[0.07]">
              Sprowadzenie zwłok z Irlandii
            </Link>
            <Link href="/uslugi/sprowadzenie-zwlok-z-holandii" className="rounded-lg border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/30 hover:bg-white/[0.07]">
              Sprowadzenie zwłok z Holandii
            </Link>
            <Link href="/uslugi/sprowadzenie-zwlok-ze-skandynawii" className="rounded-lg border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/30 hover:bg-white/[0.07]">
              Sprowadzenie zwłok ze Skandynawii
            </Link>
            <Link href="/uslugi/sprowadzenie-zwlok-z-norwegii" className="rounded-lg border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/30 hover:bg-white/[0.07]">
              Sprowadzenie zwłok z Norwegii
            </Link>
            <Link href="/uslugi/sprowadzenie-zwlok-ze-szwajcarii" className="rounded-lg border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/30 hover:bg-white/[0.07]">
              Sprowadzenie zwłok ze Szwajcarii
            </Link>
            <Link href="/uslugi/sprowadzenie-zwlok-z-belgii" className="rounded-lg border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/30 hover:bg-white/[0.07]">
              Sprowadzenie zwłok z Belgii
            </Link>
            <Link href="/uslugi/sprowadzenie-zwlok-z-francji" className="rounded-lg border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/30 hover:bg-white/[0.07]">
              Sprowadzenie zwłok z Francji
            </Link>
            <Link href="/uslugi/sprowadzenie-zwlok-z-austrii" className="rounded-lg border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/30 hover:bg-white/[0.07]">
              Sprowadzenie zwłok z Austrii
            </Link>
          </div>
        </section>

        <section className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
          <Phone className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 text-3xl font-playfair text-white">Potrzebny transport z zagranicy do Polski?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-300">
            Skontaktuj się z nami od razu po zgłoszeniu zgonu. Ustalimy kraj, dokumenty, możliwy termin i sposób
            działania. Obsługujemy również zlecenia partnerskie dla innych zakładów pogrzebowych.
          </p>
          <a
            href="tel:+48602274661"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary/90"
          >
            +48 602 274 661
          </a>
        </section>
      </div>
    </ServiceLayout>
  )
}
