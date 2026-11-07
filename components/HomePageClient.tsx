import Hero from '@/components/Hero'
import NoUpfrontCosts from '@/components/NoUpfrontCosts'
import Services from '@/components/Services'
import Reviews from '@/components/Reviews'
import ServicesCta from '@/components/ServicesCta'
import ServicesTable from '@/components/ServicesTable'
import FAQ from '@/components/FAQ'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Link from 'next/link'
import RelatedLinks from '@/components/RelatedLinks'

const internationalHighlights = [
  {
    title: 'Międzynarodowy transport zwłok',
    description: 'Organizujemy odbiór z placówki, formalności, przewóz i przekazanie w Polsce jako dodatkową usługę dla rodzin potrzebujących sprawnej pomocy.',
    href: '/pl/uslugi/miedzynarodowy-transport-zwlok',
    cta: 'Przejdź do usługi',
  },
  {
    title: 'Sprowadzanie zmarłych do Polski',
    description: 'Pomagamy rodzinom w Europie i poza nia, gdy trzeba szybko i spokojnie sprowadzić cialo do Polski.',
    href: '/pl/uslugi/sprowadzenie-zmarlego-do-polski',
    cta: 'Zobacz trasy i kraje',
  },
  {
    title: 'Kontakt międzynarodowy 24/7',
    description: 'Jeśli sprawa jest pilna, rodzina nie musi szukać tej usługi. Numer i szybki kontakt są widoczne od razu.',
    href: 'tel:+48602270050',
    cta: '+48 602 270 050',
  },
]

const topRoutes = [
  { label: 'Niemcy -> Polska', href: '/pl/kraje/niemcy' },
  { label: 'UK -> Polska', href: '/pl/kraje/wielka-brytania' },
  { label: 'Holandia -> Polska', href: '/pl/kraje/holandia' },
  { label: 'Francja -> Polska', href: '/pl/kraje/francja' },
  { label: 'Norwegia -> Polska', href: '/pl/kraje/norwegia' },
  { label: 'Monachium / Berlin / Paryz / Amsterdam -> Polska', href: '/pl/trasy/transport-zwlok-z-monachium-do-polski' },
]

const HomePageClient = () => {
  return (
    <>
      <Hero />

      <section className="bg-[#090909] py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Dodatkowa specjalizacja
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair text-white">
                Pomagamy także w transporcie zmarłych i sprowadzeniu zwłok do Polski
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-base leading-8 text-gray-300">
                Oprócz kompleksowej organizacji pogrzebów prowadzimy również sprawy transportowe. Jeśli zgon nastąpił poza miejscem planowanego pochówku, pomagamy w formalnościach, odbiorze i bezpiecznym przewozie do Polski lub na terenie kraju.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {internationalHighlights.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary/80 mb-3">Transport 24/7</p>
                  <h3 className="text-2xl font-playfair text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray-300">{item.description}</p>
                  <a
                    href={item.href}
                    className="mt-6 inline-flex items-center justify-center rounded-md border border-primary/35 bg-primary/10 px-5 py-3 font-medium text-primary transition hover:border-primary hover:bg-primary/15"
                  >
                    {item.cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-black/50 to-black/80 p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-primary/80 mb-3">Europa i zagranica</p>
                  <h3 className="text-3xl font-playfair text-white">Pomagamy w transporcie zmarłych do Polski z Europy i z zagranicy</h3>
                  <p className="mt-4 text-base leading-8 text-gray-300">
                    Organizujemy odbiór z placówki, wspieramy w formalnościach i koordynujemy bezpieczny przewóz do Polski. Jeśli sprawa jest pilna, rodzina może zadzwonić od razu i od pierwszej rozmowy otrzyma konkretne wsparcie.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {topRoutes.map((route) => (
                    <Link key={route.label} href={route.href} className="rounded-xl border border-white/10 bg-black/35 px-4 py-4 text-sm text-gray-100 transition hover:border-primary/40 hover:text-white">
                      {route.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NoUpfrontCosts />
      <Services />
      <Reviews />
      <ServicesCta />
      <section className="bg-black px-4">
        <div className="container mx-auto">
          <RelatedLinks
            pathname="/"
            heading="Najważniejsze strony dla rodziny"
            intro="Łączymy stronę główną z usługami, formalnościami i kontaktem, żeby rodzina mogła szybko przejść do właściwej pomocy."
            className="mt-0"
          />
        </div>
      </section>
      <ServicesTable />
      <FAQ />
      <About />
      <Contact />

      <section className="py-10 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-playfair text-white text-center mb-8">Najważniejsze strony</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/zaklad-pogrzebowy-lodz" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Zakład Pogrzebowy Łódź – całodobowy
              </Link>
              <Link href="/pogrzeb-lodz" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Pogrzeby Łódź – organizacja i koszty
              </Link>
              <Link href="/nekrologi-lodz" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Nekrologi Łódź
              </Link>
              <Link href="/nekrolog-lodz" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Nekrolog Łódź
              </Link>
              <Link href="/uslugi-pogrzebowe-lodz" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Usługi Pogrzebowe Łódź
              </Link>
              <Link href="/uslugi/sprowadzenie-zwlok-z-zagranicy" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Sprowadzenie zwłok z zagranicy
              </Link>
              <Link href="/pl/uslugi/sprowadzenie-zmarlego-do-polski" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Sprowadzenie zmarłego do Polski
              </Link>
              <Link href="/pl/uslugi/miedzynarodowy-transport-zwlok" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Międzynarodowy transport zwłok do Polski
              </Link>
              <Link href="/cmentarze-lodz" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Cmentarze w Łodzi
              </Link>
              <Link href="/poradnik" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Poradnik Pogrzebowy
              </Link>
              <Link href="/pogrzeb-bez-zaliczki" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">
                Pogrzeb bez zaliczki
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-4 text-white">Potrzebujesz pomocy od razu?</h2>
          <p className="text-lg mb-3 text-gray-300">Jesteśmy dostępni 24/7, aby pomóc przy organizacji pogrzebu lub transporcie do Polski.</p>
          <p className="mx-auto mb-6 max-w-3xl text-sm text-gray-400">
            Rodzinna firma z ponad 30-letnim doświadczeniem, uczciwym podejściem do wyceny i realnym wsparciem dla rodzin, także wtedy, gdy trzeba szybko zorganizować krajowy albo międzynarodowy transport zmarłych bez zaliczki.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <a href="tel:+48602274661" className="text-2xl font-bold text-primary hover:underline">
              +48 602 274 661
            </a>
            <a href="tel:+48602270050" className="text-lg font-semibold text-gray-200 hover:text-primary transition-colors">
              Kontakt międzynarodowy: +48 602 270 050
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageClient
