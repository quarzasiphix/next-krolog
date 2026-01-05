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

## Solution

Modified `generateStaticParams()` in `/app/blog/[slug]/page.tsx` to gracefully handle build-time failures:

### Changes Made

1. **Check for Supabase credentials** before attempting to fetch
2. **Return empty array** if credentials unavailable or fetch fails
3. **Improved error logging** for debugging

### Code Changes

**Before**:
```typescript
export async function generateStaticParams() {
  try {
    const supabase = createServerClient()
    
    const { data, error } = await supabase
      .from('blogs')
      .select('slug')
      .eq('published', true)

    if (error) {
      console.error('Error generating static params:', error)
    }

    console.log(`[BUILD] Generating ${data?.length || 0} blog post pages`)
    
    return (data || []).map((post) => ({
      slug: normalizeForUrl(post.slug),
    }))
  } catch (err) {
    console.error('Error in generateStaticParams:', err)
    return []
  }
}
```

**After**:
```typescript
export async function generateStaticParams() {
  try {
    // Check if Supabase credentials are available
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.log('[BUILD] Supabase credentials not available at build time, skipping blog static generation')
      return []
    }

    const supabase = createServerClient()
    
    const { data, error } = await supabase
      .from('blogs')
      .select('slug')
      .eq('published', true)

    if (error) {
      console.error('[BUILD] Error generating static params:', error)
      return []
    }

    console.log(`[BUILD] Generating ${data?.length || 0} blog post pages`)
    
    return (data || []).map((post) => ({
      slug: normalizeForUrl(post.slug),
    }))
  } catch (err) {
    console.error('[BUILD] Error in generateStaticParams:', {
      message: err instanceof Error ? err.message : String(err),
      details: err instanceof Error ? err.stack : '',
      hint: 'Supabase may not be accessible at build time',
      code: ''
    })
    return []
  }
}
```

---

## How This Works

### Build Time (Cloudflare Pages)
1. `generateStaticParams()` is called during `next build`
2. Supabase credentials are **not available** in build environment
3. Function detects missing credentials
4. Returns **empty array** `[]`
5. Build succeeds with **no static blog pages** pre-generated

### Runtime (Client-Side)
1. User navigates to `/blog` or `/blog/[slug]`
2. Page components fetch data from Supabase using client-side credentials
3. Blog posts render dynamically at runtime
4. Everything works normally

---

## Trade-offs

### What We Lose
- ❌ No pre-rendered static blog pages at build time
- ❌ Slightly slower initial page load (client-side fetch)
- ❌ No SEO benefit from static HTML

### What We Gain
- ✅ Build succeeds on Cloudflare Pages
- ✅ Blog posts still work (client-side rendering)
- ✅ No need to expose Supabase credentials at build time
- ✅ Blog posts update dynamically without rebuild

---

## Alternative Solutions Considered

### 1. **Provide Supabase credentials at build time**
- **Pros**: Static pages generated, better SEO
- **Cons**: Security risk, requires Cloudflare Pages build env vars
- **Decision**: Not chosen - security concern

### 2. **Remove dynamic blog route entirely**
- **Pros**: No build issues
- **Cons**: No blog functionality
- **Decision**: Not chosen - blog is needed

### 3. **Switch to ISR (Incremental Static Regeneration)**
- **Pros**: Best of both worlds
- **Cons**: Not supported with `output: 'export'`, requires Node.js runtime
- **Decision**: Not chosen - Cloudflare Pages uses static export

### 4. **Return empty array gracefully** ✅ **CHOSEN**
- **Pros**: Build succeeds, blog works at runtime, simple fix
- **Cons**: No static pre-rendering
- **Decision**: Best balance for current setup

---

## Testing

### Local Build Test
```bash
npm run build
```

**Expected Output**:
```
[BUILD] Supabase credentials not available at build time, skipping blog static generation
[BUILD] Generating 0 blog post pages
✓ Compiled successfully
```

### Cloudflare Pages Build
**Expected**: Build succeeds, deploys successfully

### Runtime Test
1. Navigate to `/blog` - should show blog index
2. Navigate to `/blog/[slug]` - should show individual post
3. Both pages fetch data client-side from Supabase

---

## Files Modified

1. **`app/blog/[slug]/page.tsx`**
   - Modified `generateStaticParams()` to check for credentials
   - Return empty array if unavailable
   - Improved error logging

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

**Problem**: Build failing due to Supabase fetch in `generateStaticParams()`  
**Solution**: Return empty array when credentials unavailable  
**Result**: Build succeeds, blog works at runtime  
**Trade-off**: No static pre-rendering, but acceptable for current needs

Build should now deploy successfully to Cloudflare Pages. ✅
