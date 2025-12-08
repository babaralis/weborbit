import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: {
    default: "Orbitline Digital Studio | Award-Winning Web Design & Digital Marketing Agency",
    template: "%s | Orbitline Digital Studio",
  },
  description: "Award-winning digital marketing, web design and web development for B2B, SaaS and service brands. We build websites that turn traffic into revenue—guaranteed.",
  keywords: ["web design agency", "digital marketing", "B2B website design", "SaaS website", "conversion optimization", "SEO agency"],
  authors: [{ name: "Orbitline Digital Studio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orbitline.studio",
    siteName: "Orbitline Digital Studio",
    title: "Orbitline Digital Studio | Websites That Convert",
    description: "Award-winning digital marketing, web design and web development. Websites that turn traffic into booked calls and revenue—guaranteed.",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
        width: 1200,
        height: 630,
        alt: "Orbitline Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OrbitlineDigital",
    title: "Orbitline Digital Studio | Websites That Convert",
    description: "Award-winning digital marketing, web design and web development. Websites that turn traffic into booked calls and revenue—guaranteed.",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  alternates: {
    canonical: "https://orbitline.studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}

