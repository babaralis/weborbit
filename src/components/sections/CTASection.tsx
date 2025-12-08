import { Button } from "@/components/ui/button";

export const CTASection = ({ submitted = false }: { submitted?: boolean }) => {
  return (
    <section id="cta-section" className="py-20 md:py-28 bg-primary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Not sure where to start? We'll build your Website Revenue Plan.
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6">
              It's a free, low-risk first step that maps where the biggest gains are hiding in 
              your current site and what it would take to unlock them.
            </p>
            <p className="text-primary-foreground/70 text-sm">
              We'll review your site and send your plan in 3–5 business days.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl contactformdiv">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Get My Website Revenue Plan
            </h3>

            {submitted && (
              <div className="mb-4 rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800">
                Thank you! We'll review your site and send your plan in 3–5 business days.
              </div>
            )}

            <form method="post" action="/api/website-plan" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-foreground mb-1">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://yoursite.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-foreground mb-1">
                  Biggest Website Challenge
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={3}
                  placeholder="What's the one thing you wish your website did better?"
                  required
                />
              </div>

              <Button type="submit" variant="default" size="xl" className="w-full">
                Get My Website Revenue Plan
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                No spam. No pressure. Just a clear roadmap for your website.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
