import { Search, Layout, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Research",
    description: "We dig into your audience, competitors, and data to find the real opportunities hiding in plain sight.",
  },
  {
    icon: Layout,
    title: "UX & Content Architecture",
    description: "Map out user journeys and content hierarchies that guide visitors toward conversion, not confusion.",
  },
  {
    icon: Code,
    title: "Design & Development",
    description: "Build beautiful, fast, accessible websites that work on every device and load in under 2 seconds.",
  },
  {
    icon: Rocket,
    title: "Launch & Ongoing Optimization",
    description: "Go live with confidence, then continuously improve based on real user behavior and results.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            A data-driven web design and{" "}
            <span className="text-primary">development company.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project follows a structured, tested process that's delivered results for hundreds of clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const isActive = index === 1 || index === 3; // Step 2 and Step 4 are active (0-indexed, so index 1 and 3)
            return (
              <div
                key={step.title}
                className="datadrivencard bg-background rounded-xl p-6 hover:shadow-lg transition-shadow group"
                style={isActive ? { border: '2px solid #f97015' } : {}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">Step {index + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
