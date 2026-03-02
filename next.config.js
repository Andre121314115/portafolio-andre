/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // genera HTML estático para GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
}

module.exports = nextConfig
