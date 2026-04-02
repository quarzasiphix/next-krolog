export type CopyLocale = 'pl' | 'en' | 'de' | 'fr' | 'nl' | 'it'

export interface ToneOfVoiceProfile {
  brandEssence: string[]
  sentenceStyle: string[]
  emotionalPosture: string[]
  mustDo: string[]
  mustAvoid: string[]
}

export interface GlossaryEntry {
  concept: string
  preferred: Record<CopyLocale, string>
  acceptable?: Partial<Record<CopyLocale, string[]>>
  avoid?: Partial<Record<CopyLocale, string[]>>
  note: string
}

export interface LocalizedStringSet {
  id: string
  values: Record<CopyLocale, string>
}

export interface CopySkeleton {
  headline: string
  subheadline: string
  bodyOutline: string[]
  ctaPrimary: string
  ctaSecondary: string
}

export interface FormCopyField {
  label: string
  placeholder: string
  validation: {
    required: string
    invalid?: string
  }
}

export interface FormCopySet {
  title: string
  description: string
  submitLabel: string
  successMessage: string
  fields: {
    from: FormCopyField
    to: FormCopyField
    phone: FormCopyField
    details: FormCopyField
  }
}

export interface PageCopyPack {
  hero: CopySkeleton
  sections: Array<{ id: string; title: string; summary: string }>
  faqQuestions: string[]
}

function skeleton(
  headline: string,
  subheadline: string,
  bodyOutline: string[],
  ctaPrimary: string,
  ctaSecondary: string,
): CopySkeleton {
  return { headline, subheadline, bodyOutline, ctaPrimary, ctaSecondary }
}

function routeSections(city: string, country: string) {
  return [
    { id: 'route-overview', title: `Jak wyglada transport na trasie ${city} -> Polska`, summary: `Wyjasnij, od czego zaczyna sie organizacja, jak ustalany jest odbiór i kto koordynuje trase po stronie polskiej i zagranicznej.` },
    { id: 'pickup', title: `Odbiór z placówki w ${city}`, summary: `Opisz odbiór ze szpitala, prosektorium lub domu pogrzebowego oraz kontakt z lokalna placówka.` },
    { id: 'documents', title: `Dokumenty i formalnosci w ${country}`, summary: `Wskaz najczesciej potrzebne dokumenty, zaznaczajac, ze zakres zalezy od placówki i trybu transportu.` },
    { id: 'transport-modes', title: 'Transport drogowy i lotniczy', summary: `Pokaz, kiedy na tej trasie czesciej wybierany jest bus, a kiedy transport lotniczy lub rozwiazanie laczone.` },
    { id: 'why-us', title: `Dlaczego rodziny z ${country} wybieraja wlasnie nas`, summary: `Podkresl doswiadczenie, kontakty z zagranicznymi placówkami, sprawna logistyke i spokojna komunikacje.` },
  ]
}

function routeFaq(city: string, country: string) {
  return [
    `Czy organizujecie odbiór zmarlego bezposrednio z placówki w ${city}?`,
    `Jakie dokumenty sa zwykle potrzebne przy transporcie z ${country} do Polski?`,
    `Czy na trasie ${city} -> Polska czesciej wybierany jest transport drogowy czy lotniczy?`,
    `Ile moze potrwac organizacja przewozu z ${city} do Polski?`,
    'Czy rodzine mozna obsluzyc zdalnie i rozpoczac procedure od razu po telefonie?',
  ]
}

const locales: CopyLocale[] = ['pl', 'en', 'de', 'fr', 'nl', 'it']

const perLocale = <T,>(factory: (locale: CopyLocale) => T): Record<CopyLocale, T> =>
  Object.fromEntries(locales.map((locale) => [locale, factory(locale)])) as Record<CopyLocale, T>

export const toneOfVoiceGuide: Record<CopyLocale, ToneOfVoiceProfile> = perLocale((locale) => ({
  brandEssence: [
    locale === 'pl' ? 'spokojny' : 'calm',
    locale === 'pl' ? 'konkretny' : 'clear',
    locale === 'pl' ? 'godny' : 'respectful',
  ],
  sentenceStyle: [
    locale === 'pl' ? 'krotkie zdania' : 'short sentences',
    locale === 'pl' ? 'najpierw odpowiedz' : 'answer first',
  ],
  emotionalPosture: [
    locale === 'pl' ? 'prowadzimy rodzine przez procedure' : 'guide the family through the process',
  ],
  mustDo: [
    locale === 'pl' ? 'podkresl kontakt 24/7' : 'highlight 24/7 contact',
    locale === 'pl' ? 'wyjasniaj kolejne kroki' : 'explain next steps',
  ],
  mustAvoid: [
    locale === 'pl' ? 'agresywny marketing' : 'aggressive marketing',
    locale === 'pl' ? 'sensacyjny ton' : 'sensational tone',
  ],
}))

export const glossary: GlossaryEntry[] = [
  {
    concept: 'transport of remains to Poland',
    preferred: {
      pl: 'transport zwlok do Polski',
      en: 'transport of remains to Poland',
      de: 'Uberfuhrung nach Polen',
      fr: 'transport funeraire vers la Pologne',
      nl: 'vervoer van overledenen naar Polen',
      it: 'trasporto funebre verso la Polonia',
    },
    note: 'Use clear and respectful service wording.',
  },
  {
    concept: 'no upfront payment',
    preferred: {
      pl: 'bez zaliczki',
      en: 'without upfront payment',
      de: 'ohne Vorauszahlung',
      fr: 'sans avance de paiement',
      nl: 'zonder voorschot',
      it: 'senza anticipo',
    },
    note: 'Keep the promise factual and tied to process explanation.',
  },
]

export const bannedPhrases: Record<CopyLocale, string[]> = perLocale((locale) =>
  locale === 'pl'
    ? ['najtansza oferta', 'szokujaco niskie ceny']
    : ['cheapest offer', 'shockingly low prices'],
)

export const preferredWording: Record<
  CopyLocale,
  { urgency: string[]; professionalism: string[]; trust: string[]; pricing: string[] }
> = perLocale((locale) => ({
  urgency: [locale === 'pl' ? 'kontakt 24/7' : '24/7 contact'],
  professionalism: [locale === 'pl' ? 'jasna procedura' : 'clear process'],
  trust: [locale === 'pl' ? 'rodzinna firma' : 'family-run company'],
  pricing: [locale === 'pl' ? 'uczciwa wycena' : 'fair pricing'],
}))

export const ctaLibrary: LocalizedStringSet[] = [
  {
    id: 'call_now',
    values: {
      pl: 'Zadzwon teraz',
      en: 'Call now',
      de: 'Jetzt anrufen',
      fr: 'Appeler maintenant',
      nl: 'Bel nu',
      it: 'Chiama ora',
    },
  },
  {
    id: 'contact_247',
    values: {
      pl: 'Kontakt 24/7',
      en: 'Contact 24/7',
      de: 'Kontakt 24/7',
      fr: 'Contact 24/7',
      nl: 'Contact 24/7',
      it: 'Contatto 24/7',
    },
  },
]

export const trustStatementLibrary: LocalizedStringSet[] = [
  {
    id: 'family_business',
    values: {
      pl: 'Rodzinna firma z ponad 30-letnim doswiadczeniem',
      en: 'Family-run company with 30+ years of experience',
      de: 'Familienunternehmen mit uber 30 Jahren Erfahrung',
      fr: 'Entreprise familiale avec plus de 30 ans d experience',
      nl: 'Familiebedrijf met meer dan 30 jaar ervaring',
      it: 'Impresa familiare con oltre 30 anni di esperienza',
    },
  },
]

export const faqAnswerStyleGuide = {
  universalRules: [
    'Answer the question in the first sentence.',
    'Keep answers short and practical.',
    'State what depends on route, country or paperwork.',
  ],
  perLocaleNotes: perLocale((locale) => [
    locale === 'pl' ? 'najpierw fakt, potem wyjasnienie' : 'fact first, then explanation',
  ]),
}

export const emergencyContactMicrocopy: Record<
  CopyLocale,
  { eyebrow: string; title: string; description: string; reassurance: string }
> = perLocale((locale) => ({
  eyebrow: locale === 'pl' ? 'Pilny kontakt 24/7' : 'Urgent contact 24/7',
  title: locale === 'pl' ? 'Jesli sprawa jest pilna, zadzwon od razu' : 'If the matter is urgent, call us now',
  description:
    locale === 'pl'
      ? 'Po pierwszym telefonie ustalamy miejsce odbioru i dalsze kroki.'
      : 'After the first call, we confirm the pickup point and the next steps.',
  reassurance:
    locale === 'pl'
      ? 'Nie musisz miec od razu kompletu dokumentow.'
      : 'You do not need every document ready at once.',
}))

export const formCopy: Record<CopyLocale, FormCopySet> = perLocale((locale) => ({
  title: locale === 'pl' ? 'Szybkie zgloszenie transportu' : 'Quick transport request',
  description:
    locale === 'pl'
      ? 'Wpisz trase i numer telefonu. Oddzwonimy mozliwie szybko.'
      : 'Share the route and your phone number. We will call back as soon as possible.',
  submitLabel: locale === 'pl' ? 'Wyslij zgloszenie' : 'Send request',
  successMessage:
    locale === 'pl'
      ? 'Dziekujemy. Skontaktujemy sie tak szybko, jak to mozliwe.'
      : 'Thank you. We will contact you as soon as possible.',
  fields: {
    from: {
      label: locale === 'pl' ? 'Skad odebrac zmarlych' : 'Collection point',
      placeholder: locale === 'pl' ? 'Np. Berlin, szpital lub dom pogrzebowy' : 'For example Berlin, hospital or funeral home',
      validation: { required: locale === 'pl' ? 'Podaj miejsce odbioru.' : 'Please enter the collection point.' },
    },
    to: {
      label: locale === 'pl' ? 'Dokad w Polsce' : 'Destination in Poland',
      placeholder: locale === 'pl' ? 'Np. Lodz' : 'For example Lodz',
      validation: { required: locale === 'pl' ? 'Podaj miejsce docelowe.' : 'Please enter the destination.' },
    },
    phone: {
      label: locale === 'pl' ? 'Numer telefonu' : 'Phone number',
      placeholder: '+48...',
      validation: {
        required: locale === 'pl' ? 'Podaj numer telefonu.' : 'Please enter your phone number.',
        invalid: locale === 'pl' ? 'Wpisz poprawny numer telefonu.' : 'Please enter a valid phone number.',
      },
    },
    details: {
      label: locale === 'pl' ? 'Krotki opis sytuacji' : 'Short description',
      placeholder:
        locale === 'pl'
          ? 'Napisz, z jakiego kraju ma byc wykonany transport.'
          : 'Tell us which country and facility are involved.',
      validation: { required: locale === 'pl' ? 'Dodaj krotki opis sytuacji.' : 'Please add a short description.' },
    },
  },
}))

export const translationMemoryStarterSet: Array<{
  key: string
  context: string
  values: Record<CopyLocale, string>
}> = [
  {
    key: 'hero_support_line',
    context: 'Used below main headlines on international pages.',
    values: {
      pl: 'Organizujemy transport zmarlych do Polski i pomagamy w formalnosciach.',
      en: 'We arrange transport of the deceased to Poland and support the paperwork.',
      de: 'Wir organisieren die Uberfuhrung nach Polen und helfen bei den Unterlagen.',
      fr: 'Nous organisons le rapatriement vers la Pologne et aidons pour les formalites.',
      nl: 'Wij organiseren het vervoer naar Polen en helpen met de documenten.',
      it: 'Organizziamo il rimpatrio verso la Polonia e aiutiamo con i documenti.',
    },
  },
]

export const reusableCopyBlocks = {
  routeHeroSupport: translationMemoryStarterSet[0],
  trustFamilyBusiness: trustStatementLibrary[0],
  pricingNoUpfront: {
    id: 'pricing_no_upfront',
    values: {
      pl: 'Wyjasniamy mozliwosci organizacji uslugi bez zaliczki.',
      en: 'We explain how the service can begin without upfront payment.',
      de: 'Wir erklaren, wie die Organisation ohne Vorauszahlung beginnen kann.',
      fr: 'Nous expliquons comment l organisation peut commencer sans avance.',
      nl: 'Wij leggen uit hoe de organisatie zonder voorschot kan starten.',
      it: 'Spieghiamo come il servizio possa iniziare senza anticipo.',
    },
  },
  roadVsAir: {
    id: 'road_vs_air',
    values: {
      pl: 'Dobor transportu drogowego lub lotniczego zalezy od kraju i dokumentow.',
      en: 'The choice between road and air transport depends on the country and paperwork.',
      de: 'Die Wahl zwischen Strassen- und Lufttransport hangt von Land und Unterlagen ab.',
      fr: 'Le choix entre transport routier et aerien depend du pays et des documents.',
      nl: 'De keuze tussen wegtransport en luchttransport hangt af van land en documenten.',
      it: 'La scelta tra trasporto su strada e aereo dipende da Paese e documenti.',
    },
  },
  contactNextStep: {
    id: 'contact_next_step',
    values: {
      pl: 'Jesli potrzebujesz pomocy teraz, zadzwon.',
      en: 'If you need help now, call us.',
      de: 'Wenn Sie jetzt Hilfe brauchen, rufen Sie uns an.',
      fr: 'Si vous avez besoin d aide maintenant, appelez-nous.',
      nl: 'Heeft u nu hulp nodig, bel ons dan.',
      it: 'Se hai bisogno di aiuto adesso, chiamaci.',
    },
  },
}

const basePageCopy = (locale: CopyLocale, headline: string): PageCopyPack => ({
  hero: skeleton(
    headline,
    {
      pl: 'Spokojna organizacja miedzynarodowego transportu do Polski.',
      en: 'Calm and clear organisation of international transport to Poland.',
      de: 'Ruhige und klare Organisation der Uberfuhrung nach Polen.',
      fr: 'Organisation calme et claire du rapatriement vers la Pologne.',
      nl: 'Rustige en duidelijke organisatie van internationaal vervoer naar Polen.',
      it: 'Organizzazione serena e chiara del trasporto internazionale verso la Polonia.',
    }[locale],
    [
      {
        pl: 'Wyjasnij procedure krok po kroku.',
        en: 'Explain the process step by step.',
        de: 'Erklare den Ablauf Schritt fur Schritt.',
        fr: 'Explique le deroulement etape par etape.',
        nl: 'Leg het proces stap voor stap uit.',
        it: 'Spiega il processo passo dopo passo.',
      }[locale],
      {
        pl: 'Podkresl kontakt 24/7.',
        en: 'Highlight 24/7 contact.',
        de: 'Betone den Kontakt 24/7.',
        fr: 'Mets en avant le contact 24/7.',
        nl: 'Benadruk het 24/7 contact.',
        it: 'Metti in evidenza il contatto 24/7.',
      }[locale],
    ],
    {
      pl: 'Skontaktuj sie 24/7',
      en: 'Contact us 24/7',
      de: 'Kontakt 24/7',
      fr: 'Contact 24/7',
      nl: 'Neem 24/7 contact op',
      it: 'Contatto 24/7',
    }[locale],
    {
      pl: 'Zobacz formalnosci',
      en: 'Read about formalities',
      de: 'Formalitaten ansehen',
      fr: 'Voir les demarches',
      nl: 'Bekijk de formaliteiten',
      it: 'Vedi le formalita',
    }[locale],
  ),
  sections: [
    {
      id: 'procedure',
      title:
        {
          pl: 'Jak wyglada procedura',
          en: 'How the process works',
          de: 'Wie der Ablauf aussieht',
          fr: 'Comment la procedure se deroule',
          nl: 'Hoe het proces verloopt',
          it: 'Come si svolge la procedura',
        }[locale],
      summary:
        {
          pl: 'Pierwszy kontakt, dokumenty, odbior i przekazanie do Polski.',
          en: 'First contact, paperwork, collection and delivery to Poland.',
          de: 'Erstkontakt, Unterlagen, Abholung und Ubergabe in Polen.',
          fr: 'Premier contact, documents, prise en charge et remise en Pologne.',
          nl: 'Eerste contact, documenten, ophaling en overdracht in Polen.',
          it: 'Primo contatto, documenti, ritiro e consegna in Polonia.',
        }[locale],
    },
  ],
  faqQuestions: [
    {
      pl: 'Jak szybko mozna rozpoczac organizacje?',
      en: 'How quickly can the process begin?',
      de: 'Wie schnell kann die Organisation beginnen?',
      fr: 'En combien de temps l organisation peut-elle commencer ?',
      nl: 'Hoe snel kan de organisatie beginnen?',
      it: 'Quanto rapidamente puo iniziare l organizzazione?',
    }[locale],
  ],
})

export const copyPack: Record<string, Record<CopyLocale, PageCopyPack>> = {
  homepageHero: {
    pl: {
      hero: skeleton(
        'Miedzynarodowy transport zwlok do Polski',
        'Pomagamy rodzinom sprowadzic zmarlych do Polski z Europy, organizujemy formalnosci i pozostajemy dostepni 24/7.',
        ['Wyjasnij usluge jednym prostym akapitem.', 'Podkresl szybki pierwszy kontakt i spokojna koordynacje.', 'Dodaj sygnal o konkurencyjnych cenach i braku zaliczki.'],
        'Zadzwon 24/7',
        'Sprawdz trasy',
      ),
      sections: [
        { id: 'why-us', title: 'Dlaczego rodziny wybieraja nas przy transporcie do Polski', summary: 'Doswiadczenie rodzinnej firmy, spokojna komunikacja i szybka organizacja.' },
        { id: 'featured-routes', title: 'Najczesciej obslugiwane trasy', summary: 'Pokaz najwazniejsze kierunki: Niemcy, Francja, Holandia i Wielka Brytania.' },
      ],
      faqQuestions: ['Czy mozna rozpoczac organizacje od razu po telefonie?', 'Czy pomagacie w formalnosciach po stronie zagranicznej i polskiej?', 'Czy usluge mozna zaczac bez zaliczki?'],
    },
    en: basePageCopy('en', 'International transport of remains to Poland'),
    de: basePageCopy('de', 'Uberfuhrung nach Polen'),
    fr: basePageCopy('fr', 'Rapatriement vers la Pologne'),
    nl: basePageCopy('nl', 'Vervoer van overledenen naar Polen'),
    it: basePageCopy('it', 'Rimpatrio funebre verso la Polonia'),
  },
  internationalTransportPage: {
    pl: {
      hero: skeleton(
        'Sprowadzenie zmarlego do Polski z zagranicy',
        'Organizujemy miedzynarodowy transport do Polski, pomagamy w dokumentach i przejmujemy spokojna koordynacje calej procedury.',
        ['Wyjasnij proces od pierwszego telefonu do przekazania w Polsce.', 'Pokaz roznice miedzy transportem drogowym i lotniczym.', 'Podkresl pomoc rodzinie, kontakt 24/7 i brak zaliczki.'],
        'Skontaktuj sie 24/7',
        'Zobacz formalnosci',
      ),
      sections: [
        { id: 'procedure', title: 'Jak wyglada procedura krok po kroku', summary: 'Pierwszy kontakt, ustalenie miejsca odbioru, dokumenty, transport i przekazanie w Polsce.' },
        { id: 'documents', title: 'Jakie dokumenty sa zwykle potrzebne', summary: 'Opisz najczestsze dokumenty i zaznacz, ze zakres zalezy od kraju oraz trybu przewozu.' },
        { id: 'modes', title: 'Transport drogowy czy lotniczy', summary: 'Wyjasnij, ze wybor zalezy od trasy, czasu, przepisow i miejsca odbioru.' },
      ],
      faqQuestions: ['Jak szybko mozna rozpoczac sprowadzenie zmarlego do Polski?', 'Czy pomagacie w kontakcie z placowka za granica?', 'Czy rodzine mozna obsluzyc zdalnie?'],
    },
    en: basePageCopy('en', 'Bringing the deceased to Poland'),
    de: basePageCopy('de', 'Uberfuhrung einer verstorbenen Person nach Polen'),
    fr: basePageCopy('fr', 'Rapatriement du defunt vers la Pologne'),
    nl: basePageCopy('nl', 'Overbrenging van de overledene naar Polen'),
    it: basePageCopy('it', 'Rimpatrio del defunto verso la Polonia'),
  },
  munichRoute: {
    pl: {
      hero: skeleton(
        'Transport zwlok z Monachium do Polski',
        'Organizujemy odbior z Monachium i okolic, pomagamy w formalnosciach po stronie niemieckiej i polskiej oraz koordynujemy cala trase do Polski.',
        ['Uwzglednij odbior ze szpitala, prosektorium lub domu pogrzebowego.', 'Wyjasnij, kiedy wybierany jest bus, a kiedy transport lotniczy.', 'Dodaj sygnal o szybkiej reakcji i spokojnej opiece nad rodzina.'],
        'Zadzwon w sprawie trasy Monachium -> Polska',
        'Zobacz formalnosci z Niemiec',
      ),
      sections: [
        { id: 'pickup', title: 'Odbior ciala z placowki w Monachium', summary: 'Opisz kontakt z placowka oraz przygotowanie do odbioru.' },
        { id: 'documents', title: 'Dokumenty wymagane przy transporcie z Niemiec', summary: 'Wymien najczestsze dokumenty i zaznacz, ze zakres zalezy od lokalnej placowki.' },
      ],
      faqQuestions: ['Czy organizujecie odbior bezposrednio z placowki w Monachium?', 'Jakie dokumenty sa zwykle potrzebne przy transporcie z Niemiec?', 'Czy na tej trasie czesciej wybierany jest transport drogowy czy lotniczy?'],
    },
    en: basePageCopy('en', 'Repatriation from Munich to Poland'),
    de: basePageCopy('de', 'Uberfuhrung Munchen Polen'),
    fr: basePageCopy('fr', 'Rapatriement de Munich vers la Pologne'),
    nl: basePageCopy('nl', 'Transport van Munchen naar Polen'),
    it: basePageCopy('it', 'Rimpatrio da Monaco di Baviera verso la Polonia'),
  },
  berlinRoute: {
    pl: {
      hero: skeleton(
        'Transport zwlok z Berlina do Polski',
        'Obslugujemy przewoz z Berlina do Polski z odbiorem z placowki, pomoca w dokumentach i spokojna koordynacja po obu stronach granicy.',
        ['Podkresl sprawna logistyke drogowa.', 'Dodaj informacje o dokumentach i kontakcie z placowka.', 'Wzmocnij przekaz 24/7 i zdalnej obslugi rodziny.'],
        'Zadzwon w sprawie trasy Berlin -> Polska',
        'Sprawdz dokumenty',
      ),
      sections: [
        { id: 'route', title: 'Jak wyglada trasa Berlin -> Polska', summary: 'Wyjasnij szybki model organizacji i przekazania do Polski.' },
        { id: 'family-support', title: 'Pomoc rodzinie na odleglosc', summary: 'Pokaz, ze wiekszosc ustalen mozna przeprowadzic telefonicznie i online.' },
      ],
      faqQuestions: ['Czy mozna szybko zorganizowac transport z Berlina do Polski?', 'Czy pomagacie rodzinie mieszkajacej juz w Polsce?', 'Czy usluge mozna rozpoczac bez zaliczki?'],
    },
    en: basePageCopy('en', 'Repatriation from Berlin to Poland'),
    de: basePageCopy('de', 'Uberfuhrung Berlin Polen'),
    fr: basePageCopy('fr', 'Rapatriement de Berlin vers la Pologne'),
    nl: basePageCopy('nl', 'Transport van Berlijn naar Polen'),
    it: basePageCopy('it', 'Rimpatrio da Berlino verso la Polonia'),
  },
  parisRoute: {
    pl: {
      hero: skeleton(
        'Transport zwlok z Paryza do Polski',
        'Pomagamy rodzinom w organizacji przewozu z Paryza do Polski, w tym w odbiorze z placowki, dokumentach francuskich i dalszym przekazaniu do kraju.',
        ['Uwzglednij czestsza role logistyki lotniczej lub laczonej.', 'Opisz kontakt z placowka i formalnosci po stronie francuskiej.', 'Dodaj spokojne CTA dla rodzin przebywajacych za granica.'],
        'Zadzwon w sprawie trasy Paryz -> Polska',
        'Poznaj formalnosci z Francji',
      ),
      sections: [
        { id: 'modes', title: 'Transport drogowy czy lotniczy z Francji', summary: 'Wyjasnij, od czego zalezy wybor modelu przewozu na tej trasie.' },
        { id: 'documents', title: 'Dokumenty i formalnosci we Francji', summary: 'Pokaz zakres formalnosci bez obiecywania jednego stalego zestawu.' },
      ],
      faqQuestions: ['Czy odbieracie cialo bezposrednio z placowki w Paryzu?', 'Jakie dokumenty sa zwykle potrzebne przy transporcie z Francji?', 'Kiedy na tej trasie wybierany jest transport lotniczy?'],
    },
    en: basePageCopy('en', 'Repatriation from Paris to Poland'),
    de: basePageCopy('de', 'Uberfuhrung Paris Polen'),
    fr: basePageCopy('fr', 'Rapatriement de Paris vers la Pologne'),
    nl: basePageCopy('nl', 'Transport van Parijs naar Polen'),
    it: basePageCopy('it', 'Rimpatrio da Parigi verso la Polonia'),
  },
  amsterdamRoute: {
    pl: {
      hero: skeleton(
        'Transport zwlok z Amsterdamu do Polski',
        'Organizujemy przewoz z Amsterdamu do Polski z pomoca w kontakcie z placowka, dokumentach holenderskich i sprawnym przekazaniu do kraju.',
        ['Podkresl znaczenie transportu drogowego na tej trasie.', 'Wyjasnij obsluge rodziny mieszkajacej za granica.', 'Dodaj komunikat o calej dobie i uczciwej wycenie.'],
        'Zadzwon w sprawie trasy Amsterdam -> Polska',
        'Sprawdz formalnosci z Holandii',
      ),
      sections: [
        { id: 'pickup', title: 'Odbior w Amsterdamie i okolicach', summary: 'Opisz typowe miejsca odbioru i sposob ustalenia przekazania ciala.' },
        { id: 'road', title: 'Dlaczego ta trasa czesto odbywa sie droga ladowa', summary: 'Wyjasnij logistyczny sens przewozu busem bez agresywnej sprzedazy.' },
      ],
      faqQuestions: ['Czy odbieracie zmarlych bezposrednio w Amsterdamie?', 'Jakie dokumenty sa zwykle potrzebne z Holandii?', 'Czy na tej trasie przewaznie wystarcza transport drogowy?'],
    },
    en: basePageCopy('en', 'Repatriation from Amsterdam to Poland'),
    de: basePageCopy('de', 'Uberfuhrung Amsterdam Polen'),
    fr: basePageCopy('fr', 'Rapatriement d Amsterdam vers la Pologne'),
    nl: basePageCopy('nl', 'Transport van Amsterdam naar Polen'),
    it: basePageCopy('it', 'Rimpatrio da Amsterdam verso la Polonia'),
  },
  londonRoute: {
    pl: {
      hero: skeleton(
        'Transport zwlok z Londynu do Polski',
        'Pomagamy w organizacji sprowadzenia zmarlego z Londynu do Polski, koordynujac kontakt z placowka, dokumenty po stronie brytyjskiej i przekazanie do kraju.',
        ['Podkresl specyfike Wielkiej Brytanii i czestszy udzial transportu lotniczego lub laczonego.', 'Wyjasnij, ze rodzine mozna obsluzyc zdalnie.', 'Dodaj CTA 24/7 i komunikat o spokojnym przejeciu formalnosci.'],
        'Zadzwon w sprawie trasy Londyn -> Polska',
        'Poznaj formalnosci z UK',
      ),
      sections: [
        { id: 'uk-formalities', title: 'Formalnosci po stronie brytyjskiej', summary: 'Wytlumacz, ze zakres dokumentow i zgody zalezy od miejsca oraz sposobu transportu.' },
        { id: 'air', title: 'Kiedy wybierany jest transport lotniczy', summary: 'Opisz, dlaczego na tej trasie czesto rozpatruje sie lot lub model laczony.' },
      ],
      faqQuestions: ['Czy organizujecie odbior zmarlych w Londynie?', 'Jakie dokumenty sa zwykle potrzebne z Wielkiej Brytanii?', 'Czy rodzine mozna obsluzyc calkowicie zdalnie?'],
    },
    en: basePageCopy('en', 'Repatriation from London to Poland'),
    de: basePageCopy('de', 'Uberfuhrung London Polen'),
    fr: basePageCopy('fr', 'Rapatriement de Londres vers la Pologne'),
    nl: basePageCopy('nl', 'Transport van Londen naar Polen'),
    it: basePageCopy('it', 'Rimpatrio da Londra verso la Polonia'),
  },
  contactPage: {
    pl: {
      hero: skeleton(
        'Kontakt 24/7 w sprawie transportu do Polski',
        'Jesli potrzebujesz pilnej pomocy, zadzwon lub napisz. Po pierwszym kontakcie od razu ustalimy trase, miejsce odbioru i dalsze kroki.',
        ['Pokaz numer glowny, numer miedzynarodowy i WhatsApp.', 'Wyjasnij, kiedy lepiej zadzwonic niz wyslac formularz.', 'Dodaj uspokojenie, ze nie trzeba miec od razu kompletu dokumentow.'],
        'Zadzwon teraz',
        'Napisz na WhatsApp',
      ),
      sections: [
        { id: 'channels', title: 'Jak najlepiej skontaktowac sie z nami', summary: 'Telefon przy pilnych sprawach, WhatsApp dla rodzin za granica, formularz do szybkiego zgloszenia.' },
      ],
      faqQuestions: ['Czy moge zadzwonic bez kompletu dokumentow?', 'Czy obslugujecie rodziny mieszkajace za granica?', 'Czy mozna zaczac od kontaktu przez WhatsApp?'],
    },
    en: basePageCopy('en', '24/7 contact'),
    de: basePageCopy('de', 'Kontakt 24/7'),
    fr: basePageCopy('fr', 'Contact 24/7'),
    nl: basePageCopy('nl', '24/7 contact'),
    it: basePageCopy('it', 'Contatto 24/7'),
  },
  faqPage: {
    pl: {
      hero: skeleton(
        'Najwazniejsze pytania o sprowadzenie zmarlego do Polski',
        'Zebrane odpowiedzi na pytania, ktore rodziny zadaja najczesciej przy organizacji transportu z zagranicy do Polski.',
        ['Podkresl praktyczny charakter FAQ.', 'Podziel odpowiedzi na dokumenty, czas, transport i kontakt.', 'Dodaj CTA do telefonu przy sprawie pilnej.'],
        'Skontaktuj sie 24/7',
        'Zobacz glowna usluge',
      ),
      sections: [
        { id: 'faq-groups', title: 'Pytania o dokumenty, czas i sposob transportu', summary: 'Uporzadkuj FAQ tak, aby rodzina szybko znalazla nastepny krok.' },
      ],
      faqQuestions: ['Jakie dokumenty sa zwykle potrzebne?', 'Ile moze trwac organizacja transportu do Polski?', 'Czy mozna rozpoczac procedure bez zaliczki?'],
    },
    en: basePageCopy('en', 'Frequently asked questions'),
    de: basePageCopy('de', 'Haufige Fragen'),
    fr: basePageCopy('fr', 'Questions frequentes'),
    nl: basePageCopy('nl', 'Veelgestelde vragen'),
    it: basePageCopy('it', 'Domande frequenti'),
  },
}


