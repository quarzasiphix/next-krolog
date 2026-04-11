import { Metadata } from 'next'
import Services from '@/components/Services'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import ServiceSchema from '@/components/structured-data/ServiceSchema'
import FAQSchema from '@/components/structured-data/FAQSchema'
import { buildLocalMetadata, buildMetaDescription } from '@/lib/local-seo'

export const metadata: Metadata = buildLocalMetadata({
  title: 'Usługi Pogrzebowe Łódź',
  path: '/uslugi-pogrzebowe-lodz',
  description: buildMetaDescription([
    'Kompleksowe usługi pogrzebowe w Łodzi od Zakładu Pogrzebowego Nekrolog Łódź',
    'organizacja ceremonii, kremacja, formalności, transport zmarłych i pomoc 24/7',
    'możliwość rozliczenia bez zaliczki',
  ]),
  keywords: ['usługi pogrzebowe łódź', 'zakład pogrzebowy łódź', 'zaklad pogrzebowy lodz', 'nekrolog łódź', 'nekrolog lodz', 'dom pogrzebowy łódź', 'organizacja pogrzebu łódź'],
  ogTitle: 'Usługi Pogrzebowe Łódź | Nekrolog Łódź',
})

export default function UslugiPogrzebowePage() {
  const breadcrumbs = [
    { name: 'Strona Główna', url: '/' },
    { name: 'Usługi Pogrzebowe' },
  ]
  const faqData = [
    {
      question: 'Czy pomagacie w organizacji pogrzebu bez zaliczki w Łodzi?',
      answer:
        'Tak. W wielu przypadkach pomagamy zorganizować pogrzeb bez kosztów z góry i rozliczyć usługę z zasiłku pogrzebowego ZUS lub KRUS.',
    },
    {
      question: 'Czy zakład pogrzebowy w Łodzi jest dostępny całodobowo?',
      answer:
        'Tak. Jesteśmy dostępni 24/7 pod numerem +48 602 274 661 i pomagamy od pierwszego telefonu.',
    },
    {
      question: 'Czy w ramach usług pogrzebowych pomagacie także w transporcie zmarłych?',
      answer:
        'Tak. Organizujemy transport krajowy, a w razie potrzeby także sprowadzenie zmarłego do Polski z zagranicy.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        serviceName="Usługi Pogrzebowe Łódź"
        description="Kompleksowe usługi pogrzebowe w Łodzi: organizacja ceremonii, kremacja, formalności, pomoc 24/7 i możliwość rozliczenia bez zaliczki."
        url="/uslugi-pogrzebowe-lodz"
      />
      <FAQSchema faqs={faqData} name="Usługi Pogrzebowe Łódź FAQ" />
      <BreadcrumbController
        overrides={[
          { segment: 'uslugi-pogrzebowe-lodz', label: 'Usługi Pogrzebowe' },
        ]}
      />
      <Services />
    </>
  )
}
