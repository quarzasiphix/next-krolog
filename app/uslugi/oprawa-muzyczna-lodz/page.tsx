import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'

export const metadata: Metadata = {
  title: 'Oprawa Muzyczna Pogrzebu Łódź',
  description: 'Profesjonalna oprawa muzyczna ceremonii pogrzebowych w Łodzi. Skrzypce, trąbka, organy.',
  keywords: ['oprawa muzyczna pogrzebu łódź', 'muzyka na pogrzeb', 'skrzypce na pogrzeb'],
}

export default function OprawaMuzycznaPage() {
  return (
    <ServiceLayout
      title="Oprawa Muzyczna Pogrzebu"
      description="Zapewniamy profesjonalną oprawę muzyczną, która dodaje uroczystości podniosłego charakteru."
      backgroundImage={IMAGES.subpages.oprawa}
    >
      {/* Add content here */}
    </ServiceLayout>
  )
}
