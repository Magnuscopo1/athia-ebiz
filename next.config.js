/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static hosting providers like Hostinger
  },
};

module.exports = nextConfig;