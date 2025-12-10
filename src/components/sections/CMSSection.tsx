import { Check } from "lucide-react";
import Image from "next/image";

const cmsFeatures = [
  "Flexible page sections & blocks",
  "Reusable components (hero, testimonials, pricing, FAQs)",
  "Built-in SEO fields for every page",
  "Training and documentation",
];

export const CMSSection = () => {
  return (
    <section className="section-padding bg-[#f970151c]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Image src="/assets/images/home/home2.webp" alt="CMS Image" width={600} height={600} />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Edit any page in{" "}
              <span className="text-primary">seconds.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We set up your CMS with flexible blocks and components so your marketing team can 
              launch new pages, update content, and run experiments—without waiting on developers.
            </p>
            <ul className="space-y-3">
              {cmsFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
