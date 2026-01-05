# SEO Implementation Summary - Entity Reclassification Complete

## Execution Date
January 5, 2026

## Strategic Goal
**Reclassify site from "obituary-adjacent" to "canonical funeral home" entity**

---

## ✅ Critical Changes Implemented

### 1. Canonical Category Authority Page Created
**File**: `/app/zaklad-pogrzebowy-lodz/page.tsx`

- **H1**: "Zakład Pogrzebowy w Łodzi"
- **First sentence**: "Zakład Pogrzebowy Nekrolog Łódź oferuje kompleksowe usługi pogrzebowe..."
- **Purpose**: Own the entity classification for "zakład pogrzebowy Łódź"
- **Priority**: 0.95 in sitemap (second highest)
- **Content**: 
  - What a zakład pogrzebowy does
  - 20+ years experience emphasis
  - Service overview with links to detailed pages
  - Why choose us (experience-based, not tech)
  - 24/7 availability clearly stated
  - Physical location prominence

### 2. Title & H1 Hierarchy Fixed Globally

#### Homepage (`app/page.tsx`)
**Before**: `Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo`
**After**: `Zakład Pogrzebowy w Łodzi – Nekrolog Łódź | Jolanta Kostowska`

**Rule Applied**: CATEGORY → LOCATION → BRAND

#### Root Layout (`app/layout.tsx`)
**Before**: `Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo`
**After**: `Zakład Pogrzebowy w Łodzi – Nekrolog Łódź | Jolanta Kostowska`

**Template**: `%s | Zakład Pogrzebowy Łódź`

#### Homepage H1 (`components/HeroContent.tsx`)
**Before**: `Jolanta Usługi Pogrzebowe`
**After**: `Zakład Pogrzebowy w Łodzi`

**Brand moved to subtitle**: "Nekrolog Łódź – Jolanta Kostowska"

### 3. Schema Cleanup - Duplication Removed

#### Removed
- Duplicate FuneralHome schema from root layout

#### Fixed (Homepage only - `app/page.tsx`)
- **Opening hours** separated:
  - Office hours: Mon-Fri 8:00-16:00, Sat 9:00-13:00
  - Emergency line: 24/7 via separate ContactPoint
- **ContactPoint** structure:
  - `customer service` (office hours)
  - `emergency` (24/7)
- **Single source of truth**: All schema on homepage only

### 4. Entity Assertions Across Service Pages

**Files Updated**:
- `/app/uslugi/organizacja-pogrzebow-lodz/page.tsx`
- `/app/uslugi/transport-zmarlych-lodz/page.tsx`
- `/app/uslugi/oprawa-muzyczna-lodz/page.tsx`
- `/app/uslugi/ekshumacja-lodz/page.tsx`

**Change**: Replaced "Dom Pogrzebowy" with "Zakład Pogrzebowy" consistently

**Pattern**: "Zakład Pogrzebowy Nekrolog Łódź [verb]..."

**Purpose**: Repeatedly assert entity category ownership

### 5. Internal Linking Structure Added

#### Footer Navigation (`components/Footer.tsx`)
Added prominent link: `/zaklad-pogrzebowy-lodz` → "Zakład Pogrzebowy"

**Full Navigation**:
- Strona Główna → `/`
- **Zakład Pogrzebowy** → `/zaklad-pogrzebowy-lodz` ⭐ NEW
- Usługi → `/uslugi-pogrzebowe-lodz`
- O nas → `/o-nas`
- Kontakt → `/kontakt`

#### Services Section (`components/Services.tsx`)
Updated intro: "Zakład Pogrzebowy Nekrolog Łódź zapewnia profesjonalne wsparcie..."

#### Component-Wide Consistency
- `components/HeroContent.tsx`: "Zakład pogrzebowy w centrum Łodzi"
- `components/Navbar.tsx`: "Zakład pogrzebowy w centrum Łodzi"
- `components/About.tsx`: "Zakład Pogrzebowy Nekrolog Łódź"

### 6. Sitemap Priority Update

**File**: `app/sitemap.ts`

```
Priority 1.00: /                              (Homepage)
Priority 0.95: /zaklad-pogrzebowy-lodz       ⭐ NEW - Canonical page
Priority 0.90: /uslugi-pogrzebowe-lodz       (Services overview)
Priority 0.80: /uslugi/* pages               (Individual services)
Priority 0.80: /kontakt                      (Contact)
Priority 0.80: /blog                         (Blog)
```

---

## 🎯 What This Achieves

### Entity Classification Signals
Google now sees **repeated, consistent signals** that this is:
- ✅ A "zakład pogrzebowy" (funeral home) FIRST
- ✅ Located in "Łódź" (local service)
- ✅ Brand "Nekrolog Łódź" SECOND

### Internal Linking Logic
Every page now asserts:
> "These services belong to a **zakład pogrzebowy** entity"

### Category Ownership
The site now has:
- Canonical page for the category
- Category-first title hierarchy
- Category-first H1 structure
- Consistent entity language across all pages

---

## 🚫 What We Did NOT Do (Intentionally)

1. ❌ Remove "nekrolog" entirely (it's the brand name)
2. ❌ Create 301 redirects (not needed)
3. ❌ Delete existing content (not needed)
4. ❌ Chase "nekrolog Łódź" with more content (wrong intent)
5. ❌ Keyword stuff (clean, natural language)

---

## 📊 Expected Timeline & Results

### Week 1-2
- Google re-crawls new canonical signals
- Search Console shows new page indexed
- Initial impressions for "zakład pogrzebowy łódź"

### Week 4-6
- Query intent begins to shift in Google's classification
- Rankings start appearing for target keywords
- CTR improves (better intent match)

### Week 8-12
- Rankings stabilize for:
  - zakład pogrzebowy łódź
  - usługi pogrzebowe łódź
  - dom pogrzebowy łódź
  - organizacja pogrzebu łódź
- Organic traffic increases from service queries

### Month 4-6
- Outranking legacy competitors becomes possible
- Established as canonical "zakład pogrzebowy" in Łódź
- Higher conversion rate (service intent = higher intent)

---

## 🎯 Target Keywords (Now Properly Aligned)

### Primary (Transactional/Local Service Intent)
1. zakład pogrzebowy łódź ⭐
2. usługi pogrzebowe łódź
3. dom pogrzebowy łódź
4. organizacja pogrzebu łódź
5. kremacja łódź
6. transport zmarłych łódź

### Deprioritized (Informational/Publisher Intent)
- ~~nekrolog łódź~~ (let publishers have this)
- ~~nekrologi łódź~~ (informational query)

---

## 📋 Files Modified

### New Files Created
1. `/app/zaklad-pogrzebowy-lodz/page.tsx` - Canonical category page

### Files Modified
1. `/app/page.tsx` - Metadata & schema
2. `/app/layout.tsx` - Global metadata & removed duplicate schema
3. `/components/HeroContent.tsx` - H1 & brand hierarchy
4. `/components/Footer.tsx` - Navigation links
5. `/components/Services.tsx` - Entity assertion
6. `/components/Navbar.tsx` - Consistency
7. `/components/About.tsx` - Consistency
8. `/app/sitemap.ts` - Priorities
9. `/app/uslugi/organizacja-pogrzebow-lodz/page.tsx` - Entity assertion
10. `/app/uslugi/transport-zmarlych-lodz/page.tsx` - Entity assertion
11. `/app/uslugi/oprawa-muzyczna-lodz/page.tsx` - Entity assertion
12. `/app/uslugi/ekshumacja-lodz/page.tsx` - Entity assertion

---

## 🔍 Verification Checklist

### Immediate (After Deployment)
- [ ] Verify `/zaklad-pogrzebowy-lodz` page loads correctly
- [ ] Check homepage H1 displays "Zakład Pogrzebowy w Łodzi"
- [ ] Confirm footer link to canonical page works
- [ ] Test all internal links function properly
- [ ] Validate schema.org markup (use Google Rich Results Test)

### Week 1
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for `/zaklad-pogrzebowy-lodz`
- [ ] Monitor Search Console for crawl errors
- [ ] Check that duplicate schema is removed (view page source)

### Week 2-4
- [ ] Monitor impressions for "zakład pogrzebowy łódź"
- [ ] Track position changes in Search Console
- [ ] Review click-through rates for new queries
- [ ] Check Google Business Profile alignment

### Ongoing
- [ ] Weekly GBP updates (photos, posts, Q&A)
- [ ] Respond to all reviews within 24 hours
- [ ] Monitor competitor rankings
- [ ] Track conversion rate from organic traffic

---

## 💡 One-Sentence Summary

**"We fixed Google's misclassification by clearly asserting we are a local funeral home (zakład pogrzebowy), not an obituary publisher, through title hierarchy, canonical page creation, and consistent entity language."**

---

## 🚀 Next Steps (Optional Enhancements)

### Content Strategy (Week 3-4)
1. Create blog posts with procedural content:
   - "Co zrobić w pierwszych 24 godzinach po śmierci w Łodzi"
   - "Dokumenty potrzebne do organizacji pogrzebu w Łodzi"
   - "Jak wybrać zakład pogrzebowy w Łodzi - poradnik"

### Local SEO (Ongoing)
1. Add to local directories (NAP consistency):
   - Panorama Firm
   - Pkt.pl
   - Cylex
   - Local Łódź business directories

2. Build local links:
   - Parish websites
   - Cemetery websites
   - Funeral associations
   - Supplier partnerships

### Technical (Future)
1. Add FAQ schema to FAQ section
2. Add BreadcrumbList schema to all pages
3. Implement Article schema for blog posts

---

## ✅ Success Metrics

### Rankings
- **Goal**: #1-3 for "zakład pogrzebowy łódź" within 3-4 months
- **Current**: Track baseline in Search Console

### Traffic
- **Goal**: 50%+ increase in organic traffic from service queries
- **Measure**: Google Analytics - Organic search segment

### Conversions
- **Goal**: Higher conversion rate (service intent = higher quality)
- **Measure**: Phone calls, contact form submissions

### Business Impact
- **Goal**: More qualified leads from Google searches
- **Measure**: Call tracking, lead quality assessment

---

## 🎓 Key Learnings

1. **Entity classification > technical SEO**: The site was technically sound; Google just didn't know what category you belonged to.

2. **Intent matters more than keywords**: "nekrolog" = informational, "zakład pogrzebowy" = transactional.

3. **Consistency is key**: Repeated, boring signals work better than clever optimization.

4. **Age is an advantage**: Your domain authority + real business = fast recovery once reclassified.

5. **Don't fight the wrong battle**: Competing with media for obituary queries was never winnable.

---

## 📞 Support

If rankings don't improve after 8-12 weeks:
1. Verify all changes deployed correctly
2. Check Google Search Console for issues
3. Ensure GBP is optimized and active
4. Review NAP consistency across directories
5. Consider adding more procedural content

**This is a reclassification, not a rebuild. The foundation was solid; we just needed to tell Google what you actually are.**
