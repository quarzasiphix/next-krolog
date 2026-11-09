import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EmergencyContactRail from '@/components/international/EmergencyContactRail'
import { InternationalContactBox, LocalizedHero, RelatedRoutes, TrustSection, UrgentContactBar } from '@/components/international/section-components'
import { StructuredData } from '@/components/international/StructuredData'
import { POLAND_LABELS, buildLocalizedPath, getFeaturedRoutes, internationalContactChannels, isSupportedLocale, localeInfo, serviceCatalog, type Locale } from '@/lib/international/content'
import { buildIntlMetadata } from '@/lib/international/seo'

const homeConversionCopy = {
  pl: {
    eyebrow: 'Kontakt międzynarodowy',
    title: 'Najpierw telefon. Potem WhatsApp. Formularz, jeśli rozmowa jest teraz zbyt trudna.',
    description: 'Numer międzynarodowy, WhatsApp i formularz są dostępne całą dobę. Rodzina za granicą może od razu przekazać sprawę.',
    bullets: [
      'Numer międzynarodowy czynny 24/7',
      'WhatsApp, jeśli trudno teraz rozmawiać',
      'Krótki formularz – oddzwonimy',
    ],
    railTitle: 'Szybkie zgłoszenie międzynarodowe',
    railSummary: 'Jeśli bliska osoba zmarła za granicą, zadzwoń lub napisz – przejmiemy kontakt z placówką i formalności.',
    trustTitle: 'Dlaczego rodziny nam ufają',
    contactBoxDescription: 'Ten numer obsługuje sprawy transportu zmarłych z zagranicy – odbieramy 24/7.',
    heroBadges: ['Pomoc 24/7', 'Bez zaliczki i kosztów z góry', 'Rodzinna firma od 1995 r.', 'Odbiór z placówki za granicą'],
    trustItems: [
      { title: 'Rodzinna firma od 1995 r.', description: 'Każdą sprawę prowadzimy spokojnie i osobiście.' },
      { title: 'Kontakt od razu', description: 'Telefon i WhatsApp są dostępne całą dobę, także w weekendy i święta.' },
      { title: 'Bez kosztów z góry', description: 'Wyjaśniamy możliwości rozliczenia bez zaliczki, w tym z zasiłku pogrzebowego.' },
    ],
  },
  en: {
    eyebrow: 'International contact path',
    title: 'Call first. Message second. Form if a callback feels easier.',
    description: 'International phone, WhatsApp and a short form are available 24/7, so the family abroad can hand the case over straight away.',
    bullets: [
      'Dedicated international number visible 24/7',
      'WhatsApp for users who cannot talk immediately',
      'Short callback form for stress-heavy situations on mobile',
    ],
    railTitle: 'Quick international request',
    railSummary: 'If a loved one died abroad, call or write – we take over contact with the facility and the paperwork.',
    trustTitle: 'Why families trust us',
    contactBoxDescription: 'This number handles repatriation from abroad – we answer 24/7.',
    heroBadges: ['24/7 help', 'No upfront payment', 'Family business since 1995', 'Collection from facilities abroad'],
    trustItems: [
      { title: 'Family business since 1995', description: 'We handle each case calmly and personally.' },
      { title: 'Reachable immediately', description: 'Phone and WhatsApp are available 24/7, including weekends and holidays.' },
      { title: 'No upfront costs', description: 'We explain settlement options without an advance payment, including the Polish funeral benefit.' },
    ],
  },
  de: {
    eyebrow: 'Internationaler Kontaktweg',
    title: 'Zuerst anrufen. Dann WhatsApp. Das Formular, wenn ein Ruckruf leichter ist.',
    description: 'Internationale Nummer, WhatsApp und ein kurzes Formular sind rund um die Uhr erreichbar.',
    bullets: [
      'Internationale Direktnummer 24/7 sichtbar',
      'WhatsApp fur Menschen, die nicht sofort sprechen konnen',
      'Kurzes Ruckrufformular fur mobile Nutzer unter Stress',
    ],
    railTitle: 'Schnelle internationale Anfrage',
    railSummary: 'Wenn ein Angehöriger im Ausland verstorben ist, rufen Sie an oder schreiben Sie – wir übernehmen den Kontakt und die Unterlagen.',
    trustTitle: 'Warum Familien uns vertrauen',
    contactBoxDescription: 'Diese Nummer ist für Überführungen aus dem Ausland – erreichbar 24/7.',
    heroBadges: ['Hilfe 24/7', 'Keine Vorauszahlung', 'Familienunternehmen seit 1995', 'Abholung aus Einrichtungen im Ausland'],
    trustItems: [
      { title: 'Familienunternehmen seit 1995', description: 'Ruhige, persönliche Begleitung in jedem Fall.' },
      { title: 'Sofort erreichbar', description: 'Telefon und WhatsApp rund um die Uhr, auch an Wochenenden und Feiertagen.' },
      { title: 'Keine Vorauszahlung', description: 'Wir erklären Abrechnungsmöglichkeiten ohne Vorauszahlung.' },
    ],
  },
  fr: {
    eyebrow: 'Parcours de contact international',
    title: 'Appelez d abord. WhatsApp ensuite. Le formulaire si parler est trop difficile.',
    description: 'Le numéro international, WhatsApp et un court formulaire sont disponibles 24h/24.',
    bullets: [
      'Numero international dedie visible 24/7',
      'WhatsApp pour les personnes qui ne peuvent pas parler tout de suite',
      'Formulaire de rappel court pour les situations de stress sur mobile',
    ],
    railTitle: 'Demande internationale rapide',
    railSummary: 'Si un proche est décédé à l\'étranger, appelez ou écrivez – nous prenons en charge le contact et les documents.',
    trustTitle: 'Pourquoi les familles nous font confiance',
    contactBoxDescription: 'Ce numéro est dédié aux rapatriements depuis l\'étranger – disponible 24h/24.',
    heroBadges: ['Aide 24h/24', 'Sans paiement initial', 'Entreprise familiale depuis 1995', 'Prise en charge à l’étranger'],
    trustItems: [
      { title: 'Entreprise familiale depuis 1995', description: 'Un accompagnement calme et personnel.' },
      { title: 'Joignables immédiatement', description: 'Téléphone et WhatsApp 24h/24, y compris le week-end et les jours fériés.' },
      { title: 'Sans paiement initial', description: 'Nous expliquons les possibilités de règlement sans avance.' },
    ],
  },
  nl: {
    eyebrow: 'Internationaal contactpad',
    title: 'Bel eerst. Daarna WhatsApp. Het formulier als terugbellen makkelijker voelt.',
    description: 'Internationaal nummer, WhatsApp en een kort formulier zijn 24/7 beschikbaar.',
    bullets: [
      'Speciaal internationaal nummer 24/7 zichtbaar',
      'WhatsApp voor mensen die niet meteen kunnen praten',
      'Kort terugbelformulier voor stressvolle mobiele situaties',
    ],
    railTitle: 'Snelle internationale aanvraag',
    railSummary: 'Is een dierbare in het buitenland overleden? Bel of schrijf – wij nemen het contact en de documenten over.',
    trustTitle: 'Waarom families ons vertrouwen',
    contactBoxDescription: 'Dit nummer is voor repatriëring uit het buitenland – 24/7 bereikbaar.',
    heroBadges: ['Hulp 24/7', 'Geen vooruitbetaling', 'Familiebedrijf sinds 1995', 'Ophalen bij instellingen in het buitenland'],
    trustItems: [
      { title: 'Familiebedrijf sinds 1995', description: 'Rustige, persoonlijke begeleiding.' },
      { title: 'Direct bereikbaar', description: 'Telefoon en WhatsApp 24/7, ook in het weekend en op feestdagen.' },
      { title: 'Geen vooruitbetaling', description: 'Wij leggen afrekenmogelijkheden zonder voorschot uit.' },
    ],
  },
  it: {
    eyebrow: 'Percorso di contatto internazionale',
    title: 'Prima chiama. Poi WhatsApp. Il modulo se parlare ora e troppo difficile.',
    description: 'Numero internazionale, WhatsApp e un breve modulo sono disponibili 24 ore su 24.',
    bullets: [
      'Numero internazionale dedicato visibile 24/7',
      'WhatsApp per chi non puo parlare subito',
      'Modulo breve di richiamata per situazioni stressanti da mobile',
    ],
    railTitle: 'Richiesta internazionale rapida',
    railSummary: 'Se una persona cara è morta all\'estero, chiama o scrivi – ci occupiamo del contatto con la struttura e dei documenti.',
    trustTitle: 'Perché le famiglie si fidano di noi',
    contactBoxDescription: 'Questo numero è dedicato ai rimpatri dall\'estero – attivo 24/7.',
    heroBadges: ['Aiuto 24/7', 'Nessun anticipo', 'Impresa familiare dal 1995', 'Ritiro presso strutture all’estero'],
    trustItems: [
      { title: 'Impresa familiare dal 1995', description: 'Accompagnamento calmo e personale.' },
      { title: 'Subito raggiungibili', description: 'Telefono e WhatsApp 24 ore su 24, anche nei fine settimana e nei festivi.' },
      { title: 'Nessun anticipo', description: 'Spieghiamo le possibilità di pagamento senza anticipo.' },
    ],
  },
} as const

export const dynamicParams = false

export function generateStaticParams() {
  // /pl was consolidated into /uslugi/* (301 in public/_redirects).
  return (Object.keys(localeInfo) as Locale[]).filter((locale) => locale !== 'pl').map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isSupportedLocale(locale)) return {}
  const base = buildIntlMetadata({ kind: 'home', locale }, { title: localeInfo[locale].homeTitle, description: localeInfo[locale].homeDescription, path: `/${locale}` })
  if (locale !== 'pl') return { ...base, robots: { index: false, follow: true } }
  return base
}

export default async function InternationalHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isSupportedLocale(locale)) notFound()

  const primaryPhone = internationalContactChannels[0]
  const whatsapp = internationalContactChannels[2]
  const copy = homeConversionCopy[locale]

  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska', telephone: '+48 602 274 661', email: 'kontakt@nekrolog-lodz.com' }]} />
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
