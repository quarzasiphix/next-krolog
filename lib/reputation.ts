// Reputation signals used in JSON-LD (aggregateRating + review nodes).
//
// The rating/count come from lib/data/google-rating.json, refreshed at build
// time by scripts/fetch-google-rating.mjs (Google Places API). Until the API
// key is configured the seed value matches the reviews rendered on the site,
// so the aggregateRating is always backed by visible content.

import { BUSINESS_INFO } from '@/lib/constants'
import googleRating from '@/lib/data/google-rating.json'

export interface RatingData {
  ratingValue: number
  reviewCount: number
  source: string
  fetchedAt: string
}

export const RATING: RatingData = {
  ratingValue: googleRating.ratingValue,
  reviewCount: googleRating.reviewCount,
  source: googleRating.source,
  fetchedAt: googleRating.fetchedAt,
}

/** schema.org AggregateRating node */
export function buildAggregateRating() {
  return {
    '@type': 'AggregateRating',
    ratingValue: RATING.ratingValue,
    reviewCount: RATING.reviewCount,
    bestRating: 5,
    worstRating: 1,
  }
}

/** schema.org Review nodes from the reviews shown on the site */
export function buildReviewNodes() {
  return BUSINESS_INFO.reviews.map((review) => ({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    author: { '@type': 'Person', name: review.authorName },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
  }))
}
