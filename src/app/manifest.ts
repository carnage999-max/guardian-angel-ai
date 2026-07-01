import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Guardian Angel AI®",
    short_name: "Guardian Angel AI®",
    description:
      "Guardian Angel AI® is privacy-preserving safety infrastructure designed to protect without surveillance. Institutional-grade safety for your most critical environments.",
    start_url: "/",
    display: "standalone",
    background_color: "#06080C",
    theme_color: "#06080C",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
