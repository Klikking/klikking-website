import type { NextConfig } from "next";
import { KLIKKING_AI_APP_URL } from "./lib/pricing";

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
      // The KlikkingAI blog stays on the app itself for now — this just
      // gives it a memorable klikking.hu URL. Not "permanent" since the
      // target is still the default *.vercel.app domain (will move once
      // that product gets its own custom domain).
      { source: "/blog", destination: `${KLIKKING_AI_APP_URL}/blog`, permanent: false },
      { source: "/blog/:slug", destination: `${KLIKKING_AI_APP_URL}/blog/:slug`, permanent: false },
    ];
  },
};

export default nextConfig;
