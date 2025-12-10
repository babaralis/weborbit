import { ContactForm } from "@/components/forms/ContactForm";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Webs Orbit Studio",
  description: "Get in touch with Webs Orbit. Share your goals and we'll reply with clear next steps.",
};

const _serviceLinks = [
  {
    title: "Web Design Agency",
    links: ["Custom Website Design", "Responsive Design", "UI/UX Design", "Brand Identity"],
  },
  {
    title: "Web Development Agency",
    links: ["Custom Development", "CMS Integration", "E-commerce", "Web Applications"],
  },
  {
    title: "Website Management Agency",
    links: ["Hosting & Security", "Maintenance", "Content Updates", "Performance Monitoring"],
  },
  {
    title: "SEO Agency",
    links: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
  },
  {
    title: "CRO Agency",
    links: ["A/B Testing", "Landing Pages", "Form Optimization", "User Research"],
  },
  {
    title: "Analytics Agency",
    links: ["GA4 Setup", "Dashboard Creation", "Conversion Tracking", "Reporting"],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-section text-white py-16 md:py-24 lg:py-28 relative overflow-hidden" style={{ paddingTop: '10rem' }}>
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/assets/images/contact/banner.jpg"
            alt="Contact Banner"
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
              <span className="text-[#f97015]">Contact</span> Us
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Ready to talk? Fill out the form and one of our senior strategists will review your details and reply within 1 business day with next steps.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Work with Webs Orbit
                </h1>
                <p className="text-lg text-muted-foreground">
                  Ready to talk? Fill out the form and one of our senior strategists will review 
                  your details and reply within 1 business day with next steps. No fluff, no 
                  pressure — just clear answers, expert direction, and the fastest path toward 
                  website performance gains.
                </p>
              </div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-foreground mb-2">Webs Orbit Support</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Are you a current client with questions about your site?
                </p>
                <Link href="#" className="text-primary text-sm font-medium hover:underline">
                  Contact Support
                </Link>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Visit Webs Orbit</h3>
                <p className="text-muted-foreground text-sm">
                  123 Digital Avenue, Suite 400<br />
                  Chicago, IL 60601
                </p>
                <Link href="#" className="text-primary text-sm font-medium hover:underline inline-flex items-center mt-2">
                  Map/Directions
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">
                  Main: <a href="tel:+13125550123" className="text-primary hover:underline">(312) 555-0123</a>
                </p>
                <p className="text-muted-foreground">
                  Support: <a href="tel:+13125550124" className="text-primary hover:underline">(312) 555-0124</a>
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground text-sm">
                  456 Business Center, Suite 200<br />
                  Evanston, IL 60201
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

