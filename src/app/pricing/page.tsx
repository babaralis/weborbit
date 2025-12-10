"use client";

import { useState } from "react";
import Image from "next/image";
import { PricingSection } from "@/components/sections/PricingSection";

export default function PricingPage() {
    const [_businessName, _setBusinessName] = useState("");
    const [_activeIndex, _setActiveIndex] = useState<number | null>(null);

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