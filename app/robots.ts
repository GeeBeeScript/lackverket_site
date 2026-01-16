import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",
          "/api/",
          "/admin/",
          "/login/",
          "/private/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/*.avif$",
          "/*.jpg$",
          "/*.jpeg$",
          "/*.png$",
          "/*.webp$",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: "https://www.lackverket.se/sitemap.xml",
  };
}
