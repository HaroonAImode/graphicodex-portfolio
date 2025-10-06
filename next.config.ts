import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // <-- disables image optimization for static export
  },
};

export default nextConfig;
