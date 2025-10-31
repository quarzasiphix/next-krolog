import { Metadata } from 'next'
import About from '@/components/About'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'

export const metadata: Metadata = {
  title: 'O Nas - Zakład Pogrzebowy Nekrolog Łódź',
  description: 'Dowiedz się więcej o naszej firmie, misji i wartościach. Profesjonalny zakład pogrzebowy z wieloletnim doświadczeniem w Łodzi. Jesteśmy tu, aby pomagać w trudnych chwilach.',
  keywords: ['o nas', 'zakład pogrzebowy nekrolog', 'historia firmy', 'jolanta kostowska', 'doświadczenie pogrzebowe'],
  alternates: {
    canonical: `${SITE_URL}/o-nas`,
  },
  openGraph: {
    title: 'O Nas - Zakład Pogrzebowy Nekrolog Łódź',
    description: 'Profesjonalny zakład pogrzebowy z wieloletnim doświadczeniem. Poznaj naszą historię i wartości.',
    url: `${SITE_URL}/o-nas`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ONasPage() {
  return (
    <>
      <BreadcrumbController
        overrides={[
          { segment: 'o-nas', label: 'O Nas' },
        ]}
      />
      <About />
    </>
  )
}
