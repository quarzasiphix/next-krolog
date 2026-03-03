'use client'

import { usePathname } from 'next/navigation'
import { SITE_URL } from '@/lib/constants'

const ARTICLE_BY_SLUG: Record<string, { title: string; description: string }> = {
  'co-zrobic-po-smierci': {
    title: 'Co Zrobić Po Śmierci Bliskiej Osoby? Kompletny Poradnik Krok Po Kroku',
    description: 'Formalności po śmierci bliskiej osoby: karta zgonu, akt zgonu, organizacja pogrzebu i wsparcie rodziny.',
  },
  'czy-na-pogrzeb-trzeba-ubrac-sie-na-czarno': {
    title: 'Czy Na Pogrzeb Trzeba Ubrać Się Na Czarno?',
    description: 'Praktyczne zasady stroju żałobnego: czy czerń jest obowiązkowa i jakie kolory są akceptowane.',
  },
  'czy-urne-z-prochami-mozna-trzymac-w-domu': {
    title: 'Czy Urnę Z Prochami Można Trzymać W Domu?',
    description: 'Wyjaśniamy zasady dotyczące przechowywania urny z prochami oraz obowiązujące przepisy w Polsce.',
  },
  'czy-zaklad-pogrzebowy-moze-dopelnic-formalnosci-pogrzebowych-w-zastepstwie-klienta': {
    title: 'Czy Zakład Pogrzebowy Może Dopełnić Formalności W Zastępstwie Klienta?',
    description: 'Zakres pełnomocnictwa i pomoc zakładu pogrzebowego w formalnościach urzędowych po śmierci bliskiej osoby.',
  },
  'etapy-zaloby-jak-uporac-sie-z-odejsciem-bliskiej-osoby': {
    title: 'Etapy Żałoby - Jak Uporać Się Z Odejściem Bliskiej Osoby?',
    description: 'Zrozumienie etapów żałoby i praktyczne wsparcie psychiczne dla rodziny po stracie bliskiej osoby.',
  },
  'jak-poinformowac-inne-osoby-o-uroczystosci-pogrzebowej': {
    title: 'Jak Poinformować Inne Osoby O Uroczystości Pogrzebowej?',
    description: 'Jak przekazać informację o pogrzebie: przykłady treści, kolejność powiadamiania i najczęstsze błędy.',
  },
  'jak-przetransportowac-cialo-zmarlego-z-zagranicy': {
    title: 'Jak Przetransportować Ciało Zmarłego Z Zagranicy?',
    description: 'Transport zmarłego z zagranicy: wymagane dokumenty, procedura konsularna i organizacja przewozu.',
  },
  'jak-sie-ubrac-na-pogrzeb-kobieta-mezczyzna-dziecko': {
    title: 'Jak Się Ubrać Na Pogrzeb? Kobieta, Mężczyzna, Dziecko',
    description: 'Kompletny poradnik stroju żałobnego dla kobiet, mężczyzn i dzieci, z praktycznymi przykładami.',
  },
  'jak-wybrac-trumne-na-pogrzeb': {
    title: 'Jak Wybrać Trumnę Na Pogrzeb?',
    description: 'Na co zwrócić uwagę przy wyborze trumny: rodzaj drewna, rozmiar, wykończenie i budżet rodziny.',
  },
  'jak-wybrac-zaklad-do-organizacji-pogrzebu': {
    title: 'Jak Wybrać Zakład Pogrzebowy? Praktyczny Przewodnik',
    description: 'Kryteria wyboru zakładu pogrzebowego: doświadczenie, zakres usług, ceny i pomoc formalna.',
  },
  'jak-wyglada-kremacja-zwlok': {
    title: 'Jak Wygląda Kremacja Zwłok?',
    description: 'Przebieg kremacji krok po kroku: dokumenty, procedury i organizacja ceremonii pożegnalnej.',
  },
  'jak-zgodnie-z-przepisami-przewozic-zwloki': {
    title: 'Jak Zgodnie Z Przepisami Przewozić Zwłoki?',
    description: 'Przepisy i wymogi dotyczące transportu zwłok w Polsce oraz odpowiedzialność organizatora pochówku.',
  },
  'jak-zorganizowac-pogrzeb-bez-srodkow-finansowych': {
    title: 'Jak Zorganizować Pogrzeb Bez Środków Finansowych?',
    description: 'Możliwości organizacji pogrzebu bez zaliczki i rozliczenia kosztów przez zasiłek pogrzebowy.',
  },
  'jakie-buty-na-pogrzeb-i-czego-unikac': {
    title: 'Jakie Buty Na Pogrzeb I Czego Unikać?',
    description: 'Jak dobrać odpowiednie obuwie na pogrzeb: styl, kolor, wygoda i najczęstsze błędy.',
  },
  'jakie-czynnosci-obejmuje-kosmetyka-posmiertna': {
    title: 'Jakie Czynności Obejmuje Kosmetyka Pośmiertna?',
    description: 'Proces przygotowania zmarłego do pożegnania: higiena, ubiór, kosmetyka i godny wygląd.',
  },
  'jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb': {
    title: 'Jakie Dokumenty Są Potrzebne, Aby Zorganizować Pogrzeb?',
    description: 'Lista dokumentów do organizacji pogrzebu: karta zgonu, akt zgonu, wnioski i formalności urzędowe.',
  },
  'jakie-kwiaty-wybrac-na-oprawe-ceremonii-pogrzebowej': {
    title: 'Jakie Kwiaty Wybrać Na Oprawę Ceremonii Pogrzebowej?',
    description: 'Jak dobrać wiązanki i wieńce na pogrzeb: symbolika kwiatów i praktyczne wskazówki dla rodziny.',
  },
  'o-jakiej-porze-roku-moze-byc-przeprowadzana-ekshumacja': {
    title: 'O Jakiej Porze Roku Może Być Przeprowadzana Ekshumacja?',
    description: 'Terminy ekshumacji, ograniczenia sanitarne i formalności wymagane do legalnego przeprowadzenia procedury.',
  },
  'przewoz-zwlok': {
    title: 'Przewóz Zwłok - Najważniejsze Zasady',
    description: 'Najważniejsze zasady przewozu zwłok: dokumenty, organizacja transportu i bezpieczeństwo procedury.',
  },
  'w-co-ubrac-zmarlego-na-pogrzeb': {
    title: 'W Co Ubrać Zmarłego Na Pogrzeb?',
    description: 'Jak przygotować ubiór dla osoby zmarłej: tradycja, praktyczne wskazówki i wsparcie zakładu pogrzebowego.',
  },
  'zasilek-pogrzebowy-zus': {
    title: 'Zasiłek Pogrzebowy ZUS I KRUS - Jak Uzyskać?',
    description: 'Wysokość zasiłku pogrzebowego, wymagane dokumenty i procedura rozliczenia kosztów pogrzebu.',
  },
}

const EXPLICIT_ARTICLE_SCHEMA_SLUGS = new Set(['co-zrobic-po-smierci', 'jak-wybrac-zaklad-do-organizacji-pogrzebu'])

export default function PoradnikArticleSchema() {
  const pathname = usePathname() || ''
  const parts = pathname.split('/').filter(Boolean)

  if (parts[0] !== 'poradnik' || parts.length !== 2) return null

  const slug = parts[1]
  if (EXPLICIT_ARTICLE_SCHEMA_SLUGS.has(slug)) return null

  const article = ARTICLE_BY_SLUG[slug]
  if (!article) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/poradnik/${slug}`,
    author: {
      '@type': 'Organization',
      name: 'Zakład Pogrzebowy Nekrolog Łódź',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/poradnik/${slug}`,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
