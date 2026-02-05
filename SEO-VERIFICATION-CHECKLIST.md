# SEO Migration Verification Checklist

## 🚀 Pre-Deployment Checklist

### ✅ Sitemap Implementation
- [x] Registry-based sitemap generation
- [x] Stable lastModified timestamps (no `new Date()`)
- [x] All hub pages included (`/poradnik`, `/uslugi`, `/cmentarze-lodz`)
- [x] Consistent priority/changefreq values
- [x] Production domain validation

### ✅ Redirect Implementation
- [x] Legacy asortyment URLs → new -lodz URLs
- [x] Legacy service URLs → new -lodz URLs
- [x] WordPress feed/tag/category → poradnik hub
- [x] Trailing slash normalization
- [x] Legacy WP endpoints blocked
- [x] HTTP to HTTPS enforcement
- [x] WWW to non-WWW normalization

### ✅ Canonical URL Consistency
- [x] Canonical URL generation utility
- [x] Trailing slash policy enforcement
- [x] Internal link validation
- [x] Metadata integration ready

### ✅ Structured Data Implementation
- [x] FuneralHome schema component
- [x] Service schema component
- [x] Article schema component
- [x] Breadcrumb schema component
- [x] Industry-specific fields (geo, hours, contact)

### ✅ Internal Linking Strategy
- [x] RelatedContent component for poradnik posts
- [x] Contact CTA integration
- [x] Related services linking
- [x] Topic clustering support

### ✅ Crawl Control
- [x] Comprehensive robots.txt
- [x] Thin pages disallowed
- [x] Legacy endpoints blocked
- [x] Sitemap reference correct

## 🔍 Post-Deployment Verification

### 1. Sitemap Testing
```bash
# Test sitemap accessibility
curl -I https://nekrolog-lodz.com/sitemap.xml

# Expected: 200 OK, Content-Type: application/xml
```

### 2. Redirect Testing
```bash
# Test legacy redirects
curl -I -L https://nekrolog-lodz.com/asortyment/trumny
# Expected: 301 → /asortyment/trumny-lodz → 200

curl -I -L https://nekrolog-lodz.com/feed/
# Expected: 301 → /poradnik → 200
```

### 3. Canonical URL Testing
```javascript
// Test in browser console
document.querySelector('link[rel="canonical"]')
// Expected: href matches sitemap URL exactly
```

### 4. Structured Data Testing
```bash
# Test with Google Rich Results
# 1. Go to: https://search.google.com/test/rich-results
# 2. Enter: https://nekrolog-lodz.com
# 3. Verify: LocalBusiness, Service, Article schemas detected
```

### 5. Robots.txt Testing
```bash
# Test robots.txt accessibility
curl -I https://nekrolog-lodz.com/robots.txt

# Expected: 200 OK, contains sitemap reference
```

## 📊 Google Search Console Monitoring

### Week 1-2: Initial Indexing
- [ ] Submit new sitemap to GSC
- [ ] Monitor "Pages" report for indexing status
- [ ] Check "Coverage" report for errors
- [ ] Verify redirect chains are resolved

### Week 2-4: Authority Transfer
- [ ] Monitor "Links" report for redirect authority flow
- [ ] Check "Performance" for ranking changes
- [ ] Verify "duplicate without user-selected canonical" decreases
- [ ] Confirm legacy URLs show as "Redirected"

### Month 2-3: Clean Index
- [ ] Verify all legacy URLs are redirected
- [ ] Check for any remaining duplicate content
- [ ] Monitor crawl budget utilization
- [ ] Validate structured data rich snippets

## 🚨 Critical Issues to Monitor

### High Priority
- **Mixed Domain Indexing**: Check for staging URLs in index
- **Redirect Chains**: Ensure no 301→301 chains
- **Canonical Mismatches**: Verify canonical = sitemap = internal links
- **404 Errors**: Monitor for broken redirects

### Medium Priority
- **Crawl Budget Waste**: Check for unnecessary crawling
- **Thin Content**: Ensure noindex pages are excluded
- **Schema Errors**: Monitor structured data validation

### Low Priority
- **Image Indexing**: Verify images are properly indexed
- **Mobile Usability**: Check mobile rendering
- **Core Web Vitals**: Monitor performance metrics

## 📋 Testing Commands

### Sitemap Validation
```bash
# XML validation
xmllint --noout https://nekrolog-lodz.com/sitemap.xml

# Sitemap size check (must be < 50MB)
curl https://nekrolog-lodz.com/sitemap.xml | wc -c
```

### Redirect Chain Detection
```bash
# Check for redirect chains
curl -v -L https://nekrolog-lodz.com/asortyment/trumny 2>&1 | grep -E "(HTTP|Location)"
```

### Canonical Consistency
```bash
# Extract canonical URLs from sitemap
grep -o '<loc>[^<]*' https://nekrolog-lodz.com/sitemap.xml | sed 's/<loc>//g'

# Compare with page canonicals
# (Manual verification needed)
```

## ✅ Success Metrics

### Immediate (1-2 weeks)
- [ ] All legacy URLs return 301 redirects
- [ ] Sitemap submitted and accepted in GSC
- [ ] No "duplicate without user-selected canonical" errors
- [ ] Structured data detected in Rich Results test

### Medium-term (1-3 months)
- [ ] Legacy URL authority transferred to new URLs
- [ ] Improved crawl budget utilization
- [ ] Rich snippets appearing in SERPs
- [ ] Consistent ranking patterns established

### Long-term (3-6 months)
- [ ] Clean index with no legacy residue
- [ ] Stable rankings for new URL structure
- [ ] Improved organic traffic patterns
- [ ] Enhanced SERP presentation with rich snippets

## 🔧 Troubleshooting Guide

### Common Issues & Solutions

#### Issue: Legacy URLs still indexed
**Solution**: 
1. Verify redirects are working correctly
2. Submit redirect mapping to GSC
3. Request reindexing of affected URLs

#### Issue: Canonical mismatches
**Solution**:
1. Check canonical URL generation logic
2. Verify trailing slash consistency
3. Ensure sitemap URLs match canonicals

#### Issue: Structured data not detected
**Solution**:
1. Validate JSON-LD syntax
2. Check for required properties
3. Test with Rich Results tool

#### Issue: Crawl budget waste
**Solution**:
1. Review robots.txt disallow rules
2. Check for unnecessary redirects
3. Optimize lastModified timestamps

---

**Status**: ✅ Implementation complete  
**Next**: Deploy and monitor using verification checklist  
**Timeline**: Expect improvements within 2-4 weeks
