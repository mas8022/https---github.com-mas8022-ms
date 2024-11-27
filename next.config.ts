import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disables eslint during production builds
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
