# SEO Overhaul Documentation - Nekrolog Łódź
## Zakład Pogrzebowy Jolanta Kostowska

**Date:** February 1, 2026  
**Business:** Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska  
**NIP:** 7271089145  
**Location:** Legionów 48, 90-702 Łódź  
**Phone:** +48 602 274 661  
**Domain:** nekrolog-lodz.com

---

## Executive Summary

This document outlines a comprehensive SEO overhaul designed to position Nekrolog Łódź as the dominant funeral home service in Łódź through an information-first strategy inspired by inFakt's approach to ranking for "urząd skarbowy" queries.

### Core Strategy
- **Information Architecture:** Build authoritative informational pages that answer urgent questions
- **Unique Value Proposition:** Emphasize "no upfront payment / settlement with ZUS" throughout
- **Local Dominance:** Target Łódź-specific queries with infrastructure-style pages
- **AI-Friendly:** Structured data and clear information hierarchy for AI search engines

---

## Completed Changes

### 1. ✅ Favicon Implementation
- **File:** `app/layout.tsx`
- **Changes:** Added proper favicon metadata for Next.js and Cloudflare deployment
- **Code:**
```typescript
icons: {
  icon: '/favicon.ico',
  shortcut: '/favicon.ico',
  apple: '/favicon.ico',
}
```

### 2. ✅ Blog System Removal
- **Rationale:** Legacy blog system was diluting SEO and causing build issues
- **Files Modified:**
  - `components/HomePageClient.tsx` - Removed BlogPreview component
  - `app/page.tsx` - Removed Supabase blog fetching logic
  - `next.config.js` - Added redirect from /blog/* to homepage
- **Result:** Cleaner site structure, faster builds, focused SEO

### 3. ✅ Domain Update
- **Old:** nekrolog-lodz.pl
- **New:** nekrolog-lodz.com
- **Files Updated:**
  - `app/layout.tsx` - metadataBase
  - `app/robots.ts` - sitemap URL
  - `lib/constants.ts` - SITE_URL constant

### 4. ✅ Vertical Spacing Fixes
- **Issue:** Excessive vertical gaps from SEO redesign
- **Solution:** Reduced padding across all components
  - Hero: `min-h-screen` → `min-h-[70vh]`, `py-20` → `py-12`
  - Sections: `py-20` → `py-12`, `py-16` → `py-10`
  - Global: `py-24 md:py-32` → `py-12 md:py-16`

### 5. ✅ Created Informational SEO Pages

#### Page 1: Co Zrobić Po Śmierci Bliskiej Osoby
- **URL:** `/poradnik/co-zrobic-po-smierci`
- **Target Keywords:**
  - co zrobić po śmierci
  - śmierć bliskiej osoby
  - formalności po śmierci
  - organizacja pogrzebu łódź
- **Content Strategy:**
  - 6-step procedural guide
  - Emphasizes no upfront payment
  - 24/7 availability highlighted
  - Internal linking to related topics
- **Unique Features:**
  - Step-by-step cards with icons
  - FAQ section
  - Prominent CTA with phone number
  - Related topics grid

#### Page 2: Zasiłek Pogrzebowy ZUS 2024
- **URL:** `/poradnik/zasilek-pogrzebowy-zus`
- **Target Keywords:**
  - zasiłek pogrzebowy zus
  - zasiłek pogrzebowy 2024
  - ile wynosi zasiłek pogrzebowy
  - wniosek o zasiłek pogrzebowy
  - pogrzeb bez zaliczki
- **Content Strategy:**
  - Comprehensive guide on funeral allowance
  - 4000 zł amount prominently displayed
  - Explains who qualifies (ZUS vs KRUS)
  - Document checklist
  - 4-step application procedure
- **Unique Value Prop Integration:**
  - Dedicated section on "no upfront payment"
  - Explains direct settlement with ZUS
  - Reduces financial anxiety
- **SEO Features:**
  - Structured FAQ section
  - Clear headings hierarchy
  - Internal linking strategy
  - Contact CTAs throughout

---

## SEO Page Architecture (Planned)

### Tier 1: Core Service Pages (Existing - Need Enhancement)
1. ✅ `/` - Homepage
2. ✅ `/zaklad-pogrzebowy-lodz` - Main service page
3. ✅ `/uslugi-pogrzebowe-lodz` - Services overview
4. ✅ `/kontakt` - Contact page

### Tier 2: Informational Pages (High Priority)
1. ✅ `/poradnik/co-zrobic-po-smierci` - **CREATED**
2. ✅ `/poradnik/zasilek-pogrzebowy-zus` - **CREATED**
3. 🔄 `/poradnik/dokumenty-do-pogrzebu` - **IN PROGRESS**
4. 📋 `/poradnik/ile-kosztuje-pogrzeb-lodz` - **PLANNED**
5. 📋 `/poradnik/jak-zorganizowac-pogrzeb` - **PLANNED**

### Tier 3: Unique Value Proposition Pages (Critical for Differentiation)
1. 📋 `/pogrzeb-bez-zaliczki` - **PLANNED**
2. 📋 `/pogrzeb-bez-kosztow-z-gory` - **PLANNED**
3. 📋 `/rozliczenie-z-zus` - **PLANNED**
4. 📋 `/pogrzeb-finansowany-z-zus` - **PLANNED**

### Tier 4: Infrastructure Pages - Cmentarze (inFakt-style)
1. 📋 `/cmentarze-lodz` - Main cemetery directory - **PLANNED**
2. 📋 `/cmentarze-lodz/doły` - Cmentarz Doły - **PLANNED**
3. 📋 `/cmentarze-lodz/radogoszcz` - Cmentarz Radogoszcz - **PLANNED**
4. 📋 `/cmentarze-lodz/zarzew` - Cmentarz Zarzew - **PLANNED**
5. 📋 `/cmentarze-lodz/stary` - Stary Cmentarz - **PLANNED**
6. 📋 `/cmentarze-lodz/komunalny-polnocny` - Komunalny Północny - **PLANNED**

Each cemetery page should include:
- Address, hours, contact info
- How funerals work at this cemetery
- Procedures and requirements
- What the funeral home handles
- Natural mention of "no upfront payment"

### Tier 5: Local Expansion - Dzielnice (Geographic SEO)
1. 📋 `/zaklad-pogrzebowy-lodz/bałuty` - **PLANNED**
2. 📋 `/zaklad-pogrzebowy-lodz/gorna` - **PLANNED**
3. 📋 `/zaklad-pogrzebowy-lodz/polesie` - **PLANNED**
4. 📋 `/zaklad-pogrzebowy-lodz/srodmiescie` - **PLANNED**
5. 📋 `/zaklad-pogrzebowy-lodz/widzew` - **PLANNED**

Each district page should include:
- Service area coverage
- Local cemetery information
- 24/7 availability in this district
- No upfront payment messaging

---

## Technical SEO Improvements

### Metadata Enhancements
- ✅ Proper favicon configuration
- ✅ Updated domain references
- ✅ Comprehensive keywords in metadata
- 📋 Need: OpenGraph images for social sharing
- 📋 Need: Twitter card optimization

### Structured Data (Schema.org)
**Current Implementation:**
- ✅ LocalBusiness schema on homepage
- ✅ FuneralHome additionalType
- ✅ Aggregate rating (5.0, 94 reviews)
- ✅ Contact points (customer service + emergency)
- ✅ Service offerings
- ✅ Opening hours
- ✅ Geographic coordinates

**Needed Enhancements:**
- 📋 FAQPage schema for FAQ sections
- 📋 HowTo schema for procedural guides
- 📋 BreadcrumbList schema for navigation
- 📋 Organization schema with NIP
- 📋 Service schema for each service type
- 📋 Place schema for cemetery pages

### AI Search Optimization
**Strategies:**
1. **Clear Question-Answer Format**
   - FAQ sections on every page
   - Direct answers to common queries
   - Structured with proper headings

2. **Entity Recognition**
   - Consistent business name usage
   - NIP number included
   - Address standardization
   - Phone number formatting

3. **Contextual Information**
   - "No upfront payment" explained clearly
   - ZUS settlement process detailed
   - Legal and safe wording throughout

4. **Semantic Relationships**
   - Internal linking between related topics
   - Clear hierarchy of information
   - Related topics sections

---

## Content Strategy

### Tone & Messaging
- **Empathetic:** Acknowledge difficult time
- **Clear:** Simple language, no jargon
- **Reassuring:** Emphasize support and guidance
- **Professional:** Maintain dignity and respect
- **Transparent:** Clear about costs and process

### Unique Value Proposition Integration
Every page should naturally mention:
1. **No upfront payment required**
2. **Direct settlement with ZUS/KRUS**
3. **24/7 availability**
4. **Complete formality handling**
5. **20+ years experience**

### Legal Compliance
- ❌ Never say "free funeral"
- ✅ Always explain: "funeral organized and funded by company, settled with ZUS allowance"
- ✅ Clear that this is a financing arrangement
- ✅ Transparent about how it works

---

## Keyword Strategy

### Primary Keywords (High Intent)
- zakład pogrzebowy łódź
- dom pogrzebowy łódź
- usługi pogrzebowe łódź
- pogrzeb łódź
- organizacja pogrzebu łódź

### Informational Keywords (High Volume)
- co zrobić po śmierci
- zasiłek pogrzebowy zus
- ile kosztuje pogrzeb
- dokumenty do pogrzebu
- jak zorganizować pogrzeb

### Unique Value Keywords (Low Competition)
- pogrzeb bez zaliczki
- pogrzeb bez kosztów z góry
- rozliczenie z zus
- pogrzeb finansowany z zus

### Local Keywords (Geographic)
- zakład pogrzebowy łódź [dzielnica]
- pogrzeb łódź [dzielnica]
- cmentarz [nazwa] łódź

### Long-tail Keywords
- co zrobić po śmierci bliskiej osoby łódź
- jak uzyskać zasiłek pogrzebowy zus
- organizacja pogrzebu krok po kroku
- pogrzeb bez płacenia z góry

---

## Internal Linking Strategy

### Hub Pages
1. **Homepage** - Links to all main categories
2. **Poradnik Hub** - Central guide directory
3. **Cmentarze Hub** - Cemetery directory
4. **Usługi Hub** - Services overview

### Linking Rules
- Every page links to at least 3 related pages
- "Related Topics" section on every informational page
- Contextual links within content
- Clear anchor text (keyword-rich)
- Footer links to critical pages

### Priority Link Flow
```
Homepage
  ├─> Co Zrobić Po Śmierci
  │     ├─> Zasiłek Pogrzebowy ZUS
  │     ├─> Dokumenty Do Pogrzebu
  │     └─> Pogrzeb Bez Zaliczki
  ├─> Cmentarze Łódź
  │     ├─> Cmentarz Doły
  │     ├─> Cmentarz Radogoszcz
  │     └─> [other cemeteries]
  └─> Usługi Pogrzebowe
        ├─> Kremacja
        ├─> Transport
        └─> [other services]
```

---

## Performance Optimizations

### Current Setup
- ✅ Edge runtime for fast response
- ✅ Unoptimized images (required for Cloudflare)
- ✅ Reduced vertical spacing for better UX
- ✅ Minimal JavaScript (mostly static)

### Recommendations
- 📋 Implement lazy loading for images
- 📋 Optimize font loading
- 📋 Minimize CSS bundle
- 📋 Add service worker for offline access
- 📋 Implement proper caching headers

---

## Conversion Optimization

### Call-to-Action Strategy
1. **Primary CTA:** Phone number (always visible)
2. **Secondary CTA:** Contact form
3. **Tertiary CTA:** Related information

### CTA Placement
- Hero section (above fold)
- After each major content section
- Bottom of every page
- Sticky header on mobile (optional)

### Trust Signals
- ✅ 20+ years experience
- ✅ 94 reviews, 5.0 rating
- ✅ NIP number (business legitimacy)
- ✅ Physical address
- ✅ 24/7 availability
- ✅ Real testimonials

---

## Next Steps & Priorities

### Immediate (Next Session)
1. 🔥 Create `/pogrzeb-bez-zaliczki` page (critical differentiator)
2. 🔥 Create `/cmentarze-lodz` hub page
3. 🔥 Create `/poradnik/dokumenty-do-pogrzebu`
4. 🔥 Update constants.ts with NIP and enhanced business info

### High Priority (This Week)
1. Create all Tier 3 value proposition pages
2. Create main cemetery hub + top 3 cemetery pages
3. Implement enhanced structured data
4. Create sitemap updates
5. Add FAQ schema to existing pages

### Medium Priority (This Month)
1. Complete all cemetery pages
2. Create district-specific pages
3. Implement breadcrumb navigation
4. Add OpenGraph images
5. Create additional procedural guides

### Low Priority (Ongoing)
1. Monitor search rankings
2. Analyze user behavior
3. Create additional long-tail content
4. Expand to nearby cities
5. Build backlink strategy

---

## Measurement & KPIs

### SEO Metrics to Track
- Organic traffic growth
- Keyword rankings for target terms
- Click-through rate from search
- Time on page for informational content
- Bounce rate by page type

### Business Metrics
- Phone call volume
- Contact form submissions
- Geographic distribution of visitors
- Mobile vs desktop traffic
- Conversion rate by traffic source

### Competitive Analysis
- Track competitor rankings for key terms
- Monitor competitor content strategy
- Identify content gaps
- Benchmark against industry leaders

---

## Technical Notes

### Build Configuration
- Blog directory redirected to homepage
- Edge runtime enabled
- Cloudflare Pages deployment
- Next.js 15.0.0

### Dependencies Removed
- Supabase client (blog system deprecated)
- Blog-related components
- PostHog analytics (temporarily disabled)

### File Structure
```
app/
├── poradnik/
│   ├── co-zrobic-po-smierci/
│   ├── zasilek-pogrzebowy-zus/
│   └── [more guides]
├── cmentarze-lodz/
│   └── [cemetery pages]
├── pogrzeb-bez-zaliczki/
└── [existing pages]
```

---

## Content Guidelines for Future Pages

### Page Template Structure
1. **Hero Section**
   - H1 with primary keyword
   - Brief description
   - Primary CTA (phone number)

2. **Introduction**
   - Answer the main question immediately
   - Highlight unique value proposition
   - Set expectations for content

3. **Main Content**
   - Use H2/H3 hierarchy
   - Break into digestible sections
   - Include visual elements (icons, cards)
   - Add internal links contextually

4. **FAQ Section**
   - 3-5 common questions
   - Direct, clear answers
   - Opportunity to address objections

5. **CTA Section**
   - Restate value proposition
   - Multiple contact options
   - Business information (NIP, address)

6. **Related Topics**
   - 4 related pages
   - Clear descriptions
   - Encourage exploration

### Writing Checklist
- [ ] Primary keyword in H1
- [ ] Secondary keywords in H2s
- [ ] "No upfront payment" mentioned naturally
- [ ] Phone number prominent
- [ ] Internal links to 3+ pages
- [ ] FAQ section included
- [ ] Business info in footer
- [ ] Mobile-friendly layout
- [ ] Clear CTAs throughout
- [ ] Empathetic, professional tone

---

## Competitive Advantages

### What Sets Nekrolog Łódź Apart
1. **No Upfront Payment** - Unique in market
2. **Direct ZUS Settlement** - Reduces family burden
3. **20+ Years Experience** - Established trust
4. **24/7 Availability** - Always accessible
5. **Complete Service** - All formalities handled
6. **Local Expertise** - Deep Łódź knowledge

### Content Moat Strategy
By creating comprehensive, authoritative guides on:
- Funeral procedures
- ZUS allowance process
- Cemetery information
- District-specific services

We become the go-to information source, not just a service provider. This builds trust and positions us as the obvious choice when the need arises.

---

## Conclusion

This SEO overhaul transforms Nekrolog Łódź from a simple service website into an authoritative information resource. By answering urgent questions, providing clear guidance, and emphasizing our unique "no upfront payment" value proposition, we position ourselves to dominate local search results and build trust with families in their time of need.

The strategy is designed for long-term SEO success, AI search optimization, and genuine user value - creating a sustainable competitive advantage in the Łódź funeral services market.

---

**Last Updated:** February 1, 2026  
**Status:** In Progress (Phase 1 Complete)  
**Next Review:** After Tier 3 pages completion
