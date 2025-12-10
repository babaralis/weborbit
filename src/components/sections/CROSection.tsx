import { Check } from "lucide-react";
import Image from "next/image";

const conversionLevers = [
  "Clear value props above the fold",
  "High-intent journeys and CTAs",
  "Conversion-ready landing pages",
  "Faster, focused forms and microcopy",
  "Social proof and authority placement",
];

export const CROSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Optimize your website for{" "}
              <span className="text-primary">higher conversions.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Small UX and content tweaks can unlock massive gains. We identify the friction points 
              killing your conversions and systematically eliminate them.
            </p>
            <ul className="space-y-3 mb-8">
              {conversionLevers.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="font-semibold text-foreground mb-2">Our Guarantee</p>
              <p className="text-muted-foreground text-sm">
                If we don't improve at least one key conversion rate (demos, leads, calls) within 
                90 days of launch, we keep optimizing at no extra cost until we do.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image src="/assets/images/home/bannerside2.webp" alt="CRO Image" width={600} height={600} />
          </div>

        </div>
      </div>
    </section>
  );
};
