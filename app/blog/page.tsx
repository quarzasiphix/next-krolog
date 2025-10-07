import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User } from 'lucide-react'

import { createServerClient } from '@/lib/supabase/server'
import { normalizeForUrl } from '@/lib/utils'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Blog - Artykuły i Poradniki',
  description:
    'Blog Domu Pogrzebowego w Łodzi. Artykuły, poradniki i informacje o usługach pogrzebowych, tradycjach i formalnościach związanych z organizacją pogrzebu.',
  keywords: [
    'blog pogrzebowy',
    'poradniki pogrzebowe',
    'tradycje pogrzebowe',
    'formalności pogrzebowe',
    'Łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Blog - Artykuły i Poradniki',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
}

interface BlogPost {
  id: string
  title: string
  excerpt: string | null
  author: string
  created_at: string
  read_time: string | null
  category_name: string | null
  slug: string
  normalizedSlug: string
  featured_image_url: string | null
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const supabase = createServerClient()
    
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        id,
        excerpt,
        author,
        created_at,
        read_time,
        slug,
        normalizedSlug: normalizeForUrl(slug),
      featured_image_url,
      blog_categories(name)
    `)
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching blog posts:', error)
{{ ... }}
    }

    return (data || []).map((post: any) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      created_at: post.created_at,
      read_time: post.read_time || '5 min',
      category_name: post.blog_categories?.name || null,
      slug: post.slug,
      normalizedSlug: normalizeForUrl(post.slug),
      featured_image_url: post.featured_image_url,
    }))
  } catch (err) {
    console.error('Error:', err)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 pt-24">
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbController overrides={[{ segment: 'blog', label: 'Blog' }]} />
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Artykuły, poradniki i informacje pomocne w trudnych chwilach. 
            Dzielimy się wiedzą i doświadczeniem, aby wspierać Państwa w organizacji ceremonii pogrzebowych.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {post.category_name || 'Artykuł'}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.read_time}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription 
                    className="text-sm leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ 
                      __html: post.excerpt 
                        ? post.excerpt.replace(/<[^>]*>?/gm, '').substring(0, 180) + (post.excerpt.length > 180 ? '...' : '')
                        : 'Brak opisu artykułu'
                    }}
                  />
                </CardHeader>
                <CardContent className="space-y-4">
                  {post.featured_image_url && (
                    <div className="h-40 w-full overflow-hidden rounded-md">
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.created_at).toLocaleDateString('pl-PL')}
                    </div>
                  </div>
                  <Button 
                    asChild 
                    variant="link" 
                    className="w-full text-left text-primary hover:text-primary/80 text-sm font-medium p-0 h-auto justify-start"
                  >
                    <Link href={`/blog/${post.normalizedSlug}`}>
                      Czytaj więcej →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Brak opublikowanych artykułów
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Wkrótce pojawią się tu nowe artykuły i poradniki
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Potrzebujesz pomocy?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Jeśli masz pytania lub potrzebujesz wsparcia w organizacji ceremonii pogrzebowej, 
            skontaktuj się z nami. Jesteśmy do Państwa dyspozycji 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+48602274661" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Zadzwoń teraz
            </a>
            <Link 
              href="/kontakt" 
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
            >
              Formularz kontaktowy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
