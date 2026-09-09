import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${site.url}/`, lastModified, priority: 1 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}/`,
      lastModified,
      priority: 0.8,
    })),
  ];
}
