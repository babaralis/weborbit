import { ArrowRight } from "lucide-react";
import Link from "next/link";

const beforeAfter = [
  { before: "Guessing what to put on pages", after: "Content planned from real search data" },
  { before: "Random site structure", after: "Architecture based on user behavior" },
  { before: "Hoping for leads", after: "Conversion paths backed by analytics" },
];

const valueStack = [
  "Website + funnel audit",
  "SEO & opportunity map",
  "High-intent page blueprint",
  "Prioritized roadmap",
];

export const AIInsightsSection = () => {
  return (
    <section className="section-padding bg-[#f970151c]">
      <div className="container-wide">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground max-w-[60rem] mx-auto">
              Attract higher-quality leads and increase visibility with{" "}
              <span className="text-primary">AI-powered insights.</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use AI and analytics to map out demand, gaps, and opportunities—but humans
              make the final decisions. The result? A website that's built on data, not guesswork.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Before/After */}
            <div className="space-y-4 mb-8">
              {beforeAfter.map((item) => (
                <div key={item.before} className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground line-through flex-1">
                    {item.before}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium flex-1">
                    {item.after}
                  </span>
                </div>
              ))}
            </div>

            {/* Value Stack Preview */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <p className="font-semibold text-foreground mb-4">Here's what you get:</p>
              <div className="grid grid-cols-2 gap-3">
                {valueStack.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href=""
                className="mt-4 inline-block text-primary font-semibold text-sm hover:underline"
              >
                See what's inside your Website Revenue Plan →
              </Link>
            </div>
          </div>

          {/* Analytics Mockup */}
          <div className="relative">
            <div className="bg-background rounded-xl shadow-xl p-6 border border-border">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">AI Insights Dashboard</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Live
                </span>
              </div>

              {/* Chart Mockup */}
              <div className="h-40 mb-6 flex items-end gap-2">
                {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95].map((height, i) => {
                  const isEven = i % 2 === 0;

                  return (
                    <div
                      key={i}
                      className={
                        "flex-1 rounded-t transition-all " +
                        (isEven
                          ? "hover:opacity-90"
                          : "bg-gradient-to-t from-primary to-primary/50 hover:from-primary/90")
                      }
                      style={{
                        height: `${height}%`,
                        ...(isEven
                          ? {
                              background:
                                "linear-gradient(180deg, hsl(222 47% 8%) 0%, hsl(222 47% 12%) 100%)",
                            }
                          : {}),
                      }}
                    />
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">2.4K</p>
                  <p className="text-xs text-muted-foreground">Keywords Found</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">+127%</p>
                  <p className="text-xs text-muted-foreground">Traffic Potential</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">48</p>
                  <p className="text-xs text-muted-foreground">Opportunities</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-lg shadow-lg px-4 py-2 text-sm font-semibold">
              AI-Powered Analysis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
