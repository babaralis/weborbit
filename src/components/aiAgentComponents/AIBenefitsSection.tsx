"use client";

export const AIBenefitsSection = () => {
  return (
    <section id="ai-benefits" className="py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container-wide mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-12 md:mb-16">
          <div className="w-full lg:w-8/12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 max-w-3xl mx-auto">
              Our AI Services Come With{" "}
              <span className="text-primary">Tremendous Benefits</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Deploy AI services to streamline operations and amplify your
              business's efficiency. These services optimize processes, reduce
              delays, and enhance output, ensuring you gain a competitive edge
              with speed and precision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md h-full">
            <h4 className="text-xl font-bold mb-3">1. Customer Support AI Agent</h4>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Highlight efficiency, cost savings, and service quality
              improvements.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                  35%
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Reduces Support Costs
                </div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                  60%
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Resolve Issues Faster
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md h-full">
            <h4 className="text-xl font-bold mb-3">2. Lead Capture AI Agent</h4>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Emphasize conversion, qualification speed, and lead pipeline
              growth.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                  52%
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Increase Lead Conversions
                </div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                  3x
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Faster Quality Leads
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md h-full">
            <h4 className="text-xl font-bold mb-3">3. Sales AI Agent</h4>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Focus on revenue acceleration, efficiency, and buyer experience.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                  40%
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Increase Sales Productivity
                </div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                  3.5x
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  ROI Deliver Within a Year
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
