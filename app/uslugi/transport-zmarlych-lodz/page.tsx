import { Metadata } from 'next'
import Link from 'next/link'
import ServiceLayout from '@/components/ServiceLayout'
import type { FAQItem } from '@/components/structured-data/FAQSchema'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Clock, MapPin, ShieldCheck } from 'lucide-react'
import { generateCanonicalMetadata } from '@/lib/canonical'

const firstHours = [
  'Odbieramy telefon o każdej porze — w nocy, w weekend i w święta.',
  'Przyjeżdżamy pod wskazany adres: dom, szpital, hospicjum, dom opieki lub miejsce zdarzenia.',
  'Zabezpieczamy i przewozimy ciało osoby zmarłej do chłodni z zachowaniem godności i przepisów sanitarnych.',
  'Doradzamy, jakie dokumenty przygotować i jakie są kolejne kroki — bez presji i bez zaliczki.',
]

const scope = [
  {
    icon: Clock,
    title: 'Przewóz 24 godziny na dobę',
    description:
      'Całodobowy przewóz zwłok w Łodzi i okolicach. Karawan wyjeżdża zaraz po zgłoszeniu, również w nocy i w dni wolne.',
  },
  {
    icon: MapPin,
    title: 'Z domu, szpitala i z innego miasta',
    description:
      'Przewozimy ciało z mieszkania, placówki medycznej, a także z innych miejscowości do Łodzi. Organizujemy też transport międzynarodowy.',
  },
  {
    icon: ShieldCheck,
    title: 'Zgodnie z przepisami',
    description:
      'Pojazd jest przystosowany do przewozu zwłok i posiada wymagane pozwolenia. Pracownicy działają z taktem i dyskrecją.',
  },
]

const faqData: FAQItem[] = [
  {
    question: 'Czy przewóz zwłok w Łodzi jest całodobowy?',
    answer:
      'Tak. Przewóz zwłok realizujemy 24 godziny na dobę, 7 dni w tygodniu, także w nocy oraz w niedziele i święta. Wystarczy jeden telefon pod numer +48 602 274 661.',
  },
  {
    question: 'Ile kosztuje całodobowy przewóz zwłok i czy trzeba płacić od razu?',
    answer:
      'Koszt zależy od odległości i pory. Przewozu nie trzeba opłacać z góry — całość rozliczamy razem z organizacją pogrzebu, z zasiłku pogrzebowego ZUS lub KRUS.',
  },
  {
    question: 'Skąd możecie przewieźć ciało osoby zmarłej?',
    answer:
      'Z domu, szpitala, hospicjum, domu opieki, a także z miejsca zdarzenia po zwolnieniu przez odpowiednie służby. Przewozimy również z innych miast do Łodzi oraz z zagranicy.',
  },
  {
    question: 'Ile kosztuje przewóz zwłok w Łodzi?',
    answer:
      'Cena zależy od miejsca odbioru, odległości i pory. Na terenie Łodzi przewóz zwykle jest częścią kompleksowej organizacji pogrzebu – podajemy koszt przy pierwszym telefonie, a całość rozliczamy z zasiłku pogrzebowego, bez płatności z góry.',
  },
  {
    question: 'Czy przewozicie zmarłych z innego miasta lub z zagranicy do Łodzi?',
    answer:
      'Tak. Przewozimy zmarłych z innych miejscowości w Polsce do Łodzi oraz organizujemy sprowadzenie zwłok z zagranicy (m.in. z Niemiec, Wielkiej Brytanii, Holandii i Norwegii) – z kompletem dokumentów.',
  },
  {
    question: 'Co robić bezpośrednio po śmierci bliskiej osoby w domu?',
    answer:
      'Wezwij lekarza w celu stwierdzenia zgonu i wystawienia karty zgonu, a następnie zadzwoń do nas. Zajmiemy się przewozem ciała do chłodni i przeprowadzimy Cię przez dalsze formalności.',
  },
]

export const metadata: Metadata = {
  title: {
    absolute: 'Przewóz Zwłok Łódź 24h – Całodobowy Transport Zmarłych | Nekrolog Łódź',
  },
  description:
    'Przewóz zwłok w Łodzi 24h – transport zmarłych z domu, szpitala i z innego miasta. Przyjazd zaraz po zgłoszeniu, bez zaliczki. Tel: +48 602 274 661.',
  keywords: [
    'przewóz zwłok łódź',
    'transport zmarłych łódź',
    'przewóz zmarłych łódź',
    'przewóz osoby zmarłej łódź',
    'całodobowy przewóz zwłok łódź',
    'całodobowy transport zmarłych łódź',
    'przewóz zwłok łódź 24h',
    'transport zmarłych łódź całodobowo',
    'przewóz ciała zmarłego łódź',
    'karawan łódź całodobowo',
  ],
  ...generateCanonicalMetadata('/uslugi/transport-zmarlych-lodz'),
}

export default function TransportZmarlychPage() {
  return (
    <ServiceLayout
      title="Przewóz zwłok Łódź – całodobowy transport zmarłych"
      description="Transport zmarłych 24 godziny na dobę – z domu, szpitala i z innego miasta. Przyjeżdżamy zaraz po zgłoszeniu, bez kosztów z góry."
      faqItems={faqData}
    >
      <div className="space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">
              Jeden telefon o każdej porze
            </h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-4">
              <p>
                Śmierć bliskiej osoby często następuje w nocy albo w dzień wolny. Zakład Pogrzebowy Nekrolog Łódź –
                Jolanta Kostowska prowadzi <strong>całodobowy przewóz zwłok</strong> w Łodzi i okolicach. Po
                telefonie karawan wyjeżdża bez zwłoki, o dowolnej porze.
              </p>
              <p>
                Przewóz zwłok to zwykle pierwsza czynność po stwierdzeniu zgonu. Zajmujemy się nią z pełnym
                szacunkiem, a rodzinę od razu informujemy, co dalej — jakie dokumenty przygotować i jak wygląda
                organizacja pogrzebu bez zaliczki.
              </p>
            </div>
            <ul className="space-y-3">
              {firstHours.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="tel:+48602274661"
              data-phone-location="transport_first_hours"
              className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
            >
              <Phone className="w-5 h-5" />
              Zadzwoń: +48 602 274 661
            </a>
          </div>

          <div className="space-y-6">
            {scope.map((item) => (
              <Card key={item.title} className="bg-black/30 border border-white/10">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-medium text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-xl p-8 space-y-4">
          <h2 className="text-2xl font-playfair font-medium text-white">Transport zmarłych z innego miasta i z zagranicy</h2>
          <p className="text-gray-300 leading-relaxed">
            Gdy zgon nastąpił poza Łodzią, organizujemy przewóz do Łodzi lub do miejsca pochówku w Polsce. Przy
            śmierci za granicą przejmujemy kontakt z placówką, dokumenty, trumnę transportową i przewóz drogowy
            lub lotniczy. Dla spraw międzynarodowych działa osobny numer: <a href="tel:+48602270050" data-phone-location="transport_international" className="text-primary underline">+48 602 270 050</a>.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              ['Sprowadzenie zwłok z zagranicy', '/uslugi/sprowadzenie-zwlok-z-zagranicy'],
              ['Dla zakładów pogrzebowych', '/dla-zakladow-pogrzebowych'],
              ['Przewóz zwłok – koszty i przepisy', '/poradnik/przewoz-zwlok'],
              ['Pogrzeb w Łodzi – krok po kroku', '/pogrzeb-lodz'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="rounded-md border border-white/10 bg-black/40 px-4 py-2 text-gray-200 hover:border-primary/40 hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}
