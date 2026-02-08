import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { Card, CardContent } from '@/components/ui/card'
import { Package, CheckCircle } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

import { generateCanonicalMetadata } from '@/lib/canonical'

const coffins = [
  {
    name: 'Trumna dębowa premium',
    description:
      'Wykonana z litego drewna dębowego, wykończona wysokiej jakości lakierem, z eleganckim wnętrzem.',
    features: ['Lite drewno dębowe', 'Ręcznie rzeźbione zdobienia', 'Eleganckie uchwyty', 'Luksusowe wnętrze'],
  },
  {
    name: 'Trumna sosnowa standard',
    description:
      'Klasyczna trumna z drewna sosnowego, funkcjonalne rozwiązanie w przystępnej cenie.',
    features: ['Naturalne drewno sosnowe', 'Tradycyjny wygląd', 'Wygodne uchwyty', 'Estetyczne wykończenie'],
  },
  {
    name: 'Trumna olchowa elegance',
    description: 'Elegancka konstrukcja z drewna olchowego z subtelnymi zdobieniami.',
    features: ['Wytrzymałe drewno olchowe', 'Subtelne zdobienia', 'Komfortowe wnętrze', 'Stylowy wygląd'],
  },
  {
    name: 'Trumna ekonomiczna',
    description: 'Prosta, funkcjonalna trumna wykonana z płyty drewnopochodnej pokrytej okleiną.',
    features: ['Lekka konstrukcja', 'Prosta forma', 'Estetyczne wykonanie', 'Przystępna cena'],
  },
]

export const metadata: Metadata = {
  title: 'Trumny Łódź - Sprzedaż Trumien',
  description: 'Największy wybór trumien w Łodzi. Modele dębowe, sosnowe, olchowe. Trumny kremacyjne i tradycyjne. Ekspozycja przy ul. Legionów 48.',
  keywords: ['trumny łódź', 'sprzedaż trumien łódź', 'producent trumien łódzkie', 'tanie trumny łódź', 'klasyczne trumny drewniane'],
  ...generateCanonicalMetadata('/asortyment/trumny-lodz'),
  openGraph: {
    title: 'Trumny Łódź - Nekrolog',
    description: 'Szeroki wybór trumien najwyższej jakości w Łodzi. Modele dębowe, sosnowe i kremacyjne. Sprawdź naszą ofertę.',
    url: `${SITE_URL}/asortyment/trumny-lodz`,
    type: 'website',
  },
}

export default function TrumnyPage() {
  return (
    <ServiceLayout
      title="Trumny - Łódź"
      description="Szeroki wybór trumien najwyższej jakości dostępnych w Łodzi. Oferujemy modele tradycyjne i kremacyjne dopasowane do potrzeb rodziny."
    >
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">Trumny Łódź - Kompleksowa Oferta</h2>
          <p className="text-gray-300">
            W naszym zakładzie pogrzebowym w Łodzi przy ul. Legionów 48 posiadamy stałą ekspozycję trumien.
            Oferujemy klasyczne oraz nowoczesne modele wykonane z najlepszych gatunków drewna. Każdy
            model dobieramy indywidualnie, aby oddać szacunek zmarłemu i zapewnić rodzinie poczucie godnego pożegnania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coffins.map((coffin) => (
            <Card
              key={coffin.name}
              className="bg-black/30 border border-white/10 hover:border-primary/50 transition-colors duration-300"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-playfair text-white">{coffin.name}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{coffin.description}</p>
                <ul className="space-y-2">
                  {coffin.features.map((feature) => (
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

        <div className="glass-card p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-playfair text-white text-center">Dlaczego warto wybrać nasze trumny?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1" />
                <span>Wysoka jakość wykonania i dbałość o detale.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1" />
                <span>Trwałe materiały pozyskiwane od sprawdzonych dostawców.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1" />
                <span>Różnorodność stylów i wykończeń dopasowanych do oczekiwań rodziny.</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1" />
                <span>Szeroki zakres cenowy i możliwość personalizacji.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1" />
                <span>Profesjonalne doradztwo w wyborze odpowiedniego modelu.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-1" />
                <span>Możliwość dopasowania wnętrza i akcesoriów zgodnie z życzeniami rodziny.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}
