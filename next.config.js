/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
    // Exclude blog directory from build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].map(ext => {
    return ext;
  }),
  async redirects() {
    return [
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
