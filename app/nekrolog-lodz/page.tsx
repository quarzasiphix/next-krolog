import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BreadcrumbController } from '@/components/breadcrumb-context'

export const metadata: Metadata = {
  title: 'Nekrolog Łódź (Nekrolog Lodz) - Zakład Pogrzebowy w Łodzi',
  description:
    'Nekrolog Łódź to zakład pogrzebowy w Łodzi przy ul. Legionów 48. Kompleksowa organizacja pogrzebów, kremacja, transport zmarłych i pomoc 24/7.',
  keywords: [
    'nekrolog łódź',
    'nekrolog lodz',
    'zakład pogrzebowy łódź',
    'zaklad pogrzebowy lodz',
    'usługi pogrzebowe łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/nekrolog-lodz`,
  },
  openGraph: {
    title: 'Nekrolog Łódź - Zakład Pogrzebowy w Łodzi',
    description:
      'Poznaj Nekrolog Łódź: lokalny zakład pogrzebowy z całodobową pomocą i rozliczeniem bez zaliczki.',
    url: `${SITE_URL}/nekrolog-lodz`,
    type: 'website',
  },
}

export default function NekrologLodzPage() {
  return (
    <>
      <BreadcrumbController overrides={[{ segment: 'nekrolog-lodz', label: 'Nekrolog Łódź' }]} />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium text-white">
              Nekrolog Łódź
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-white">Nekrolog Łódź</strong> (często wyszukiwane także jako
              <strong className="text-white"> nekrolog lodz</strong>) to lokalny zakład pogrzebowy przy ul. Legionów 48.
              Zapewniamy całodobową pomoc rodzinom z Łodzi i okolic.
            </p>
            <div className="bg-black/40 border border-white/10 rounded-lg p-5">
              <p className="text-white font-medium mb-2">Szybka odpowiedź</p>
              <p className="text-gray-300">
                Jeśli szukasz „nekrolog lodz”, chodzi o Zakład Pogrzebowy Nekrolog Łódź.
                Adres: Legionów 48, 90-702 Łódź. NIP: 7271089145. Telefon całodobowy: +48 602 274 661.
              </p>
              <p className="text-xs text-gray-500 mt-3">Aktualizacja: 27 lutego 2026</p>
            </div>

            <Card className="bg-black/30 border border-white/10">
              <CardContent className="p-6 space-y-3">
                <h2 className="text-2xl font-playfair text-white">Co robimy</h2>
                <ul className="text-gray-300 space-y-2">
                  <li>Kompleksowa organizacja pogrzebów</li>
                  <li>Transport zmarłych krajowy i międzynarodowy</li>
                  <li>Kremacja, asortyment i oprawa ceremonii</li>
                  <li>Wsparcie formalne i rozliczenie bez zaliczki</li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/zaklad-pogrzebowy-lodz">Zakład Pogrzebowy Łódź</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 hover:bg-white/10">
                <Link href="/kontakt">Kontakt 24/7</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
