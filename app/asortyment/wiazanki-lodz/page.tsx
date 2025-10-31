import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'
import { Card, CardContent } from '@/components/ui/card'
import { Flower, CheckCircle } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

const arrangements = [
  {
    name: 'Wieniec klasyczny',
    description: 'Tradycyjna kompozycja z białych i czerwonych kwiatów uzupełniona zielenią dekoracyjną.',
    features: ['Symboliczny wygląd', 'Trwałe kwiaty', 'Personalizowana szarfa'],
  },
  {
    name: 'Wiązanka pogrzebowa',
    description: 'Elegancka wiązanka z róż, lilii i goździków, przygotowywana jako główny akcent florystyczny.',
    features: ['Świeże kwiaty premium', 'Bogate kompozycje', 'Profesjonalne wykonanie'],
  },
  {
    name: 'Kosz kwiatowy',
    description: 'Kompozycja w dekoracyjnym koszu, idealna do ustawienia przy trumnie lub urnie.',
    features: ['Elegancki kosz', 'Różnorodność gatunków', 'Trwały układ'],
  },
  {
    name: 'Kompozycja na trumnę',
    description: 'Specjalna dekoracja układana bezpośrednio na trumnie, dopasowana stylistycznie do ceremonii.',
    features: ['Indywidualne wymiary', 'Najwyższa jakość kwiatów', 'Stonowana kolorystyka'],
  },
  {
    name: 'Szarfy pogrzebowe',
    description: 'Personalizowane szarfy z dedykowanymi napisami, wpisujące się w charakter pożegnania.',
    features: ['Różne kolory', 'Szybkie wykonanie', 'Trwały nadruk'],
  },
  {
    name: 'Bukiet kondolencyjny',
    description: 'Stonowany bukiet kondolencyjny stanowiący elegancki gest pamięci.',
    features: ['Delikatne kwiaty', 'Subtelne barwy', 'Staranne wykończenie'],
  },
]

export const metadata: Metadata = {
  title: 'Wiązanki Pogrzebowe Łódź',
  description:
    'Wiązanki, wieńce i kompozycje kwiatowe przygotowywane na ceremonie pogrzebowe w Łodzi przez dom pogrzebowy Nekrolog. Świeże kwiaty premium.',
  keywords: ['wiązanki pogrzebowe łódź', 'wieńce pogrzebowe', 'kwiaty na pogrzeb łódź', 'kompozycje kwiatowe'],
  alternates: {
    canonical: `${SITE_URL}/asortyment/wiazanki-lodz`,
  },
  openGraph: {
    title: 'Wiązanki Pogrzebowe Łódź - Nekrolog',
    description: 'Wiązanki, wieńce i kompozycje kwiatowe na ceremonie pogrzebowe. Świeże kwiaty premium.',
    url: `${SITE_URL}/asortyment/wiazanki-lodz`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function WiazankiPage() {
  return (
    <ServiceLayout
      title="Wiązanki Pogrzebowe"
      description="Tworzymy kompozycje kwiatowe, które z szacunkiem podkreślają charakter uroczystości i pamięć o zmarłym."
      backgroundImage={IMAGES.subpages.wiazanki}
    >
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">Florystyka pogrzebowa</h2>
          <p className="text-gray-300">
            Współpracujemy z florystami specjalizującymi się w ceremoniach żałobnych. Każdą kompozycję przygotowujemy na
            indywidualne zamówienie, dbając o świeżość kwiatów, odpowiednią kolorystykę i personalizowane przesłanie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {arrangements.map((arrangement) => (
            <Card
              key={arrangement.name}
              className="bg-black/30 border border-white/10 hover:border-primary/50 transition-colors duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Flower className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-playfair text-white">{arrangement.name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{arrangement.description}</p>
                <ul className="space-y-2">
                  {arrangement.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-gray-400">
                      <CheckCircle className="h-4 w-4 text-primary mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src={IMAGES.subpages.wiazanki}
            alt="Przykładowa wiązanka kwiatowa"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <img
            src={IMAGES.hero}
            alt="Ceremonia z oprawą kwiatową"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <img
            src={IMAGES.church}
            alt="Dekoracje w kościele"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </ServiceLayout>
  )
}
