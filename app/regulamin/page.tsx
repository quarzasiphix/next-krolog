import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulamin Serwisu',
  description: 'Regulamin korzystania z serwisu nekrolog-lodz.com.',
  keywords: ['regulamin', 'warunki korzystania', 'serwis'],
  alternates: {
    canonical: '/regulamin',
  },
}

export default function RegulaminPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Regulamin Serwisu</h1>
      <p>Treść regulaminu...</p>
    </div>
  )
}
