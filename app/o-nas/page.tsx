import { Metadata } from 'next'
import { Clock, Award, Heart } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'

export const metadata: Metadata = {
  title: 'O Nas - Zakład Pogrzebowy Nekrolog Łódź',
  description: 'Dowiedz się więcej o naszej firmie, misji i wartościach. Profesjonalny zakład pogrzebowy z wieloletnim doświadczeniem w Łodzi. Jesteśmy tu, aby pomagać w trudnych chwilach.',
  keywords: ['o nas', 'zakład pogrzebowy nekrolog', 'historia firmy', 'jolanta kostowska', 'doświadczenie pogrzebowe'],
  alternates: {
    canonical: `${SITE_URL}/o-nas`,
  },
  openGraph: {
    title: 'O Nas - Zakład Pogrzebowy Nekrolog Łódź',
    description: 'Profesjonalny zakład pogrzebowy z wieloletnim doświadczeniem. Poznaj naszą historię i wartości.',
    url: `${SITE_URL}/o-nas`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ONasPage() {
  return (
    <>
      <BreadcrumbController
        overrides={[
          { segment: 'o-nas', label: 'O Nas' },
        ]}
      />
      <section id="about" className="py-12 bg-gradient-to-b from-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
              O Nas
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Zakład Pogrzebowy Nekrolog to firma z wieloletnim doświadczeniem, 
              która od lat świadczy profesjonalne usługi pogrzebowe w Łodzi i okolicach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-playfair font-medium text-white mb-6">
                Nasza Historia
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Nasza firma powstała z pasji i chęci pomocy ludziom w najtrudniejszych 
                momentach życia. Przez lata działalności zbudowaliśmy zespół wykwalifikowanych 
                specjalistów, którzy rozumieją potrzeby rodzin zmarłych.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Jesteśmy firmą rodzinną, która ceni tradycję i szacunek. Każde zlecenie 
                traktujemy indywidualnie, zapewniając pełne wsparcie na każdym etapie organizacji ceremonii.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-playfair font-bold text-primary mb-4">NŁ</div>
                  <p className="text-white">Nekrolog Łódź</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-black/50 rounded-lg border border-primary/20">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">20+ Lat Doświadczenia</h3>
              <p className="text-gray-300">
                Działamy na rynku od ponad dwóch dekad, obsługując setki rodzin rocznie.
              </p>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-lg border border-primary/20">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Profesjonalizm</h3>
              <p className="text-gray-300">
                Nasz zespół to wykwalifikowani specjaliści z odpowiednimi uprawnieniami.
              </p>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-lg border border-primary/20">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Empatia</h3>
              <p className="text-gray-300">
                Rozumiemy potrzeby rodzin i zapewniamy wsparcie w trudnych chwilach.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-playfair font-medium text-white mb-6">
              Nasze Wartości
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 leading-relaxed mb-8">
                W naszej pracy kierujemy się szacunkiem, godnością i profesjonalizmem. 
                Rozumiemy, że każda rodzina zasługuje na indywidualne podejście i pełne wsparcie 
                w organizacji ostatniego pożegnania.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="text-xl font-semibold text-white mb-3">Szacunek</h4>
                  <p className="text-gray-300">
                    Traktujemy każdego zmarłego z należytym szacunkiem i godnością.
                  </p>
                </div>
                <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="text-xl font-semibold text-white mb-3">Dyskrecja</h4>
                  <p className="text-gray-300">
                    Zapewniamy pełną poufność i dyskrecję w każdej sytuacji.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
