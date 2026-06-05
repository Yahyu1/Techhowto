import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

interface PageMeta {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

export function createMetadata({
  title,
  description,
  path = "",
  image = "/og-image.png",
  type = "website",
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title: `${title} | ${SITE.name}`,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: SITE.twitter,
    },
    robots: { index: true, follow: true },
  };
}
