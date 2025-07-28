// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: true, // Recommended for S3 hosting
};

module.exports = nextConfig;
