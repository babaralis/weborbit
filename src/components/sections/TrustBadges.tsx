import Image from "next/image";

const logos = [
  {
    name: "Google Partner",
    src: "/assets/images/awards/4.png",
  },
  {
    name: "Clutch",
    src: "/assets/images/awards/3.png",
  },
  {
    name: "DesignRush",
    src: "/assets/images/awards/2.png",
  },
  {
    name: "Webby Awards",
    src: "/assets/images/awards/1.png",
  },
];

export const TrustBadges = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        <p className="text-center text-muted-foreground font-medium mb-8">
          Recognized for strategy, design and results
        </p>

        {/* Logos row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center mb-8">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={40}
                className=""
              />
            </div>
          ))}
        </div>

        {/* Mini Testimonial */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground italic">
            "Webs Orbit didn't just build us a website—they built us a marketing asset that 
            generates leads every single day."
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            — Sarah Chen, CMO at ScaleUp
          </p>
        </div>
      </div>
    </section>
  );
};
