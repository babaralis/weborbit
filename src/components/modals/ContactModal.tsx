"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
}

export function ContactModal({ isOpen, onClose, planName }: ContactModalProps) {
  const scrollPositionRef = useRef<number>(0);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call here
    
    // Save scroll position before closing
    scrollPositionRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    onClose();
  };

  const handleClose = () => {
    // Save scroll position before closing
    scrollPositionRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Lock body scroll when modal is open and preserve scroll position
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position BEFORE locking
      scrollPositionRef.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      
      // Lock scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Get the saved scroll position
      const savedScrollY = scrollPositionRef.current;
      
      // CRITICAL: Restore scroll position BEFORE removing fixed positioning
      // This prevents the jump to top
      if (savedScrollY > 0) {
        // Temporarily remove fixed to get accurate measurements
        const bodyStyle = document.body.style;
        const oldPosition = bodyStyle.position;
        const oldTop = bodyStyle.top;
        
        bodyStyle.position = '';
        bodyStyle.top = '';
        
        // Immediately set scroll position
        window.scrollTo(0, savedScrollY);
        document.documentElement.scrollTop = savedScrollY;
        document.body.scrollTop = savedScrollY;
        
        // Now remove remaining styles
        bodyStyle.width = '';
        bodyStyle.overflow = '';
        
        // Double check scroll position after a microtask
        Promise.resolve().then(() => {
          if (Math.abs(window.scrollY - savedScrollY) > 1) {
            window.scrollTo(0, savedScrollY);
          }
        });
      } else {
        // No scroll to restore, just unlock
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
      <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 ease-out"
        onClick={handleClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      ></div>

      {/* Modal - Fancy Box Style */}
      <div 
        className="relative z-[10001] bg-background rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col lg:flex-row transform transition-all duration-300 ease-out"
        style={{ 
          animation: 'modalPopIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-[10002] w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 flex items-center justify-center text-gray-800 dark:text-gray-200 transition-colors border border-gray-300 dark:border-gray-600 shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Get Started
            </h2>
            {planName && (
              <p className="text-muted-foreground">
                Interested in: <span className="text-primary font-semibold">{planName}</span>
              </p>
            )}
            <p className="text-sm text-muted-foreground mt-2">
              Fill out the form and one of our senior strategists will review your details and reply within 1 business day.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="sr-only">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="sr-only">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="companyName" className="sr-only">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="message" className="sr-only">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your needs *"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <p className="text-xs text-muted-foreground">
              <span className="text-primary">*</span> indicates required fields
            </p>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-primary/10 to-primary/5 p-6 md:p-8 overflow-y-auto border-t lg:border-t-0 lg:border-l border-border">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-muted-foreground">
                    Expert team with 15+ years of experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-muted-foreground">
                    Custom solutions tailored to your business
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-muted-foreground">
                    Fast response time - within 1 business day
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-muted-foreground">
                    Transparent pricing with no hidden fees
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                    ✓
                  </div>
                  <span className="text-muted-foreground">
                    Ongoing support and maintenance
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Email:</strong> info@Webs Orbit.com
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong> (312) 555-0123
                </p>
                <p>
                  <strong className="text-foreground">Address:</strong> 123 Digital Avenue, Suite 400, Chicago, IL 60601
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-bold text-foreground mb-3">What Happens Next?</h3>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>We review your requirements within 1 business day</li>
                <li>Schedule a strategy call to discuss your project</li>
                <li>Receive a detailed proposal with pricing</li>
                <li>Start your project with our expert team</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


