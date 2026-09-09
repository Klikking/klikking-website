import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Klikking",
    short_name: "Klikking",
    description: "Webfejlesztés, SEO és marketing egy kézben.",
    start_url: "/hu",
    display: "browser",
    background_color: "#FAFAF8",
    theme_color: "#15151B",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
