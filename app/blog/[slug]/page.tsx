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

// CLOUDFLARE PAGES STATIC EXPORT COMPATIBILITY
// For static export with output: 'export', we cannot fetch from Supabase at build time
// Blog pages will be rendered client-side at runtime instead
// This prevents build failures on Cloudflare Pages where env vars are not available during build
export async function generateStaticParams() {
  console.log('[BUILD] Skipping static blog generation for Cloudflare Pages - pages will render at runtime')
  return []
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
              className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-white
                [&_a]:text-primary [&_a:hover]:text-primary/80 [&_a]:font-medium [&_a]:transition-colors
                [&_ul]:list-disc [&_ul]:text-white [&_ul]:pl-6 [&_ul]:my-4
                [&_ol]:list-decimal [&_ol]:text-white [&_ol]:pl-6 [&_ol]:my-4
                [&_li]:text-white [&_li]:mb-2 [&_li]:leading-relaxed
                [&_li_strong]:text-primary [&_li_strong]:font-semibold
                [&_strong]:text-white [&_strong]:font-semibold
                [&_em]:text-white/90 [&_em]:italic
                [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-6 
                [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mt-10 [&_h1]:mb-6
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4 
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-3
                [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-white [&_h4]:mt-5 [&_h4]:mb-2
                [&_p]:text-white/90 [&_p]:mb-4 [&_p]:leading-relaxed [&_p:last-child]:mb-0
                [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:my-4 [&_blockquote]:text-white/80 [&_blockquote]:italic
                [&_table]:w-full [&_table]:border [&_table]:border-white/20 [&_table]:my-6
                [&_th]:bg-primary/20 [&_th]:p-3 [&_th]:text-left [&_th]:text-white [&_th]:font-semibold [&_th]:border [&_th]:border-white/20
                [&_td]:p-3 [&_td]:border [&_td]:border-white/20 [&_td]:text-white/90
                [&_code]:bg-black/40 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:text-primary [&_code]:font-mono
                [&_pre]:bg-black/40 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-4 [&_pre]:border [&_pre]:border-white/10
                [&_hr]:border-white/20 [&_hr]:my-8"
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
