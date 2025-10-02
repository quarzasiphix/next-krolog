import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RODO - Ochrona Danych Osobowych',
  description: 'Informacje na temat przetwarzania danych osobowych zgodnie z RODO.',
  keywords: ['rodo', 'ochrona danych osobowych', 'polityka prywatności'],
}

export default function RodoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Klauzula informacyjna RODO</h1>
      <p>Treść klauzuli informacyjnej RODO...</p>
    </div>
  )
}
