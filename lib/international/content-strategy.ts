export type PageTemplateType = 'service' | 'country' | 'city' | 'route' | 'procedural-faq'

export interface ContentTemplate {
  pageType: PageTemplateType
  intent: string
  h1Pattern: string[]
  titlePattern: string[]
  metaDescriptionPattern: string[]
  heroStructure: string[]
  mainSections: string[]
  ctaPlacements: string[]
  faqStructure: string[]
  internalLinkTargets: string[]
  trustSections: string[]
  suggestedSchema: string[]
}

export interface ContentRelationship {
  sourceType: PageTemplateType | 'hub'
  targetType: PageTemplateType | 'hub'
  reason: string
}

export interface ReusableSection {
  id: string
  name: string
  purpose: string
  requiredInputs: string[]
  uniquenessLevers: string[]
}

export interface ContentBrief {
  slug: string
  pageType: PageTemplateType | 'hub'
  rollout: 'rollout-1' | 'rollout-2'
  language: string
  primaryIntent: string
  primaryKeyword: string
  secondaryKeywords: string[]
  audience: string
  countryContext?: string
  cityContext?: string
  routeContext?: string
  requiredSections: string[]
  requiredTrustElements: string[]
  ctaGoal: string
  internalLinksToInclude: string[]
  faqQuestions: string[]
  manualNotes: string[]
  requiresManualWriting: boolean
}

export const contentTemplates: ContentTemplate[] = [
  {
    pageType: 'service',
    intent: 'User needs a trusted company to handle international transport of the deceased to Poland end to end.',
    h1Pattern: [
      'Międzynarodowy transport zwłok do Polski',
      'Sprowadzenie zmarłego do Polski z zagranicy',
      'Transport lotniczy zmarłych do Polski',
    ],
    titlePattern: [
      '{Usługa} | 24/7, formalności i transport do Polski',
      '{Service} | 24/7 repatriation to Poland',
      '{Leistung} | Überführung nach Polen 24/7',
    ],
    metaDescriptionPattern: [
      '{Usługa}. Odbiór z placówki, dokumenty, transport drogowy lub lotniczy, szybka organizacja i kontakt 24/7. Pomoc rodzinie bez zaliczki.',
    ],
    heroStructure: [
      'eyebrow: Kontakt 24/7 / urgent service',
      'H1 with the service name',
      '2 to 3 short sentences: what we do, who we help, why the process is safe',
      'trust chips: family business 30+ years, no upfront payment, competitive pricing, own vehicle',
    ],
    mainSections: [
      'Na czym polega usługa',
      'Jak wygląda procedura krok po kroku',
      'Jakie dokumenty są potrzebne',
      'Kiedy transport drogowy, a kiedy lotniczy',
      'Co robimy za rodzinę',
      'Czas organizacji i pilne przypadki',
      'Dla jakich krajów i miast działacie',
      'FAQ',
      'Końcowy blok kontaktowy 24/7',
    ],
    ctaPlacements: [
      'above the fold',
      'after procedure section',
      'after document section',
      'sticky mobile CTA',
      'final CTA block',
    ],
    faqStructure: [
      '5 to 8 transactional questions',
      'focus on time, documents, pickup, transport mode, pricing model, urgent contact',
    ],
    internalLinkTargets: [
      'country pages',
      'formalities page',
      '24/7 contact page',
      'priority city-route pages',
      'procedural FAQ pages',
    ],
    trustSections: [
      'family business from Łódź',
      '30+ years of experience',
      '5-star reputation',
      'competitive pricing',
      'no upfront payment',
      'non-stop response',
    ],
    suggestedSchema: ['Service', 'FAQPage', 'BreadcrumbList', 'LocalBusiness on key pages'],
  },
  {
    pageType: 'country',
    intent: 'User wants to know whether the company really handles transport from a specific country and what is country-specific.',
    h1Pattern: [
      'Transport zwłok z {Kraj} do Polski',
      'Sprowadzenie zmarłego z {Kraj} do Polski',
    ],
    titlePattern: ['Transport zwłok z {Kraj} do Polski | Formalności, czas, kontakt 24/7'],
    metaDescriptionPattern: [
      'Organizujemy transport zmarłych z {Kraj} do Polski. Odbiór z placówki, dokumenty, transport drogowy lub lotniczy, pomoc rodzinie i szybki kontakt.',
    ],
    heroStructure: [
      'country-specific H1',
      '2 short sentences about local procedures and transport feasibility',
      'CTA phone + WhatsApp + trust chips',
    ],
    mainSections: [
      'Jak wygląda sprowadzenie z tego kraju do Polski',
      'Typowe miejsca odbioru w tym kraju',
      'Dokumenty wymagane w tym kraju',
      'Transport drogowy vs lotniczy z tego kraju',
      'Ile zwykle trwa organizacja',
      'Najczęstsze miasta i regiony',
      'Co robimy za rodzinę',
      'FAQ krajowe',
      'Linki do stron miast',
    ],
    ctaPlacements: ['hero', 'after documents', 'after timing', 'final CTA'],
    faqStructure: [
      '5 to 7 country-specific questions',
      'include local institutions, release documents, airport or road transfer specifics',
    ],
    internalLinkTargets: [
      'main international service',
      'city pages in this country',
      'route pages from major cities',
      'formalities page',
      'contact 24/7',
    ],
    trustSections: [
      'experience with this country',
      'pickup from local institutions',
      'clear handling of documents',
      'support in Polish and foreign-language communication',
    ],
    suggestedSchema: ['Service', 'FAQPage', 'BreadcrumbList'],
  },
  {
    pageType: 'city',
    intent: 'User searches for a specific city and wants to know whether pickup and transport are possible from there.',
    h1Pattern: [
      'Transport zwłok z {Miasto} do Polski',
      'Obsługa transportu zmarłych w {Miasto}',
    ],
    titlePattern: ['{Miasto} -> Polska | Transport zwłok i sprowadzenie zmarłego'],
    metaDescriptionPattern: [
      'Pomagamy w organizacji transportu zmarłych z {Miasto} do Polski. Odbiór z placówki, dokumenty, logistyka trasy i kontakt 24/7.',
    ],
    heroStructure: [
      'city-specific H1',
      '1 short sentence on why this city matters',
      '1 sentence on pickup and route planning',
      'strong contact CTA',
    ],
    mainSections: [
      'Obsługa transportu z miasta do Polski',
      'Odbiór ze szpitala, prosektorium lub domu pogrzebowego',
      'Jakie formalności zwykle pojawiają się w tym mieście lub regionie',
      'Kiedy wybieramy drogę, a kiedy samolot',
      'Jak wygląda przekazanie do Polski',
      'Co rodzina musi przygotować',
      'FAQ miejskie',
      'Link do strony kraju',
    ],
    ctaPlacements: ['hero', 'after pickup section', 'final CTA'],
    faqStructure: [
      '4 to 6 local questions',
      'airport, release point, urgency, family communication, transport mode',
    ],
    internalLinkTargets: ['country page', 'main service page', 'formalities page', 'contact page', 'related routes'],
    trustSections: [
      'pickup from institutions',
      'fast route planning',
      'non-stop service',
      'clear handover to Poland',
    ],
    suggestedSchema: ['Service', 'FAQPage', 'BreadcrumbList'],
  },
  {
    pageType: 'route',
    intent: 'User has the exact transport need from a specific city or country to Poland and wants the fastest possible answer.',
    h1Pattern: [
      'Transport zwłok z {Miasto} do Polski',
      'Sprowadzenie ciała z {Miasto} do Polski',
      'Repatriation of remains from {City} to Poland',
      'Überführung {Stadt} Polen',
    ],
    titlePattern: ['{Trasa} | Dokumenty, czas, kontakt 24/7'],
    metaDescriptionPattern: [
      '{Trasa}. Odbiór ciała z placówki, formalności, transport drogowy lub lotniczy, przygotowanie do przewozu i dostarczenie do Polski.',
    ],
    heroStructure: [
      'route-specific H1',
      '2 short sentences confirming this exact route is supported',
      'phone CTA, WhatsApp CTA, trust chips',
    ],
    mainSections: [
      'Opis usługi na danej trasie',
      'Odbiór ciała z placówki, prosektorium lub domu pogrzebowego',
      'Formalności',
      'Transport drogowy vs lotniczy',
      'Przygotowanie do przewozu',
      'Dostarczenie do Polski',
      'Pomoc rodzinie',
      'Kontakt 24/7',
      'FAQ zorientowane na trasę i kraj',
    ],
    ctaPlacements: [
      'hero',
      'after formalities',
      'after transport mode comparison',
      'sticky mobile CTA',
      'final CTA',
    ],
    faqStructure: [
      'route-specific questions about pickup, timing, urgent cases, urn vs body, no-upfront-payment option',
    ],
    internalLinkTargets: ['country page', 'documents page', 'air transport page', 'contact 24/7', 'related route pages'],
    trustSections: [
      'real company from Łódź',
      '30+ years',
      'competitive pricing',
      'own vehicle',
      'fast reaction',
      'family-first support',
    ],
    suggestedSchema: ['Service', 'FAQPage', 'BreadcrumbList'],
  },
  {
    pageType: 'procedural-faq',
    intent: 'User is still clarifying procedure, documents or constraints and needs practical guidance, not generic funeral advice.',
    h1Pattern: [
      'Jak sprowadzić ciało z {Kraj} do Polski',
      'Jakie dokumenty są potrzebne do transportu zwłok z {Kraj} do Polski',
      'Czy potrzebna jest trumna cynkowa',
    ],
    titlePattern: ['{Pytanie} | Praktyczny przewodnik'],
    metaDescriptionPattern: [
      'Praktyczny przewodnik: {Pytanie}. Dokumenty, formalności, transport, czas organizacji i kiedy warto zadzwonić od razu do zakładu.',
    ],
    heroStructure: [
      'question as H1',
      'short direct answer',
      'mini CTA for urgent cases',
    ],
    mainSections: [
      'Krótka odpowiedź',
      'Kiedy temat ma znaczenie praktyczne',
      'Krok po kroku',
      'Najczęstsze błędy i ryzyka',
      'Kiedy zadzwonić do zakładu',
      'Powiązane strony usługowe i trasowe',
    ],
    ctaPlacements: ['under short answer', 'after step-by-step section', 'final CTA'],
    faqStructure: ['prefer related questions block instead of FAQ-on-FAQ unless it genuinely helps'],
    internalLinkTargets: ['main service', 'country page', 'route page', 'contact page', 'related procedural pages'],
    trustSections: [
      'expert guidance',
      'calm explanation under stress',
      '24/7 support for urgent cases',
    ],
    suggestedSchema: ['Article or FAQPage when the page is visibly structured as Q&A', 'BreadcrumbList'],
  },
]

export const pageRelationships: ContentRelationship[] = [
  { sourceType: 'hub', targetType: 'service', reason: 'The international hub must push transactional users into the most important service pages.' },
  { sourceType: 'service', targetType: 'country', reason: 'Service pages should open country-specific decision paths and show operational coverage.' },
  { sourceType: 'country', targetType: 'city', reason: 'Country pages should narrow intent and expose highest-demand local markets.' },
  { sourceType: 'city', targetType: 'route', reason: 'City pages should push users into exact high-intent route pages when demand is route-specific.' },
  { sourceType: 'route', targetType: 'procedural-faq', reason: 'Route pages should resolve next-step questions without losing conversion intent.' },
  { sourceType: 'procedural-faq', targetType: 'service', reason: 'Informational intent should always route back to transactional service pages.' },
  { sourceType: 'procedural-faq', targetType: 'route', reason: 'If the question is country or route specific, link to the nearest matching route page.' },
]

export const reusableSectionInventory: ReusableSection[] = [
  {
    id: 'hero-urgent',
    name: 'Hero urgent service block',
    purpose: 'Confirm relevance fast and create immediate trust under time pressure.',
    requiredInputs: ['primary route/service name', 'target geography', 'main trust claims', 'primary CTA'],
    uniquenessLevers: ['route specificity', 'country wording', 'urgency framing', 'transport mode emphasis'],
  },
  {
    id: 'pickup-sources',
    name: 'Pickup sources section',
    purpose: 'Explain where the body or urn can be collected from and reduce practical uncertainty.',
    requiredInputs: ['institution types', 'city/country specifics', 'handover constraints'],
    uniquenessLevers: ['hospital/prosektorium/funeral home mix', 'airport handover relevance', 'local coordination details'],
  },
  {
    id: 'documents-formalities',
    name: 'Documents and formalities',
    purpose: 'Turn legal uncertainty into a concrete checklist.',
    requiredInputs: ['country rules', 'document list', 'who provides each document', 'translation needs'],
    uniquenessLevers: ['country-specific paperwork', 'consular relevance', 'release documents', 'urn vs body differences'],
  },
  {
    id: 'road-vs-air',
    name: 'Road vs air transport',
    purpose: 'Explain transport choice instead of leaving the family to guess.',
    requiredInputs: ['distance', 'airports', 'timing constraints', 'country limitations'],
    uniquenessLevers: ['road corridors', 'airport availability', 'urgency threshold', 'pricing logic'],
  },
  {
    id: 'timing-organisation',
    name: 'Timing and organisation',
    purpose: 'Set realistic expectations and show speed without making unsafe promises.',
    requiredInputs: ['document release dependencies', 'route length', 'transport mode'],
    uniquenessLevers: ['city distance to Poland', 'airport factors', 'weekend constraints', 'local release timing'],
  },
  {
    id: 'family-support',
    name: 'Family support and coordination',
    purpose: 'Show emotional and organisational relief, not just transport mechanics.',
    requiredInputs: ['what the company takes over', 'communication style', 'financial reassurance'],
    uniquenessLevers: ['foreign language support', 'remote handling', 'no-upfront-payment explanation', 'handover in Poland'],
  },
  {
    id: 'trust-proof',
    name: 'Trust proof block',
    purpose: 'Reinforce why this company is credible under stress.',
    requiredInputs: ['experience', 'family business positioning', 'reputation', 'pricing stance', 'availability'],
    uniquenessLevers: ['relevant proof for route/country', 'local fit', 'speed claim', 'special vehicle claim'],
  },
  {
    id: 'route-faq',
    name: 'Route-oriented FAQ',
    purpose: 'Answer last-mile objections before the user calls.',
    requiredInputs: ['city/country context', 'top objections', 'transport mode details'],
    uniquenessLevers: ['airport names', 'release locations', 'document specifics', 'urgent case wording'],
  },
]

export const rolloutOneBriefs: ContentBrief[] = [
  {
    slug: 'pl/miedzynarodowy-transport-zwlok',
    pageType: 'hub',
    rollout: 'rollout-1',
    language: 'pl',
    primaryIntent: 'high-intent commercial overview for international repatriation to Poland',
    primaryKeyword: 'międzynarodowy transport zwłok do Polski',
    secondaryKeywords: ['sprowadzenie ciała do Polski', 'transport zmarłych z zagranicy', 'repatriacja zmarłych do Polski'],
    audience: 'families in Poland and abroad who need urgent transport to Poland',
    requiredSections: ['hero urgent service', 'service cluster overview', 'country priorities', 'process', 'documents', 'transport modes', 'contact 24/7'],
    requiredTrustElements: ['30+ years', 'family company', 'competitive pricing', 'no upfront payment', 'non-stop service'],
    ctaGoal: 'phone call or WhatsApp within first visit',
    internalLinksToInclude: ['/pl/sprowadzenie-zmarlego-do-polski', '/pl/formalnosci-przy-sprowadzeniu-ciala-z-zagranicy', '/pl/transport-zwlok-z-monachium-do-polski', '/pl/transport-zwlok-z-paryza-do-polski', '/pl/kontakt-24-7'],
    faqQuestions: ['Czy działacie 24/7?', 'Czy można zacząć bez zaliczki?', 'Czy odbieracie ciało z placówki za granicą?', 'Kiedy wybieracie transport lotniczy?'],
    manualNotes: ['Must be written manually.', 'This is the editorial source of truth for tone and trust framing.', 'Needs strongest E-E-A-T signals.'],
    requiresManualWriting: true,
  },
  {
    slug: 'pl/transport-zwlok-z-monachium-do-polski',
    pageType: 'route',
    rollout: 'rollout-1',
    language: 'pl',
    primaryIntent: 'route-specific urgent transport need from Munich to Poland',
    primaryKeyword: 'transport zwłok z Monachium do Polski',
    secondaryKeywords: ['sprowadzenie ciała z Monachium do Polski', 'transport zmarłego z Monachium', 'repatriacja Monachium Polska'],
    audience: 'families and coordinators dealing with a death in Munich or Bavaria',
    countryContext: 'Germany',
    cityContext: 'Munich',
    routeContext: 'Munich -> Poland',
    requiredSections: ['route hero', 'pickup sources', 'documents', 'road vs air', 'preparation for transport', 'delivery to Poland', 'family support', 'route FAQ'],
    requiredTrustElements: ['pickup from hospital or funeral home', 'German paperwork understanding', 'own vehicle', 'fast non-stop response'],
    ctaGoal: 'urgent phone call',
    internalLinksToInclude: ['/pl/niemcy', '/pl/formalnosci-przy-sprowadzeniu-ciala-z-zagranicy', '/pl/transport-lotniczy-zmarlych', '/pl/kontakt-24-7'],
    faqQuestions: ['Czy odbieracie ciało bezpośrednio w Monachium?', 'Jakie dokumenty są najczęściej potrzebne?', 'Czy transport z Monachium do Polski może być ekspresowy?', 'Kiedy lepiej wybrać drogę, a kiedy samolot?'],
    manualNotes: ['Write manually first.', 'Use route-specific logistics, not generic Germany copy.', 'Mention Bavaria and Munich Airport only if contextually useful.'],
    requiresManualWriting: true,
  },
  {
    slug: 'pl/transport-zwlok-z-berlina-do-polski',
    pageType: 'route',
    rollout: 'rollout-1',
    language: 'pl',
    primaryIntent: 'route-specific urgent transport need from Berlin to Poland',
    primaryKeyword: 'transport zwłok z Berlina do Polski',
    secondaryKeywords: ['sprowadzenie ciała z Berlina do Polski', 'transport zmarłego Berlin Polska', 'repatriacja Berlin Polska'],
    audience: 'families and institutions dealing with a death in Berlin',
    countryContext: 'Germany',
    cityContext: 'Berlin',
    routeContext: 'Berlin -> Poland',
    requiredSections: ['route hero', 'pickup sources', 'documents', 'road vs air', 'timing', 'handover in Poland', 'family support', 'route FAQ'],
    requiredTrustElements: ['fast route fit', 'Berlin airport option', 'German institution coordination', '24/7 contact'],
    ctaGoal: 'phone call or WhatsApp',
    internalLinksToInclude: ['/pl/niemcy', '/pl/sprowadzenie-zmarlego-do-polski', '/pl/formalnosci-przy-sprowadzeniu-ciala-z-zagranicy', '/pl/kontakt-24-7'],
    faqQuestions: ['Czy odbieracie ciało z Berlina i okolic?', 'Ile może potrwać transport z Berlina do Polski?', 'Czy pomagacie w dokumentach po stronie niemieckiej?', 'Czy można zacząć bez zaliczki?'],
    manualNotes: ['Write manually first.', 'Lean into speed and practical access to Poland.', 'Avoid copying the Munich structure line by line.'],
    requiresManualWriting: true,
  },
  {
    slug: 'pl/transport-zwlok-z-paryza-do-polski',
    pageType: 'route',
    rollout: 'rollout-1',
    language: 'pl',
    primaryIntent: 'route-specific urgent transport need from Paris to Poland',
    primaryKeyword: 'transport zwłok z Paryża do Polski',
    secondaryKeywords: ['przewóz zmarłego z Paryża do Polski', 'sprowadzenie ciała z Francji do Polski', 'transport zwłok Paryż Polska'],
    audience: 'families and funeral coordinators handling a death in Paris or Île-de-France',
    countryContext: 'France',
    cityContext: 'Paris',
    routeContext: 'Paris -> Poland',
    requiredSections: ['route hero', 'pickup sources', 'French documents', 'road vs air', 'preparation for transport', 'handover in Poland', 'family support', 'route FAQ'],
    requiredTrustElements: ['French paperwork support', 'Paris funeral home coordination', 'air option awareness', 'clear timeline communication'],
    ctaGoal: 'urgent phone call',
    internalLinksToInclude: ['/pl/francja', '/pl/formalnosci-przy-sprowadzeniu-ciala-z-zagranicy', '/pl/transport-lotniczy-zmarlych', '/pl/kontakt-24-7'],
    faqQuestions: ['Jakie dokumenty są zwykle potrzebne we Francji?', 'Czy odbieracie z placówki w Paryżu?', 'Kiedy lepszy jest transport lotniczy z Paryża?', 'Czy pomagacie rodzinie na odległość?'],
    manualNotes: ['Write manually first.', 'Use French process logic and distance realities.', 'Do not mirror Berlin copy.'],
    requiresManualWriting: true,
  },
  {
    slug: 'pl/transport-zwlok-z-amsterdamu-do-polski',
    pageType: 'route',
    rollout: 'rollout-1',
    language: 'pl',
    primaryIntent: 'route-specific urgent transport need from Amsterdam to Poland',
    primaryKeyword: 'transport zwłok z Amsterdamu do Polski',
    secondaryKeywords: ['sprowadzenie ciała z Holandii do Polski', 'transport zmarłego Amsterdam Polska', 'repatriacja Amsterdam Polska'],
    audience: 'families and employers/contacts in the Netherlands needing transport to Poland',
    countryContext: 'Netherlands',
    cityContext: 'Amsterdam',
    routeContext: 'Amsterdam -> Poland',
    requiredSections: ['route hero', 'pickup sources', 'Dutch documents', 'road vs air', 'timing', 'delivery to Poland', 'family support', 'route FAQ'],
    requiredTrustElements: ['strong road logistics', 'clear cost logic', 'own vehicle', 'fast coordination'],
    ctaGoal: 'urgent phone call',
    internalLinksToInclude: ['/pl/holandia', '/pl/miedzynarodowy-transport-zwlok', '/pl/formalnosci-przy-sprowadzeniu-ciala-z-zagranicy', '/pl/kontakt-24-7'],
    faqQuestions: ['Czy transport z Amsterdamu do Polski najczęściej jest drogowy?', 'Jakie dokumenty są zwykle potrzebne w Holandii?', 'Czy odbieracie także urnę?', 'Czy pomagacie rodzinie mieszkającej już w Polsce?'],
    manualNotes: ['Write manually first.', 'Emphasise road transport and speed without overpromising.', 'Differentiate from Paris and Germany pages.'],
    requiresManualWriting: true,
  },
  {
    slug: 'pl/transport-zwlok-z-londynu-do-polski',
    pageType: 'route',
    rollout: 'rollout-1',
    language: 'pl',
    primaryIntent: 'route-specific urgent transport need from London to Poland',
    primaryKeyword: 'transport zwłok z Londynu do Polski',
    secondaryKeywords: ['sprowadzenie ciała z Londynu do Polski', 'repatriacja z UK do Polski', 'body transport London to Poland'],
    audience: 'families in the UK and in Poland handling a death in London',
    countryContext: 'United Kingdom',
    cityContext: 'London',
    routeContext: 'London -> Poland',
    requiredSections: ['route hero', 'pickup sources', 'UK formalities', 'air vs road or mixed transfer', 'timing', 'handover in Poland', 'family support', 'route FAQ'],
    requiredTrustElements: ['international coordination', 'airport handover competence', 'English-speaking support', '24/7 contact'],
    ctaGoal: 'phone call or WhatsApp',
    internalLinksToInclude: ['/pl/wielka-brytania', '/en/international-body-transport', '/pl/formalnosci-przy-sprowadzeniu-ciala-z-zagranicy', '/pl/kontakt-24-7'],
    faqQuestions: ['Czy działacie bezpośrednio w Londynie?', 'Czy transport z Londynu do Polski wymaga lotu?', 'Jakie dokumenty są potrzebne z UK?', 'Czy pomagacie rodzinie mieszkającej poza Polską?'],
    manualNotes: ['Must be written manually first.', 'This page should also inform the English-language equivalent.', 'Strong trust and international coordination framing required.'],
    requiresManualWriting: true,
  },
]

export const rolloutTwoTopics = {
  countries: ['Belgium', 'Austria', 'Italy', 'Ireland', 'Norway', 'Sweden'],
  cities: [
    'Hamburg',
    'Dortmund',
    'Cologne',
    'Lyon',
    'Lille',
    'Marseille',
    'Rotterdam',
    'Eindhoven',
    'Brussels',
    'Antwerp',
    'Vienna',
    'Milan',
    'Rome',
    'Manchester',
    'Dublin',
    'Oslo',
    'Stockholm',
  ],
  proceduralFaq: [
    'Odbiór ciała z lotniska w Polsce',
    'Kto może zlecić transport zmarłego',
    'Dokumenty do przewozu urny',
    'Kiedy transport lotniczy ma sens',
    'Transport zmarłego do innego zakładu w Polsce',
  ],
}

export const manualFirstPages = [
  'International transport hub',
  'Main service pages',
  'Germany country page',
  'France country page',
  'Netherlands country page',
  'United Kingdom country page',
  'Munich -> Poland',
  'Berlin -> Poland',
  'Paris -> Poland',
  'Amsterdam -> Poland',
  'London -> Poland',
  'Five strongest procedural FAQ pages',
]

export const rolloutOneRouteLaunchSpecs = [
  {
    route: 'Monachium -> Polska',
    h1: 'Transport zwłok z Monachium do Polski',
    title: 'Transport zwłok z Monachium do Polski | Dokumenty, czas, kontakt 24/7',
    metaDescription:
      'Organizujemy transport zwłok z Monachium do Polski. Odbiór ze szpitala, prosektorium lub domu pogrzebowego, formalności, transport drogowy lub lotniczy i szybki kontakt 24/7.',
    keySections: [
      'Jak wygląda transport na trasie Monachium -> Polska',
      'Odbiór ciała z placówki w Monachium lub Bawarii',
      'Dokumenty i formalności po stronie niemieckiej',
      'Transport drogowy czy lotniczy z Monachium',
      'Przygotowanie do przewozu i dostarczenie do Polski',
      'Pomoc rodzinie i kontakt 24/7',
      'FAQ dla trasy Monachium -> Polska',
    ],
  },
  {
    route: 'Berlin -> Polska',
    h1: 'Transport zwłok z Berlina do Polski',
    title: 'Transport zwłok z Berlina do Polski | Formalności, czas, kontakt 24/7',
    metaDescription:
      'Pomagamy w organizacji transportu zwłok z Berlina do Polski. Odbiór ciała, dokumenty, szybka logistyka drogowa lub lotnicza i wsparcie rodziny 24/7.',
    keySections: [
      'Jak wygląda transport na trasie Berlin -> Polska',
      'Odbiór ciała ze szpitala, prosektorium lub domu pogrzebowego w Berlinie',
      'Jakie dokumenty są zwykle potrzebne',
      'Kiedy wybieramy drogę, a kiedy lot',
      'Dostarczenie do Polski i przygotowanie do pochówku',
      'Co robimy za rodzinę',
      'FAQ dla trasy Berlin -> Polska',
    ],
  },
  {
    route: 'Paryż -> Polska',
    h1: 'Transport zwłok z Paryża do Polski',
    title: 'Transport zwłok z Paryża do Polski | Dokumenty, transport, kontakt 24/7',
    metaDescription:
      'Organizujemy transport zwłok z Paryża do Polski. Odbiór z placówki, formalności we Francji, transport drogowy lub lotniczy i szybki kontakt 24/7.',
    keySections: [
      'Jak wygląda transport na trasie Paryż -> Polska',
      'Odbiór ciała z placówki lub domu pogrzebowego w Paryżu',
      'Formalności i dokumenty we Francji',
      'Transport drogowy czy lotniczy z Paryża',
      'Przygotowanie do przewozu i przekazanie do Polski',
      'Pomoc rodzinie na odległość',
      'FAQ dla trasy Paryż -> Polska',
    ],
  },
  {
    route: 'Amsterdam -> Polska',
    h1: 'Transport zwłok z Amsterdamu do Polski',
    title: 'Transport zwłok z Amsterdamu do Polski | Szybka organizacja i kontakt 24/7',
    metaDescription:
      'Pomagamy w organizacji transportu zwłok z Amsterdamu do Polski. Odbiór ciała, dokumenty w Holandii, transport drogowy lub lotniczy i wsparcie rodziny 24/7.',
    keySections: [
      'Jak wygląda transport na trasie Amsterdam -> Polska',
      'Odbiór ciała ze szpitala, prosektorium lub funeral home',
      'Dokumenty i formalności w Holandii',
      'Dlaczego na tej trasie często sprawdza się transport drogowy',
      'Dostarczenie do Polski i dalsza organizacja',
      'Pomoc rodzinie i uczciwa wycena',
      'FAQ dla trasy Amsterdam -> Polska',
    ],
  },
  {
    route: 'Londyn -> Polska',
    h1: 'Transport zwłok z Londynu do Polski',
    title: 'Transport zwłok z Londynu do Polski | Repatriacja, dokumenty, kontakt 24/7',
    metaDescription:
      'Organizujemy transport zwłok z Londynu do Polski. Odbiór z placówki lub funeral home, formalności w UK, transport lotniczy lub mieszany i szybki kontakt 24/7.',
    keySections: [
      'Jak wygląda transport na trasie Londyn -> Polska',
      'Odbiór ciała z placówki lub funeral home w Londynie',
      'Formalności i dokumenty w Wielkiej Brytanii',
      'Kiedy wybieramy transport lotniczy z Londynu',
      'Przygotowanie do przewozu i odbiór w Polsce',
      'Pomoc rodzinie mieszkającej w UK lub w Polsce',
      'FAQ dla trasy Londyn -> Polska',
    ],
  },
]
