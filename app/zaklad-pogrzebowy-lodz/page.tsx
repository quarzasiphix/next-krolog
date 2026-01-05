import { Metadata } from 'next'
import { SITE_URL, BUSINESS_INFO } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import { Phone, Clock, MapPin, Check, Heart, Award, Users, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Zakład Pogrzebowy w Łodzi',
  description:
    'Zakład Pogrzebowy Nekrolog Łódź – kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Doświadczenie od ponad 20 lat. Dostępni 24/7. Tel: +48 602 274 661.',
  keywords: [
    'zakład pogrzebowy łódź',
    'zakład pogrzebowy w łodzi',
    'dom pogrzebowy łódź',
    'usługi pogrzebowe łódź',
    'pogrzeby łódź',
    'całodobowy zakład pogrzebowy łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/zaklad-pogrzebowy-lodz`,
  },
  openGraph: {
    title: 'Zakład Pogrzebowy w Łodzi - Nekrolog Łódź',
    description:
      'Profesjonalny zakład pogrzebowy w Łodzi. Kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Dostępni całodobowo.',
    url: `${SITE_URL}/zaklad-pogrzebowy-lodz`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ZakladPogrzebowyPage() {
  const services = [
    {
      title: 'Organizacja Pogrzebów',
      href: '/uslugi/organizacja-pogrzebow-lodz',
      description: 'Kompleksowa organizacja ceremonii pogrzebowej z załatwieniem wszystkich formalności',
    },
    {
      title: 'Kremacja',
      href: '/uslugi/krematorium-lodz',
      description: 'Profesjonalna organizacja kremacji wraz z wyborem urny i ceremonią',
    },
    {
      title: 'Transport Zmarłych',
      href: '/uslugi/transport-zmarlych-lodz',
      description: 'Transport krajowy i międzynarodowy z zachowaniem wszelkich standardów',
    },
    {
      title: 'Oprawa Muzyczna',
      href: '/uslugi/oprawa-muzyczna-lodz',
      description: 'Profesjonalna oprawa muzyczna ceremonii pogrzebowych',
    },
    {
      title: 'Ekshumacja',
      href: '/uslugi/ekshumacja-lodz',
      description: 'Przeprowadzenie ekshumacji zgodnie ze wszystkimi procedurami',
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Ponad 20 lat doświadczenia',
      description: 'Wieloletnie doświadczenie w organizacji ceremonii pogrzebowych w Łodzi',
    },
    {
      icon: Heart,
      title: 'Profesjonalne wsparcie',
      description: 'Empatyczne podejście i pomoc rodzinie w najtrudniejszych chwilach',
    },
    {
      icon: Clock,
      title: 'Dostępność 24/7',
      description: 'Całodobowa linia alarmowa i natychmiastowa pomoc w każdej sytuacji',
    },
    {
      icon: Users,
      title: 'Indywidualne podejście',
      description: 'Ceremonie dostosowane do potrzeb i tradycji rodziny',
    },
    {
      icon: Shield,
      title: 'Przejrzyste warunki',
      description: 'Jasne zasady współpracy i transparentne koszty usług',
    },
    {
      icon: MapPin,
      title: 'Lokalizacja w centrum',
      description: 'Dogodna lokalizacja w centrum Łodzi przy ul. Legionów 48',
    },
  ]

  return (
    <>
      <BreadcrumbController
        overrides={[{ segment: 'zaklad-pogrzebowy-lodz', label: 'Zakład Pogrzebowy' }]}
      />

      <section className="relative min-h-[40vh] bg-gradient-to-b from-black via-black/95 to-black/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 text-white leading-tight">
              Zakład Pogrzebowy w Łodzi
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
              Zakład Pogrzebowy Nekrolog Łódź oferuje kompleksowe usługi pogrzebowe dla rodzin w Łodzi i okolicach.
              Zapewniamy profesjonalną organizację ceremonii, wsparcie w formalności oraz pełną opiekę w trudnych chwilach.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Prowadzony przez Jolantę Kostowską • Doświadczenie od ponad 20 lat
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+48602274661"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary/90 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                <span>+48 602 274 661</span>
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-black/50 px-8 py-4 text-lg font-medium text-white transition hover:bg-black/70 w-full sm:w-auto"
              >
                Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Czym zajmuje się zakład pogrzebowy?
            </h2>

            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="text-gray-300 leading-relaxed">
                Zakład pogrzebowy to profesjonalna firma specjalizująca się w organizacji ceremonii pogrzebowych
                oraz świadczeniu kompleksowych usług związanych z pochówkiem. Nasz zakład pogrzebowy w Łodzi
                przejmuje wszystkie obowiązki i formalności, aby rodzina mogła skupić się na przeżywaniu żałoby
                i godnym pożegnaniu bliskiej osoby.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Zapewniamy pełne wsparcie od pierwszego kontaktu, przez organizację ceremonii, aż po finalizację
                wszystkich dokumentów. Współpracujemy z kościołami, cmentarzami, krematorium oraz innymi instytucjami,
                aby zapewnić sprawny przebieg całego procesu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-medium text-white mb-4">
                    Formalności i dokumenty
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Uzyskanie aktu zgonu w USC</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Załatwienie formalności w administracji cmentarnej</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Pomoc w uzyskaniu zasiłku pogrzebowego ZUS/KRUS</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Rezerwacja terminów w kościele i na cmentarzu</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-medium text-white mb-4">
                    Organizacja ceremonii
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Przygotowanie i przechowanie ciała zmarłego</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Wybór trumny, urny i akcesoriów pogrzebowych</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Oprawa muzyczna i dekoracje kwiatowe</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Koordynacja ceremonii w dniu pogrzebu</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black/90 to-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-12 text-center">
              Nasze usługi pogrzebowe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service) => (
                <Link key={service.href} href={service.href}>
                  <Card className="bg-black/30 border border-white/10 h-full transition-all hover:border-primary/30 hover:bg-black/40">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-playfair font-medium text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/uslugi-pogrzebowe-lodz"
                className="inline-flex items-center justify-center rounded-md bg-primary/10 border border-primary/30 px-6 py-3 font-medium text-primary transition hover:bg-primary/20"
              >
                Zobacz pełną ofertę usług
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-12 text-center">
              Dlaczego warto wybrać nasz zakład pogrzebowy?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black/90 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/30 border border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-playfair font-medium text-white mb-4">
                    Całodobowa pomoc i wsparcie
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Zakład Pogrzebowy Nekrolog Łódź jest dostępny 24 godziny na dobę, 7 dni w tygodniu.
                    Jesteśmy gotowi natychmiast pomóc w każdej sytuacji.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center text-center">
                    <Phone className="w-8 h-8 text-primary mb-3" />
                    <p className="text-sm text-gray-400 mb-1">Telefon całodobowy</p>
                    <a
                      href="tel:+48602274661"
                      className="text-xl font-medium text-white hover:text-primary transition"
                    >
                      +48 602 274 661
                    </a>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <Clock className="w-8 h-8 text-primary mb-3" />
                    <p className="text-sm text-gray-400 mb-1">Godziny otwarcia biura</p>
                    <p className="text-white">Pn-Pt: 8:00-16:00</p>
                    <p className="text-white">Sob: 9:00-13:00</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <MapPin className="w-8 h-8 text-primary mb-3" />
                    <p className="text-sm text-gray-400 mb-1">Adres</p>
                    <address className="not-italic text-white">
                      Legionów 48
                      <br />
                      90-702 Łódź
                    </address>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary/90"
                  >
                    Formularz kontaktowy
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
