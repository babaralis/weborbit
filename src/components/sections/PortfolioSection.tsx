"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  // Add your projects here manually
  const projects = [
    {
      id: 1,
      title: "Project 01",
      category: "Ecommerce & Retail",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/ecommerce-retail/1.webp",
    },
    {
      id: 2,
      title: "Project 02",
      category: "Ecommerce & Retail",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/ecommerce-retail/2.webp",
    },
    {
      id: 3,
      title: "Project 03",
      category: "Ecommerce & Retail",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/ecommerce-retail/3.webp",
    },
    {
      id: 4,
      title: "Project 04",
      category: "Ecommerce & Retail",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/ecommerce-retail/4.webp",
    },
    {
      id: 5,
      title: "Project 05",
      category: "Ecommerce & Retail",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/ecommerce-retail/5.webp",
    },
    {
      id: 6,
      title: "Project 06",
      category: "Ecommerce & Retail",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/ecommerce-retail/6.webp",
    },
    {
      id: 7,
      title: "Project 07",
      category: "Ecommerce & Retail",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/ecommerce-retail/7.webp",
    },
    {
      id: 8,
      title: "Project 08",
      category: "Ecommerce & Retail",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/ecommerce-retail/8.webp",
    },  
    {
      id: 9,
      title: "Project 09",
      category: "Ecommerce & Retail",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/ecommerce-retail/9.webp",
    },
    {
      id: 10,
      title: "Project 10",
      category: "Ecommerce & Retail",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/ecommerce-retail/10.webp",
    },
    {
      id: 11,
      title: "Project 11",
      category: "Education & Learning",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/education-learning/11.webp",
    },  
    {
      id: 12,
      title: "Project 12",
      category: "Education & Learning",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/education-learning/12.webp",
    },
    {
        id: 13,
        title: "Project 13",
      category: "Education & Learning",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/education-learning/13.webp",
    },
    {
      id: 14,
      title: "Project 14",
      category: "Education & Learning",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/education-learning/14.webp",
    },
    {
      id: 15,
      title: "Project 15",
      category: "Education & Learning",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/education-learning/15.webp",
    },
    {
      id: 16,
      title: "Project 15",
      category: "Education & Learning",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/education-learning/16.webp",
    },
    {
      id: 17,
      title: "Project 16",
      category: "Education & Learning",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/education-learning/17.webp",
    },
    {
      id: 18,
      title: "Project 18",
      category: "Education & Learning",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/education-learning/18.webp",
    },
    {
      id: 19,
      title: "Project 19",
      category: "Education & Learning",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/education-learning/19.webp",
    },
    {
      id: 20,
      title: "Project 20",
      category: "Education & Learning",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/education-learning/20.webp",
    },
    {
      id: 21,
      title: "Project 21",
      category: "Finance & Fintech",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/finance-fintech/21.webp",
    },
    {
      id: 22,
      title: "Project 22",
      category: "Finance & Fintech",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/finance-fintech/22.webp",
    },
    {
        id: 23,
        title: "Project 23",
      category: "Finance & Fintech",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/finance-fintech/23.webp",
    },
    {
      id: 24,
      title: "Project 24",
      category: "Finance & Fintech",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/finance-fintech/24.webp",
    },
    {
      id: 25,
      title: "Project 25",
      category: "Finance & Fintech",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/finance-fintech/25.webp",
    },
    {
      id: 26,
      title: "Project 26",
      category: "Finance & Fintech",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/finance-fintech/26.webp",
    },
    {
      id: 27,
      title: "Project 27",
      category: "Finance & Fintech",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/finance-fintech/27.webp",
    },
    {
      id: 28,
      title: "Project 28",
      category: "Finance & Fintech",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/finance-fintech/28.webp",
    },
    {
      id: 29,
      title: "Project 29",
      category: "Finance & Fintech",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/finance-fintech/29.webp",
    },
    {
      id: 30,
      title: "Project 30",
      category: "Finance & Fintech",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/finance-fintech/30.webp",
    },
    {
      id: 31,
      title: "Project 31",
      category: "Food & Beverage",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/food-beverage/31.webp",
    },
    {
      id: 32,
      title: "Project 32",
      category: "Food & Beverage",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/food-beverage/32.webp",
    },
    {
        id: 33,
        title: "Project 33",
      category: "Food & Beverage",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/food-beverage/33.webp",
    },
    {
      id: 34,
      title: "Project 34",
      category: "Food & Beverage",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/food-beverage/34.webp",
    },
    {
      id: 35,
      title: "Project 35",
      category: "Food & Beverage",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/food-beverage/35.webp",
    },
    {
      id: 36,
      title: "Project 36",
      category: "Food & Beverage",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/food-beverage/36.webp",
    },
    {
      id: 37,
      title: "Project 37",
      category: "Food & Beverage",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/food-beverage/37.webp",
    },
    {
      id: 38,
      title: "Project 38",
      category: "Food & Beverage",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/food-beverage/38.webp",
    },
    {
      id: 39,
      title: "Project 39",
      category: "Food & Beverage",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/food-beverage/39.webp",
    },
    {
      id: 40,
      title: "Project 40",
      category: "Food & Beverage",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/food-beverage/40.webp",
    },
    {
      id: 41,
      title: "Project 41",
      category: "Green & Renewable Energy",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/green-renewable-energy/41.webp",
    },
    {
      id: 42,
      title: "Project 42",
      category: "Green & Renewable Energy",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/green-renewable-energy/42.webp",
    },
    {
        id: 43,
        title: "Project 43",
      category: "Green & Renewable Energy",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/green-renewable-energy/43.webp",
    },
    {
      id: 44,
      title: "Project 44",
      category: "Green & Renewable Energy",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/green-renewable-energy/44.webp",
    },
    {
      id: 45,
      title: "Project 45",
      category: "Green & Renewable Energy",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/green-renewable-energy/45.webp",
    },
    {
      id: 46,
      title: "Project 46",
      category: "Green & Renewable Energy",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/green-renewable-energy/46.webp",
    },
    {
      id: 47,
      title: "Project 47",
      category: "Green & Renewable Energy",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/green-renewable-energy/47.webp",
    },
    {
      id: 48,
      title: "Project 48",
      category: "Green & Renewable Energy",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/green-renewable-energy/48.webp",
    },
    {
      id: 49,
      title: "Project 49",
      category: "Green & Renewable Energy",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/green-renewable-energy/49.webp",
    },
    {
      id: 50,
      title: "Project 50",
      category: "Green & Renewable Energy",
      result: "+15% year-over-year revenue growth",
      image: "/assets/images/portfolio/green-renewable-energy/50.webp",
    },
  ];

  // Dynamically extract categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects =
    activeTab === "All"
      ? projects
      : (() => {
          const categoryProjects = projects.filter((p) => p.category === activeTab);
          // If we have less than 10 projects, cycle through them to show 10
          if (categoryProjects.length < 10 && categoryProjects.length > 0) {
            const needed = 10 - categoryProjects.length;
            const cycled = Array.from({ length: needed }, (_, i) => 
              categoryProjects[i % categoryProjects.length]
            );
            return [...categoryProjects, ...cycled];
          }
          return categoryProjects.slice(0, 10);
        })();
  const visibleProjects = filteredProjects;
  const handleCloseLightbox = () => setActiveIndex(null);
  return (
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
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 lg:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                setActiveIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {visibleProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
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
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-foreground text-lg">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-primary font-semibold">{project.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found for this category.
            </p>
          </div>
        )}
        {/* <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/web-development">View All Projects</Link>
          </Button>
        </div> */}
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
                alt={visibleProjects[activeIndex].title}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
