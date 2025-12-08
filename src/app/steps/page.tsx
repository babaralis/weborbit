"use client";

import { BriefForm } from "@/components/forms/BriefForm";
import { useSearchParams, useRouter } from "next/navigation";

export default function StepsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const businessName = searchParams.get("business") || "";

  const handleClose = () => {
    router.push("/");
  };

  return <BriefForm initialCompanyName={businessName} onClose={handleClose} />;
}

