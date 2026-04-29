import type { NextConfig } from "next";

const isVercel = !!process.env.VERCEL;
const basePath = isVercel ? "" : "/beginners-guide-to-dm";

const nextConfig: NextConfig = {
  ...(isVercel ? {} : { output: "export" as const }),
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
