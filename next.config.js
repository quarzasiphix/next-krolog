/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].map(ext => {
    return ext;
  }),
  async redirects() {
    return [
      // Legacy asortyment URLs without -lodz suffix
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
      
      // Legacy service URLs without -lodz suffix
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
      
      // Block legacy WordPress endpoints
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-json/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/xmlrpc.php',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
