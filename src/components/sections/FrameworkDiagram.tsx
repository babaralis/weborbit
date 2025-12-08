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
          <Image src="/assets/images/diagram-01.svg" alt="Framework Diagram" width={1000} height={1000} />
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
