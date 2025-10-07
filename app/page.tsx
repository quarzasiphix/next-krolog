import { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'
import { createServerClient } from '@/lib/supabase/server'
import { normalizeForUrl } from '@/lib/utils'
import type { BlogSummary } from '@/types/blog'

export const metadata: Metadata = {
  title: 'Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo',
  description:
    'Profesjonalny zakład pogrzebowy Nekrolog Łódź Jolanta Kostowska. Kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Dostępni całodobowo. Tel: +48 602 274 661.',
  keywords: [
    'usługi pogrzebowe łódź',
    'zakład pogrzebowy łódź',
    'dom pogrzebowy łódź',
    'nekrolog łódź',
    'jolanta kostowska',
    'pogrzeby łódź',
    'kremacja łódź',
    'transport zwłok łódź',
    'całodobowy zakład pogrzebowy',
  ],
}

async function getRecentBlogPosts(): Promise<BlogSummary[]> {
  try {
    const supabase = createServerClient()

    const { data, error } = await supabase
      .from('blogs')
      .select(`
        id,
        title,
        excerpt,
        author,
        created_at,
        read_time,
        slug,
        featured_image_url,
        blog_categories(name)
      `)
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(3)

    if (error || !data) {
      console.error('Error fetching recent blog posts:', error)
      return []
    }

    return data.map((post) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      createdAt: post.created_at,
      readTime: post.read_time || '5 min',
      categoryName: post.blog_categories?.name || null,
      normalizedSlug: normalizeForUrl(post.slug || ''),
      featuredImageUrl: post.featured_image_url || null,
    }))
  } catch (error) {
    console.error('Unexpected error fetching recent blog posts:', error)
    return []
  }
}

export default async function HomePage() {
  const recentBlogPosts = await getRecentBlogPosts()

  return <HomePageClient blogPosts={recentBlogPosts} />
}
