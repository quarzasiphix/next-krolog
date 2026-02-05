import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { generateCanonicalMetadata } from '@/lib/canonical'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import { BookOpen, ArrowRight, Heart, FileText, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Poradnik Pogrzebowy Łódź | Praktyczne Wskazówki',
  description: 'Kompleksowy poradnik pogrzebowy. Praktyczne wskazówki co zrobić po śmierci, jak zorganizować pogrzeb, zasiłek pogrzebowy, kremacja i formalności pogrzebowe.',
  keywords: [
    'poradnik pogrzebowy',
    'co zrobić po śmierci',
    'jak zorganizować pogrzeb',
    'zasiłek pogrzebowy',
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

const breadcrumbs = [
  { name: 'Strona Główna', url: '/' },
  { name: 'Poradnik Pogrzebowy', url: '/poradnik' }
]

export default function PoradnikPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      
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
