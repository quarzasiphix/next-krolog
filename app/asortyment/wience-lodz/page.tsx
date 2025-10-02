import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'

export const metadata: Metadata = {
  title: 'Wieńce Pogrzebowe Łódź',
  description: 'Eleganckie wieńce pogrzebowe z żywych kwiatów. Dostawa na terenie Łodzi.',
  keywords: ['wieńce pogrzebowe łódź', 'kwiaty na pogrzeb', 'wieniec pogrzebowy'],
}

export default function WiencePage() {
  return (
    <ServiceLayout
      title="Wieńce Pogrzebowe"
      description="Oferujemy okazałe i piękne wieńce pogrzebowe, przygotowywane przez doświadczonych florystów."
      backgroundImage={IMAGES.subpages.wience}
    >
      {/* Add content here */}
    </ServiceLayout>
  )
}
