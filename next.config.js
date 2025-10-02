/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Cloudflare Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Optional: Add trailing slashes for better static hosting compatibility
  trailingSlash: true,
}

module.exports = nextConfig
