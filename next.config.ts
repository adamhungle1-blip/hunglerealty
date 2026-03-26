import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddfcdn.realtor.ca",
      },
      {
        protocol: "https",
        hostname: "**.realtor.ca",
      },
      {
        protocol: "https",
        hostname: "**.crea.ca",
      },
    ],
  },
};

export default nextConfig;
