"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AbstractShapes } from "@/components/graphics/AbstractShapes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BriefFormData {
  companyName: string;
  slogan: string;
  industry: string;
  website: string;
  email: string;
  phone: string;
}

export function BriefForm({
  initialCompanyName = "",
  onClose,
}: {
  initialCompanyName?: string;
  onClose?: () => void;
}) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BriefFormData>({
    companyName: initialCompanyName,
    slogan: "",
    industry: "",
    website: "",
    email: "",
    phone: "",
  });

  const totalSteps = 6;

  const updateFormData = (field: keyof BriefFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName.trim() !== "";
      case 2:
        return true; // Optional
      case 3:
        return true; // Optional
      case 4:
        return true; // Optional
      case 5:
        return formData.email.trim() !== "";
      case 6:
        return true; // Optional
      default:
        return false;
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (canProceed()) {
      if (currentStep === totalSteps) {
        // After last step, redirect to thank-you page
        // Store form data in sessionStorage or pass as query params
        const formDataString = JSON.stringify(formData);
        sessionStorage.setItem('briefFormData', formDataString);
        router.push('/thank-you');
      } else {
        setDirection(1);
        nextStep();
      }
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    prevStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Your Company Name
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Input
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) => updateFormData("companyName", e.target.value)}
                required
                className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canProceed()) {
                    handleNext();
                  }
                }}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Slogan
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Input
                type="text"
                placeholder="Slogan (optional)"
                value={formData.slogan}
                onChange={(e) => updateFormData("slogan", e.target.value)}
                className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleNext();
                  }
                }}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Select Industry
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Select
                value={formData.industry}
                onValueChange={(value) => updateFormData("industry", value)}
              >
                <SelectTrigger className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white w-full min-w-full">
                  <SelectValue placeholder="Select Industry (optional)" />
                </SelectTrigger>
                <SelectContent className="z-[10001] bg-black border-white/20">
                  <SelectItem value="technology" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Technology</SelectItem>
                  <SelectItem value="saas" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">SaaS</SelectItem>
                  <SelectItem value="finance" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Finance</SelectItem>
                  <SelectItem value="healthcare" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Healthcare</SelectItem>
                  <SelectItem value="education" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Education</SelectItem>
                  <SelectItem value="retail" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Retail</SelectItem>
                  <SelectItem value="manufacturing" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Manufacturing</SelectItem>
                  <SelectItem value="consulting" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Consulting</SelectItem>
                  <SelectItem value="other" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Website Steps
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Select
                value={formData.website}
                onValueChange={(value) => updateFormData("website", value)}
              >
                <SelectTrigger className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white w-full min-w-full">
                  <SelectValue placeholder="Select Website (optional)" />
                </SelectTrigger>
                <SelectContent className="z-[10001] bg-black border-white/20">
                  <SelectItem value="new-website" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">New Website</SelectItem>
                  <SelectItem value="redesign" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Website Redesign</SelectItem>
                  <SelectItem value="ecommerce" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">E-commerce Website</SelectItem>
                  <SelectItem value="landing-page" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Landing Page</SelectItem>
                  <SelectItem value="web-app" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Web Application</SelectItem>
                  <SelectItem value="other" className="text-[#f97015] hover:text-[#f97015] hover:bg-black focus:text-[#f97015] focus:bg-black">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Your Email Address
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Input
                type="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                required
                className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canProceed()) {
                    handleNext();
                  }
                }}
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center" style={{ width: '600px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Enter Your Phone Number (Optional)
            </h2>
            <div className="max-w-xl mx-auto w-full">
              <Input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                className="h-14 text-base bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/60 w-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleNext();
                  }
                }}
              />
            </div>
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col overflow-hidden bg-black">
      {/* Background with same styling as hero section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Orange Radial Gradient - Right */}
        <div 
          className="absolute inset-0 pointer-events-none top-[-22rem]"
          style={{
            background: 'radial-gradient(circle at right center, rgba(249, 112, 21, 0.4) 0%, transparent 23%)'
          }}
        ></div>
        
        {/* Orange Radial Gradient - Left */}
        <div 
          className="absolute inset-0 pointer-events-none bottom-[-22rem]"
          style={{
            background: 'radial-gradient(circle at left center, rgba(249, 112, 21, 0.4) 0%, transparent 23%)'
          }}
        ></div>
      </div>

      {/* Header with Logo */}
      <header className="relative z-[10000] w-full py-4 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Webs Orbit Studio
          </div>
          {/* {onClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10 w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg"
            >
              <span className="text-2xl">×</span>
            </Button>
          )} */}
        </div>
      </header>

      {/* Navigation Arrows - Far Left and Right */}
      {currentStep > 1 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[10000] w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      )}

      {currentStep <= totalSteps && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          disabled={!canProceed()}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[10000] w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      )}

      {/* Content - Centered */}
      <div className="relative z-[10000] w-[80%] mx-auto px-4 flex-1 flex items-center justify-center">
        {/* Step Content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots - Bottom of Window (Hidden on step 7) */}
      {currentStep < totalSteps && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10000] flex justify-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index + 1 > currentStep ? 1 : -1);
                setCurrentStep(index + 1);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index + 1 === currentStep
                  ? "bg-white w-3 h-3"
                  : "bg-white/40 w-2 h-2"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

