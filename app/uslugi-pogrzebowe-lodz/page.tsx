import { Metadata } from 'next'
import Services from '@/components/Services'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'

export const metadata: Metadata = {
  title: 'Usługi Pogrzebowe Łódź',
  description: 'Kompleksowe usługi pogrzebowe w Łodzi. Organizacja ceremonii, kremacja, transport i więcej. Profesjonalna pomoc 24/7.',
  keywords: ['usługi pogrzebowe łódź', 'zakład pogrzebowy łódź', 'dom pogrzebowy łódź', 'organizacja pogrzebu łódź'],
  alternates: {
    canonical: `${SITE_URL}/uslugi-pogrzebowe-lodz`,
  },
  openGraph: {
    title: 'Usługi Pogrzebowe Łódź - Nekrolog',
    description: 'Kompleksowe usługi pogrzebowe w Łodzi. Organizacja ceremonii, kremacja, transport i więcej.',
    url: `${SITE_URL}/uslugi-pogrzebowe-lodz`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function UslugiPogrzebowePage() {
  return (
    <>
      <BreadcrumbController
        overrides={[
          { segment: 'uslugi-pogrzebowe-lodz', label: 'Usługi Pogrzebowe' },
        ]}
      />
      <Services />
    </>
  )
}
