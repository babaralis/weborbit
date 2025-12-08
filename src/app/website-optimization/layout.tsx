import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Website Optimization Services",
  description: "Turn underperforming websites into lead engines with our SEO, CRO, and optimization services. Measurable improvements in 30-60 days or we keep working for free.",
  canonical: "/website-optimization",
});

export default function WebsiteOptimizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

