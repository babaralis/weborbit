"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { TeamSection } from "@/components/sections/TeamSection";
import { FinalTestimonial } from "@/components/sections/FinalTestimonial";
import { TrustBadges } from "@/components/sections/TrustBadges";

const ratings = [
  {
    name: "Google",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/07/reviews-Google2023-500x214.jpg",
  },
  {
    name: "Clutch",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/07/reviews-Clutch2023-500x214.jpg",
  },
  {
    name: "Glassdoor",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/07/reviews-Glassdoor2023-500x214.jpg",
  },
];

const awards = [
  {
    name: "Web Excellence Awards",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/logoGrid-350x200-WebExcellenceAwards-200x115.png",
  },
  {
    name: "Top Web Design Company",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/clutch-web-design-25-200x115.webp",
  },
  {
    name: "Top Web Developers",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/clutch-web-developer-25-200x115.webp",
  },
  {
    name: "Top SEO Company",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/clutch-seo.-25webp-200x115.webp",
  },
  {
    name: "Top Digital Design Company",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/clutch-digital-design-25-200x115.webp",
  },
  {
    name: "Golden Trumpet Awards",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/logoGrid-350x200-PCC-GoldenTrumpetAward-200x115.png",
  },
];

const communityContributions = [
  {
    title: "The Revenue Website Playbook",
    description: "Our comprehensive guide distills 15+ years of insights into a practical framework for building websites that generate leads and revenue consistently.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/06/content-chem-book2-367x214.jpg",
    link: "#",
  },
  {
    title: "Digital Growth Summit",
    description: "An annual conference where marketing leaders share strategies on content, SEO, CRO, and AI — bringing together the best minds in digital growth.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/600x349-ContentJam@2x-367x213.png",
    link: "#",
  },
  {
    title: "Certified B Corporation",
    description: "We're committed to a sustainable future and to improving the social, economic, and environmental well-being of our community through responsible business practices.",
    image: "https://www.orbitmedia.com/wp-content/uploads/2023/08/bcorp-367x214.png",
    link: "#",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-section text-white py-16 md:py-24 lg:py-28 relative overflow-hidden" style={{ 'paddingTop': '10rem' }}>
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/assets/images/home/about-us.jpg"
            alt="About Us Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 z-10 pointer-events-none top-[-22rem]"
          style={{
            background: 'radial-gradient(circle at right center, rgba(249, 112, 21, 0.4) 0%, transparent 23%)'
          }}
        ></div>
        <div 
          className="absolute inset-0 z-10 pointer-events-none bottom-[-22rem]"
          style={{
            background: 'radial-gradient(circle at left center, rgba(249, 112, 21, 0.4) 0%, transparent 23%)'
          }}
        ></div>
        <div className="container-wide relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-[60rem] mx-auto text-white">
              Building <span className="text-[#f97015]">websites that build</span> businesses, since 2012
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Webs Orbit Studio exists to make the web more effective — one high-performing 
              website at a time. We combine strategy, design, development, SEO, and CRO under one 
              roof to create sites that actually drive revenue.
            </p>
            <p className="text-lg text-white/80">
              Transparent, skilled, and obsessed with results, our process keeps our team focused and 
              your business growing. We've helped hundreds of B2B, SaaS, and service companies turn 
              their websites into their best-performing marketing asset.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-[60rem] mx-auto">
                Meet the <span className="text-[#f97015]">experts</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                The Webs Orbitrs are specialists in web design, development, digital strategy, and 
                website optimization. We're focused, curious, and deeply committed to outcomes.
              </p>
              <p className="text-muted-foreground mb-6">
                Our edge isn't size — it's skill density. Every expert here is a direct contributor 
                to growth outcomes. No layers of account managers or junior staff learning on your 
                project. When you work with Webs Orbit, you work with senior operators who've done 
                this hundreds of times.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Get to know the team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-secondary relative group cursor-pointer">
                <img
                  src="https://www.orbitmedia.com/wp-content/uploads/2023/06/stephanie-walker-1200x1050-1-600x525.jpg"
                  alt="Webs Orbit team collaboration session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 font-medium">
                We're the Webs Orbitrs
              </p>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-12 lg:gap-16 items-center justify-center">
            <div className="order-1 lg:order-2 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-[60rem] mx-auto text-center">
                Giving back through <span className="text-[#f97015]">our community</span>
              </h2>
              <p className="text-muted-foreground mb-4 max-w-[60rem] mx-auto text-center">
                We believe great work contributes to more than revenue — it improves lives. Through 
                partnerships with local nonprofits, we've donated more than <strong>$500,000</strong> in 
                web design and development services to organizations making a real difference.
              </p>
              <p className="text-muted-foreground mb-6 max-w-[60rem] mx-auto text-center">
                We're always ready to volunteer for causes we believe in, from environmental cleanups 
                to mentoring the next generation of digital marketers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FinalTestimonial />
     <TrustBadges />
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Are you the next Webs Orbitr?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              If you're skilled, curious, and love making digital work better, you belong here. 
              We hire strong operators who enjoy improving things — people who are strategic, 
              collaborative, and transparent. Above all, people who love making clients successful.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/contact">
                Join our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

