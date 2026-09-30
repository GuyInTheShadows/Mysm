import type { MetadataRoute } from "next";
import { resume } from "@/content/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: resume.identity.site,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
