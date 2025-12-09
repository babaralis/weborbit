"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  { logo: "https://www.orbitmedia.com/wp-content/uploads/2024/05/petersconsulting-logo.png", result: "+52% organic traffic in 6 months" },
  { logo: "https://www.orbitmedia.com/wp-content/uploads/2024/05/access-logo.png", result: "2× demo requests from existing traffic" },
  { logo: "https://www.orbitmedia.com/wp-content/uploads/2024/05/firstbank-logo.png", result: "+40% conversion rate on key pages" },
  { logo: "https://www.orbitmedia.com/wp-content/uploads/2024/05/flexera-logo.png", result: "3× qualified leads in 90 days" },
  { logo: "https://www.orbitmedia.com/wp-content/uploads/2024/05/plum-logo.png", result: "+68% organic conversions YoY" },
  { logo: "https://www.orbitmedia.com/wp-content/uploads/2024/05/altium-logo.png", result: "50% reduction in bounce rate" },
];

const aiCards = [
  {
    title: "Intent-focused content",
    bullets: ["Answer questions directly", "Build topical depth and authority", "Structure for featured snippets", "Align with user journey stages"],
  },
  {
    title: "Brand authority signals",
    bullets: ["Demonstrate expertise (E-E-A-T)", "Earn quality backlinks", "Showcase proof and testimonials", "Consistent brand presence"],
  },
  {
    title: "Technical quality",
    bullets: ["Fast load times (Core Web Vitals)", "Clean, crawlable structure", "Schema markup for rich results", "Mobile-first experience"],
  },
  {
    title: "User experience",
    bullets: ["Clear navigation and hierarchy", "Low-friction conversion paths", "Accessible to all users", "Engaging, scannable layouts"],
  },
];

const teamMembers = [
  { name: "Alex Rivera", role: "Optimization Lead", bio: "10+ years turning underperforming sites into lead engines.", image: "https://www.orbitmedia.com/wp-content/uploads/2023/06/andy-crestodina.jpg" },
  { name: "Jordan Chen", role: "SEO Strategist", bio: "Finds the keyword opportunities your competitors miss.", image: "https://www.orbitmedia.com/wp-content/uploads/2023/06/amanda-gant.jpg" },
  { name: "Sam Patel", role: "CRO Specialist", bio: "Designs experiments that move conversion metrics.", image: "https://www.orbitmedia.com/wp-content/uploads/2023/06/kevin-riggs.jpg" },
  { name: "Taylor Kim", role: "Analytics Lead", bio: "Turns data into decisions that drive growth.", image: "https://www.orbitmedia.com/wp-content/uploads/2023/06/barrett-lombardo.jpg" },
];

const seoServices = {
  strategy: ["Technical SEO audits", "Keyword & intent research", "Content gap analysis", "Competitive benchmarking", "AI readiness assessment"],
  onsite: ["On-page optimization", "Internal linking architecture", "Schema markup implementation", "Content optimization", "Meta & title tag strategy"],
  ongoing: ["Monthly reporting & insights", "Experiment roadmaps", "Algorithm update response", "Campaign support", "Quarterly strategy reviews"],
};

const faqs = [
  { q: "How long until we see results from optimization?", a: "Most clients see measurable improvements within 30–60 days. SEO gains typically compound over 3–6 months as search engines recognize improvements." },
  { q: "Do we need a redesign or just optimization?", a: "Often optimization unlocks significant gains without a full redesign. We'll audit your site first and recommend the right path—sometimes small changes deliver outsized results." },
  { q: "What if we already have an SEO agency?", a: "We can complement existing efforts or take over entirely. Our Website Optimization Plan will show where the gaps are and whether consolidating makes sense." },
  { q: "How do you measure success?", a: "We define KPIs together upfront—typically conversion rate, qualified leads, organic traffic to key pages, and engagement metrics. You'll get clear reporting tied to business outcomes." },
  { q: "What if the first round of changes doesn't work?", a: "If we don't improve at least one key conversion metric within 90 days, we'll keep optimizing at no extra cost until we do. That's our guarantee." },
];

const valueStackItems = [
  "Technical SEO & site health audit",
  "Conversion & funnel analysis",
  "AI-informed keyword and intent map",
  "UX & content clarity review",
  "Site speed & Core Web Vitals audit",
  "Priority issues & quick-wins list",
  "90-day Optimization Roadmap",
  "30–45 minute strategy walkthrough call",
];

export default function WebsiteOptimizationPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section text-white py-16 md:py-24 lg:py-28 relative overflow-hidden min-h-[70vh] md:min-h-[100vh] lg:min-h-[100vh]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/assets/images/website optimization.jpg"
            alt="Website Optimization Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Orange Radial Gradient - Right */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none top-[-22rem]"
          style={{
            background: 'radial-gradient(circle at right center, rgba(249, 112, 21, 0.4) 0%, transparent 23%)'
          }}
        ></div>
        
        {/* Orange Radial Gradient - Left */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none bottom-[-22rem]"
          style={{
            background: 'radial-gradient(circle at left center, rgba(249, 112, 21, 0.4) 0%, transparent 23%)'
          }}
        ></div>
        
        <div className="container-wide relative z-20">
          <div className="grid gap-12 grid-cols-2 items-center justify-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Website Optimization Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Is your website as effective as it should be?
              </h1>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                We turn underperforming websites into reliable lead engines—with measurable improvements in 30–60 days, or we keep working for free until they appear.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "More leads and demo requests from the traffic you already have",
                  "Faster pages that keep visitors from bouncing",
                  "Clear analytics so you know exactly what's working",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/90">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link href="#what-to-expect">Get Your Optimization Plan</Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="#video">Watch how we optimize sites</a>
                </Button>
              </div>
            </div>
            {/* <div>
              <Image
                src="/assets/images/web-optimization/banner.png"
                alt="Website Optimization Banner"
                width={500}
                height={500}
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="dark-section text-white py-16 md:py-20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white max-w-[60rem] mx-auto">Website <span className="text-[#f97015]">optimization case</span> studies</h2>
            <p className="text-white/70 max-w-[60rem] mx-auto">
              A few examples of sites where structured SEO and CRO turned "just a website" into a growth channel.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-center">
                <img src={study.logo} alt="Client logo" className="h-10 mx-auto mb-4 brightness-0 invert opacity-70" />
                <p className="text-white/90 text-sm font-medium">{study.result}</p>
                <a href="#" className="text-primary text-sm hover:underline mt-2 inline-block">See the story →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OPTIMIZATION */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-[60rem] mx-auto">
              Why do you need <span className="text-[#f97015]">website optimization</span> services?
            </h2>
            <p className="text-muted-foreground max-w-[60rem] mx-auto">
              Most sites are redesigned but rarely optimized. A small uplift in conversion rate changes revenue dramatically.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/images/web-optimization/optimization-01.png"
                alt="Chart showing website performance improvements before and after optimization"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The digital landscape is constantly evolving</h3>
              <p className="text-muted-foreground mb-4">
                Search algorithms update hundreds of times per year. User expectations rise. Competitors improve. A website that worked two years ago may be silently losing ground today.
              </p>
              <p className="text-muted-foreground mb-4">
                "Launch and forget" doesn't work anymore. The brands winning online treat their website as a living asset—one that's measured, tested and improved continuously.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-6">
                <p className="text-foreground font-medium">
                  "Optimization compounds—every 1% improvement stacks on top of the last one."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI IMPACT */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-[60rem] mx-auto">
              AI is <span className="text-[#f97015]">impacting the</span> way users search
            </h2>
            <p className="text-muted-foreground max-w-[60rem] mx-auto">
              AI overviews and assistants surface only the most relevant, clear, authoritative content. Your site needs to earn that visibility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCards.map((card) => (
              <div key={card.title} className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK HARDER */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-[60rem] mx-auto">
                Website optimization services make your <span className="text-[#f97015]">website work harder</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                A redesign makes your site look different. Optimization makes it perform better. We analyze existing traffic, user behavior and content to unlock more conversions—often without needing more visitors.
              </p>
              <p className="text-muted-foreground mb-6">
                This isn't about vanity metrics. It's about turning your website into the pipeline-generating asset it should be.
              </p>
              <ul className="space-y-3">
                {["Full-funnel review of key pages", "Heatmap & behavior insights", "Copy, layout and CTA improvements", "Technical SEO & speed tuning"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/assets/images/web-optimization/optimization-02.png"
                alt="Website displayed across multiple devices showing responsive optimization"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HUMAN COLLABORATION */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/images/web-optimization/optimization-03.png"
                alt="Team members collaborating on website optimization strategy"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-[60rem] mx-auto">
                We start by tapping into your site's <span className="text-[#f97015]">real potential</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Before we touch a single pixel, we learn your business. What's your sales process? Who are your best customers? How does the website fit into that journey?
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Understand your business model and sales process",
                  "Map how the website supports that process",
                  "Identify the biggest leaks and quick wins",
                  "Prioritize changes by impact and effort",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground border-l-2 border-primary pl-4">
                Low effort, high leverage—you don't have to figure it all out alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SECTION */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-[60rem] mx-auto">
              Search Engine <span className="text-[#f97015]">Optimization (SEO)</span> services that are proven
            </h2>
            <p className="text-muted-foreground max-w-[60rem] mx-auto">
              SEO isn't a bolt-on. It's woven into every optimization program we run—because visibility and conversion go hand in hand.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 max-w-[60rem] mx-auto">When it comes to SEO, one size does not fit all</h3>
              <p className="text-muted-foreground mb-6 max-w-[60rem] mx-auto">
                Your site's SEO needs depend on where you are today. Some sites need technical fixes. Others need content strategy. Most need a combination—prioritized by impact.
              </p>
              <ul className="space-y-3">
                {["Audit and fix technical issues holding you back", "Identify high-intent keywords you're missing", "Optimize existing content for better rankings", "Prepare for AI-driven search features", "Build authority through strategic content"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/assets/images/web-optimization/optimization-04.webp"
                alt="SEO specialist analyzing website performance data"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CRO SECTION */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/images/web-optimization/optimization-05.webp"
                alt="A/B testing diagram showing conversion optimization process"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-[60rem] mx-auto">
                Conversion Rate <span className="text-[#f97015]">Optimization </span> (CRO)
              </h2>
              <p className="text-muted-foreground mb-6">
                Traffic means nothing if visitors don't convert. CRO is the discipline of systematically improving the percentage of visitors who take action—demos, forms, calls, purchases.
              </p>
              <ul className="space-y-3 mb-6">
                {["A/B tests on headlines, layouts, CTAs", "Form simplification & microcopy", "Trust and proof placement", "Mobile-first conversion journeys"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <p className="font-semibold text-foreground mb-2">Our Guarantee</p>
                <p className="text-muted-foreground text-sm">
                  If we don't improve at least one key conversion metric within 90 days, we'll keep optimizing at no extra cost until we do.
                </p>
              </div>

              <Button variant="default" size="lg" asChild>
                <Link href="#what-to-expect">Get Your Optimization Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section id="what-to-expect" className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-[60rem] mx-auto">
                What to expect from a <span className="text-[#f97015]">website optimization</span> agency
              </h2>
              <p className="text-muted-foreground mb-6">
                Working with us is collaborative but not burdensome. We do the heavy lifting—you provide context and approvals. Here's what you get in your Website Optimization Plan:
              </p>

              <div className="bg-secondary rounded-xl p-6 border border-border mb-6">
                <h3 className="font-bold text-foreground mb-4">Your Website Optimization Plan includes:</h3>
                <ul className="space-y-3">
                  {valueStackItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-muted-foreground">
                You can implement the plan with us or on your own. Either way, you leave with tactical clarity.
              </p>
            </div>
            <div>
              <img
                src="/assets/images/web-optimization/optimization-06.webp"
                alt="Website optimization report and dashboard mockup"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-[60rem] mx-auto">Meet your <span className="text-[#f97015]">optimization team</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A multi-disciplinary team of SEO, CRO, content, analytics and UX specialists—working together on your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 bg-background rounded-2xl p-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">7.8+</p>
              <p className="text-muted-foreground">Avg client satisfaction score /10</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">30%</p>
              <p className="text-muted-foreground">Median improvement in key metrics</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">58%</p>
              <p className="text-muted-foreground">Of clients expand into ongoing programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO SERVICES LIST */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-[60rem] mx-auto">SEO consulting & <span className="text-[#f97015]">services</span></h2>
            <p className="text-muted-foreground">
              Whether you need a one-time audit or ongoing optimization, we tailor our approach to your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4 max-w-[60rem] mx-auto">SEO Strategy & Audits</h3>
              <ul className="space-y-2">
                {seoServices.strategy.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4 max-w-[60rem] mx-auto">On-site Optimization & Content</h3>
              <ul className="space-y-2">
                {seoServices.onsite.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4 max-w-[60rem] mx-auto">Ongoing Optimization & Reporting</h3>
              <ul className="space-y-2">
                {seoServices.ongoing.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center mt-8 text-muted-foreground">
            Not sure which you need?{" "}
            <Link href="#what-to-expect" className="text-primary hover:underline font-medium">
              Get Your Optimization Plan
            </Link>
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center max-w-[60rem] mx-auto">
              How to know if <span className="text-[#f97015]">website optimization</span> is right for you
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  This is for you if…
                </h3>
                <ul className="space-y-2">
                  {[
                    "You sell B2B, SaaS or high-consideration services",
                    "Your website is critical to sales conversations",
                    "You have traffic but not enough conversions",
                    "You're ready to treat your site as a growth asset",
                  ].map((item) => (
                    <li key={item} className="text-muted-foreground text-sm">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs">✕</span>
                  This is not a fit if…
                </h3>
                <ul className="space-y-2">
                  {[
                    "You're looking for the cheapest option",
                    "You don't have bandwidth for collaboration",
                    "You need a full redesign, not optimization",
                    "Your site gets minimal traffic to optimize",
                  ].map((item) => (
                    <li key={item} className="text-muted-foreground text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center max-w-[60rem] mx-auto">
              What most teams ask before they <span className="text-[#f97015]">hire us</span>
            </h2>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <details key={i} className="border border-border rounded-xl">
                  <summary className="px-6 py-4 cursor-pointer font-medium text-foreground bg-background hover:bg-secondary/50 transition-colors rounded-xl">
                    {faq.q}
                  </summary>
                  <div className="px-6 py-4 bg-secondary/30 border-t border-border rounded-b-xl">
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container-wide">
          <div className="grid gap-12 items-center justify-center">
            <div className="lg:col-span-2 text-primary-foreground">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-[60rem] mx-auto text-center">
                Put a proven website optimization team to work for you
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-6 max-w-[60rem] mx-auto text-center">
                Stop guessing what's wrong with your website. Get a clear, prioritized plan that shows exactly where the opportunities are—and how to capture them.
              </p>
              <p className="text-primary-foreground/70 mb-8 max-w-[60rem] mx-auto text-center">
                We'll review your site and send your Optimization Plan within 3–5 business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="xl" asChild>
                  <Link href="/contact">Get Your Optimization Plan</Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link href="/contact">Schedule a strategy call</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
