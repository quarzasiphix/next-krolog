import { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import { buildLocalMetadata, buildMetaDescription, buildWebPageJsonLd, stringifyJsonLd } from '@/lib/local-seo'

export const metadata: Metadata = buildLocalMetadata({
  title: 'Nekrolog Łódź – Zakład Pogrzebowy Łódź | Bez Zaliczki 24/7',
  path: '/',
  description: 'Całodobowy zakład pogrzebowy w Łodzi – ul. Legionów 48. Organizacja pogrzebów, kremacja, transport 24/7, pogrzeb bez zaliczki. Tel: +48 602 274 661.',
  keywords: [
    'zakład pogrzebowy łódź',
    'zaklad pogrzebowy lodz',
    'nekrolog łódź',
    'nekrolog lodz',
    'usługi pogrzebowe łódź',
    'pogrzeb bez zaliczki łódź',
    'dom pogrzebowy łódź',
    'organizacja pogrzebu łódź',
    'kremacja łódź',
    'transport zmarłych łódź',
  ],
  ogTitle: 'Nekrolog Łódź – Całodobowy Zakład Pogrzebowy w Łodzi',
})

export default async function HomePage() {
  const homepageSchema = buildWebPageJsonLd({
    name: 'Zakład Pogrzebowy Łódź - Nekrolog Łódź',
    description:
      'Całodobowy zakład pogrzebowy w Łodzi z pomocą 24/7, możliwością rozliczenia bez zaliczki oraz dodatkowymi usługami transportu zmarłych.',
    path: '/',
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homepageSchema) }} />
      <HomePageClient />
    </>
  )
}
