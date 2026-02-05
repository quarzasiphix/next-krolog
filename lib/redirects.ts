// Legacy WordPress to Next.js redirects
export interface RedirectRule {
  source: string
  destination: string
  permanent: boolean
}

// Common legacy WordPress URL patterns
export const LEGACY_REDIRECTS: RedirectRule[] = [
  // Old asortyment URLs without -lodz suffix
  {
    source: '/asortyment/trumny',
    destination: '/asortyment/trumny-lodz',
    permanent: true,
  },
  {
    source: '/asortyment/trumny/',
    destination: '/asortyment/trumny-lodz',
    permanent: true,
  },
  {
    source: '/asortyment/urny',
    destination: '/asortyment/urny-lodz',
    permanent: true,
  },
  {
    source: '/asortyment/urny/',
    destination: '/asortyment/urny-lodz',
    permanent: true,
  },
  {
    source: '/asortyment/wiazanki',
    destination: '/asortyment/wiazanki-lodz',
    permanent: true,
  },
  {
    source: '/asortyment/wiazanki/',
    destination: '/asortyment/wiazanki-lodz',
    permanent: true,
  },
  {
    source: '/asortyment/wience',
    destination: '/asortyment/wience-lodz',
    permanent: true,
  },
  {
    source: '/asortyment/wience/',
    destination: '/asortyment/wience-lodz',
    permanent: true,
  },
  {
    source: '/asortyment/odziez',
    destination: '/asortyment/odziez-lodz',
    permanent: true,
  },
  {
    source: '/asortyment/odziez/',
    destination: '/asortyment/odziez-lodz',
    permanent: true,
  },
  
  // Old service URLs without -lodz suffix
  {
    source: '/uslugi-pogrzebowe',
    destination: '/uslugi-pogrzebowe-lodz',
    permanent: true,
  },
  {
    source: '/uslugi-pogrzebowe/',
    destination: '/uslugi-pogrzebowe-lodz',
    permanent: true,
  },
  
  // Legacy WordPress feed and tag URLs
  {
    source: '/feed/',
    destination: '/poradnik',
    permanent: true,
  },
  {
    source: '/feed',
    destination: '/poradnik',
    permanent: true,
  },
  {
    source: '/tag/:slug',
    destination: '/poradnik',
    permanent: true,
  },
  {
    source: '/category/:slug',
    destination: '/poradnik',
    permanent: true,
  },
  
  // Trailing slash normalization
  {
    source: '/:path*//',
    destination: '/:path*',
    permanent: true,
  },
  
  // HTTP to HTTPS
  {
    source: '/:path((?!.*\\.well-known.*).*)',
    destination: 'https://nekrolog-lodz.com/:path*',
    permanent: true,
  },
  
  // WWW to non-WWW
  {
    source: 'https://www.ekrolog-lodz.com/:path*',
    destination: 'https://nekrolog-lodz.com/:path*',
    permanent: true,
  },
]

// Function to check if URL should be redirected
export function shouldRedirect(url: string): RedirectRule | null {
  const normalizedUrl = url.replace(/\/+$/, '') // Remove trailing slashes for comparison
  
  for (const redirect of LEGACY_REDIRECTS) {
    // Handle dynamic segments
    const sourcePattern = redirect.source.replace(/:[^\/]+/, '[^/]+')
    const regex = new RegExp(`^${sourcePattern}$`)
    
    if (regex.test(normalizedUrl)) {
      return redirect
    }
  }
  
  return null
}
