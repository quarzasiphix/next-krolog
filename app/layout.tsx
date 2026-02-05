import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import ClientShell from '@/components/ClientShell'
import FuneralHomeSchema from '@/components/structured-data/FuneralHomeSchema'

export const metadata: Metadata = {
  metadataBase: new URL('https://nekrolog-lodz.com'),
  title: {
    default: 'Zakład Pogrzebowy w Łodzi – Nekrolog Łódź | Jolanta Kostowska',
    template: '%s | Zakład Pogrzebowy Łódź'
  },
  description: 'Zakład Pogrzebowy Nekrolog Łódź oferuje kompleksowe usługi pogrzebowe w Łodzi. Organizacja ceremonii, kremacja, transport. Doświadczenie 20+ lat. Dostępni całodobowo. Tel: +48 602 274 661.',
  keywords: ['zakład pogrzebowy łódź', 'usługi pogrzebowe łódź', 'dom pogrzebowy łódź', 'organizacja pogrzebu łódź', 'kremacja łódź', 'transport zmarłych łódź', 'pogrzeby łódź'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://nekrolog-lodz.com',
    siteName: 'Zakład Pogrzebowy Łódź - Nekrolog',
    title: 'Zakład Pogrzebowy w Łodzi – Nekrolog Łódź',
    description: 'Profesjonalny zakład pogrzebowy w Łodzi. Kompleksowe usługi pogrzebowe dostępne całodobowo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zakład Pogrzebowy w Łodzi - Nekrolog Łódź',
    description: 'Profesjonalny zakład pogrzebowy w Łodzi',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head />
      <body>
        <FuneralHomeSchema
          businessName="Zakład Pogrzebowy Nekrolog Łódź"
          description="Profesjonalny zakład pogrzebowy w Łodzi oferujący kompleksowe usługi pogrzebowe, organizację ceremonii, kremację i transport zmarłych. Dostępni całodobowo 24/7."
          phone="+48 602 274 661"
          address="ul. Piotrkowska 270"
          city="Łódź"
          postalCode="90-361"
          openingHours="Mo-Su 00:00-24:00"
        />
        <Providers>
          <ClientShell>
            {children}
          </ClientShell>
        </Providers>
      </body>
    </html>
  )
}
