import Link from 'next/link'
import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Music, Mic, BarChart4, Headphones, CheckCircle, Phone } from 'lucide-react'

const musicServices = [
  {
    icon: Music,
    title: 'Oprawa organowa',
    description:
      'Tradycyjne utwory organowe towarzyszące mszy żałobnej oraz ceremonii na cmentarzu, nadające uroczystości podniosły charakter.',
  },
  {
    icon: Mic,
    title: 'Oprawa wokalna',
    description:
      'Profesjonalni wokaliści wykonują pieśni religijne i świeckie, dopasowane do charakteru ceremonii i oczekiwań rodziny.',
  },
  {
    icon: BarChart4,
    title: 'Trąbka pogrzebowa',
    description:
      'Wzruszające wykonanie utworów takich jak "Cisza" podczas złożenia trumny lub urny, podkreślające moment pożegnania.',
  },
  {
    icon: Headphones,
    title: 'Oprawa instrumentalna',
    description:
      'Skrzypce, wiolonczela, gitara i inne instrumenty wykonujące repertuar klasyczny, religijny lub współczesny.',
  },
]

const offerings = [
  'Dobór repertuaru do charakteru uroczystości oraz życzeń rodziny',
  'Możliwość wykonania ulubionych utworów osoby zmarłej',
  'Wsparcie doświadczonych muzyków i współpraca z organistami',
  'Oprawa muzyczna w kościele, domu pogrzebowym i na cmentarzu',
  'Nagłośnienie i przygotowanie aranżacji dla solistów oraz duetów',
]

const repertoireReligious = ['Barka', 'Panie, mój Panie', 'Liczę na Ciebie, Ojcze', 'Być bliżej Ciebie chcę', 'Jezu, ufam Tobie']

const repertoireInstrumental = ['Ave Maria – F. Schubert', 'Cisza – utwór na trąbkę', 'Panis Angelicus', 'Amazing Grace', 'Time to Say Goodbye']

export const metadata: Metadata = {
  title: 'Oprawa Muzyczna Pogrzebu Łódź',
  description:
    'Profesjonalna oprawa muzyczna ceremonii pogrzebowych w Łodzi – organista, wokaliści, trąbka i instrumenty smyczkowe.',
  keywords: ['oprawa muzyczna pogrzebu łódź', 'muzyka na pogrzeb', 'organista pogrzebowy', 'trąbka pogrzebowa'],
}

export default function OprawaMuzycznaPage() {
  return (
    <ServiceLayout
      title="Oprawa Muzyczna Pogrzebu"
      description="Tworzymy oprawę muzyczną, która pomaga wyrazić emocje i nadaje ceremonii wyjątkowy, osobisty charakter."
      backgroundImage={IMAGES.subpages.oprawa}
    >
      <div className="space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-playfair font-medium text-white">
              Muzyka, która wspiera moment pożegnania
            </h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-4">
              <p>
                Muzyka towarzysząca uroczystości pogrzebowej pomaga wyrazić emocje, które trudno wypowiedzieć słowami. Dom
                Pogrzebowy Nekrolog Łódź współpracuje z profesjonalnymi muzykami i wokalistami, którzy z wielką empatią i
                taktem tworzą oprawę odpowiadającą oczekiwaniom rodziny oraz charakterowi ceremonii.
              </p>
              <p>
                Zapewniamy kompleksowe wsparcie – od doboru repertuaru i prób, po realizację występów w kościele, domu
                pogrzebowym lub na cmentarzu. Dbamy o odpowiednią atmosferę i podniosły nastrój, tak aby ostatnie pożegnanie
                było pełne godności i szacunku.
              </p>
            </div>

            <ul className="space-y-3">
              {offerings.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <Card className="bg-black/30 border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-white">Dlaczego warto wybrać Nekrolog?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-300 text-sm">
                <p>Wieloletnia współpraca z profesjonalnymi muzykami i organistami.</p>
                <p>Indywidualne podejście do repertuaru i stylu ceremonii.</p>
                <p>Możliwość organizacji prób oraz nagłośnienia w dowolnym miejscu.</p>
                <p>Pełna dyskrecja i empatia wobec rodziny w trudnym czasie.</p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl font-playfair text-white">Skontaktuj się z nami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300 text-sm">
                <p>Oprawę muzyczną ustalamy indywidualnie. Zadzwoń, aby omówić szczegóły i dostępność muzyków.</p>
                <Button asChild className="w-full">
                  <Link href="tel:+48602274661" className="inline-flex items-center gap-2">
                    <Phone className="h-5 w-5" /> +48 602 274 661
                  </Link>
                </Button>
                <p className="text-gray-400 text-xs text-center">
                  Dom Pogrzebowy Nekrolog Łódź – oprawa muzyczna z szacunkiem i profesjonalizmem.
                </p>
              </CardContent>
            </Card>
          </aside>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {musicServices.map((service) => (
            <Card key={service.title} className="bg-black/30 border border-white/10">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-playfair text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="glass-card p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-playfair text-white text-center">Przykładowy repertuar ceremonii pogrzebowej</h3>
          <p className="text-center text-gray-300 italic">
            Dobór utworów ma ogromne znaczenie dla atmosfery pożegnania. Poniższe propozycje mogą stanowić inspirację do
            stworzenia programu dopasowanego do życzeń rodziny.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium text-white mb-3">Pieśni religijne</h4>
              <ul className="space-y-2 text-gray-300">
                {repertoireReligious.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-white mb-3">Utwory klasyczne i instrumentalne</h4>
              <ul className="space-y-2 text-gray-300">
                {repertoireInstrumental.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}
