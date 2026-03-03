import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { generateCanonicalMetadata } from '@/lib/canonical'
import FAQSchema, { FAQItem } from '@/components/structured-data/FAQSchema'
import { BookOpen, ArrowRight, Heart, FileText, HelpCircle } from 'lucide-react'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Poradnik Pogrzebowy Łódź | Praktyczne Wskazówki',
  description: 'Kompleksowy poradnik pogrzebowy. Praktyczne wskazówki co zrobić po śmierci, jak zorganizować pogrzeb, zasiłek pogrzebowy, kremacja, formalności oraz odzież żałobna.',
  keywords: [
    'poradnik pogrzebowy',
    'co zrobić po śmierci',
    'jak zorganizować pogrzeb',
    'zasiłek pogrzebowy',
    'odzież żałobna',
    'jak się ubrać na pogrzeb',
    'kremacja łódź',
    'formalności pogrzebowe',
    'ekshumacja',
    'transport zmarłych'
  ],
  ...generateCanonicalMetadata('/poradnik'),
}

const poradnikCategories = [
  {
    title: 'Pierwsze Kroki po Śmierci',
    description: 'Co zrobić natychmiast po śmierci bliskiej osoby. Praktyczny poradnik krok po kroku.',
    href: '/poradnik/co-zrobic-po-smierci',
    icon: Heart,
    color: 'text-red-400',
    articles: [
      'Co zrobić po śmierci bliskiej osoby?',
      'Jakie dokumenty są potrzebne?',
      'Kto zawiadomić o śmierci?'
    ]
  },
  {
    title: 'Formalności i Dokumenty',
    description: 'Wszystkie formalności pogrzebowe, dokumenty urzędowe i procedury po śmierci.',
    href: '/poradnik/jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb',
    icon: FileText,
    color: 'text-blue-400',
    articles: [
      'Dokumenty potrzebne do pogrzebu',
      'Zasiłek pogrzebowy ZUS',
      'Akt zgonu - gdzie i jak zdobyć?'
    ]
  },
  {
    title: 'Usługi Pogrzebowe',
    description: 'Szczegółowe informacje o usługach pogrzebowych, transportzie, kremacji i organizacji.',
    href: '/poradnik/jak-wybrac-zaklad-do-organizacji-pogrzebu',
    icon: HelpCircle,
    color: 'text-green-400',
    articles: [
      'Jak wybrać zakład pogrzebowy',
      'Transport zmarłych - procedury',
      'Kremacja vs pogrzeb tradycyjny'
    ]
  },
  {
    title: 'Procesy Pogrzebowe',
    description: 'Szczegółowe informacje o procesach pogrzebowych, kremacji i ekshumacji.',
    href: '/poradnik/jak-wyglada-kremacja-zwlok',
    icon: BookOpen,
    color: 'text-purple-400',
    articles: [
      'Jak wygląda kremacja zwłok?',
      'Proces ekshumacji krok po kroku',
      'Kosmetyka pośmiertna - na czym polega?'
    ]
  }
]

const popularArticles = [
  {
    title: 'Jak wybrać trumnę na pogrzeb?',
    excerpt: 'Praktyczny poradnik: materiały, rozmiary, koszt i wybór trumny do typu ceremonii.',
    href: '/poradnik/jak-wybrac-trumne-na-pogrzeb',
    category: 'Asortyment'
  },
  {
    title: 'Jak poinformować inne osoby o uroczystości pogrzebowej?',
    excerpt: 'Gotowy schemat komunikacji: kogo poinformować najpierw, co napisać i jak przekazać termin pogrzebu.',
    href: '/poradnik/jak-poinformowac-inne-osoby-o-uroczystosci-pogrzebowej',
    category: 'Formalności'
  },
  {
    title: 'Jak się ubrać na pogrzeb? Kobieta, mężczyzna, dziecko',
    excerpt: 'Praktyczne zasady stroju żałobnego dla całej rodziny. Co wypada i czego unikać.',
    href: '/poradnik/jak-sie-ubrac-na-pogrzeb-kobieta-mezczyzna-dziecko',
    category: 'Odzież żałobna'
  },
  {
    title: 'Czy na pogrzeb trzeba ubrać się na czarno?',
    excerpt: 'Sprawdź, czy czarny strój jest obowiązkowy i jakie kolory są akceptowane.',
    href: '/poradnik/czy-na-pogrzeb-trzeba-ubrac-sie-na-czarno',
    category: 'Odzież żałobna'
  },
  {
    title: 'Jakie buty na pogrzeb i czego unikać?',
    excerpt: 'Jak dobrać eleganckie i wygodne obuwie na ceremonię pogrzebową.',
    href: '/poradnik/jakie-buty-na-pogrzeb-i-czego-unikac',
    category: 'Odzież żałobna'
  },
  {
    title: 'Co zrobić po śmierci bliskiej osoby?',
    excerpt: 'Praktyczny poradnik krok po kroku po śmierci bliskiej osoby. Wszystko co musisz wiedzieć.',
    href: '/poradnik/co-zrobic-po-smierci',
    category: 'Pierwsze Kroki'
  },
  {
    title: 'Zasiłek pogrzebowy ZUS',
    excerpt: 'Jak ubiegać się o zasiłek pogrzebowy i jakie dokumenty są potrzebne. Kompletny przewodnik.',
    href: '/poradnik/zasilek-pogrzebowy-zus',
    category: 'Formalności'
  },
  {
    title: 'Jak wygląda kremacja zwłok?',
    excerpt: 'Szczegółowy opis procesu kremacji i co warto wiedzieć przed podjęciem decyzji.',
    href: '/poradnik/jak-wyglada-kremacja-zwlok',
    category: 'Procesy'
  },
  {
    title: 'Jak zorganizować pogrzeb bez środków finansowych?',
    excerpt: 'Możliwości organizacji pogrzebu bez własnych środków. Zasiłki, zrzutki i pomoc społeczna.',
    href: '/poradnik/jak-zorganizowac-pogrzeb-bez-srodkow-finansowych',
    category: 'Formalności'
  }
]

const allPoradnikArticles = [
  { title: 'Co zrobić po śmierci bliskiej osoby?', href: '/poradnik/co-zrobic-po-smierci' },
  { title: 'Zasiłek pogrzebowy ZUS', href: '/poradnik/zasilek-pogrzebowy-zus' },
  { title: 'Jakie dokumenty są potrzebne, aby zorganizować pogrzeb?', href: '/poradnik/jakie-dokumenty-sa-potrzebne-aby-zorganizowac-pogrzeb' },
  { title: 'Jak zorganizować pogrzeb bez środków finansowych?', href: '/poradnik/jak-zorganizowac-pogrzeb-bez-srodkow-finansowych' },
  { title: 'Czy zakład pogrzebowy może dopełnić formalności w zastępstwie klienta?', href: '/poradnik/czy-zaklad-pogrzebowy-moze-dopelnic-formalnosci-pogrzebowych-w-zastepstwie-klienta' },
  { title: 'Jak wybrać zakład do organizacji pogrzebu?', href: '/poradnik/jak-wybrac-zaklad-do-organizacji-pogrzebu' },
  { title: 'Jak wygląda kremacja zwłok?', href: '/poradnik/jak-wyglada-kremacja-zwlok' },
  { title: 'Przewóz zwłok - najważniejsze zasady', href: '/poradnik/przewoz-zwlok' },
  { title: 'Jak zgodnie z przepisami przewozić zwłoki?', href: '/poradnik/jak-zgodnie-z-przepisami-przewozic-zwloki' },
  { title: 'Jak przetransportować ciało zmarłego z zagranicy?', href: '/poradnik/jak-przetransportowac-cialo-zmarlego-z-zagranicy' },
  { title: 'Jak wybrać trumnę na pogrzeb?', href: '/poradnik/jak-wybrac-trumne-na-pogrzeb' },
  { title: 'W co ubrać zmarłego na pogrzeb?', href: '/poradnik/w-co-ubrac-zmarlego-na-pogrzeb' },
  { title: 'Jakie czynności obejmuje kosmetyka pośmiertna?', href: '/poradnik/jakie-czynnosci-obejmuje-kosmetyka-posmiertna' },
  { title: 'Jak się ubrać na pogrzeb? Kobieta, mężczyzna, dziecko', href: '/poradnik/jak-sie-ubrac-na-pogrzeb-kobieta-mezczyzna-dziecko' },
  { title: 'Czy na pogrzeb trzeba ubrać się na czarno?', href: '/poradnik/czy-na-pogrzeb-trzeba-ubrac-sie-na-czarno' },
  { title: 'Jakie buty na pogrzeb i czego unikać?', href: '/poradnik/jakie-buty-na-pogrzeb-i-czego-unikac' },
  { title: 'Etapy żałoby - jak uporać się z odejściem bliskiej osoby?', href: '/poradnik/etapy-zaloby-jak-uporac-sie-z-odejsciem-bliskiej-osoby' },
  { title: 'Czy urnę z prochami można trzymać w domu?', href: '/poradnik/czy-urne-z-prochami-mozna-trzymac-w-domu' },
  { title: 'O jakiej porze roku może być przeprowadzana ekshumacja?', href: '/poradnik/o-jakiej-porze-roku-moze-byc-przeprowadzana-ekshumacja' },
  { title: 'Jakie kwiaty wybrać na oprawę ceremonii pogrzebowej?', href: '/poradnik/jakie-kwiaty-wybrac-na-oprawe-ceremonii-pogrzebowej' },
  { title: 'Jak poinformować inne osoby o uroczystości pogrzebowej?', href: '/poradnik/jak-poinformowac-inne-osoby-o-uroczystosci-pogrzebowej' },
]

const faqData: FAQItem[] = [
  {
    question: 'Co zrobić jako pierwsze po śmierci bliskiej osoby?',
    answer:
      'Najpierw skontaktować się z lekarzem w celu wystawienia karty zgonu, a następnie z zakładem pogrzebowym, który pomoże przejąć formalności i organizację.',
  },
  {
    question: 'Czy poradnik obejmuje informacje o pogrzebie bez zaliczki?',
    answer:
      'Tak. W poradniku opisujemy możliwości organizacji pogrzebu bez kosztów z góry oraz rozliczenia zasiłku pogrzebowego ZUS/KRUS.',
  },
  {
    question: 'Gdzie znajdę informacje o dokumentach i zasiłku pogrzebowym?',
    answer:
      'W sekcjach formalności i dokumenty znajdują się artykuły o wymaganych dokumentach, procedurach urzędowych i zasiłku pogrzebowym ZUS.',
  },
]

export default function PoradnikPage() {
  const poradnikItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Poradnik pogrzebowy - lista artykułów',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: allPoradnikArticles.length,
    itemListElement: allPoradnikArticles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        headline: article.title,
        url: `${SITE_URL}${article.href}`,
      },
    })),
  }

  const poradnikCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Poradnik Pogrzebowy Łódź',
    description:
      'Zbiór artykułów poradnikowych o formalnościach pogrzebowych, organizacji ceremonii, kremacji, transporcie i wsparciu rodziny.',
    url: `${SITE_URL}/poradnik`,
    hasPart: allPoradnikArticles.map((article) => ({
      '@type': 'Article',
      headline: article.title,
      url: `${SITE_URL}${article.href}`,
    })),
  }

  return (
    <>
      <FAQSchema faqs={faqData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(poradnikItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(poradnikCollectionSchema) }}
      />
      <div className="min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-6 text-white">
                Poradnik Pogrzebowy
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8" />
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Praktyczne wskazówki i kompleksowe informacje na temat organizacji pogrzebu, 
                formalności pośmiertnych oraz wsparcia w żałobie. 
                Pomagamy zrozumieć procesy i podjąć właściwe decyzje w trudnych chwilach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/kontakt" className="flex items-center gap-2">
                    Potrzebujesz pomocy? Zadzwoń teraz
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
                  <Link href="/uslugi-pogrzebowe-lodz" className="flex items-center gap-2">
                    Nasze usługi
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {poradnikCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <Card key={index} className="bg-black/30 border border-white/10 hover:border-primary/50 transition-colors duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg text-white">
                        <Icon className={`h-6 w-6 ${category.color}`} />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {category.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-white font-medium text-sm">Popularne artykuły:</p>
                        {category.articles.slice(0, 3).map((article, articleIndex) => (
                          <div key={articleIndex} className="text-gray-400 text-xs">
                            • {article}
                          </div>
                        ))}
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/10">
                        <Link href={category.href} className="flex items-center gap-2">
                          Zobacz wszystkie
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Popular Articles */}
            <div className="mb-16">
              <h2 className="text-3xl font-playfair font-semibold text-white text-center mb-12">
                Najpopularniejsze Artykuły
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {popularArticles.map((article, index) => (
                  <Card key={index} className="bg-black/30 border border-white/10 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-white line-clamp-2">
                          {article.title}
                        </CardTitle>
                        <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                          {article.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <Button asChild className="w-full">
                        <Link href={article.href} className="flex items-center gap-2">
                          Czytaj dalej
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-playfair font-semibold text-white text-center mb-8">
                Wszystkie Artykuły Poradnika
              </h2>
              <div className="glass-card p-6 rounded-xl">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {allPoradnikArticles.map((article) => (
                    <li key={article.href}>
                      <Link
                        href={article.href}
                        className="text-gray-200 hover:text-primary transition-colors underline-offset-4 hover:underline"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-playfair font-semibold text-white text-center mb-8">
                Najczęściej Zadawane Pytania
              </h2>
              <div className="grid gap-4 max-w-4xl mx-auto">
                {faqData.map((faq) => (
                  <Card key={faq.question} className="bg-black/30 border border-white/10">
                    <CardContent className="p-6">
                      <h3 className="text-xl text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="text-center">
              <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto">
                <h2 className="text-2xl font-playfair text-white mb-6">
                  Nie znalazłeś odpowiedzi na swoje pytanie?
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Nasz zespół jest do dyspozycji 24/7. Skontaktuj się z nami - 
                  chętnie odpowiemy na wszystkie pytania i pomożemy w każdej sytuacji.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/kontakt">
                      Zadzwoń: +48 602 274 661
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
                    <Link href="/kontakt">
                      Napisz do nas
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
