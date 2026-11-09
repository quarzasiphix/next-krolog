import type { FAQItem } from '@/components/structured-data/FAQSchema'

/**
 * Country procedures taken from the Polish consular pages linked in `sourceUrl`.
 * Do not add requirements that the source does not state. Re-check fees when updating `checked`.
 */
export type TransportGuide = {
  documents: string[]
  ashes: string
  consulate: string
  fee: string
  note: string
  sourceUrl: string
  sourceLabel: string
  checked: string
  faq: FAQItem[]
}

export const transportGuides: Record<string, TransportGuide> = {
  'sprowadzenie-zwlok-z-niemiec': {
    documents: [
      'Oryginał decyzji starosty lub prezydenta miasta właściwego dla miejsca pochówku',
      'Niemiecki akt zgonu (Sterbeurkunde) albo odpis wielojęzyczny (Auszug aus dem Sterbeeintrag)',
      'Zezwolenie na przewóz zwłok (Leichenpass), jeśli urząd go wymaga',
      'Przy urnie: zaświadczenie o spopieleniu (Einäscherungsbescheinigung)',
    ],
    ashes: 'Urnę można przewieźć w szczelnym pojemniku także innymi środkami niż transport pogrzebowy. Do zaświadczenia konsula potrzebne jest wtedy zaświadczenie o spopieleniu.',
    consulate: 'Wniosek składa się w urzędzie konsularnym właściwym dla miejsca zgonu – osobiście lub listownie.',
    fee: '60 EUR (według gov.pl; strona konsulatu w Berlinie podaje 50 EUR – stawkę warto potwierdzić)',
    note: 'Dokumenty niemieckie nie wymagają tłumaczenia na polski, ale trzeba złożyć oryginały. Zaświadczenie konsul wydaje najpóźniej w ciągu 3 dni od złożenia wniosku.',
    sourceUrl: 'https://www.gov.pl/web/niemcy/zaswiadczenie-na-sprowadzenie-zwlok-lub-prochow-szczatkow-do-kraju',
    sourceLabel: 'Polska w Niemczech – gov.pl',
    checked: 'listopad 2026',
    faq: [
      {
        question: 'Jakie dokumenty są potrzebne do przewozu zwłok z Niemiec do Polski?',
        answer:
          'Decyzja starosty lub prezydenta miasta właściwego dla miejsca pochówku, niemiecki akt zgonu (Sterbeurkunde) lub odpis wielojęzyczny oraz Leichenpass, jeśli urząd go wymaga. Na tej podstawie konsul RP wydaje zaświadczenie na sprowadzenie zwłok.',
      },
      {
        question: 'Czy niemiecki akt zgonu trzeba tłumaczyć?',
        answer: 'Do zaświadczenia konsula nie. Polskie placówki w Niemczech przyjmują dokumenty niemieckie bez tłumaczenia, ale wyłącznie w oryginale.',
      },
    ],
  },
  'sprowadzenie-zwlok-z-uk': {
    documents: [
      'Zezwolenie na pochówek od starosty lub prezydenta miasta',
      'Odpis aktu zgonu lub inny dokument stwierdzający zgon (w UK także dokument koronera)',
      'Oryginał zaświadczenia o balsamowaniu lub kremacji',
      'Zaświadczenie zakładu pogrzebowego o zabezpieczeniu trumny lub urny do podróży',
      'Pełnomocnictwo, jeśli sprawę prowadzi osoba trzecia lub zakład pogrzebowy',
    ],
    ashes: 'Przy urnie składa się zaświadczenie o kremacji i o zabezpieczeniu urny. Do zezwolenia starosty może być potrzebny dokument wykluczający chorobę zakaźną, jeśli nie wynika to z aktu zgonu.',
    consulate: 'Właściwa placówka to Ambasada RP w Londynie lub konsulat w Belfaście, Edynburgu albo Manchesterze. Dokumenty można złożyć osobiście lub listownie, po wcześniejszym umówieniu mailowo.',
    fee: '53 GBP',
    note: 'Dokumenty muszą być po polsku albo przetłumaczone przez tłumacza przysięgłego. Zaświadczenie konsul wydaje najpóźniej w ciągu 3 dni od złożenia wniosku.',
    sourceUrl: 'https://www.gov.pl/web/wielkabrytania/zaswiadczenie-na-sprowadzenie-zwlok-lub-prochow-szczatkow-do-kraju',
    sourceLabel: 'Polska w Wielkiej Brytanii – gov.pl',
    checked: 'listopad 2026',
    faq: [
      {
        question: 'Jakie dokumenty są potrzebne do sprowadzenia zwłok z Wielkiej Brytanii?',
        answer:
          'Zezwolenie starosty lub prezydenta miasta, akt zgonu lub dokument koronera, oryginał zaświadczenia o balsamowaniu oraz zaświadczenie zakładu pogrzebowego o zabezpieczeniu trumny. Dokumenty angielskie trzeba przetłumaczyć u tłumacza przysięgłego.',
      },
      {
        question: 'Ile kosztuje zaświadczenie konsula w UK?',
        answer: 'Opłata konsularna wynosi 53 GBP. To tylko koszt zaświadczenia – nie obejmuje transportu, trumny ani tłumaczeń.',
      },
    ],
  },
  'sprowadzenie-zwlok-z-irlandii': {
    documents: [
      'Zezwolenie starosty lub prezydenta miasta właściwego dla miejsca pochówku',
      'Akt zgonu albo tymczasowy akt zgonu (Interim Death Certificate) od koronera',
      'Zgoda koronera na wywiezienie ciała z Irlandii',
      'Zaświadczenie, że zgon nie miał związku z chorobą zakaźną',
      'Oświadczenie zakładu pogrzebowego o szczelnej metalowej trumnie z warstwą chłonną min. 5 cm, umieszczonej w drewnianej skrzyni',
    ],
    ashes: 'Przy urnie potrzebne są zgoda koronera, akt zgonu, certyfikat kremacji i poświadczone notarialnie oświadczenie zakładu pogrzebowego, że urna zawiera wyłącznie prochy.',
    consulate: 'Zaświadczenie wydaje Wydział Konsularny Ambasady RP w Dublinie. Skany można wysłać wcześniej, ale oryginały są wymagane.',
    fee: '60 EUR (według gov.pl; jedna z podstron podaje 50 EUR – stawkę warto potwierdzić)',
    note: 'Tłumaczenie na polski nie jest wymagane. Zwłoki może przewozić wyłącznie wyspecjalizowana firma pogrzebowa. Zaświadczenie wydawane jest zwykle w ciągu 3 dni.',
    sourceUrl: 'https://www.gov.pl/web/irlandia/sprowadzenie-do-polski-zwlok',
    sourceLabel: 'Polska w Irlandii – gov.pl',
    checked: 'listopad 2026',
    faq: [
      {
        question: 'Jakie dokumenty są potrzebne do przewozu zwłok z Irlandii do Polski?',
        answer:
          'Zezwolenie starosty lub prezydenta miasta, akt zgonu lub tymczasowy akt od koronera, zgoda koronera na wywóz, zaświadczenie o braku choroby zakaźnej i oświadczenie zakładu pogrzebowego o sposobie zabezpieczenia trumny. Na tej podstawie konsul w Dublinie wydaje zaświadczenie.',
      },
      {
        question: 'Jakie dokumenty są potrzebne do przewozu urny z Irlandii?',
        answer: 'Zgoda koronera, akt zgonu, certyfikat kremacji i poświadczone notarialnie oświadczenie zakładu pogrzebowego o zawartości urny, a także zezwolenie polskiego urzędu.',
      },
    ],
  },
  'sprowadzenie-zwlok-z-norwegii': {
    documents: [
      'Melding om dødsfall – akt zgonu, oryginał z apostille',
      'Legeerklæring om dødsfall – zaświadczenie lekarskie o zgonie',
      'Smitteattest – zaświadczenie, że zgon nie nastąpił na skutek choroby zakaźnej (tylko przy trumnie)',
      'Laissez-passer (politillatelse) – zgoda policji na wywóz trumny z Norwegii',
      'Zaświadczenie zakładu pogrzebowego o przygotowaniu zwłok i metalowej trumnie lub urnie',
      'Zgoda starosty lub prezydenta miasta na wjazd i pochówek w Polsce',
      'Pełnomocnictwo od rodziny, jeśli dokumenty przygotowuje osoba trzecia',
    ],
    ashes: 'Przy urnie Smitteattest nie jest wymagany, a zgoda policji może nie być potrzebna – konsulat zaleca ustalić to z policją.',
    consulate: 'Zaświadczenie wydaje Wydział Konsularny Ambasady RP w Oslo, wyłącznie po skompletowaniu wszystkich dokumentów. Oryginały jadą potem do Polski razem z trumną lub urną.',
    fee: '673 NOK (od 1 kwietnia 2026); tłumaczenie aktu zgonu – dodatkowo 673 NOK, jeśli jest potrzebne',
    note: 'Brak choćby jednego dokumentu oznacza, że konsul nie wyda zaświadczenia. Metalowa trumna jest elementem zaświadczenia zakładu pogrzebowego.',
    sourceUrl: 'https://www.gov.pl/web/norge/transport-of-corps-or-ashes-to-poland',
    sourceLabel: 'Polska w Norwegii – gov.pl',
    checked: 'listopad 2026',
    faq: [
      {
        question: 'Czym jest Smitteattest przy transporcie zwłok z Norwegii?',
        answer: 'To zaświadczenie ze szpitala, że zgon nie nastąpił na skutek choroby zakaźnej. Jest wymagane przy przewozie trumny, a nie urny.',
      },
      {
        question: 'Ile kosztuje zaświadczenie konsula w Oslo?',
        answer: 'Od 1 kwietnia 2026 r. opłata konsularna wynosi 673 NOK. To tylko koszt zaświadczenia – nie obejmuje transportu ani trumny.',
      },
    ],
  },
  'sprowadzenie-zwlok-z-austrii': {
    documents: [
      'Zezwolenie na pochówek od starosty lub prezydenta miasta',
      'Odpis aktu zgonu lub inny dokument stwierdzający zgon',
      'Zezwolenie na przewóz zwłok (Leichenpass)',
      'Przy urnie: zaświadczenie o kremacji (Einäscherungsbescheinigung)',
    ],
    ashes: 'Zamiast Leichenpass składa się zaświadczenie o kremacji zwłok (Einäscherungsbescheinigung).',
    consulate: 'Zaświadczenie wydaje Wydział Konsularny Ambasady RP w Wiedniu. Dokumenty można złożyć osobiście lub listownie.',
    fee: '60 EUR',
    note: 'Zaświadczenie konsul wydaje najpóźniej w ciągu 3 dni od złożenia wniosku. Konsulat nie finansuje transportu.',
    sourceUrl: 'https://www.gov.pl/web/austria/zaswiadczenie-na-sprowadzenie-zwlok-lub-prochow-szczatkow-do-kraju',
    sourceLabel: 'Polska w Austrii – gov.pl',
    checked: 'listopad 2026',
    faq: [
      {
        question: 'Jakie dokumenty są potrzebne do przewozu zwłok z Austrii do Polski?',
        answer: 'Zezwolenie starosty lub prezydenta miasta, odpis aktu zgonu i Leichenpass. Na ich podstawie konsul RP w Wiedniu wydaje zaświadczenie na sprowadzenie zwłok.',
      },
      {
        question: 'Czym jest Leichenpass?',
        answer: 'To zezwolenie na przewóz zwłok wydawane za granicą. Przy urnie zastępuje je zaświadczenie o kremacji (Einäscherungsbescheinigung).',
      },
    ],
  },
}
