import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polityka Prywatności',
  description: 'Polityka prywatności serwisu nekrolog-lodz.pl.',
  keywords: ['polityka prywatności', 'cookies', 'dane osobowe'],
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Polityka Prywatności</h1>
      <p>Treść polityki prywatności...</p>
    </div>
  )
}
