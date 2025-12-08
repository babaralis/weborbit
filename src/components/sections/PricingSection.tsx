"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ContactModal } from "@/components/modals/ContactModal";
import { useState } from "react";

const pricingData = {
  "html-website": [
    {
      name: "SINGLE PAGE",
      description: "",
      price: "$299",
      priceNote: "",
      features: [
        "1 Page Static Website",
        "W3C Certified HTML",
        "JQuery Slider Banner",
        "Mobile Responsive Layout",
        "JQuery Slider Banners",
        "Products/Services Section",
        "Portfolio/Gallery Section",
        "Contact Us Section",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "Web Page Banner Design",
        "Royalty Free Stock Image",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: false,
    },
    {
      name: "5 PAGES",
      description: "",
      price: "$499",
      priceNote: "",
      features: [
        "5 Pages Static Website",
        "W3C Certified HTML",
        "JQuery Slider Banner",
        "Mobile Responsive Layout",
        "Home Page Layout",
        "Company Profile Page",
        "Product/Service Page",
        "Portfolio/Gallery Page",
        "Contact Us Page",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "5 Web Page Banners Design",
        "5 Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: true,
    },
    {
      name: "8 PAGES",
      description: "",
      price: "$699",
      priceNote: "",
      features: [
        "8 Pages Static Website",
        "W3C Certified HTML",
        "JQuery Slider Banner",
        "Mobile Responsive Layout",
        "Home Page Layout",
        "Company Profile Page",
        "Main Product/Service Page",
        "Products/Services Inner Pages",
        "Portfolio/Gallery Page",
        "Contact Us Page",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "8 Web Page Banners Design",
        "8 Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: false,
    },
    {
      name: "12 PAGES",
      description: "",
      price: "$899",
      priceNote: "",
      features: [
        "12 Pages Static Website",
        "W3C Certified HTML",
        "JQuery Slider Banner",
        "Mobile Responsive Layout",
        "Home Page Layout",
        "Company Profile Page",
        "Main Product/Service Page",
        "Products/Services Inner Pages",
        "Portfolio/Gallery Page",
        "Contact Us Page",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "12 Web Page Banners Design",
        "12 Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: false,
    },
  ],
  "cms-website": [
    {
      name: "SINGLE PAGE CMS WEBSITE",
      description: "",
      price: "$399",
      priceNote: "",
      features: [
        "1 Page Custom Website",
        "CMS Admin Panel",
        "JQuery Slider Banner",
        "Mobile Responsive Layout",
        "Company Profile Section",
        "Products/Services Section",
        "Portfolio/Gallery Section",
        "Contact Us Section",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "Royalty Free Stock Image",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: false,
    },
    {
      name: "5 PAGES CMS WEBSITE",
      description: "",
      price: "$799",
      priceNote: "",
      features: [
        "5 Pages Custom Website",
        "CMS Admin Panel",
        "JQuery Slider Banner",
        "Mobile Responsive Layout",
        "Home Page Layout",
        "Company Profile Page",
        "Product/Service Page",
        "Portfolio/Gallery Page",
        "Contact Us Page",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "5 Web Page Banners Design",
        "5 Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: true,
    },
    {
      name: "8 PAGES CMS WEBSITE",
      description: "",
      price: "$999",
      priceNote: "",
      features: [
        "8 Pages Custom Website",
        "CMS Admin Panel",
        "JQuery Slider Banner",
        "Mobile Responsive Layout",
        "Home Page Layout",
        "Company Profile Page",
        "Main Product/Service Page",
        "Products/Services Inner Pages",
        "Portfolio/Gallery Page",
        "Contact Us Page",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "8 Web Page Banners Design",
        "8 Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: false,
    },
    {
      name: "12 PAGES CMS WEBSITE",
      description: "",
      price: "$1299",
      priceNote: "",
      features: [
        "12 Pages Custom Website",
        "CMS Admin Panel",
        "JQuery Slider Banner",
        "Mobile Responsive Layout",
        "Home Page Layout",
        "Company Profile Page",
        "Main Product/Service Page",
        "Products/Services Inner Pages",
        "Portfolio/Gallery Page",
        "Contact Us Page",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "12 Web Page Banners Design",
        "12 Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
        "3 Month LiveChat Support Agent",
      ],
      cta: "Order Now",
      popular: false,
    },
  ],
  "ecom-website": [
    {
      name: "BASIC E-COM WEBSITE",
      description: "",
      price: "$1499",
      priceNote: "",
      features: [
        "Upto 10 Products & Categories",
        "Product Attributes & Features",
        "General Product Search",
        "Shopping Cart Integration",
        "Single Payment Module",
        "CMS Admin Panel",
        "Order Management System",
        "Newsletter Subscription",
        "MySQL Database Creation",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "Mobile Responsive Layout",
        "JQuery Slider Banners",
        "8 Web Page Banners Design",
        "8 Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: false,
    },
    {
      name: "EXTENDED E-COM WEBSITE",
      description: "",
      price: "$2499",
      priceNote: "",
      features: [
        "Upto 25 Products & Categories",
        "Product Attributes & Features",
        "Product Search",
        "Product Filtration",
        "Shopping Cart Integration",
        "Upto 2 Payment Modules",
        "CMS Admin Panel",
        "Order Management System",
        "Newsletter Subscription",
        "Website Blog Section",
        "MySQL Database Creation",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "Mobile Responsive Layout",
        "JQuery Slider Banner",
        "12 Web Page Banners Design",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: true,
    },
    {
      name: "PROFESSIONAL E-COM WEBSITE",
      description: "",
      price: "$3999",
      priceNote: "",
      features: [
        "Upto 50 Products & Categories",
        "Product Attributes & Features",
        "Product Search & Filtration",
        "Product Reviews & Rating",
        "Product Favorites & Wishlist",
        "Spreadsheet Products Import",
        "Shopping Cart Integration",
        "Promo Code/Coupon Feature",
        "Upto 3 Payment Modules",
        "CMS Admin Panel",
        "Order Management System",
        "Inventory Management",
        "Order Shipment & Tracking",
        "User Signup & Login",
        "Personalized User Dashboard",
        "Newsletter Subscription",
        "Website Blog Section",
        "MySQL Database Creation",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "Mobile Responsive Layout",
        "JQuery Slider Banner",
        "12 Web Page Banners Design",
        "12 Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: false,
    },
    {
      name: "ENTERPRISE E-COM WEBSITE",
      description: "",
      price: "$5999",
      priceNote: "",
      features: [
        "Upto 100 Products & Categories",
        "Product Attributes & Features",
        "Product Search & Filtration",
        "Product Reviews & Rating",
        "Product Favorites & Wishlist",
        "Spreadsheet Products Import",
        "Shopping Cart Integration",
        "Promo Code/Coupon Feature",
        "Multiple Payment Modules",
        "CMS Admin Panel",
        "Order Management System",
        "Inventory Management",
        "Sales Reporting Feature",
        "Order Shipment & Tracking",
        "User Signup & Login",
        "Personalized User Dashboard",
        "Newsletter Subscription",
        "Website Blog Section",
        "MySQL Database Creation",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "Mobile Responsive Layout",
        "JQuery Slider Banner",
        "12 Web Page Banners Design",
        "12 Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
      ],
      cta: "Order Now",
      popular: false,
    },
  ],
  "marketplace-portal": [
    {
      name: "PRODUCT BASED MARKETPLACE",
      description: "Portal",
      price: "",
      priceNote: "",
      features: [
        "Unlimited Sellers",
        "Unlimited Selling Products",
        "Unlimited Categories/Industries",
        "Products Attributes & Features",
        "Products Search & Filtration",
        "Product Reviews & Rating",
        "Seller Reviews & Rating",
        "Seller Login & Dashboard",
        "Clients Login & Dashboard",
        "Shopping Cart Integration",
        "Promo Code/Coupon Feature",
        "Multiple Payment Options",
        "Seller Inventory Management",
        "Order Shipment & Tracking",
        "Newsletter Subscription",
        "Admin Control Panel",
        "Paid Advertising & Ads Placement",
        "Website Blog Section",
        "MySQL Database Creation",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "Mobile Responsive Layout",
        "JQuery Slider Banners",
        "Web Page Banners Design",
        "Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
        "3 Month LiveChat Agent",
      ],
      cta: "Discuss Now",
      popular: false,
    },
    {
      name: "SERVICE BASED MARKETPLACE",
      description: "Portal",
      price: "",
      priceNote: "",
      features: [
        "Unlimited Providers",
        "Unlimited Service Offerings",
        "Unlimited Categories/Industries",
        "Services Attributes & Features",
        "Services Search & Filtration",
        "Service Reviews & Rating",
        "Provider Reviews & Rating",
        "Provider Login & Dashboard",
        "Clients Login & Dashboard",
        "Checkout Integration",
        "Promo Code/Coupon Feature",
        "Multiple Payment Options",
        "Order Status & Progress",
        "Newsletter Subscription",
        "Website Blog Section",
        "Admin Control Panel",
        "Paid Advertising & Ads Placement",
        "MySQL Database Creation",
        "Lead Inquiry Form",
        "Website Favicon Design",
        "Mobile Responsive Layout",
        "JQuery Slider Banners",
        "Web Page Banners Design",
        "Royalty Free Stock Images",
        "Advance UI/UX Effects",
        "Social Media Integrations",
        "3 Month LiveChat Agent",
      ],
      cta: "Discuss Now",
      popular: true,
    },
    {
      name: "NETWORKING BASED MARKETPLACE",
      description: "Portal",
      price: "",
      priceNote: "",
      features: [
        "Unlimited Users",
        "Multiple User Profiles & Pages",
        "Unlimited Groups/Communities",
        "Users Login & Dashboard",
        "1-on-1 Chats & Messages",
        "Multiple Chat rooms",
        "User Connections & Invitations",
        "Users Networking Circle",
        "User Profile Banners & Pictures",
        "Users Posts & Interactions",
        "Users Status Online/Offline",
        "Posts/Media Sharing & Tagging",
        "User Privacy Settings",
        "MySQL Database Creation",
        "Website Favicon Design",
        "Admin Control Panel",
        "Paid Advertising & Ads Placement",
        "Mobile Responsive Layout",
        "Advance UI/UX Effects",
        "i.e. Job Portals",
        "i.e. Social Networking Sites",
      ],
      cta: "Discuss Now",
      popular: false,
    },
  ],
};

export const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const renderPricingCards = (plans: typeof pricingData["html-website"]) => {
    const gridCols = plans.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";
    return (
      <div className={`grid ${gridCols} gap-6 lg:gap-8 mt-10 justify-center mx-auto mt-10`}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-background rounded-2xl p-6 lg:p-8 border popular-pricing-card h-fit ${
              plan.popular
                ? "border-primary shadow-xl scale-105"
                : "border-border"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-2">
                <span className="text-xs text-muted-foreground">{plan.priceNote}</span>
              </div>
              <div className="text-4xl font-bold text-[#f97015]">{plan.price}</div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.popular ? "default" : "outline"} 
              size="lg" 
              className="w-full"
              asChild
            >
              <Link href="">{plan.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Transparent pricing for{" "}
            <span className="text-primary">serious teams.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project is unique, but here's a starting point. Get a detailed proposal with your Website Revenue Plan.
          </p>
        </div>
        <Tabs defaultValue="html-website" className="w-full">
          <div className="flex justify-center lg:mb-[5rem] mb-[2rem]">
            <TabsList className="bg-transparent border-none p-0 gap-2">
              <TabsTrigger
                value="html-website"
                className="data-[state=active]:bg-[#f97015] data-[state=active]:text-white data-[state=active]:border-[#f97015] border border-[#f97015] text-[#f97015] bg-transparent px-6 py-2 rounded-md transition-all"
              >
                HTML Website
              </TabsTrigger>
              <TabsTrigger
                value="cms-website"
                className="data-[state=active]:bg-[#f97015] data-[state=active]:text-white data-[state=active]:border-[#f97015] border border-[#f97015] text-[#f97015] bg-transparent px-6 py-2 rounded-md transition-all"
              >
                CMS Website
              </TabsTrigger>
              <TabsTrigger
                value="ecom-website"
                className="data-[state=active]:bg-[#f97015] data-[state=active]:text-white data-[state=active]:border-[#f97015] border border-[#f97015] text-[#f97015] bg-transparent px-6 py-2 rounded-md transition-all"
              >
                E-Com Website
              </TabsTrigger>
              <TabsTrigger
                value="marketplace-portal"
                className="data-[state=active]:bg-[#f97015] data-[state=active]:text-white data-[state=active]:border-[#f97015] border border-[#f97015] text-[#f97015] bg-transparent px-6 py-2 rounded-md transition-all"
              >
                Marketplace Portal
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="html-website">
            {renderPricingCards(pricingData["html-website"])}
          </TabsContent>

          <TabsContent value="cms-website">
            {renderPricingCards(pricingData["cms-website"])}
          </TabsContent>

          <TabsContent value="ecom-website">
            {renderPricingCards(pricingData["ecom-website"])}
          </TabsContent>

          <TabsContent value="marketplace-portal">
            {renderPricingCards(pricingData["marketplace-portal"])}
          </TabsContent>
        </Tabs>
        <div className="mt-[9rem] bg-primary/5 rounded-xl p-8 border border-primary/20 w-full mx-auto text-center">
          <h3 className="font-bold text-foreground mb-2">Not sure which plan fits?</h3>
          <p className="text-muted-foreground mb-4">
            Start with a free Website Revenue Plan. We'll assess your needs and recommend the right scope and investment level.
          </p>
          <Button 
            variant="default" 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            Get Your Free Assessment
          </Button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        planName="Free Assessment"
      />
    </section>
  );
};
