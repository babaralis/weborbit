"use client";

import { BriefForm } from "@/components/forms/BriefForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BriefPageContent() {
  const searchParams = useSearchParams();
  const businessName = searchParams.get("business") || "";

  return <BriefForm initialCompanyName={businessName} />;
}

export default function BriefPage() {
  return (
    <Suspense fallback={<div className="fixed inset-0 bg-background flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
      <BriefPageContent />
    </Suspense>
  );
}

