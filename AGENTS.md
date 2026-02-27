# AGENTS.md

## Project Identity

This repository is the production website for **Nekrolog Łódź** (funeral home service in Łódź, Poland), operated as:

- **Brand-facing name**: `Nekrolog Łódź`
- **Service name in content**: `Jolanta Usługi Pogrzebowe`
- **Legal name**: `Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska`
- **NIP**: `7271089145`
- **Address**: `Legionów 48, 90-702 Łódź, Polska`
- **Primary phone**: `+48 602 274 661` (24/7)
- **Secondary phone**: `+48 602 270 050`
- **Email**: `kontakt@nekrolog-lodz.com`
- **Canonical domain**: `https://nekrolog-lodz.com`

Source of truth for these values: `lib/constants.ts` (plus footer/contact pages for secondary phone display).

## Business Model and Messaging (Critical)

This site is not just informational. It communicates and converts for funeral services with an empathy-first, trust-first tone.

Core differentiator that must remain consistent across pages:

- **No upfront family payment** (`bez zaliczki`, `bez kosztów z góry`).
- The company can organize the funeral first and settle via funeral benefit (`zasiłek pogrzebowy`, typically ZUS/KRUS flow).
- Families should clearly understand they can call immediately even without cash on hand.

Do not remove or dilute this proposition in hero sections, service pages, schema, and key CTAs.

## What This Project Is Technically

- **Framework**: Next.js App Router (`next@15`)
- **Rendering target**: **Static HTML export**
- **Hosting**: **Cloudflare Pages** (static output from `out/`)
- **Build mode**: `output: 'export'` in `next.config.js`
- **Redirects/headers**: managed via `public/_redirects` and `public/_headers`
- **Styling/UI**: Tailwind + Radix/shadcn-style components
- **Analytics**: PostHog client integration (optional; env-driven)

Important: this codebase contains historical migration docs mentioning other deployment modes (including edge adapter history). Current source-of-truth behavior is static export.

## Current Content/SEO Structure

Main content clusters in `app/`:

- Homepage + core service intent page:
  - `/`
  - `/zaklad-pogrzebowy-lodz`
- Services:
  - `/uslugi-pogrzebowe-lodz`
  - `/uslugi/*`
- Assortment:
  - `/asortyment/*`
- Guides:
  - `/poradnik/*`
- Cemetery authority pages:
  - `/cmentarze-lodz`
  - `/cmentarze-lodz/[slug]` with `generateStaticParams`
- City/location pages:
  - e.g. `/zaklad-pogrzebowy-zgierz`, `/zaklad-pogrzebowy-pabianice`, etc.
- Legal pages:
  - `/rodo`, `/polityka-prywatnosci`, `/regulamin`

SEO implementation includes:

- Global metadata in `app/layout.tsx`
- Canonicals per page
- Schema/structured data components in `components/structured-data/*`
- Sitemap generation via `app/sitemap.ts` + `lib/sitemap-registry.ts`
- Robots via `app/robots.ts`

## Source-of-Truth Files (Use These First)

When editing or auditing, prefer these files over older summary docs:

- `next.config.js` (static export behavior)
- `package.json` (build/deploy scripts)
- `lib/constants.ts` (brand, NIP, phone, address, services, reputation signals)
- `app/layout.tsx` (global metadata and canonical domain)
- `public/_redirects`, `public/_headers` (Cloudflare behavior)
- `app/sitemap.ts`, `lib/sitemap-registry.ts` (indexation map)

## Operational Rules for Future Agents

- Keep canonical domain as `https://nekrolog-lodz.com`.
- Preserve business identity details (especially legal name + NIP).
- Preserve and reinforce the “no upfront cost / bez zaliczki” value proposition.
- Keep pages static-export compatible (`output: 'export'` constraints).
- Do not introduce features requiring Node runtime unless explicitly requested and deployment strategy is changed.
- Keep redirects updated if URL slugs are changed.
- Update sitemap registry when adding/removing high-value pages.

## Build and Deployment

Local:

```bash
npm run dev
npm run build
```

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `out`
- Required environment variables (when features need them):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_POSTHOG_KEY` (optional)
  - `NEXT_PUBLIC_POSTHOG_HOST` (optional)

## Quick Verification Checklist After Changes

1. `npm run build` succeeds and exports static pages.
2. Core pages still include correct brand/legal/NIP and phone data.
3. No-upfront-cost messaging remains visible on homepage/service flow.
4. `sitemap.xml` and `robots.txt` still reference canonical production domain.
5. Redirect rules cover any renamed URLs.
