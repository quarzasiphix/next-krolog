import { Metadata } from 'next'
import Contact from '@/components/Contact'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'

export const metadata: Metadata = {
  title: 'Kontakt - Zakład Pogrzebowy Nekrolog Łódź',
  description: 'Skontaktuj się z nami. Jesteśmy dostępni 24/7. Tel: +48 602 274 661. Adres: Legionów 48, 90-702 Łódź. Formularz kontaktowy.',
  keywords: ['kontakt', 'zakład pogrzebowy kontakt', 'telefon alarmowy', 'całodobowy kontakt łódź', 'adres nekrolog'],
  alternates: {
    canonical: `${SITE_URL}/kontakt`,
  },
  openGraph: {
    title: 'Kontakt - Zakład Pogrzebowy Nekrolog Łódź',
    description: 'Skontaktuj się z nami 24/7. Tel: +48 602 274 661. Legionów 48, Łódź.',
    url: `${SITE_URL}/kontakt`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbController
        overrides={[
          { segment: 'kontakt', label: 'Kontakt' },
        ]}
      />
      <Contact />
    </>
  )
}
