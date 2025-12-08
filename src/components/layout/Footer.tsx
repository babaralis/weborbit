import Link from "next/link";

const footerLinks = {
  quickLinks: [
    { label: "Web Design", href: "/web-development" },
    { label: "Web Development", href: "/web-development" },
    { label: "Website Optimization", href: "/website-optimization" },
    { label: "SEO Services", href: "/website-optimization" },
    { label: "CRO Services", href: "/website-optimization" },
    { label: "Portfolio", href: "/portfolio" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Careers", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Case Studies", href: "/about" },
    { label: "Website Audit", href: "/contact" },
    { label: "Newsletter", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-hero text-white">
      <div className="border-b border-white/10">
        <div className="container-wide py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-center sm:text-left">
            You're one project away from a website that finally pulls its weight.
          </p>
          <Link
            href="/contact"
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Talk to a strategist →
          </Link>
        </div>
      </div>

      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">O</span>
              </div>
              <span className="font-bold text-lg">Orbitline Digital</span>
            </Link>
            <p className="text-white/60 text-sm mb-4">
              Award-winning digital marketing, web design and development for B2B, SaaS and service brands.
            </p>
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Orbitline Digital Studio. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
                {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <p>Made with precision in Chicago</p>
        </div>
      </div>
    </footer>
  );
};
