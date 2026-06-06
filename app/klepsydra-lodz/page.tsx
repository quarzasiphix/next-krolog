import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Clock, MapPin, Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'
import FAQSchema from '@/components/structured-data/FAQSchema'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import { BreadcrumbController } from '@/components/breadcrumb-context'

export const metadata: Metadata = {
  title: { absolute: 'Klepsydra Łódź – Nekrologi i Ogłoszenia Pogrzebowe | Nekrolog Łódź' },
  description:
    'Klepsydra pogrzebowa w Łodzi – darmowy generator klepsydry online od Nekrolog Łódź – Jolanta Kostowska. Wygeneruj klepsydrę A4 bez rejestracji lub zadzwoń po pomoc całodobową. Tel: +48 602 274 661.',
  keywords: [
    'klepsydra łódź',
    'klepsydra pogrzebowa łódź',
    'program do klepsydry łódź',
    'generator klepsydry łódź',
    'darmowa klepsydra łódź',
    'klepsydry łódź nekrologi',
    'nekrolog łódź',
    'nekrologi łódź',
    'ogłoszenie pogrzebowe łódź',
    'zawiadomienie o pogrzebie łódź',
    'elektroniczna klepsydra łódź',
    'e-nekrologi łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/klepsydra-lodz`,
  },
  openGraph: {
    title: 'Klepsydra Łódź – Nekrologi i Ogłoszenia Pogrzebowe',
    description:
      'Pomoc w przygotowaniu klepsydry i nekrologu w Łodzi. Zakład pogrzebowy Nekrolog Łódź – całodobowo.',
    url: `${SITE_URL}/klepsydra-lodz`,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqData = [
  {
    question: 'Co to jest klepsydra pogrzebowa?',
    answer:
      'Klepsydra pogrzebowa (zwana też ogłoszeniem żałobnym lub zawiadomieniem pogrzebowym) to tradycyjny, drukowany lub elektroniczny komunikat informujący o śmierci bliskiej osoby i terminach uroczystości pogrzebowych. W Łodzi klepsydry wywiesza się m.in. w pobliżu miejsca zamieszkania, przy kościołach i na cmentarzach.',
  },
  {
    question: 'Czym różni się klepsydra od nekrologu?',
    answer:
      'Klepsydra to zazwyczaj ogłoszenie wywieszane w przestrzeni publicznej lub rozsyłane do bliskich. Nekrolog to z kolei ogłoszenie prasowe lub internetowe. Obie formy służą poinformowaniu społeczności o śmierci i pogrzebie. Nasza firma – Nekrolog Łódź – pomaga w przygotowaniu obu.',
  },
  {
    question: 'Czy zakład pogrzebowy pomaga w przygotowaniu klepsydry?',
    answer:
      'Tak. Jako część kompleksowej organizacji pogrzebu pomagamy w przygotowaniu treści klepsydry i zawiadomień, kontaktach z rodziną i instytucjami oraz ogłoszeniu informacji o uroczystości.',
  },
  {
    question: 'Jak szybko można przygotować klepsydrę?',
    answer:
      'Klepsydra jest zazwyczaj przygotowywana w ciągu kilku godzin od ustalenia terminu pogrzebu. Nasz zakład pogrzebowy jest dostępny całodobowo pod numerem +48 602 274 661.',
  },
  {
    question: 'Czy nekrolog w Łodzi można zamieścić online?',
    answer:
      'Tak. Poza tradycyjnymi klepsydrami pomagamy też w zamieszczeniu informacji o pogrzebie w formie elektronicznej. Skontaktuj się z nami, by omówić szczegóły.',
  },
  {
    question: 'Czy istnieje darmowy program do tworzenia klepsydry online?',
    answer:
      'Tak. Zakład pogrzebowy Nekrolog Łódź – Jolanta Kostowska udostępnia bezpłatny generator klepsydry online pod adresem klepsydra.nekrolog-lodz.com. Program działa w przeglądarce — bez instalacji, bez rejestracji, bezpłatnie. Wystarczy wpisać imię i nazwisko osoby zmarłej, datę i miejsce pogrzebu, a generator przygotuje klepsydrę gotową do wydruku w formacie A4. Zakłady pogrzebowe mogą aktywować konto z własnym logo i danymi kontaktowymi za 20 zł miesięcznie.',
  },
]

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Klepsydra Łódź' },
]

export default function KlepsydraLodzPage() {
  return (
    <>
      <FAQSchema faqs={faqData} name="Klepsydra Łódź FAQ" />
      <BreadcrumbSchema items={breadcrumbs} />
      <BreadcrumbController
        overrides={[{ segment: 'klepsydra-lodz', label: 'Klepsydra Łódź' }]}
      />

      <section className="relative min-h-[40vh] bg-gradient-to-b from-black via-black/95 to-black/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 text-white leading-tight">
              Klepsydra Łódź
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
              Nekrologi i ogłoszenia pogrzebowe w Łodzi – pomoc całodobowa
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Zakład Pogrzebowy Nekrolog Łódź pomaga rodzinom w przygotowaniu klepsyder, nekrologów
              i zawiadomień o uroczystościach pogrzebowych. Działamy całą dobę, 7 dni w tygodniu.
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
                Formularz kontaktowy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Co to jest klepsydra pogrzebowa?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Klepsydra pogrzebowa</strong> to tradycyjne polskie ogłoszenie żałobne,
                które informuje znajomych, sąsiadów i lokalną społeczność o śmierci bliskiej osoby oraz o terminie
                i miejscu uroczystości pogrzebowej. W Łodzi klepsydry tradycyjnie wywiesza się na klatkach schodowych,
                przy kościołach, w pobliżu cmentarzy i w miejscu pracy zmarłego.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Klepsydra jest czymś innym niż <strong className="text-white">nekrolog</strong> – nekrolog to zazwyczaj
                ogłoszenie zamieszczane w prasie lub internecie, natomiast klepsydra ma formę drukowanego zawiadomienia.
                Oba rodzaje ogłoszeń spełniają tę samą rolę: przekazanie informacji o śmierci i pogrzebie.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nasza firma – <strong className="text-white">Nekrolog Łódź</strong> – jako część kompleksowej organizacji
                pogrzebu, pomaga rodzinom w przygotowaniu treści klepsydry, poinformowaniu bliskich oraz skoordynowaniu
                wszelkich zawiadomień związanych z uroczystością.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-medium text-white mb-4">
                    Klepsydra tradycyjna
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Drukowane ogłoszenie żałobne',
                      'Wywieszane w przestrzeni publicznej',
                      'Przy kościele, cmentarzu, bloku',
                      'Standardowe elementy: imię, data śmierci, termin pogrzebu',
                      'Przygotowanie w ciągu kilku godzin',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-medium text-white mb-4">
                    Nekrolog / e-nekrolog
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Ogłoszenie prasowe lub internetowe',
                      'Szerszy zasięg – rodzina z całej Polski',
                      'E-nekrolog dostępny online',
                      'Możliwość dodania zdjęcia i wspomnienia',
                      'Pomoc w redakcji treści',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black/90 to-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Kompleksowa organizacja pogrzebu w Łodzi
            </h2>
            <p className="text-gray-300 text-lg text-center mb-10 leading-relaxed">
              Klepsydra to jeden z elementów organizacji pogrzebu. Zakład Pogrzebowy Nekrolog Łódź
              przejmuje wszystkie formalności i zadania, by rodzina mogła skupić się na przeżywaniu żałoby.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Organizacja ceremonii', href: '/uslugi/organizacja-pogrzebow-lodz' },
                { label: 'Kremacja', href: '/uslugi/krematorium-lodz' },
                { label: 'Transport zmarłych', href: '/uslugi/transport-zmarlych-lodz' },
                { label: 'Trumny i urny', href: '/asortyment/trumny-lodz' },
                { label: 'Wiązanki i wieńce', href: '/asortyment/wiazanki-lodz' },
                { label: 'Oprawa muzyczna', href: '/uslugi/oprawa-muzyczna-lodz' },
              ].map((s) => (
                <Link key={s.href} href={s.href}>
                  <Card className="bg-black/30 border border-white/10 h-full transition-all hover:border-primary/30">
                    <CardContent className="p-5 flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-200 text-sm">{s.label}</span>
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
                Pełna oferta usług pogrzebowych
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Generator promo */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-primary/25 bg-black/40">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-xl">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                      Program do klepsydry online
                    </p>
                    <h2 className="mb-3 text-2xl font-playfair font-medium text-white md:text-3xl">
                      Zrób klepsydrę samodzielnie — bezpłatnie
                    </h2>
                    <p className="leading-relaxed text-gray-300">
                      Zakład pogrzebowy <strong className="text-white">Jolanta Kostowska Nekrolog Łódź</strong> udostępnia
                      darmowy generator klepsydry online. Działa w przeglądarce — bez instalacji, bez
                      rejestracji. Wpisz dane pogrzebu, sprawdź układ A4 i wydrukuj.
                    </p>
                    <p className="mt-3 text-sm text-gray-400">
                      Adres: <span className="text-primary">klepsydra.nekrolog-lodz.com</span>
                      {' · '}Zakłady pogrzebowe: własne logo i dane za 20 zł/miesiąc.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 md:flex-shrink-0">
                    <a
                      href="https://klepsydra.nekrolog-lodz.com/generator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-black transition hover:bg-primary/90"
                    >
                      Otwórz generator klepsydry
                    </a>
                    <a
                      href="https://klepsydra.nekrolog-lodz.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/10"
                    >
                      klepsydra.nekrolog-lodz.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-10 text-center">
              Najczęściej zadawane pytania – Klepsydra Łódź
            </h2>
            <div className="space-y-6">
              {faqData.map((faq) => (
                <Card key={faq.question} className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
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
                    Całodobowa pomoc – Nekrolog Łódź
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Zadzwoń do nas w dowolnym momencie. Pomagamy z klepsydrą, nekrologiem i pełną
                    organizacją pogrzebu w Łodzi – bez zaliczki, 24/7.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center text-center">
                    <Phone className="w-8 h-8 text-primary mb-3" />
                    <p className="text-sm text-gray-400 mb-1">Telefon całodobowy</p>
                    <a href="tel:+48602274661" className="text-xl font-medium text-white hover:text-primary transition">
                      +48 602 274 661
                    </a>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Clock className="w-8 h-8 text-primary mb-3" />
                    <p className="text-sm text-gray-400 mb-1">Godziny biura</p>
                    <p className="text-white">Pn–Pt: 8:00–16:00</p>
                    <p className="text-white">Sob: 9:00–13:00</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <MapPin className="w-8 h-8 text-primary mb-3" />
                    <p className="text-sm text-gray-400 mb-1">Adres</p>
                    <address className="not-italic text-white">
                      Legionów 48<br />90-702 Łódź
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
