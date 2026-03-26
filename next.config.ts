import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.realtor.ca",
      },
      {
        protocol: "https",
        hostname: "**.crea.ca",
      },
      {
        protocol: "http",
        hostname: "**.realtor.ca",
      },
    ],
  },
};

export default nextConfig;
