import { Check, X } from "lucide-react";
import Image from "next/image";

const forYou = [
  "B2B, SaaS, and service brands with a sales process (not pure ecommerce)",
  "Teams who value strategy and are open to data-driven decisions",
  "Companies ready to invest in a website that drives pipeline",
  "Marketing leaders tired of chasing multiple vendors",
];

const notForYou = [
  "Businesses looking for a quick template or cheapest option",
  "Teams that don't have anyone to own website decisions internally",
  "Companies not ready to commit to a strategic partnership",
];

export const WhoItsForSection = () => {
  return (
    <section className="section-padding bg-secondary pt-0">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              What if you're not 100% sure{" "}
              <span className="text-primary">what you need?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              You don't have to show up with a perfect brief. You might only know that your site 
              isn't doing its job—and that's enough.
            </p>
            <p className="text-muted-foreground mb-8">
              The Website Revenue Plan exists to give you clarity, not to lock you into anything.
            </p>

            {/* For / Not For */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  This is for you if:
                </h3>
                <ul className="space-y-2 pl-7">
                  {forYou.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  This is not for you if:
                </h3>
                <ul className="space-y-2 pl-7">
                  {notForYou.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Risk Reversal */}

            {/* <div className="mt-8 p-6 bg-background rounded-xl border border-border">
              <p className="font-semibold text-foreground mb-2">Zero-Risk Promise</p>
              <p className="text-muted-foreground text-sm">
                If after the Website Revenue Plan you don't feel crystal clear on your next steps, 
                we'll give you our findings and you owe us nothing.
              </p>
            </div> */}

          </div>

          {/* Growth Chart */}
          <div className="relative">

            <Image src="/assets/images/home/home8.png" alt="Growth Chart" width={800} height={800} />

            {/* <div className="bg-background rounded-xl shadow-xl p-8 border border-border">
              <h3 className="font-semibold text-foreground mb-6">Typical Results Over Time</h3>

              <div className="h-48 relative">
                <svg className="w-full h-full" viewBox="0 0 400 200">
            
                  <line x1="40" y1="160" x2="380" y2="160" stroke="hsl(var(--border))" strokeWidth="1" />
                  <line x1="40" y1="120" x2="380" y2="120" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="80" x2="380" y2="80" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4" />
                  <line x1="40" y1="40" x2="380" y2="40" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4" />

                  <path
                    d="M 40 160 Q 100 140, 160 120 T 280 60 T 380 30"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  <path
                    d="M 40 160 Q 100 140, 160 120 T 280 60 T 380 30 L 380 160 L 40 160 Z"
                    fill="hsl(var(--primary))"
                    opacity="0.1"
                  />

                  <circle cx="40" cy="160" r="4" fill="hsl(var(--primary))" />
                  <circle cx="160" cy="120" r="4" fill="hsl(var(--primary))" />
                  <circle cx="280" cy="60" r="4" fill="hsl(var(--primary))" />
                  <circle cx="380" cy="30" r="6" fill="hsl(var(--primary))" />

                  <text x="40" y="180" className="text-xs fill-muted-foreground">Launch</text>
                  <text x="140" y="180" className="text-xs fill-muted-foreground">30 days</text>
                  <text x="260" y="180" className="text-xs fill-muted-foreground">60 days</text>
                  <text x="360" y="180" className="text-xs fill-muted-foreground">90 days</text>
                </svg>
              </div>

              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">Qualified Leads</span>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};
