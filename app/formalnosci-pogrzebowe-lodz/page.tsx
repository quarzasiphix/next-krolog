import { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import { Phone, FileText, Building2, Landmark, CheckCircle, Clock, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import FAQSchema from '@/components/structured-data/FAQSchema'

export const metadata: Metadata = {
  title: { absolute: 'Formalności Pogrzebowe Łódź – Co Załatwić Po Śmierci | Nekrolog' },
  description:
    'Formalności pogrzebowe w Łodzi krok po kroku – akt zgonu w USC, formalności cmentarne, zasiłek ZUS/KRUS. Zakład Pogrzebowy Nekrolog przejmuje wszystkie formalności. Tel: +48 602 274 661.',
  keywords: [
    'formalności pogrzebowe łódź',
    'formalności po śmierci łódź',
    'co załatwić po śmierci',
    'dokumenty potrzebne do pogrzebu',
    'akt zgonu łódź',
    'zasiłek pogrzebowy łódź',
    'organizacja pogrzebu formalności',
  ],
  alternates: {
    canonical: `${SITE_URL}/formalnosci-pogrzebowe-lodz`,
  },
  openGraph: {
    title: 'Formalności Pogrzebowe Łódź – Nekrolog Łódź',
    description: 'Co załatwić po śmierci bliskiej osoby w Łodzi. Kompletny wykaz formalności i dokumentów.',
    url: `${SITE_URL}/formalnosci-pogrzebowe-lodz`,
    type: 'website',
  },
}

const steps = [
  {
    icon: Building2,
    step: '1',
    title: 'Odbiór ciała i transport',
    description:
      'Zakład pogrzebowy odbiera ciało ze szpitala, domu lub z miejsca zgonu. Transport odbywa się całodobowo – możemy działać natychmiast po telefonie.',
  },
  {
    icon: FileText,
    step: '2',
    title: 'Karta zgonu i akt zgonu w USC',
    description:
      'Lekarz wystawia kartę zgonu. Na jej podstawie zakład pogrzebowy lub rodzina rejestruje zgon w Urzędzie Stanu Cywilnego i uzyskuje akt zgonu – dokument potrzebny do wszystkich dalszych formalności.',
  },
  {
    icon: Landmark,
    step: '3',
    title: 'Rezerwacja miejsca na cmentarzu',
    description:
      'Zakład pogrzebowy kontaktuje się z administracją wybranego cmentarza w Łodzi – Doły, Zarzew, Radogoszcz lub innym – i rezerwuje miejsce oraz termin ceremonii.',
  },
  {
    icon: Clock,
    step: '4',
    title: 'Organizacja ceremonii',
    description:
      'Ustalamy termin z kościołem lub kaplicą, oprawę muzyczną, florystyczną i wszelkie szczegóły uroczystości pogrzebowej według woli rodziny.',
  },
  {
    icon: Shield,
    step: '5',
    title: 'Zasiłek pogrzebowy ZUS/KRUS',
    description:
      'Po pogrzebie pomagamy złożyć wniosek o zasiłek pogrzebowy (aktualnie 7 000 zł z ZUS). Gdy organizujemy pogrzeb bez zaliczki, rozliczamy się bezpośrednio z zasiłku – rodzina nie musi wcześniej dysponować gotówką.',
  },
]

const documents = [
  'Karta zgonu (wystawiona przez lekarza)',
  'Dowód osobisty zmarłego',
  'Dokument tożsamości osoby zgłaszającej zgon',
  'Akt urodzenia lub małżeństwa (jeśli wymagany przez USC)',
  'Dokumenty do zasiłku pogrzebowego: akt zgonu, legitymacja ubezpieczeniowa lub numer PESEL',
]

const faqData = [
  {
    question: 'Kto załatwia formalności pogrzebowe – rodzina czy zakład pogrzebowy?',
    answer:
      'Zakład pogrzebowy może przejąć wszystkie lub większość formalności w imieniu rodziny. Rejestracja zgonu w USC zwykle wymaga obecności osoby z rodziny, ale transport, cmentarz, kościół i zasiłek – zakład może zorganizować samodzielnie.',
  },
  {
    question: 'Ile czasu mam na zgłoszenie zgonu w USC?',
    answer:
      'Zgon należy zgłosić w USC w ciągu 3 dni od daty śmierci (lub w pierwszym dniu roboczym). Zakład pogrzebowy zwykle pomaga w tym od razu po kontakcie.',
  },
  {
    question: 'Czy mogę zorganizować pogrzeb bez gotówki?',
    answer:
      'Tak. Jako zakład pogrzebowy w Łodzi organizujemy pogrzeb bez kosztów z góry – pokrywamy koszty i rozliczamy się bezpośrednio z zasiłkiem pogrzebowym ZUS lub KRUS po pogrzebie.',
  },
  {
    question: 'Jakie dokumenty są potrzebne do pogrzebu?',
    answer:
      'Podstawowe dokumenty to: karta zgonu (od lekarza), dowód osobisty zmarłego i dokument tożsamości osoby zgłaszającej. Zakład pogrzebowy prowadzi przez cały proces i informuje, co jest potrzebne w konkretnej sytuacji.',
  },
]

export default function FormalnosciPogrzeboweLodzPage() {
  const breadcrumbs = [
    { name: 'Strona Główna', url: '/' },
    { name: 'Formalności Pogrzebowe Łódź' },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqData} name="Formalności Pogrzebowe Łódź FAQ" />
      <BreadcrumbController
        overrides={[{ segment: 'formalnosci-pogrzebowe-lodz', label: 'Formalności Pogrzebowe' }]}
      />

      <section className="relative min-h-[40vh] bg-gradient-to-b from-black via-black/95 to-black/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 text-white leading-tight">
              Formalności Pogrzebowe Łódź
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
              Co załatwić po śmierci bliskiej osoby – krok po kroku
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Zakład Pogrzebowy Nekrolog Łódź przejmuje wszystkie formalności pogrzebowe – akt zgonu, cmentarz,
              kościół, zasiłek ZUS/KRUS. Rodzina nie musi zajmować się biurokracją w najtrudniejszym momencie.
            </p>

            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-8">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Przejmujemy formalności – bez zaliczki</span>
            </div>

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
            <h2 className="text-3xl font-playfair font-medium text-white mb-10 text-center">
              Formalności pogrzebowe – kolejność kroków
            </h2>
            <div className="space-y-6">
              {steps.map((item) => (
                <Card key={item.step} className="bg-black/30 border border-white/10">
                  <CardContent className="p-6 flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Krok {item.step}</p>
                      <h3 className="text-xl font-playfair font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-black/90 to-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-8 text-center">
              Dokumenty potrzebne do pogrzebu
            </h2>
            <Card className="bg-black/30 border border-white/10">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {documents.map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400 mt-5">
                  Zakład pogrzebowy pomaga skompletować dokumenty i informuje o wszystkim, czego potrzeba w konkretnej sytuacji.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-medium text-white mb-8 text-center">
              Najczęściej zadawane pytania
            </h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <Card key={faq.question} className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/pogrzeb-bez-zaliczki">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-5">
                    <h3 className="text-white font-medium mb-1">Pogrzeb bez zaliczki</h3>
                    <p className="text-gray-400 text-sm">Jak to działa i jak rozliczamy z ZUS/KRUS</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/zus-zasilek-pogrzebowy-lodz">
                <Card className="bg-black/30 border border-white/10 hover:border-primary/30 transition h-full">
                  <CardContent className="p-5">
                    <h3 className="text-white font-medium mb-1">Zasiłek pogrzebowy ZUS</h3>
                    <p className="text-gray-400 text-sm">Wysokość, warunki i jak złożyć wniosek</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
