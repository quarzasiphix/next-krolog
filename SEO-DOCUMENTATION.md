# SEO Documentation - Nekrolog Łódź Website

## Table of Contents
1. [Executive Summary](#executive-summary)
2. [Current Technical Setup](#current-technical-setup)
3. [SEO Architecture Analysis](#seo-architecture-analysis)
4. [Critical Issues & Strategic Recommendations](#critical-issues--strategic-recommendations)
5. [Implementation Roadmap](#implementation-roadmap)

---

## Executive Summary

### Current State
The website is built on **Next.js 14** with modern React architecture, featuring:
- Server-side rendering (SSR) for SEO optimization
- Comprehensive structured data (Schema.org)
- Local business optimization
- Service-specific landing pages
- Blog system with Supabase backend

### Core Problem Identified
**The site is competing for the wrong keyword intent.**

- **Current focus**: "nekrolog Łódź" (informational/obituary publishing intent)
- **Should focus on**: "zakład pogrzebowy Łódź" (transactional/service intent)

**Google's Classification Issue**: The site is still partially seen as obituary-adjacent rather than a canonical funeral service provider.

---

## Current Technical Setup

### Technology Stack
```json
{
  "framework": "Next.js 14.2.15",
  "runtime": "React 18.3.1",
  "styling": "TailwindCSS 3.4.11",
  "ui_components": "Radix UI + shadcn/ui",
  "backend": "Supabase 2.52.1",
  "icons": "Lucide React 0.462.0",
  "deployment": "Static/SSR hybrid"
}
```

### File Structure
```
next-krolog/
├── app/
│   ├── page.tsx                           # Homepage (SSR)
│   ├── layout.tsx                         # Root layout with global metadata
│   ├── uslugi-pogrzebowe-lodz/           # Main services page
│   ├── uslugi/                            # Individual service pages
│   │   ├── organizacja-pogrzebow-lodz/
│   │   ├── krematorium-lodz/
│   │   ├── transport-zmarlych-lodz/
│   │   ├── oprawa-muzyczna-lodz/
│   │   └── ekshumacja-lodz/
│   ├── asortyment/                        # Product pages
│   ├── blog/                              # Blog system
│   ├── kontakt/                           # Contact page
│   ├── o-nas/                             # About page
│   ├── sitemap.ts                         # Dynamic sitemap generator
│   └── robots.ts                          # Robots.txt configuration
├── components/                            # React components
└── lib/
    └── constants.ts                       # Business info & configuration
```

---

## SEO Architecture Analysis

### 1. Metadata Implementation

#### Root Layout (`app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://nekrolog-lodz.pl'),
  title: {
    default: 'Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo',
    template: '%s | Nekrolog Łódź'
  },
  description: 'Profesjonalny zakład pogrzebowy Nekrolog Łódź Jolanta Kostowska...',
  keywords: ['usługi pogrzebowe łódź', 'zakład pogrzebowy łódź', ...],
  openGraph: { ... },
  robots: { index: true, follow: true }
}
```

**⚠️ ISSUE**: Brand name "Nekrolog Łódź" appears BEFORE category "Usługi Pogrzebowe"

#### Homepage (`app/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo',
  description: 'Profesjonalny zakład pogrzebowy Nekrolog Łódź Jolanta Kostowska...',
  keywords: [
    'usługi pogrzebowe łódź',      // ✅ Good
    'zakład pogrzebowy łódź',       // ✅ Good
    'nekrolog łódź',                // ⚠️ Dilutes category focus
    ...
  ]
}
```

**⚠️ ISSUE**: "Nekrolog" still prominent in title hierarchy

### 2. Structured Data (Schema.org)

#### Global Schema (Root Layout)
```json
{
  "@type": "FuneralHome",
  "name": "Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska",
  "telephone": "+48602274661",
  "address": { ... },
  "openingHours": "Mo-Fr 08:00-16:00, Sa 09:00-13:00"
}
```

**⚠️ ISSUE**: Opening hours don't match 24/7 availability claim

#### Homepage Schema (LocalBusiness)
```json
{
  "@type": "LocalBusiness",
  "@id": "https://nekrolog-lodz.pl/#funeral-home",
  "additionalType": "https://schema.org/FuneralHome",
  "name": "Jolanta Usługi Pogrzebowe",
  "legalName": "Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska",
  "openingHours": "00:00-23:59",  // ✅ Correct 24/7
  "aggregateRating": {
    "ratingValue": 5,
    "reviewCount": 94
  },
  "makesOffer": [ ... ]  // ✅ Services listed
}
```

**✅ STRENGTH**: Comprehensive LocalBusiness schema with reviews and services

### 3. URL Structure & Sitemap

#### Current URL Hierarchy
```
Priority 1.0:  /                                    (Homepage)
Priority 0.9:  /uslugi-pogrzebowe-lodz             (Main services)
Priority 0.8:  /uslugi/organizacja-pogrzebow-lodz
Priority 0.8:  /uslugi/krematorium-lodz
Priority 0.8:  /uslugi/transport-zmarlych-lodz
Priority 0.8:  /kontakt
Priority 0.8:  /blog
Priority 0.7:  /asortyment/*
```

**✅ STRENGTH**: Clean, keyword-rich URLs with local modifiers
**✅ STRENGTH**: Logical hierarchy with proper priorities

### 4. Content Structure Analysis

#### Homepage H1 (HeroContent.tsx)
```tsx
<h1>Jolanta Usługi Pogrzebowe</h1>
```

**⚠️ CRITICAL ISSUE**: 
- No "zakład pogrzebowy" in H1
- No "Łódź" in H1
- Brand-focused, not category-focused

**Should be**: "Zakład Pogrzebowy w Łodzi – Jolanta Kostowska"

#### Services Section
```tsx
<h2>Kompleksowe Usługi Pogrzebowe</h2>
```

**✅ GOOD**: Category language present but secondary

### 5. Service Pages Analysis

#### Example: Organizacja Pogrzebów (`/uslugi/organizacja-pogrzebow-lodz/page.tsx`)

**Metadata**:
```typescript
title: 'Organizacja Pogrzebów Łódź'
description: 'Kompleksowa organizacja pogrzebów w Łodzi – formalności, oprawa ceremonii...'
```

**H1**: "Organizacja Pogrzebów w Łodzi"

**Content Structure**:
- ✅ Clear procedural information
- ✅ Process steps explained
- ✅ Document requirements listed
- ✅ Local context (Łódź-specific)

**⚠️ MISSING**: 
- No mention of "zakład pogrzebowy" entity
- No connection to parent business category

#### Example: Krematorium (`/uslugi/krematorium-lodz/page.tsx`)

**Metadata**:
```typescript
title: 'Krematorium w Łodzi'
description: 'Profesjonalne usługi kremacji w Łodzi. Organizacja kremacji, urny, transport...'
```

**✅ STRENGTHS**:
- Detailed procedural content (how cremation works)
- Required documents listed
- Temperature specifications (850-1100°C)
- Post-cremation options explained

**✅ E-E-A-T SIGNALS**: Expert knowledge demonstrated

---

## Critical Issues & Strategic Recommendations

### Issue #1: Query Intent Mismatch

#### Problem
**"nekrolog Łódź"** = Informational intent (obituary publishing)
- Google expects: Daily-updated obituary databases
- Competitors: Wyborcza, Dziennik Łódzki, Skrzydlewska (obituary portals)
- Your site: Service business, not publisher

#### Why Competitors Rank
1. **Skrzydlewska**: Dominant funeral group + obituary database
2. **Wyborcza**: Media authority with daily obituary updates
3. Both have: Hundreds of thousands of indexed obituary URLs

#### Solution
**STOP competing for "nekrolog Łódź"**

**START dominating**:
- zakład pogrzebowy Łódź
- usługi pogrzebowe Łódź
- organizacja pogrzebu Łódź
- transport zmarłych Łódź
- kremacja Łódź
- dom pogrzebowy Łódź

### Issue #2: Category Ownership Ambiguity

#### Problem
Google sees:
- Brand: "Nekrolog Łódź" ✅ (strong)
- Category: "zakład pogrzebowy" ⚠️ (weak association)

Competitors (Klepsydra, Maślakiewicz, Hades) have:
- Consistent "zakład pogrzebowy" mentions across:
  - Page titles
  - URL slugs
  - External mentions
  - Directory listings
  - Anchor text
  - Reviews

#### Root Cause
Historical migration caused **category confidence drop**, not trust loss.

#### Solution
**Re-assert category ownership** through:
1. Title restructuring
2. H1 optimization
3. Canonical service page creation
4. GBP alignment

### Issue #3: Missing Canonical "Zakład Pogrzebowy" Page

#### Problem
**No dedicated landing page** for the core category query.

Current structure:
- `/` (Homepage) - Brand-focused
- `/uslugi-pogrzebowe-lodz` - Services overview
- Individual service pages - Specific offerings

**Missing**: `/zaklad-pogrzebowy-lodz`

#### Why This Matters
Competitors have dedicated pages that:
- Target the exact category query
- Establish entity authority
- Provide comprehensive category information
- Serve as canonical reference

#### Solution
**CREATE**: `/zaklad-pogrzebowy-lodz` or `/zaklad-pogrzebowy-w-lodzi`

**Content Requirements**:
```
H1: Zakład Pogrzebowy w Łodzi

First paragraph:
"Zakład Pogrzebowy Nekrolog Łódź oferuje kompleksowe usługi pogrzebowe..."

Sections:
- What a zakład pogrzebowy does
- Years of experience (not tech features)
- 24/7 availability
- Physical presence in Łódź
- Service categories
- Why choose us
```

**Internal Linking**:
- From homepage (prominent position)
- From footer
- From GBP website link (if possible)

### Issue #4: Title Tag Hierarchy

#### Current Structure
```
Homepage: "Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo"
Template: "%s | Nekrolog Łódź"
```

**Problem**: Brand before category

#### Recommended Structure
```
Homepage: "Zakład Pogrzebowy w Łodzi – Nekrolog Łódź | Jolanta Kostowska"
Template: "%s | Zakład Pogrzebowy Łódź"
```

**Rationale**:
1. Category first (zakład pogrzebowy)
2. Location second (Łódź)
3. Brand third (Nekrolog Łódź)
4. Owner last (Jolanta Kostowska)

### Issue #5: H1 Not Optimized

#### Current
```tsx
<h1>Jolanta Usługi Pogrzebowe</h1>
```

#### Recommended
```tsx
<h1>Zakład Pogrzebowy w Łodzi</h1>
<p className="subtitle">Nekrolog Łódź – Jolanta Kostowska</p>
```

**Alternative**:
```tsx
<h1>Zakład Pogrzebowy w Łodzi – Nekrolog Łódź</h1>
```

### Issue #6: Schema.org Inconsistencies

#### Problem 1: Duplicate Schemas
- Root layout has FuneralHome schema
- Homepage has LocalBusiness schema with additionalType: FuneralHome

**Solution**: Remove from root layout, keep only on homepage (more detailed)

#### Problem 2: Opening Hours Mismatch
- Root layout: "Mo-Fr 08:00-16:00, Sa 09:00-13:00"
- Homepage: "00:00-23:59" (24/7)
- Content claims: "Dostępni 24/7"

**Solution**: Standardize to 24/7 everywhere OR clarify:
- Office hours: Mo-Fr 08:00-16:00
- Emergency line: 24/7

### Issue #7: Google Business Profile Alignment

#### Current Situation
- GBP exists and ranks well ✅
- Website language must match GBP exactly

#### Required Actions
1. **Verify GBP category**: Should be "Funeral Home" or "Zakład Pogrzebowy"
2. **Match service names**: Website services = GBP services
3. **NAP consistency**: Name, Address, Phone identical everywhere
4. **Description alignment**: Use same wording

#### GBP Optimization Checklist
- [ ] Weekly photo uploads (real, not stock)
- [ ] Regular Q&A entries
- [ ] Service categories expanded
- [ ] Posts (even short ones)
- [ ] Respond to all reviews

### Issue #8: Content Intent Mismatch

#### What Google Wants for "zakład pogrzebowy Łódź"
**Procedural, expert content**:
- "What to do in first 24 hours after death in Łódź"
- "How long does cremation take in Łódź"
- "Which documents required in Łódź hospitals"
- "Cost breakdown for funeral services in Łódź"
- "How to choose a funeral home in Łódź"

#### Current Content
✅ **Good**: Service descriptions, process explanations
⚠️ **Missing**: Practical guides, local-specific procedures

#### Recommended Content Additions
1. **FAQ expansion** with procedural questions
2. **Blog posts** on local procedures
3. **Document checklists** for Łódź
4. **Timeline guides** for different ceremony types
5. **Cost transparency** (ranges, what affects price)

---

## Implementation Roadmap

### Phase 1: Critical Fixes (Week 1)

#### 1.1 Create Canonical Service Page
**File**: `app/zaklad-pogrzebowy-lodz/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Zakład Pogrzebowy w Łodzi',
  description: 'Zakład Pogrzebowy Nekrolog Łódź – kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Doświadczenie od 20+ lat. Dostępni 24/7. Tel: +48 602 274 661.',
  keywords: [
    'zakład pogrzebowy łódź',
    'zakład pogrzebowy w łodzi',
    'dom pogrzebowy łódź',
    'usługi pogrzebowe łódź',
  ],
  alternates: {
    canonical: `${SITE_URL}/zaklad-pogrzebowy-lodz`,
  },
}
```

**H1**: "Zakład Pogrzebowy w Łodzi"

**Content Structure**:
- Introduction: What we do as a zakład pogrzebowy
- Experience: 20+ years serving Łódź families
- Services overview (link to detailed pages)
- Why choose us (experience, not tech)
- 24/7 availability
- Physical location emphasis
- Contact information

#### 1.2 Update Homepage Metadata
**File**: `app/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Zakład Pogrzebowy w Łodzi – Nekrolog Łódź | Jolanta Kostowska',
  description: 'Profesjonalny zakład pogrzebowy w Łodzi. Kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Doświadczenie 20+ lat. Dostępni całodobowo. Tel: +48 602 274 661.',
  keywords: [
    'zakład pogrzebowy łódź',
    'usługi pogrzebowe łódź',
    'dom pogrzebowy łódź',
    'organizacja pogrzebu łódź',
    'kremacja łódź',
    'transport zmarłych łódź',
  ],
}
```

#### 1.3 Update Root Layout
**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://nekrolog-lodz.pl'),
  title: {
    default: 'Zakład Pogrzebowy w Łodzi – Nekrolog Łódź | Jolanta Kostowska',
    template: '%s | Zakład Pogrzebowy Łódź'
  },
  description: 'Profesjonalny zakład pogrzebowy w Łodzi. Kompleksowe usługi pogrzebowe dostępne całodobowo.',
  keywords: [
    'zakład pogrzebowy łódź',
    'usługi pogrzebowe łódź',
    'dom pogrzebowy łódź',
  ],
}
```

**Remove FuneralHome schema** from root layout (keep only on homepage)

#### 1.4 Update Homepage H1
**File**: `components/HeroContent.tsx`

```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 leading-tight">
  Zakład Pogrzebowy w Łodzi
</h1>
<p className="text-xl md:text-2xl mb-4 font-light leading-relaxed text-gray-200">
  Nekrolog Łódź – Jolanta Kostowska
</p>
<p className="text-lg mb-8 text-gray-300">
  Profesjonalne wsparcie dla rodziny w trudnych chwilach dostępne 24 godziny na dobę
</p>
```

#### 1.5 Fix Schema Opening Hours
**File**: `app/layout.tsx`

Remove entire schema OR update to:
```json
{
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+48602274661",
      "contactType": "Emergency",
      "availableLanguage": ["pl"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ]
}
```

### Phase 2: Content Optimization (Week 2-3)

#### 2.1 Add Internal Links to New Canonical Page
- Homepage: Prominent link in hero or services section
- Footer: Add to main navigation
- Services page: Link from overview
- All service subpages: Breadcrumb or sidebar link

#### 2.2 Update Service Page Intros
Add zakład pogrzebowy entity reference:

**Example** (`app/uslugi/organizacja-pogrzebow-lodz/page.tsx`):
```tsx
<p>
  Zakład Pogrzebowy Nekrolog Łódź przejmuje wszystkie obowiązki związane 
  z przygotowaniem ceremonii...
</p>
```

#### 2.3 Expand FAQ with Procedural Content
**File**: `lib/constants.ts`

Add questions like:
- "Co zrobić w pierwszych 24 godzinach po śmierci w Łodzi?"
- "Jakie dokumenty są wymagane w szpitalach w Łodzi?"
- "Ile czasu zajmuje organizacja pogrzebu w Łodzi?"
- "Jakie są koszty usług pogrzebowych w Łodzi?"

#### 2.4 Create Blog Content Strategy
**Topics**:
1. "Przewodnik: Pierwsze kroki po śmierci bliskiej osoby w Łodzi"
2. "Dokumenty potrzebne do organizacji pogrzebu w Łodzi - kompletna lista"
3. "Kremacja w Łodzi - proces krok po kroku"
4. "Jak wybrać zakład pogrzebowy w Łodzi - poradnik"
5. "Zasiłek pogrzebowy ZUS/KRUS - jak uzyskać w Łodzi"

**Format**: Practical, procedural, local-specific

### Phase 3: Technical SEO (Week 3-4)

#### 3.1 Update Sitemap Priorities
**File**: `app/sitemap.ts`

```typescript
{
  url: `${baseUrl}/zaklad-pogrzebowy-lodz`,
  priority: 0.95,  // Second highest
  changeFrequency: 'weekly',
},
{
  url: baseUrl,
  priority: 1,
},
```

#### 3.2 Add Breadcrumb Schema
Implement BreadcrumbList schema on all pages:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Zakład Pogrzebowy Łódź",
      "item": "https://nekrolog-lodz.pl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Usługi",
      "item": "https://nekrolog-lodz.pl/uslugi-pogrzebowe-lodz"
    }
  ]
}
```

#### 3.3 Add FAQ Schema
**File**: Service pages and FAQ section

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jakie formalności muszę załatwić po śmierci bliskiej osoby?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pomagamy w uzyskaniu aktu zgonu..."
      }
    }
  ]
}
```

#### 3.4 Implement Article Schema for Blog Posts
Ensure blog posts have proper Article schema with:
- author
- datePublished
- dateModified
- publisher (organization)
- mainEntityOfPage

### Phase 4: Off-Page Optimization (Ongoing)

#### 4.1 Google Business Profile Optimization
**Weekly tasks**:
- Upload 3-5 photos (office, staff, ceremonies - with permission)
- Post 1-2 updates (service highlights, helpful tips)
- Answer 2-3 Q&A questions
- Respond to all reviews within 24 hours

**Monthly tasks**:
- Review and update service categories
- Update business description (match website)
- Verify NAP consistency

#### 4.2 Local Directory Listings
**Priority directories** (Poland-specific):
- Panorama Firm
- Pkt.pl
- Cylex
- Hotfrog
- Local Łódź business directories
- Funeral industry associations

**NAP Consistency**: Ensure identical:
- Name: "Zakład Pogrzebowy Nekrolog Łódź - Jolanta Kostowska"
- Address: "Legionów 48, 90-702 Łódź"
- Phone: "+48 602 274 661"

#### 4.3 Local Link Building
**Opportunities**:
- Parish websites (mention as recommended funeral home)
- Cemetery websites (if they list service providers)
- Local community sites
- Łódź city guides
- Funeral associations
- Supplier partnerships (florists, musicians)

#### 4.4 Review Generation Strategy
**Process**:
1. After service completion, send follow-up (2 weeks later)
2. Request Google review (provide direct link)
3. Respond to all reviews (thank positive, address concerns)
4. Feature reviews on website (with permission)

### Phase 5: Monitoring & Iteration (Ongoing)

#### 5.1 Track Rankings
**Primary keywords**:
- zakład pogrzebowy łódź
- usługi pogrzebowe łódź
- dom pogrzebowy łódź
- organizacja pogrzebu łódź
- kremacja łódź
- transport zmarłych łódź

**Tools**: Google Search Console, manual checks

#### 5.2 Monitor Google Business Profile
**Metrics**:
- Search queries (how people find you)
- Actions (calls, website visits, direction requests)
- Photo views
- Review count and rating

#### 5.3 Analyze Search Console Data
**Weekly review**:
- Top queries
- Click-through rates
- Impressions vs clicks
- Pages with declining performance

#### 5.4 Content Performance
**Track**:
- Which service pages get most traffic
- Blog post engagement
- Conversion paths (which pages lead to contact)

---

## Key Takeaways

### What's Working ✅
1. **Modern tech stack**: Next.js SSR is excellent for SEO
2. **Structured data**: Comprehensive LocalBusiness schema
3. **URL structure**: Clean, keyword-rich, logical hierarchy
4. **Service pages**: Detailed, procedural content with E-E-A-T signals
5. **Local optimization**: Łódź mentioned consistently
6. **Mobile-first**: Responsive design with TailwindCSS

### What Needs Immediate Attention ⚠️
1. **Category ownership**: "zakład pogrzebowy" must be primary, not "nekrolog"
2. **Title hierarchy**: Category before brand
3. **H1 optimization**: Must include "zakład pogrzebowy w Łodzi"
4. **Canonical page**: Create dedicated `/zaklad-pogrzebowy-lodz` page
5. **Schema consistency**: Fix opening hours, remove duplicates
6. **Intent alignment**: Stop chasing "nekrolog" queries

### Strategic Shift Required 🎯
**From**: Competing with obituary publishers for "nekrolog Łódź"
**To**: Dominating service queries for "zakład pogrzebowy Łódź"

**Why**: 
- You're a service business, not a publisher
- Google correctly classifies "nekrolog" as informational
- "zakład pogrzebowy" is transactional/local service intent
- Your domain age + real business = fast recovery once re-classified

### Expected Timeline
- **Week 1-2**: Implement critical fixes, see initial movement
- **Week 4-6**: Google re-crawls, begins re-classification
- **Week 8-12**: Rankings improve for target keywords
- **Month 4-6**: Establish category authority, outrank competitors

### Success Metrics
1. **Ranking #1-3** for "zakład pogrzebowy łódź"
2. **Increased organic traffic** from service queries
3. **Higher conversion rate** (service intent = higher intent)
4. **More phone calls** from Google Business Profile
5. **Reduced bounce rate** (better intent match)

---

## Appendix: Quick Reference

### Priority Keywords (Target These)
1. zakład pogrzebowy łódź
2. usługi pogrzebowe łódź
3. dom pogrzebowy łódź
4. organizacja pogrzebu łódź
5. kremacja łódź
6. transport zmarłych łódź
7. zakład pogrzebowy w łodzi
8. pogrzeby łódź

### Avoid/Deprioritize
- nekrolog łódź (informational intent, publisher competition)
- nekrologi łódź (same issue)

### Essential Pages Hierarchy
```
1. Homepage (/)
   └─ H1: "Zakład Pogrzebowy w Łodzi"

2. Canonical Service Page (/zaklad-pogrzebowy-lodz) [CREATE THIS]
   └─ H1: "Zakład Pogrzebowy w Łodzi"

3. Services Overview (/uslugi-pogrzebowe-lodz)
   └─ H1: "Usługi Pogrzebowe w Łodzi"

4. Individual Services (/uslugi/*)
   └─ H1: "[Service Name] w Łodzi"

5. Contact (/kontakt)
   └─ H1: "Kontakt - Zakład Pogrzebowy Łódź"
```

### Schema.org Checklist
- [ ] LocalBusiness (homepage only)
- [ ] FuneralHome additionalType
- [ ] Aggregate ratings
- [ ] Reviews (individual)
- [ ] Services (makesOffer)
- [ ] Opening hours (consistent)
- [ ] Contact points (24/7 emergency)
- [ ] BreadcrumbList (all pages)
- [ ] FAQPage (FAQ section)
- [ ] Article (blog posts)

### NAP (Name, Address, Phone) Standard
```
Name: Zakład Pogrzebowy Nekrolog Łódź - Jolanta Kostowska
Address: Legionów 48, 90-702 Łódź, Poland
Phone: +48 602 274 661
Email: kontakt@nekrolog-lodz.pl
Website: https://nekrolog-lodz.pl
```

Use EXACTLY this format everywhere:
- Website footer
- Google Business Profile
- Directory listings
- Social media
- Schema.org markup

---

## Final Note

This is **not a technical problem**. The website is well-built with modern SEO best practices.

This is a **strategic positioning problem**. Google needs clear, repeated, boring signals that you are a "zakład pogrzebowy" first, brand second.

Once Google re-classifies the entity from "nekrolog-adjacent" to "canonical funeral home," your existing domain authority, real business presence, and quality content will drive rapid ranking improvements.

**The fix is simple**: Assert "zakład pogrzebowy Łódź" loudly, consistently, and boringly across one strong page + GBP + titles + H1s.

**Timeline**: 2-4 months for full re-classification and ranking recovery.

**Advantage**: You're not starting from zero. You're re-asserting an existing, trusted entity with a temporary category clarity issue.
