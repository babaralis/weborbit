import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AIInsightsSection } from "@/components/sections/AIInsightsSection";
import { TestimonialBand } from "@/components/sections/TestimonialBand";
import { CROSection } from "@/components/sections/CROSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { StorytellingSection } from "@/components/sections/StorytellingSection";
import { CMSSection } from "@/components/sections/CMSSection";
import { FrameworkDiagram } from "@/components/sections/FrameworkDiagram";
import { PricingSection } from "@/components/sections/PricingSection";
import { WhoItsForSection } from "@/components/sections/WhoItsForSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FinalTestimonial } from "@/components/sections/FinalTestimonial";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = generatePageMetadata({
  title: "Web Design & Development Agency",
  description: "Award-winning web design, development, SEO and CRO agency for B2B, SaaS and service companies. We build websites that generate qualified leads and revenue.",
  canonical: "/",
});

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = searchParams ? await searchParams : undefined;
  const submitted =
    typeof params?.submitted === "string"
      ? params?.submitted === "1"
      : Array.isArray(params?.submitted)
      ? params?.submitted?.[0] === "1"
      : false;
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <ServicesSection />
      <AIInsightsSection />
      <TestimonialBand />
      <CROSection />
      <ProcessSection />
      <TrustBadges />
      <PortfolioSection limit={6} />
      <StorytellingSection />
      <CMSSection />
      <FrameworkDiagram />
      <PricingSection />
      <WhoItsForSection />
      <TeamSection />
      <FinalTestimonial />
      {/* <CTASection submitted={submitted} /> */}
    </>
  );
}

