import { Metadata } from 'next'
import { BreadcrumbController } from '@/components/breadcrumb-context'

export const metadata: Metadata = {
  title: 'Polityka Prywatności',
  description: 'Polityka prywatności serwisu nekrolog-lodz.com.',
  keywords: ['polityka prywatności', 'cookies', 'dane osobowe'],
  alternates: {
    canonical: '/polityka-prywatnosci',
  },
}

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <BreadcrumbController
        overrides={[
          { segment: 'polityka-prywatnosci', label: 'Polityka Prywatności' },
        ]}
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Polityka Prywatności</h1>
        <p>Treść polityki prywatności...</p>
      </div>
    </>
  )
}
