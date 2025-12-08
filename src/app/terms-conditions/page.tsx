"use client";

import Link from "next/link";

export default function TermsConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero/95 py-16 pt-[8rem] md:py-24 lg:py-28 relative overflow-hidden">
        <div className="container-wide relative z-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white text-center">
              Terms and Conditions
            </h1>
            <p className="text-lg md:text-xl text-white text-center">
              Last updated: December 2, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="container-wide mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            {/* Section 1: Delivery Policy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                1. Delivery Policy
              </h2>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  Delivery Timeline
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Services are delivered according to the purchased package or
                  signed agreement. Factors influencing turnaround times include
                  service complexity and scope, speed of feedback, order
                  date/project queue, and accuracy of initial requirements.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  What Counts as "Delivered"?
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Delivery is considered complete when all agreed deliverables
                  are completed per project scope, final files are shared in
                  agreed formats, and work meets outlined standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  Cancellations Before Delivery
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Refund eligibility for cancellations before delivery depends
                  on the amount of work completed, terms in the
                  agreement/package, and the standard refund policy (Section 3).
                </p>
              </div>
            </div>

            {/* Section 2: Payment Policy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                2. Payment Policy
              </h2>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  Monthly Packages
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Full payment in advance is required for work to begin. Ongoing
                  services are billed monthly. Refunds are processed as per
                  Section 3.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  Pricing & Invoicing
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  All prices are exclusive of VAT and applicable taxes, which
                  will be added where required. Cost estimates are indicative
                  and subject to final confirmation after reviewing full
                  requirements.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  Additional Work & Rate Changes
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4">
                  <span className="font-semibold">Add-on services:</span> Work
                  outside the original quotation (e.g., extra design,
                  development, third-party services) will be charged separately
                  based on the current rate card.
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-4">
                  <span className="font-semibold">Rate revisions:</span> Hourly
                  or package rates may be updated once per twelve-month period
                  maximum.
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-4">
                  <span className="font-semibold">Price Increase/revision:</span>{" "}
                  Requires at least two (2) months' notice before any rate
                  change.
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  <span className="font-semibold">Your options:</span> You can
                  terminate the contract by providing three (3) months' written
                  notice within two (2) weeks of receiving a price-change
                  notification if you don't accept new rates.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  Late Payments
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Interest may be charged in accordance with applicable late
                  payment legislation, calculated daily until paid in full.
                  Services may be temporarily suspended. All outstanding amounts
                  become immediately due if the agreement is terminated. We may
                  offset amounts owed against amounts we owe you, where legally
                  permitted.
                </p>
              </div>
            </div>

            {/* Section 3: Refund Policy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                3. Refund Policy
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Refund requests are evaluated case-by-case within three (3)
                months from the purchase date.
              </p>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  3.1 When Refunds May Be Approved:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <span className="font-semibold">Copyright/Trademark Issues:</span>{" "}
                    If the delivered logo is proven to be copied or infringes
                    existing intellectual property.
                  </li>
                  <li>
                    <span className="font-semibold">Material Defects:</span> If
                    the final design is demonstrably defective or significantly
                    different from what was agreed or advertised.
                  </li>
                  <li>
                    <span className="font-semibold">Duplicate Orders:</span> For
                    accidentally placed duplicate orders for the same service.
                  </li>
                  <li>
                    <span className="font-semibold">Quality Review Required:</span>{" "}
                    All refund requests undergo internal quality assurance review.
                    If the team confirms the design is defective or unusable as
                    promised, up to 100% of the project fee may be refunded in
                    qualifying scenarios.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  3.2 Refund Timelines & Amounts:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <span className="font-semibold">Before initial concepts delivered:</span>{" "}
                    Up to 100% refund minus 10% processing fee.
                  </li>
                  <li>
                    <span className="font-semibold">Within 48 hours after receiving initial concepts:</span>{" "}
                    Up to 75% refund minus 10% processing fee.
                  </li>
                  <li>
                    <span className="font-semibold">Between 48-120 hours after initial delivery:</span>{" "}
                    Up to 35% refund minus 10% processing fee.
                  </li>
                  <li>
                    <span className="font-semibold">After 120 hours:</span>{" "}
                    Generally not available. You are encouraged to contact us to
                    explore remedies and improve the work rather than request a
                    refund.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  3.3 Important Project Terms:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <span className="font-semibold">Inactive Projects:</span> If
                    there is no communication for 30 consecutive days (except
                    pre-agreed extensions), the project may be placed on hold and
                    archived. A £50.00 reactivation fee applies to reactivate
                    archived projects.
                  </li>
                  <li>
                    <span className="font-semibold">Concept Approval:</span> Once
                    a concept is approved and revisions requested, the project
                    enters the refinement stage. Standard revision rights apply
                    from this point, and refund rights are generally voided after
                    concept approval.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  3.4 When Refunds Are NOT Available:
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4">
                  Refunds are not offered in situations such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Change of mind after work has commenced.</li>
                  <li>
                    Excessive revisions (e.g., revising branding guide, color
                    scheme, font selection, adding/removing elements, general
                    participation in large contests/broadcasts).
                  </li>
                  <li>
                    Copyright violations originating due to the client's own
                    design or work.
                  </li>
                  <li>
                    Work where the design was created according to the client's
                    submitted brief, files, or instructions.
                  </li>
                  <li>
                    Missing information from the client that fails to submit
                    required briefs or specifications, causing delays or
                    impacting outcomes.
                  </li>
                </ul>
              </div>
            </div>

            {/* Your Acceptance */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Your Acceptance
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                By placing an order, making a payment, or using any Website
                Optimax services, you confirm that you have read, understood,
                and agreed to these Terms & Conditions. This policy may be
                updated, and continued use of services after changes are posted
                constitutes acceptance of the updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

