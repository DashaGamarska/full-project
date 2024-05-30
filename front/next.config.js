/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-iev1-1.cdninstagram.com',
        // port: '',
        // pathname: '',
      },

      {
        protocol: 'https',
        hostname: 'candle-store-backend-06135d73f38e.herokuapp.com',
      },
    ],
  },
};

module.exports = nextConfig;
