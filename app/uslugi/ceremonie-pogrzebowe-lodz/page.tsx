import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import type { FAQItem } from '@/components/structured-data/FAQSchema'
import { Card, CardContent } from '@/components/ui/card'
import { Church, Flower2, Music, Users } from 'lucide-react'
import { generateCanonicalMetadata } from '@/lib/canonical'

const ceremonyTypes = [
  {
    icon: Church,
    title: 'Ceremonia religijna',
    description:
      'Msza żałobna i obrzędy pogrzebowe różnych wyznań, w koordynacji z parafią i cmentarzem w Łodzi.',
  },
  {
    icon: Users,
    title: 'Ceremonia świecka',
    description:
      'Uroczystość prowadzona przez mistrza ceremonii, z mową pożegnalną dopasowaną do życiorysu osoby zmarłej.',
  },
  {
    icon: Flower2,
    title: 'Oprawa florystyczna',
    description:
      'Wieńce, wiązanki i dekoracja miejsca ceremonii — zgodnie z życzeniami i budżetem rodziny.',
  },
  {
    icon: Music,
    title: 'Oprawa muzyczna',
    description:
      'Muzyka na żywo lub odtwarzana: organy, trąbka, skrzypce, wokal. Dobór utworów ustalamy z rodziną.',
  },
]

const included = [
  'Ustalenie terminu ceremonii w USC, parafii i na cmentarzu',
  'Przygotowanie ciała, ubranie i kosmetyka pośmiertna',
  'Trumna lub urna, tablica, krzyż lub tabliczka',
  'Transport zmarłego oraz obsługa konduktu',
  'Koordynacja przebiegu uroczystości — od kaplicy po miejsce pochówku',
  'Klepsydry i zawiadomienia o pogrzebie',
]

const faqData: FAQItem[] = [
  {
    question: 'Jakie rodzaje ceremonii pogrzebowych organizujecie w Łodzi?',
    answer:
      'Organizujemy ceremonie religijne różnych wyznań oraz ceremonie świeckie. Zapewniamy pełną oprawę: mistrza ceremonii lub koordynację z parafią, oprawę florystyczną i muzyczną, kondukt i obsługę pochówku.',
  },
  {
    question: 'Ile trwa organizacja ceremonii pogrzebowej?',
    answer:
      'Zwykle 2–4 dni robocze, w zależności od dostępnych terminów w USC, parafii i na cmentarzu. Sprawy pilne realizujemy możliwie najszybciej.',
  },
  {
    question: 'Czy ceremonię można zorganizować bez opłaty z góry?',
    answer:
      'Tak. Całość organizujemy bez kosztów z góry, a rozliczenie następuje z zasiłku pogrzebowego ZUS lub KRUS.',
  },
  {
    question: 'Czy pomagacie w przygotowaniu mowy pożegnalnej?',
    answer:
      'Tak. Przy ceremonii świeckiej mistrz ceremonii przygotowuje mowę na podstawie rozmowy z rodziną i życiorysu osoby zmarłej.',
  },
]

export const metadata: Metadata = {
  title: {
    absolute: 'Ceremonie Pogrzebowe Łódź – Religijne i Świeckie | Nekrolog Łódź',
  },
  description:
    'Ceremonie pogrzebowe w Łodzi – religijne i świeckie. Pełna oprawa: mistrz ceremonii, florystyka, muzyka, kondukt. Organizacja bez zaliczki. Tel: +48 602 274 661.',
  keywords: [
    'ceremonie pogrzebowe łódź',
    'ceremonia pogrzebowa łódź',
    'pogrzeb świecki łódź',
    'pogrzeb religijny łódź',
    'mistrz ceremonii pogrzebowej łódź',
    'oprawa ceremonii pogrzebowej łódź',
  ],
  ...generateCanonicalMetadata('/uslugi/ceremonie-pogrzebowe-lodz'),
}

export default function CeremoniePogrzebowePage() {
  return (
    <ServiceLayout
      title="Ceremonie Pogrzebowe Łódź"
      description="Ceremonie religijne i świeckie z pełną oprawą – mistrz ceremonii, florystyka, muzyka i koordynacja całego przebiegu uroczystości."
      faqItems={faqData}
    >
      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">
            Ceremonia dopasowana do rodziny
          </h2>
          <div className="prose prose-lg prose-invert max-w-none space-y-4">
            <p>
              Ceremonia pogrzebowa to moment pożegnania. Zakład Pogrzebowy Nekrolog Łódź – Jolanta Kostowska
              organizuje w Łodzi <strong>ceremonie religijne i świeckie</strong>, biorąc na siebie całą
              koordynację: terminy, formalności, oprawę i przebieg uroczystości.
            </p>
            <p>
              Rodzina decyduje o charakterze pożegnania, my dbamy o to, by wszystko przebiegło spokojnie i godnie —
              od kaplicy, przez konduktu, po złożenie do grobu na wybranym cmentarzu.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ceremonyTypes.map((item) => (
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
        </section>

        <section className="glass-card p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-playfair text-white text-center">
            Co obejmuje organizacja ceremonii pogrzebowej
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-300">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </ServiceLayout>
  )
}
