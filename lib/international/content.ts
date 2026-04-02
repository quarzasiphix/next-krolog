import { SITE_URL } from '@/lib/constants'

export const SUPPORTED_LOCALES = ['pl', 'en', 'de', 'fr', 'nl', 'it'] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]
export type TransportMode = 'road' | 'air'
export type ServiceKey = 'international-transport' | 'repatriation-to-poland' | 'air-transport'
export type PageKind = 'home' | 'services' | 'service' | 'formalities' | 'contact' | 'faq' | 'country' | 'city' | 'route'

export type FAQEntry = { id: string; questionPerLocale: Record<Locale, string>; answerPerLocale: Record<Locale, string> }
export type DocumentRequirement = { id: string; labelPerLocale: Record<Locale, string>; notePerLocale: Record<Locale, string> }
export type ContactChannel = { id: string; type: 'phone' | 'whatsapp' | 'email'; labelPerLocale: Record<Locale, string>; value: string; href: string; isPrimary?: boolean }
export type Service = { key: ServiceKey; slugPerLocale: Record<Locale, string>; namePerLocale: Record<Locale, string>; summaryPerLocale: Record<Locale, string> }
export type Country = { code: string; slugPerLocale: Record<Locale, string>; namesPerLocale: Record<Locale, string>; priority: number; transportModes: TransportMode[]; legalNotes: Record<Locale, string>; requiredDocuments: string[]; featuredCities: string[] }
export type City = { code: string; countryCode: string; slugPerLocale: Record<Locale, string>; namesPerLocale: Record<Locale, string>; airportNearby: string; introPerLocale: Record<Locale, string>; seoTitleTemplate: Record<Locale, string>; seoDescriptionTemplate: Record<Locale, string>; faqRefs: string[] }
export type Route = { code: string; fromCity: string; fromCountry: string; toCountry: 'PL'; routeType: 'repatriation'; primaryLanguage: Locale; urgencyLevel: 'urgent'; transportModes: TransportMode[]; contentBlocks: string[] }

export type ResolvedIntlPage =
  | { kind: 'home'; locale: Locale }
  | { kind: 'services'; locale: Locale }
  | { kind: 'service'; locale: Locale; service: Service }
  | { kind: 'formalities'; locale: Locale }
  | { kind: 'contact'; locale: Locale }
  | { kind: 'faq'; locale: Locale }
  | { kind: 'country'; locale: Locale; country: Country }
  | { kind: 'city'; locale: Locale; country: Country; city: City }
  | { kind: 'route'; locale: Locale; country: Country; city: City; route: Route }

export const POLAND_LABELS: Record<Locale, string> = {
  pl: 'Polska',
  en: 'Poland',
  de: 'Polen',
  fr: 'Pologne',
  nl: 'Polen',
  it: 'Polonia',
}

export const localeInfo: Record<Locale, { label: string; htmlLang: string; ogLocale: string; sectionSlugs: { services: string; formalities: string; countries: string; cities: string; routes: string; contact: string; faq: string }; homeTitle: string; homeDescription: string; nav: { services: string; routes: string; contact: string; faq: string; formalities: string }; cta: { urgent: string; whatsapp: string; contact: string; learnMore: string } }> = {
  pl: { label: 'Polski', htmlLang: 'pl', ogLocale: 'pl_PL', sectionSlugs: { services: 'uslugi', formalities: 'formalnosci', countries: 'kraje', cities: 'miasta', routes: 'trasy', contact: 'kontakt', faq: 'faq' }, homeTitle: 'Międzynarodowy transport zwłok do Polski', homeDescription: 'Całodobowa organizacja sprowadzenia zmarłych do Polski z Europy. Dedykowane trasy, formalności i wsparcie bez kosztów z góry.', nav: { services: 'Usługi', routes: 'Trasy', contact: 'Kontakt 24/7', faq: 'FAQ', formalities: 'Formalności' }, cta: { urgent: 'Zadzwoń teraz', whatsapp: 'WhatsApp', contact: 'Skontaktuj się 24/7', learnMore: 'Dowiedz się więcej' } },
  en: { label: 'English', htmlLang: 'en', ogLocale: 'en_GB', sectionSlugs: { services: 'services', formalities: 'formalities', countries: 'countries', cities: 'cities', routes: 'routes', contact: 'contact', faq: 'faq' }, homeTitle: 'International repatriation of remains to Poland', homeDescription: '24/7 funeral repatriation to Poland from Europe. Dedicated route pages, clear paperwork support and urgent family assistance.', nav: { services: 'Services', routes: 'Routes', contact: '24/7 Contact', faq: 'FAQ', formalities: 'Formalities' }, cta: { urgent: 'Call now', whatsapp: 'WhatsApp', contact: 'Contact us 24/7', learnMore: 'Learn more' } },
  de: { label: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE', sectionSlugs: { services: 'leistungen', formalities: 'formalitaeten', countries: 'laender', cities: 'staedte', routes: 'routen', contact: 'kontakt', faq: 'faq' }, homeTitle: 'Internationale Überführung nach Polen', homeDescription: '24/7 Organisation der Überführung Verstorbener nach Polen aus Europa. Klare Abläufe, Dokumente und schnelle Unterstützung.', nav: { services: 'Leistungen', routes: 'Routen', contact: 'Kontakt 24/7', faq: 'FAQ', formalities: 'Formalitäten' }, cta: { urgent: 'Jetzt anrufen', whatsapp: 'WhatsApp', contact: '24/7 Kontakt', learnMore: 'Mehr erfahren' } },
  fr: { label: 'Français', htmlLang: 'fr', ogLocale: 'fr_FR', sectionSlugs: { services: 'services', formalities: 'demarches', countries: 'pays', cities: 'villes', routes: 'itineraires', contact: 'contact', faq: 'faq' }, homeTitle: 'Rapatriement funéraire vers la Pologne', homeDescription: 'Organisation 24/7 du rapatriement vers la Pologne depuis l Europe. Pages dédiées par ville, formalités et contact immédiat.', nav: { services: 'Services', routes: 'Itinéraires', contact: 'Contact 24/7', faq: 'FAQ', formalities: 'Démarches' }, cta: { urgent: 'Appeler maintenant', whatsapp: 'WhatsApp', contact: 'Contact 24/7', learnMore: 'En savoir plus' } },
  nl: { label: 'Nederlands', htmlLang: 'nl', ogLocale: 'nl_NL', sectionSlugs: { services: 'diensten', formalities: 'formaliteiten', countries: 'landen', cities: 'steden', routes: 'routes', contact: 'contact', faq: 'faq' }, homeTitle: 'Internationaal vervoer van overledenen naar Polen', homeDescription: '24/7 repatriëring naar Polen vanuit Europa. Duidelijke routepagina s, documentondersteuning en direct contact voor families.', nav: { services: 'Diensten', routes: 'Routes', contact: 'Contact 24/7', faq: 'FAQ', formalities: 'Formaliteiten' }, cta: { urgent: 'Bel nu', whatsapp: 'WhatsApp', contact: 'Neem 24/7 contact op', learnMore: 'Meer informatie' } },
  it: { label: 'Italiano', htmlLang: 'it', ogLocale: 'it_IT', sectionSlugs: { services: 'servizi', formalities: 'formalita', countries: 'paesi', cities: 'citta', routes: 'rotte', contact: 'contatto', faq: 'faq' }, homeTitle: 'Rimpatrio funebre verso la Polonia', homeDescription: 'Organizzazione 24/7 del rimpatrio in Polonia dall Europa. Pagine dedicate per città, documenti e assistenza immediata.', nav: { services: 'Servizi', routes: 'Rotte', contact: 'Contatto 24/7', faq: 'FAQ', formalities: 'Formalità' }, cta: { urgent: 'Chiama ora', whatsapp: 'WhatsApp', contact: 'Contatto 24/7', learnMore: 'Scopri di più' } },
}

export const internationalContactChannels: ContactChannel[] = [
  { id: 'international-phone', type: 'phone', labelPerLocale: { pl: 'Międzynarodowy transport zwłok 24/7', en: 'International repatriation line 24/7', de: 'Internationale Überführung 24/7', fr: 'Ligne rapatriement 24/7', nl: 'Internationale repatriëring 24/7', it: 'Linea rimpatrio 24/7' }, value: '+48 602 270 050', href: 'tel:+48602270050', isPrimary: true },
  { id: 'main-phone', type: 'phone', labelPerLocale: { pl: 'Główny numer całodobowy', en: 'Main 24/7 line', de: 'Hauptnummer 24/7', fr: 'Numéro principal 24/7', nl: 'Hoofdnummer 24/7', it: 'Numero principale 24/7' }, value: '+48 602 274 661', href: 'tel:+48602274661' },
  { id: 'whatsapp', type: 'whatsapp', labelPerLocale: { pl: 'WhatsApp dla rodzin za granicą', en: 'WhatsApp for families abroad', de: 'WhatsApp für Familien im Ausland', fr: 'WhatsApp pour les familles à l étranger', nl: 'WhatsApp voor families in het buitenland', it: 'WhatsApp per le famiglie all estero' }, value: '+48 602 270 050', href: 'https://wa.me/48602270050' },
  { id: 'email', type: 'email', labelPerLocale: { pl: 'Email kontaktowy', en: 'Contact email', de: 'Kontakt E-Mail', fr: 'Email de contact', nl: 'Contact e-mail', it: 'Email di contatto' }, value: 'kontakt@nekrolog-lodz.com', href: 'mailto:kontakt@nekrolog-lodz.com' },
]

export const documentRequirements: DocumentRequirement[] = [
  { id: 'death-certificate', labelPerLocale: { pl: 'Akt zgonu lub karta zgonu', en: 'Death certificate or medical death record', de: 'Sterbeurkunde oder ärztliche Todesbescheinigung', fr: 'Acte de décès ou certificat médical', nl: 'Overlijdensakte of medisch attest', it: 'Certificato di morte o attestazione medica' }, notePerLocale: { pl: 'Pomagamy sprawdzić, który dokument jest potrzebny na danym etapie.', en: 'We verify which document is required at each stage.', de: 'Wir prüfen, welches Dokument in jeder Phase benötigt wird.', fr: 'Nous vérifions quel document est requis à chaque étape.', nl: 'Wij controleren welk document in elke fase nodig is.', it: 'Verifichiamo quale documento serve in ogni fase.' } },
  { id: 'identity', labelPerLocale: { pl: 'Dokument tożsamości zmarłego', en: 'Identity document of the deceased', de: 'Ausweisdokument der verstorbenen Person', fr: 'Pièce d identité du défunt', nl: 'Identiteitsdocument van de overledene', it: 'Documento di identità del defunto' }, notePerLocale: { pl: 'Może to być dowód osobisty, paszport lub lokalny dokument pobytowy.', en: 'This may be an ID card, passport or local residence document.', de: 'Dies kann ein Ausweis, Reisepass oder Aufenthaltsdokument sein.', fr: 'Il peut s agir d une carte d identité, d un passeport ou d un titre de séjour.', nl: 'Dit kan een identiteitskaart, paspoort of verblijfsdocument zijn.', it: 'Può essere carta d identità, passaporto o documento di soggiorno.' } },
  { id: 'authorisation', labelPerLocale: { pl: 'Upoważnienie rodziny do organizacji transportu', en: 'Family authorisation to arrange transport', de: 'Vollmacht der Familie für die Überführung', fr: 'Autorisation familiale pour organiser le transport', nl: 'Volmacht van de familie voor het transport', it: 'Delega familiare per organizzare il trasporto' }, notePerLocale: { pl: 'Przygotowujemy prosty wzór dokumentu i prowadzimy przez podpisy.', en: 'We provide a clear template and guide the family through signatures.', de: 'Wir stellen eine klare Vorlage bereit und begleiten bei den Unterschriften.', fr: 'Nous préparons un modèle simple et accompagnons la signature.', nl: 'Wij leveren een eenvoudig sjabloon en begeleiden de ondertekening.', it: 'Prepariamo un modello semplice e guidiamo la famiglia nella firma.' } },
  { id: 'consular', labelPerLocale: { pl: 'Dokumenty konsularne i przewozowe', en: 'Consular and transport paperwork', de: 'Konsularische und transportbezogene Unterlagen', fr: 'Documents consulaires et de transport', nl: 'Consulaire en transportdocumenten', it: 'Documenti consolari e di trasporto' }, notePerLocale: { pl: 'Zakres zależy od kraju i wybranego trybu przewozu drogowego lub lotniczego.', en: 'The scope depends on the country and whether road or air transport is chosen.', de: 'Der Umfang hängt vom Land und von Straßen- oder Lufttransport ab.', fr: 'Le périmètre dépend du pays et du mode routier ou aérien.', nl: 'De omvang hangt af van het land en van weg- of luchtvervoer.', it: 'La documentazione dipende dal Paese e dal trasporto su strada o aereo.' } },
]

export const serviceCatalog: Service[] = [
  { key: 'international-transport', slugPerLocale: { pl: 'miedzynarodowy-transport-zwlok', en: 'international-transport-of-remains', de: 'internationaler-transport-verstorbener', fr: 'transport-international-du-defunt', nl: 'internationaal-vervoer-van-overledenen', it: 'trasporto-internazionale-della-salma' }, namePerLocale: { pl: 'Międzynarodowy transport zwłok', en: 'International transport of remains', de: 'Internationaler Transport Verstorbener', fr: 'Transport international du défunt', nl: 'Internationaal vervoer van overledenen', it: 'Trasporto internazionale della salma' }, summaryPerLocale: { pl: 'Koordynujemy transport drogowy i lotniczy z Europy do Polski oraz dalszą organizację po stronie polskiej.', en: 'We coordinate road and air transport from Europe to Poland and the next steps on the Polish side.', de: 'Wir koordinieren Straßen- und Lufttransport aus Europa nach Polen sowie die nächsten Schritte in Polen.', fr: 'Nous coordonnons le transport routier et aérien vers la Pologne ainsi que la suite des démarches en Pologne.', nl: 'Wij coördineren weg- en luchtvervoer naar Polen en de verdere organisatie aan Poolse zijde.', it: 'Coordiniamo il trasporto su strada e aereo verso la Polonia e le fasi successive sul territorio polacco.' } },
  { key: 'repatriation-to-poland', slugPerLocale: { pl: 'sprowadzenie-zmarlego-do-polski', en: 'bringing-the-deceased-to-poland', de: 'ueberfuehrung-nach-polen', fr: 'rapatriement-vers-la-pologne', nl: 'overbrenging-naar-polen', it: 'rimpatrio-verso-la-polonia' }, namePerLocale: { pl: 'Sprowadzenie zmarłego do Polski', en: 'Bringing the deceased to Poland', de: 'Überführung nach Polen', fr: 'Rapatriement vers la Pologne', nl: 'Overbrenging naar Polen', it: 'Rimpatrio verso la Polonia' }, summaryPerLocale: { pl: 'Prowadzimy rodzinę przez formalności, kontakt z zagranicznymi instytucjami i odbiór w Polsce.', en: 'We guide the family through paperwork, foreign institutions and reception in Poland.', de: 'Wir begleiten die Familie bei Dokumenten, Kontakten mit Behörden und der Übergabe in Polen.', fr: 'Nous accompagnons la famille pour les formalités, les interlocuteurs étrangers et l accueil en Pologne.', nl: 'Wij begeleiden de familie bij documenten, buitenlandse instanties en de ontvangst in Polen.', it: 'Seguiamo la famiglia nelle pratiche, nei contatti esteri e nella presa in carico in Polonia.' } },
  { key: 'air-transport', slugPerLocale: { pl: 'transport-lotniczy-zmarlych', en: 'air-transport-of-remains', de: 'lufttransport-verstorbener', fr: 'transport-aerien-du-defunt', nl: 'luchtvervoer-van-overledenen', it: 'trasporto-aereo-della-salma' }, namePerLocale: { pl: 'Transport lotniczy zmarłych', en: 'Air transport of remains', de: 'Lufttransport Verstorbener', fr: 'Transport aérien du défunt', nl: 'Luchtvervoer van overledenen', it: 'Trasporto aereo della salma' }, summaryPerLocale: { pl: 'Dobieramy transport lotniczy, gdy czas, odległość albo przepisy wymagają szybkiego przewozu.', en: 'We arrange air transport when time, distance or regulations require a faster route.', de: 'Wir organisieren Lufttransport, wenn Zeit, Entfernung oder Vorschriften eine schnelle Lösung erfordern.', fr: 'Nous mettons en place le transport aérien quand le temps, la distance ou les règles l exigent.', nl: 'Wij regelen luchtvervoer wanneer tijd, afstand of regelgeving dat vereisen.', it: 'Organizziamo il trasporto aereo quando tempi, distanza o norme richiedono una soluzione rapida.' } },
]

export const faqEntries: FAQEntry[] = [
  { id: 'time', questionPerLocale: { pl: 'Jak szybko można zorganizować transport do Polski?', en: 'How quickly can transport to Poland be arranged?', de: 'Wie schnell kann die Überführung nach Polen organisiert werden?', fr: 'En combien de temps le transport vers la Pologne peut-il être organisé ?', nl: 'Hoe snel kan vervoer naar Polen worden geregeld?', it: 'Quanto rapidamente si può organizzare il trasporto verso la Polonia?' }, answerPerLocale: { pl: 'Pierwszy plan działania ustalamy od razu po telefonie. Finalny termin zależy od dokumentów, miejsca zgonu i trybu transportu.', en: 'We prepare the first action plan immediately after the call. The final timeline depends on paperwork, the place of death and the transport mode.', de: 'Den ersten Aktionsplan legen wir direkt nach dem Anruf fest. Der endgültige Zeitrahmen hängt von Dokumenten, Sterbeort und Transportart ab.', fr: 'Nous préparons le premier plan d action dès le premier appel. Le délai final dépend des documents, du lieu du décès et du mode de transport.', nl: 'Wij maken direct na het eerste telefoongesprek een plan. De uiteindelijke termijn hangt af van documenten, locatie van overlijden en vervoerswijze.', it: 'Prepariamo il primo piano operativo subito dopo la chiamata. I tempi finali dipendono dai documenti, dal luogo del decesso e dal tipo di trasporto.' } },
  { id: 'remote', questionPerLocale: { pl: 'Czy rodzinę można obsłużyć zdalnie?', en: 'Can the family be assisted remotely?', de: 'Kann die Familie vollständig aus der Ferne betreut werden?', fr: 'Pouvez-vous accompagner la famille à distance ?', nl: 'Kan de familie op afstand worden geholpen?', it: 'La famiglia può essere assistita da remoto?' }, answerPerLocale: { pl: 'Tak. Większość ustaleń prowadzimy telefonicznie i online, co ogranicza stres i przyspiesza decyzje.', en: 'Yes. Most arrangements can be handled by phone and online, which reduces stress and speeds up decisions.', de: 'Ja. Die meisten Abstimmungen laufen telefonisch und online, was Stress reduziert und Entscheidungen beschleunigt.', fr: 'Oui. La majorité des échanges se fait par téléphone et en ligne, ce qui réduit le stress et accélère les décisions.', nl: 'Ja. De meeste afstemming kan telefonisch en online gebeuren, wat stress verlaagt en beslissingen versnelt.', it: 'Sì. Gran parte delle attività può essere gestita per telefono e online, riducendo lo stress e accelerando le decisioni.' } },
  { id: 'payment', questionPerLocale: { pl: 'Czy można rozpocząć organizację bez gotówki od ręki?', en: 'Can the process start without immediate cash on hand?', de: 'Kann die Organisation ohne sofortige Zahlung begonnen werden?', fr: 'Peut-on démarrer sans disposer immédiatement de liquidités ?', nl: 'Kan het proces starten zonder direct contant geld?', it: 'Si può iniziare senza disponibilità immediata di denaro?' }, answerPerLocale: { pl: 'Tak. Wyjaśniamy możliwości rozliczenia bez kosztów z góry i pomagamy rodzinie przejść przez temat zasiłku pogrzebowego.', en: 'Yes. We explain no-upfront-payment options and help the family understand how funeral benefit settlement may work.', de: 'Ja. Wir erklären Möglichkeiten ohne Vorauszahlung und begleiten die Familie beim Thema Bestattungsbeihilfe.', fr: 'Oui. Nous expliquons les options sans paiement initial et aidons la famille à comprendre le règlement via l allocation funéraire.', nl: 'Ja. Wij leggen opties zonder vooruitbetaling uit en helpen de familie bij de afwikkeling via de uitvaarttoelage.', it: 'Sì. Spieghiamo le opzioni senza anticipo e aiutiamo la famiglia a capire la liquidazione tramite il sussidio funerario.' } },
]

const lr = (pl: string, en: string, de: string, fr: string, nl: string, it: string) => ({ pl, en, de, fr, nl, it })

export const countries: Country[] = [
  { code: 'DE', slugPerLocale: lr('niemcy', 'germany', 'deutschland', 'allemagne', 'duitsland', 'germania'), namesPerLocale: lr('Niemcy', 'Germany', 'Deutschland', 'Allemagne', 'Duitsland', 'Germania'), priority: 10, transportModes: ['road', 'air'], legalNotes: { pl: 'W Niemczech zwykle sprawdzamy dokumenty urzędowe oraz uzgodnienia z lokalnym domem pogrzebowym lub szpitalem.', en: 'In Germany we usually verify civil paperwork and coordinate with the local funeral home or hospital.', de: 'In Deutschland prüfen wir in der Regel standesamtliche Unterlagen und koordinieren mit Bestatter oder Krankenhaus.', fr: 'En Allemagne, nous vérifions les documents d état civil et coordonnons avec les pompes funèbres ou l hôpital.', nl: 'In Duitsland controleren wij burgerlijke documenten en stemmen wij af met uitvaartondernemer of ziekenhuis.', it: 'In Germania verifichiamo la documentazione anagrafica e coordiniamo con impresa funebre o ospedale.' }, requiredDocuments: ['death-certificate', 'identity', 'authorisation', 'consular'], featuredCities: ['munich', 'berlin', 'hamburg', 'dortmund', 'cologne'] },
  { code: 'FR', slugPerLocale: lr('francja', 'france', 'frankreich', 'france', 'frankrijk', 'francia'), namesPerLocale: lr('Francja', 'France', 'Frankreich', 'France', 'Frankrijk', 'Francia'), priority: 9, transportModes: ['road', 'air'], legalNotes: { pl: 'We Francji ważne jest uzgodnienie dokumentów przewozowych oraz procedury z prefekturą lub partnerem funeralnym.', en: 'In France it is important to align transport paperwork and the process with the prefecture or funeral partner.', de: 'In Frankreich müssen Transportpapiere und das Verfahren mit Präfektur oder Bestatter abgestimmt werden.', fr: 'En France, il faut bien cadrer les documents de transport et la procédure avec la préfecture ou l opérateur funéraire.', nl: 'In Frankrijk moeten transportdocumenten en procedure goed worden afgestemd met prefectuur of uitvaartpartner.', it: 'In Francia è importante coordinare i documenti di trasporto e la procedura con prefettura o partner funebre.' }, requiredDocuments: ['death-certificate', 'identity', 'authorisation', 'consular'], featuredCities: ['paris', 'lyon', 'lille', 'marseille'] },
  { code: 'NL', slugPerLocale: lr('holandia', 'netherlands', 'niederlande', 'pays-bas', 'nederland', 'paesi-bassi'), namesPerLocale: lr('Holandia', 'Netherlands', 'Niederlande', 'Pays-Bas', 'Nederland', 'Paesi Bassi'), priority: 9, transportModes: ['road', 'air'], legalNotes: { pl: 'Dla Holandii często wybieramy transport drogowy, ale analizujemy też lotniczy przy pilnych odbiorach.', en: 'For the Netherlands road transport is often the best option, but we also assess air transport for urgent cases.', de: 'Für die Niederlande ist Straßentransport oft passend, bei eilbedürftigen Fällen prüfen wir auch den Luftweg.', fr: 'Pour les Pays-Bas, le transport routier est fréquent, mais nous évaluons aussi la voie aérienne si nécessaire.', nl: 'Voor Nederland is wegvervoer vaak passend, maar bij spoed beoordelen wij ook luchtvervoer.', it: 'Per i Paesi Bassi il trasporto su strada è frequente, ma per urgenze valutiamo anche la via aerea.' }, requiredDocuments: ['death-certificate', 'identity', 'authorisation', 'consular'], featuredCities: ['amsterdam', 'rotterdam', 'eindhoven'] },
  { code: 'BE', slugPerLocale: lr('belgia', 'belgium', 'belgien', 'belgique', 'belgie', 'belgio'), namesPerLocale: lr('Belgia', 'Belgium', 'Belgien', 'Belgique', 'België', 'Belgio'), priority: 8, transportModes: ['road', 'air'], legalNotes: { pl: 'Belgia dobrze łączy się z transportem drogowym do Polski, ale formalności dobieramy indywidualnie do regionu.', en: 'Belgium is well suited to road transport to Poland, while the paperwork is adjusted to the local region.', de: 'Belgien eignet sich gut für den Straßentransport nach Polen, die Dokumente stimmen wir regional ab.', fr: 'La Belgique se prête bien au transport routier vers la Pologne, avec des formalités adaptées à la région.', nl: 'België leent zich goed voor wegvervoer naar Polen, met formaliteiten afgestemd op de regio.', it: 'Il Belgio si presta bene al trasporto su strada verso la Polonia, con pratiche adattate alla regione.' }, requiredDocuments: ['death-certificate', 'identity', 'authorisation', 'consular'], featuredCities: ['brussels', 'antwerp'] },
  { code: 'AT', slugPerLocale: lr('austria', 'austria', 'oesterreich', 'autriche', 'oostenrijk', 'austria'), namesPerLocale: lr('Austria', 'Austria', 'Österreich', 'Autriche', 'Oostenrijk', 'Austria'), priority: 8, transportModes: ['road', 'air'], legalNotes: { pl: 'Austria pozwala zwykle szybko ustalić odbiór, jeśli dokumenty są kompletne i rodzina działa bez zwłoki.', en: 'Austria usually allows a fast collection plan when documents are complete and the family can decide quickly.', de: 'In Österreich lässt sich die Überführung oft zügig planen, wenn die Unterlagen vollständig sind.', fr: 'En Autriche, l organisation est souvent rapide si le dossier est complet et la famille peut décider vite.', nl: 'In Oostenrijk kan het traject vaak snel worden gepland als de documenten compleet zijn.', it: 'In Austria il percorso può essere organizzato rapidamente quando i documenti sono completi.' }, requiredDocuments: ['death-certificate', 'identity', 'authorisation', 'consular'], featuredCities: ['vienna'] },
  { code: 'IT', slugPerLocale: lr('wlochy', 'italy', 'italien', 'italie', 'italie', 'italia'), namesPerLocale: lr('Włochy', 'Italy', 'Italien', 'Italie', 'Italië', 'Italia'), priority: 8, transportModes: ['road', 'air'], legalNotes: { pl: 'We Włoszech pomagamy dobrać tryb przewozu w zależności od regionu, odległości i terminu odbioru.', en: 'In Italy we choose the transport mode based on region, distance and how urgent the collection is.', de: 'In Italien wählen wir die Transportart nach Region, Entfernung und Dringlichkeit des Falls.', fr: 'En Italie, nous choisissons le mode de transport selon la région, la distance et l urgence.', nl: 'In Italië kiezen wij de vervoerswijze op basis van regio, afstand en urgentie.', it: 'In Italia scegliamo il tipo di trasporto in base a regione, distanza e urgenza del caso.' }, requiredDocuments: ['death-certificate', 'identity', 'authorisation', 'consular'], featuredCities: ['milan', 'rome'] },
  { code: 'GB', slugPerLocale: lr('wielka-brytania', 'united-kingdom', 'vereinigtes-koenigreich', 'royaume-uni', 'verenigd-koninkrijk', 'regno-unito'), namesPerLocale: lr('Wielka Brytania', 'United Kingdom', 'Vereinigtes Königreich', 'Royaume-Uni', 'Verenigd Koninkrijk', 'Regno Unito'), priority: 10, transportModes: ['air', 'road'], legalNotes: { pl: 'Dla Wielkiej Brytanii istotne są lokalne zgody oraz dobre zaplanowanie odbioru z funeral home lub lotniska.', en: 'For the United Kingdom local permissions and careful planning of collection from the funeral home or airport are essential.', de: 'Für das Vereinigte Königreich sind lokale Genehmigungen und dokładna Planung der Übernahme am Bestattungsinstitut oder Flughafen entscheidend.', fr: 'Pour le Royaume-Uni, les autorisations locales et la bonne coordination avec l opérateur funéraire ou l aéroport sont essentielles.', nl: 'Voor het Verenigd Koninkrijk zijn lokale toestemmingen en een goede planning met uitvaartondernemer of luchthaven essentieel.', it: 'Per il Regno Unito sono essenziali autorizzazioni locali e una pianificazione accurata con impresa funebre o aeroporto.' }, requiredDocuments: ['death-certificate', 'identity', 'authorisation', 'consular'], featuredCities: ['london', 'manchester'] },
  { code: 'IE', slugPerLocale: lr('irlandia', 'ireland', 'irland', 'irlande', 'ierland', 'irlanda'), namesPerLocale: lr('Irlandia', 'Ireland', 'Irland', 'Irlande', 'Ierland', 'Irlanda'), priority: 9, transportModes: ['air', 'road'], legalNotes: { pl: 'W Irlandii prowadzimy rodzinę zdalnie i dopinamy przekazanie zmarłego do Polski w bezpiecznym trybie.', en: 'In Ireland we often assist the family remotely and coordinate a safe transfer into Poland.', de: 'In Irland begleiten wir Familien oft aus der Ferne und koordinieren eine sichere Übergabe nach Polen.', fr: 'En Irlande, nous accompagnons souvent la famille à distance et organisons un transfert sûr vers la Pologne.', nl: 'In Ierland begeleiden wij families vaak op afstand en regelen wij een veilige overbrenging naar Polen.', it: 'In Irlanda seguiamo spesso la famiglia da remoto e coordiniamo un trasferimento sicuro verso la Polonia.' }, requiredDocuments: ['death-certificate', 'identity', 'authorisation', 'consular'], featuredCities: ['dublin'] },
  { code: 'NO', slugPerLocale: lr('norwegia', 'norway', 'norwegen', 'norvege', 'noorwegen', 'norvegia'), namesPerLocale: lr('Norwegia', 'Norway', 'Norwegen', 'Norvège', 'Noorwegen', 'Norvegia'), priority: 8, transportModes: ['air', 'road'], legalNotes: { pl: 'Norwegia często wymaga dokładnego ułożenia logistyki lotniczej albo kombinowanej, zależnie od miejsca zgonu.', en: 'Norway often requires carefully planned air or combined logistics, depending on where the death occurred.', de: 'Norwegen erfordert oft eine genau geplante Luft- oder Kombilogistik, je nach Sterbeort.', fr: 'La Norvège nécessite souvent une logistique aérienne ou mixte bien planifiée selon le lieu du décès.', nl: 'Noorwegen vraagt vaak om zorgvuldig geplande lucht- of gecombineerde logistiek, afhankelijk van de locatie.', it: 'La Norvegia richiede spesso una logistica aerea o combinata ben pianificata, in base al luogo del decesso.' }, requiredDocuments: ['death-certificate', 'identity', 'authorisation', 'consular'], featuredCities: ['oslo'] },
  { code: 'SE', slugPerLocale: lr('szwecja', 'sweden', 'schweden', 'suede', 'zweden', 'svezia'), namesPerLocale: lr('Szwecja', 'Sweden', 'Schweden', 'Suède', 'Zweden', 'Svezia'), priority: 8, transportModes: ['air', 'road'], legalNotes: { pl: 'Szwecja wymaga spokojnego zaplanowania terminu i kontaktu z lokalnym partnerem oraz urzędami.', en: 'Sweden requires calm planning of timing and coordination with the local partner and authorities.', de: 'In Schweden sind eine ruhige Terminplanung und Abstimmung mit Bestatter und Behörden wichtig.', fr: 'En Suède, il faut bien planifier le calendrier et coordonner avec le partenaire local et les autorités.', nl: 'Zweden vraagt om rustige planning van timing en afstemming met lokale partner en autoriteiten.', it: 'La Svezia richiede una pianificazione attenta dei tempi e il coordinamento con partner locale e autorità.' }, requiredDocuments: ['death-certificate', 'identity', 'authorisation', 'consular'], featuredCities: ['stockholm'] },
]

const cityRecord = (code: string, countryCode: string, slugs: Record<Locale, string>, names: Record<Locale, string>, airportNearby: string, faqRefs: string[] = ['time', 'remote']): City => ({ code, countryCode, slugPerLocale: slugs, namesPerLocale: names, airportNearby, introPerLocale: { pl: `${names.pl} to ważny kierunek dla rodzin potrzebujących przewozu do Polski. Pomagamy od pierwszego telefonu po odbiór w Polsce.`, en: `${names.en} is an important origin point for families needing repatriation to Poland. We assist from the first call through to reception in Poland.`, de: `${names.de} ist ein wichtiger Ausgangspunkt für Familien, die eine Überführung nach Polen benötigen. Wir begleiten vom ersten Anruf bis zur Übergabe in Polen.`, fr: `${names.fr} est un point de départ important pour les familles ayant besoin d un rapatriement vers la Pologne. Nous accompagnons dès le premier appel jusqu à l accueil en Pologne.`, nl: `${names.nl} is een belangrijke vertrekplaats voor families die repatriëring naar Polen nodig hebben. Wij begeleiden vanaf het eerste telefoongesprek tot de ontvangst in Polen.`, it: `${names.it} è un punto di partenza importante per le famiglie che hanno bisogno del rimpatrio verso la Polonia. Assistiamo dal primo contatto fino alla presa in carico in Polonia.` }, seoTitleTemplate: { pl: `Transport zwłok z ${names.pl} do Polski`, en: `Repatriation from ${names.en} to Poland`, de: `Überführung von ${names.de} nach Polen`, fr: `Rapatriement de ${names.fr} vers la Pologne`, nl: `Transport van ${names.nl} naar Polen`, it: `Rimpatrio da ${names.it} verso la Polonia` }, seoDescriptionTemplate: { pl: `Całodobowa organizacja transportu zwłok z ${names.pl} do Polski z pomocą przy formalnościach i odbiorze.`, en: `24/7 organisation of funeral repatriation from ${names.en} to Poland with paperwork and reception support.`, de: `24/7 Organisation der Überführung von ${names.de} nach Polen mit Unterstützung bei Dokumenten und Übernahme.`, fr: `Organisation 24/7 du rapatriement de ${names.fr} vers la Pologne avec aide administrative et prise en charge.`, nl: `24/7 organisatie van repatriëring van ${names.nl} naar Polen met hulp bij documenten en ontvangst.`, it: `Organizzazione 24/7 del rimpatrio da ${names.it} verso la Polonia con supporto documentale e presa in carico.` }, faqRefs })

export const cities: City[] = [
  cityRecord('munich', 'DE', { pl: 'monachium', en: 'munich', de: 'muenchen', fr: 'munich', nl: 'munchen', it: 'monaco-di-baviera' }, { pl: 'Monachium', en: 'Munich', de: 'München', fr: 'Munich', nl: 'München', it: 'Monaco di Baviera' }, 'Munich Airport'),
  cityRecord('berlin', 'DE', { pl: 'berlin', en: 'berlin', de: 'berlin', fr: 'berlin', nl: 'berlijn', it: 'berlino' }, { pl: 'Berlin', en: 'Berlin', de: 'Berlin', fr: 'Berlin', nl: 'Berlijn', it: 'Berlino' }, 'Berlin Brandenburg Airport'),
  cityRecord('hamburg', 'DE', { pl: 'hamburg', en: 'hamburg', de: 'hamburg', fr: 'hambourg', nl: 'hamburg', it: 'amburgo' }, { pl: 'Hamburg', en: 'Hamburg', de: 'Hamburg', fr: 'Hambourg', nl: 'Hamburg', it: 'Amburgo' }, 'Hamburg Airport'),
  cityRecord('dortmund', 'DE', { pl: 'dortmund', en: 'dortmund', de: 'dortmund', fr: 'dortmund', nl: 'dortmund', it: 'dortmund' }, { pl: 'Dortmund', en: 'Dortmund', de: 'Dortmund', fr: 'Dortmund', nl: 'Dortmund', it: 'Dortmund' }, 'Dortmund Airport'),
  cityRecord('cologne', 'DE', { pl: 'kolonia', en: 'cologne', de: 'koeln', fr: 'cologne', nl: 'keulen', it: 'colonia' }, { pl: 'Kolonia', en: 'Cologne', de: 'Köln', fr: 'Cologne', nl: 'Keulen', it: 'Colonia' }, 'Cologne Bonn Airport'),
  cityRecord('paris', 'FR', { pl: 'paryz', en: 'paris', de: 'paris', fr: 'paris', nl: 'parijs', it: 'parigi' }, { pl: 'Paryż', en: 'Paris', de: 'Paris', fr: 'Paris', nl: 'Parijs', it: 'Parigi' }, 'Paris Charles de Gaulle Airport'),
  cityRecord('lyon', 'FR', { pl: 'lyon', en: 'lyon', de: 'lyon', fr: 'lyon', nl: 'lyon', it: 'lione' }, { pl: 'Lyon', en: 'Lyon', de: 'Lyon', fr: 'Lyon', nl: 'Lyon', it: 'Lione' }, 'Lyon Saint Exupéry Airport'),
  cityRecord('lille', 'FR', { pl: 'lille', en: 'lille', de: 'lille', fr: 'lille', nl: 'rijsel', it: 'lilla' }, { pl: 'Lille', en: 'Lille', de: 'Lille', fr: 'Lille', nl: 'Rijsel', it: 'Lilla' }, 'Lille Airport'),
  cityRecord('marseille', 'FR', { pl: 'marsylia', en: 'marseille', de: 'marseille', fr: 'marseille', nl: 'marseille', it: 'marsiglia' }, { pl: 'Marsylia', en: 'Marseille', de: 'Marseille', fr: 'Marseille', nl: 'Marseille', it: 'Marsiglia' }, 'Marseille Provence Airport'),
  cityRecord('amsterdam', 'NL', { pl: 'amsterdam', en: 'amsterdam', de: 'amsterdam', fr: 'amsterdam', nl: 'amsterdam', it: 'amsterdam' }, { pl: 'Amsterdam', en: 'Amsterdam', de: 'Amsterdam', fr: 'Amsterdam', nl: 'Amsterdam', it: 'Amsterdam' }, 'Amsterdam Schiphol Airport'),
  cityRecord('rotterdam', 'NL', { pl: 'rotterdam', en: 'rotterdam', de: 'rotterdam', fr: 'rotterdam', nl: 'rotterdam', it: 'rotterdam' }, { pl: 'Rotterdam', en: 'Rotterdam', de: 'Rotterdam', fr: 'Rotterdam', nl: 'Rotterdam', it: 'Rotterdam' }, 'Rotterdam The Hague Airport'),
  cityRecord('eindhoven', 'NL', { pl: 'eindhoven', en: 'eindhoven', de: 'eindhoven', fr: 'eindhoven', nl: 'eindhoven', it: 'eindhoven' }, { pl: 'Eindhoven', en: 'Eindhoven', de: 'Eindhoven', fr: 'Eindhoven', nl: 'Eindhoven', it: 'Eindhoven' }, 'Eindhoven Airport'),
  cityRecord('brussels', 'BE', { pl: 'bruksela', en: 'brussels', de: 'bruessel', fr: 'bruxelles', nl: 'brussel', it: 'bruxelles' }, { pl: 'Bruksela', en: 'Brussels', de: 'Brüssel', fr: 'Bruxelles', nl: 'Brussel', it: 'Bruxelles' }, 'Brussels Airport'),
  cityRecord('antwerp', 'BE', { pl: 'antwerpia', en: 'antwerp', de: 'antwerpen', fr: 'anvers', nl: 'antwerpen', it: 'anversa' }, { pl: 'Antwerpia', en: 'Antwerp', de: 'Antwerpen', fr: 'Anvers', nl: 'Antwerpen', it: 'Anversa' }, 'Antwerp International Airport'),
  cityRecord('vienna', 'AT', { pl: 'wieden', en: 'vienna', de: 'wien', fr: 'vienne', nl: 'wenen', it: 'vienna' }, { pl: 'Wiedeń', en: 'Vienna', de: 'Wien', fr: 'Vienne', nl: 'Wenen', it: 'Vienna' }, 'Vienna International Airport'),
  cityRecord('milan', 'IT', { pl: 'mediolan', en: 'milan', de: 'mailand', fr: 'milan', nl: 'milaan', it: 'milano' }, { pl: 'Mediolan', en: 'Milan', de: 'Mailand', fr: 'Milan', nl: 'Milaan', it: 'Milano' }, 'Milan Malpensa Airport'),
  cityRecord('rome', 'IT', { pl: 'rzym', en: 'rome', de: 'rom', fr: 'rome', nl: 'rome', it: 'roma' }, { pl: 'Rzym', en: 'Rome', de: 'Rom', fr: 'Rome', nl: 'Rome', it: 'Roma' }, 'Rome Fiumicino Airport'),
  cityRecord('london', 'GB', { pl: 'londyn', en: 'london', de: 'london', fr: 'londres', nl: 'londen', it: 'londra' }, { pl: 'Londyn', en: 'London', de: 'London', fr: 'Londres', nl: 'Londen', it: 'Londra' }, 'London Heathrow Airport'),
  cityRecord('manchester', 'GB', { pl: 'manchester', en: 'manchester', de: 'manchester', fr: 'manchester', nl: 'manchester', it: 'manchester' }, { pl: 'Manchester', en: 'Manchester', de: 'Manchester', fr: 'Manchester', nl: 'Manchester', it: 'Manchester' }, 'Manchester Airport'),
  cityRecord('dublin', 'IE', { pl: 'dublin', en: 'dublin', de: 'dublin', fr: 'dublin', nl: 'dublin', it: 'dublino' }, { pl: 'Dublin', en: 'Dublin', de: 'Dublin', fr: 'Dublin', nl: 'Dublin', it: 'Dublino' }, 'Dublin Airport'),
  cityRecord('oslo', 'NO', { pl: 'oslo', en: 'oslo', de: 'oslo', fr: 'oslo', nl: 'oslo', it: 'oslo' }, { pl: 'Oslo', en: 'Oslo', de: 'Oslo', fr: 'Oslo', nl: 'Oslo', it: 'Oslo' }, 'Oslo Gardermoen Airport'),
  cityRecord('stockholm', 'SE', { pl: 'sztokholm', en: 'stockholm', de: 'stockholm', fr: 'stockholm', nl: 'stockholm', it: 'stoccolma' }, { pl: 'Sztokholm', en: 'Stockholm', de: 'Stockholm', fr: 'Stockholm', nl: 'Stockholm', it: 'Stoccolma' }, 'Stockholm Arlanda Airport'),
]

export const buildAbsoluteUrl = (path: string) => `${SITE_URL}${path}`
export const isSupportedLocale = (value: string): value is Locale => SUPPORTED_LOCALES.includes(value as Locale)
export const getCountryByCode = (code: string) => countries.find((country) => country.code === code)
export const getCountryBySlug = (locale: Locale, slug: string) => countries.find((country) => country.slugPerLocale[locale] === slug)
export const getCityByCode = (code: string) => cities.find((city) => city.code === code)
export const getCityBySlug = (locale: Locale, slug: string) => cities.find((city) => city.slugPerLocale[locale] === slug)
export const getServiceBySlug = (locale: Locale, slug: string) => serviceCatalog.find((service) => service.slugPerLocale[locale] === slug)
export const getServiceByKey = (key: ServiceKey) => serviceCatalog.find((service) => service.key === key)
export const getDocumentRequirements = (ids: string[]) => documentRequirements.filter((item) => ids.includes(item.id))
export const getFaqEntries = (ids?: string[]) => (!ids || ids.length === 0 ? faqEntries : faqEntries.filter((item) => ids.includes(item.id)))

export function buildLocalizedPath(locale: Locale, kind: PageKind, slug?: string) {
  const sections = localeInfo[locale].sectionSlugs
  if (kind === 'home') return `/${locale}`
  if (kind === 'services') return `/${locale}/${sections.services}`
  if (kind === 'service') return `/${locale}/${sections.services}/${slug}`
  if (kind === 'formalities') return `/${locale}/${sections.formalities}`
  if (kind === 'contact') return `/${locale}/${sections.contact}`
  if (kind === 'faq') return `/${locale}/${sections.faq}`
  if (kind === 'country') return `/${locale}/${sections.countries}/${slug}`
  if (kind === 'city') return `/${locale}/${sections.cities}/${slug}`
  return `/${locale}/${sections.routes}/${slug}`
}

export function buildRouteSlug(locale: Locale, city: City) {
  const citySlug = city.slugPerLocale[locale]
  if (locale === 'pl') return `transport-zwlok-z-${citySlug}-do-polski`
  if (locale === 'de') return `ueberfuehrung-${citySlug}-polen`
  if (locale === 'fr') return `rapatriement-${citySlug}-pologne`
  if (locale === 'nl') return `transport-${citySlug}-polen`
  if (locale === 'it') return `rimpatrio-${citySlug}-polonia`
  return `repatriation-${citySlug}-poland`
}

export function buildRoute(locale: Locale, city: City): Route {
  const country = getCountryByCode(city.countryCode)!
  return { code: `${city.code}-to-poland`, fromCity: city.code, fromCountry: city.countryCode, toCountry: 'PL', routeType: 'repatriation', primaryLanguage: locale, urgencyLevel: 'urgent', transportModes: country.transportModes, contentBlocks: [city.namesPerLocale[locale], country.namesPerLocale[locale], locale] }
}

export function getRouteBySlug(locale: Locale, slug: string) {
  const city = cities.find((candidate) => buildRouteSlug(locale, candidate) === slug)
  if (!city) return null
  const country = getCountryByCode(city.countryCode)
  if (!country) return null
  return { city, country, route: buildRoute(locale, city) }
}

const featuredCityOrder = ['munich', 'berlin', 'paris', 'amsterdam', 'london', 'hamburg', 'rotterdam', 'manchester', 'vienna', 'oslo']

function sortCitiesForRoutes(cityList: City[], referenceCityCode?: string) {
  const referenceCity = referenceCityCode ? getCityByCode(referenceCityCode) : undefined

  return [...cityList].sort((left, right) => {
    const leftSameCountry = referenceCity && left.countryCode === referenceCity.countryCode ? 1 : 0
    const rightSameCountry = referenceCity && right.countryCode === referenceCity.countryCode ? 1 : 0
    if (leftSameCountry !== rightSameCountry) return rightSameCountry - leftSameCountry

    const leftPriority = featuredCityOrder.indexOf(left.code)
    const rightPriority = featuredCityOrder.indexOf(right.code)
    const normalizedLeft = leftPriority === -1 ? Number.MAX_SAFE_INTEGER : leftPriority
    const normalizedRight = rightPriority === -1 ? Number.MAX_SAFE_INTEGER : rightPriority
    if (normalizedLeft !== normalizedRight) return normalizedLeft - normalizedRight

    return left.namesPerLocale.en.localeCompare(right.namesPerLocale.en)
  })
}

export const getFeaturedRoutes = (locale: Locale, limit = 5) =>
  sortCitiesForRoutes(cities)
    .slice(0, limit)
    .map((city) => ({ city, country: getCountryByCode(city.countryCode)!, slug: buildRouteSlug(locale, city) }))

export const getRelatedRoutes = (locale: Locale, cityCode: string, limit = 3) =>
  sortCitiesForRoutes(
    cities.filter((city) => city.code !== cityCode),
    cityCode
  )
    .slice(0, limit)
    .map((city) => ({ city, country: getCountryByCode(city.countryCode)!, slug: buildRouteSlug(locale, city) }))

export function resolveIntlPage(locale: Locale, slug: string[] = []): ResolvedIntlPage | null {
  const sections = localeInfo[locale].sectionSlugs
  if (slug.length === 0) return { kind: 'home', locale }
  if (slug[0] === sections.services && slug.length === 1) return { kind: 'services', locale }
  if (slug[0] === sections.services && slug.length === 2) {
    const service = getServiceBySlug(locale, slug[1])
    return service ? { kind: 'service', locale, service } : null
  }
  if (slug[0] === sections.formalities && slug.length === 1) return { kind: 'formalities', locale }
  if (slug[0] === sections.contact && slug.length === 1) return { kind: 'contact', locale }
  if (slug[0] === sections.faq && slug.length === 1) return { kind: 'faq', locale }
  if (slug[0] === sections.countries && slug.length === 2) {
    const country = getCountryBySlug(locale, slug[1])
    return country ? { kind: 'country', locale, country } : null
  }
  if (slug[0] === sections.cities && slug.length === 2) {
    const city = getCityBySlug(locale, slug[1])
    if (!city) return null
    const country = getCountryByCode(city.countryCode)
    return country ? { kind: 'city', locale, city, country } : null
  }
  if (slug[0] === sections.routes && slug.length === 2) {
    const result = getRouteBySlug(locale, slug[1])
    return result ? { kind: 'route', locale, ...result } : null
  }
  return null
}

export function getPagePath(page: ResolvedIntlPage, locale: Locale) {
  if (page.kind === 'home') return buildLocalizedPath(locale, 'home')
  if (page.kind === 'services') return buildLocalizedPath(locale, 'services')
  if (page.kind === 'service') return buildLocalizedPath(locale, 'service', getServiceByKey(page.service.key)!.slugPerLocale[locale])
  if (page.kind === 'formalities') return buildLocalizedPath(locale, 'formalities')
  if (page.kind === 'contact') return buildLocalizedPath(locale, 'contact')
  if (page.kind === 'faq') return buildLocalizedPath(locale, 'faq')
  if (page.kind === 'country') return buildLocalizedPath(locale, 'country', getCountryByCode(page.country.code)!.slugPerLocale[locale])
  if (page.kind === 'city') return buildLocalizedPath(locale, 'city', getCityByCode(page.city.code)!.slugPerLocale[locale])
  return buildLocalizedPath(locale, 'route', buildRouteSlug(locale, getCityByCode(page.city.code)!))
}

export function getPageAlternates(page: ResolvedIntlPage) {
  const languages = Object.fromEntries(SUPPORTED_LOCALES.map((locale) => [locale, buildAbsoluteUrl(getPagePath(page, locale))]))
  return { canonical: buildAbsoluteUrl(getPagePath(page, page.locale)), languages: { ...languages, 'x-default': buildAbsoluteUrl(getPagePath(page, 'en')) } }
}

export function getAllIntlParams() {
  const params: Array<{ locale: Locale; slug?: string[] }> = []
  for (const locale of SUPPORTED_LOCALES) {
    params.push({ locale }, { locale, slug: [localeInfo[locale].sectionSlugs.services] }, { locale, slug: [localeInfo[locale].sectionSlugs.formalities] }, { locale, slug: [localeInfo[locale].sectionSlugs.contact] }, { locale, slug: [localeInfo[locale].sectionSlugs.faq] })
    for (const service of serviceCatalog) params.push({ locale, slug: [localeInfo[locale].sectionSlugs.services, service.slugPerLocale[locale]] })
    for (const country of countries) params.push({ locale, slug: [localeInfo[locale].sectionSlugs.countries, country.slugPerLocale[locale]] })
    for (const city of cities) {
      params.push({ locale, slug: [localeInfo[locale].sectionSlugs.cities, city.slugPerLocale[locale]] })
      params.push({ locale, slug: [localeInfo[locale].sectionSlugs.routes, buildRouteSlug(locale, city)] })
    }
  }
  return params
}

export function getIntlSitemapGroups() {
  const groups = { static: [] as string[], services: [] as string[], countries: [] as string[], cities: [] as string[], routes: [] as string[] }
  for (const locale of SUPPORTED_LOCALES) {
    groups.static.push(buildLocalizedPath(locale, 'home'), buildLocalizedPath(locale, 'formalities'), buildLocalizedPath(locale, 'contact'), buildLocalizedPath(locale, 'faq'))
    groups.services.push(buildLocalizedPath(locale, 'services'))
    for (const service of serviceCatalog) groups.services.push(buildLocalizedPath(locale, 'service', service.slugPerLocale[locale]))
    for (const country of countries) groups.countries.push(buildLocalizedPath(locale, 'country', country.slugPerLocale[locale]))
    for (const city of cities) {
      groups.cities.push(buildLocalizedPath(locale, 'city', city.slugPerLocale[locale]))
      groups.routes.push(buildLocalizedPath(locale, 'route', buildRouteSlug(locale, city)))
    }
  }
  return groups
}
