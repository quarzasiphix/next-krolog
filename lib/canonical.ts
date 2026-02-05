import { Metadata } from 'next'

// Canonical URL generation utility
export function generateCanonicalUrl(path: string = ''): string {
  const baseUrl = 'https://nekrolog-lodz.com'
  
  // Normalize path - remove trailing slashes for consistency
  const normalizedPath = path.replace(/\/+$/, '')
  
  // Ensure path starts with /
  const fullPath = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`
  
  return `${baseUrl}${fullPath}`
}

// Generate metadata with canonical URL
export function generateCanonicalMetadata(path: string = ''): Metadata {
  return {
    alternates: {
      canonical: generateCanonicalUrl(path)
    }
  }
}

// Trailing slash policy enforcement
export function normalizeUrl(url: string): string {
  // Remove trailing slashes for consistency with sitemap
  return url.replace(/\/+$/, '')
}

// URL validation for internal links
export function validateInternalLink(url: string): string {
  // Ensure internal links match canonical format
  if (url.startsWith('/')) {
    return normalizeUrl(url)
  }
  return url
}
