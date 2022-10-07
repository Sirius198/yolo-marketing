/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    // domains: [
    //   'res.cloudinary.com',
    //   'images.unsplash.com',
    //   'cdn.sanity.io',
    // ],
  },
};

module.exports = nextConfig;
