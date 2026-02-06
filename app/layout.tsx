import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import ClientShell from '@/components/ClientShell'

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
    images: [{
      url: 'https://nekrolog-lodz.com/lovable-uploads/cross.png',
      width: 1200,
      height: 630,
      alt: 'Zakład Pogrzebowy Nekrolog Łódź',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zakład Pogrzebowy w Łodzi - Nekrolog Łódź',
    description: 'Profesjonalny zakład pogrzebowy w Łodzi. Dostępni 24/7. Tel: +48 602 274 661',
    images: ['https://nekrolog-lodz.com/lovable-uploads/cross.png'],
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
