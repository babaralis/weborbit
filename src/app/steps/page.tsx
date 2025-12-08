"use client";

import { BriefForm } from "@/components/forms/BriefForm";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function StepsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const businessName = searchParams.get("business") || "";

  const handleClose = () => {
    router.push("/");
  };

  return <BriefForm initialCompanyName={businessName} onClose={handleClose} />;
}

export default function StepsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StepsPageContent />
    </Suspense>
  );
}

