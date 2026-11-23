import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS in `out/` for Cloudflare Pages. No server runtime.
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
