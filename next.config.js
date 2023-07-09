/** @type {import('next').NextConfig} */
const nextConfig = { 
  experimental: {
    appDir: true,
  },
    plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    
  ],}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['velog.velcdn.com'],
  },
};
