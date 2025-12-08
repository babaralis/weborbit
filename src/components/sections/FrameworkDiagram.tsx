"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContactModal } from "@/components/modals/ContactModal";
import { useState } from "react";

const valueStackItems = [
  "Deep website & funnel audit",
  "SEO & content opportunity report",
  "Conversion blueprint for your top pages",
  "Sitemap & wireframe recommendations",
  "Priority roadmap for 90 days",
  "30–45 minute walkthrough call",
];

const frameworkSlices = [
  "Strategy",
  "Research",
  "Design",
  "Development",
  "Optimization",
  "Launch",
];

export const FrameworkDiagram = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Website design is a thousand tiny decisions.{" "}
            <span className="text-primary">We make them strategically.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Website Revenue Plan gives you clarity on each element before a single pixel is pushed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Circle Diagram */}
          <div className="relative flex items-center justify-center">

            {/* <Image src="/assets/images/home/home6.png" alt="Framework Diagram Image" width={600} height={600} /> */}

            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-1/4 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-center text-lg px-4">
                  Your Website
                </span>
              </div>

              {frameworkSlices.map((slice, index) => {
                const angle = (index * 360) / frameworkSlices.length - 90;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={slice}
                    className="absolute w-24 text-center transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary border-2 border-primary/20 flex items-center justify-center mx-auto mb-1">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">{slice}</span>
                  </div>
                );
              })}

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
              </svg>
            </div>
          
          </div>

          {/* Value Stack */}
          <div className="bg-secondary rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              What's inside the Website Revenue Plan
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Free for qualified projects—our investment in the relationship.
            </p>

            <ul className="space-y-3 mb-6">
              {valueStackItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant="default" 
              size="lg" 
              className="w-full"
              type="button"
              onClick={handleButtonClick}
            >
              Get My Website Revenue Plan
            </Button>
          </div>

        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        planName="Website Revenue Plan"
      />
    </section>
  );
};
