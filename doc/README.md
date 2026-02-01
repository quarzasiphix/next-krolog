# Nekrolog Łódź - Next.js Static Site

This is a fully static Next.js site optimized for Cloudflare Pages deployment.

## 🚀 Key Features

- **Pure Static Export** - No Node.js runtime required
- **Build-time Blog Generation** - All blog posts are fetched from Supabase during build
- **Automatic Sitemap** - Generated at build time with all blog posts
- **SEO Optimized** - Full metadata support for all pages
- **Cloudflare Pages Ready** - Zero configuration deployment

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```bash
npm run build
```

This will:
1. Connect to Supabase and fetch all published blog posts
2. Generate static HTML pages for each blog post
3. Create a sitemap with all routes including blog posts
4. Output everything to the `out/` directory

## 📤 Deploying to Cloudflare Pages

### Option 1: Automatic Git Deployment (Recommended)

1. Push your code to GitHub/GitLab
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Environment variables**:
     - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key

6. Click "Save and Deploy"

### Option 2: Manual Deployment

```bash
# Build the site
npm run build

# Install Wrangler CLI
npm install -g wrangler

# Deploy to Cloudflare Pages
wrangler pages deploy out
```

## 🔄 Updating Blog Posts

Since this is a static site, you need to trigger a new build whenever you:
- Add new blog posts
- Update existing blog posts
- Change any content

### Automatic Rebuilds

Set up a webhook in Cloudflare Pages:
1. Go to your project settings
2. Find "Build hooks"
3. Create a new hook
4. Trigger this webhook whenever you update content in Supabase

You can use Supabase Database Webhooks or a cron job to trigger rebuilds.

## 📁 Project Structure

```
nekrolog-nextjs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── blog/
│   │   ├── page.tsx             # Blog listing (SSG)
│   │   └── [slug]/
│   │       └── page.tsx         # Dynamic blog posts (SSG)
│   ├── uslugi/                  # Services pages
│   ├── asortyment/              # Assortment pages
│   ├── sitemap.ts               # Dynamic sitemap generation
│   └── robots.ts                # Robots.txt
├── components/                   # React components
├── lib/                         # Utilities
│   └── supabase/
│       ├── client.ts            # Client-side Supabase
│       ├── server.ts            # Build-time Supabase
│       └── types.ts             # Database types
├── public/                      # Static assets
└── out/                         # Build output (gitignored)
```

## 🔑 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎯 How Blog SSG Works

1. **Build Time**: When you run `npm run build`, Next.js:
   - Calls `generateStaticParams()` in `app/blog/[slug]/page.tsx`
   - Fetches ALL published blog slugs from Supabase
   - Generates a static HTML page for each blog post
   - Creates sitemap with all blog URLs

2. **Runtime**: When users visit:
   - They get pre-rendered HTML (instant load)
   - No database queries needed
   - Perfect for Cloudflare Pages CDN

## 📊 Performance

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 95+
- **CDN**: Cloudflare's global network

## 🔧 Troubleshooting

### Blog posts not showing after build

Make sure:
1. Environment variables are set correctly
2. Blog posts are marked as `published: true` in Supabase
3. Build logs show blog posts being generated

### Images not loading

- All images use `unoptimized: true` for static export
- External images (Unsplash) work automatically
- Local images must be in `/public` directory

## 📝 License

Private project for Nekrolog Łódź - Jolanta Kostowska
