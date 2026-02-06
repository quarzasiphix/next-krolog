/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  generateEtags: true, // Enable ETags for better caching
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].map(ext => {
    return ext;
  }),
  // NOTE: redirects() does NOT work with output:'export'.
  // All redirects are handled via public/_redirects (Cloudflare Pages).
}

module.exports = nextConfig
