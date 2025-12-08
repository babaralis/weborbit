"use client";

import { useState } from "react";
import Image from "next/image";
import { PricingSection } from "@/components/sections/PricingSection";

export default function PricingPage() {
    const [businessName, setBusinessName] = useState("");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
        const projectMeta = [
          { industry: "B2B SaaS", outcome: "+42% demo conversions" },
          { industry: "Analytics Platform", outcome: "2× organic traffic" },
          { industry: "Cloud Services", outcome: "+38% lead quality" },
          { industry: "Consulting", outcome: "3× pipeline sourced" },
          { industry: "Data Platform", outcome: "+55% time on site" },
          { industry: "Healthcare Tech", outcome: "+29% form completions" },
        ];
      
        const projects = Array.from({ length: 28 }, (_, index) => {
          const id = index + 1;
          const meta = projectMeta[index % projectMeta.length];
      
          return {
            name: `Project ${id.toString().padStart(2, "0")}`,
            industry: meta.industry,
            outcome: meta.outcome,
            image: `/assets/images/portfolio/${id}.jpg`,
          };
        })
        const visibleProjects = projects.slice(0, 30);
        const handleCloseLightbox = () => setActiveIndex(null);
        const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (businessName.trim()) {
        window.location.href = `?business=${encodeURIComponent(businessName)}`;
      }
    }

  return (
    <>
      <section className="hero-section text-white py-16 md:py-24 lg:py-28 relative overflow-hidden" style={{ 'paddingTop': '10rem' }}>
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/assets/images/home/about-us.jpg"
            alt="About Us Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 z-10 pointer-events-none top-[-22rem]"
          style={{
            background: 'radial-gradient(circle at right center, rgba(249, 112, 21, 0.4) 0%, transparent 23%)'
          }}
        ></div>
        <div 
          className="absolute inset-0 z-10 pointer-events-none bottom-[-22rem]"
          style={{
            background: 'radial-gradient(circle at left center, rgba(249, 112, 21, 0.4) 0%, transparent 23%)'
          }}
        ></div>
        <div className="container-wide relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-[60rem] mx-auto text-white">
            Our<span className="text-[#f97015]"> Pricing</span>
            </h1>
            <p className="text-xl text-white/80 mb-4">
            We are a creative branding, digital design and development agency based in San Francisco. For more than 15 years, our team has helped businesses build strong visual identities through professional logo design, branding systems, marketing support and digital solutions.
            </p>
          </div>
        </div>
      </section>
    <PricingSection />
    </>
  );
}