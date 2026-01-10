# Cloudflare Pages Deployment Guide

## Problem Fixed

The build was failing with:
```
Error: Page "/blog/[slug]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.
```

This occurred because Next.js static export (`output: 'export'`) doesn't support dynamic routes without pre-generating all possible paths at build time.

## Solution

Switched from static export to **@cloudflare/next-on-pages** adapter, which allows:
- ✅ Dynamic routes (like `/blog/[slug]`)
- ✅ Server-side rendering at the edge
- ✅ Full Next.js features on Cloudflare Pages
- ✅ Runtime database queries with Supabase

## Changes Made

### 1. Updated `next.config.js`
- Removed `output: 'export'`
- Removed `trailingSlash: true`
- Kept `images.unoptimized: true` for Cloudflare compatibility

### 2. Updated `package.json`
- Added `@cloudflare/next-on-pages` to devDependencies
- Changed build script to: `npx @cloudflare/next-on-pages`
- Added preview and deploy scripts

### 3. Added Edge Runtime
- Added `export const runtime = 'edge'` to:
  - `app/page.tsx` (home page)
  - `app/blog/page.tsx` (blog list)
  - `app/blog/[slug]/page.tsx` (blog post)

### 4. Created Configuration Files
- `.node-version` - Specifies Node.js 22.16.0
- `wrangler.toml` - Cloudflare Pages configuration

### 5. Restored Blog Functionality
- Blog post links now work properly
- Dynamic routes render at runtime on Cloudflare's edge

## Deployment Instructions

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Push changes to GitHub:**
   ```bash
   git add .
   git commit -m "Fix Cloudflare Pages build with @cloudflare/next-on-pages"
   git push
   ```

2. **Configure Cloudflare Pages:**
   - Go to Cloudflare Dashboard → Pages
   - Connect your GitHub repository
   - Set build settings:
     - **Build command:** `npx @cloudflare/next-on-pages`
     - **Build output directory:** `.vercel/output/static`
     - **Node version:** 22.16.0

3. **Add Environment Variables:**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Any other required env vars

4. **Deploy:** Cloudflare will automatically build and deploy

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build and Deploy:**
   ```bash
   npm run build
   wrangler pages deploy
   ```

## Local Development

```bash
# Development server
npm run dev

# Build for Cloudflare
npm run build

# Preview locally (requires wrangler)
npm run preview
```

## Important Notes

1. **Edge Runtime:** Pages using Supabase queries must have `export const runtime = 'edge'`
2. **Environment Variables:** Must be set in Cloudflare Pages dashboard
3. **Node Version:** Uses Node.js 22.16.0 (specified in `.node-version`)
4. **Next.js version:** 14.3.0 (compatible with @cloudflare/next-on-pages)
5. **Build Output:** Uses `.vercel/output/static` directory

## Troubleshooting

### Build fails with "Cannot find module"
- Run `npm install` to ensure all dependencies are installed
- Check that `@cloudflare/next-on-pages` is in devDependencies

### Dynamic routes not working
- Ensure `export const runtime = 'edge'` is added to the page
- Check that environment variables are set in Cloudflare dashboard

### Images not loading
- Verify `images.unoptimized: true` is in `next.config.js`
- Check image URLs are absolute or properly configured

## Resources

- [Cloudflare Next.js Guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [@cloudflare/next-on-pages Documentation](https://github.com/cloudflare/next-on-pages)
- [Next.js Edge Runtime](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes)
