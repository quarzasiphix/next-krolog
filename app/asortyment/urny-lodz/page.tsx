import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'

export const metadata: Metadata = {
  title: 'Urny Pogrzebowe Łódź',
  description: 'Szeroki wybór urn pogrzebowych w Łodzi. Urny metalowe, drewniane, kamienne, ceramiczne.',
  keywords: ['urny pogrzebowe łódź', 'urny na prochy', 'urna pogrzebowa'],
}

export default function UrnyPage() {
  return (
    <ServiceLayout
      title="Urny Pogrzebowe"
      description="Posiadamy szeroki wybór urn pogrzebowych, wykonanych z różnych materiałów i w różnych stylach."
      backgroundImage={IMAGES.subpages.urny}
    >
      {/* Add content here */}
    </ServiceLayout>
  )
}
