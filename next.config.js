/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].map(ext => {
    return ext;
  }),
  // NOTE: redirects() does NOT work with output:'export'.
  // All redirects are handled via public/_redirects (Cloudflare Pages).
}

module.exports = nextConfig
