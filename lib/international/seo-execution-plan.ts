export type SeoLocale = 'pl' | 'en' | 'de' | 'fr' | 'nl' | 'it'
export type SeoPriority = 'tier-1' | 'tier-2' | 'tier-3'
export type SeoPageType = 'home' | 'service' | 'country' | 'city' | 'route' | 'faq' | 'contact' | 'formalities'

export interface KeywordCluster {
  locale: SeoLocale
  cluster: string
  intent: 'commercial' | 'route' | 'country' | 'procedural' | 'brand'
  primaryKeywords: string[]
  supportingKeywords: string[]
}

export interface KeywordToPageMapping {
  locale: SeoLocale
  pageType: SeoPageType
  pageKey: string
  primaryKeyword: string
  supportingKeywords: string[]
  intent: string
}

export interface RolloutPriorityItem {
  type: 'country' | 'city' | 'language' | 'route'
  key: string
  label: string
  priority: SeoPriority
  reason: string
  requiresManualWriting: boolean
}

export interface RoadmapPhase {
  window: '30-days' | '60-days' | '90-days'
  objectives: string[]
  deliverables: string[]
  checkpoints: string[]
}

export interface KpiMetric {
  name: string
  type: 'visibility' | 'engagement' | 'conversion' | 'indexing' | 'locale'
  description: string
  targetDirection: 'up' | 'down'
}

export const keywordClusters: KeywordCluster[] = [
  {
    locale: 'pl',
    cluster: 'core-international-transport',
    intent: 'commercial',
    primaryKeywords: ['transport zwlok do Polski', 'sprowadzenie ciala do Polski', 'miedzynarodowy transport zwlok', 'sprowadzenie zwlok z zagranicy'],
    supportingKeywords: ['transport zmarlych do Polski', 'przewoz zmarlych z zagranicy', 'transport ciala do Polski'],
  },
  {
    locale: 'pl',
    cluster: 'country-intent',
    intent: 'country',
    primaryKeywords: ['transport zwlok z Niemiec do Polski', 'sprowadzenie ciala z Francji do Polski', 'transport zmarlych z Holandii do Polski'],
    supportingKeywords: ['transport zwlok z UK do Polski', 'sprowadzenie zwlok z zagranicy do Polski'],
  },
  {
    locale: 'pl',
    cluster: 'route-intent',
    intent: 'route',
    primaryKeywords: ['transport zwlok z Monachium do Polski', 'transport zwlok z Berlina do Polski', 'transport zwlok z Paryza do Polski', 'transport zwlok z Amsterdamu do Polski', 'transport zwlok z Londynu do Polski'],
    supportingKeywords: ['sprowadzenie ciala z Monachium', 'transport ciala z Berlina do Polski'],
  },
  {
    locale: 'pl',
    cluster: 'procedural-intent',
    intent: 'procedural',
    primaryKeywords: ['jak sprowadzic cialo z Niemiec do Polski', 'jakie dokumenty do transportu zwlok z zagranicy', 'czy potrzebna trumna cynkowa'],
    supportingKeywords: ['transport urny z zagranicy do Polski', 'ile trwa transport zwlok do Polski'],
  },
  {
    locale: 'en',
    cluster: 'core-international-transport',
    intent: 'commercial',
    primaryKeywords: ['repatriation of remains to Poland', 'transport of remains to Poland', 'bringing the deceased to Poland'],
    supportingKeywords: ['funeral repatriation Poland', 'international funeral repatriation to Poland'],
  },
  {
    locale: 'en',
    cluster: 'route-intent',
    intent: 'route',
    primaryKeywords: ['body transport Munich to Poland', 'repatriation London to Poland', 'funeral repatriation Amsterdam Poland'],
    supportingKeywords: ['body transport Berlin to Poland', 'transport of remains Paris to Poland'],
  },
  {
    locale: 'de',
    cluster: 'core-international-transport',
    intent: 'commercial',
    primaryKeywords: ['Uberfuhrung nach Polen', 'Uberfuhrung Verstorbener nach Polen'],
    supportingKeywords: ['Bestatter Uberfuhrung Polen', 'Transport Verstorbener nach Polen'],
  },
  {
    locale: 'de',
    cluster: 'route-intent',
    intent: 'route',
    primaryKeywords: ['Uberfuhrung Munchen Polen', 'Uberfuhrung Berlin Polen'],
    supportingKeywords: ['Uberfuhrung Hamburg Polen', 'Leichentransport nach Polen'],
  },
  {
    locale: 'fr',
    cluster: 'core-international-transport',
    intent: 'commercial',
    primaryKeywords: ['rapatriement vers la Pologne', 'transport funeraire vers la Pologne'],
    supportingKeywords: ['rapatriement du corps vers la Pologne', 'transport du defunt vers la Pologne'],
  },
  {
    locale: 'fr',
    cluster: 'route-intent',
    intent: 'route',
    primaryKeywords: ['rapatriement Paris Pologne', 'transport funeraire Lyon Pologne'],
    supportingKeywords: ['rapatriement Lille Pologne', 'rapatriement du corps Paris Pologne'],
  },
  {
    locale: 'nl',
    cluster: 'core-international-transport',
    intent: 'commercial',
    primaryKeywords: ['repatriering naar Polen', 'vervoer van overledenen naar Polen'],
    supportingKeywords: ['overbrenging naar Polen', 'uitvaart transport Polen'],
  },
  {
    locale: 'it',
    cluster: 'core-international-transport',
    intent: 'commercial',
    primaryKeywords: ['rimpatrio salma in Polonia', 'trasporto funebre verso la Polonia'],
    supportingKeywords: ['rimpatrio del defunto in Polonia', 'trasporto della salma in Polonia'],
  },
]

export const keywordToPageMap: KeywordToPageMapping[] = [
  {
    locale: 'pl',
    pageType: 'service',
    pageKey: 'international-transport',
    primaryKeyword: 'miedzynarodowy transport zwlok',
    supportingKeywords: ['transport zwlok do Polski', 'sprowadzenie zwlok z zagranicy'],
    intent: 'Main hub for international commercial demand.',
  },
  {
    locale: 'pl',
    pageType: 'country',
    pageKey: 'germany',
    primaryKeyword: 'transport zwlok z Niemiec do Polski',
    supportingKeywords: ['sprowadzenie ciala z Niemiec do Polski', 'transport zmarlych z Niemiec'],
    intent: 'Country-level landing for strongest Polish migrant market.',
  },
  {
    locale: 'pl',
    pageType: 'route',
    pageKey: 'munich-to-poland',
    primaryKeyword: 'transport zwlok z Monachium do Polski',
    supportingKeywords: ['sprowadzenie ciala z Monachium do Polski', 'przewoz zmarlych Monachium Polska'],
    intent: 'Highest-intent route page for Germany cluster.',
  },
  {
    locale: 'pl',
    pageType: 'route',
    pageKey: 'berlin-to-poland',
    primaryKeyword: 'transport zwlok z Berlina do Polski',
    supportingKeywords: ['sprowadzenie ciala z Berlina do Polski', 'transport ciala Berlin Polska'],
    intent: 'High-volume route page with strong road transport fit.',
  },
  {
    locale: 'pl',
    pageType: 'route',
    pageKey: 'paris-to-poland',
    primaryKeyword: 'transport zwlok z Paryza do Polski',
    supportingKeywords: ['sprowadzenie ciala z Paryza do Polski', 'transport ciala Francja Polska'],
    intent: 'High-intent route page for France cluster.',
  },
  {
    locale: 'pl',
    pageType: 'route',
    pageKey: 'amsterdam-to-poland',
    primaryKeyword: 'transport zwlok z Amsterdamu do Polski',
    supportingKeywords: ['sprowadzenie ciala z Amsterdamu do Polski', 'transport ciala Holandia Polska'],
    intent: 'High-intent route page for Netherlands cluster.',
  },
  {
    locale: 'pl',
    pageType: 'route',
    pageKey: 'london-to-poland',
    primaryKeyword: 'transport zwlok z Londynu do Polski',
    supportingKeywords: ['sprowadzenie ciala z Londynu do Polski', 'transport ciala UK Polska'],
    intent: 'Highest-intent route page for UK cluster.',
  },
  {
    locale: 'en',
    pageType: 'service',
    pageKey: 'international-transport',
    primaryKeyword: 'repatriation of remains to Poland',
    supportingKeywords: ['transport of remains to Poland', 'bringing the deceased to Poland'],
    intent: 'English-language commercial hub for cross-country demand.',
  },
  {
    locale: 'de',
    pageType: 'route',
    pageKey: 'munich-to-poland',
    primaryKeyword: 'Uberfuhrung Munchen Polen',
    supportingKeywords: ['Uberfuhrung nach Polen', 'Bestatter Polen Uberfuhrung'],
    intent: 'German route landing for strongest city route.',
  },
  {
    locale: 'fr',
    pageType: 'route',
    pageKey: 'paris-to-poland',
    primaryKeyword: 'rapatriement Paris Pologne',
    supportingKeywords: ['transport funeraire Paris Pologne', 'rapatriement du corps vers la Pologne'],
    intent: 'French route landing for highest-value French route.',
  },
]

export const rolloutPriority: RolloutPriorityItem[] = [
  { type: 'country', key: 'DE', label: 'Niemcy / Germany', priority: 'tier-1', reason: 'Largest combination of Polish population, route fit and demand.', requiresManualWriting: true },
  { type: 'country', key: 'GB', label: 'Wielka Brytania / United Kingdom', priority: 'tier-1', reason: 'Very strong search demand and high-value repatriation intent.', requiresManualWriting: true },
  { type: 'country', key: 'NL', label: 'Holandia / Netherlands', priority: 'tier-1', reason: 'Strong Polish diaspora and road-transport fit.', requiresManualWriting: true },
  { type: 'country', key: 'FR', label: 'Francja / France', priority: 'tier-1', reason: 'Important route cluster with different logistics patterns.', requiresManualWriting: true },
  { type: 'country', key: 'IE', label: 'Irlandia / Ireland', priority: 'tier-2', reason: 'Smaller but commercially valuable diaspora market.', requiresManualWriting: false },
  { type: 'country', key: 'BE', label: 'Belgia / Belgium', priority: 'tier-2', reason: 'Good search and route adjacency to existing Benelux coverage.', requiresManualWriting: false },
  { type: 'country', key: 'AT', label: 'Austria', priority: 'tier-2', reason: 'Good operational fit and useful DACH support cluster.', requiresManualWriting: false },
  { type: 'country', key: 'NO', label: 'Norwegia / Norway', priority: 'tier-2', reason: 'Smaller volume but high-value and strong trust intent.', requiresManualWriting: false },
  { type: 'country', key: 'SE', label: 'Szwecja / Sweden', priority: 'tier-3', reason: 'Useful Nordic expansion once first wave performs.', requiresManualWriting: false },
  { type: 'country', key: 'IT', label: 'Wlochy / Italy', priority: 'tier-3', reason: 'Good long-term breadth but lower immediate priority.', requiresManualWriting: false },
  { type: 'city', key: 'munich', label: 'Monachium / Munich', priority: 'tier-1', reason: 'Highest-value Germany route.', requiresManualWriting: true },
  { type: 'city', key: 'berlin', label: 'Berlin', priority: 'tier-1', reason: 'Strong route demand and excellent road logistics.', requiresManualWriting: true },
  { type: 'city', key: 'london', label: 'Londyn / London', priority: 'tier-1', reason: 'Most important UK route.', requiresManualWriting: true },
  { type: 'city', key: 'amsterdam', label: 'Amsterdam', priority: 'tier-1', reason: 'Flagship Netherlands route.', requiresManualWriting: true },
  { type: 'city', key: 'paris', label: 'Paryz / Paris', priority: 'tier-1', reason: 'Flagship France route.', requiresManualWriting: true },
  { type: 'city', key: 'hamburg', label: 'Hamburg', priority: 'tier-2', reason: 'Natural Germany cluster expansion.', requiresManualWriting: false },
  { type: 'city', key: 'cologne', label: 'Kolonia / Cologne', priority: 'tier-2', reason: 'Useful Germany city cluster support.', requiresManualWriting: false },
  { type: 'city', key: 'manchester', label: 'Manchester', priority: 'tier-2', reason: 'Natural UK cluster expansion.', requiresManualWriting: false },
  { type: 'city', key: 'rotterdam', label: 'Rotterdam', priority: 'tier-2', reason: 'Natural Netherlands cluster expansion.', requiresManualWriting: false },
  { type: 'city', key: 'lyon', label: 'Lyon', priority: 'tier-2', reason: 'Natural France cluster expansion.', requiresManualWriting: false },
  { type: 'language', key: 'pl', label: 'Polski', priority: 'tier-1', reason: 'Core language for Polish families and repatriation intent.', requiresManualWriting: true },
  { type: 'language', key: 'de', label: 'Deutsch', priority: 'tier-1', reason: 'Best fit for DACH search and Germany route demand.', requiresManualWriting: true },
  { type: 'language', key: 'en', label: 'English', priority: 'tier-1', reason: 'Covers UK and international searches broadly.', requiresManualWriting: true },
  { type: 'language', key: 'fr', label: 'Francais', priority: 'tier-2', reason: 'Important to support French route searches.', requiresManualWriting: true },
  { type: 'language', key: 'nl', label: 'Nederlands', priority: 'tier-2', reason: 'Helpful for Netherlands route support and trust.', requiresManualWriting: false },
  { type: 'language', key: 'it', label: 'Italiano', priority: 'tier-3', reason: 'Longer-term language expansion.', requiresManualWriting: false },
  { type: 'route', key: 'munich-to-poland', label: 'Monachium -> Polska', priority: 'tier-1', reason: 'Flagship route page.', requiresManualWriting: true },
  { type: 'route', key: 'berlin-to-poland', label: 'Berlin -> Polska', priority: 'tier-1', reason: 'Flagship route page.', requiresManualWriting: true },
  { type: 'route', key: 'london-to-poland', label: 'Londyn -> Polska', priority: 'tier-1', reason: 'Flagship route page.', requiresManualWriting: true },
  { type: 'route', key: 'amsterdam-to-poland', label: 'Amsterdam -> Polska', priority: 'tier-1', reason: 'Flagship route page.', requiresManualWriting: true },
  { type: 'route', key: 'paris-to-poland', label: 'Paryz -> Polska', priority: 'tier-1', reason: 'Flagship route page.', requiresManualWriting: true },
]

export const internalLinkingStrategy = {
  homepage: ['main international service page', 'contact 24/7', 'top country pages', 'top route pages'],
  servicePages: ['country pages', 'formalities page', 'air transport page', 'faq page', 'contact page'],
  countryPages: ['top cities in country', 'top route pages', 'formalities page', 'contact page'],
  routePages: ['parent country page', 'main service page', 'formalities page', 'faq page', 'related routes', 'contact page'],
  faqPages: ['relevant service page', 'relevant country page', 'relevant route page', 'contact page'],
  rule: 'Every indexable page should have at least three internal links in and three contextual links out.',
}

export const onPageSeoChecklist = [
  'Unique title tag aligned to the main keyword family.',
  'Unique meta description with route, documents, transport mode and 24/7 contact.',
  'One clear H1 matching the page intent.',
  'Unique lead paragraph with real route or country value.',
  'Visible phone CTA above the fold.',
  'Route- or country-specific sections, not generic swapped text.',
  'Self-referencing canonical.',
  'Complete hreflang set and x-default.',
  'Relevant internal links to next-step pages.',
  'Visible FAQ only when the questions are unique and meaningful.',
  'Structured data only when it matches visible content.',
]

export const indexingChecklist = [
  'Page has unique value beyond city-name substitution.',
  'Page is linked from at least one parent hub and one sibling or child context.',
  'Page is included in sitemap output.',
  'Canonical is correct and self-referencing.',
  'Page is not accidentally noindex.',
  'Rendered HTML contains full content and metadata.',
  'Priority pages are manually submitted for indexing in Search Console.',
]

export const sitemapSubmissionChecklist = [
  'Submit canonical production sitemap in Search Console.',
  'Only include indexable URLs.',
  'Refresh sitemap after each rollout batch.',
  'Validate alternates and locale URLs before submission.',
  'Segment sitemap by type later if route count grows substantially.',
]

export const searchConsoleRecommendations = [
  'Set up a Domain property for the canonical domain.',
  'Create saved views or filters for /pl/, /de/, /en/, /fr/, /nl/ and /it/ paths.',
  'Monitor coverage issues for duplicate, alternate-canonical and soft-404 patterns.',
  'Review query performance for route pages separately from service hubs.',
  'Track impressions and clicks by locale, page type and route cluster.',
]

export const contentExpansionLogic = [
  'Only expand to a new route if the route has meaningful demand, operational differences or strategic cluster value.',
  'Use templates for structure, but customize lead, logistics, FAQ, metadata and internal links.',
  'Do not publish empty city pages with no route-level substance.',
  'Merge weak pages into stronger country or route pages if they do not earn traction.',
  'Use procedural pages to support conversion, not to create a blog for its own sake.',
]

export const measurementFramework: KpiMetric[] = [
  { name: 'international-impressions', type: 'visibility', description: 'Non-brand impressions on international route and service queries.', targetDirection: 'up' },
  { name: 'international-clicks', type: 'engagement', description: 'Clicks from route, country and service pages in international clusters.', targetDirection: 'up' },
  { name: 'indexed-international-pages', type: 'indexing', description: 'Number of international pages indexed versus submitted.', targetDirection: 'up' },
  { name: 'route-page-phone-clicks', type: 'conversion', description: 'Phone clicks originating from route pages.', targetDirection: 'up' },
  { name: 'route-page-whatsapp-clicks', type: 'conversion', description: 'WhatsApp clicks originating from route pages.', targetDirection: 'up' },
  { name: 'route-page-form-submits', type: 'conversion', description: 'Form submissions originating from route pages.', targetDirection: 'up' },
  { name: 'locale-performance-pl', type: 'locale', description: 'CTR, impressions and conversions for Polish international pages.', targetDirection: 'up' },
  { name: 'locale-performance-de', type: 'locale', description: 'CTR, impressions and conversions for German international pages.', targetDirection: 'up' },
  { name: 'locale-performance-en', type: 'locale', description: 'CTR, impressions and conversions for English international pages.', targetDirection: 'up' },
  { name: 'indexation-rate', type: 'indexing', description: 'Percentage of submitted route pages that become indexed.', targetDirection: 'up' },
]

export const seoRoadmap: RoadmapPhase[] = [
  {
    window: '30-days',
    objectives: [
      'Finalize and hand-polish the strongest service, country and route pages.',
      'Ensure international metadata, hreflang, canonicals and sitemap coverage are stable.',
      'Start Search Console tracking by locale and route cluster.',
    ],
    deliverables: [
      'Manual-first pages for Germany, UK, Netherlands and France.',
      'Five flagship routes: Munich, Berlin, London, Amsterdam, Paris.',
      'International service hub, formalities page, contact 24/7 page and FAQ hub.',
    ],
    checkpoints: [
      'All priority pages indexed or submitted for indexing.',
      'No critical hreflang, canonical or sitemap issues.',
      'First impressions visible for top route pages.',
    ],
  },
  {
    window: '60-days',
    objectives: [
      'Expand the strongest country clusters with second-tier city and route pages.',
      'Improve DE and EN commercial copy based on first performance data.',
      'Launch procedural support content that channels users into conversion pages.',
    ],
    deliverables: [
      'Tier-2 routes: Hamburg, Cologne, Manchester, Rotterdam, Lyon.',
      'Procedural pages on documents, timing, urn transport and transport modes.',
      'Improved internal linking between service, country, route and FAQ pages.',
    ],
    checkpoints: [
      'Growing indexed page count without thin-page issues.',
      'Route pages generating both impressions and first clicks.',
      'Route-page conversion tracking live and segmented by locale.',
    ],
  },
  {
    window: '90-days',
    objectives: [
      'Scale into second-wave countries and languages without diluting quality.',
      'Refine pages with impressions but weak CTR.',
      'Prune or consolidate pages that do not add unique value.',
    ],
    deliverables: [
      'Tier-2 countries: Belgium, Austria, Ireland, Norway, Sweden, Italy.',
      'Expanded route cluster only where first-wave pages prove traction.',
      'Authority-supporting procedural and trust content tied back to money pages.',
    ],
    checkpoints: [
      'Consistent non-brand clicks from international queries.',
      'Indexation rate remains healthy as route count grows.',
      'Locale-level performance baseline established for PL, DE, EN and FR.',
    ],
  },
]

export const authorityBuildingLevers = [
  'Keep legal identity, NIP, address and primary phones consistent sitewide.',
  'Show 30+ years, family-owned trust signals and no-upfront-payment explanation on core pages.',
  'Use strong procedural clarity instead of generic marketing text.',
  'Support route pages with country pages, formalities content and FAQ clusters.',
  'Prioritize manual editing for the highest-value PL, DE, EN and FR pages.',
]

export const doorwayAndThinContentRisks = [
  'Publishing route pages with only city names swapped.',
  'Creating city pages that duplicate route intent without extra value.',
  'Expanding to low-demand routes before top clusters are established.',
  'Letting procedural pages outrank service pages without conversion paths.',
  'Incomplete internal linking that leaves route pages orphaned.',
]
