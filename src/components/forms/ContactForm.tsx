"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitContactEmail } from "@/lib/email";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: Record<string, string>) => void;
  }
}

// Analytics tracking helper
const trackEvent = (event: { action: string; category: string; label: string }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
    });
  }
};

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        email: formData.get('email') as string,
        company: formData.get('companyName') as string,
        website: formData.get('companyWebsite') as string,
        budget: formData.get('budget') as string || 'Not specified',
        timeline: formData.get('timeline') as string || 'Not specified',
        message: formData.get('message') as string,
      };

      trackEvent({
        action: "form_submit",
        category: "Contact",
        label: "B2B Contact Form",
      });

      await submitContactEmail(data);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsLoading(false);
      setIsSubmitted(true);
      
      trackEvent({
        action: "form_success",
        category: "Contact",
        label: "B2B Contact Form Completed",
      });
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Thank you for reaching out!
          </h3>
          <p className="text-muted-foreground mb-6">
            We've received your message and will get back to you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background rounded-xl p-6 md:p-8 border border-border">
      <p className="text-sm text-muted-foreground mb-6">
        <span className="text-primary">*</span> indicates required fields
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="sr-only">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name *"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="sr-only">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name *"
              required
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          <div>
            <Label htmlFor="phone" className="sr-only">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          <div>
            <Label htmlFor="companyWebsite" className="sr-only">Company Website</Label>
            <Input
              id="companyWebsite"
              name="companyWebsite"
              placeholder="Company Website"
              disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>

        <div>
          <Label htmlFor="hearAboutUs" className="sr-only">How did you hear about us?</Label>
          <Input
            id="hearAboutUs"
            name="hearAboutUs"
            placeholder="How did you hear about us?"
            disabled={isLoading}
          />
        </div>

        <p className="text-sm text-muted-foreground">
          By clicking the button below, you are agreeing to our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <Button type="submit" size="lg" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send my message
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-sm text-muted-foreground">
          Speak directly with a strategist — no junior reps. We aim to provide clarity 
          in the first reply.
        </p>
      </form>
    </div>
  );
}

