import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // URLs wie /blog/ und /blog/warum-nextjs/ (gleich wie beim Gatsby-Blog)
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
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
