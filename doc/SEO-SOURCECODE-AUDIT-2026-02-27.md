# SEO Source Audit (2026-02-27)

## Scope

Full route review of `app/**/page.tsx` for:

- metadata coverage
- canonical consistency
- sitemap inclusion
- robots discoverability
- breadcrumbs/schema consistency
- stale year references
- internal linking/discovery

## Summary

- Total page routes reviewed: `53`
- Missing metadata: `2`
  - `app/cmentarze-lodz/[slug]/page.tsx` (uses `generateMetadata` dynamically; acceptable)
  - `app/test-posthog/page.tsx` (test route, blocked in robots; acceptable)
- Missing canonical on production pages: `0`
- Sitemap coverage for `poradnik` routes: `complete` (`20/20`)
- Sitemap coverage for `cmentarze` detail routes: `complete` (`5/5`)
- Breadcrumb system: globally active with readable labels and JSON-LD

## Fixes Applied In This Pass

1. Updated stale wording in:
   - `app/poradnik/jak-zorganizowac-pogrzeb-bez-srodkow-finansowych/page.tsx`
   - Replaced `Wysokość Zasiłku (2024)` with evergreen wording.
2. Improved cemetery hub metadata in:
   - `app/cmentarze-lodz/page.tsx`
   - Canonical made absolute (`${SITE_URL}/cmentarze-lodz`)
   - Added `openGraph` block.
3. Strengthened static export intent for cemetery dynamic routes in:
   - `app/cmentarze-lodz/[slug]/page.tsx`
   - Added `dynamic = 'force-static'` and `dynamicParams = false`.

## Route Group Audit Notes

### Homepage + Core Entity

- `/`
- `/zaklad-pogrzebowy-lodz`
- `/nekrolog-lodz`

Status:
- Strong keyword/entity targeting.
- Structured data present.
- Snippet hygiene improved (`data-nosnippet` on footer already implemented earlier).

Next improvements:
- Add explicit “last updated” line to `/` top section (optional).

### Poradnik Cluster

- All current `/poradnik/*` routes have metadata and canonical.
- Included in sitemap.
- Breadcrumb labels normalized globally.

Next improvements:
- Add `ArticleSchema` to all poradnik pages (currently only selected pages use it).
- Add short “Szybka odpowiedź” blocks to remaining high-traffic poradnik pages.

### Cmentarze Cluster

- `/cmentarze-lodz`
- `/cmentarze-lodz/[slug]`

Status:
- Detail pages include canonical and metadata via `generateMetadata`.
- Added `Place` + `BreadcrumbList` JSON-LD on detail pages.
- Sitemap includes all cemetery slugs and fresh dates.

Next improvements:
- Add a small “last updated” line on each detail page near top content.

### Usługi + Asortyment + Local City Pages

Status:
- Metadata present across reviewed routes.
- Canonicals configured.
- Internal links exist from nav/footer and service hubs.

Next improvements:
- Add explicit FAQ schema blocks on additional service pages where real Q&A sections exist.

## Discovery and Indexing Infrastructure

Status:
- `public/robots.txt` includes sitemap reference and no longer blocks `/_next/`.
- `app/robots.ts` mirrors intended behavior.
- Legacy WordPress URL redirects mapped to canonical routes in `public/_redirects`.

Next improvements:
- After each deploy, re-submit `https://nekrolog-lodz.com/sitemap.xml` in Search Console.
- Monitor “Crawled - currently not indexed” and add internal links from higher-authority pages to affected URLs.

