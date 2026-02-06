import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, FileText, AlertTriangle } from 'lucide-react'

const exhumationReasons = [
  'Przeniesienie szczątków do innego grobu lub na inny cmentarz',
  'Przeprowadzenie badań w celach medycznych lub sądowych',
  'Identyfikacja osoby zmarłej bądź ustalenie przyczyn śmierci',
  'Przeniesienie szczątków z zagranicy i pochowanie w rodzinnym grobie',
  'Ekshumacja na polecenie organów ścigania lub sądu',
]

const serviceScope = [
  {
    icon: FileText,
    title: 'Formalności i pozwolenia',
    description:
      'Pomagamy uzyskać zgody sanepidu, zarządców cmentarzy oraz komplet dokumentów niezbędnych do przeprowadzenia ekshumacji.',
  },
  {
    icon: Clock,
    title: 'Sprawny przebieg prac',
    description:
      'Doświadczony zespół przeprowadza ekshumację zgodnie z przepisami sanitarnymi i etycznymi, z zachowaniem najwyższego szacunku.',
  },
  {
    icon: AlertTriangle,
    title: 'Bezpieczeństwo i procedury',
    description:
      'Stosujemy wymagane środki ochrony i nadzorujemy proces, by zapewnić bezpieczeństwo personelu oraz godne traktowanie szczątków.',
  },
]

const baseDocuments = [
  'Wniosek o zezwolenie na ekshumację',
  'Akt zgonu osoby zmarłej',
  'Dokument potwierdzający prawo do grobu',
  'Zgoda Państwowego Powiatowego Inspektora Sanitarnego',
]

const additionalDocuments = [
  'Zgoda zarządcy cmentarza, na którym znajduje się grób',
  'Zgoda zarządcy cmentarza, do którego zostaną przeniesione szczątki',
  'Zgody członków rodziny uprawnionych do pochówku',
  'W przypadku transportu za granicę – dodatkowe zezwolenia konsularne',
]

export const metadata: Metadata = {
  title: 'Ekshumacja Zwłok Łódź',
  description:
    'Profesjonalna obsługa ekshumacji w Łodzi – formalności, transport szczątków, ponowny pochówek z pełnym poszanowaniem prawa i tradycji.',
  keywords: ['ekshumacja łódź', 'przeniesienie grobu', 'formalności ekshumacja'],
  alternates: {
    canonical: '/uslugi/ekshumacja-lodz',
  },
}

export default function EkshumacjaPage() {
  return (
    <ServiceLayout
      title="Ekshumacja Zwłok"
      description="Zapewniamy kompleksową pomoc w przeprowadzeniu ekshumacji – od formalności, przez proces techniczny, po ponowny pochówek."
      backgroundImage={IMAGES.services.exhumation}
    >
      <div className="space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">Ekshumacja z poszanowaniem prawa i tradycji</h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-4">
              <p>
                Ekshumacja to procedura wymagająca odpowiednich pozwoleń oraz specjalistycznej wiedzy. Zakład Pogrzebowy
                Nekrolog Łódź przeprowadza ją z zachowaniem wszelkich przepisów sanitarnych i w duchu szacunku dla osoby zmarłej
                oraz jej bliskich. Zapewniamy wsparcie na każdym etapie, tak by rodzina mogła przejść przez ten proces w spokoju.
              </p>
              <p>
                Zajmujemy się zarówno ekshumacjami krajowymi, jak i przygotowaniem do transportu międzynarodowego, organizując ponowny pochówek
                zgodnie z życzeniami rodziny. Każdy przypadek analizujemy indywidualnie, dbając o bezpieczeństwo i dyskrecję.
              </p>
            </div>

            <ul className="space-y-3">
              {exhumationReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {serviceScope.map((item) => (
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

        <section className="glass-card p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-playfair text-white text-center">Dokumenty niezbędne do przeprowadzenia ekshumacji</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Dokumenty podstawowe</h4>
              <ul className="space-y-3">
                {baseDocuments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Dokumenty dodatkowe</h4>
              <ul className="space-y-3">
                {additionalDocuments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
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
