export interface BlogSummary {
  id: string
  title: string
  excerpt: string | null
  author: string
  createdAt: string
  readTime: string
  categoryName: string | null
  normalizedSlug: string
  featuredImageUrl: string | null
}
