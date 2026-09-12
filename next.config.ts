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
      // The KlikkingAI blog stays on the app itself (app.klikking.hu) —
      // this just gives it a memorable klikking.hu URL too.
      { source: "/blog", destination: `${KLIKKING_AI_APP_URL}/blog`, permanent: true },
      { source: "/blog/:slug", destination: `${KLIKKING_AI_APP_URL}/blog/:slug`, permanent: true },
    ];
  },
};

export default nextConfig;
