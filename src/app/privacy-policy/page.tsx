"use client";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-hero/95 py-16 pt-[8rem] md:py-24 lg:py-28 relative overflow-hidden">
        <div className="container-wide relative z-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white text-center">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white text-center">
              Last updated: December 2, 2024
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container-wide mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Information We Collect
              </h2>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  1. Automatically Collected Information
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4">
                  When you visit our website, we automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>IP address and browser data</li>
                  <li>Device information</li>
                  <li>Location information</li>
                  <li>Language preferences</li>
                  <li>Operating system and platform</li>
                  <li>Pages viewed and actions taken on our site</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  2. Information You Provide
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4">
                  During account creation and service use, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Full name and contact information</li>
                  <li>Email address, and phone number</li>
                  <li>Billing address (where applicable)</li>
                  <li>Payment information (credit card or banking details)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                How We Use Your Information
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Process orders and deliver services</li>
                <li>Send important account notifications and updates</li>
                <li>
                  Share occasional offers, promotions, and blog content (you can
                  opt out anytime)
                </li>
                <li>Improve our services and user experience</li>
                <li>Prevent fraud and maintain security</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-base md:text-lg text-muted-foreground font-semibold">
                We never sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Email Communications
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                You may receive emails from us regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Order confirmations and updates</li>
                <li>Account security notifications</li>
                <li>Service announcements</li>
                <li>Marketing offers and promotions (optional)</li>
                <li>Blog posts and company news (optional)</li>
              </ul>
              <p className="text-base md:text-lg text-muted-foreground">
                Unsubscribe anytime by clicking the link at the bottom of any
                email or updating your preferences in your account settings.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Data Security
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                Your trust matters to us. We protect your information through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
                <li>Industry-standard encryption (SSL/TLS)</li>
                <li>Regular security audits and updates</li>
                <li>Restricted employee access to sensitive data</li>
                <li>Continuous monitoring for vulnerabilities</li>
              </ul>
              <div className="bg-secondary border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-base md:text-lg text-foreground font-semibold mb-2">
                  Important:
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-2">
                  Webs Orbit employees will never ask you to share credit
                  card details via email, phone, or chat. If someone does, do not
                  comply and report it to us immediately at{" "}
                  <a
                    href="mailto:security@websorbit.com"
                    className="text-primary hover:text-primary/80 underline font-semibold"
                  >
                    security@websorbit.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Your Rights and Choices
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Access your personal information at any time</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Delete your personal and associated data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
              <p className="text-base md:text-lg text-muted-foreground">
                Manage your information through your account dashboard or contact
                us at{" "}
                <a
                  href="mailto:privacy@websorbit.com"
                  className="text-primary hover:text-primary/80 underline font-semibold"
                >
                  privacy@websorbit.com
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Special Policies
              </h2>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  Children's Privacy
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  We do not knowingly collect information from children under 13.
                  If we discover such data has been submitted, we will delete it
                  immediately.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  Third-Party Links
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Our website may contain links to external sites. We are not
                  responsible for the privacy practices of these third-party
                  sites. We encourage you to review their privacy policies before
                  sharing any information.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  Testimonials
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  We feature customer testimonials with your permission. If you'd
                  like to modify or remove your testimonial, contact us at{" "}
                  <a
                      href="mailto:support@websorbit.com"
                    className="text-primary hover:text-primary/80 underline font-semibold"
                  >
                    support@websorbit.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  Pseudonym Policy
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4">
                  For consistency and ease of communication, our team may use
                  professional pseudonyms. This practice:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provides you with a consistent point of contact</li>
                  <li>Ensures a streamlined company culture</li>
                  <li>Protects employee privacy and promotes our global team</li>
                </ul>
                <p className="text-base md:text-lg text-muted-foreground mt-4">
                  All team members, regardless of name used, are bound by strict
                  confidentiality agreements.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                International Operations
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Your personal data may be handled by team members at any of our
                global service centers. All locations adhere to this privacy policy
                and maintain the same security standards through binding
                non-disclosure agreements.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Legal Disclosures
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                We may disclose your information when required to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Comply with legal obligations or court orders</li>
                <li>Cooperate with law enforcement investigations</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent fraud or abuse of our services</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Policy Updates
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                We may update this privacy policy periodically to reflect changes
                in our practices or legal requirements. When we make significant
                changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Notify you via email</li>
                <li>Post an update in your account dashboard</li>
                <li>Update the "Last Updated" date at the top of this page</li>
              </ul>
              <p className="text-base md:text-lg text-muted-foreground">
                Your continued use of our services after changes are posted
                constitutes acceptance of the updated policy.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Consumer Data Protection
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                We comply with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>PCI DSS (Payment Card Industry Data Security Standards)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

