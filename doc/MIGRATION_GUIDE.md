# Migration Guide: Vite React → Next.js (Cloudflare Pages)

## ✅ What's Been Done

### 1. Project Setup
- ✅ Created Next.js project structure
- ✅ Configured for **pure static export** (`output: 'export'`)
- ✅ Set up Tailwind CSS with existing config
- ✅ Configured TypeScript
- ✅ Set up environment variables

### 2. Core Configuration
- ✅ `next.config.js` - Static export for Cloudflare Pages
- ✅ `tailwind.config.ts` - Copied from Vite project
- ✅ `tsconfig.json` - Next.js compatible
- ✅ `app/globals.css` - All styles migrated
- ✅ `components.json` - Shadcn config updated

### 3. Blog System (CRITICAL FOR SSG)
- ✅ `app/blog/page.tsx` - Blog listing with server-side data fetching
- ✅ `app/blog/[slug]/page.tsx` - **Dynamic blog posts with `generateStaticParams()`**
  - **This fetches ALL blog posts at build time**
  - **Generates static HTML for each post**
  - **Perfect for Cloudflare Pages**
- ✅ `app/sitemap.ts` - Auto-generates sitemap with blog posts at build time
- ✅ `app/robots.ts` - SEO optimization

### 4. Supabase Integration
- ✅ `lib/supabase/client.ts` - Client-side Supabase
- ✅ `lib/supabase/server.ts` - **Build-time Supabase for SSG**
- ✅ `lib/supabase/types.ts` - Database types
- ✅ Environment variables configured

### 5. Utilities & Assets
- ✅ `lib/utils.ts` - All utility functions
- ✅ `assets/images.ts` - Image constants
- ✅ `app/layout.tsx` - Root layout with SEO
- ✅ `app/providers.tsx` - React Query, Theme, Toaster

## 🚧 What Needs To Be Done

### Step 1: Copy Components (5 minutes)

Run these PowerShell commands to copy all components:

```powershell
# Navigate to the new project
cd c:\Users\Administrator\Documents\projects\nekrolog-nextjs

# Create component directories
New-Item -ItemType Directory -Force -Path "components\ui"
New-Item -ItemType Directory -Force -Path "components\icons"

# Copy all UI components
Copy-Item "c:\Users\Administrator\Documents\projects\nekrolog\src\components\ui\*" "components\ui\" -Recurse -Force

# Copy custom components
$components = @(
    "About.tsx",
    "BlogPreview.tsx",
    "Breadcrumb.tsx",
    "Contact.tsx",
    "Footer.tsx",
    "Hero.tsx",
    "HeroContent.tsx",
    "Map.tsx",
    "Navbar.tsx",
    "Reviews.tsx",
    "ServiceLayout.tsx",
    "Services.tsx",
    "ServicesCta.tsx",
    "ServicesTable.tsx"
)

foreach ($comp in $components) {
    Copy-Item "c:\Users\Administrator\Documents\projects\nekrolog\src\components\$comp" "components\$comp" -Force
}

# Copy icons
Copy-Item "c:\Users\Administrator\Documents\projects\nekrolog\src\components\icons\*" "components\icons\" -Recurse -Force

# Copy public assets
Copy-Item "c:\Users\Administrator\Documents\projects\nekrolog\public\*" "public\" -Recurse -Force
```

### Step 2: Update Components for Next.js (10 minutes)

You need to update these imports in components:

**Find and Replace:**
1. `from 'react-router-dom'` → `from 'next/navigation'` or `from 'next/link'`
2. `import { Link }` from react-router → `import Link` from next/link
3. `import { useNavigate }` → `import { useRouter }` from 'next/navigation'
4. `navigate('/path')` → `router.push('/path')`
5. `<Link to="/path">` → `<Link href="/path">`

**Add 'use client' directive to:**
- `components/Navbar.tsx` (uses useState, useEffect)
- `components/Contact.tsx` (uses forms)
- `components/BlogPreview.tsx` (uses React Query)
- Any component with interactivity

### Step 3: Create All Page Routes (30 minutes)

Create these page files:

```
app/
├── page.tsx                                    # Homepage
├── uslugi-pogrzebowe-lodz/page.tsx
├── uslugi/
│   ├── organizacja-pogrzebow-lodz/page.tsx
│   ├── oprawa-muzyczna-lodz/page.tsx
│   ├── ekshumacja-lodz/page.tsx
│   ├── transport-zmarlych-lodz/page.tsx
│   └── krematorium-lodz/page.tsx
├── asortyment/
│   ├── page.tsx
│   ├── odziez-lodz/page.tsx
│   ├── trumny-lodz/page.tsx
│   ├── urny-lodz/page.tsx
│   ├── wiazanki-lodz/page.tsx
│   └── wience-lodz/page.tsx
├── o-nas/page.tsx
├── kontakt/page.tsx
├── rodo/page.tsx
├── polityka-prywatnosci/page.tsx
├── regulamin/page.tsx
└── not-found.tsx
```

**Template for each page:**

```typescript
import { Metadata } from 'next'
import YourComponent from '@/components/YourComponent'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
}

export default function PageName() {
  return <YourComponent />
}
```

### Step 4: Install Dependencies & Build (5 minutes)

```bash
cd c:\Users\Administrator\Documents\projects\nekrolog-nextjs
npm install
npm run build
```

**Expected output:**
```
○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses getStaticProps)

Route (app)                              Size
┌ ○ /                                   XX kB
├ ○ /blog                               XX kB
├ ● /blog/[slug]                        XX kB
│   ├ /blog/post-1
│   ├ /blog/post-2
│   └ [+X more paths]
└ ○ /uslugi/...                         XX kB
```

The `●` symbol means it's using SSG with `generateStaticParams()`.

### Step 5: Test Locally (5 minutes)

```bash
# Start dev server
npm run dev

# Test these URLs:
http://localhost:3000/
http://localhost:3000/blog
http://localhost:3000/blog/your-blog-slug
http://localhost:3000/uslugi/krematorium-lodz
```

### Step 6: Deploy to Cloudflare Pages (5 minutes)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Migrate to Next.js for Cloudflare Pages"
git remote add origin your-repo-url
git push -u origin main
```

2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
3. Click "Create a project"
4. Connect your GitHub repo
5. Configure:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Environment variables**:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://lrvuiposqqamcuqgudmr.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
     ```
6. Click "Save and Deploy"

## 🎯 How It Works (Cloudflare Pages + SSG)

### Build Time (on Cloudflare)
1. Cloudflare runs `npm run build`
2. Next.js calls `generateStaticParams()` in blog pages
3. Connects to Supabase and fetches ALL published blog posts
4. Generates static HTML for each blog post
5. Creates sitemap with all URLs
6. Outputs everything to `out/` directory
7. Cloudflare deploys `out/` to CDN

### Runtime (user visits site)
- User gets pre-rendered HTML instantly
- No Node.js server needed
- No database queries
- Served from Cloudflare's global CDN
- Lightning fast! ⚡

### Updating Content
When you add/update blog posts:
1. Update content in Supabase
2. Trigger a new build in Cloudflare Pages
3. New static site is generated with updated content
4. Deployed automatically

**Set up auto-rebuild:**
- Use Cloudflare Pages Build Hooks
- Trigger from Supabase webhook when blog posts change
- Or set up a daily cron job to rebuild

## 📊 Key Differences from Vite

| Feature | Vite React | Next.js Static |
|---------|-----------|----------------|
| Routing | React Router (client-side) | File-based (pre-rendered) |
| Blog Posts | Fetched at runtime | Generated at build time |
| SEO | Manual meta tags | Built-in Metadata API |
| Sitemap | Manual generation | Auto-generated with data |
| Deployment | SPA (single HTML) | Multiple HTML files (SSG) |
| Performance | Good | Excellent (pre-rendered) |
| Cloudflare | Works | Optimized for it |

## 🔥 Benefits of This Migration

1. **True SSG** - Blog posts are static HTML, not fetched at runtime
2. **Better SEO** - Each blog post is a separate HTML file with metadata
3. **Faster** - No JavaScript needed to show content
4. **Cheaper** - No server costs, just CDN
5. **Cloudflare Optimized** - Perfect for Cloudflare Pages
6. **Build-time Data** - Supabase queries happen during build, not runtime

## 🐛 Troubleshooting

### "Error: No blog posts generated"
- Check environment variables are set
- Verify Supabase connection
- Check blog posts are `published: true`

### "Module not found: @/components/..."
- Run the component copy commands above
- Check tsconfig.json paths are correct

### "Image optimization error"
- Already fixed with `images: { unoptimized: true }`

### Build fails on Cloudflare
- Check build logs
- Verify environment variables are set in Cloudflare dashboard
- Ensure Supabase is accessible from Cloudflare's build servers

## 📞 Next Steps

1. Copy components (use PowerShell commands above)
2. Create all page routes
3. Test build locally
4. Deploy to Cloudflare Pages
5. Set up auto-rebuild webhook

Need help? Check the build logs or README.md for more details!
