import type { NextConfig } from "next";
const isProduction = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: isProduction ? "/wedding" : "",
  assetPrefix: isProduction ? "/wedding/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};
export default nextConfig;
