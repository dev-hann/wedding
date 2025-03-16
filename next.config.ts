import type { NextConfig } from "next";
const isProduction = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: isProduction ? "/wedding/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  trailingSlash: true,
};
export default nextConfig;
