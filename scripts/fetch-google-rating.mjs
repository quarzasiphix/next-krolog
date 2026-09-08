// Build-time fetch of the Google Business Profile rating.
//
// output: 'export' means there is no server runtime, so the aggregateRating in
// our JSON-LD has to be baked into the static HTML. This script runs before
// `next build` (see scripts/next-build.mjs), calls the Places API (New), and
// writes lib/data/google-rating.json. If the key is missing or the request
// fails, it keeps the last good file and never fails the build.
//
// Required env (set in Cloudflare Pages -> Settings -> Environment variables):
//   GOOGLE_PLACES_API_KEY   API key with "Places API (New)" enabled
// Optional env:
//   GOOGLE_PLACE_ID         skips the text-search lookup if you already have it
//
// Enable the API: https://console.cloud.google.com/apis/library/places.googleapis.com

import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const OUT_PATH = join(process.cwd(), 'lib', 'data', 'google-rating.json')
const SEARCH_TEXT = 'Nekrolog Zakład Usług Pogrzebowych Jolanta Kostowska, Legionów 48, Łódź'

function readExisting() {
  try {
    return JSON.parse(readFileSync(OUT_PATH, 'utf8'))
  } catch {
    return null
  }
}

function write(data) {
  mkdirSync(dirname(OUT_PATH), { recursive: true })
  writeFileSync(OUT_PATH, JSON.stringify(data, null, 2) + '\n', 'utf8')
}

function keepExisting(reason) {
  const existing = readExisting()
  if (existing) {
    console.warn(`[google-rating] ${reason} — keeping existing value (${existing.ratingValue}/${existing.reviewCount}, source: ${existing.source}).`)
    return
  }
  // Nothing cached yet: write a conservative seed backed by the reviews shown on the site.
  console.warn(`[google-rating] ${reason} — writing seed value (backed by on-site reviews).`)
  write({
    ratingValue: 5,
    reviewCount: 6,
    source: 'seed-onsite-reviews',
    fetchedAt: new Date().toISOString(),
    note: 'Placeholder until GOOGLE_PLACES_API_KEY is configured. Matches the 6 reviews rendered on the homepage.',
  })
}

async function resolvePlaceId(apiKey) {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID

  // Reuse the place id resolved on a previous build (avoids a Text Search call,
  // which is the pricier SKU).
  const cachedId = readExisting()?.placeId
  if (cachedId) return cachedId

  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress',
    },
    body: JSON.stringify({ textQuery: SEARCH_TEXT, languageCode: 'pl', regionCode: 'PL' }),
  })
  if (!res.ok) throw new Error(`searchText HTTP ${res.status}`)
  const json = await res.json()
  const place = json.places?.[0]
  if (!place?.id) throw new Error('searchText returned no place')
  console.log(`[google-rating] resolved place: ${place.displayName?.text} — ${place.formattedAddress} (${place.id})`)
  return place.id
}

async function main() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) {
    keepExisting('GOOGLE_PLACES_API_KEY not set')
    return
  }

  try {
    const placeId = await resolvePlaceId(apiKey)
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount',
      },
    })
    if (!res.ok) throw new Error(`place details HTTP ${res.status}`)
    const json = await res.json()

    const ratingValue = typeof json.rating === 'number' ? Math.round(json.rating * 10) / 10 : null
    const reviewCount = typeof json.userRatingCount === 'number' ? json.userRatingCount : null

    if (ratingValue == null || reviewCount == null || reviewCount < 1) {
      keepExisting('Places API returned no rating')
      return
    }

    write({
      ratingValue,
      reviewCount,
      source: 'google-places-api',
      placeId,
      fetchedAt: new Date().toISOString(),
    })
    console.log(`[google-rating] updated: ${ratingValue}/${reviewCount} from Google Places API.`)
  } catch (err) {
    keepExisting(`fetch failed: ${err.message}`)
  }
}

main()
