"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, MessageSquare, X } from "lucide-react";
import Image from "next/image";
const navItems = [
  { label: "AI Agent", href: "/ai-agent" },
  { label: "Web Development", href: "/web-development" },
  { label: "Website Optimization", href: "/website-optimization" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check Zopim availability on mount
  useEffect(() => {
    const checkZopim = () => {
      if (typeof window !== 'undefined') {
        const zopim = (window as any).$zopim;
        if (zopim) {
          console.log('Zopim is available:', zopim);
        } else {
          console.log('Zopim not yet loaded');
        }
      }
    };
    
    // Check immediately
    checkZopim();
    
    // Check after a delay
    const timer = setTimeout(checkZopim, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const openZopimChat = (e: React.MouseEvent) => {
    e.preventDefault();
    // Close mobile menu if open
    setIsOpen(false);
    
    if (typeof window === 'undefined') return;
    
    // Function to open chat using Zopim API
    const openChat = () => {
      try {
        const zopim = (window as any).$zopim;
        
        if (!zopim) {
          console.warn('Zopim is not available');
          return;
        }
        
        // Zopim is a function that accepts a callback
        if (typeof zopim === 'function') {
          // Use Zopim's callback - this ensures Zopim is fully loaded
          zopim(function() {
            try {
              // Inside callback, $zopim is the API object
              const z = (window as any).$zopim;
              if (z && z.livechat && z.livechat.window) {
                // Try show() to open the chat window
                if (typeof z.livechat.window.show === 'function') {
                  z.livechat.window.show();
                  return;
                }
                // Fallback to toggle() if show() doesn't exist
                if (typeof z.livechat.window.toggle === 'function') {
                  z.livechat.window.toggle();
                  return;
                }
              }
            } catch (err) {
              console.error('Error in Zopim callback:', err);
            }
          });
        } 
        // If Zopim is already an object (fully initialized)
        else if (zopim.livechat && zopim.livechat.window) {
          if (typeof zopim.livechat.window.show === 'function') {
            zopim.livechat.window.show();
          } else if (typeof zopim.livechat.window.toggle === 'function') {
            zopim.livechat.window.toggle();
          }
        }
      } catch (error) {
        console.error('Error opening Zopim chat:', error);
      }
    };
    
    // Check if Zopim is already available
    const zopim = (window as any).$zopim;
    if (zopim) {
      openChat();
    } else {
      // Wait for Zopim script to load
      let retries = 0;
      const maxRetries = 25; // Increased retries
      const checkZopim = setInterval(() => {
        retries++;
        const zopimCheck = (window as any).$zopim;
        if (zopimCheck) {
          clearInterval(checkZopim);
          // Small delay to ensure Zopim is fully initialized
          setTimeout(() => {
            openChat();
          }, 100);
        } else if (retries >= maxRetries) {
          clearInterval(checkZopim);
          console.warn('Zopim chat not available after waiting. Please refresh the page.');
        }
      }, 200);
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-hero/95" : ""
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
              <Image
              src="/assets/images/Logo-original.svg"
              alt="Client logo"
              width={200}
              height={200}
              className="h-10 mx-auto "
            />
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>  
          <div className="hidden lg:block">
          <Button variant="hero" size="lg" className="shadow-glow-sm" asChild>
                <Link 
                  href="#" 
                  className="flex items-center gap-2"
                  onClick={openZopimChat}
                >
                  <MessageSquare className="w-4 h-4" />
                  Get Started
                </Link>
              </Button>
          </div>
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-hero/95 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-hero z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4">
                  <span className="text-white font-bold text-lg">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white hover:bg-primary/10 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-4">
                  <div className="flex flex-col">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`px-6 py-3 text-sm font-medium transition-colors ${
                          pathname === item.href
                            ? "text-white bg-primary/10 border-l-4 border-primary"
                            : "text-white/70 hover:text-white hover:bg-primary/5"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link 
                  href="#" 
                  className="flex items-center gap-2"
                  onClick={openZopimChat}
                >
                  <MessageSquare className="w-4 h-4" />
                  Get Started
                </Link>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
