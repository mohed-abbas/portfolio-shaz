import type { MetadataRoute } from "next";

// Update to the real production domain once deployed.
const siteUrl = "https://muneeb-portfolio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
