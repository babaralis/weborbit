import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Custom Web Development Services",
  description: "Custom web development that turns traffic into booked calls. Strategy, design, dev and optimization under one roof. 90-day guarantee on lead generation results.",
  canonical: "/web-development",
});

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

