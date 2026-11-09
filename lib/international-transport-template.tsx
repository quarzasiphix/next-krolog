import Link from 'next/link'
import { Phone, CheckCircle, Truck, FileText, Star, Wallet } from 'lucide-react'
import ServiceLayout from '@/components/ServiceLayout'
import { Card, CardContent } from '@/components/ui/card'
import { transportOrigin, type InternationalTransportPageConfig } from '@/lib/international-transport-pages'
import { transportGuides } from '@/lib/international-transport-guides'

export function InternationalTransportTemplate({ config }: { config: InternationalTransportPageConfig }) {
  const origin = transportOrigin(config)
  const guide = transportGuides[config.slug]

  return (
    <ServiceLayout
      title={`Transport i sprowadzenie zwłok ${origin}`}
      description={config.shortDescription}
      faqItems={guide ? [...guide.faq, ...config.faqItems] : config.faqItems}
    >
      <div className="space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">
              Transport {origin} do Polski
            </h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-4">
              {config.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="space-y-3">
              {config.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-black/30 border border-primary/20">
            <CardContent className="p-6 space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Przykładowe miasta</p>
                <h3 className="mt-2 text-2xl font-playfair text-white">{config.regionLabel}</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {config.countries.map((country) => (
                  <div key={country} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
                    {country}
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-300">
                  Działamy dla rodzin i{' '}
                  <Link href="/dla-zakladow-pogrzebowych" className="text-primary underline">zakładów pogrzebowych</Link>.
                  Każde zlecenie wyceniamy i planujemy indywidualnie.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {guide && (
          <section className="rounded-xl border border-white/10 bg-black/30 p-8 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">
              Jakie dokumenty są potrzebne przy transporcie {origin}
            </h2>
            <ul className="space-y-3">
              {guide.documents.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <FileText className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 leading-relaxed"><strong className="text-white">Urna z prochami.</strong> {guide.ashes}</p>
            <p className="text-gray-300 leading-relaxed"><strong className="text-white">Konsulat.</strong> {guide.consulate}</p>
            <p className="text-gray-300 leading-relaxed"><strong className="text-white">Opłata konsularna:</strong> {guide.fee}.</p>
            <p className="text-gray-300 leading-relaxed">{guide.note}</p>
            <p className="text-sm text-gray-500">
              Źródło:{' '}
              <a href={guide.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{guide.sourceLabel}</a>
              , stan na {guide.checked}. Wymogi mogą się zmienić – przed złożeniem dokumentów potwierdzamy je z właściwą placówką.
            </p>
          </section>
        )}

        <section className="rounded-xl border border-white/10 bg-black/30 p-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">Procedura po stronie polskiej</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-300">
            <li>Starosta lub prezydent miasta właściwy dla miejsca pochówku wydaje zezwolenie. Wniosek może złożyć rodzina albo upoważniony zakład pogrzebowy.</li>
            <li>Na tej podstawie konsul RP właściwy dla miejsca zgonu wydaje zaświadczenie na sprowadzenie zwłok lub prochów.</li>
            <li>Zmarły jedzie do Polski z kompletem dokumentów, a my przejmujemy dalszą organizację pogrzebu lub przekazujemy go wskazanemu zakładowi.</li>
          </ol>
          <p className="text-gray-300 leading-relaxed">
            Konsulat nie finansuje transportu. Koszty pokrywa ubezpieczyciel, a przy braku polisy rodzina – dlatego warto od razu sprawdzić
            ubezpieczenie zmarłego.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3">
              <Truck className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-playfair text-white">Własny transport</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Dysponujemy specjalistycznym busem do transportu zmarłych i dobieramy najsprawniejszą trasę oraz sposób odbioru.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3">
              <FileText className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-playfair text-white">Formalności</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Pomagamy w dokumentach, tłumaczeniach i uzgodnieniach po stronie polskiej oraz w kontakcie z partnerami zagranicznymi.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-black/30 border border-white/10">
            <CardContent className="p-6 space-y-3">
              <Star className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-playfair text-white">Renoma 5 gwiazdek</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Nekrolog Łódź ma bardzo dobrą renomę i ocenę 5 gwiazdek, dlatego rodziny i partnerzy powierzają nam pilne transporty z zagranicy.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="rounded-xl border border-primary/20 bg-white/5 p-8">
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
              <Wallet className="h-7 w-7 text-primary" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-playfair text-white">Bez zaliczki, gdy liczy się szybkie działanie</h2>
              <p className="text-gray-300 leading-relaxed">
                W nagłych sytuacjach pomagamy rodzinie rozpocząć organizację transportu i dalszych usług bez kosztów z góry. Wyjaśniamy możliwe rozliczenie przez zasiłek pogrzebowy i od początku jasno pokazujemy kolejne kroki.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Jako ponad 30-letnia firma rodzinna stawiamy na pomoc rodzinie zmarłego oraz konkurencyjne, uczciwe ceny. Dzięki temu można spokojnie podjąć decyzję bez presji i bez sztucznego zawyżania kosztów.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
          <Phone className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 text-3xl font-playfair text-white">Potrzebny transport {origin} do Polski?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-300">
            Skontaktuj się z nami od razu po zgłoszeniu zgonu. Ustalimy kraj, dokumenty, możliwy termin i sposób działania.
          </p>
          <a
            href="tel:+48602274661"
            data-phone-location="transport_country_bottom"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-medium text-black transition hover:bg-primary/90"
          >
            +48 602 274 661
          </a>
          <div className="mt-6">
            <Link
              href="/uslugi/sprowadzenie-zwlok-z-zagranicy"
              className="text-primary hover:text-primary/80 underline underline-offset-4"
            >
              Zobacz główną stronę transportu z zagranicy
            </Link>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}
