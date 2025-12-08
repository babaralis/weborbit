"use client";

import { AIHeroSection } from "@/components/aiAgentComponents/AIHeroSection";
import { AIServicesSection } from "@/components/aiAgentComponents/AIServicesSection";
import { AIBenefitsSection } from "@/components/aiAgentComponents/AIBenefitsSection";
import { AIIndustrySection } from "@/components/aiAgentComponents/AIIndustrySection";
import { AINetworkSection } from "@/components/aiAgentComponents/AINetworkSection";
import { AIFAQSection } from "@/components/aiAgentComponents/AIFAQSection";

export default function AIAgentPage() {
  return (
    <>
      <AIHeroSection />
      <AIServicesSection />
      <AIBenefitsSection />
      <AIIndustrySection />
      <AINetworkSection />
      <AIFAQSection />
    </>
  );
}
