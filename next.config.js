/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out to enable server-side features like NextAuth.js API routes
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
