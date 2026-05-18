import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Info, CheckCircle2, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_URL } from '@/lib/constants'
import FAQSchema from '@/components/structured-data/FAQSchema'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import { BreadcrumbController } from '@/components/breadcrumb-context'

export const metadata: Metadata = {
  title: 'Zakłady Pogrzebowe Łódź – Informator Lokalny | Lista Firm Pogrzebowych',
  description:
    'Lista zakładów pogrzebowych w Łodzi. Informator lokalny – firmy pogrzebowe i domy pogrzebowe działające w Łodzi i okolicach. Dane informacyjne; weryfikuj szczegóły bezpośrednio z firmą.',
  keywords: [
    'zakłady pogrzebowe łódź',
    'zakłady pogrzebowe w łodzi',
    'firmy pogrzebowe łódź',
    'domy pogrzebowe łódź',
    'lista zakładów pogrzebowych łódź',
    'katalog firm pogrzebowych łódź',
    'zakład pogrzebowy łódź',
    'firma pogrzebowa łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/zaklady-pogrzebowe-lodz`,
  },
  openGraph: {
    title: 'Zakłady Pogrzebowe Łódź – Informator Lokalny',
    description:
      'Lista firm pogrzebowych i domów pogrzebowych działających w Łodzi. Informator do celów orientacyjnych.',
    url: `${SITE_URL}/zaklady-pogrzebowe-lodz`,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const faqData = [
  {
    question: 'Ile zakładów pogrzebowych działa w Łodzi?',
    answer:
      'W Łodzi działa kilkadziesiąt firm pogrzebowych – zakładów pogrzebowych, domów pogrzebowych i firm oferujących usługi funeralne. Obejmują one zarówno małe firmy rodzinne, jak i większe podmioty. Dokładna liczba zmienia się wraz z rynkiem, dlatego zawsze warto zweryfikować aktualne dane bezpośrednio.',
  },
  {
    question: 'Czym różni się zakład pogrzebowy od domu pogrzebowego?',
    answer:
      'Zakład pogrzebowy to firma organizująca ceremonię pogrzebową – zajmuje się formalnościami, transportem, wyposażeniem i koordynacją. Dom pogrzebowy to zazwyczaj obiekt posiadający kaplicę lub salę ceremonialną, w której odbywa się pożegnanie. Wiele firm łączy obie funkcje.',
  },
  {
    question: 'Na co zwrócić uwagę wybierając zakład pogrzebowy?',
    answer:
      'Kluczowe kryteria to: dostępność całodobowa (24/7), przejrzysty cennik, doświadczenie i opinie, zakres oferowanych usług (formalności, transport, kremacja, oprawa), a także możliwość rozliczenia z zasiłkiem pogrzebowym ZUS lub KRUS bez konieczności angażowania własnych środków z góry.',
  },
  {
    question: 'Czy zakład pogrzebowy może załatwić formalności w USC?',
    answer:
      'Tak. Profesjonalny zakład pogrzebowy może działać w imieniu rodziny przy uzyskaniu aktu zgonu w Urzędzie Stanu Cywilnego, zgłoszeniu zgonu do odpowiednich instytucji oraz skompletowaniu dokumentów do zasiłku pogrzebowego.',
  },
  {
    question: 'Czy zakłady pogrzebowe w Łodzi działają całą dobę?',
    answer:
      'Wiele zakładów pogrzebowych w Łodzi deklaruje całodobową dostępność telefoniczną. Przed skontaktowaniem się zawsze warto potwierdzić, czy firma zapewnia natychmiastowe przyjęcie zgłoszenia i transport, czy tylko odbiera telefony poza godzinami pracy.',
  },
  {
    question: 'Jak sprawdzić opinie o zakładzie pogrzebowym w Łodzi?',
    answer:
      'Opinie można weryfikować za pośrednictwem Google Maps (profil Google Business), portali z recenzjami oraz – co często bywa najbardziej miarodajne – rekomendacjami od osób z bliskiego otoczenia, które korzystały z danej firmy.',
  },
]

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Zakłady Pogrzebowe Łódź' },
]

// Directory entries — compiled from publicly available sources.
// Data is informational only; verify current details directly with each firm.
type ServiceTag = 'Pogrzeby tradycyjne' | 'Kremacja' | 'Transport' | '24h' | 'Florystyka' | 'Oprawa muzyczna' | 'Formalności'

interface DirectoryEntry {
  name: string
  area: string
  services: ServiceTag[]
  note?: string
}

const entries: DirectoryEntry[] = [
  {
    name: 'Zakład Pogrzebowy Archanioł',
    area: 'Łódź',
    services: ['Pogrzeby tradycyjne', 'Kremacja', 'Transport', 'Formalności'],
  },
  {
    name: 'Zakład Pogrzebowy Arka',
    area: 'Łódź',
    services: ['Pogrzeby tradycyjne', 'Kremacja', 'Transport'],
  },
  {
    name: 'Zakład Pogrzebowy Charon',
    area: 'Łódź',
    services: ['Pogrzeby tradycyjne', 'Transport', 'Formalności'],
  },
  {
    name: 'Dom Pogrzebowy Hades',
    area: 'Łódź',
    services: ['Pogrzeby tradycyjne', 'Kremacja', 'Transport', '24h', 'Formalności'],
  },
  {
    name: 'Zakład Pogrzebowy Kalia',
    area: 'Łódź',
    services: ['Pogrzeby tradycyjne', 'Kremacja', 'Florystyka', 'Formalności'],
  },
  {
    name: 'Klepsydra – Zakład Pogrzebowy',
    area: 'Łódź',
    services: ['Pogrzeby tradycyjne', 'Kremacja', 'Transport', 'Formalności'],
  },
  {
    name: 'Kowalska Halina – Zakład Usług Pogrzebowych',
    area: 'Łódź',
    services: ['Pogrzeby tradycyjne', 'Formalności'],
  },
  {
    name: 'Zakład Pogrzebowy Maślakiewicz',
    area: 'Łódź',
    services: ['Pogrzeby tradycyjne', 'Kremacja', 'Transport'],
  },
  {
    name: 'Nekrolog Łódź – Usługi Pogrzebowe Jolanta Kostowska',
    area: 'Łódź – Śródmieście (ul. Legionów 48)',
    services: ['Pogrzeby tradycyjne', 'Kremacja', 'Transport', '24h', 'Florystyka', 'Oprawa muzyczna', 'Formalności'],
    note: 'Operator tego informatora',
  },
  {
    name: 'Zakład Pogrzebowy Orkus',
    area: 'Łódź',
    services: ['Pogrzeby tradycyjne', 'Transport', 'Formalności'],
  },
  {
    name: 'Zakład Pogrzebowy Styks',
    area: 'Łódź',
    services: ['Pogrzeby tradycyjne', 'Kremacja', 'Formalności'],
  },
]

const serviceColors: Record<ServiceTag, string> = {
  'Pogrzeby tradycyjne': 'bg-stone-800 text-stone-200',
  'Kremacja': 'bg-amber-950 text-amber-200',
  'Transport': 'bg-zinc-800 text-zinc-200',
  '24h': 'bg-emerald-950 text-emerald-300',
  'Florystyka': 'bg-rose-950 text-rose-200',
  'Oprawa muzyczna': 'bg-indigo-950 text-indigo-200',
  'Formalności': 'bg-slate-800 text-slate-200',
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Zakłady Pogrzebowe w Łodzi',
  description: 'Informacyjna lista firm pogrzebowych działających w Łodzi i okolicach.',
  numberOfItems: entries.length,
  itemListElement: entries.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: e.name,
    item: {
      '@type': 'LocalBusiness',
      name: e.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Łódź',
        addressCountry: 'PL',
      },
    },
  })),
}

export default function ZakladyPogrzeboweLodzPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <FAQSchema faqs={faqData} name="Zakłady Pogrzebowe Łódź – FAQ" />
      <BreadcrumbSchema items={breadcrumbs} />
      <BreadcrumbController
        overrides={[{ segment: 'zaklady-pogrzebowe-lodz', label: 'Zakłady Pogrzebowe Łódź' }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-black via-black/95 to-black/90 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white leading-tight">
              Zakłady Pogrzebowe w Łodzi
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Informator lokalny – firmy pogrzebowe i domy pogrzebowe działające w Łodzi
            </p>
            <p className="text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Poniższa lista ma charakter wyłącznie informacyjny i została opracowana na podstawie
              publicznie dostępnych danych. Nie stanowi rankingu ani rekomendacji. Przed skontaktowaniem
              się z dowolną firmą zalecamy weryfikację aktualnych danych kontaktowych i zakresu usług
              bezpośrednio z firmą lub za pośrednictwem Google Maps.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer banner */}
      <section className="bg-amber-950/40 border-y border-amber-800/30 py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-3 text-sm text-amber-200">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <p>
              Dane w tym informatorze mają charakter orientacyjny i mogą nie odzwierciedlać
              aktualnej sytuacji każdej firmy. Zakres usług, godziny działania i dane kontaktowe
              należy zawsze weryfikować bezpośrednio. Informator nie stosuje żadnych kryteriów oceny
              ani rankingowania firm.
            </p>
          </div>
        </div>
      </section>

      {/* Directory listing */}
      <section className="py-16 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <h2 className="text-2xl font-playfair font-medium text-white">
                Lista zakładów pogrzebowych – Łódź
              </h2>
            </div>
            <p className="text-gray-400 text-sm mb-8">
              Posortowane alfabetycznie. Tagi usług są orientacyjne i oparte na publicznie dostępnych
              informacjach. Weryfikuj zakres usług bezpośrednio z firmą.
            </p>

            <div className="space-y-4">
              {entries.map((entry) => (
                <Card key={entry.name} className="bg-black/40 border border-white/10">
                  <CardContent className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2">
                          <h3 className="text-base font-medium text-white leading-snug">
                            {entry.name}
                          </h3>
                          {entry.note && (
                            <span className="flex-shrink-0 text-xs text-primary border border-primary/30 rounded px-1.5 py-0.5 mt-0.5">
                              {entry.note}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          {entry.area}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:max-w-xs sm:justify-end">
                        {entry.services.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-0.5 rounded-full ${serviceColors[tag]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-6 flex items-start gap-2">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              Lista nie jest kompletna i nie obejmuje wszystkich firm pogrzebowych działających w Łodzi.
              Jeśli prowadzisz zakład pogrzebowy i chcesz uzupełnić lub skorygować dane,
              skontaktuj się z nami pod adresem kontakt@nekrolog-lodz.com.
            </p>
          </div>
        </div>
      </section>

      {/* What to look for */}
      <section className="py-16 bg-gradient-to-b from-black/90 to-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-10 text-center">
              Na co zwrócić uwagę przy wyborze zakładu pogrzebowego?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Dostępność całodobowa',
                  body:
                    'Śmierć nie ma godzin biurowych. Sprawdź, czy firma faktycznie odbiera telefon i organizuje transport przez całą dobę, nie tylko deklaruje dostępność 24/7.',
                },
                {
                  title: 'Przejrzysty cennik',
                  body:
                    'Rzetelny zakład pogrzebowy powinien przedstawić jasny kosztorys na początku rozmowy. Unikaj firm, które unikają podania orientacyjnych cen lub doliczają ukryte opłaty.',
                },
                {
                  title: 'Pomoc w formalnościach',
                  body:
                    'Organizacja pogrzebu wiąże się z załatwieniem wielu dokumentów: akt zgonu w USC, dokumenty do cmentarza, wniosek o zasiłek pogrzebowy ZUS/KRUS. Dobry zakład bierze to na siebie.',
                },
                {
                  title: 'Model płatności',
                  body:
                    'Niektóre zakłady pogrzebowe oferują organizację ceremonii bez konieczności angażowania własnych środków z góry – rozliczenie odbywa się z zasiłku pogrzebowego. Warto zapytać o tę możliwość.',
                },
                {
                  title: 'Opinie i doświadczenie',
                  body:
                    'Opinie w Google Maps i rekomendacje bliskich są często najbardziej miarodajnym źródłem informacji. Zwróć uwagę na liczbę opinii, ich szczegółowość i to, jak firma odpowiada na negatywne komentarze.',
                },
                {
                  title: 'Zakres usług',
                  body:
                    'Firmy różnią się zakresem: jedne oferują tylko podstawowe usługi, inne kompleksową organizację ceremonii z florystyką, oprawą muzyczną, klepsydrami i obsługą prawną. Ustal z góry, czego potrzebujesz.',
                },
              ].map((item) => (
                <Card key={item.title} className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-medium text-white mb-10 text-center">
              Najczęstsze pytania o zakłady pogrzebowe w Łodzi
            </h2>
            <div className="space-y-5">
              {faqData.map((faq) => (
                <Card key={faq.question} className="bg-black/30 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related links — internal only, neutral */}
      <section className="py-12 bg-gradient-to-b from-black/90 to-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-playfair font-medium text-white mb-6">
              Przydatne informacje o pogrzebach w Łodzi
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Cmentarze w Łodzi', href: '/cmentarze-lodz' },
                { label: 'Cmentarz Doły', href: '/cmentarze-lodz/doly' },
                { label: 'Cmentarz Zarzew', href: '/cmentarze-lodz/zarzew' },
                { label: 'Cmentarz Radogoszcz', href: '/cmentarze-lodz/radogoszcz' },
                { label: 'Zasiłek pogrzebowy ZUS', href: '/poradnik/zasilek-pogrzebowy-zus' },
                { label: 'Co zrobić po śmierci bliskiej osoby', href: '/poradnik/co-zrobic-po-smierci' },
                { label: 'Jak wybrać zakład pogrzebowy', href: '/poradnik/jak-wybrac-zaklad-do-organizacji-pogrzebu' },
                { label: 'Jak wygląda kremacja', href: '/poradnik/jak-wyglada-kremacja-zwlok' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 underline underline-offset-4 hover:text-primary transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
