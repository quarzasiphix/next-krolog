'use client'

import Link from 'next/link'
import { Phone, ArrowRight, BookOpen, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface RelatedContentProps {
  currentSlug: string
  relatedServices?: Array<{
    title: string
    href: string
    description: string
  }>
  relatedArticles?: Array<{
    title: string
    href: string
    excerpt: string
  }>
}

const RelatedContent = ({ 
  currentSlug, 
  relatedServices = [], 
  relatedArticles = [] 
}: RelatedContentProps) => {
  // Default related services based on content keywords
  const defaultServices = [
    {
      title: 'Transport Zmarłych',
      href: '/uslugi/transport-zmarlych-lodz',
      description: 'Całodobowy transport zmarłych na terenie Łodzi i okolic'
    },
    {
      title: 'Kremacja',
      href: '/uslugi/krematorium-lodz',
      description: 'Profesjonalne usługi kremacyjne z godnym podejściem'
    },
    {
      title: 'Organizacja Pogrzebu',
      href: '/uslugi/organizacja-pogrzebow-lodz',
      description: 'Kompleksowa organizacja ceremonii pogrzebowej od A do Z'
    }
  ]

  // Default related articles
  const defaultArticles = [
    {
      title: 'Co zrobić po śmierci bliskiej osoby?',
      href: '/poradnik/co-zrobic-po-smierci',
      excerpt: 'Praktyczny poradnik krok po kroku po śmierci bliskiej osoby'
    },
    {
      title: 'Zasiłek pogrzebowy ZUS',
      href: '/poradnik/zasilek-pogrzebowy-zus',
      excerpt: 'Jak ubiegać się o zasiłek pogrzebowy i jakie dokumenty są potrzebne'
    },
    {
      title: 'Jak wygląda kremacja zwłok?',
      href: '/poradnik/jak-wyglada-kremacja-zwlok',
      excerpt: 'Szczegółowy opis procesu kremacji i co warto wiedzieć'
    }
  ]

  const services = relatedServices.length > 0 ? relatedServices : defaultServices
  const articles = relatedArticles.length > 0 ? relatedArticles : defaultArticles

  return (
    <div className="space-y-12 mt-16">
      {/* Contact CTA Section */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-playfair text-white flex items-center justify-center gap-3">
            <Phone className="h-6 w-6 text-primary" />
            Potrzebujesz pomocy? Jesteśmy do dyspozycji 24/7
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-gray-300 text-lg">
            W trudnych chwilach zapewniamy profesjonalne wsparcie i kompleksową organizację pogrzebu.
            Skontaktuj się z nami - działamy całą dobę, 7 dni w tygodniu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/kontakt" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Zadzwoń teraz: +48 602 274 661
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
              <Link href="/kontakt" className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Formularz kontaktowy
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Related Services Section */}
      {services.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-playfair text-white flex items-center gap-3">
            <Wrench className="h-6 w-6 text-primary" />
            Powiązane usługi pogrzebowe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-black/30 border border-white/10 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">{service.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/10">
                    <Link href={service.href} className="flex items-center gap-2">
                      Dowiedz się więcej
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Related Articles Section */}
      {articles.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-playfair text-white flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Powiązane artykuły
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="bg-black/30 border border-white/10 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm">{article.excerpt}</p>
                  <Button asChild variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/10">
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
      )}
    </div>
  )
}

export default RelatedContent
