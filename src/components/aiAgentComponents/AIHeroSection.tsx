"use client";

import Image from "next/image";

export const AIHeroSection = () => {
  return (
    <section className="hero-section text-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/assets/images/ai-agent.webp" alt="AI Agent Hero" fill className="object-cover" />
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
      <div className="container-wide max-w-[71rem] relative z-20 pt-24">
        <div className="grid gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wider text-center">
            AI Service Platform
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center">
            Intelligent AI Services That Work 24/7.
              <span className="text-primary"> Learn. Adapt. Deliver</span> Results.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed text-center">
              We design, write and develop conversion-focused websites that grow your pipeline in 90 days or less, or we work for free until they do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
