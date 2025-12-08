"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export const PortfolioSection = ({ limit = 30 }: { limit?: number }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projectMeta = [
    { industry: "B2B SaaS", outcome: "+42% demo conversions" },
    { industry: "Analytics Platform", outcome: "2× organic traffic" },
    { industry: "Cloud Services", outcome: "+38% lead quality" },
    { industry: "Consulting", outcome: "3× pipeline sourced" },
    { industry: "Data Platform", outcome: "+55% time on site" },
    { industry: "Healthcare Tech", outcome: "+29% form completions" },
  ];

  // Tum ne length 28 rakhi hai, woh hi maintain kar raha hoon
  const projects = Array.from({ length: 28 }, (_, index) => {
    const id = index + 1;
    const meta = projectMeta[index % projectMeta.length];

    return {
      name: `Project ${id.toString().padStart(2, "0")}`,
      industry: meta.industry,
      outcome: meta.outcome,
      image: `/assets/images/portfolio/${id}.jpg`,
    };
  });

  const visibleProjects = projects.slice(0, limit);

  const handleCloseLightbox = () => setActiveIndex(null);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Heading */}
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

        {/* Cards grid */}
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
              {/* Image wrapper – full image, no crop */}
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

        {/* CTA */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/web-development">View All Projects</Link>
          </Button>
        </div>
      </div>

      {/* Lightbox / Magnifier */}
      {activeIndex !== null && visibleProjects[activeIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-background rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="absolute top-3 right-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white text-sm hover:bg-black/80 transition"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Full image – zoomed view */}
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
  );
};
