import type { Metadata, MetadataRoute } from 'next'
import type { FAQItem } from '@/components/structured-data/FAQSchema'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

export const INTERNATIONAL_LOCALES = ['pl', 'en', 'de', 'fr', 'nl', 'it'] as const
export type InternationalLocale = (typeof INTERNATIONAL_LOCALES)[number]
type SlugMap = Record<InternationalLocale, string>
type ServiceKey =
  | 'international-transport'
  | 'repatriation-to-poland'
  | 'european-transport'
  | 'air-transport'
  | 'documents'
  | 'contact'
  | 'areas'
  | 'faq'
type CityKey = 'munich' | 'berlin' | 'paris' | 'amsterdam'
type TranslationMap = Record<InternationalLocale, string>

export interface InternationalResolvedPage {
  kind: 'home' | 'service' | 'city'
  locale: InternationalLocale
  slugSegments: string[]
  url: string
  title: string
  metaTitle: string
  metaDescription: string
  heroEyebrow: string
  heroTitle: string
  heroSummary: string
  lead: string
  trustSignals: string[]
  quickFacts: string[]
  sections: Array<{ title: string; paragraphs: string[]; list?: string[] }>
  faqItems: FAQItem[]
  relatedLinks: Array<{ href: string; label: string }>
  breadcrumbs: Array<{ name: string; url?: string }>
  languageAlternates: Record<InternationalLocale, string>
  schemaServiceName: string
  languageName: string
  localeLabel: string
  ctaTitle: string
  ctaSummary: string
  formTitle: string
  formSummary: string
}

const localeConfig: Record<
  InternationalLocale,
  {
    nativeName: string
    localeLabel: string
    ogLocale: string
    siteLabel: string
    homeTitle: string
    homeDescription: string
    mainHubSlug: string
    labels: Record<
      | 'breadcrumbsHome'
      | 'procedures'
      | 'documents'
      | 'support'
      | 'timing'
      | 'trustCompany'
      | 'trustFamily'
      | 'trustPricing'
      | 'trustResponse',
      string
    >
  }
> = {
  pl: {
    nativeName: 'Polski',
    localeLabel: 'PL',
    ogLocale: 'pl_PL',
    siteLabel: 'Międzynarodowy transport zwłok do Polski',
    homeTitle: 'Międzynarodowy transport zwłok do Polski',
    homeDescription: 'Całodobowa organizacja sprowadzenia zmarłych do Polski z Europy. Własny bus, transport lotniczy, formalności i szybki kontakt 24/7.',
    mainHubSlug: 'miedzynarodowy-transport-zwlok',
    labels: {
      breadcrumbsHome: 'Start międzynarodowy',
      procedures: 'Jak wygląda procedura',
      documents: 'Jakie dokumenty są potrzebne',
      support: 'Co robimy za rodzinę',
      timing: 'Czas i organizacja transportu',
      trustCompany: 'Ponad 30 lat rodzinnego doświadczenia',
      trustFamily: 'Pomoc rodzinie i formalności po naszej stronie',
      trustPricing: 'Konkurencyjne ceny i brak zaliczki',
      trustResponse: 'Działamy non stop i ekspresowo',
    },
  },
  en: {
    nativeName: 'English',
    localeLabel: 'EN',
    ogLocale: 'en_GB',
    siteLabel: 'International repatriation to Poland',
    homeTitle: 'International body transport to Poland',
    homeDescription: '24/7 repatriation to Poland from across Europe. Road transport, air transport, documents and urgent family support.',
    mainHubSlug: 'international-body-transport',
    labels: {
      breadcrumbsHome: 'International hub',
      procedures: 'How the process works',
      documents: 'Documents required',
      support: 'What we handle for the family',
      timing: 'Timing and organisation',
      trustCompany: '30+ years as a family funeral company',
      trustFamily: 'Documents and coordination handled by us',
      trustPricing: 'Competitive pricing and no upfront payment',
      trustResponse: 'Non-stop and fast response',
    },
  },
  de: {
    nativeName: 'Deutsch',
    localeLabel: 'DE',
    ogLocale: 'de_DE',
    siteLabel: 'Internationale Überführung nach Polen',
    homeTitle: 'Internationale Überführung nach Polen',
    homeDescription: '24/7 Überführung nach Polen aus Europa. Straßentransport, Lufttransport, Unterlagen und schnelle Familienhilfe.',
    mainHubSlug: 'internationale-ueberfuehrung-polen',
    labels: {
      breadcrumbsHome: 'Internationales Zentrum',
      procedures: 'Ablauf der Überführung',
      documents: 'Benötigte Unterlagen',
      support: 'Was wir für die Familie übernehmen',
      timing: 'Zeit und Organisation',
      trustCompany: 'Über 30 Jahre Erfahrung als Familienunternehmen',
      trustFamily: 'Unterlagen und Koordination übernehmen wir',
      trustPricing: 'Faire Preise ohne Vorauszahlung',
      trustResponse: 'Rund um die Uhr und schnell einsatzbereit',
    },
  },
  fr: {
    nativeName: 'Français',
    localeLabel: 'FR',
    ogLocale: 'fr_FR',
    siteLabel: 'Rapatriement vers la Pologne',
    homeTitle: 'Transport funéraire international vers la Pologne',
    homeDescription: 'Service 24/7 de rapatriement vers la Pologne. Transport routier ou aérien, formalités et accompagnement de la famille.',
    mainHubSlug: 'transport-funeraire-international-pologne',
    labels: {
      breadcrumbsHome: 'Hub international',
      procedures: 'Comment se déroule la procédure',
      documents: 'Documents nécessaires',
      support: 'Ce que nous faisons pour la famille',
      timing: 'Délais et organisation',
      trustCompany: 'Entreprise familiale avec plus de 30 ans d’expérience',
      trustFamily: 'Formalités et coordination prises en charge',
      trustPricing: 'Tarifs compétitifs sans avance',
      trustResponse: 'Disponibles en continu et en urgence',
    },
  },
  nl: {
    nativeName: 'Nederlands',
    localeLabel: 'NL',
    ogLocale: 'nl_NL',
    siteLabel: 'Internationaal vervoer naar Polen',
    homeTitle: 'Internationaal vervoer van overledenen naar Polen',
    homeDescription: '24/7 repatriëring naar Polen. Wegtransport, luchttransport, documenten en snelle ondersteuning voor de familie.',
    mainHubSlug: 'internationaal-vervoer-overledenen-polen',
    labels: {
      breadcrumbsHome: 'Internationale hub',
      procedures: 'Hoe de procedure verloopt',
      documents: 'Benodigde documenten',
      support: 'Wat wij voor de familie regelen',
      timing: 'Tijd en organisatie',
      trustCompany: 'Familiebedrijf met meer dan 30 jaar ervaring',
      trustFamily: 'Documenten en coördinatie nemen wij over',
      trustPricing: 'Eerlijke prijzen zonder voorschot',
      trustResponse: 'Non-stop beschikbaar met snelle reactie',
    },
  },
  it: {
    nativeName: 'Italiano',
    localeLabel: 'IT',
    ogLocale: 'it_IT',
    siteLabel: 'Rimpatrio verso la Polonia',
    homeTitle: 'Trasporto funebre internazionale verso la Polonia',
    homeDescription: 'Servizio 24/7 di rimpatrio in Polonia. Trasporto su strada o aereo, documenti e assistenza immediata alla famiglia.',
    mainHubSlug: 'trasporto-funebre-internazionale-polonia',
    labels: {
      breadcrumbsHome: 'Hub internazionale',
      procedures: 'Come funziona la procedura',
      documents: 'Documenti necessari',
      support: 'Cosa facciamo per la famiglia',
      timing: 'Tempi e organizzazione',
      trustCompany: 'Impresa familiare con oltre 30 anni di esperienza',
      trustFamily: 'Documenti e coordinamento gestiti da noi',
      trustPricing: 'Prezzi competitivi senza anticipo',
      trustResponse: 'Operativi senza sosta e con risposta rapida',
    },
  },
}

const serviceSlugs: Record<ServiceKey, SlugMap> = {
  'international-transport': { pl: 'miedzynarodowy-transport-zwlok', en: 'international-body-transport', de: 'internationale-ueberfuehrung', fr: 'transport-funeraire-international', nl: 'internationaal-vervoer-overledenen', it: 'trasporto-funebre-internazionale' },
  'repatriation-to-poland': { pl: 'sprowadzenie-zmarlego-do-polski', en: 'repatriation-to-poland', de: 'ueberfuehrung-nach-polen', fr: 'rapatriement-vers-la-pologne', nl: 'repatriering-naar-polen', it: 'rimpatrio-salma-in-polonia' },
  'european-transport': { pl: 'transport-zwlok-w-europie', en: 'body-transport-in-europe', de: 'ueberfuehrung-in-europa', fr: 'transport-funeraire-en-europe', nl: 'vervoer-overledenen-in-europa', it: 'trasporto-funebre-in-europa' },
  'air-transport': { pl: 'transport-lotniczy-zmarlych', en: 'air-transport-of-the-deceased', de: 'lufttransport-verstorbener', fr: 'transport-aerien-du-defunt', nl: 'luchttransport-van-overledenen', it: 'trasporto-aereo-salma' },
  documents: { pl: 'formalnosci-przy-sprowadzeniu-ciala-z-zagranicy', en: 'documents-for-bringing-a-body-to-poland', de: 'unterlagen-fuer-die-ueberfuehrung-nach-polen', fr: 'documents-pour-rapatriement-vers-la-pologne', nl: 'documenten-voor-overbrenging-naar-polen', it: 'documenti-per-rimpatrio-in-polonia' },
  contact: { pl: 'kontakt-24-7', en: 'contact-24-7', de: 'kontakt-24-7', fr: 'contact-24-7', nl: 'contact-24-7', it: 'contatto-24-7' },
  areas: { pl: 'obszary-dzialania', en: 'service-areas', de: 'einsatzgebiete', fr: 'zones-desservies', nl: 'werkgebied', it: 'aree-di-intervento' },
  faq: { pl: 'faq-transport-miedzynarodowy', en: 'faq-international-repatriation', de: 'faq-internationale-ueberfuehrung', fr: 'faq-rapatriement-funeraire', nl: 'faq-internationaal-vervoer', it: 'faq-rimpatrio-funebre' },
}

const serviceNames: Record<ServiceKey, TranslationMap> = {
  'international-transport': { pl: 'Międzynarodowy transport zwłok', en: 'International body transport', de: 'Internationale Überführung', fr: 'Transport funéraire international', nl: 'Internationaal vervoer van overledenen', it: 'Trasporto funebre internazionale' },
  'repatriation-to-poland': { pl: 'Sprowadzenie zmarłego do Polski', en: 'Repatriation to Poland', de: 'Überführung nach Polen', fr: 'Rapatriement vers la Pologne', nl: 'Repatriëring naar Polen', it: 'Rimpatrio in Polonia' },
  'european-transport': { pl: 'Transport zwłok w Europie', en: 'Body transport in Europe', de: 'Überführung in Europa', fr: 'Transport funéraire en Europe', nl: 'Vervoer in Europa', it: 'Trasporto in Europa' },
  'air-transport': { pl: 'Transport lotniczy zmarłych', en: 'Air transport of the deceased', de: 'Lufttransport Verstorbener', fr: 'Transport aérien du défunt', nl: 'Luchttransport van overledenen', it: 'Trasporto aereo della salma' },
  documents: { pl: 'Formalności przy sprowadzeniu ciała z zagranicy', en: 'Documents for bringing a body to Poland', de: 'Unterlagen für die Überführung nach Polen', fr: 'Documents pour rapatriement vers la Pologne', nl: 'Documenten voor overbrenging naar Polen', it: 'Documenti per il rimpatrio in Polonia' },
  contact: { pl: 'Kontakt 24/7', en: '24/7 contact', de: 'Kontakt 24/7', fr: 'Contact 24/7', nl: 'Contact 24/7', it: 'Contatto 24/7' },
  areas: { pl: 'Obszary działania', en: 'Service areas', de: 'Einsatzgebiete', fr: 'Zones desservies', nl: 'Werkgebied', it: 'Aree di intervento' },
  faq: { pl: 'FAQ międzynarodowego transportu', en: 'International transport FAQ', de: 'FAQ zur internationalen Überführung', fr: 'FAQ du rapatriement', nl: 'FAQ internationaal vervoer', it: 'FAQ del rimpatrio' },
}

const cityPages: Record<CityKey, { cityNames: TranslationMap; countryNames: TranslationMap; countryList: TranslationMap[]; citySlugs: SlugMap; routeLabel: TranslationMap; lead: TranslationMap }> = {
  munich: {
    cityNames: { pl: 'Monachium', en: 'Munich', de: 'München', fr: 'Munich', nl: 'München', it: 'Monaco di Baviera' },
    countryNames: { pl: 'Niemiec', en: 'Germany', de: 'Deutschland', fr: 'Allemagne', nl: 'Duitsland', it: 'Germania' },
    countryList: [
      { pl: 'akt zgonu lub dokument urzędowy', en: 'death certificate or civil record', de: 'Sterbeurkunde oder Standesamtsdokument', fr: 'acte de décès ou document d’état civil', nl: 'overlijdensakte of burgerlijk document', it: 'atto di morte o documento anagrafico' },
      { pl: 'dokument wydania ciała', en: 'release document', de: 'Freigabedokument', fr: 'document de remise', nl: 'vrijgavedocument', it: 'documento di rilascio' },
      { pl: 'pełnomocnictwo rodziny', en: 'family authorisation', de: 'Vollmacht der Familie', fr: 'procuration de la famille', nl: 'machtiging van de familie', it: 'delega della famiglia' },
    ],
    citySlugs: { pl: 'transport-zwlok-z-monachium-do-polski', en: 'body-transport-munich-to-poland', de: 'ueberfuehrung-muenchen-polen', fr: 'transport-funeraire-munich-pologne', nl: 'repatriering-munchen-polen', it: 'rimpatrio-salma-monaco-polonia' },
    routeLabel: { pl: 'transport zwłok z Monachium do Polski', en: 'body transport Munich to Poland', de: 'Überführung München Polen', fr: 'transport funéraire Munich Pologne', nl: 'repatriëring München Polen', it: 'rimpatrio salma Monaco Polonia' },
    lead: { pl: 'Monachium to jeden z najważniejszych kierunków dla rodzin wracających ze zmarłym do Polski. Organizujemy odbiór ze szpitala, prosektorium lub domu pogrzebowego i planujemy najszybszą trasę.', en: 'Munich is one of the key routes for families arranging repatriation to Poland. We coordinate pickup from a hospital, mortuary or funeral home and plan the fastest safe route.', de: 'München gehört zu den wichtigsten Strecken für Überführungen nach Polen. Wir organisieren die Abholung und planen die schnellste sichere Route.', fr: 'Munich est l’un des points de départ importants pour un rapatriement vers la Pologne. Nous organisons la prise en charge et l’itinéraire le plus sûr.', nl: 'München is een belangrijke vertrekplaats voor repatriëring naar Polen. Wij regelen de ophaling en plannen de snelste veilige route.', it: 'Monaco di Baviera è una delle tratte più importanti per il rimpatrio in Polonia. Organizziamo il ritiro e pianifichiamo il percorso più rapido.' },
  },
  berlin: {
    cityNames: { pl: 'Berlin', en: 'Berlin', de: 'Berlin', fr: 'Berlin', nl: 'Berlijn', it: 'Berlino' },
    countryNames: { pl: 'Niemiec', en: 'Germany', de: 'Deutschland', fr: 'Allemagne', nl: 'Duitsland', it: 'Germania' },
    countryList: [
      { pl: 'akt zgonu i dokument wydania ciała', en: 'death certificate and release document', de: 'Sterbeurkunde und Freigabedokument', fr: 'acte de décès et document de remise', nl: 'overlijdensakte en vrijgavedocument', it: 'atto di morte e documento di rilascio' },
      { pl: 'upoważnienie do działania w imieniu rodziny', en: 'authorisation to act for the family', de: 'Vollmacht der Familie', fr: 'autorisation de la famille', nl: 'machtiging van de familie', it: 'delega della famiglia' },
      { pl: 'dane odbiorcy w Polsce', en: 'recipient details in Poland', de: 'Empfängerdaten in Polen', fr: 'coordonnées du destinataire en Pologne', nl: 'gegevens van ontvanger in Polen', it: 'dati del referente in Polonia' },
    ],
    citySlugs: { pl: 'transport-zwlok-z-berlina-do-polski', en: 'repatriation-berlin-poland', de: 'ueberfuehrung-berlin-polen', fr: 'transport-funeraire-berlin-pologne', nl: 'repatriering-berlijn-polen', it: 'rimpatrio-salma-berlino-polonia' },
    routeLabel: { pl: 'transport zwłok z Berlina do Polski', en: 'repatriation Berlin Poland', de: 'Überführung Berlin Polen', fr: 'transport funéraire Berlin Pologne', nl: 'repatriëring Berlijn Polen', it: 'rimpatrio salma Berlino Polonia' },
    lead: { pl: 'Berlin daje możliwość bardzo szybkiej organizacji przewozu do Polski, zarówno drogowo, jak i przy odbiorach lotniczych. Prowadzimy dokumenty i kontakt z niemieckimi instytucjami.', en: 'Berlin allows very fast organisation of transport to Poland, both by road and when an airport handover is needed. We handle the documentation and local coordination.', de: 'Von Berlin aus kann die Überführung nach Polen sehr schnell organisiert werden. Wir übernehmen Unterlagen und Abstimmungen.', fr: 'Depuis Berlin, le transport vers la Pologne peut souvent être organisé rapidement. Nous gérons les documents et la coordination locale.', nl: 'Vanuit Berlijn kan vervoer naar Polen vaak snel worden geregeld. Wij verzorgen de documenten en lokale afstemming.', it: 'Da Berlino il trasporto verso la Polonia può essere organizzato rapidamente. Gestiamo documenti e coordinamento locale.' },
  },
  paris: {
    cityNames: { pl: 'Paryż', en: 'Paris', de: 'Paris', fr: 'Paris', nl: 'Parijs', it: 'Parigi' },
    countryNames: { pl: 'Francji', en: 'France', de: 'Frankreich', fr: 'France', nl: 'Frankrijk', it: 'Francia' },
    countryList: [
      { pl: 'acte de décès lub odpowiednik', en: 'civil registry death certificate', de: 'Sterbeurkunde', fr: 'acte de décès', nl: 'overlijdensakte', it: 'atto di morte' },
      { pl: 'dokument placówki medycznej lub prosektorium', en: 'hospital or mortuary release document', de: 'Dokument des Krankenhauses oder der Leichenhalle', fr: 'document de remise de l’hôpital ou du funérarium', nl: 'vrijgave van ziekenhuis of mortuarium', it: 'documento dell’ospedale o dell’obitorio' },
      { pl: 'pełnomocnictwo i dane osoby odpowiedzialnej w Polsce', en: 'family authorisation and recipient details in Poland', de: 'Vollmacht und Daten des Empfängers in Polen', fr: 'procuration et coordonnées du destinataire en Pologne', nl: 'machtiging en gegevens van ontvanger in Polen', it: 'delega e dati del referente in Polonia' },
    ],
    citySlugs: { pl: 'transport-zwlok-z-paryza-do-polski', en: 'body-transport-paris-poland', de: 'ueberfuehrung-paris-polen', fr: 'rapatriement-paris-pologne', nl: 'repatriering-parijs-polen', it: 'rimpatrio-salma-parigi-polonia' },
    routeLabel: { pl: 'transport zwłok z Paryża do Polski', en: 'body transport Paris Poland', de: 'Überführung Paris Polen', fr: 'rapatriement Paris Pologne', nl: 'repatriëring Parijs Polen', it: 'rimpatrio salma Parigi Polonia' },
    lead: { pl: 'Przy transporcie z Paryża do Polski kluczowe są szybkie uzgodnienia z placówką, wydanie dokumentów i wybór właściwej formy przewozu. Przejmujemy ten proces od pierwszego telefonu.', en: 'For transport from Paris to Poland, fast coordination with the institution, document release and the right transport mode are essential. We take over from the first call.', de: 'Bei einer Überführung aus Paris nach Polen sind schnelle Abstimmungen, Unterlagen und die passende Transportform entscheidend.', fr: 'Pour un rapatriement de Paris vers la Pologne, il faut agir vite sur les documents, la remise du corps et le choix du mode de transport.', nl: 'Bij vervoer vanuit Parijs naar Polen zijn snelle afstemming, documentafgifte en de juiste transportvorm essentieel.', it: 'Per un rimpatrio da Parigi alla Polonia sono essenziali rapidità nei documenti, rilascio della salma e scelta del mezzo giusto.' },
  },
  amsterdam: {
    cityNames: { pl: 'Amsterdam', en: 'Amsterdam', de: 'Amsterdam', fr: 'Amsterdam', nl: 'Amsterdam', it: 'Amsterdam' },
    countryNames: { pl: 'Holandii', en: 'the Netherlands', de: 'den Niederlanden', fr: 'Pays-Bas', nl: 'Nederland', it: 'Paesi Bassi' },
    countryList: [
      { pl: 'overlijdensakte lub lokalny akt zgonu', en: 'death certificate or local civil record', de: 'Sterbeurkunde oder lokale Urkunde', fr: 'acte de décès ou document d’état civil', nl: 'overlijdensakte of lokaal document', it: 'atto di morte o documento locale' },
      { pl: 'potwierdzenie wydania ciała', en: 'release confirmation', de: 'Freigabebestätigung', fr: 'confirmation de remise', nl: 'bevestiging van vrijgave', it: 'conferma di rilascio' },
      { pl: 'pełnomocnictwo i dane osoby zamawiającej', en: 'family authorisation and requester details', de: 'Vollmacht und Daten des Auftraggebers', fr: 'procuration et coordonnées du demandeur', nl: 'machtiging en gegevens van de aanvrager', it: 'delega e dati del richiedente' },
    ],
    citySlugs: { pl: 'transport-zwlok-z-amsterdamu-do-polski', en: 'repatriation-amsterdam-poland', de: 'ueberfuehrung-amsterdam-polen', fr: 'transport-funeraire-amsterdam-pologne', nl: 'repatriering-amsterdam-polen', it: 'rimpatrio-salma-amsterdam-polonia' },
    routeLabel: { pl: 'transport zwłok z Amsterdamu do Polski', en: 'repatriation Amsterdam Poland', de: 'Überführung Amsterdam Polen', fr: 'transport funéraire Amsterdam Pologne', nl: 'repatriëring Amsterdam Polen', it: 'rimpatrio salma Amsterdam Polonia' },
    lead: { pl: 'Amsterdam jest jednym z najczęstszych kierunków dla Polonii w Holandii. Dzięki dobrej logistyce drogowej możemy organizować przewóz sprawnie i z jasnym harmonogramem dla rodziny.', en: 'Amsterdam is one of the most common routes for Polish families in the Netherlands. Strong road logistics allow us to move quickly and provide a clear timeline.', de: 'Amsterdam ist ein häufiger Ausgangspunkt für Überführungen nach Polen. Dank guter Straßenverbindungen können wir schnell organisieren.', fr: 'Amsterdam est un point de départ fréquent pour les familles polonaises aux Pays-Bas. La logistique routière permet une organisation rapide et claire.', nl: 'Amsterdam is een veelvoorkomend vertrekpunt voor Poolse families in Nederland. Dankzij de logistiek kunnen wij snel en duidelijk plannen.', it: 'Amsterdam è una delle tratte più frequenti per le famiglie polacche nei Paesi Bassi. Grazie alla logistica efficiente possiamo organizzare tutto rapidamente.' },
  },
}

export const rolloutPriorities = [
  'Germany: Munich, Berlin, Hamburg, Dortmund, Cologne',
  'France: Paris, Lyon, Lille, Marseille',
  'Netherlands: Amsterdam, Rotterdam, Eindhoven',
  'Belgium: Brussels, Antwerp',
  'Austria: Vienna',
  'Italy: Milan, Rome',
  'United Kingdom: London, Manchester',
  'Ireland: Dublin',
  'Norway: Oslo',
  'Sweden: Stockholm',
]

function localePath(locale: InternationalLocale, slug?: string) {
  return slug ? `/${locale}/${slug}` : `/${locale}`
}

function buildAlternates(slugs: SlugMap) {
  return INTERNATIONAL_LOCALES.reduce((acc, locale) => {
    acc[locale] = localePath(locale, slugs[locale])
    return acc
  }, {} as Record<InternationalLocale, string>)
}

function serviceIntro(locale: InternationalLocale, key: ServiceKey) {
  const map: Record<ServiceKey, TranslationMap> = {
    'international-transport': { pl: 'Organizujemy pilny międzynarodowy transport zwłok i sprowadzenie ciała do Polski dla rodzin mieszkających w kraju i za granicą.', en: 'We organise urgent international body transport and repatriation to Poland for families in Poland and abroad.', de: 'Wir organisieren dringende internationale Überführungen nach Polen für Familien in Polen und im Ausland.', fr: 'Nous organisons en urgence le transport funéraire international vers la Pologne.', nl: 'Wij organiseren met spoed internationaal vervoer van overledenen naar Polen.', it: 'Organizziamo con urgenza il trasporto funebre internazionale verso la Polonia.' },
    'repatriation-to-poland': { pl: 'Ta usługa skupia się na pełnym sprowadzeniu zmarłego do Polski: od kontaktu z zagraniczną placówką po przygotowanie do pochówku w kraju.', en: 'This service focuses on full repatriation to Poland, from the first call with the foreign institution to preparation for burial in Poland.', de: 'Diese Leistung umfasst die vollständige Überführung nach Polen, vom ersten Kontakt bis zur Vorbereitung der Bestattung.', fr: 'Ce service couvre tout le rapatriement vers la Pologne, du premier contact jusqu’à la préparation des obsèques.', nl: 'Deze dienst omvat de volledige repatriëring naar Polen, van het eerste contact tot de voorbereiding van de uitvaart.', it: 'Questo servizio copre l’intero rimpatrio in Polonia, dal primo contatto fino alla preparazione delle esequie.' },
    'european-transport': { pl: 'Najmocniej działamy na kierunkach europejskich, gdzie liczy się szybkie działanie, dobra logistyka i znajomość procedur.', en: 'Our strongest market is European transport, where speed, logistics and procedural knowledge matter most.', de: 'Unser Schwerpunkt liegt auf europäischen Überführungen, bei denen Schnelligkeit und Logistik entscheidend sind.', fr: 'Notre spécialité couvre l’Europe, où la rapidité et la maîtrise des procédures sont essentielles.', nl: 'Onze sterkste dienstverlening betreft vervoer binnen Europa, waar snelheid en logistiek het belangrijkst zijn.', it: 'Il nostro punto di forza è il trasporto in Europa, dove contano rapidità e logistica.' },
    'air-transport': { pl: 'Przy większych odległościach lub trudnej logistyce organizujemy lotniczy transport zmarłych oraz odbiór w Polsce.', en: 'For longer distances or difficult logistics, we organise air transport of the deceased and reception in Poland.', de: 'Bei langen Distanzen oder schwieriger Logistik organisieren wir Lufttransporte und die Übernahme in Polen.', fr: 'Pour les longues distances nous organisons le transport aérien et la réception en Pologne.', nl: 'Bij grotere afstanden organiseren wij luchttransport en ontvangst in Polen.', it: 'Per le lunghe distanze organizziamo il trasporto aereo e la presa in carico in Polonia.' },
    documents: { pl: 'Dokumenty są jednym z najtrudniejszych elementów repatriacji, dlatego przejmujemy ich listę, tłumaczenia i kolejność działań.', en: 'Documents are one of the hardest parts of repatriation, so we take over the checklist, translations and order of action.', de: 'Unterlagen sind einer der schwierigsten Teile der Überführung, deshalb übernehmen wir Liste, Übersetzungen und Ablauf.', fr: 'Les documents font partie des éléments les plus délicats du rapatriement, c’est pourquoi nous prenons en charge la liste et l’ordre des démarches.', nl: 'Documenten zijn een van de lastigste onderdelen van repatriëring, daarom nemen wij de checklist en volgorde over.', it: 'I documenti sono una delle parti più delicate del rimpatrio, per questo gestiamo checklist e sequenza delle attività.' },
    contact: { pl: 'W pilnej sytuacji rodzina powinna móc zadzwonić od razu i wiedzieć, co trzeba przygotować w pierwszych minutach.', en: 'In an urgent case, the family should be able to call immediately and know what to prepare in the first minutes.', de: 'Im Notfall muss die Familie sofort anrufen können und wissen, co zuerst nötig ist.', fr: 'En situation urgente, la famille doit pouvoir appeler tout de suite et savoir quoi préparer immédiatement.', nl: 'In een urgente situatie moet de familie direct kunnen bellen en weten wat eerst nodig is.', it: 'In una situazione urgente la famiglia deve poter chiamare subito e sapere cosa preparare nei primi minuti.' },
    areas: { pl: 'Rozwijamy ofertę dla krajów i miast o największym potencjale dla transportu zmarłych do Polski.', en: 'We are building visibility around the countries and cities with the strongest demand for transport back to Poland.', de: 'Wir bauen unsere Sichtbarkeit gezielt in Ländern und Städten mit hoher Nachfrage nach Überführungen nach Polen aus.', fr: 'Nous développons la visibilité autour des pays et villes qui génèrent la plus forte demande vers la Pologne.', nl: 'Wij bouwen zichtbaarheid op rond landen en steden met de sterkste vraag naar vervoer naar Polen.', it: 'Stiamo sviluppando la visibilità nei paesi e nelle città con la domanda più forte di trasporto verso la Polonia.' },
    faq: { pl: 'Zebraliśmy najważniejsze pytania rodzin i partnerów dotyczące repatriacji zmarłych do Polski.', en: 'We collected the most common questions from families and partners about repatriation to Poland.', de: 'Wir haben die wichtigsten Fragen von Familien und Partnern zur Überführung nach Polen zusammengestellt.', fr: 'Nous avons regroupé les questions les plus fréquentes des familles et partenaires sur le rapatriement vers la Pologne.', nl: 'Wij hebben de belangrijkste vragen van families en partners over repatriëring naar Polen verzameld.', it: 'Abbiamo raccolto le domande più frequenti di famiglie e partner sul rimpatrio in Polonia.' },
  }
  return map[key][locale]
}

function serviceSections(locale: InternationalLocale, key: ServiceKey) {
  const labels = localeConfig[locale].labels
  return [
    {
      title: labels.procedures,
      paragraphs: [
        {
          pl: 'Po pierwszym kontakcie ustalamy kraj, miasto, miejsce odbioru, status dokumentów i to, czy szybszy będzie transport drogowy czy lotniczy.',
          en: 'After the first call, we establish the country, city, pickup point, document status and whether road or air transport will be faster.',
          de: 'Nach dem ersten Kontakt klären wir Land, Stadt, Abholort, Dokumentenstatus und ob Straßen- oder Lufttransport schneller ist.',
          fr: 'Après le premier contact, nous vérifions le pays, la ville, le lieu de prise en charge, le statut des documents et le meilleur mode de transport.',
          nl: 'Na het eerste contact bepalen wij land, stad, ophaalpunt, documentstatus en of weg- of luchttransport sneller is.',
          it: 'Dopo il primo contatto definiamo paese, città, luogo di ritiro, stato dei documenti e se sia più rapido il trasporto su strada o aereo.',
        }[locale],
      ],
      list: [
        {
          pl: 'odbiór zmarłego ze szpitala, prosektorium lub domu pogrzebowego',
          en: 'pickup from a hospital, mortuary or funeral home',
          de: 'Abholung aus Krankenhaus, Leichenhalle oder Bestattungsinstitut',
          fr: 'prise en charge depuis l’hôpital, le funérarium ou l’entreprise funéraire',
          nl: 'ophaling uit ziekenhuis, mortuarium of uitvaartcentrum',
          it: 'ritiro da ospedale, obitorio o impresa funebre',
        }[locale],
        {
          pl: 'kontakt z urzędem, tłumaczem i zagraniczną placówką',
          en: 'coordination with authorities, translators and the foreign institution',
          de: 'Abstimmung mit Behörden, Übersetzern und der ausländischen Einrichtung',
          fr: 'coordination avec les autorités, traducteurs et l’établissement étranger',
          nl: 'afstemming met autoriteiten, vertalers en de buitenlandse instelling',
          it: 'coordinamento con autorità, traduttori e struttura estera',
        }[locale],
        {
          pl: 'przekazanie zmarłego do pochówku lub kremacji w Polsce',
          en: 'handover for burial or cremation in Poland',
          de: 'Übergabe für Bestattung oder Kremation in Polen',
          fr: 'remise pour inhumation ou crémation en Pologne',
          nl: 'overdracht voor begrafenis of crematie in Polen',
          it: 'consegna per sepoltura o cremazione in Polonia',
        }[locale],
      ],
    },
    {
      title: labels.documents,
      paragraphs: [serviceIntro(locale, key)],
      list: [
        {
          pl: 'akt zgonu lub lokalny dokument urzędowy',
          en: 'death certificate or local civil document',
          de: 'Sterbeurkunde oder örtliches Standesamtsdokument',
          fr: 'acte de décès ou document d’état civil',
          nl: 'overlijdensakte of burgerlijk document',
          it: 'atto di morte o documento anagrafico locale',
        }[locale],
        {
          pl: 'dokument wydania ciała lub urny',
          en: 'body or urn release document',
          de: 'Freigabedokument für den Leichnam oder die Urne',
          fr: 'document de remise du corps ou de l’urne',
          nl: 'vrijgave van lichaam of urn',
          it: 'documento di rilascio della salma o dell’urna',
        }[locale],
        {
          pl: 'pełnomocnictwo rodziny oraz dane odbiorcy w Polsce',
          en: 'family authorisation and recipient details in Poland',
          de: 'Vollmacht der Familie und Daten des Empfängers in Polen',
          fr: 'procuration de la famille et coordonnées du destinataire en Pologne',
          nl: 'machtiging van de familie en gegevens van de ontvanger in Polen',
          it: 'delega della famiglia e dati del referente in Polonia',
        }[locale],
      ],
    },
    {
      title: labels.support,
      paragraphs: [
        {
          pl: 'Rodzina nie musi samodzielnie prowadzić wielu stresujących rozmów w obcym języku. Przejmujemy komunikację, listę dokumentów i kolejność działań.',
          en: 'The family does not need to manage multiple stressful calls in a foreign language. We take over communication, the document checklist and the order of action.',
          de: 'Die Familie muss nicht selbst mehrere belastende Gespräche in einer Fremdsprache führen. Wir übernehmen Kommunikation, Unterlagenliste und Ablauf.',
          fr: 'La famille n’a pas besoin de gérer seule plusieurs échanges stressants dans une langue étrangère. Nous prenons en charge la communication et l’ordre des démarches.',
          nl: 'De familie hoeft niet zelf meerdere stressvolle gesprekken in een vreemde taal te voeren. Wij nemen communicatie en documentvolgorde over.',
          it: 'La famiglia non deve affrontare da sola numerose telefonate stressanti in lingua straniera. Ci occupiamo noi della comunicazione e della sequenza dei documenti.',
        }[locale],
      ],
    },
    {
      title: labels.timing,
      paragraphs: [
        {
          pl: 'Na wielu kierunkach europejskich możemy działać ekspresowo, bo dysponujemy własnym busem i prowadzimy transport non stop. Ostateczny czas zależy od miejsca zgonu, wydania dokumentów i wybranej formy przewozu.',
          en: 'On many European routes we can move fast because we operate our own specialised vehicle and work non-stop. Final timing depends on the place of death, document release and the chosen transport mode.',
          de: 'Auf vielen europäischen Strecken können wir schnell handeln, weil wir über ein eigenes Spezialfahrzeug verfügen und rund um die Uhr arbeiten. Die endgültige Dauer hängt von Ort, Unterlagen und Transportform ab.',
          fr: 'Sur de nombreuses routes européennes nous pouvons intervenir rapidement grâce à notre propre véhicule spécialisé et à notre disponibilité continue. Le délai final dépend du lieu, des documents et du mode de transport.',
          nl: 'Op veel Europese routes kunnen wij snel handelen omdat wij over een eigen gespecialiseerd voertuig beschikken en non-stop werken. De uiteindelijke tijd hangt af van locatie, documenten en vervoersvorm.',
          it: 'Su molte tratte europee possiamo intervenire rapidamente perché disponiamo di un nostro mezzo specializzato e lavoriamo senza sosta. Il tempo finale dipende dal luogo, dai documenti e dalla modalità di trasporto.',
        }[locale],
      ],
    },
  ]
}

function serviceFaq(locale: InternationalLocale): FAQItem[] {
  return [
    {
      question: {
        pl: 'Czy usługa jest dostępna 24/7?',
        en: 'Is the service available 24/7?',
        de: 'Ist die Leistung rund um die Uhr verfügbar?',
        fr: 'Le service est-il disponible 24/7 ?',
        nl: 'Is de service 24/7 beschikbaar?',
        it: 'Il servizio è disponibile 24/7?',
      }[locale],
      answer: {
        pl: 'Tak. Pilne zgłoszenia przyjmujemy całą dobę i od razu wskazujemy, jakie dane oraz dokumenty będą potrzebne.',
        en: 'Yes. We take urgent calls around the clock and explain immediately which details and documents are needed first.',
        de: 'Ja. Dringende Meldungen nehmen wir rund um die Uhr an und erklären sofort, welche Daten und Unterlagen zuerst nötig sind.',
        fr: 'Oui. Nous recevons les demandes urgentes 24/7 et indiquons dès le premier contact les éléments nécessaires.',
        nl: 'Ja. Wij nemen spoedmeldingen dag en nacht aan en leggen direct uit welke gegevens en documenten eerst nodig zijn.',
        it: 'Sì. Riceviamo richieste urgenti 24 ore su 24 e indichiamo subito quali dati e documenti servono.',
      }[locale],
    },
    {
      question: {
        pl: 'Czy pomagacie bezpośrednio rodzinie?',
        en: 'Do you work directly with families?',
        de: 'Arbeiten Sie direkt mit Familien?',
        fr: 'Travaillez-vous directement avec les familles ?',
        nl: 'Werkt u rechtstreeks met families?',
        it: 'Lavorate direttamente con le famiglie?',
      }[locale],
      answer: {
        pl: 'Tak. Obsługujemy rodziny indywidualne, a także możemy działać jako partner dla innych zakładów, ubezpieczycieli i instytucji.',
        en: 'Yes. We serve private families and can also act as a partner for funeral homes, insurers and institutions.',
        de: 'Ja. Wir betreuen Familien direkt und können zugleich als Partner für Bestatter, Versicherer und Institutionen handeln.',
        fr: 'Oui. Nous accompagnons directement les familles et pouvons aussi agir comme partenaire pour les pompes funèbres, assureurs et institutions.',
        nl: 'Ja. Wij begeleiden particuliere families en kunnen ook optreden als partner voor uitvaartondernemers, verzekeraars en instellingen.',
        it: 'Sì. Assistiamo direttamente le famiglie e possiamo anche operare come partner per imprese funebri, assicuratori e istituzioni.',
      }[locale],
    },
  ]
}

function quickFacts(locale: InternationalLocale) {
  return [
    {
      pl: 'Transport krajowy, europejski i dalsze kierunki międzynarodowe',
      en: 'Domestic, European and further international transport',
      de: 'Nationaler, europäischer und weiterer internationaler Transport',
      fr: 'Transport national, européen et international élargi',
      nl: 'Binnenlands, Europees en verder internationaal vervoer',
      it: 'Trasporto nazionale, europeo e internazionale',
    }[locale],
    {
      pl: 'Własny specjalistyczny bus i koordynacja lotnicza',
      en: 'Own specialised vehicle and air coordination',
      de: 'Eigenes Spezialfahrzeug und Lufttransport-Koordination',
      fr: 'Véhicule spécialisé et coordination aérienne',
      nl: 'Eigen gespecialiseerd voertuig en luchtcoördinatie',
      it: 'Mezzo specializzato e coordinamento aereo',
    }[locale],
    {
      pl: 'Obsługa rodzin, zakładów i instytucji',
      en: 'Support for families, funeral homes and institutions',
      de: 'Betreuung von Familien, Bestattern und Institutionen',
      fr: 'Accompagnement des familles, entreprises funéraires et institutions',
      nl: 'Ondersteuning voor families, uitvaartondernemers en instellingen',
      it: 'Assistenza per famiglie, imprese funebri e istituzioni',
    }[locale],
  ]
}

function trustSignals(locale: InternationalLocale) {
  const labels = localeConfig[locale].labels
  return [labels.trustCompany, labels.trustFamily, labels.trustPricing, labels.trustResponse]
}

function makeServicePage(locale: InternationalLocale, key: ServiceKey): InternationalResolvedPage {
  const config = localeConfig[locale]
  const slug = serviceSlugs[key][locale]
  const title = serviceNames[key][locale]
  const languageAlternates = buildAlternates(serviceSlugs[key])
  return {
    kind: 'service',
    locale,
    slugSegments: [slug],
    url: `${SITE_URL}${localePath(locale, slug)}`,
    title,
    metaTitle: `${title} | ${config.siteLabel}`,
    metaDescription: {
      pl: `${title}. Ekspresowy kontakt 24/7, własny bus, transport drogowy i lotniczy, dokumenty i wsparcie rodziny przy sprowadzeniu zmarłego do Polski.`,
      en: `${title}. Fast 24/7 contact, own specialised vehicle, road and air transport, documents and family support for repatriation to Poland.`,
      de: `${title}. Schneller 24/7 Kontakt, eigenes Spezialfahrzeug, Straßen- und Lufttransport, Unterlagen und Familienbegleitung für die Überführung nach Polen.`,
      fr: `${title}. Contact rapide 24/7, véhicule spécialisé, transport routier ou aérien, documents et accompagnement vers la Pologne.`,
      nl: `${title}. Snel 24/7 contact, eigen voertuig, weg- of luchttransport, documenten en steun voor de familie naar Polen.`,
      it: `${title}. Contatto rapido 24/7, mezzo specializzato, trasporto su strada o aereo, documenti e assistenza alla famiglia per il rimpatrio in Polonia.`,
    }[locale],
    heroEyebrow: config.siteLabel,
    heroTitle: title,
    heroSummary: serviceIntro(locale, key),
    lead: {
      pl: 'To strona usługowa zaprojektowana pod rodziny działające pod presją czasu. Ma jasno tłumaczyć procedurę, dokumenty, możliwy czas organizacji i sposób kontaktu.',
      en: 'This page is built for families under time pressure. It explains the process, required documents, realistic timing and the fastest contact path.',
      de: 'Diese Seite richtet sich an Familien unter Zeitdruck. Sie erklärt Ablauf, Unterlagen, realistische Dauer und den schnellsten Kontaktweg.',
      fr: 'Cette page est conçue pour des familles sous pression. Elle explique la procédure, les documents, les délais réalistes et le contact le plus rapide.',
      nl: 'Deze pagina is gemaakt voor families onder tijdsdruk. Zij legt procedure, documenten, timing en de snelste contactweg helder uit.',
      it: 'Questa pagina è pensata per famiglie sotto pressione. Spiega procedura, documenti, tempi realistici e il modo più rapido per contattarci.',
    }[locale],
    trustSignals: trustSignals(locale),
    quickFacts: quickFacts(locale),
    sections: serviceSections(locale, key),
    faqItems: serviceFaq(locale),
    relatedLinks: [
      { href: localePath(locale), label: config.homeTitle },
      { href: localePath(locale, serviceSlugs.documents[locale]), label: serviceNames.documents[locale] },
      { href: localePath(locale, serviceSlugs.areas[locale]), label: serviceNames.areas[locale] },
      { href: localePath(locale, serviceSlugs.contact[locale]), label: serviceNames.contact[locale] },
    ],
    breadcrumbs: [{ name: config.labels.breadcrumbsHome, url: localePath(locale) }, { name: title }],
    languageAlternates,
    schemaServiceName: title,
    languageName: config.nativeName,
    localeLabel: config.localeLabel,
    ctaTitle: {
      pl: 'Potrzebny pilny transport do Polski?',
      en: 'Need urgent transport to Poland?',
      de: 'Benötigen Sie eine dringende Überführung nach Polen?',
      fr: 'Besoin d’un transport urgent vers la Pologne ?',
      nl: 'Dringend vervoer naar Polen nodig?',
      it: 'Serve un trasporto urgente verso la Polonia?',
    }[locale],
    ctaSummary: {
      pl: 'Zadzwoń od razu. Ustalimy trasę, dokumenty, realny termin i najlepszy wariant przewozu.',
      en: 'Call us immediately. We will confirm the route, required documents, realistic timing and the best transport option.',
      de: 'Rufen Sie uns sofort an. Wir klären Route, Unterlagen, realistischen Zeitplan und die beste Transportlösung.',
      fr: 'Appelez-nous tout de suite. Nous confirmerons l’itinéraire, les documents, le délai réaliste et la meilleure option de transport.',
      nl: 'Bel ons direct. Wij bevestigen de route, documenten, realistische timing en de beste vervoersoptie.',
      it: 'Chiamateci subito. Definiremo il percorso, i documenti, i tempi realistici e la migliore soluzione di trasporto.',
    }[locale],
    formTitle: {
      pl: 'Szybkie zgłoszenie trasy',
      en: 'Quick route request',
      de: 'Schnellanfrage zur Strecke',
      fr: 'Demande rapide de trajet',
      nl: 'Snelle trajectaanvraag',
      it: 'Richiesta rapida di tratta',
    }[locale],
    formSummary: {
      pl: 'Podaj skąd ma ruszyć transport, dokąd w Polsce ma dotrzeć i numer do oddzwonienia.',
      en: 'Tell us where the transport starts, where in Poland it should arrive and the best callback number.',
      de: 'Nennen Sie Startort, Zielort in Polen und die beste Rückrufnummer.',
      fr: 'Indiquez le point de départ, la destination en Pologne et le meilleur numéro pour vous rappeler.',
      nl: 'Geef het vertrekpunt, de bestemming in Polen en het beste terugbelnummer door.',
      it: 'Indicate il punto di partenza, la destinazione in Polonia e il numero su cui richiamarvi.',
    }[locale],
  }
}

function makeCityPage(locale: InternationalLocale, key: CityKey): InternationalResolvedPage {
  const config = localeConfig[locale]
  const city = cityPages[key]
  const slug = city.citySlugs[locale]
  const cityName = city.cityNames[locale]
  return {
    kind: 'city',
    locale,
    slugSegments: [slug],
    url: `${SITE_URL}${localePath(locale, slug)}`,
    title: city.routeLabel[locale],
    metaTitle: `${city.routeLabel[locale]} | ${config.siteLabel}`,
    metaDescription: {
      pl: `${city.routeLabel[locale]}. Odbiór ze szpitala lub domu pogrzebowego, transport drogowy lub lotniczy, formalności i kontakt 24/7 bez zaliczki.`,
      en: `${city.routeLabel[locale]}. Pickup from hospital or funeral home, road or air transport, documents and 24/7 contact without upfront payment.`,
      de: `${city.routeLabel[locale]}. Abholung aus Krankenhaus oder Bestattungsinstitut, Straßen- oder Lufttransport, Unterlagen und 24/7 Kontakt ohne Vorauszahlung.`,
      fr: `${city.routeLabel[locale]}. Prise en charge à l’hôpital ou à l’entreprise funéraire, transport routier ou aérien, formalités et contact 24/7 sans avance.`,
      nl: `${city.routeLabel[locale]}. Ophaling uit ziekenhuis of uitvaartcentrum, weg- of luchttransport, documenten en 24/7 contact zonder voorschot.`,
      it: `${city.routeLabel[locale]}. Ritiro da ospedale o impresa funebre, trasporto su strada o aereo, documenti e contatto 24/7 senza anticipo.`,
    }[locale],
    heroEyebrow: config.siteLabel,
    heroTitle: city.routeLabel[locale],
    heroSummary: city.lead[locale],
    lead: {
      pl: `${cityName} to jedna z tras, które rozwijamy pod wysokointencyjne wyszukiwania w Google. Strona odpowiada na realne pytania rodziny: procedura, dokumenty, czas i kontakt.`,
      en: `${cityName} is one of the routes we are actively building for high-intent search. This page answers the real family questions: process, documents, timing and contact.`,
      de: `${cityName} gehört zu den Strecken, die wir gezielt für Suchanfragen mit hoher Abschlussabsicht ausbauen. Diese Seite beantwortet reale Fragen der Familie.`,
      fr: `${cityName} fait partie des trajets que nous développons pour des recherches à forte intention. Cette page répond aux vraies questions des familles.`,
      nl: `${cityName} is een route die wij gericht uitbouwen voor zoekopdrachten met hoge intentie. Deze pagina beantwoordt de echte vragen van families.`,
      it: `${cityName} è una delle tratte che stiamo sviluppando per ricerche ad alta intenzione. Questa pagina risponde alle domande reali della famiglia.`,
    }[locale],
    trustSignals: trustSignals(locale),
    quickFacts: [
      { pl: `Trasa: ${cityName} -> Polska`, en: `Route: ${cityName} -> Poland`, de: `Strecke: ${cityName} -> Polen`, fr: `Trajet : ${cityName} -> Pologne`, nl: `Route: ${cityName} -> Polen`, it: `Tratta: ${cityName} -> Polonia` }[locale],
      { pl: 'Możliwy transport drogowy lub lotniczy', en: 'Road or air transport possible', de: 'Straßen- oder Lufttransport möglich', fr: 'Transport routier ou aérien possible', nl: 'Weg- of luchttransport mogelijk', it: 'Trasporto su strada o aereo possibile' }[locale],
      { pl: 'Kontakt 24/7, własny bus, wsparcie formalne', en: '24/7 contact, own vehicle, document support', de: '24/7 Kontakt, eigenes Fahrzeug, Dokumentenhilfe', fr: 'Contact 24/7, véhicule spécialisé, aide aux formalités', nl: '24/7 contact, eigen voertuig, documenthulp', it: 'Contatto 24/7, mezzo specializzato, assistenza documentale' }[locale],
    ],
    sections: [
      {
        title: config.labels.procedures,
        paragraphs: [city.lead[locale]],
        list: [
          { pl: 'odbiór ze szpitala, prosektorium lub domu pogrzebowego', en: 'pickup from hospital, mortuary or funeral home', de: 'Abholung aus Krankenhaus, Leichenhalle oder Bestattungsinstitut', fr: 'prise en charge à l’hôpital, au funérarium ou chez l’entreprise funéraire', nl: 'ophaling uit ziekenhuis, mortuarium of uitvaartcentrum', it: 'ritiro da ospedale, obitorio o impresa funebre' }[locale],
          { pl: 'przygotowanie dokumentów i wybór transportu drogowego lub lotniczego', en: 'document handling and decision between road and air transport', de: 'Bearbeitung der Unterlagen und Wahl zwischen Straße und Luft', fr: 'gestion des documents et choix entre route et aérien', nl: 'documentafhandeling en keuze tussen weg of lucht', it: 'gestione dei documenti e scelta tra strada e aereo' }[locale],
          { pl: 'przekazanie zmarłego do wskazanego miejsca w Polsce', en: 'handover at the chosen place in Poland', de: 'Übergabe am gewünschten Ort in Polen', fr: 'remise au lieu choisi en Pologne', nl: 'overdracht op de gekozen locatie in Polen', it: 'consegna nel luogo indicato in Polonia' }[locale],
        ],
      },
      {
        title: {
          pl: 'Transport drogowy czy lotniczy',
          en: 'Road transport or air transport',
          de: 'Straßentransport oder Lufttransport',
          fr: 'Transport routier ou aérien',
          nl: 'Wegtransport of luchttransport',
          it: 'Trasporto su strada o aereo',
        }[locale],
        paragraphs: [
          {
            pl: `${cityName} to trasa, na której często można działać bardzo sprawnie drogowo. Jeśli presja czasu lub formalności tego wymagają, analizujemy także wariant lotniczy.`,
            en: `${cityName} is a route that often works very well by road. If time pressure or local formalities require it, we also analyse an air option.`,
            de: `${cityName} ist eine Strecke, die sich oft sehr gut per Straße organisieren lässt. Wenn Zeitdruck oder lokale Formalitäten es verlangen, prüfen wir auch den Luftweg.`,
            fr: `${cityName} est une route souvent efficace par la route. Si le délai ou les formalités l’exigent, nous analysons également une solution aérienne.`,
            nl: `${cityName} is een traject dat vaak goed over de weg kan worden georganiseerd. Als tijdsdruk of formaliteiten dat vereisen, bekijken wij ook een luchtoptie.`,
            it: `${cityName} è una tratta che spesso si presta bene al trasporto su strada. Se i tempi o le formalità lo richiedono, valutiamo anche la via aerea.`,
          }[locale],
        ],
      },
      {
        title: config.labels.documents,
        paragraphs: [
          {
            pl: `Najważniejsze formalności przy sprowadzeniu zmarłego z ${city.countryNames[locale]} do Polski ustalamy indywidualnie, ale zwykle zaczynamy od poniższych dokumentów.`,
            en: `The key documents for bringing a deceased person from ${city.countryNames[locale]} to Poland are checked case by case, but we usually start with the list below.`,
            de: `Die wichtigsten Unterlagen für eine Überführung aus ${city.countryNames[locale]} nach Polen prüfen wir im Einzelfall, beginnen aber meist mit folgender Liste.`,
            fr: `Les documents nécessaires depuis ${city.countryNames[locale]} vers la Pologne sont vérifiés au cas par cas, mais nous partons généralement de cette liste.`,
            nl: `De belangrijkste documenten voor overbrenging vanuit ${city.countryNames[locale]} naar Polen worden per geval gecontroleerd, maar wij starten meestal met onderstaande lijst.`,
            it: `I documenti necessari per il rimpatrio da ${city.countryNames[locale]} verso la Polonia vengono verificati caso per caso, ma di solito partiamo da questo elenco.`,
          }[locale],
        ],
        list: city.countryList.map((item) => item[locale]),
      },
      {
        title: config.labels.support,
        paragraphs: [
          {
            pl: 'Rodzina nie musi samodzielnie kontaktować się z każdą zagraniczną instytucją. Wyjaśniamy, co jest pilne, co może poczekać i jakie dokumenty przygotujemy razem.',
            en: 'The family does not need to contact every foreign institution alone. We explain what is urgent, what can wait and which documents we prepare together.',
            de: 'Die Familie muss nicht jede ausländische Institution selbst kontaktieren. Wir erklären, was dringend ist und welche Unterlagen wir gemeinsam vorbereiten.',
            fr: 'La famille n’a pas besoin de contacter seule chaque institution étrangère. Nous expliquons ce qui est urgent et quels documents nous préparons ensemble.',
            nl: 'De familie hoeft niet zelf elke buitenlandse instantie te benaderen. Wij leggen uit wat urgent is en welke documenten we samen voorbereiden.',
            it: 'La famiglia non deve contattare da sola ogni istituzione straniera. Spieghiamo cosa è urgente e quali documenti prepariamo insieme.',
          }[locale],
        ],
      },
      {
        title: config.labels.timing,
        paragraphs: [
          {
            pl: `Przy trasie ${cityName} -> Polska zwykle da się działać szybko, ale finalny termin zależy od czasu wydania dokumentów przez placówkę, odległości do miejsca pochówku i ewentualnej potrzeby lotu. Działamy non stop i ekspresowo, gdy tylko formalności pozwalają ruszyć.`,
            en: `On the ${cityName} -> Poland route, transport can usually be organised quickly, but the final timeline depends on document release, distance and whether a flight is required. We work non-stop and move fast as soon as the paperwork allows.`,
            de: `Auf der Strecke ${cityName} -> Polen kann die Überführung meist schnell organisiert werden, der genaue Termin hängt jedoch von der Freigabe der Unterlagen, der Entfernung und einem möglichen Flug ab. Wir arbeiten nonstop und reagieren schnell.`,
            fr: `Sur l’axe ${cityName} -> Pologne, l’organisation peut souvent être rapide, mais le délai final dépend de la remise des documents, de la distance et d’un éventuel vol. Nous travaillons sans interruption et avançons dès que possible.`,
            nl: `Op de route ${cityName} -> Polen kan het transport meestal snel worden georganiseerd, maar de uiteindelijke planning hangt af van de vrijgave van documenten, de afstand en een eventuele vlucht. Wij werken non-stop en schakelen snel.`,
            it: `Sulla tratta ${cityName} -> Polonia il trasporto può spesso essere organizzato rapidamente, ma i tempi finali dipendono dal rilascio dei documenti, dalla distanza e dall’eventuale necessità di un volo. Lavoriamo senza sosta e partiamo appena possibile.`,
          }[locale],
        ],
      },
    ],
    faqItems: [
      {
        question: { pl: `Czy organizujecie odbiór ciała bezpośrednio w ${cityName}?`, en: `Can you arrange direct pickup in ${cityName}?`, de: `Können Sie die direkte Abholung in ${cityName} organisieren?`, fr: `Pouvez-vous organiser une prise en charge directe à ${cityName} ?`, nl: `Kunt u directe ophaling in ${cityName} regelen?`, it: `Potete organizzare il ritiro diretto a ${cityName}?` }[locale],
        answer: { pl: 'Tak. Odbieramy ciało lub urnę ze szpitala, prosektorium, lotniska albo domu pogrzebowego po wcześniejszym ustaleniu formalności.', en: 'Yes. We can collect the body or urn from a hospital, mortuary, airport or funeral home once the formalities are confirmed.', de: 'Ja. Nach Klärung der Formalitäten holen wir den Leichnam oder die Urne aus Krankenhaus, Leichenhalle, Flughafen oder Bestattungsinstitut ab.', fr: 'Oui. Nous pouvons prendre en charge le corps ou l’urne à l’hôpital, au funérarium, à l’aéroport ou chez l’entreprise funéraire une fois les formalités validées.', nl: 'Ja. Wij kunnen het lichaam of de urn ophalen uit ziekenhuis, mortuarium, luchthaven of uitvaartcentrum zodra de formaliteiten zijn bevestigd.', it: 'Sì. Possiamo ritirare la salma o l’urna da ospedale, obitorio, aeroporto o impresa funebre dopo la conferma delle formalità.' }[locale],
      },
      {
        question: { pl: `Czy możliwy jest ekspresowy transport ${cityName} -> Polska?`, en: `Is express transport ${cityName} -> Poland possible?`, de: `Ist ein Express-Transport ${cityName} -> Polen möglich?`, fr: `Un transport express ${cityName} -> Pologne est-il possible ?`, nl: `Is expresvervoer ${cityName} -> Polen mogelijk?`, it: `È possibile un trasporto espresso ${cityName} -> Polonia?` }[locale],
        answer: { pl: 'Tak, jeśli dokumenty i wydanie przez placówkę są gotowe. Działamy non stop, dlatego przy wielu trasach europejskich możemy ruszyć bardzo szybko.', en: 'Yes, if the documents and release are ready. We operate non-stop, so on many European routes we can move very quickly.', de: 'Ja, wenn Unterlagen und Freigabe vorliegen. Wir arbeiten nonstop und können auf vielen europäischen Strecken sehr schnell starten.', fr: 'Oui, si les documents et la remise sont prêts. Nous travaillons sans interruption et pouvons avancer très vite sur de nombreuses routes européennes.', nl: 'Ja, als documenten en vrijgave gereed zijn. Wij werken non-stop en kunnen op veel Europese routes zeer snel vertrekken.', it: 'Sì, se documenti e rilascio sono pronti. Lavoriamo senza sosta e su molte tratte europee possiamo partire molto rapidamente.' }[locale],
      },
    ],
    relatedLinks: [
      { href: localePath(locale), label: config.homeTitle },
      { href: localePath(locale, serviceSlugs['international-transport'][locale]), label: serviceNames['international-transport'][locale] },
      { href: localePath(locale, serviceSlugs.documents[locale]), label: serviceNames.documents[locale] },
      { href: localePath(locale, serviceSlugs.contact[locale]), label: serviceNames.contact[locale] },
    ],
    breadcrumbs: [{ name: config.labels.breadcrumbsHome, url: localePath(locale) }, { name: cityName }],
    languageAlternates: buildAlternates(city.citySlugs),
    schemaServiceName: city.routeLabel[locale],
    languageName: config.nativeName,
    localeLabel: config.localeLabel,
    ctaTitle: { pl: `Potrzebny pilny transport z ${cityName}?`, en: `Need urgent transport from ${cityName}?`, de: `Benötigen Sie eine dringende Überführung aus ${cityName}?`, fr: `Besoin d’un transport urgent depuis ${cityName} ?`, nl: `Dringend vervoer vanuit ${cityName} nodig?`, it: `Serve un trasporto urgente da ${cityName}?` }[locale],
    ctaSummary: { pl: 'Zadzwoń od razu. Ustalimy realny termin, listę dokumentów i najlepszą trasę do Polski.', en: 'Call us immediately. We will confirm realistic timing, the document list and the best route to Poland.', de: 'Rufen Sie uns sofort an. Wir bestätigen den realistischen Zeitplan, die Unterlagen und die beste Route nach Polen.', fr: 'Appelez-nous tout de suite. Nous confirmerons le délai réaliste, les documents et la meilleure route vers la Pologne.', nl: 'Bel ons direct. Wij bevestigen de realistische planning, documenten en de beste route naar Polen.', it: 'Chiamateci subito. Confermeremo tempi realistici, documenti e la migliore tratta verso la Polonia.' }[locale],
    formTitle: { pl: `Zgłoszenie transportu z ${cityName}`, en: `Request transport from ${cityName}`, de: `Transportanfrage aus ${cityName}`, fr: `Demande de transport depuis ${cityName}`, nl: `Transportaanvraag vanuit ${cityName}`, it: `Richiesta di trasporto da ${cityName}` }[locale],
    formSummary: { pl: 'Podaj miejsce odbioru, miasto docelowe w Polsce i telefon do oddzwonienia.', en: 'Share the pickup address, destination city in Poland and your callback number.', de: 'Nennen Sie Abholadresse, Zielort in Polen und Ihre Rückrufnummer.', fr: 'Indiquez l’adresse de prise en charge, la ville de destination en Pologne et votre numéro.', nl: 'Geef het ophaaladres, de bestemming in Polen en uw terugbelnummer door.', it: 'Indicate indirizzo di ritiro, città di destinazione in Polonia e numero per il ricontatto.' }[locale],
  }
}

function makeHomePage(locale: InternationalLocale): InternationalResolvedPage {
  const config = localeConfig[locale]
  return {
    kind: 'home',
    locale,
    slugSegments: [],
    url: `${SITE_URL}${localePath(locale)}`,
    title: config.homeTitle,
    metaTitle: `${config.homeTitle} | ${config.siteLabel}`,
    metaDescription: config.homeDescription,
    heroEyebrow: config.siteLabel,
    heroTitle: config.homeTitle,
    heroSummary: config.homeDescription,
    lead: {
      pl: 'To wielojęzyczny hub usługowy zbudowany pod międzynarodowe zapytania high-intent dotyczące transportu zmarłych do Polski.',
      en: 'This is a multilingual service hub built for high-intent international queries around bringing the deceased back to Poland.',
      de: 'Dies ist ein mehrsprachiger Service-Hub für internationale Suchanfragen mit hoher Abschlussabsicht rund um die Überführung nach Polen.',
      fr: 'Il s’agit d’un hub multilingue pensé pour les recherches internationales à forte intention autour du rapatriement vers la Pologne.',
      nl: 'Dit is een meertalige servicehub voor internationale zoekopdrachten met hoge intentie rond vervoer van overledenen naar Polen.',
      it: 'Questo è un hub di servizio multilingue pensato per ricerche internazionali ad alta intenzione sul rimpatrio verso la Polonia.',
    }[locale],
    trustSignals: trustSignals(locale),
    quickFacts: quickFacts(locale),
    sections: [
      ...serviceSections(locale, 'international-transport'),
      {
        title: {
          pl: 'Priorytetowe kraje i miasta pierwszego rollout’u',
          en: 'Priority countries and cities for the first rollout',
          de: 'Priorisierte Länder und Städte für den ersten Rollout',
          fr: 'Pays et villes prioritaires du premier déploiement',
          nl: 'Prioritaire landen en steden voor de eerste uitrol',
          it: 'Paesi e città prioritari per il primo rollout',
        }[locale],
        paragraphs: [
          {
            pl: 'Skupiamy się na rynkach o największej liczbie Polaków, wysokiej sile nabywczej i dobrych warunkach do transportu drogowego lub lotniczego.',
            en: 'We focus on markets with large Polish communities, strong purchasing power and good conditions for road or air transport.',
            de: 'Wir konzentrieren uns auf Märkte mit großer polnischer Gemeinschaft, hoher Kaufkraft und guten Bedingungen für Straße oder Luft.',
            fr: 'Nous ciblons les marchés avec une forte communauté polonaise, un bon pouvoir d’achat et de bonnes conditions logistiques.',
            nl: 'Wij richten ons op markten met een grote Poolse gemeenschap, sterke koopkracht en goede logistieke voorwaarden.',
            it: 'Ci concentriamo sui mercati con una grande comunità polacca, buona capacità di spesa e condizioni logistiche favorevoli.',
          }[locale],
        ],
        list: rolloutPriorities,
      },
    ],
    faqItems: serviceFaq(locale),
    relatedLinks: [
      { href: localePath(locale, serviceSlugs['international-transport'][locale]), label: serviceNames['international-transport'][locale] },
      { href: localePath(locale, serviceSlugs['repatriation-to-poland'][locale]), label: serviceNames['repatriation-to-poland'][locale] },
      { href: localePath(locale, serviceSlugs.areas[locale]), label: serviceNames.areas[locale] },
      { href: localePath(locale, cityPages.munich.citySlugs[locale]), label: cityPages.munich.routeLabel[locale] },
      { href: localePath(locale, cityPages.paris.citySlugs[locale]), label: cityPages.paris.routeLabel[locale] },
      { href: localePath(locale, serviceSlugs.contact[locale]), label: serviceNames.contact[locale] },
    ],
    breadcrumbs: [{ name: config.labels.breadcrumbsHome }],
    languageAlternates: INTERNATIONAL_LOCALES.reduce((acc, current) => {
      acc[current] = localePath(current)
      return acc
    }, {} as Record<InternationalLocale, string>),
    schemaServiceName: config.homeTitle,
    languageName: config.nativeName,
    localeLabel: config.localeLabel,
    ctaTitle: {
      pl: 'Pilny transport z zagranicy do Polski?',
      en: 'Urgent repatriation to Poland?',
      de: 'Dringende Überführung nach Polen?',
      fr: 'Rapatriement urgent vers la Pologne ?',
      nl: 'Dringende repatriëring naar Polen?',
      it: 'Rimpatrio urgente verso la Polonia?',
    }[locale],
    ctaSummary: {
      pl: 'Zadzwoń lub napisz na WhatsApp. W kilka minut określimy najbliższy plan działania.',
      en: 'Call or message us on WhatsApp. Within minutes we will define the first action plan.',
      de: 'Rufen Sie an oder schreiben Sie per WhatsApp. Innerhalb weniger Minuten klären wir den ersten Handlungsplan.',
      fr: 'Appelez-nous ou écrivez sur WhatsApp. En quelques minutes nous définirons le premier plan d’action.',
      nl: 'Bel of stuur een WhatsApp. Binnen enkele minuten bepalen wij het eerste actieplan.',
      it: 'Chiamateci o scriveteci su WhatsApp. In pochi minuti definiamo il primo piano d’azione.',
    }[locale],
    formTitle: {
      pl: 'Szybkie zgłoszenie transportu',
      en: 'Urgent transport request',
      de: 'Dringende Transportanfrage',
      fr: 'Demande urgente',
      nl: 'Spoedaanvraag transport',
      it: 'Richiesta urgente di trasporto',
    }[locale],
    formSummary: {
      pl: 'W zgłoszeniu podaj kraj, miasto, miejsce odbioru i numer telefonu. Skontaktujemy się najszybciej jak się da.',
      en: 'In your request, share the country, city, pickup point and callback number. We will contact you as fast as possible.',
      de: 'Bitte nennen Sie Land, Stadt, Abholort und Rückrufnummer. Wir melden uns so schnell wie möglich.',
      fr: 'Indiquez le pays, la ville, le lieu de prise en charge et votre numéro. Nous vous recontacterons au plus vite.',
      nl: 'Vermeld land, stad, ophaalpunt en terugbelnummer. Wij nemen zo snel mogelijk contact op.',
      it: 'Indicate paese, città, luogo di ritiro e numero di telefono. Vi ricontatteremo il prima possibile.',
    }[locale],
  }
}

export function getInternationalPage(locale: InternationalLocale, slugSegments?: string[]): InternationalResolvedPage | null {
  if (!INTERNATIONAL_LOCALES.includes(locale)) return null
  if (!slugSegments || slugSegments.length === 0) return makeHomePage(locale)

  const slug = slugSegments.join('/')
  const serviceKey = (Object.keys(serviceSlugs) as ServiceKey[]).find((key) => serviceSlugs[key][locale] === slug)
  if (serviceKey) return makeServicePage(locale, serviceKey)

  const cityKey = (Object.keys(cityPages) as CityKey[]).find((key) => cityPages[key].citySlugs[locale] === slug)
  if (cityKey) return makeCityPage(locale, cityKey)

  return null
}

export function buildInternationalMetadata(page: InternationalResolvedPage): Metadata {
  const localeSettings = localeConfig[page.locale]
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: page.url,
      languages: {
        ...page.languageAlternates,
        'x-default': page.kind === 'home' ? '/pl' : page.languageAlternates.pl,
      },
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: page.url,
      siteName: 'Nekrolog Łódź',
      locale: localeSettings.ogLocale,
      type: 'website',
      images: [{ url: '/lovable-uploads/cross.png', width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: ['/lovable-uploads/cross.png'],
    },
    robots: { index: true, follow: true },
  }
}

export function getInternationalStaticParams() {
  const params: Array<{ locale: InternationalLocale; slug?: string[] }> = []
  for (const locale of INTERNATIONAL_LOCALES) {
    params.push({ locale })
    for (const key of Object.keys(serviceSlugs) as ServiceKey[]) params.push({ locale, slug: [serviceSlugs[key][locale]] })
    for (const key of Object.keys(cityPages) as CityKey[]) params.push({ locale, slug: [cityPages[key].citySlugs[locale]] })
  }
  return params
}

export function getInternationalSitemapEntries(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  for (const locale of INTERNATIONAL_LOCALES) {
    const home = makeHomePage(locale)
    entries.push({ url: home.url, lastModified: new Date('2026-03-30T12:00:00Z'), changeFrequency: 'weekly', priority: locale === 'pl' ? 0.95 : 0.85, alternates: { languages: { ...home.languageAlternates, 'x-default': `${SITE_URL}/pl` } } })
    for (const key of Object.keys(serviceSlugs) as ServiceKey[]) {
      const page = makeServicePage(locale, key)
      entries.push({ url: page.url, lastModified: new Date('2026-03-30T12:00:00Z'), changeFrequency: 'weekly', priority: key === 'international-transport' || key === 'repatriation-to-poland' ? 0.9 : 0.78, alternates: { languages: { ...page.languageAlternates, 'x-default': `${SITE_URL}${page.languageAlternates.pl}` } } })
    }
    for (const key of Object.keys(cityPages) as CityKey[]) {
      const page = makeCityPage(locale, key)
      entries.push({ url: page.url, lastModified: new Date('2026-03-30T12:00:00Z'), changeFrequency: 'weekly', priority: 0.82, alternates: { languages: { ...page.languageAlternates, 'x-default': `${SITE_URL}${page.languageAlternates.pl}` } } })
    }
  }
  return entries
}

export function buildInternationalOrganizationSchema(locale: InternationalLocale, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/FuneralHome',
    '@id': `${SITE_URL}/#international-repatriation`,
    name: BUSINESS_INFO.legalName,
    url: pageUrl,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    sameAs: BUSINESS_INFO.sameAs,
    priceRange: BUSINESS_INFO.priceRange,
    image: `${SITE_URL}${BUSINESS_INFO.imagePath}`,
    foundingDate: String(BUSINESS_INFO.foundedYear),
    slogan: {
      pl: 'Międzynarodowy transport zwłok do Polski bez zaliczki',
      en: 'International repatriation to Poland without upfront payment',
      de: 'Internationale Überführung nach Polen ohne Vorauszahlung',
      fr: 'Rapatriement vers la Pologne sans avance',
      nl: 'Internationaal vervoer naar Polen zonder voorschot',
      it: 'Rimpatrio in Polonia senza anticipo',
    }[locale],
    address: { '@type': 'PostalAddress', streetAddress: BUSINESS_INFO.address.streetAddress, addressLocality: BUSINESS_INFO.address.addressLocality, postalCode: BUSINESS_INFO.address.postalCode, addressCountry: 'PL' },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS_INFO.geo.latitude, longitude: BUSINESS_INFO.geo.longitude },
    areaServed: ['Poland', 'Germany', 'France', 'Netherlands', 'Belgium', 'Austria', 'Italy', 'United Kingdom', 'Ireland', 'Norway', 'Sweden'],
    availableLanguage: INTERNATIONAL_LOCALES,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: BUSINESS_INFO.ratingValue, reviewCount: BUSINESS_INFO.reviewCount, bestRating: 5, worstRating: 1 },
  }
}

export function buildInternationalWhatsappLink(page: InternationalResolvedPage) {
  const message = encodeURIComponent({
    pl: `Potrzebuję pilnej pomocy przy transporcie zmarłego do Polski. ${page.url}`,
    en: `I need urgent help with repatriation to Poland. ${page.url}`,
    de: `Ich benötige dringend Hilfe bei einer Überführung nach Polen. ${page.url}`,
    fr: `J’ai besoin d’une aide urgente pour un rapatriement vers la Pologne. ${page.url}`,
    nl: `Ik heb met spoed hulp nodig bij repatriëring naar Polen. ${page.url}`,
    it: `Ho bisogno urgente di aiuto per un rimpatrio in Polonia. ${page.url}`,
  }[page.locale])
  return `https://wa.me/48602274661?text=${message}`
}
