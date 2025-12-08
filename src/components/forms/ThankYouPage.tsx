"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function ThankYouPage() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div    
          className="absolute inset-0 pointer-events-none top-[-22rem]"
          style={{
            background: 'radial-gradient(circle at right center, rgba(249, 112, 21, 0.4) 0%, transparent 23%)'
          }}
        ></div>
        <div 
          className="absolute inset-0 pointer-events-none bottom-[-22rem]"
          style={{
            background: 'radial-gradient(circle at left center, rgba(249, 112, 21, 0.4) 0%, transparent 23%)'
          }}
        ></div>
      </div>
      <header className="relative z-[10000] w-full py-4 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Orbitline Digital Studio
          </div>
        </div>
      </header>
      <div className="relative z-[10000] w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center py-12">
        <div className="text-center w-full max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 px-4">
            Thank You, How Would You Like To Proceed?
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 px-4">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-colors">
              <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/assets/images/thank-you/thank-you-01.jpg"
                  alt="Live Chat Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Live Chat Support</h3>
                <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                  Let's talk! Share your design requirements with one of our designers to get a perfect logo that you envisioned for.
                </p>
                <Button className="w-full bg-[#f97015] hover:bg-[#f97015]/90 text-sm sm:text-base">
                  Chat With Us
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-colors">
              <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/assets/images/thank-you/thank-you-02.jpg"
                  alt="Pricing Packages"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Pricing Packages</h3>
                <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                  Checkout our budget friendly packages & pricing plans tailor made for startups & growing businesses of all sizes.
                </p>
                <Button className="w-full bg-[#f97015] hover:bg-[#f97015]/90 text-sm sm:text-base" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                <Image
                  src="/assets/images/thank-you/thank-you-03.jpg"
                  alt="Creative Portfolio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Creative Portfolio</h3>
                <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                  Checkout our amazing logo projects that we have designed for our recent customers to give their brand an identity.
                </p>
                <Button className="w-full bg-[#f97015] hover:bg-[#f97015]/90 text-sm sm:text-base" asChild>
                  <Link href="/portfolio">Visit Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

