// Single source of truth for Łódź cemetery pages (/cmentarze-lodz/[slug]).
//
// Data is verified against public sources (Polish Wikipedia, Zarząd Zieleni
// Miejskiej w Łodzi, Archidiecezja Łódzka) — see each entry's `sources`.
// Structure is deliberately flat and explicit so language models and search
// engines can extract single facts (address, office hours, phone) cleanly.
//
// When updating: bump `lastVerified`, keep `sources` accurate, and keep the
// slug stable (URLs are indexed).

export interface CemeteryHoursRow {
  /** e.g. "Poniedziałek – piątek" */
  days: string
  /** e.g. "7:30 – 15:00" or "nieczynne" */
  hours: string
}

export interface CemeteryOffice {
  /** Who runs this office */
  name: string
  address: string
  phone?: string
  /** Free-text note, e.g. secondary mobile number */
  phoneNote?: string
  /** Human-readable office hours rows */
  hours: CemeteryHoursRow[]
  /** For schema.org openingHoursSpecification (24h "HH:MM"), weekdays only */
  schemaOpens?: string
  schemaCloses?: string
}

export interface CemeterySource {
  label: string
  url: string
}

export interface Cemetery {
  slug: string
  /** Common name — used as <h1> */
  name: string
  /** Full formal name */
  officialName: string
  /** Alternate / searched names (e.g. "cmentarz Szczecińska", "cmentarz na Radogoszczu") */
  alternateNames: string[]
  /** Machine label: cmentarz komunalny | cmentarz parafialny (rzymskokatolicki) | cmentarz wielowyznaniowy */
  typeLabel: string
  address: string
  district: string
  foundedYear?: number
  foundedNote?: string
  areaHa?: number
  areaNote?: string
  denominations: string[]
  /** Primary managing entity, human-readable */
  manager: string
  /** Primary office (kancelaria) families should contact */
  office: CemeteryOffice
  /** Optional second office when the site is really two adjoining cemeteries (e.g. Zarzew, Doły) */
  secondaryOffice?: CemeteryOffice
  /** Cemetery gate opening hours */
  gateHours: { summer: string; winter: string }
  coordinates?: { lat: number; lng: number; approximate?: boolean }
  /** 2–3 sentence self-contained summary. Must name the cemetery explicitly (no "it"). */
  summary: string
  /** Sourced history paragraph(s). Each sentence should stand alone. */
  history?: string
  sections: string[]
  notableBurials?: { name: string; note: string }[]
  transport: string[]
  parking: string
  relatedSlugs: string[]
  /** Shown on page + used as schema sameAs */
  sameAs: string[]
  sources: CemeterySource[]
  /** ISO date the facts were last checked */
  lastVerified: string
}

const ZZM = 'Zarząd Zieleni Miejskiej w Łodzi'
const ZZM_GATE_SUMMER = '7:00 – 20:00 (1 kwietnia – 30 września)'
const ZZM_GATE_WINTER = '8:00 – 17:00 (1 października – 31 marca)'
const ZZM_OFFICE_HOURS: CemeteryHoursRow[] = [
  { days: 'Poniedziałek – piątek', hours: '7:30 – 15:00' },
  { days: 'Sobota, niedziela', hours: 'nieczynne' },
]

export const cemeteries: Record<string, Cemetery> = {
  doly: {
    slug: 'doly',
    name: 'Cmentarz Doły w Łodzi',
    officialName: 'Cmentarz komunalny „Doły” w Łodzi',
    alternateNames: [
      'Cmentarz komunalny Doły',
      'cmentarz na Dołach',
      'Cmentarz św. Wincentego a Paulo (Doły)',
      'cmentarz Doły Łódź',
    ],
    typeLabel: 'cmentarz komunalny (część zespołu cmentarzy na Dołach)',
    address: 'al. Grzegorza Palki 9, 91-729 Łódź',
    district: 'Bałuty (Doły)',
    foundedYear: 1927,
    foundedNote:
      'Cmentarz komunalny „Doły” powstał w 1927 roku. Cały zespół cmentarzy na Dołach zaczął funkcjonować w 1896 roku według projektu inż. Ignacego Stebelskiego.',
    areaHa: 12,
    areaNote:
      'Sam cmentarz komunalny ma ponad 12 ha; przylegający zespół wyznaniowych cmentarzy na Dołach zajmuje łącznie znacznie większy obszar.',
    denominations: [
      'komunalny (bezwyznaniowy)',
      'rzymskokatolicki – św. Wincentego a Paulo',
      'prawosławny – św. Aleksandra Newskiego',
      'ewangelicki',
      'baptystyczny',
      'wojskowy – św. Jerzego',
    ],
    manager: `${ZZM} (część komunalna) oraz parafie łódzkie (części wyznaniowe)`,
    office: {
      name: 'Kancelaria Cmentarza Komunalnego „Doły” (Zarząd Zieleni Miejskiej w Łodzi)',
      address: 'al. Grzegorza Palki 9, Łódź',
      phone: '+48 42 628 72 46',
      phoneNote: 'dodatkowo tel. kom. +48 519 624 059, e-mail ckdoly@zzm.lodz.pl',
      hours: ZZM_OFFICE_HOURS,
      schemaOpens: '07:30',
      schemaCloses: '15:00',
    },
    secondaryOffice: {
      name: 'Kancelaria Cmentarza Rzymskokatolickiego św. Wincentego a Paulo',
      address: 'ul. Smutna 7, 91-729 Łódź',
      phone: '+48 42 678 62 04',
      hours: [
        { days: 'Poniedziałek – piątek', hours: 'zgodnie z informacją parafii (zwykle rano i po południu)' },
      ],
    },
    gateHours: { summer: ZZM_GATE_SUMMER, winter: ZZM_GATE_WINTER },
    coordinates: { lat: 51.78748, lng: 19.48917 },
    summary:
      'Cmentarz Doły w Łodzi to największy zespół cmentarny w mieście, położony przy al. Grzegorza Palki i ul. Smutnej na Bałutach. Częścią komunalną „Doły” (założoną w 1927 r.) zarządza Zarząd Zieleni Miejskiej w Łodzi, a sąsiadujące cmentarze wyznaniowe – rzymskokatolicki św. Wincentego a Paulo, prawosławny, ewangelicki i baptystyczny – prowadzą łódzkie parafie. Kancelaria cmentarza komunalnego czynna jest w dni robocze w godzinach 7:30 – 15:00, tel. +48 42 628 72 46.',
    history:
      'Zespół cmentarzy na Dołach zaczął powstawać w 1896 roku, gdy stary cmentarz przy ul. Ogrodowej przestał wystarczać szybko rosnącej Łodzi. Plan nekropolii przygotował inż. Ignacy Stebelski, projektując osobne pola grzebalne dla katolików, ewangelików, prawosławnych, baptystów i mariawitów. Cmentarz komunalny „Doły”, prowadzony dziś przez miasto, wydzielono w 1927 roku. Na cmentarzu znajduje się Aleja Zasłużonych z grobami ponad stu osób ważnych dla Łodzi i Polski, m.in. reżysera Wojciecha Jerzego Hasa, śpiewaczki Teresy Żylis-Gary i pierwszego prezydenta Łodzi po 1990 roku Grzegorza Palki.',
    sections: [
      'Pola cmentarza komunalnego (bezwyznaniowego)',
      'Cmentarz rzymskokatolicki św. Wincentego a Paulo',
      'Cmentarz prawosławny św. Aleksandra Newskiego',
      'Cmentarz ewangelicki',
      'Cmentarz baptystów',
      'Kwatery wojskowe (św. Jerzego)',
      'Aleja Zasłużonych',
      'Kolumbarium',
    ],
    notableBurials: [
      { name: 'Wojciech Jerzy Has', note: 'reżyser filmowy, wykładowca łódzkiej Filmówki' },
      { name: 'Teresa Żylis-Gara', note: 'światowej sławy śpiewaczka operowa (sopran)' },
      { name: 'Grzegorz Palka', note: 'pierwszy prezydent Łodzi po 1990 roku, patron alei przy cmentarzu' },
    ],
    transport: [
      'Tramwaj: linie kursujące ul. Telefoniczną i al. Palki – przystanki przy cmentarzu',
      'Autobus: linie MPK Łódź obsługujące Doły i ul. Smutną',
    ],
    parking: 'Parkingi przy głównych bramach od al. Palki i od ul. Smutnej; w okresie Wszystkich Świętych obowiązuje zmieniona organizacja ruchu.',
    relatedSlugs: ['radogoszcz', 'zarzew', 'stary', 'mania'],
    sameAs: ['https://pl.wikipedia.org/wiki/Cmentarz_Do%C5%82y_w_%C5%81odzi'],
    sources: [
      { label: 'Cmentarz Doły w Łodzi – Wikipedia', url: 'https://pl.wikipedia.org/wiki/Cmentarz_Do%C5%82y_w_%C5%81odzi' },
      { label: 'Cmentarze komunalne – Zarząd Zieleni Miejskiej w Łodzi', url: 'https://zzm.lodz.pl/jednostki/cmentarze-komunalne/' },
      { label: 'Cmentarze – Archidiecezja Łódzka', url: 'https://www.archidiecezja.lodz.pl/strona/cmentarze' },
    ],
    lastVerified: '2026-09-08',
  },

  radogoszcz: {
    slug: 'radogoszcz',
    name: 'Cmentarz św. Rocha na Radogoszczu w Łodzi',
    officialName: 'Cmentarz Rzymskokatolicki pw. św. Rocha na Radogoszczu',
    alternateNames: [
      'cmentarz na Radogoszczu',
      'cmentarz Radogoszcz Łódź',
      'cmentarz Zgierska Łódź',
      'cmentarz św. Rocha Łódź',
    ],
    typeLabel: 'cmentarz parafialny (rzymskokatolicki)',
    address: 'ul. Zgierska 141, 91-488 Łódź',
    district: 'Bałuty (Julianów)',
    foundedYear: 1922,
    foundedNote:
      'Cmentarz św. Rocha powstał w dwudziestoleciu międzywojennym, w ówczesnej podmiejskiej gminie Radogoszcz – stąd potoczna nazwa „cmentarz na Radogoszczu”, choć leży na sąsiednim Julianowie.',
    areaNote: 'Powstał z połączenia dwóch sąsiednich nekropolii – ewangelickiej (sprzed 1914 r.) i katolickiej; mur dzielący usunięto w latach 80. XX wieku.',
    denominations: ['rzymskokatolicki', 'dawna część ewangelicka (włączona po 1945 r.)'],
    manager: 'Parafia św. Rocha w Łodzi (Archidiecezja Łódzka)',
    office: {
      name: 'Kancelaria Cmentarza Rzymskokatolickiego św. Rocha',
      address: 'ul. Zgierska 141, 91-488 Łódź',
      phone: '+48 42 657 39 38',
      phoneNote: 'sprawy grobów można też załatwić w biurze cmentarnym Archidiecezji Łódzkiej, ul. ks. I. Skorupki 3, tel. +48 42 664 87 22 (poniedziałek i czwartek 9:00 – 11:00)',
      hours: [
        { days: 'Poniedziałek – piątek', hours: 'wg informacji parafii; biuro archidiecezjalne: pon. i czw. 9:00 – 11:00' },
      ],
    },
    gateHours: { summer: 'ok. 7:00 – 20:00 (sezon letni)', winter: 'ok. 8:00 – 17:00 (sezon zimowy)' },
    coordinates: { lat: 51.807, lng: 19.44 },
    summary:
      'Cmentarz św. Rocha na Radogoszczu w Łodzi to duża nekropolia rzymskokatolicka przy ul. Zgierskiej 141, w północnej części Bałut (na Julianowie). Cmentarz powstał w dwudziestoleciu międzywojennym z połączenia sąsiednich cmentarzy – katolickiego i ewangelickiego. Prowadzi go parafia św. Rocha; kancelaria mieści się przy ul. Zgierskiej 141, tel. +48 42 657 39 38.',
    history:
      'Cmentarz św. Rocha założono w dwudziestoleciu międzywojennym w podmiejskiej wówczas gminie Radogoszcz. Obecna nekropolia powstała z połączenia dwóch osobnych cmentarzy: ewangelickiego, istniejącego przed 1914 rokiem, oraz katolickiego u zbiegu ulic gen. J. Sowińskiego i Zgierskiej. Po 1945 roku na części ewangelickiej zaczęto chować katolików, a mur rozdzielający obie części zlikwidowano w latach 80. XX wieku. Na cmentarzu znajdują się mogiły ofiar styczniowej masakry więźniów Radogoszcza w 1945 roku, ofiar niemieckiego nalotu z 5 września 1939 roku oraz grób ppor. AK Janusza Różewicza, brata poety Tadeusza Różewicza.',
    sections: [
      'Część katolicka (św. Rocha)',
      'Dawna część ewangelicka',
      'Kwatery i mogiły wojenne',
    ],
    notableBurials: [
      { name: 'Janusz Różewicz', note: 'podporucznik AK, brat poetów Tadeusza i Stanisława Różewiczów' },
    ],
    transport: [
      'Tramwaj: linie kursujące ul. Zgierską – przystanki w rejonie cmentarza',
      'Autobus: linie MPK Łódź obsługujące Radogoszcz i Julianów',
    ],
    parking: 'Miejsca postojowe wzdłuż ul. Zgierskiej i przy bramie głównej; w okolicy Wszystkich Świętych ruch jest ograniczany.',
    relatedSlugs: ['doly', 'stary', 'zarzew', 'komunalny-polnocny'],
    sameAs: ['https://pl.wikipedia.org/wiki/Cmentarz_%C5%9Bw._Rocha_na_Radogoszczu_w_%C5%81odzi'],
    sources: [
      { label: 'Cmentarz św. Rocha na Radogoszczu w Łodzi – Wikipedia', url: 'https://pl.wikipedia.org/wiki/Cmentarz_%C5%9Bw._Rocha_na_Radogoszczu_w_%C5%81odzi' },
      { label: 'Cmentarze – Archidiecezja Łódzka', url: 'https://www.archidiecezja.lodz.pl/strona/cmentarze' },
    ],
    lastVerified: '2026-09-08',
  },

  stary: {
    slug: 'stary',
    name: 'Stary Cmentarz w Łodzi (ul. Ogrodowa)',
    officialName: 'Stary Cmentarz w Łodzi',
    alternateNames: [
      'cmentarz przy Ogrodowej',
      'Stary Cmentarz Ewangelicki',
      'cmentarz Ogrodowa Łódź',
      'cmentarz św. Józefa Łódź',
    ],
    typeLabel: 'cmentarz wielowyznaniowy (zabytkowy, pomnik historii)',
    address: 'ul. Ogrodowa 43 / róg ul. Srebrzyńskiej, 91-065 Łódź',
    district: 'Polesie (Śródmieście-Zachód)',
    foundedYear: 1855,
    foundedNote: 'Stary Cmentarz zakładano w latach 1855–1858 jako główną nekropolię rozwijającej się Łodzi.',
    areaHa: 21,
    areaNote: 'Około 21 ha: część katolicka ok. 11 ha, ewangelicko-augsburska ok. 9 ha, prawosławna poniżej 1 ha.',
    denominations: [
      'rzymskokatolicki – parafia św. Józefa',
      'ewangelicko-augsburski',
      'prawosławny – św. Aleksandra Newskiego',
    ],
    manager: 'Parafie: rzymskokatolicka św. Józefa, ewangelicko-augsburska i prawosławna w Łodzi',
    office: {
      name: 'Kancelaria części rzymskokatolickiej (parafia św. Józefa)',
      address: 'ul. Ogrodowa 22, Łódź',
      hours: [
        { days: 'Poniedziałek – piątek', hours: 'wg informacji parafii św. Józefa' },
      ],
    },
    secondaryOffice: {
      name: 'Kancelaria części ewangelicko-augsburskiej',
      address: 'ul. Ogrodowa 43, Łódź',
      hours: [
        { days: 'Poniedziałek – piątek', hours: 'wg informacji parafii ewangelicko-augsburskiej św. Mateusza' },
      ],
    },
    gateHours: { summer: 'ok. 8:00 – 20:00 (sezon letni)', winter: 'ok. 8:00 – 17:00 (sezon zimowy)' },
    coordinates: { lat: 51.77722, lng: 19.435 },
    summary:
      'Stary Cmentarz w Łodzi przy ul. Ogrodowej to najstarsza zachowana nekropolia miasta, założona w 1855 roku i podzielona na trzy części wyznaniowe: rzymskokatolicką (św. Józefa), ewangelicko-augsburską i prawosławną. Cmentarz o powierzchni ok. 21 ha jest wpisany do rejestru zabytków, a w 2015 roku uznano go za pomnik historii. Znajdują się tu monumentalne kaplice grobowe łódzkich fabrykantów – Scheiblerów, Heinzlów, Grohmanów i Geyerów.',
    history:
      'Stary Cmentarz założono w latach 1855–1858 u zbiegu ulic Ogrodowej i Srebrzyńskiej, gdy Łódź była już miastem wielu religii. Od początku wydzielono osobne części dla katolików, ewangelików i prawosławnych. Cmentarz jest miejscem spoczynku wielu łódzkich przemysłowców, artystów i działaczy; zachowało się tu ponad 200 nagrobków i kaplic wpisanych do rejestru zabytków (wpisy A/273–A/275 z 1980 roku). W 2015 roku prezydent RP uznał Stary Cmentarz za pomnik historii. Najbardziej znane są neogotycka kaplica Scheiblerów (1885–1888) i neorenesansowa kaplica Heinzlów (1899–1904).',
    sections: [
      'Część rzymskokatolicka (św. Józefa) – ok. 11 ha',
      'Część ewangelicko-augsburska – ok. 9 ha',
      'Część prawosławna – poniżej 1 ha',
      'Kaplice grobowe rodzin fabrykanckich',
    ],
    notableBurials: [
      { name: 'Rodzina Scheiblerów', note: 'neogotycka kaplica grobowa – jeden z symboli Łodzi przemysłowej' },
      { name: 'Rodzina Heinzlów', note: 'neorenesansowa kaplica grobowa (1899–1904)' },
      { name: 'Rodziny Grohmanów, Geyerów, Kunitzerów, Kindermannów', note: 'mauzolea łódzkich fabrykantów' },
    ],
    transport: [
      'Tramwaj: linie do przystanków przy ul. Legionów / pl. Zwycięstwa i ul. Zielonej',
      'Autobus: linie MPK Łódź obsługujące ul. Srebrzyńską i Ogrodową',
      'Pieszo: ok. 15 minut z Manufaktury i pl. Wolności',
    ],
    parking: 'Ograniczona liczba miejsc przy ul. Ogrodowej i Srebrzyńskiej; w pobliżu parkingi Manufaktury.',
    relatedSlugs: ['doly', 'radogoszcz', 'mania', 'zarzew'],
    sameAs: ['https://pl.wikipedia.org/wiki/Stary_Cmentarz_w_%C5%81odzi'],
    sources: [
      { label: 'Stary Cmentarz w Łodzi – Wikipedia', url: 'https://pl.wikipedia.org/wiki/Stary_Cmentarz_w_%C5%81odzi' },
      { label: 'Stary Cmentarz w Łodzi – nekropolia wielu religii, dzieje.pl', url: 'https://dzieje.pl/dziedzictwo-kulturowe/stary-cmentarz-w-lodzi-nekropolia-wielu-religii' },
    ],
    lastVerified: '2026-09-08',
  },

  zarzew: {
    slug: 'zarzew',
    name: 'Cmentarz Zarzew w Łodzi',
    officialName: 'Cmentarz komunalny „Zarzew” oraz Cmentarz katolicki św. Anny',
    alternateNames: [
      'cmentarz komunalny Zarzew',
      'cmentarz Przybyszewskiego Łódź',
      'cmentarz św. Anny Łódź',
      'cmentarz Lodowa Łódź',
      'cmentarz Zarzewska',
    ],
    typeLabel: 'zespół dwóch sąsiednich cmentarzy: komunalnego i parafialnego',
    address: 'ul. Przybyszewskiego 325 (komunalny) i ul. Lodowa 78 (św. Anny), Łódź',
    district: 'Widzew (Zarzew)',
    foundedYear: 1975,
    foundedNote:
      'Cmentarz komunalny „Zarzew” założono w 1975 roku. Sąsiedni cmentarz katolicki św. Anny jest znacznie starszy – powstał w 1898 roku jako nekropolia parafii św. Anny.',
    areaHa: 11,
    areaNote: 'Część komunalna ma ponad 11 ha; oba cmentarze rozdziela ogrodzenie z jednym przejściem przy głównej alei.',
    denominations: ['komunalny (bezwyznaniowy)', 'rzymskokatolicki – parafia św. Anny'],
    manager: `${ZZM} (część komunalna) oraz parafia św. Anny w Łodzi (cmentarz św. Anny)`,
    office: {
      name: 'Kancelaria Cmentarza Komunalnego „Zarzew” (Zarząd Zieleni Miejskiej w Łodzi)',
      address: 'ul. Przybyszewskiego 325, Łódź',
      phone: '+48 42 628 72 47',
      phoneNote: 'dodatkowo tel. kom. +48 519 623 884, e-mail ckzarzew@zzm.lodz.pl',
      hours: ZZM_OFFICE_HOURS,
      schemaOpens: '07:30',
      schemaCloses: '15:00',
    },
    secondaryOffice: {
      name: 'Kancelaria Cmentarza Katolickiego św. Anny',
      address: 'ul. Lodowa 78, 92-313 Łódź',
      phone: '+48 42 649 14 04',
      hours: [
        { days: 'Poniedziałek – piątek', hours: 'wg informacji parafii św. Anny' },
      ],
    },
    gateHours: { summer: ZZM_GATE_SUMMER, winter: ZZM_GATE_WINTER },
    coordinates: { lat: 51.74947, lng: 19.52588 },
    summary:
      'Cmentarz Zarzew w Łodzi to w rzeczywistości dwa sąsiadujące cmentarze na osiedlu Zarzew (Widzew): komunalny „Zarzew” przy ul. Przybyszewskiego 325, założony w 1975 roku i prowadzony przez Zarząd Zieleni Miejskiej, oraz katolicki cmentarz św. Anny przy ul. Lodowej 78, powstały w 1898 roku i należący do parafii św. Anny. Kancelaria cmentarza komunalnego czynna jest w dni robocze 7:30 – 15:00, tel. +48 42 628 72 47.',
    history:
      'Cmentarz katolicki św. Anny przy ul. Lodowej powstał w 1898 roku jako nekropolia parafii św. Anny, obsługująca mieszkańców osiedla Zarzew i okolic. Cmentarz komunalny „Zarzew” przy ul. Przybyszewskiego założono w 1975 roku – był drugą po Dołach miejską nekropolią w Łodzi, przed cmentarzem komunalnym „Szczecińska”. Oba cmentarze przylegają do siebie i bywają traktowane jako jeden zespół, choć mają osobne administracje. Przy wejściu na cmentarz św. Anny stoi Pomnik Sybiraków, a w części wojskowej pochowani są uczestnicy wojny polsko-bolszewickiej.',
    sections: [
      'Cmentarz komunalny „Zarzew” (pola bezwyznaniowe)',
      'Cmentarz katolicki św. Anny',
      'Kwatera wojskowa (wojna polsko-bolszewicka 1920)',
      'Kolumbarium (część komunalna)',
    ],
    notableBurials: [
      { name: 'Kwatera wojenna 1920', note: 'groby żołnierzy z wojny polsko-bolszewickiej przy cmentarzu św. Anny' },
    ],
    transport: [
      'Tramwaj: linie kursujące ul. Przybyszewskiego – przystanki przy cmentarzu',
      'Autobus: linie MPK Łódź obsługujące Zarzew i ul. Lodową',
    ],
    parking: 'Parkingi przy ul. Przybyszewskiego (część komunalna) i przy ul. Lodowej (cmentarz św. Anny).',
    relatedSlugs: ['doly', 'mania', 'kurczaki', 'radogoszcz'],
    sameAs: ['https://pl.wikipedia.org/wiki/Cmentarz_Zarzew_w_%C5%81odzi'],
    sources: [
      { label: 'Cmentarz Zarzew w Łodzi – Wikipedia', url: 'https://pl.wikipedia.org/wiki/Cmentarz_Zarzew_w_%C5%81odzi' },
      { label: 'Cmentarze komunalne – Zarząd Zieleni Miejskiej w Łodzi', url: 'https://zzm.lodz.pl/jednostki/cmentarze-komunalne/' },
      { label: 'Cmentarze – Archidiecezja Łódzka', url: 'https://www.archidiecezja.lodz.pl/strona/cmentarze' },
    ],
    lastVerified: '2026-09-08',
  },

  mania: {
    slug: 'mania',
    name: 'Cmentarz na Mani w Łodzi (św. Antoniego)',
    officialName: 'Cmentarz rzymskokatolicki pw. św. Antoniego',
    alternateNames: [
      'cmentarz św. Antoniego Łódź',
      'cmentarz na Mani',
      'cmentarz Solec Łódź',
      'cmentarz Mania Łódź',
    ],
    typeLabel: 'cmentarz parafialny (rzymskokatolicki)',
    address: 'ul. Solec 11, 93-237 Łódź',
    district: 'Polesie (osiedle Mania)',
    foundedYear: 1914,
    foundedNote:
      'Cmentarz św. Antoniego na Mani założono w 1914 roku, gdy mieszkańcom zachodniej Łodzi pilnie brakowało cmentarza w tej części miasta.',
    areaHa: 10.9,
    areaNote: 'Powierzchnia ok. 10,9 ha, podzielona na 34 kwatery. Najstarszy zachowany nagrobek – Franciszka Suwalskiego – pochodzi z 1916 roku.',
    denominations: ['rzymskokatolicki'],
    manager: 'Parafia św. Antoniego w Łodzi (Archidiecezja Łódzka)',
    office: {
      name: 'Kancelaria Cmentarza Rzymskokatolickiego św. Antoniego',
      address: 'ul. Solec 11, 93-237 Łódź',
      phone: '+48 42 633 84 23',
      phoneNote: 'sprawy grobów obsługuje też biuro cmentarne Archidiecezji Łódzkiej, ul. ks. I. Skorupki 3, tel. +48 42 664 87 22 (poniedziałek i czwartek 9:00 – 11:00)',
      hours: [
        { days: 'Poniedziałek – piątek', hours: 'wg informacji parafii św. Antoniego' },
      ],
    },
    gateHours: { summer: 'ok. 7:00 – 20:00 (sezon letni)', winter: 'ok. 8:00 – 17:00 (sezon zimowy)' },
    coordinates: { lat: 51.77639, lng: 19.405 },
    summary:
      'Cmentarz na Mani w Łodzi (oficjalnie Cmentarz rzymskokatolicki pw. św. Antoniego) leży przy ul. Solec 11 na Polesiu, w pobliżu Parku na Zdrowiu. Cmentarz założono w 1914 roku; ma powierzchnię ok. 10,9 ha i 34 kwatery. Prowadzi go parafia św. Antoniego, kancelaria mieści się przy ul. Solec 11, tel. +48 42 633 84 23.',
    history:
      'Cmentarz św. Antoniego powstał w 1914 roku na niewielkim osiedlu Mania na Polesiu, tuż przy „lesie na Mani” – pozostałości pierwotnej puszczy porastającej okolice Łodzi. Najstarszy zachowany nagrobek, Franciszka Suwalskiego, pochodzi z 1916 roku. W kwaterze 23A znajdują się zbiorowe mogiły żołnierzy poległych w kampanii wrześniowej 1939 roku, upamiętnione centralnym obeliskiem. Na cmentarzu pochowani są m.in. polityk Jacek Dębski, reżyser Gerard Zalewski i skrzypek Czesław Burkath.',
    sections: [
      '34 kwatery rzymskokatolickie',
      'Kwatera 23A – mogiły żołnierzy z kampanii wrześniowej 1939',
    ],
    notableBurials: [
      { name: 'Jacek Dębski', note: 'polityk, minister sportu (1960–2001)' },
      { name: 'Gerard Zalewski', note: 'reżyser filmowy (1932–2011)' },
      { name: 'Czesław Burkath', note: 'skrzypek i kompozytor (zm. 1958)' },
    ],
    transport: [
      'Tramwaj: linie kursujące al. Włókniarzy i ul. Konstantynowską – przystanki w rejonie Parku na Zdrowiu',
      'Autobus: linie MPK Łódź obsługujące ul. Solec i osiedle Mania',
    ],
    parking: 'Miejsca postojowe przy ul. Solec i wzdłuż ulic dojazdowych.',
    relatedSlugs: ['stary', 'doly', 'kurczaki', 'zarzew'],
    sameAs: ['https://pl.wikipedia.org/wiki/Cmentarz_na_Mani_w_%C5%81odzi'],
    sources: [
      { label: 'Cmentarz na Mani w Łodzi – Wikipedia', url: 'https://pl.wikipedia.org/wiki/Cmentarz_na_Mani_w_%C5%81odzi' },
      { label: 'Cmentarze – Archidiecezja Łódzka', url: 'https://www.archidiecezja.lodz.pl/strona/cmentarze' },
    ],
    lastVerified: '2026-09-08',
  },

  kurczaki: {
    slug: 'kurczaki',
    name: 'Cmentarz na Kurczakach w Łodzi (św. Wojciecha)',
    officialName: 'Cmentarz katolicki św. Wojciecha',
    alternateNames: [
      'cmentarz św. Wojciecha Łódź',
      'cmentarz na Kurczakach',
      'cmentarz Kurczaki Łódź',
    ],
    typeLabel: 'cmentarz parafialny (rzymskokatolicki)',
    address: 'ul. Kurczaki 81, 93-331 Łódź',
    district: 'Górna (osiedle Kurczaki / Rokicie)',
    foundedNote: 'Cmentarz św. Wojciecha powstał na początku XX wieku i był rozwijany w okresie międzywojennym.',
    areaHa: 12.2,
    areaNote: 'Powierzchnia ok. 12,2 ha.',
    denominations: ['rzymskokatolicki'],
    manager: 'Parafia św. Wojciecha w Łodzi (Archidiecezja Łódzka)',
    office: {
      name: 'Kancelaria Cmentarza Rzymskokatolickiego św. Wojciecha',
      address: 'ul. Kurczaki 81, 93-331 Łódź',
      phone: '+48 42 646 80 94',
      phoneNote: 'sprawy grobów obsługuje też biuro cmentarne Archidiecezji Łódzkiej, ul. ks. I. Skorupki 3, tel. +48 42 664 87 22 (poniedziałek i czwartek 9:00 – 11:00)',
      hours: [
        { days: 'Poniedziałek – piątek', hours: 'wg informacji parafii św. Wojciecha' },
      ],
    },
    gateHours: { summer: 'ok. 7:00 – 20:00 (sezon letni)', winter: 'ok. 8:00 – 17:00 (sezon zimowy)' },
    coordinates: { lat: 51.716, lng: 19.476, approximate: true },
    summary:
      'Cmentarz na Kurczakach w Łodzi (oficjalnie Cmentarz katolicki św. Wojciecha) znajduje się przy ul. Kurczaki 81 w południowej części miasta, w dzielnicy Górna. Cmentarz o powierzchni ok. 12,2 ha powstał na początku XX wieku i jest prowadzony przez parafię św. Wojciecha. Kancelaria mieści się przy ul. Kurczaki 81, tel. +48 42 646 80 94.',
    history:
      'Cmentarz św. Wojciecha, powszechnie nazywany „cmentarzem na Kurczakach”, powstał na początku XX wieku w południowej Łodzi i był rozbudowywany w dwudziestoleciu międzywojennym. Na nekropolii znajduje się m.in. wykonany w latach 60. XX wieku grobowiec Bango Kwieka, uznawanego za „króla Cyganów”, do dziś odwiedzany przez społeczność romską.',
    sections: [
      'Kwatery rzymskokatolickie',
      'Grobowiec Bango Kwieka (społeczność romska)',
    ],
    notableBurials: [
      { name: 'Bango Kwiek', note: 'zwany „królem Cyganów”; okazały grobowiec z lat 60. XX wieku' },
    ],
    transport: [
      'Tramwaj: linie kursujące ul. Rzgowską – przystanki w rejonie Kurczaków',
      'Autobus: linie MPK Łódź obsługujące osiedle Kurczaki i ul. Kurczaki',
    ],
    parking: 'Miejsca postojowe przy ul. Kurczaki i ulicach dojazdowych.',
    relatedSlugs: ['mania', 'zarzew', 'doly', 'stary'],
    sameAs: ['https://pl.wikipedia.org/wiki/Cmentarz_katolicki_%C5%9Bw._Wojciecha_w_%C5%81odzi'],
    sources: [
      { label: 'Cmentarz katolicki św. Wojciecha w Łodzi – Wikipedia', url: 'https://pl.wikipedia.org/wiki/Cmentarz_katolicki_%C5%9Bw._Wojciecha_w_%C5%81odzi' },
      { label: 'Cmentarze – Archidiecezja Łódzka', url: 'https://www.archidiecezja.lodz.pl/strona/cmentarze' },
    ],
    lastVerified: '2026-09-08',
  },

  'komunalny-polnocny': {
    slug: 'komunalny-polnocny',
    name: 'Cmentarz komunalny „Szczecińska” w Łodzi',
    officialName: 'Cmentarz komunalny „Szczecińska”',
    alternateNames: [
      'cmentarz Szczecińska Łódź',
      'cmentarz komunalny północny',
      'cmentarz Hodowlana Łódź',
      'cmentarz północny Łódź',
    ],
    typeLabel: 'cmentarz komunalny',
    address: 'ul. Hodowlana 28/30, 91-231 Łódź',
    district: 'Bałuty (rejon ul. Szczecińskiej)',
    foundedYear: 1988,
    foundedNote:
      'Cmentarz komunalny „Szczecińska” otwarto w 1988 roku jako trzecią miejską nekropolię w Łodzi, po cmentarzach komunalnych „Doły” i „Zarzew”.',
    denominations: ['komunalny (bezwyznaniowy)'],
    manager: ZZM,
    office: {
      name: 'Kancelaria Cmentarza Komunalnego „Szczecińska” (Zarząd Zieleni Miejskiej w Łodzi)',
      address: 'ul. Hodowlana 28/30, 91-231 Łódź',
      phone: '+48 42 628 72 48',
      phoneNote: 'dodatkowo tel. kom. +48 519 624 360, e-mail ckszczecinska@zzm.lodz.pl',
      hours: ZZM_OFFICE_HOURS,
      schemaOpens: '07:30',
      schemaCloses: '15:00',
    },
    gateHours: { summer: ZZM_GATE_SUMMER, winter: ZZM_GATE_WINTER },
    coordinates: { lat: 51.8095, lng: 19.436, approximate: true },
    summary:
      'Cmentarz komunalny „Szczecińska” w Łodzi (bywa nazywany cmentarzem północnym) znajduje się przy ul. Hodowlanej 28/30 na Bałutach, w rejonie ul. Szczecińskiej. Cmentarz otwarto w 1988 roku i prowadzi go Zarząd Zieleni Miejskiej w Łodzi. Kancelaria czynna jest w dni robocze 7:30 – 15:00, tel. +48 42 628 72 48.',
    history:
      'Cmentarz komunalny „Szczecińska” otwarto w 1988 roku jako trzecią – po Dołach i Zarzewie – miejską nekropolię Łodzi. Powstał, by odciążyć starsze cmentarze w szybko rosnącej północno-zachodniej części miasta. W pobliżu, przy ul. Szczecińskiej 96, działa odrębny cmentarz parafialny Matki Boskiej Nieustającej Pomocy.',
    sections: [
      'Pola grzebalne (bezwyznaniowe)',
      'Kolumbarium',
      'Kwatery urnowe',
    ],
    transport: [
      'Autobus: linie MPK Łódź obsługujące ul. Szczecińską i Hodowlaną',
      'Dojazd samochodem od ul. Szczecińskiej (droga krajowa nr 1 / al. Włókniarzy)',
    ],
    parking: 'Duży parking przy wejściu głównym od ul. Hodowlanej.',
    relatedSlugs: ['doly', 'radogoszcz', 'zarzew', 'stary'],
    sameAs: [],
    sources: [
      { label: 'Cmentarze komunalne – Zarząd Zieleni Miejskiej w Łodzi', url: 'https://zzm.lodz.pl/jednostki/cmentarze-komunalne/' },
      { label: 'Cmentarz Komunalny „Szczecińska” – Polskie Cmentarze', url: 'https://www.polskie-cmentarze.pl/Spis-cmentarzy/Wojewodztwo-Lodzkie/Powiat-m.-Lodz/Gmina-M.-Lodz/Lodz/Cmentarz-Komunalny-Szczecinska' },
    ],
    lastVerified: '2026-09-08',
  },
}

export const cemeterySlugs = Object.keys(cemeteries)

export function getCemetery(slug: string): Cemetery | undefined {
  return cemeteries[slug]
}
