import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import ClientShell from '@/components/ClientShell'

export const metadata: Metadata = {
  metadataBase: new URL('https://nekrolog-lodz.com'),
  title: {
    default: 'Nekrolog Łódź - Zakład Pogrzebowy w Łodzi | Jolanta Kostowska',
    template: '%s | Zakład Pogrzebowy Łódź'
  },
  description: 'Nekrolog Łódź (nekrolog lodz) to całodobowy zakład pogrzebowy w Łodzi przy ul. Legionów 48. Kompleksowe usługi pogrzebowe i wsparcie bez zaliczki.',
  keywords: ['zakład pogrzebowy łódź', 'zaklad pogrzebowy lodz', 'nekrolog łódź', 'nekrolog lodz', 'usługi pogrzebowe łódź', 'pogrzeb bez zaliczki łódź', 'dom pogrzebowy łódź', 'organizacja pogrzebu łódź', 'kremacja łódź', 'transport zmarłych łódź', 'pogrzeby łódź'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://nekrolog-lodz.com',
    siteName: 'Zakład Pogrzebowy Łódź - Nekrolog',
    title: 'Zakład Pogrzebowy w Łodzi – Nekrolog Łódź',
    description: 'Profesjonalny zakład pogrzebowy w Łodzi. Kompleksowe usługi pogrzebowe dostępne całodobowo.',
<<<<<<< ours
    images: [{
      url: 'https://nekrolog-lodz.com/lovable-uploads/cross.png',
      width: 1200,
      height: 630,
      alt: 'Zakład Pogrzebowy Nekrolog Łódź',
    }],
=======
    images: [
      {
        url: '/lovable-uploads/cross.png',
        alt: 'Nekrolog Łódź - Zakład pogrzebowy',
      },
    ],
>>>>>>> theirs
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zakład Pogrzebowy w Łodzi - Nekrolog Łódź',
<<<<<<< ours
    description: 'Profesjonalny zakład pogrzebowy w Łodzi. Dostępni 24/7. Tel: +48 602 274 661',
    images: ['https://nekrolog-lodz.com/lovable-uploads/cross.png'],
=======
    description: 'Profesjonalny zakład pogrzebowy w Łodzi',
    images: ['/lovable-uploads/cross.png'],
>>>>>>> theirs
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.app.goo.gl" />
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
