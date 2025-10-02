import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import ClientShell from '@/components/ClientShell'

export const metadata: Metadata = {
  metadataBase: new URL('https://nekrolog-lodz.pl'),
  title: {
    default: 'Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo',
    template: '%s | Nekrolog Łódź'
  },
  description: 'Profesjonalny zakład pogrzebowy Nekrolog Łódź Jolanta Kostowska. Kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Dostępni całodobowo. Tel: +48 602 274 661.',
  keywords: ['usługi pogrzebowe łódź', 'zakład pogrzebowy łódź', 'dom pogrzebowy łódź', 'nekrolog łódź', 'jolanta kostowska', 'pogrzeby łódź', 'kremacja łódź', 'transport zwłok łódź', 'całodobowy zakład pogrzebowy'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://nekrolog-lodz.pl',
    siteName: 'Nekrolog Łódź - Usługi Pogrzebowe',
    title: 'Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska',
    description: 'Profesjonalny zakład pogrzebowy Nekrolog Łódź. Kompleksowe usługi pogrzebowe dostępne całodobowo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nekrolog Łódź - Usługi Pogrzebowe',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FuneralHome",
              "name": "Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska",
              "description": "Profesjonalny zakład pogrzebowy Nekrolog Łódź Jolanta Kostowska. Kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Dostępni całodobowo.",
              "telephone": "+48602274661",
              "email": "kontakt@nekrolog-lodz.pl",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Legionów 48",
                "addressLocality": "Łódź",
                "postalCode": "90-702",
                "addressCountry": "PL"
              },
              "url": "https://nekrolog-lodz.pl",
              "openingHours": "Mo-Fr 08:00-16:00, Sa 09:00-13:00",
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/people/Zak%C5%82ad-pogrzebowyNekrolog-Jolanta-Kostowska/100092232063111/"
              ]
            })
          }}
        />
      </head>
      <body>
        <Providers>
          <ClientShell>
            {children}
          </ClientShell>
        </Providers>
      </body>
    </html>
  )
}
