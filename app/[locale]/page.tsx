import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EmergencyContactRail from '@/components/international/EmergencyContactRail'
import { InternationalContactBox, LocalizedHero, RelatedRoutes, TrustSection, UrgentContactBar } from '@/components/international/section-components'
import { StructuredData } from '@/components/international/StructuredData'
import { POLAND_LABELS, buildLocalizedPath, getFeaturedRoutes, internationalContactChannels, isSupportedLocale, localeInfo, serviceCatalog, type Locale } from '@/lib/international/content'
import { buildIntlMetadata } from '@/lib/international/seo'

const homeConversionCopy = {
  pl: {
    eyebrow: 'Kontakt miedzynarodowy',
    title: 'Najpierw telefon. Potem WhatsApp. Formularz, jesli rozmowa jest teraz zbyt trudna.',
    description: 'Miedzynarodowy numer i formularz dzialaja jako osobna sciezka w calej sekcji. Rodzina za granica nie musi szukac kolejnego kroku.',
    bullets: [
      'Dedykowany numer miedzynarodowy widoczny 24/7',
      'WhatsApp dla osob, ktore nie moga od razu rozmawiac',
      'Krotki formularz oddzwonienia dla uzytkownikow na telefonie',
    ],
    railTitle: 'Szybkie zgloszenie miedzynarodowe',
    railSummary: 'Skorzystaj z osobnej sciezki international, jesli potrzebujesz spokojnego i pilnego wsparcia z zagranicy. Mozemy kontynuowac rozmowe w jezyku strony.',
    trustTitle: 'Architektura i konwersja',
    contactBoxDescription: 'Ten dedykowany blok kontaktowy jest przygotowany dla rodzin kontaktujacych sie z zagranicy pod presja czasu.',
    heroBadges: ['Wsparcie rodziny 24/7', 'Dedykowane strony tras wedlug miasta', 'Mocny graf linkowania wewnetrznego', 'Widoczna informacja o braku zaliczki'],
    trustItems: [
      { title: 'Architektura SEO wysokiej intencji', description: 'Kazdy locale, kraj, miasto i trasa ma wlasny indeksowalny adres URL i wspolna warstwe metadata.' },
      { title: 'UX projektowany pod stres', description: 'Najpilniejszy telefon, WhatsApp i komunikat o braku kosztow z gory sa widoczne od razu.' },
      { title: 'Skalowanie bez spamu', description: 'Tresci powstaja z typowanych encji zamiast z dziesiatek recznie kopiowanych stron.' },
    ],
  },
  en: {
    eyebrow: 'International contact path',
    title: 'Call first. Message second. Form if a callback feels easier.',
    description: 'The international number and international form are treated as a separate path across the whole section. A family abroad should never need to search for the next action.',
    bullets: [
      'Dedicated international number visible 24/7',
      'WhatsApp for users who cannot talk immediately',
      'Short callback form for stress-heavy situations on mobile',
    ],
    railTitle: 'Quick international request',
    railSummary: 'Use the dedicated international path if you need calm, urgent support from abroad. We can continue in the page language whenever possible.',
    trustTitle: 'Architecture and conversion',
    contactBoxDescription: 'This dedicated contact block is designed for stressed families reaching out from abroad.',
    heroBadges: ['24/7 family support', 'Dedicated route pages by city', 'Strong internal linking graph', 'No upfront family payment remains visible'],
    trustItems: [
      { title: 'High-intent SEO architecture', description: 'Each locale, country, city and route has its own indexable URL and shared metadata layer.' },
      { title: 'Stress-first UX', description: 'The most urgent phone CTA, WhatsApp option and no-upfront-cost message stay close to the top.' },
      { title: 'Scalable without spam', description: 'Content is generated from typed entities instead of dozens of disconnected pages.' },
    ],
  },
  de: {
    eyebrow: 'Internationaler Kontaktweg',
    title: 'Zuerst anrufen. Dann WhatsApp. Das Formular, wenn ein Ruckruf leichter ist.',
    description: 'Die internationale Nummer und das internationale Formular bilden einen eigenen Pfad in der gesamten Sektion. Familien im Ausland sollten nie nach dem nachsten Schritt suchen mussen.',
    bullets: [
      'Internationale Direktnummer 24/7 sichtbar',
      'WhatsApp fur Menschen, die nicht sofort sprechen konnen',
      'Kurzes Ruckrufformular fur mobile Nutzer unter Stress',
    ],
    railTitle: 'Schnelle internationale Anfrage',
    railSummary: 'Nutzen Sie den separaten internationalen Pfad, wenn Sie aus dem Ausland ruhige und dringende Unterstutzung benotigen. Wir konnen nach Moglichkeit in der Sprache der Seite weitermachen.',
    trustTitle: 'Architektur und Conversion',
    contactBoxDescription: 'Dieser eigene Kontaktblock ist fur Familien gedacht, die sich aus dem Ausland in einer belastenden Situation melden.',
    heroBadges: ['Familienhilfe 24/7', 'Eigene Routenseiten nach Stadt', 'Starker interner Linkgraph', 'Hinweis ohne Vorauszahlung bleibt sichtbar'],
    trustItems: [
      { title: 'SEO-Architektur mit hoher Absicht', description: 'Jede Sprache, jedes Land, jede Stadt und jede Route hat eine eigene indexierbare URL und gemeinsame Metadaten.' },
      { title: 'UX fur Situationen unter Druck', description: 'Telefon, WhatsApp und die Botschaft ohne Vorauszahlung bleiben nah am Seitenanfang.' },
      { title: 'Skalierbar ohne Spam', description: 'Inhalte werden aus typisierten Daten erzeugt statt aus dutzenden getrennten Seiten.' },
    ],
  },
  fr: {
    eyebrow: 'Parcours de contact international',
    title: 'Appelez d abord. WhatsApp ensuite. Le formulaire si parler est trop difficile.',
    description: 'Le numero international et le formulaire international fonctionnent comme un parcours distinct sur toute la section. Une famille a l etranger ne doit jamais chercher la prochaine action.',
    bullets: [
      'Numero international dedie visible 24/7',
      'WhatsApp pour les personnes qui ne peuvent pas parler tout de suite',
      'Formulaire de rappel court pour les situations de stress sur mobile',
    ],
    railTitle: 'Demande internationale rapide',
    railSummary: 'Utilisez le parcours international dedie si vous avez besoin d un soutien urgent et pose depuis l etranger. Nous pouvons poursuivre dans la langue de la page si possible.',
    trustTitle: 'Architecture et conversion',
    contactBoxDescription: 'Ce bloc de contact dedie est concu pour les familles qui nous contactent depuis l etranger dans une situation de stress.',
    heroBadges: ['Assistance familles 24/7', 'Pages itineraire dediees par ville', 'Maillage interne fort', 'Message sans paiement initial visible'],
    trustItems: [
      { title: 'Architecture SEO a forte intention', description: 'Chaque langue, pays, ville et itineraire dispose de sa propre URL indexable et d une couche de metadonnees partagee.' },
      { title: 'UX pensee pour le stress', description: 'Le telephone urgent, WhatsApp et le message sans avance restent tres visibles.' },
      { title: 'Scalable sans spam', description: 'Le contenu est genere a partir d entites typees plutot que de dizaines de pages deconnectees.' },
    ],
  },
  nl: {
    eyebrow: 'Internationaal contactpad',
    title: 'Bel eerst. Daarna WhatsApp. Het formulier als terugbellen makkelijker voelt.',
    description: 'Het internationale nummer en formulier vormen een apart pad in deze hele sectie. Een familie in het buitenland mag niet hoeven zoeken naar de volgende stap.',
    bullets: [
      'Speciaal internationaal nummer 24/7 zichtbaar',
      'WhatsApp voor mensen die niet meteen kunnen praten',
      'Kort terugbelformulier voor stressvolle mobiele situaties',
    ],
    railTitle: 'Snelle internationale aanvraag',
    railSummary: 'Gebruik het aparte internationale pad als u vanuit het buitenland rustige, urgente ondersteuning nodig heeft. We kunnen waar mogelijk verdergaan in de taal van de pagina.',
    trustTitle: 'Architectuur en conversie',
    contactBoxDescription: 'Dit aparte contactblok is bedoeld voor families die vanuit het buitenland onder druk contact opnemen.',
    heroBadges: ['24/7 hulp voor families', 'Specifieke routepaginas per stad', 'Sterke interne linkstructuur', 'Boodschap zonder vooruitbetaling blijft zichtbaar'],
    trustItems: [
      { title: 'SEO-architectuur met hoge intentie', description: 'Elke taal, elk land, elke stad en elke route heeft een eigen indexeerbare URL en gedeelde metadata-laag.' },
      { title: 'UX voor stressvolle situaties', description: 'De dringendste belactie, WhatsApp en de boodschap zonder vooruitbetaling staan direct bovenaan.' },
      { title: 'Schaalbaar zonder spam', description: 'Content komt uit getypeerde entiteiten in plaats van uit tientallen losse paginas.' },
    ],
  },
  it: {
    eyebrow: 'Percorso di contatto internazionale',
    title: 'Prima chiama. Poi WhatsApp. Il modulo se parlare ora e troppo difficile.',
    description: 'Il numero internazionale e il modulo internazionale sono trattati come un percorso separato in tutta la sezione. Una famiglia all estero non dovrebbe dover cercare il passo successivo.',
    bullets: [
      'Numero internazionale dedicato visibile 24/7',
      'WhatsApp per chi non puo parlare subito',
      'Modulo breve di richiamata per situazioni stressanti da mobile',
    ],
    railTitle: 'Richiesta internazionale rapida',
    railSummary: 'Usa il percorso internazionale dedicato se hai bisogno di un supporto urgente e rassicurante dall estero. Possiamo continuare nella lingua della pagina quando possibile.',
    trustTitle: 'Architettura e conversione',
    contactBoxDescription: 'Questo blocco di contatto dedicato e pensato per le famiglie che ci contattano dall estero in una situazione di stress.',
    heroBadges: ['Supporto famiglie 24/7', 'Pagine rotta dedicate per citta', 'Forte rete di link interni', 'Messaggio senza anticipo sempre visibile'],
    trustItems: [
      { title: 'Architettura SEO ad alta intenzione', description: 'Ogni lingua, Paese, citta e rotta ha il proprio URL indicizzabile e un livello condiviso di metadata.' },
      { title: 'UX pensata per lo stress', description: 'Telefono urgente, WhatsApp e messaggio senza anticipo restano vicini all inizio pagina.' },
      { title: 'Scalabile senza spam', description: 'I contenuti sono generati da entita tipizzate invece che da decine di pagine scollegate.' },
    ],
  },
} as const

export const dynamicParams = false

export function generateStaticParams() {
  return (Object.keys(localeInfo) as Locale[]).map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isSupportedLocale(locale)) return {}
  return buildIntlMetadata({ kind: 'home', locale }, { title: localeInfo[locale].homeTitle, description: localeInfo[locale].homeDescription, path: `/${locale}` })
}

export default async function InternationalHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isSupportedLocale(locale)) notFound()

  const primaryPhone = internationalContactChannels[0]
  const whatsapp = internationalContactChannels[2]
  const copy = homeConversionCopy[locale]

  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Nekrolog Lodz - Uslugi Pogrzebowe Jolanta Kostowska', telephone: '+48 602 274 661', email: 'kontakt@nekrolog-lodz.com' }]} />
      <LocalizedHero
        eyebrow={copy.eyebrow}
        title={localeInfo[locale].homeTitle}
        description={localeInfo[locale].homeDescription}
        primaryCta={{ href: primaryPhone.href, label: `${localeInfo[locale].cta.urgent}: ${primaryPhone.value}` }}
        secondaryCta={{ href: whatsapp.href, label: localeInfo[locale].cta.whatsapp, eventName: 'intl_whatsapp_click' }}
        badges={[...copy.heroBadges]}
        locale={locale}
        pageType="home"
      />
      <UrgentContactBar title={localeInfo[locale].cta.contact} description={primaryPhone.labelPerLocale[locale]} primaryPhone={primaryPhone} whatsapp={whatsapp} locale={locale} pageType="home" />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">{copy.eyebrow}</p>
          <h2 className="text-3xl font-playfair text-white">{copy.title}</h2>
          <p className="text-sm leading-7 text-stone-300">{copy.description}</p>
          <div className="grid gap-3">
            {copy.bullets.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-stone-200">{item}</div>
            ))}
          </div>
        </div>
        <EmergencyContactRail title={copy.railTitle} summary={copy.railSummary} locale={locale} pageType="home" whatsappUrl={whatsapp.href} internationalPhone={primaryPhone.value} />
      </section>

      <TrustSection title={copy.trustTitle} items={copy.trustItems} />
      <RelatedRoutes title={localeInfo[locale].nav.services} links={serviceCatalog.map((service) => ({ href: buildLocalizedPath(locale, 'service', service.slugPerLocale[locale]), label: service.namePerLocale[locale], description: service.summaryPerLocale[locale] }))} locale={locale} />
      <RelatedRoutes title={localeInfo[locale].nav.routes} links={getFeaturedRoutes(locale, 5).map((item) => ({ href: buildLocalizedPath(locale, 'route', item.slug), label: `${item.city.namesPerLocale[locale]} -> ${POLAND_LABELS[locale]}`, description: `${item.country.namesPerLocale[locale]} | ${item.city.airportNearby}` }))} locale={locale} />
      <InternationalContactBox title={primaryPhone.labelPerLocale[locale]} description={copy.contactBoxDescription} channels={internationalContactChannels} locale={locale} />
    </>
  )
}
