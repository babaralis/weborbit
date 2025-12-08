import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description: "Get in touch with Orbitline Digital Studio. Fill out our form and a senior strategist will reply within 1 business day with expert guidance for your website project.",
  canonical: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
