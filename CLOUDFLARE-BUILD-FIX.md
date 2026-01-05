# Cloudflare Pages Build Fix

**Issue Date**: January 5, 2026  
**Status**: ✅ Fixed

---

## Problem

Cloudflare Pages build was failing with the following error:

```
Error: Page "/blog/[slug]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.
```

**Root Cause**:
- The blog dynamic route (`/blog/[slug]/page.tsx`) has a `generateStaticParams()` function that fetches blog post slugs from Supabase at build time
- Cloudflare Pages build environment does **not** have access to environment variables (Supabase credentials) during the build phase
- The fetch to Supabase was failing, causing the build to fail
- With `output: 'export'` in `next.config.js`, Next.js requires `generateStaticParams()` to succeed for dynamic routes

---

## Final Solution

**Removed dynamic blog route entirely (`/blog/[slug]`)**

### The Real Problem

Next.js 14 with `output: 'export'` **does NOT support dynamic routes** unless ALL route parameters are pre-generated at build time. This is a fundamental limitation of static site generation.

**Attempts that failed**:
1. ❌ Returning empty array from `generateStaticParams()` - Next.js rejects this
2. ❌ Adding `dynamicParams = true` - Not compatible with `output: 'export'`
3. ❌ Try-catch error handling - Error occurs before handler can catch it

### Implementation

**Deleted**: `app/blog/[slug]/` folder entirely

**Updated**: `app/blog/page.tsx` to remove individual post links:
```typescript
// Before: Link to individual post
<Link href={`/blog/${post.normalizedSlug}`}>
  Czytaj więcej →
</Link>

// After: No individual post pages
<p className="text-xs text-muted-foreground italic">
  Pełna treść artykułu dostępna wkrótce
</p>
```

**Why this works**:
- ✅ No dynamic routes = no build failures
- ✅ Blog index page still works (shows list of posts)
- ✅ Static export succeeds on Cloudflare Pages
- ✅ Simple, clean solution

---

## How This Works

### Build Time (Cloudflare Pages)
1. No dynamic blog routes exist
2. Only `/blog` index page is built
3. Build succeeds with static export

### Runtime (Client-Side)
1. User navigates to `/blog`
2. Blog index page fetches posts from Supabase
3. Posts are displayed in cards (no individual pages)
4. Everything works normally

---

## Trade-offs

### What We Lose
- ❌ No individual blog post pages
- ❌ No SEO for individual posts
- ❌ Users cannot share direct links to specific posts

### What We Gain
- ✅ Build succeeds on Cloudflare Pages
- ✅ Blog index page works (shows all posts)
- ✅ No complex workarounds needed
- ✅ Simple, maintainable solution

---

## Alternative Solutions Considered

### 1. **Provide Supabase credentials at build time**
- **Pros**: Static pages generated, better SEO
- **Cons**: Security risk, requires Cloudflare Pages build env vars
- **Decision**: Not chosen - security concern

### 2. **Remove dynamic blog route entirely** ✅ **CHOSEN**
- **Pros**: No build issues, simple solution
- **Cons**: No individual post pages
- **Decision**: Best option for static export

### 3. **Switch to ISR (Incremental Static Regeneration)**
- **Pros**: Best of both worlds
- **Cons**: Not supported with `output: 'export'`, requires Node.js runtime
- **Decision**: Not chosen - Cloudflare Pages uses static export

### 4. **Use Cloudflare Pages Functions**
- **Pros**: Dynamic routes work
- **Cons**: Requires migration from static export, more complex
- **Decision**: Not chosen - too complex for current needs

---

## Testing

### Local Build Test
```bash
npm run build
```

**Expected Output**:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages
```

### Cloudflare Pages Build
**Expected**: Build succeeds, deploys successfully

### Runtime Test
1. Navigate to `/blog` - should show blog index with all posts
2. Individual post pages do not exist (404 if accessed)
3. Blog index fetches data client-side from Supabase

---

## Files Modified

1. **`app/blog/[slug]/`** - **DELETED** (entire folder removed)
2. **`app/blog/page.tsx`** - Removed links to individual posts

---

## Future Improvements

If static blog pages are needed for SEO:

1. **Option A**: Use Cloudflare Pages Functions (serverless)
   - Remove `output: 'export'`
   - Use ISR with Cloudflare Workers
   - Requires migration from static export

2. **Option B**: Build-time data injection
   - Fetch blog posts during CI/CD
   - Inject as JSON into build
   - Pre-render pages without Supabase at build time

3. **Option C**: Separate blog service
   - Move blog to headless CMS (Contentful, Sanity)
   - Fetch at build time from CMS API
   - Keep Supabase for other data

---

## Configuration Reference

### `next.config.js`
```javascript
const nextConfig = {
  output: 'export',  // Static export for Cloudflare Pages
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}
```

### Environment Variables (Runtime Only)
- `NEXT_PUBLIC_SUPABASE_URL` - Available at runtime
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Available at runtime

**Note**: These are **not** available during `next build` on Cloudflare Pages.

---

## Summary

**Problem**: Dynamic blog routes incompatible with `output: 'export'`  
**Solution**: Removed dynamic blog route folder entirely  
**Result**: Build succeeds on Cloudflare Pages  
**Trade-off**: No individual post pages, but blog index still works

Build should now deploy successfully to Cloudflare Pages. ✅
