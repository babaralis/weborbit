import type { Metadata } from "next";

const siteName = "Orbitline Digital Studio";
const baseUrl = "https://orbitline.studio";

export function generatePageMetadata({
  title,
  description,
  canonical,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  noIndex = false,
}: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const url = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return {
    title: fullTitle,
    description,
    ...(canonical && {
      alternates: {
        canonical: url,
      },
    }),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    openGraph: {
      type: "website",
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@OrbitlineDigital",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

