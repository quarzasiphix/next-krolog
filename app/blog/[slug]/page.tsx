import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'

import { createServerClient } from '@/lib/supabase/server'
import { normalizeForUrl } from '@/lib/utils'
import { SITE_URL } from '@/lib/constants'
import { BreadcrumbController } from '@/components/breadcrumb-context'
import { Button } from '@/components/ui/button'

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string | null
  author: string
  created_at: string
  read_time: string | null
  category_name: string | null
  slug: string
  featured_image_url: string | null
  meta_description: string | null
  meta_keywords: string | null
}

// THIS IS CRITICAL FOR CLOUDFLARE PAGES SSG
// Generate static params at build time - fetches all blog slugs
export async function generateStaticParams() {
  try {
    const supabase = createServerClient()
    
    const { data, error } = await supabase
      .from('blogs')
      .select('slug')
      .eq('published', true)

    if (error) {
      console.error('Error generating static params:', error)
    }

    console.log(`[BUILD] Generating ${data?.length || 0} blog post pages`)
    
    return (data || []).map((post) => ({
      slug: normalizeForUrl(post.slug),
    }))
  } catch (err) {
    console.error('Error in generateStaticParams:', err)
    return []
  }
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const supabase = createServerClient()

    const { data, error } = await supabase
      .from('blogs')
      .select(`
        id,
        title,
        content,
        excerpt,
        author,
        created_at,
        read_time,
        slug,
        featured_image_url,
        meta_description,
        meta_keywords,
        blog_categories(name)
      `)
      .eq('published', true)

    if (error || !data) {
      console.error('Error fetching blog post:', error)
      return null
    }

    const normalizedSlug = normalizeForUrl(slug)
    const matched = data.find((entry) => normalizeForUrl(entry.slug || '') === normalizedSlug)

    if (!matched) {
      return null
    }

    return {
      id: matched.id,
      title: matched.title,
      content: matched.content,
      excerpt: matched.excerpt,
      author: matched.author,
      created_at: matched.created_at,
      read_time: matched.read_time || '5 min',
      category_name: matched.blog_categories?.name || null,
      slug: matched.slug,
      featured_image_url: matched.featured_image_url,
      meta_description: matched.meta_description || null,
      meta_keywords: matched.meta_keywords || null,
    }
  } catch (err) {
    console.error('Error:', err)
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Artykuł nie znaleziony',
    }
  }

  const canonicalSlug = normalizeForUrl(post.slug || '')
  const canonicalUrl = `${SITE_URL}/blog/${canonicalSlug}`
  const keywords = post.meta_keywords
    ? post.meta_keywords
        .split(',')
        .map((keyword) => keyword.trim())
        .filter(Boolean)
    : ['blog pogrzebowy', 'poradniki pogrzebowe', 'Łódź']

  return {
    title: post.title,
    description: post.meta_description || post.excerpt || 'Artykuł na blogu Domu Pogrzebowego w Łodzi',
    keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.meta_description || '',
      url: canonicalUrl,
      images: post.featured_image_url ? [post.featured_image_url] : [],
      type: 'article',
      publishedTime: post.created_at,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.meta_description || post.excerpt || '',
      images: post.featured_image_url ? [post.featured_image_url] : undefined,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const canonicalSlug = normalizeForUrl(post.slug || '')
  const canonicalUrl = `${SITE_URL}/blog/${canonicalSlug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.featured_image_url ? [post.featured_image_url] : undefined,
    datePublished: post.created_at,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nekrolog Łódź',
      url: SITE_URL,
    },
    description: post.meta_description || post.excerpt || '',
    mainEntityOfPage: canonicalUrl,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 pt-24">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbController
          overrides={[
            { segment: 'blog', label: 'Blog' },
            { segment: params.slug, label: post.title },
          ]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="mb-8 text-center sm:text-left">
          <Button 
            asChild
            variant="default" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wróć do listy artykułów
            </Link>
          </Button>
        </div>

        <article className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden">
          {post.featured_image_url && (
            <div className="w-full h-64 relative overflow-hidden">
              <Image 
                src={post.featured_image_url} 
                alt={post.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}
          
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
              <div className="flex items-center space-x-4 flex-wrap gap-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.created_at).toLocaleDateString('pl-PL')}
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.read_time}
                </div>
              </div>
              {post.category_name && (
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  {post.category_name}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-lg text-muted-foreground mb-8">
                {post.excerpt}
              </p>
            )}

            <div 
              className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-foreground 
                [&_a]:text-primary [&_a:hover]:text-primary/80 [&_a]:font-medium [&_a]:transition-colors
                [&_ul]:list-disc [&_ol]:list-decimal [&_ul], [&_ol]:pl-6 
                [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-6 
                [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-foreground [&_h1]:mt-10 [&_h1]:mb-6
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4 
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3
                [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-foreground [&_h4]:mt-5 [&_h4]:mb-2
                [&_p]:text-foreground/90 [&_p]:mb-4 [&_p:last-child]:mb-0
                [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:py-1 [&_blockquote]:my-4 [&_blockquote]:text-foreground/80
                [&_table]:w-full [&_table]:border [&_table]:border-border [&_th]:bg-secondary/50 [&_th]:p-3 [&_th]:text-left [&_th]:text-foreground [&_td]:p-3 [&_td]:border [&_td]:border-border [&_td]:text-foreground/90
                [&_code]:bg-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:text-foreground/90
                [&_pre]:bg-secondary [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-4"
              dangerouslySetInnerHTML={{ 
                __html: post.content 
                  .replace(/<a(?!\s+target=)/g, '<a target="_blank" rel="noopener noreferrer"')
                  .replace(/<img/g, '<img class="w-full h-auto" loading="lazy"')
              }} 
            />
          </div>
        </article>
      </div>
    </div>
  )
}
