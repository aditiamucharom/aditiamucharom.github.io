import type { Metadata } from "next";
import { ResourcesPage } from "@/components/resources-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free Lightroom presets, templates, LUTs, wallpapers, and creative assets by Aditia Mucharom.",
  alternates: {
    canonical: "/resources/",
  },
  openGraph: {
    title: `Resources - ${siteConfig.name}`,
    description:
      "Free Lightroom presets, templates, LUTs, wallpapers, and creative assets for creators.",
    url: "/resources/",
  },
};

export default function ResourcesRoute() {
  return <ResourcesPage />;
}
