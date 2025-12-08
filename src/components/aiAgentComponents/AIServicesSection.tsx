"use client";

import Link from "next/link";

export const AIServicesSection = () => {
  return (
    <section id="ai-features" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-wide mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-12 md:mb-16">
          <div className="w-full lg:w-8/12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 max-w-3xl mx-auto">
              AI That's{" "}
              <span className="text-primary">Actually Operational</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI services plug directly into your business, no-code,
              real-time, and trained on your systems. From handling customer
              support to qualifying leads or syncing bookings, our AI agents
              act like full-time staff across multiple platforms.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group rounded-xl p-[0.75rem] shadow-md h-full transition-all duration-200 border border-primary text-center pb-[2rem]">
            <div className="flex justify-center">
              <div className="w-[100%] min-w-[16.5rem] h-[13rem] rounded-3xl p-4 shadow-lg bg-gradient-to-br from-primary/60 to-primary/60">
                <div className="bg-white rounded-xl p-3 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold">
                    <i className="fas fa-robot text-primary"></i>
                    <span>AI Assistant</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="bg-gray-100 px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%]">
                      Hello! How can I help?
                    </div>
                    <div className="bg-primary text-white px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%] ml-auto">
                      I need support
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%]">
                      I'm here to assist you...
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-lg font-bold mb-3 mt-3">
              WhatsApp AI Agent
            </h5>
            <p className="text-sm md:text-base text-muted-foreground mb-4 ">
              Responds instantly using your live knowledge base, so your team
              isn't stuck replying to repetitive queries. Identifies upgrade
              or cross-sell opportunities from ticket patterns.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg h-12 rounded-md px-8 text-base w-full"
            >
              Request Access
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          {/* Calendly AI Agent */}
          <div className="group rounded-xl p-[0.75rem] shadow-md h-full transition-all duration-200 border border-primary text-center pb-[2rem]">
            <div className="flex justify-center">
              <div className="w-[100%] min-w-[16.5rem] h-[13rem] rounded-3xl p-4 shadow-lg bg-gradient-to-br from-primary/60 to-primary/60">
                <div className="bg-white rounded-xl p-3 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold">
                    <i className="fas fa-robot text-primary"></i>
                    <span>AI Scheduler</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="bg-gray-100 px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%]">
                      Schedule your appointment
                    </div>
                    <div className="bg-primary text-white px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%] ml-auto">
                      Book meeting
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%]">
                      Available slots found...
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-lg font-bold mb-3 mt-3">
              Calendly AI Agent
            </h5>
            <p className="text-sm md:text-base text-muted-foreground mb-4 ">
              Embeds Calendly booking links directly into AI conversations.
              Triggers after product inquiries, support needs, or sales
              interest. Syncs with CRMs to confirm meetings instantly.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg h-12 rounded-md px-8 text-base w-full"
            >
              Request Access
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          {/* HubSpot AI Agent */}
          <div className="group rounded-xl p-[0.75rem] shadow-md h-full transition-all duration-200 border border-primary text-center pb-[2rem]">
            <div className="flex justify-center">
              <div className="w-[100%] min-w-[16.5rem] h-[13rem] rounded-3xl p-4 shadow-lg bg-gradient-to-br from-primary/60 to-primary/60">
                <div className="bg-white rounded-xl p-3 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold">
                    <i className="fas fa-robot text-primary"></i>
                    <span>AI Analytics</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="bg-gray-100 px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%]">
                      Your analytics report
                    </div>
                    <div className="bg-primary text-white px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%] ml-auto">
                      Show insights
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%]">
                      Generating insights...
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-lg font-bold mb-3 mt-3">
              HubSpot AI Agent
            </h5>
            <p className="text-sm md:text-base text-muted-foreground mb-4 ">
              Captures and syncs lead data from chats directly into HubSpot.
              Automates follow-ups with workflows for sales and support teams.
              Provides real-time insights to boost conversions.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg h-12 rounded-md px-8 text-base w-full"
            >
              Request Access
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          {/* Shopify AI Agent */}
          <div className="group rounded-xl p-[0.75rem] shadow-md h-full transition-all duration-200 border border-primary text-center pb-[2rem]">
            <div className="flex justify-center">
              <div className="w-[100%] min-w-[16.5rem] h-[13rem] rounded-3xl p-4 shadow-lg bg-gradient-to-br from-primary/60 to-primary/60">
                <div className="bg-white rounded-xl p-3 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold">
                    <i className="fas fa-robot text-primary"></i>
                    <span>AI Shopping</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="bg-gray-100 px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%]">
                      Find products easily
                    </div>
                    <div className="bg-primary text-white px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%] ml-auto">
                      Show products
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-lg text-[0.7rem] max-w-[80%]">
                      Here are recommendations...
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-lg font-bold mb-3 mt-3">
              Shopify AI Agent
            </h5>
            <p className="text-sm md:text-base text-muted-foreground mb-4 ">
              Handles product, order, refund, and shipping queries instantly
              by pulling live data from your store. Detects customer drop-offs
              and friction points in the purchase journey.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg h-12 rounded-md px-8 text-base w-full"
            >
              Request Access
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
