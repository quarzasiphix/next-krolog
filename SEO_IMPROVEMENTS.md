# SEO Implementation Summary for nekrolog-lodz.com

## ✅ Completed Improvements

### 1. Schema Markup Enhancements
- **Homepage LocalBusiness Schema** - Added:
  - `slogan`: "Pogrzeb bez zaliczki - pełne wsparcie w trudnej chwili"
  - `paymentAccepted`: Cash, Bank Transfer, ZUS/KRUS Benefit
  - `currenciesAccepted`: PLN
  - `knowsAbout`: Comprehensive list of services and expertise
  
- **FAQ Schema Component** created at `components/structured-data/FAQSchema.tsx`
  - Reusable component for all pages
  - Applied to `/cmentarze-lodz` page with 4 key questions

### 2. Meta Tags & Social Media
- **Enhanced Open Graph**:
  - Added og:image with proper dimensions (1200x630)
  - Complete image metadata with alt text
  
- **Enhanced Twitter Cards**:
  - Added twitter:image
  - Improved description with phone number CTA
  
- **Enhanced Robots Meta**:
  - Added googleBot-specific directives
  - max-image-preview: large
  - max-snippet: -1 (unlimited)
  - max-video-preview: -1 (unlimited)

---

## 📋 Recommended Next Steps

### High Priority (Do These First)

#### 1. Add Resource Hints to `app/layout.tsx`
Add these to the `<head>` section for better performance:

```typescript
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
 <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.app.goo.gl" />
      </head>
      <body>
        {/* rest */}
      </body>
    </html>
  )
}
```

#### 2. Image Optimization Checklist
Create a document listing all images that need:
- **Alt text** (descriptive, keyword-rich)
- **WebP conversion** (better compression)
- **Lazy loading** (below-the-fold images)

#### 3. Apply FAQ Schema to More Pages
Use the new `FAQSchema` component on these pages:
- `/poradnik/co-zrobic-po-smierci` (Already has FAQs in HTML)
- `/zaklad-pogrzebowy-lodz`
- `/uslugi-pogrzebowe-lodz`
- `/pogrzeb-bez-zaliczki`
All guide pages with FAQ sections

#### 4. Title Tag Improvements
Consider these enhancements for key pages:

| Page | Current | Suggested Improvement |
|------|---------|----------------------|
| Homepage | Good | Consider adding year: "...Łódź 2026" |
| Cemeteries | Good | Add: "Przewodnik 2026" |
| Services | Check | Add: "Od 2003 \| 20+ Lat" |

---

## 🔧 Technical Improvements to Implement

### 1. Image Lazy Loading
Add to `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loading: 'lazy', // Add this
  },
}
```

For individual images, use:
```tsx
<Image loading="lazy" alt="descriptive text" ... />
```

### 2. Font Optimization
If using Google Fonts, optimize loading in `app/layout.tsx`:
```tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})
```

### 3. Sitemap Enhancements
The sitemap already exists at `/sitemap.xml`. Consider adding:
- `<changefreq>` for all URLs
- `<priority>` values (already present ✅)
- `<lastmod>` dates (already present ✅)

---

## 📊 SEO Monitoring Setup

### Google Search Console
1. Verify property ownership
2. Submit sitemap: `https://nekrolog-lodz.com/sitemap.xml`
3. Monitor these metrics:
   - Total impressions
   - Average position
   - Click-through rate (CTR)
   - Core Web Vitals

### Key Queries to Track
- "zakład pogrzebowy łódź"
- "usługi pogrzebowe łódź"
- "kremacja łódź"
- "cmentarze łódź"
- "pogrzeb bez zaliczki łódź"
- "całodobowy zakład pogrzebowy łódź"

---

## 🎯 Content to Create (From SEO Analysis)

### Missing High-Value Pages
1. `/koszty-pogrzebu-lodz` - Funeral costs guide
2. `/pogrzeb-katolicki-lodz` - Catholic funeral guide
3. `/pogrzeb-swiecki-lodz` - Secular funeral guide
4. `/kolumbarium-lodz` - Columbarium information

### Location-Specific Pages
Create for each service area (13 total):
- `/zaklad-pogrzebowy-pabianice`
- `/zaklad-pogrzebowy-zgierz`
- `/zaklad-pogrzebowy-aleksandrow-lodzki`
- (etc. for all 13 cities in `BUSINESS_INFO.areaServed`)

---

## ⚡ Performance Optimizations

### Already Implemented
✅ Static HTML export (excellent performance)
✅ Cloudflare hosting (CDN)
✅ Proper canonical URLs

### To Implement
- [ ] WebP image format
- [ ] Lazy loading for images
- [ ] Resource hints (preconnect, dns-prefetch)
- [ ] Font display optimization

---

## 🔍 Schema Types to Add

### BreadcrumbList Schema
Add to all pages for better navigation in search results:
```typescript
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://nekrolog-lodz.com"
    },
    // ... more items
  ]
}
```

### HowTo Schema
For guide pages like "Co Zrobić Po Śmierci":
```typescript
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Co Zrobić Po Śmierci Bliskiej Osoby",
  "step": [...]
}
```

---

## 📱 Mobile Optimization Checklist

✅ Responsive design
✅ Click-to-call buttons
- [ ] Verify touch target sizes (48x48px minimum)
- [ ] Test on real devices
- [ ] Check mobile page speed

---

## 🔗 Link Building Opportunities

### Local Citations (High Priority)
Submit NAP to:
1. **Panorama Firm** (panoramafirm.pl)
2. **Zumi.pl**
3. **Pkt.pl**
4. **Gdziefirma.pl**
5. **Cylex-polska.pl**

### Partnership Links
Reach out to:
- Local churches/parishes
- Cemetery administrations
- Senior care facilities
- Local community organizations

---

## 📈 Expected SEO Impact

Based on improvements made:
- **Rich Snippets**: FAQ schema should generate FAQ rich results in Google
- **CTR Improvement**: Enhanced OG/Twitter cards → better social sharing
- **Local Visibility**: Enhanced schema → better local pack rankings
- **Crawlability**: Improved robots directives → better indexing

**Timeline**: Expect to see initial results in 2-4 weeks after Google re-crawls.

---

## ✅ Implementation Checklist

### Immediate (Can Do Now)
- [x] Enhanced homepage schema
- [x] Created FAQ schema component
- [x] Added FAQ to cemeteries page
- [x] Enhanced Open Graph/Twitter cards
- [x] Improved robots meta

### Next 7 Days
- [ ] Add FAQ schema to 10+ guide pages
- [ ] Add resource hints to layout
- [ ] Create image optimization plan
- [ ] Submit to Google Search Console
- [ ] Add to Polish business directories

### Next 30 Days
- [ ] Create 3 missing content pages
- [ ] Create 5 location-specific pages
- [ ] Build 10 local citations
- [ ] Implement lazy loading
- [ ] Monitor and adjust based on Search Console data

---

## 🎓 Resources

**SEO Tools:**
- Senuto.com - Polish SEO tool
- Google Search Console - Free
- PageSpeed Insights - Performance testing

**Documentation:**
- Schema.org documentation
- Google Search Central
- Next.js Image Optimization docs

---

*Last Updated: 2026-02-06*
*Implementation Status: Phase 1 Complete (Schema + Meta)*
