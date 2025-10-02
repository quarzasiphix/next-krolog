import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'

export const metadata: Metadata = {
  title: 'Trumny Łódź',
  description: 'Szeroki wybór trumien w Łodzi. Trumny dębowe, sosnowe, olchowe. Różne wzory i wykończenia.',
  keywords: ['trumny łódź', 'trumna dębowa', 'trumna sosnowa', 'producent trumien'],
}

export default function TrumnyPage() {
  return (
    <ServiceLayout
      title="Trumny"
      description="Oferujemy szeroki wybór trumien, od tradycyjnych po nowoczesne, wykonanych z najwyższej jakości materiałów."
      backgroundImage={IMAGES.subpages.trumny}
    >
      {/* Add content here */}
    </ServiceLayout>
  )
}
