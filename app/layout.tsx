import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import ClientShell from '@/components/ClientShell'
import OrganizationSchema from '@/components/structured-data/OrganizationSchema'
import FuneralHomeSchema from '@/components/structured-data/FuneralHomeSchema'

export const metadata: Metadata = {
  metadataBase: new URL('https://nekrolog-lodz.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
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
    images: [
      {
        url: '/lovable-uploads/cross.png',
        width: 1200,
        height: 630,
        alt: 'Zakład Pogrzebowy Nekrolog Łódź',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zakład Pogrzebowy w Łodzi - Nekrolog Łódź',
    description: 'Profesjonalny zakład pogrzebowy w Łodzi. Dostępni 24/7. Tel: +48 602 274 661',
    images: ['/lovable-uploads/cross.png'],
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params?: Promise<{ locale?: string }>
}) {
  const resolvedParams = params ? await params : undefined
  const localeLangScript = `
    (function () {
      var localeMap = { pl: 'pl', en: 'en', de: 'de', fr: 'fr', nl: 'nl', it: 'it' };
      var firstSegment = window.location.pathname.split('/').filter(Boolean)[0];
      document.documentElement.lang = localeMap[firstSegment] || 'pl';
    })();
  `
  return (
    <html lang={resolvedParams?.locale || 'pl'} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.app.goo.gl" />
        <script dangerouslySetInnerHTML={{ __html: localeLangScript }} />
      </head>
      <body>
        <Providers>
          <OrganizationSchema />
          <FuneralHomeSchema description="Całodobowy zakład pogrzebowy w Łodzi przy ul. Legionów 48. Kompleksowe usługi pogrzebowe, wsparcie 24/7 i możliwość rozliczenia bez zaliczki." />
          <ClientShell>
            {children}
          </ClientShell>
        </Providers>
      </body>
    </html>
  )
}
