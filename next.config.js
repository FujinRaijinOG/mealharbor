// filepath: c:\Users\Lenovo\mealharbor\next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
