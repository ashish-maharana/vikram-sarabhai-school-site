import type { Metadata } from "next";
import { site } from "@/data/site";
import type { MetadataInput } from "@/lib/types";

const siteName = site.name;
const baseUrl = "https://vikramsarabhaischoolbardoli.in";

export function createPageMetadata(input: MetadataInput): Metadata {
  const canonical = `${baseUrl}${input.path}`;

  return {
    title: input.title,
    description: input.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      title: input.title,
      description: input.description,
      siteName,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}

