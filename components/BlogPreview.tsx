'use client';

import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { BlogSummary } from '@/types/blog';

interface BlogPreviewProps {
  blogPosts: BlogSummary[];
}

const BlogPreview = ({ blogPosts }: BlogPreviewProps) => {
  if (!blogPosts.length) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Aktualności i porady
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sprawdź nasze najnowsze artykuły i poradniki dotyczące organizacji pogrzebów
            i wsparcia w trudnych chwilach.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-12">
          {blogPosts.map((post) => {
            const cleanedExcerpt = post.excerpt
              ? post.excerpt.replace(/<[^>]*>?/gm, '').substring(0, 160)
              : null;

            return (
              <article
                key={post.id}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    {post.categoryName && (
                      <Badge variant="secondary" className="text-xs">
                        {post.categoryName}
                      </Badge>
                    )}
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {cleanedExcerpt || 'Zapraszamy do przeczytania artykułu...'}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{new Date(post.createdAt).toLocaleDateString('pl-PL')}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.normalizedSlug}`}
                    className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary hover:text-primary/90 transition-colors border border-primary/30 rounded-md hover:bg-primary/5"
                  >
                    Czytaj więcej
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200"
          >
            Zobacz wszystkie artykuły
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
