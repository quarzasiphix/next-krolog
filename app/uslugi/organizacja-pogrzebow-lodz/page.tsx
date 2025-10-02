import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'

export const metadata: Metadata = {
  title: 'Organizacja Pogrzebów Łódź',
  description: 'Profesjonalna organizacja pogrzebów w Łodzi. Pomoc w formalnościach, kompleksowa obsługa.',
  keywords: ['organizacja pogrzebów łódź', 'planowanie pogrzebu', 'formalności pogrzebowe'],
}

export default function OrganizacjaPogrzebowPage() {
  return (
    <ServiceLayout
      title="Organizacja Pogrzebów w Łodzi"
      description="Zajmujemy się kompleksową organizacją ceremonii pogrzebowych, dbając o każdy szczegół."
      backgroundImage={IMAGES.subpages.organizacja}
    >
      {/* Add content here */}
    </ServiceLayout>
  )
}
