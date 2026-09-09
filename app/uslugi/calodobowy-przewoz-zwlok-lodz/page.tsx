import { Metadata } from 'next'
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
    question: 'Co robić bezpośrednio po śmierci bliskiej osoby w domu?',
    answer:
      'Wezwij lekarza w celu stwierdzenia zgonu i wystawienia karty zgonu, a następnie zadzwoń do nas. Zajmiemy się przewozem ciała do chłodni i przeprowadzimy Cię przez dalsze formalności.',
  },
]

export const metadata: Metadata = {
  title: {
    absolute: 'Całodobowy Przewóz Zwłok Łódź – Transport Zmarłych 24h | Nekrolog Łódź',
  },
  description:
    'Całodobowy przewóz zwłok w Łodzi – transport zmarłych 24h z domu, szpitala i z innego miasta. Przyjazd zaraz po zgłoszeniu, bez zaliczki. Tel: +48 602 274 661.',
  keywords: [
    'całodobowy przewóz zwłok łódź',
    'całodobowy transport zmarłych łódź',
    'przewóz zwłok łódź 24h',
    'transport zmarłych łódź całodobowo',
    'przewóz ciała zmarłego łódź',
    'karawan łódź całodobowo',
  ],
  ...generateCanonicalMetadata('/uslugi/calodobowy-przewoz-zwlok-lodz'),
}

export default function CalodobowyPrzewozZwlokPage() {
  return (
    <ServiceLayout
      title="Całodobowy Przewóz Zwłok Łódź"
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
      </div>
    </ServiceLayout>
  )
}
