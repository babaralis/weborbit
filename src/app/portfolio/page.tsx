"use client";

import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { Check } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioPage() {
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
              <span className="text-[#f97015]">Our Creative</span> Portfolio
            </h1>
            <p className="text-xl text-white/80 mb-4">
            We are a creative branding, digital design and development agency based in New York. For more than 15 years, our team has helped businesses build strong visual identities through professional logo design, branding systems, marketing support and digital solutions.
            </p>
          </div>
        </div>
      </section>
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground max-w-[60rem] mx-auto">
              Websites we've built that{" "}
              <span className="text-primary">drive real results.</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection from 100+ websites designed, written and developed for
              B2B, SaaS and service brands.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group bg-secondary rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-zoom-in"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative w-full bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-foreground text-lg">
                    {project.name}
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                    {project.industry}
                  </span>
                </div>
                <p className="text-primary font-semibold">{project.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeIndex !== null && visibleProjects[activeIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-background rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white text-sm hover:bg-black/80 transition"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="w-full h-full flex items-center justify-center bg-black">
              <img
                src={visibleProjects[activeIndex].image}
                alt={visibleProjects[activeIndex].name}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  );
}

