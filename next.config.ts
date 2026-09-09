import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Preserve link equity from the old WordPress site's indexed,
    // locale-less URLs by pointing them at their /hu equivalent.
    return [
      { source: "/home", destination: "/hu", permanent: true },
      { source: "/szolgaltatasok", destination: "/hu/szolgaltatasok", permanent: true },
      { source: "/munkaim", destination: "/hu/munkaim", permanent: true },
      { source: "/rolam", destination: "/hu/rolam", permanent: true },
      { source: "/kapcsolat", destination: "/hu/kapcsolat", permanent: true },
    ];
  },
};

export default nextConfig;
