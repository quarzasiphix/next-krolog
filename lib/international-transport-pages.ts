import type { Metadata } from 'next'
import type { FAQItem } from '@/components/structured-data/FAQSchema'
import { InternationalTransportTemplate } from '@/lib/international-transport-template'
import { buildLocalMetadata, buildMetaDescription } from '@/lib/local-seo'

export type InternationalTransportPageConfig = {
  slug: string
  title: string
  metadataTitle: string
  description: string
  shortDescription: string
  keywords: string[]
  regionLabel: string
  countries: string[]
  intro: string[]
  highlights: string[]
  faqItems: FAQItem[]
}

export const internationalTransportConfigs: InternationalTransportPageConfig[] = [
  {
    slug: 'sprowadzenie-zwlok-z-niemiec',
    title: 'Sprowadzenie Zwłok z Niemiec',
    metadataTitle: 'Sprowadzenie Zwłok z Niemiec do Polski | Transport Zmarłych',
    description:
      'Organizujemy sprowadzenie zwłok i prochów z Niemiec do Polski. Własny bus, pomoc formalna, odbiór z domu pogrzebowego, szpitala lub lotniska.',
    shortDescription:
      'Transport zmarłych z Niemiec do Polski z pełną koordynacją dokumentów i odbioru po stronie polskiej.',
    keywords: [
      'sprowadzenie zwłok z niemiec do polski',
      'transport zwłok z niemiec do polski',
      'transport zmarłych z niemiec',
      'repatriacja zwłok niemcy polska',
    ],
    regionLabel: 'Niemcy',
    countries: ['Berlin', 'Hamburg', 'Monachium', 'Kolonia', 'Dortmund', 'Frankfurt nad Menem'],
    intro: [
      'Niemcy to jeden z najczęstszych kierunków, z których rodziny sprowadzają bliskich do Polski. Organizujemy transport drogowy i lotniczy w zależności od miejsca zgonu, formalności i terminu.',
      'Możemy działać bezpośrednio dla rodziny albo jako partner dla innego zakładu pogrzebowego. Przejmujemy kontakt z niemieckimi instytucjami i pomagamy dopiąć dokumenty potrzebne do przewozu.',
    ],
    highlights: [
      'Odbiór zmarłego z terenu całych Niemiec',
      'Własny specjalistyczny bus do transportu drogowego',
      'Pomoc w tłumaczeniach i dokumentach',
      'Możliwość dalszej organizacji pogrzebu w Polsce',
    ],
    faqItems: [
      {
        question: 'Czy organizujecie transport zmarłych z całych Niemiec?',
        answer:
          'Tak. Obsługujemy zarówno duże miasta, jak Berlin, Hamburg, Monachium czy Frankfurt, jak i mniejsze miejscowości na terenie całych Niemiec.',
      },
      {
        question: 'Czy możliwy jest transport drogowy z Niemiec do Polski?',
        answer:
          'Tak. W wielu przypadkach to najsprawniejsze rozwiązanie. Dysponujemy specjalistycznym busem i dobieramy trasę indywidualnie do miejsca odbioru.',
      },
      {
        question: 'Czy pomagacie rodzinom mieszkającym w Niemczech?',
        answer:
          'Tak. Ustalenia możemy prowadzić zdalnie i telefonicznie, a po sprowadzeniu zmarłego do Polski zorganizować dalsze etapy zgodnie z wolą rodziny.',
      },
    ],
  },
  {
    slug: 'sprowadzenie-zwlok-z-uk',
    title: 'Sprowadzenie Zwłok z UK',
    metadataTitle: 'Sprowadzenie Zwłok z UK do Polski | Transport Zmarłych',
    description:
      'Organizujemy sprowadzenie zwłok i prochów z Wielkiej Brytanii do Polski. Obsługa rodzin, partnerów branżowych i formalności po stronie polskiej.',
    shortDescription:
      'Transport zmarłych z Wielkiej Brytanii do Polski z pomocą w dokumentach, odprawie i odbiorze po stronie polskiej.',
    keywords: [
      'sprowadzenie zwłok z uk do polski',
      'transport zwłok z uk do polski',
      'transport zmarłych z anglii do polski',
      'repatriacja zwłok uk polska',
    ],
    regionLabel: 'Wielka Brytania',
    countries: ['Londyn', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Glasgow'],
    intro: [
      'Wielka Brytania to jeden z najważniejszych kierunków dla rodzin szukających transportu zmarłego do Polski. Organizujemy cały proces z poszanowaniem procedur obowiązujących po stronie brytyjskiej i polskiej.',
      'W zależności od sytuacji koordynujemy odbiór z domu pogrzebowego, szpitala, prosektorium lub lotniska. Działamy także jako partner dla innych zakładów i instytucji.',
    ],
    highlights: [
      'Transport z Anglii, Walii, Szkocji i Irlandii Północnej',
      'Wsparcie w formalnościach brytyjskich i polskich',
      'Odbiór po stronie polskiej i dalsza koordynacja',
      'Renoma 5 gwiazdek i stały kontakt z rodziną',
    ],
    faqItems: [
      {
        question: 'Czy obsługujecie tylko Londyn i okolice?',
        answer:
          'Nie. Organizujemy sprowadzenie zmarłych z całej Wielkiej Brytanii, również spoza Londynu, w tym z większych i mniejszych miejscowości.',
      },
      {
        question: 'Czy możecie przejąć kontakt z partnerami po stronie polskiej?',
        answer:
          'Tak. Możemy odebrać zmarłego po przylocie lub po przekroczeniu granicy, a następnie przekazać go do wskazanego zakładu albo zorganizować całą usługę w Polsce.',
      },
      {
        question: 'Czy pomagacie także przy sprowadzeniu prochów z UK?',
        answer:
          'Tak. Pomagamy zarówno przy sprowadzeniu zwłok, jak i prochów, dobierając procedurę do wymogów formalnych i życzeń rodziny.',
      },
    ],
  },
  {
    slug: 'sprowadzenie-zwlok-z-irlandii',
    title: 'Sprowadzenie Zwłok z Irlandii',
    metadataTitle: 'Sprowadzenie Zwłok z Irlandii do Polski | Transport Zmarłych',
    description:
      'Sprowadzanie zwłok i prochów z Irlandii do Polski. Kompleksowa obsługa transportu, dokumentów i odbioru po stronie polskiej.',
    shortDescription:
      'Transport zmarłych z Irlandii do Polski dla rodzin oraz partnerów branżowych.',
    keywords: [
      'sprowadzenie zwłok z irlandii do polski',
      'transport zwłok z irlandii do polski',
      'transport zmarłych z irlandii',
      'repatriacja zwłok irlandia polska',
    ],
    regionLabel: 'Irlandia',
    countries: ['Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford'],
    intro: [
      'Pomagamy rodzinom i partnerom w sprawnym sprowadzeniu zmarłych z Irlandii do Polski. Koordynujemy formalności oraz organizujemy bezpieczny transport zgodny z wymaganiami urzędowymi.',
      'Dzięki doświadczeniu i stałemu kontaktowi z rodziną przejmujemy stresującą część procesu i prowadzimy sprawę od pierwszego telefonu do odbioru w Polsce.',
    ],
    highlights: [
      'Obsługa całej Irlandii, nie tylko Dublina',
      'Transport zwłok i prochów do Polski',
      'Pomoc formalna i logistyczna',
      'Możliwość dalszej organizacji pogrzebu bez zaliczki',
    ],
    faqItems: [
      {
        question: 'Czy odbieracie zmarłych z całej Irlandii?',
        answer:
          'Tak. Organizujemy odbiór i transport z całej Irlandii, również z miast oddalonych od Dublina.',
      },
      {
        question: 'Czy możecie współpracować z irlandzkim domem pogrzebowym?',
        answer:
          'Tak. Współpracujemy z partnerami zagranicznymi i możemy przejąć polską część procesu, w tym odbiór, dokumenty i dalszą logistykę.',
      },
      {
        question: 'Czy sprowadzenie z Irlandii można zlecić zdalnie?',
        answer:
          'Tak. Wiele ustaleń prowadzimy telefonicznie i online, aby rodzina nie musiała osobiście pojawiać się w Polsce przed transportem.',
      },
    ],
  },
  {
    slug: 'sprowadzenie-zwlok-z-holandii',
    title: 'Sprowadzenie Zwłok z Holandii',
    metadataTitle: 'Sprowadzenie Zwłok z Holandii do Polski | Transport Zmarłych',
    description:
      'Transport zmarłych i prochów z Holandii do Polski. Własny bus, szybka organizacja i wsparcie przy formalnościach.',
    shortDescription:
      'Sprowadzanie zmarłych z Holandii do Polski z pełną opieką po stronie polskiej.',
    keywords: [
      'sprowadzenie zwłok z holandii do polski',
      'transport zwłok z holandii do polski',
      'transport zmarłych z holandii',
      'repatriacja zwłok holandia polska',
    ],
    regionLabel: 'Holandia',
    countries: ['Amsterdam', 'Rotterdam', 'Haga', 'Utrecht', 'Eindhoven'],
    intro: [
      'Holandia to kolejny częsty kierunek transportu zmarłych do Polski. Dzięki własnemu busowi i doświadczeniu w transporcie drogowym możemy sprawnie organizować przewozy z wielu regionów kraju.',
      'Pomagamy rodzinom, ale też zakładom i instytucjom, które potrzebują zaufanego partnera po stronie polskiej oraz dalszej koordynacji po odbiorze.',
    ],
    highlights: [
      'Transport drogowy z Holandii do Polski',
      'Własny bus i szybka logistyka',
      'Obsługa rodzin oraz partnerów branżowych',
      'Stały kontakt i jasne warunki współpracy',
    ],
    faqItems: [
      {
        question: 'Czy przewóz z Holandii realizujecie własnym transportem?',
        answer:
          'W wielu przypadkach tak. Dysponujemy specjalistycznym busem, co pozwala nam elastycznie organizować przewozy drogowe z Holandii do Polski.',
      },
      {
        question: 'Czy obsługujecie tylko największe miasta Holandii?',
        answer:
          'Nie. Odbieramy zmarłych także z mniejszych miejscowości. Trasę i sposób transportu ustalamy indywidualnie po zgłoszeniu.',
      },
      {
        question: 'Czy możecie przekazać zmarłego do innego zakładu w Polsce?',
        answer:
          'Tak. Możemy odebrać zmarłego, przeprowadzić polskie formalności i przekazać go do wskazanego zakładu lub miejsca pochówku.',
      },
    ],
  },
  {
    slug: 'sprowadzenie-zwlok-ze-skandynawii',
    title: 'Sprowadzenie Zwłok ze Skandynawii',
    metadataTitle: 'Sprowadzenie Zwłok ze Skandynawii do Polski | Transport Zmarłych',
    description:
      'Organizujemy transport zmarłych ze Skandynawii do Polski. Obsługujemy Norwegię, Szwecję i Danię oraz pomagamy w formalnościach i logistyce.',
    shortDescription:
      'Transport zmarłych z Norwegii, Szwecji i Danii do Polski z pełną koordynacją po stronie polskiej.',
    keywords: [
      'sprowadzenie zwłok ze skandynawii',
      'transport zwłok z norwegii do polski',
      'transport zwłok ze szwecji do polski',
      'transport zwłok z danii do polski',
      'transport zmarłych skandynawia polska',
    ],
    regionLabel: 'Skandynawia',
    countries: ['Norwegia', 'Szwecja', 'Dania'],
    intro: [
      'Obsługujemy sprowadzenie zmarłych ze Skandynawii do Polski, przede wszystkim z Norwegii, Szwecji i Danii. Dobieramy transport do odległości, terminu i wymogów formalnych.',
      'To kierunek ważny dla rodzin mieszkających za granicą i dla partnerów branżowych potrzebujących sprawnej obsługi po stronie polskiej. Prowadzimy kontakt i logistykę od zgłoszenia do odbioru.',
    ],
    highlights: [
      'Obsługa Norwegii, Szwecji i Danii',
      'Transport zwłok i prochów do Polski',
      'Pomoc w dokumentach i tłumaczeniach',
      'Współpraca z rodzinami i innymi zakładami',
    ],
    faqItems: [
      {
        question: 'Czy obsługujecie całą Skandynawię?',
        answer:
          'Tak. Najczęściej organizujemy transport z Norwegii, Szwecji i Danii, ale każdą sprawę analizujemy indywidualnie pod kątem miejsca zgonu i najlepszej logistyki.',
      },
      {
        question: 'Czy transport ze Skandynawii zawsze odbywa się drogowo?',
        answer:
          'Nie zawsze. Sposób przewozu zależy od kraju, odległości, terminu i wymogów formalnych. Dobieramy rozwiązanie najbardziej bezpieczne i sprawne.',
      },
      {
        question: 'Czy możecie prowadzić sprawę dla rodziny mieszkającej poza Polską?',
        answer:
          'Tak. Ustalenia możemy prowadzić zdalnie i zapewnić pełną koordynację po stronie polskiej aż do przekazania zmarłego i dalszej organizacji pogrzebu.',
      },
    ],
  },
  {
    slug: 'sprowadzenie-zwlok-z-norwegii',
    title: 'Sprowadzenie Zwłok z Norwegii',
    metadataTitle: 'Sprowadzenie Zwłok z Norwegii do Polski | Transport Zmarłych',
    description:
      'Organizujemy sprowadzenie zwłok i prochów z Norwegii do Polski. Kompleksowa pomoc dla rodzin i partnerów branżowych.',
    shortDescription:
      'Transport zmarłych z Norwegii do Polski z pomocą w formalnościach i odbiorze po stronie polskiej.',
    keywords: [
      'sprowadzenie zwłok z norwegii do polski',
      'transport zwłok z norwegii do polski',
      'transport zmarłych z norwegii',
      'repatriacja zwłok norwegia polska',
    ],
    regionLabel: 'Norwegia',
    countries: ['Oslo', 'Bergen', 'Stavanger', 'Trondheim', 'Drammen'],
    intro: [
      'Norwegia to bardzo ważny kierunek dla polskich rodzin i jeden z najbardziej wartościowych rynków zagranicznych. Organizujemy transport zmarłych do Polski, dobierając procedurę do miejsca zgonu i wymogów formalnych.',
      'Prowadzimy sprawę dla rodzin indywidualnych i partnerów branżowych. Możemy koordynować kontakt z zagranicznym zakładem, formalności i odbiór po stronie polskiej.',
    ],
    highlights: [
      'Obsługa największych miast i mniejszych miejscowości Norwegii',
      'Transport zwłok i prochów do Polski',
      'Wsparcie w dokumentach i tłumaczeniach',
      'Możliwość dalszej organizacji pogrzebu w Polsce',
    ],
    faqItems: [
      {
        question: 'Czy organizujecie transport z całej Norwegii?',
        answer:
          'Tak. Obsługujemy zarówno Oslo, Bergen czy Stavanger, jak i mniejsze miejscowości, dobierając logistykę do miejsca odbioru.',
      },
      {
        question: 'Czy możecie działać dla rodziny mieszkającej nadal w Norwegii?',
        answer:
          'Tak. Ustalenia prowadzimy zdalnie i telefonicznie, a po stronie polskiej organizujemy odbiór i dalsze działania.',
      },
      {
        question: 'Czy pomagacie również przy sprowadzeniu prochów z Norwegii?',
        answer:
          'Tak. Obsługujemy zarówno transport zwłok, jak i prochów, dobierając procedurę do wymagań formalnych i woli rodziny.',
      },
    ],
  },
  {
    slug: 'sprowadzenie-zwlok-ze-szwajcarii',
    title: 'Sprowadzenie Zwłok ze Szwajcarii',
    metadataTitle: 'Sprowadzenie Zwłok ze Szwajcarii do Polski | Transport Zmarłych',
    description:
      'Sprowadzanie zwłok i prochów ze Szwajcarii do Polski. Pomoc formalna, sprawna koordynacja i odbiór po stronie polskiej.',
    shortDescription:
      'Transport zmarłych ze Szwajcarii do Polski dla rodzin i partnerów branżowych.',
    keywords: [
      'sprowadzenie zwłok ze szwajcarii do polski',
      'transport zwłok ze szwajcarii do polski',
      'transport zmarłych ze szwajcarii',
      'repatriacja zwłok szwajcaria polska',
    ],
    regionLabel: 'Szwajcaria',
    countries: ['Zurych', 'Genewa', 'Bazylea', 'Lozanna', 'Berno'],
    intro: [
      'Szwajcaria to kierunek mniejszy liczebnie niż Niemcy czy UK, ale bardzo perspektywiczny biznesowo. Organizujemy sprowadzenie zmarłych do Polski z pełną koordynacją formalności i odbioru.',
      'Prowadzimy kontakt z rodziną, partnerem zagranicznym i stroną polską, aby skrócić czas organizacji i uporządkować procedurę.',
    ],
    highlights: [
      'Obsługa ważnych ośrodków emigracji w Szwajcarii',
      'Transport zwłok i prochów do Polski',
      'Pomoc przy dokumentach i logistyce',
      'Obsługa rodzin oraz zakładów partnerskich',
    ],
    faqItems: [
      {
        question: 'Czy organizujecie sprowadzenie z całej Szwajcarii?',
        answer:
          'Tak. Obsługujemy zarówno największe miasta, jak Zurych i Genewa, jak i mniejsze miejscowości na terenie całego kraju.',
      },
      {
        question: 'Czy to usługa tylko dla rodzin?',
        answer:
          'Nie. Możemy też działać jako partner dla innych zakładów pogrzebowych i instytucji potrzebujących obsługi po stronie polskiej.',
      },
      {
        question: 'Czy pomagacie w tłumaczeniach i dokumentach?',
        answer:
          'Tak. Pomagamy uporządkować dokumenty i kontakt z partnerami tak, aby sprowadzenie do Polski przebiegło możliwie sprawnie.',
      },
    ],
  },
  {
    slug: 'sprowadzenie-zwlok-z-belgii',
    title: 'Sprowadzenie Zwłok z Belgii',
    metadataTitle: 'Sprowadzenie Zwłok z Belgii do Polski | Transport Zmarłych',
    description:
      'Transport zmarłych i prochów z Belgii do Polski. Obsługa rodzin, partnerów branżowych oraz pełna koordynacja po stronie polskiej.',
    shortDescription:
      'Sprowadzanie zmarłych z Belgii do Polski z pomocą w formalnościach i transporcie.',
    keywords: [
      'sprowadzenie zwłok z belgii do polski',
      'transport zwłok z belgii do polski',
      'transport zmarłych z belgii',
      'repatriacja zwłok belgia polska',
    ],
    regionLabel: 'Belgia',
    countries: ['Bruksela', 'Antwerpia', 'Gandawa', 'Liège', 'Charleroi'],
    intro: [
      'Belgia to dobry kierunek pod transport drogowy do Polski i ważny rynek dla rodzin oraz partnerów branżowych. Organizujemy przewóz zmarłych i prochów z pełną koordynacją po stronie polskiej.',
      'Pomagamy w ustaleniach z zagranicznym zakładem i instytucjami, a po odbiorze w Polsce możemy zorganizować dalszą obsługę lub przekazanie do innego zakładu.',
    ],
    highlights: [
      'Transport zmarłych z całej Belgii',
      'Obsługa rodzin oraz partnerów branżowych',
      'Sprawna koordynacja drogowa do Polski',
      'Pomoc formalna i informacyjna',
    ],
    faqItems: [
      {
        question: 'Czy przewóz z Belgii może odbyć się drogowo?',
        answer:
          'Tak. W wielu przypadkach to bardzo dobre rozwiązanie logistyczne. Trasę i sposób przewozu dobieramy indywidualnie.',
      },
      {
        question: 'Czy obsługujecie tylko Brukselę?',
        answer:
          'Nie. Odbieramy zmarłych również z innych miast i mniejszych miejscowości na terenie całej Belgii.',
      },
      {
        question: 'Czy możecie przejąć polską część procesu dla innego zakładu?',
        answer:
          'Tak. Możemy działać jako partner po stronie polskiej, w tym odebrać zmarłego, dopiąć formalności i przekazać go dalej.',
      },
    ],
  },
  {
    slug: 'sprowadzenie-zwlok-z-francji',
    title: 'Sprowadzenie Zwłok z Francji',
    metadataTitle: 'Sprowadzenie Zwłok z Francji do Polski | Transport Zmarłych',
    description:
      'Organizujemy sprowadzenie zwłok i prochów z Francji do Polski. Pomoc w formalnościach, logistyce i dalszej organizacji po stronie polskiej.',
    shortDescription:
      'Transport zmarłych z Francji do Polski z pełną koordynacją i wsparciem dla rodzin.',
    keywords: [
      'sprowadzenie zwłok z francji do polski',
      'transport zwłok z francji do polski',
      'transport zmarłych z francji',
      'repatriacja zwłok francja polska',
    ],
    regionLabel: 'Francja',
    countries: ['Paryż', 'Lyon', 'Marsylia', 'Lille', 'Tuluza'],
    intro: [
      'Francja to jeden z kierunków, które warto mocniej zagospodarować SEO i ofertowo. Organizujemy transport zmarłych i prochów do Polski, prowadząc rodzinę przez formalności i logistykę.',
      'Możemy działać kompleksowo albo przejąć tylko polską część procesu, w zależności od potrzeb rodziny lub partnera branżowego.',
    ],
    highlights: [
      'Obsługa ważnych ośrodków emigracji we Francji',
      'Transport zwłok i prochów do Polski',
      'Pomoc formalna i logistyczna',
      'Możliwość dalszej organizacji pogrzebu w Polsce',
    ],
    faqItems: [
      {
        question: 'Czy organizujecie transport z całej Francji?',
        answer:
          'Tak. Obsługujemy zarówno Paryż i duże miasta, jak i mniejsze miejscowości, dopasowując sposób transportu do konkretnego przypadku.',
      },
      {
        question: 'Czy pomagacie rodzinie, która jest jeszcze we Francji?',
        answer:
          'Tak. Wiele ustaleń prowadzimy zdalnie, a po stronie polskiej zapewniamy odbiór oraz dalszą koordynację.',
      },
      {
        question: 'Czy współpracujecie z zakładami partnerskimi?',
        answer:
          'Tak. Możemy działać jako partner po stronie polskiej dla innych zakładów i instytucji.',
      },
    ],
  },
  {
    slug: 'sprowadzenie-zwlok-z-austrii',
    title: 'Sprowadzenie Zwłok z Austrii',
    metadataTitle: 'Sprowadzenie Zwłok z Austrii do Polski | Transport Zmarłych',
    description:
      'Sprowadzanie zwłok i prochów z Austrii do Polski. Kompleksowa pomoc dla rodzin, sprawna logistyka i wsparcie formalne.',
    shortDescription:
      'Transport zmarłych z Austrii do Polski z pomocą w dokumentach i odbiorze po stronie polskiej.',
    keywords: [
      'sprowadzenie zwłok z austrii do polski',
      'transport zwłok z austrii do polski',
      'transport zmarłych z austrii',
      'repatriacja zwłok austria polska',
    ],
    regionLabel: 'Austria',
    countries: ['Wiedeń', 'Linz', 'Graz', 'Salzburg', 'Innsbruck'],
    intro: [
      'Austria to kierunek dobrze pasujący do transportu zmarłych do Polski zarówno pod kątem logistycznym, jak i biznesowym. Organizujemy przewóz i formalności od zgłoszenia do odbioru.',
      'Prowadzimy sprawy dla rodzin oraz partnerów branżowych, zapewniając jeden punkt kontaktu po stronie polskiej i jasny plan działania.',
    ],
    highlights: [
      'Obsługa całej Austrii, w tym Wiednia i dużych ośrodków',
      'Transport zwłok i prochów do Polski',
      'Pomoc przy dokumentach i koordynacji',
      'Współpraca z rodzinami i partnerami branżowymi',
    ],
    faqItems: [
      {
        question: 'Czy przewóz z Austrii można zorganizować szybko?',
        answer:
          'Tak. Termin zależy od formalności i miejsca zgonu, ale Austria jest kierunkiem, który często pozwala na sprawną organizację transportu do Polski.',
      },
      {
        question: 'Czy obsługujecie tylko Wiedeń?',
        answer:
          'Nie. Organizujemy odbiory także z innych miast i regionów Austrii, dobierając logistykę do konkretnego przypadku.',
      },
      {
        question: 'Czy pomagacie również przy sprowadzeniu prochów z Austrii?',
        answer:
          'Tak. Pomagamy zarówno przy sprowadzeniu zwłok, jak i prochów, w zależności od decyzji rodziny i wymogów formalnych.',
      },
    ],
  },
]

export function getInternationalTransportConfig(slug: string) {
  return internationalTransportConfigs.find((config) => config.slug === slug)
}

export function buildInternationalTransportMetadata(config: InternationalTransportPageConfig): Metadata {
  return buildLocalMetadata({
    title: config.metadataTitle,
    path: `/uslugi/${config.slug}`,
    description: buildMetaDescription([
      config.description,
      'Obsługa prowadzona przez zakład pogrzebowy z Łodzi z koordynacją formalności i transportu do Polski',
    ]),
    keywords: config.keywords,
    ogTitle: `${config.metadataTitle} | Łódź`,
    index: true,
  })
}

export { InternationalTransportTemplate }
