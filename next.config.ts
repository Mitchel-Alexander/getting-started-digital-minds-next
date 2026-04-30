import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/getting-started-digital-minds-next",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
