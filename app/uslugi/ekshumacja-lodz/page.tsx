import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'

export const metadata: Metadata = {
  title: 'Ekshumacja Zwłok Łódź',
  description: 'Profesjonalne usługi ekshumacji zwłok w Łodzi. Przeprowadzamy proces z zachowaniem wszelkich norm i szacunku.',
  keywords: ['ekshumacja łódź', 'przeniesienie zwłok', 'ekshumacja zwłok'],
}

export default function EkshumacjaPage() {
  return (
    <ServiceLayout
      title="Ekshumacja Zwłok"
      description="Świadczymy profesjonalne usługi ekshumacji, zapewniając godne i zgodne z prawem przeniesienie szczątków."
      backgroundImage={IMAGES.services.exhumation}
    >
      {/* Add content here */}
    </ServiceLayout>
  )
}
