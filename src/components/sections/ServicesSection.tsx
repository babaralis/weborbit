import { Check } from "lucide-react";
import Image from "next/image";

const services = [
  "Website strategy & positioning",
  "UX, design & storytelling",
  "Web development & integrations",
  "Website optimization (SEO, CRO, analytics)",
  "Ongoing support & experiments",
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mockup Collage */}
          <div className="relative">

            <Image src="/assets/images/home/home9.png" alt="Services Image" width={600} height={600} />

            {/* <div className="grid grid-cols-2 gap-4">
              
              <div className="col-span-2 bg-secondary rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-muted-foreground/20 rounded w-1/2"></div>
                  <div className="h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded"></div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 bg-muted rounded"></div>
                    <div className="h-12 bg-muted rounded"></div>
                    <div className="h-12 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary rounded-xl p-3 shadow-lg">
                <div className="h-24 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded"></div>
              </div>
              <div className="bg-secondary rounded-xl p-3 shadow-lg">
                <div className="h-24 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded"></div>
              </div>
            </div> */}
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Web design team that's launched{" "}
              <span className="text-primary">hundreds of high-performing sites.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We combine strategy, design, development, SEO and CRO into one integrated engagement—so your website actually moves the needle on pipeline and revenue.
            </p>

            <ul className="space-y-4 mb-8">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{service}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground border-l-2 border-primary pl-4">
              Everything handled by one expert team so you don't chase 3–4 different vendors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
