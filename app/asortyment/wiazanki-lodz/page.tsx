import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'

export const metadata: Metadata = {
  title: 'Wiązanki Pogrzebowe Łódź',
  description: 'Piękne wiązanki pogrzebowe z żywych kwiatów. Dostawa na terenie Łodzi.',
  keywords: ['wiązanki pogrzebowe łódź', 'kwiaty na pogrzeb', 'florystyka pogrzebowa'],
}

export default function WiazankiPage() {
  return (
    <ServiceLayout
      title="Wiązanki Pogrzebowe"
      description="Komponujemy piękne i eleganckie wiązanki pogrzebowe, które wyrażają szacunek i pamięć o zmarłym."
      backgroundImage={IMAGES.subpages.wiazanki}
    >
      {/* Add content here */}
    </ServiceLayout>
  )
}
