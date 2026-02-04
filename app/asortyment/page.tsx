import Link from 'next/link'
import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, Box, Flower, Shirt } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Asortyment Pogrzebowy Łódź',
  description:
    'Trumny, urny, odzież pogrzebowa oraz kompozycje kwiatowe – kompleksowy asortyment domu pogrzebowego Nekrolog Łódź. Szeroki wybór w przystępnych cenach.',
  keywords: ['asortyment pogrzebowy łódź', 'trumny łódź', 'urny łódź', 'wieńce pogrzebowe', 'odzież żałobna'],
  alternates: {
    canonical: `${SITE_URL}/asortyment`,
  },
  openGraph: {
    title: 'Asortyment Pogrzebowy Łódź - Nekrolog',
    description: 'Trumny, urny, odzież pogrzebowa oraz kompozycje kwiatowe. Kompleksowy asortyment w jednym miejscu.',
    url: `${SITE_URL}/asortyment`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const assortmentCards = [
  {
    icon: Package,
    title: 'Trumny',
    description:
      'Szeroki wybór trumien wykonanych z różnych gatunków drewna – od ekonomicznych modeli po luksusowe wykończenia.',
    href: '/asortyment/trumny-lodz',
  },
  {
    icon: Box,
    title: 'Urny',
    description:
      'Urny metalowe, ceramiczne, drewniane, kryształowe i biodegradowalne, dostosowane do charakteru uroczystości.',
    href: '/asortyment/urny-lodz',
  },
  {
    icon: Flower,
    title: 'Wiązanki i wieńce',
    description:
      'Kompozycje kwiatowe przygotowywane przez doświadczonych florystów – wieńce, wiązanki, kosze i dekoracje na trumnę.',
    href: '/asortyment/wiazanki-lodz',
  },
  {
    icon: Shirt,
    title: 'Odzież pogrzebowa',
    description:
      'Elegancka odzież żałobna dla kobiet i mężczyzn oraz specjalna odzież dla zmarłych, zapewniająca godne pożegnanie.',
    href: '/asortyment/odziez-lodz',
  },
  {
    icon: Flower,
    title: 'Wieńce pogrzebowe',
    description:
      'Okazałe wieńce i ekskluzywne kompozycje kwiatowe z możliwością personalizacji szarf i dedykacji.',
    href: '/asortyment/wience-lodz',
  },
]

export default function AsortymentPage() {
  return (
    <ServiceLayout
      title="Asortyment"
      description="Szeroki wybór trumien, urn, odzieży pogrzebowej i kompozycji kwiatowych dopasowanych do potrzeb rodziny."
    >
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">Kompleksowe artykuły pogrzebowe</h2>
          <p className="text-gray-300">
            Zapewniamy pełen asortyment niezbędny do organizacji ceremonii pogrzebowej. Wszystkie produkty dobieramy
            z najwyższą starannością, łącząc elegancję, trwałość i szacunek dla tradycji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assortmentCards.map(({ icon: Icon, title, description, href }) => (
            <Card
              key={title}
              className="flex flex-col h-full bg-black/30 border border-white/10 hover:border-primary/50 transition-colors duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white font-playfair text-xl">
                  <Icon className="h-6 w-6 text-primary" />
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-48 bg-gradient-to-br from-black/40 to-black/60 rounded-md flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full">
                  <Link href={href}>Zobacz więcej</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </ServiceLayout>
  )
}
