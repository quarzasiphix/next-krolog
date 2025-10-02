import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'

export const metadata: Metadata = {
  title: 'Transport Zmarłych Łódź',
  description: 'Całodobowy transport zmarłych na terenie Łodzi, Polski i Europy. Profesjonalne karawany, godna obsługa.',
  keywords: ['transport zmarłych łódź', 'przewóz zwłok', 'karawan łódź'],
}

export default function TransportZmarlychPage() {
  return (
    <ServiceLayout
      title="Transport Zmarłych"
      description="Zapewniamy całodobowy, profesjonalny transport zmarłych na terenie kraju i za granicą."
      backgroundImage={IMAGES.subpages.transport}
    >
      {/* Add content here */}
    </ServiceLayout>
  )
}
