import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true, qualities: [85] },
};

export default nextConfig;
