/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["huddle01-assets-frontend.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
