import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, CheckCircle2, Building2, ArrowLeft, Navigation } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { notFound } from 'next/navigation'
import { SITE_URL } from '@/lib/constants'

interface Cemetery {
  name: string
  slug: string
  address: string
  phone?: string
  hours?: string
  description: string
  longDescription: string
  features: string[]
  sections: string[]
  history?: string
  facilities: string[]
  access: {
    publicTransport: string[]
    parking: string
  }
  coordinates?: {
    lat: number
    lng: number
  }
}

const cemeteries: Record<string, Cemetery> = {
  'doly': {
    name: 'Cmentarz Doły',
    slug: 'doly',
    address: 'ul. Smutna 2, 91-729 Łódź',
    phone: '+48 42 674 88 88',
    hours: 'Codziennie: 8:00 - 18:00 (lato), 8:00 - 16:00 (zima)',
    description: 'Największy cmentarz komunalny w Łodzi, założony w 1892 roku.',
    longDescription: 'Cmentarz Doły to największy i najstarszy cmentarz komunalny w Łodzi, zajmujący ponad 180 hektarów powierzchni. Założony w 1892 roku, jest miejscem spoczynku wielu wybitnych postaci związanych z historią miasta. Cmentarz charakteryzuje się bogatą architekturą sepulkralną i licznymi zabytkowymi nagrobkami.',
    features: [
      'Największy cmentarz w Łodzi - ponad 180 hektarów',
      'Sekcje katolickie, prawosławne, ewangelickie',
      'Możliwość pochówku tradycyjnego i urnowego',
      'Kolumbarium',
      'Zabytkowe nagrobki i kaplice',
      'Dobrze rozwinięta infrastruktura',
    ],
    sections: [
      'Sekcja katolicka',
      'Sekcja prawosławna',
      'Sekcja ewangelicka',
      'Sekcja wojskowa',
      'Kolumbarium',
    ],
    history: 'Cmentarz Doły został założony w 1892 roku jako główna nekropolia miasta Łodzi. Nazwa pochodzi od dzielnicy Doły, w której się znajduje. W okresie międzywojennym cmentarz był wielokrotnie rozbudowywany. Podczas II wojny światowej był miejscem egzekucji i pochówku ofiar okupacji niemieckiej.',
    facilities: [
      'Kaplica cmentarna',
      'Punkt informacyjny',
      'Parking dla odwiedzających',
      'Toalety',
      'Punkt sprzedaży zniczy i kwiatów',
    ],
    access: {
      publicTransport: [
        'Autobus: 55, 70, 78, 83 - przystanek Cmentarz Doły',
        'Tramwaj: 6, 16 - przystanek Smutna',
      ],
      parking: 'Duży parking przy głównym wejściu, dodatkowe miejsca parkingowe przy bramach bocznych',
    },
    coordinates: {
      lat: 51.7461,
      lng: 19.5047,
    },
  },
  'radogoszcz': {
    name: 'Cmentarz Radogoszcz',
    slug: 'radogoszcz',
    address: 'ul. Zgierska 205, 91-520 Łódź',
    phone: '+48 42 640 41 41',
    hours: 'Codziennie: 8:00 - 18:00 (lato), 8:00 - 16:00 (zima)',
    description: 'Cmentarz komunalny na północy Łodzi, otwarty w 1971 roku.',
    longDescription: 'Cmentarz Radogoszcz to nowoczesny cmentarz komunalny położony na północy Łodzi przy ulicy Zgierskiej. Otwarty w 1971 roku, charakteryzuje się dobrze zaplanowaną infrastrukturą i łatwym dojazdem. Cmentarz oferuje zarówno pochówki tradycyjne, jak i urnowe.',
    features: [
      'Nowoczesna infrastruktura',
      'Sekcje wyznaniowe',
      'Pochówki tradycyjne i urnowe',
      'Dobre połączenia komunikacyjne',
      'Kolumbarium',
      'Łatwy dojazd z centrum miasta',
    ],
    sections: [
      'Sekcja katolicka',
      'Sekcja prawosławna',
      'Sekcja ewangelicka',
      'Kolumbarium',
    ],
    history: 'Cmentarz Radogoszcz został otwarty w 1971 roku jako odpowiedź na rosnące potrzeby mieszkańców północnej części Łodzi. Nazwa pochodzi od dzielnicy Radogoszcz. Cmentarz był projektowany z myślą o nowoczesnych standardach i wygodzie odwiedzających.',
    facilities: [
      'Kaplica cmentarna',
      'Administracja cmentarza',
      'Parking',
      'Toalety',
      'Punkt sprzedaży kwiatów',
    ],
    access: {
      publicTransport: [
        'Autobus: 51, 54, 59, 83 - przystanek Radogoszcz',
        'Tramwaj: 6, 11 - przystanek Zgierska',
      ],
      parking: 'Parking przy głównym wejściu',
    },
    coordinates: {
      lat: 51.8089,
      lng: 19.4589,
    },
  },
  'stary': {
    name: 'Stary Cmentarz',
    slug: 'stary',
    address: 'ul. Ogrodowa 43, 91-065 Łódź',
    phone: '+48 42 630 93 93',
    hours: 'Codziennie: 8:00 - 18:00 (lato), 8:00 - 16:00 (zima)',
    description: 'Zabytkowy cmentarz w centrum Łodzi, założony w 1855 roku.',
    longDescription: 'Stary Cmentarz przy ulicy Ogrodowej to najstarszy zachowany cmentarz w Łodzi, założony w 1855 roku. Jest to cmentarz wielowyznaniowy o charakterze zabytkowym, wpisany do rejestru zabytków. Znajdują się tu liczne historyczne nagrobki i kaplice grobowe wybitnych łodzian.',
    features: [
      'Zabytkowy cmentarz - założony w 1855 roku',
      'Sekcje katolicka, ewangelicka, prawosławna',
      'Historyczne nagrobki i kaplice',
      'Centralna lokalizacja',
      'Wpisany do rejestru zabytków',
      'Miejsce spoczynku wybitnych łodzian',
    ],
    sections: [
      'Sekcja katolicka',
      'Sekcja ewangelicka',
      'Sekcja prawosławna',
      'Sekcja żydowska (historyczna)',
    ],
    history: 'Stary Cmentarz został założony w 1855 roku jako główna nekropolia rozwijającego się miasta. Jest to najstarszy zachowany cmentarz w Łodzi. Pochowani są tu m.in. fabrykanci, artyści, działacze społeczni i polityczni. Cmentarz jest cennym zabytkiem architektury sepulkralnej XIX i XX wieku.',
    facilities: [
      'Kaplica cmentarna',
      'Punkt informacyjny',
      'Ograniczone miejsca parkingowe',
    ],
    access: {
      publicTransport: [
        'Tramwaj: 1, 3, 6, 10, 13 - przystanek Plac Wolności',
        'Autobus: 55, 78, 96 - przystanek Ogrodowa',
      ],
      parking: 'Ograniczone miejsca parkingowe przy cmentarzu, parking płatny w okolicy',
    },
    coordinates: {
      lat: 51.7592,
      lng: 19.4514,
    },
  },
  'zarzew': {
    name: 'Cmentarz Zarzew',
    slug: 'zarzew',
    address: 'ul. Traktorowa 84, 91-204 Łódź',
    phone: '+48 42 615 15 15',
    hours: 'Codziennie: 8:00 - 18:00 (lato), 8:00 - 16:00 (zima)',
    description: 'Cmentarz komunalny na wschodzie Łodzi.',
    longDescription: 'Cmentarz Zarzew to cmentarz komunalny położony we wschodniej części Łodzi, w spokojnej okolicy. Charakteryzuje się dobrze utrzymaną infrastrukturą i przyjazną atmosferą. Oferuje możliwość pochówków tradycyjnych i urnowych.',
    features: [
      'Spokojne położenie',
      'Sekcje wyznaniowe',
      'Pochówki tradycyjne i urnowe',
      'Łatwy dojazd',
      'Dobrze utrzymana infrastruktura',
      'Parking dla odwiedzających',
    ],
    sections: [
      'Sekcja katolicka',
      'Sekcja prawosławna',
      'Sekcja ewangelicka',
    ],
    facilities: [
      'Kaplica cmentarna',
      'Administracja',
      'Parking',
      'Toalety',
    ],
    access: {
      publicTransport: [
        'Autobus: 80, 85, 89 - przystanek Zarzew',
        'Tramwaj: 9, 13 - przystanek Traktorowa',
      ],
      parking: 'Parking przy głównym wejściu',
    },
    coordinates: {
      lat: 51.7523,
      lng: 19.5234,
    },
  },
  'komunalny-polnocny': {
    name: 'Cmentarz Komunalny Północny',
    slug: 'komunalny-polnocny',
    address: 'ul. Szczecińska 40, 91-479 Łódź',
    phone: '+48 42 640 50 50',
    hours: 'Codziennie: 8:00 - 18:00 (lato), 8:00 - 16:00 (zima)',
    description: 'Nowoczesny cmentarz komunalny na północy miasta.',
    longDescription: 'Cmentarz Komunalny Północny to jeden z najnowocześniejszych cmentarzy w Łodzi. Charakteryzuje się nowoczesną infrastrukturą, kolumbarium i dobrze zaplanowaną przestrzenią. Oferuje wysoką jakość usług i wygodę dla odwiedzających.',
    features: [
      'Nowoczesna infrastruktura',
      'Kolumbarium',
      'Pochówki tradycyjne i urnowe',
      'Parking dla odwiedzających',
      'Dobrze rozwinięta infrastruktura',
      'Łatwy dojazd',
    ],
    sections: [
      'Sekcja katolicka',
      'Sekcja prawosławna',
      'Sekcja ewangelicka',
      'Kolumbarium',
    ],
    facilities: [
      'Kaplica cmentarna',
      'Nowoczesne kolumbarium',
      'Administracja cmentarza',
      'Duży parking',
      'Toalety',
      'Punkt sprzedaży kwiatów i zniczy',
    ],
    access: {
      publicTransport: [
        'Autobus: 51, 59, 83 - przystanek Szczecińska',
        'Tramwaj: 6, 11 - przystanek Północna',
      ],
      parking: 'Duży parking przy głównym wejściu',
    },
    coordinates: {
      lat: 51.8156,
      lng: 19.4723,
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(cemeteries).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cemetery = cemeteries[slug]
  
  if (!cemetery) {
    return {
      title: 'Cmentarz nie znaleziony',
    }
  }

  return {
    title: `${cemetery.name} - Informacje, Adres, Godziny Otwarcia | Nekrolog Łódź`,
    description: `${cemetery.name} w Łodzi - ${cemetery.description} Adres: ${cemetery.address}. Organizujemy pogrzeby bez kosztów z góry. Tel: +48 602 274 661.`,
    keywords: [
      cemetery.name.toLowerCase(),
      `${cemetery.slug} łódź`,
      'cmentarz łódź',
      'pogrzeb łódź',
      'organizacja pogrzebu',
    ],
    alternates: {
      canonical: `${SITE_URL}/cmentarze-lodz/${cemetery.slug}`,
    },
    openGraph: {
      title: `${cemetery.name} - Informacje i Kontakt`,
      description: cemetery.description,
      url: `${SITE_URL}/cmentarze-lodz/${cemetery.slug}`,
      type: 'website',
    },
  }
}

export default async function CemeteryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cemetery = cemeteries[slug]

  if (!cemetery) {
    notFound()
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <section className="relative pt-20 pb-12 bg-gradient-to-b from-black via-black/95 to-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/cmentarze-lodz"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Powrót do listy cmentarzy
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
              {cemetery.name}
            </h1>
            
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xl text-gray-300">{cemetery.address}</p>
                  {cemetery.phone && (
                    <a href={`tel:${cemetery.phone}`} className="text-primary hover:text-primary/80 transition">
                      {cemetery.phone}
                    </a>
                  )}
                </div>
              </div>
              
              {cemetery.hours && (
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{cemetery.hours}</p>
                </div>
              )}
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <p className="text-lg text-white mb-4">
                <strong>Organizujemy pogrzeby na {cemetery.name}</strong>
              </p>
              <p className="text-gray-300 mb-4">
                Bez kosztów z góry - rozliczenie bezpośrednio z zasiłkiem pogrzebowym ZUS/KRUS
              </p>
              <a
                href="tel:+48602274661"
                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
              >
                <Phone className="w-5 h-5" />
                Zadzwoń: +48 602 274 661
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <Card className="bg-black/30 border border-white/10 mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                  O Cmentarzu
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {cemetery.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* History */}
            {cemetery.history && (
              <Card className="bg-black/30 border border-white/10 mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                    Historia
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {cemetery.history}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            <Card className="bg-black/30 border border-white/10 mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                  Cechy i Możliwości
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {cemetery.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sections */}
            <Card className="bg-black/30 border border-white/10 mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                  Sekcje Cmentarza
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {cemetery.sections.map((section, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{section}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card className="bg-black/30 border border-white/10 mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-medium text-white mb-4">
                  Infrastruktura i Udogodnienia
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {cemetery.facilities.map((facility, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Access */}
            <Card className="bg-black/30 border border-white/10 mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-playfair font-medium text-white mb-6">
                  Dojazd
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-primary" />
                    Komunikacja Miejska
                  </h3>
                  <ul className="space-y-2">
                    {cemetery.access.publicTransport.map((transport, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">•</span>
                        <span>{transport}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    Parking
                  </h3>
                  <p className="text-gray-300">{cemetery.access.parking}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-b from-black/90 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-playfair font-medium text-white mb-4">
                  Potrzebujesz Pomocy w Organizacji Pogrzebu?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Organizujemy pogrzeby na {cemetery.name} - bez kosztów z góry
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+48602274661"
                    className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-md font-medium text-lg hover:bg-primary/90 transition"
                  >
                    <Phone className="w-5 h-5" />
                    Zadzwoń: +48 602 274 661
                  </a>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 border border-primary/30 bg-black/50 text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-black/70 transition"
                  >
                    Formularz kontaktowy
                  </Link>
                </div>
                <p className="text-sm text-gray-400 mt-6">
                  Zakład Pogrzebowy Nekrolog Łódź • Jolanta Kostowska<br />
                  Legionów 48, 90-702 Łódź • NIP: 7271089145
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-medium text-white mb-6">
              Powiązane Tematy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/cmentarze-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Wszystkie Cmentarze w Łodzi</h3>
                    <p className="text-gray-400 text-sm">Przewodnik po cmentarzach</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/pogrzeb-bez-zaliczki" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Pogrzeb Bez Zaliczki</h3>
                    <p className="text-gray-400 text-sm">Organizacja bez kosztów z góry</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/poradnik/co-zrobic-po-smierci" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Co Zrobić Po Śmierci</h3>
                    <p className="text-gray-400 text-sm">Kompletny przewodnik krok po kroku</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/uslugi-pogrzebowe-lodz" className="block">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2">Usługi Pogrzebowe</h3>
                    <p className="text-gray-400 text-sm">Pełna oferta usług w Łodzi</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
