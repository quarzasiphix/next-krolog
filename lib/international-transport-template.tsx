import Link from 'next/link'
import { Phone, CheckCircle, Truck, FileText, Star, Wallet } from 'lucide-react'
import ServiceLayout from '@/components/ServiceLayout'
import { Card, CardContent } from '@/components/ui/card'
import type { InternationalTransportPageConfig } from '@/lib/international-transport-pages'

export function InternationalTransportTemplate({ config }: { config: InternationalTransportPageConfig }) {
  return (
    <ServiceLayout
      title={config.title}
      description={config.shortDescription}
      faqItems={config.faqItems}
    >
      <div className="space-y-12">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-playfair font-medium text-white">
              Transport z {config.regionLabel} do Polski
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
                <p className="text-sm uppercase tracking-[0.22em] text-primary/80">Najczęstsze miasta i kierunki</p>
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
                  Działamy dla rodzin indywidualnych i partnerów branżowych. Każde zlecenie wyceniamy i planujemy indywidualnie.
                </p>
              </div>
            </CardContent>
          </Card>
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
          <h2 className="mt-4 text-3xl font-playfair text-white">Potrzebny transport z {config.regionLabel} do Polski?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-300">
            Skontaktuj się z nami od razu po zgłoszeniu zgonu. Ustalimy kraj, dokumenty, możliwy termin i sposób działania.
          </p>
          <a
            href="tel:+48602274661"
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
