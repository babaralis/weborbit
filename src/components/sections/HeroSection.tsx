"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate that business name is filled
    if (!businessName.trim()) {
      return; // Don't navigate if field is empty
    }
    // Navigate to steps page with business name as query param
    const queryParam = `?business=${encodeURIComponent(businessName.trim())}`;
    router.push(`/steps${queryParam}`);
  };
  
  return (
    <section className="hero-section text-white py-16 md:py-24 lg:py-32 relative overflow-hidden min-h-[70vh] md:min-h-[100vh] lg:min-h-[100vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/images/home/video.mp4" type="video/mp4" />
      </video>
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
              Award-winning digital marketing and web design agency
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center">
              Websites that turn traffic into booked 
              <span className="text-primary"> calls and revenue guaranteed.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed text-center">
              We design, write and develop conversion-focused websites that grow your pipeline in 90 days or less, or we work for free until they do.
            </p>
            <form onSubmit={handleSubmit} className="mb-8 flex justify-center w-full">
              <div className="flex flex-col sm:flex-row gap-3 bg-[#0000003d] border w-full border-[#f97015] rounded-lg p-2 shadow-lg max-w-[34rem]" style={{ borderColor: "#f97015" }}>
                <div className="flex-1 flex items-center gap-3 px-4 py-3 sm:py-2">
                  <Image src="/assets/images/home/pencil.png" alt="Pencil" width={20} height={20} />
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Enter Your Business Name"
                    required
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white text-base sm:text-lg"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={!businessName.trim()}
                  className="rounded-lg px-8 sm:px-10 whitespace-nowrap text-sm sm:text-base font-semibold uppercase disabled:opacity-100"
                >
                  Get Started
                </Button>
              </div>
            </form>
            <ul className="space-y-3 mb-8 lg:flex  justify-center mx-auto gap-[1rem] block hidden">
              <li className="flex items-center gap-2 text-white/90 mt-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>More qualified demo requests</span>
              </li>
              <li className="flex items-center gap-2 text-white/90 mt-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Higher conversion on high-intent pages</span>
              </li>
                  <li className="flex items-center gap-2 text-white/90 mt-2">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>SEO + CRO + dev all under one roof</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
