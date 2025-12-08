import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowRight, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Webs Orbit Studio",
  description: "Get in touch with Webs Orbit. Share your goals and we'll reply with clear next steps.",
};

const serviceLinks = [
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

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const sent =
    typeof searchParams?.sent === "string"
      ? searchParams?.sent === "1"
      : Array.isArray(searchParams?.sent)
      ? searchParams?.sent?.[0] === "1"
      : false;
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
              <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
                <p className="text-sm text-muted-foreground mb-6">
                  <span className="text-primary">*</span> indicates required fields
                </p>
                {sent && (
                  <div className="mb-6 rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800">
                    Message sent! We'll get back to you within 1 business day with next steps.
                  </div>
                )}
                <form method="post" action="/api/contact" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="sr-only">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name *"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="sr-only">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name *"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="sr-only">Work Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Work Email *"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="sr-only">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName" className="sr-only">Company Name</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyWebsite" className="sr-only">Company Website</Label>
                      <Input
                        id="companyWebsite"
                        name="companyWebsite"
                        placeholder="Company Website"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="sr-only">Tell us about your needs</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your needs *"
                      rows={6}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="hearAboutUs" className="sr-only">How did you hear about us?</Label>
                    <Input
                      id="hearAboutUs"
                      name="hearAboutUs"
                      placeholder="How did you hear about us?"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    By clicking the button below, you are agreeing to our{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <Button type="submit" size="lg">
                    Send my message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    Speak directly with a strategist — no junior reps. We aim to provide clarity 
                    in the first reply.
                  </p>
                </form>
              </div>
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

